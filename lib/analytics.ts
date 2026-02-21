import { setCookie, getCookie } from "./cookies";

export interface UserAction {
  type: string;
  element: string;
  page: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface UserSession {
  sessionId: string;
  startTime: number;
  pageViews: number;
  actions: UserAction[];
  referrer?: string;
  userAgent?: string;
}

const SESSION_COOKIE = "redlix_session_id";
const ACTIONS_COOKIE = "redlix_user_actions";
const SESSION_START_COOKIE = "redlix_session_start";
const MAX_ACTIONS_STORED = 100;

export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const getOrCreateSession = (): UserSession => {
  if (typeof window === "undefined") {
    return {
      sessionId: "",
      startTime: Date.now(),
      pageViews: 0,
      actions: [],
    };
  }

  let sessionId = getCookie(SESSION_COOKIE);
  let sessionStart = getCookie(SESSION_START_COOKIE);

  if (!sessionId || !sessionStart) {
    sessionId = generateSessionId();
    sessionStart = Date.now().toString();
    setCookie(SESSION_COOKIE, sessionId, { expires: 1 });
    setCookie(SESSION_START_COOKIE, sessionStart, { expires: 1 });
  }

  const actions = getStoredActions();

  return {
    sessionId: sessionId || "",
    startTime: parseInt(sessionStart || "0", 10),
    pageViews: parseInt(getCookie("redlix_page_views") || "0", 10),
    actions,
    referrer: document.referrer || undefined,
    userAgent: navigator.userAgent || undefined,
  };
};

export const trackPageView = (path: string): void => {
  if (typeof window === "undefined") return;

  const session = getOrCreateSession();
  const pageViews = session.pageViews + 1;

  setCookie("redlix_page_views", pageViews.toString(), { expires: 1 });
  setCookie("redlix_last_page", path, { expires: 1 });

  trackAction({
    type: "page_view",
    element: "page",
    page: path,
    timestamp: Date.now(),
    metadata: {
      pageViews,
      sessionDuration: Date.now() - session.startTime,
    },
  });
};

export const trackAction = (action: UserAction): void => {
  if (typeof window === "undefined") return;

  const actions = getStoredActions();
  actions.push(action);

  if (actions.length > MAX_ACTIONS_STORED) {
    actions.shift();
  }

  try {
    setCookie(ACTIONS_COOKIE, JSON.stringify(actions), { expires: 7 });
  } catch (e) {
    console.error("Failed to store user action:", e);
  }

  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action.type, {
      event_category: "user_interaction",
      event_label: action.element,
      value: action.metadata,
    });
  }
};

export const getStoredActions = (): UserAction[] => {
  if (typeof window === "undefined") return [];

  const actionsCookie = getCookie(ACTIONS_COOKIE);
  if (!actionsCookie) return [];

  try {
    return JSON.parse(actionsCookie) as UserAction[];
  } catch {
    return [];
  }
};

export const trackClick = (element: string, metadata?: Record<string, any>): void => {
  trackAction({
    type: "click",
    element,
    page: window.location.pathname,
    timestamp: Date.now(),
    metadata,
  });
};

export const trackScroll = (percentage: number): void => {
  const session = getOrCreateSession();
  const lastScroll = parseInt(getCookie("redlix_last_scroll") || "0", 10);

  if (percentage > lastScroll + 10) {
    setCookie("redlix_last_scroll", percentage.toString(), { expires: 1 });
    trackAction({
      type: "scroll",
      element: "page",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { percentage },
    });
  }
};

export const trackFormInteraction = (formName: string, action: string): void => {
  trackAction({
    type: "form_interaction",
    element: formName,
    page: window.location.pathname,
    timestamp: Date.now(),
    metadata: { action },
  });
};

export const trackButtonClick = (buttonName: string, location?: string): void => {
  trackClick(`button_${buttonName}`, {
    location: location || window.location.pathname,
    buttonName,
  });
};

export const trackLinkClick = (linkUrl: string, linkText?: string): void => {
  trackClick(`link_${linkUrl}`, {
    url: linkUrl,
    text: linkText,
    isExternal: linkUrl.startsWith("http") && !linkUrl.includes(window.location.hostname),
  });
};

export const getUserPreferences = (): Record<string, any> => {
  if (typeof window === "undefined") return {};

  const preferencesCookie = getCookie("redlix_preferences");
  if (!preferencesCookie) return {};

  try {
    return JSON.parse(preferencesCookie);
  } catch {
    return {};
  }
};

export const saveUserPreference = (key: string, value: any): void => {
  if (typeof window === "undefined") return;

  const preferences = getUserPreferences();
  preferences[key] = value;

  try {
    setCookie("redlix_preferences", JSON.stringify(preferences), { expires: 365 });
  } catch (e) {
    console.error("Failed to save user preference:", e);
  }
};
