"use client";

import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/lib/cookies";
import { trackAction } from "@/lib/analytics";
import { Cookie, X, Shield, BarChart3, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = getCookie("redlix_cookie_consent");
    if (!consent) {
      // Add a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  const handleAccept = () => {
    setCookie("redlix_cookie_consent", "accepted", { expires: 365 });
    setCookie("redlix_analytics_enabled", "true", { expires: 365 });
    trackConsent("accepted");
    handleClose();
  };

  const handleReject = () => {
    setCookie("redlix_cookie_consent", "rejected", { expires: 365 });
    setCookie("redlix_analytics_enabled", "false", { expires: 365 });
    trackConsent("rejected");
    handleClose();
  };

  const trackConsent = (action: string) => {
    trackAction({
      type: "cookie_consent",
      element: "banner",
      page: window.location.pathname,
      timestamp: Date.now(),
      metadata: { action },
    });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-[420px]"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-6 overflow-hidden relative group">

            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5">

              {/* Header Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-2xl shrink-0 shadow-sm border border-red-100/50">
                  <Cookie size={22} strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[17px] font-semibold text-gray-900 tracking-tight flex items-center gap-2">
                    Cookie Preferences
                    <span className="text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Privacy</span>
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                    We use cookies to enhance your browsing experience and analyze site traffic.
                  </p>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 -mt-1 -mr-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pt-2 pb-4">
                      <div className="flex items-start gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100/50">
                        <div className="mt-0.5 text-green-600 bg-green-100 p-1.5 rounded-lg">
                          <Shield size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-gray-900">Essential</p>
                          <p className="text-[11px] text-gray-500 leading-snug">Required for core site functionality. Always active.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100/50">
                        <div className="mt-0.5 text-blue-600 bg-blue-100 p-1.5 rounded-lg">
                          <BarChart3 size={14} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-gray-900">Analytics</p>
                          <p className="text-[11px] text-gray-500 leading-snug">Helps us improve our services by tracking usage.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleReject}
                    className="px-4 py-3 text-[13px] font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-200/50 active:scale-[0.98]"
                  >
                    Decline All
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-3 text-[13px] font-semibold text-white bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg shadow-red-600/20 transition-all hover:shadow-red-600/30 active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
                  >
                    Accept All
                    <ChevronRight size={14} className="opacity-70 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={3} />
                  </button>
                </div>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-[11px] font-medium text-gray-400 hover:text-gray-600 transition-colors text-center py-1 flex items-center justify-center gap-1"
                >
                  {showDetails ? "Hide Details" : "Manage Preferences"}
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
