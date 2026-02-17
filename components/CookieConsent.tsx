"use client";

import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/lib/cookies";
import { trackAction } from "@/lib/analytics";
import { Cookie, X, ChevronDown, ChevronUp, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = getCookie("redlix_cookie_consent");
    if (!consent) {
      // Add a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (callback?: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
      if (callback) callback();
    }, 300); // Wait for animation
  };

  const handleAccept = () => {
    setCookie("redlix_cookie_consent", "accepted", { expires: 365 });
    setCookie("redlix_analytics_enabled", "true", { expires: 365 });

    trackAction({
      type: "cookie_consent",
      element: "banner",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { action: "accepted" },
    });

    handleClose();
  };

  const handleReject = () => {
    setCookie("redlix_cookie_consent", "rejected", { expires: 365 });
    setCookie("redlix_analytics_enabled", "false", { expires: 365 });

    trackAction({
      type: "cookie_consent",
      element: "banner",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { action: "rejected" },
    });

    handleClose();
  };

  if (!showBanner) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] max-w-[calc(100vw-2rem)] w-full md:w-[400px]",
        "transition-all duration-500 transform",
        isClosing ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
      )}
    >
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-6 overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] pointer-events-none -mr-10 -mt-10"></div>

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-red-50 dark:bg-red-500/10 rounded-xl text-red-600 dark:text-red-400 shrink-0">
              <Cookie size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                We value your privacy
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and personalize content.
              </p>
            </div>
          </div>

          {/* Expandable Details Section */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              showDetails ? "max-h-[300px] opacity-100 mb-4" : "max-h-0 opacity-0"
            )}
          >
            <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4 text-xs space-y-3 mb-2 border border-gray-100 dark:border-zinc-800">
              <div className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-green-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 block">Essential</span>
                  <span className="text-gray-500 dark:text-gray-500">Required for the site to function properly. Cannot be disabled.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Activity size={14} className="text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 block">Analytics</span>
                  <span className="text-gray-500 dark:text-gray-500">Helps us understand how you use our site to improve it.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-xl transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-lg shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Accept All
              </button>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center justify-center gap-1 py-1"
            >
              {showDetails ? "Hide Details" : "Preferences & Details"}
              {showDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CookieConsent;
