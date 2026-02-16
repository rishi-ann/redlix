import { useCallback } from "react";
import { trackAction, trackButtonClick, trackLinkClick, trackFormInteraction } from "@/lib/analytics";

export const useTracking = () => {
  const trackClick = useCallback((element: string, metadata?: Record<string, any>) => {
    trackAction({
      type: "click",
      element,
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata,
    });
  }, []);

  const trackButton = useCallback((buttonName: string, location?: string) => {
    trackButtonClick(buttonName, location);
  }, []);

  const trackLink = useCallback((linkUrl: string, linkText?: string) => {
    trackLinkClick(linkUrl, linkText);
  }, []);

  const trackForm = useCallback((formName: string, action: string) => {
    trackFormInteraction(formName, action);
  }, []);

  return {
    trackClick,
    trackButton,
    trackLink,
    trackForm,
  };
};
