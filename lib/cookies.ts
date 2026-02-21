export interface CookieOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {
  if (typeof window === "undefined") return;

  const {
    expires = 365,
    path = "/",
    domain,
    secure = true,
    sameSite = "lax",
  } = options;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (expires) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }

  if (path) {
    cookieString += `; path=${path}`;
  }

  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  if (secure) {
    cookieString += `; secure`;
  }

  cookieString += `; sameSite=${sameSite}`;

  document.cookie = cookieString;
};

export const getCookie = (name: string): string | null => {
  if (typeof window === "undefined") return null;

  const nameEQ = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }

  return null;
};

export const deleteCookie = (name: string, path: string = "/"): void => {
  if (typeof window === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
};

export const getAllCookies = (): Record<string, string> => {
  if (typeof window === "undefined") return {};

  const cookies: Record<string, string> = {};
  const cookieArray = document.cookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie) {
      const [name, ...valueParts] = cookie.split("=");
      const value = valueParts.join("=");
      cookies[decodeURIComponent(name)] = decodeURIComponent(value);
    }
  }

  return cookies;
};
