"use client";

import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "@/lib/cookies";
import { trackAction } from "@/lib/analytics";
import { Cookie, X, Shield, BarChart3, ChevronRight, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = getCookie("redlix_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setShowBanner(false);

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
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 sm:px-6 sm:pb-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0A0A0B]/90 backdrop-blur-2xl border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-[2rem] p-5 sm:p-8 relative overflow-hidden">

              {/* Subtle Red Radial Accent */}
              <div className="absolute top-0 left-1/4 w-64 h-32 bg-red-600/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Left: Message */}
                <div className="flex items-center gap-6 max-w-2xl">
                  <div className="hidden sm:flex p-4 bg-white/5 border border-white/10 text-red-500 rounded-2xl shrink-0">
                    <Cookie size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-medium text-lg leading-tight">
                      We use cookies to enhance your experience.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      By clicking "Accept all", you agree to the storing of cookies on your device to enhance site navigation and analyze site usage.
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors order-3 sm:order-1"
                  >
                    <Settings2 size={14} />
                    {showDetails ? "Hide settings" : "Cookie settings"}
                  </button>

                  <button
                    onClick={handleReject}
                    className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all order-2"
                  >
                    Decline
                  </button>

                  <button
                    onClick={handleAccept}
                    className="w-full sm:w-auto px-10 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-lg shadow-red-600/20 active:scale-[0.98] flex items-center justify-center gap-2 order-1 sm:order-3"
                  >
                    Accept all
                    <ChevronRight size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Expandable Preferences (Sentence Case) */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-8 pt-8 border-t border-white/5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="mt-1 text-green-500 bg-green-500/10 p-2 rounded-lg">
                          <Shield size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Essential cookies</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-1">These are required for basic site functionality and security. They cannot be turned off.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="mt-1 text-red-500 bg-red-500/10 p-2 rounded-lg">
                          <BarChart3 size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Performance cookies</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-1">These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Icon for Desktop */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;