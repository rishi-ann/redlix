"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView, trackScroll } from "@/lib/analytics";
import { getCookie } from "@/lib/cookies";

const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    const analyticsEnabled = getCookie("redlix_analytics_enabled");
    if (analyticsEnabled === "false") return;

    trackPageView(pathname);

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage = Math.round(
          ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
        );
        trackScroll(scrollPercentage);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [pathname]);

  useEffect(() => {
    const analyticsEnabled = getCookie("redlix_analytics_enabled");
    if (analyticsEnabled === "false") return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const element = target.closest("a, button, [role='button']");
      if (!element) return;

      const elementType = element.tagName.toLowerCase();
      const elementId = element.id || element.className || "unknown";
      const elementText = element.textContent?.trim().substring(0, 50) || "";

      if (elementType === "a") {
        const href = (element as HTMLAnchorElement).href;
        import("@/lib/analytics").then(({ trackLinkClick }) => {
          trackLinkClick(href, elementText);
        });
      } else if (elementType === "button" || element.getAttribute("role") === "button") {
        import("@/lib/analytics").then(({ trackButtonClick }) => {
          trackButtonClick(elementId, window.location.pathname);
        });
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
};

export default AnalyticsTracker;
