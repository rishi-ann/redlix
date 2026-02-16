"use client";

import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/lib/cookies";
import { trackAction } from "@/lib/analytics";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = getCookie("redlix_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("redlix_cookie_consent", "accepted", { expires: 365 });
    setCookie("redlix_analytics_enabled", "true", { expires: 365 });
    setShowBanner(false);
    trackAction({
      type: "cookie_consent",
      element: "banner",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { action: "accepted" },
    });
  };

  const handleReject = () => {
    setCookie("redlix_cookie_consent", "rejected", { expires: 365 });
    setCookie("redlix_analytics_enabled", "false", { expires: 365 });
    setShowBanner(false);
    trackAction({
      type: "cookie_consent",
      element: "banner",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { action: "rejected" },
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Cookie Preferences
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and store your preferences. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences at any time.
            </p>
            {showDetails && (
              <div className="mt-3 text-xs text-gray-500 space-y-1">
                <p><strong>Essential Cookies:</strong> Required for the site to function properly.</p>
                <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
                <p><strong>Preference Cookies:</strong> Remember your settings and preferences.</p>
              </div>
            )}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs text-red-600 hover:text-red-700 mt-2 underline"
            >
              {showDetails ? "Hide Details" : "Learn More"}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
