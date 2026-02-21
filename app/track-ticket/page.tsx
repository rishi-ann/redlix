"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, FileText, Clock, CheckCircle, ChevronRight, X, Globe } from "lucide-react";

export default function TrackTicketPage() {
    const [ticketId, setTicketId] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "not_found">("idle");
    const [ticketData, setTicketData] = useState<any>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ticketId.trim()) return;

        setStatus("loading");
        // Simulated API Delay
        setTimeout(() => {
            // For demo: if ID is RLX-DEMO, show success
            if (ticketId.toUpperCase().includes("RLX")) {
                setTicketData({
                    ticketId: ticketId.toUpperCase(),
                    status: "IN_PROGRESS",
                    name: "Digital Transformation Project",
                    clientId: "CID-8821",
                    pageUrl: "https://redlix.co.in/dashboard",
                    description: "Refactor the authentication flow and add biometric support.",
                    authorizedPerson: "Rishi Rohan",
                    createdAt: new Date().toISOString()
                });
                setStatus("success");
            } else {
                setStatus("not_found");
            }
        }, 1200);
    };

    const getStatusInfo = (ticketStatus: string) => {
        switch (ticketStatus) {
            case "OPEN":
                return { label: "Open", color: "text-blue-600", bg: "bg-blue-50", icon: <Clock className="w-4 h-4" /> };
            case "IN_PROGRESS":
                return { label: "In Progress", color: "text-amber-600", bg: "bg-amber-50", icon: <Loader2 className="w-4 h-4 animate-spin" /> };
            case "RESOLVED":
                return { label: "Resolved", color: "text-green-600", bg: "bg-green-50", icon: <CheckCircle className="w-4 h-4" /> };
            default:
                return { label: ticketStatus, color: "text-zinc-600", bg: "bg-zinc-50", icon: <FileText className="w-4 h-4" /> };
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white selection:bg-red-100 selection:text-red-700">

            {/* LEFT PANEL: Branding (HIDDEN ON MOBILE) */}
            <div className="hidden lg:flex relative w-full lg:w-[40%] bg-[#050505] p-16 flex-col justify-between overflow-hidden">
                <div className="absolute bottom-0 left-[-10%] pointer-events-none select-none">
                    <h1 className="text-[15vw] font-bold leading-none tracking-tighter opacity-10"
                        style={{ color: 'transparent', WebkitTextStroke: '1px #dc2626' }}>
                        redlix
                    </h1>
                </div>

                <Link href="/" className="relative z-10 transition-transform hover:scale-105 inline-block w-fit">
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                        alt="Redlix"
                        className="h-8 brightness-0 invert"
                    />
                </Link>

                <div className="relative z-10 space-y-6">
                    <div className="w-12 h-[2px] bg-red-600"></div>
                    <h2 className="text-5xl font-semibold text-white tracking-tight leading-tight">
                        Track your <br />execution status.
                    </h2>
                    <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                        Enter your unique ticket ID to view real-time progress on your support request.
                    </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 text-gray-500 text-sm font-medium">
                    <Globe size={16} />
                    <span>Real-time Support Sync</span>
                </div>
            </div>

            {/* RIGHT PANEL: Form Area */}
            <div className="w-full lg:w-[60%] bg-white p-6 md:p-12 lg:p-24 overflow-y-auto flex flex-col">

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between mb-12">
                    <Link href="/"><img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png" alt="Redlix" className="h-6" /></Link>
                    <Link href="/" className="text-zinc-400"><X size={20} /></Link>
                </div>

                {/* SEARCH SECTION - Moved to Top */}
                <div className="max-w-2xl w-full mx-auto lg:mx-0 pt-4 sm:pt-8">
                    <div className="mb-10">
                        <h1 className="text-3xl font-semibold text-zinc-950 mb-2 tracking-tight">Track Ticket</h1>
                        <p className="text-zinc-400 text-[15px]">Check the status of your active requests.</p>
                    </div>

                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-12">
                        <div className="relative flex-1 group">
                            <input
                                type="text"
                                value={ticketId}
                                onChange={(e) => setTicketId(e.target.value)}
                                placeholder="TKT-XXXX-XXXX"
                                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 outline-none focus:border-red-600/30 focus:ring-4 focus:ring-red-600/5 transition-all text-zinc-950 font-mono placeholder:text-zinc-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading" || !ticketId.trim()}
                            className="bg-zinc-950 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 disabled:bg-zinc-200"
                        >
                            {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : "Track"}
                            <ChevronRight size={18} />
                        </button>
                    </form>

                    <AnimatePresence mode="wait">
                        {status === "not_found" && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm font-medium mb-8">
                                Ticket not found. Please verify the ID and try again.
                            </motion.p>
                        )}

                        {status === "success" && ticketData && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-8 space-y-8 shadow-sm mb-12"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">System Reference</p>
                                        <h2 className="text-2xl font-mono font-bold text-zinc-950">{ticketData.ticketId}</h2>
                                    </div>
                                    {(() => {
                                        const info = getStatusInfo(ticketData.status);
                                        return (
                                            <div className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${info.bg} ${info.color}`}>
                                                {info.icon} {info.label}
                                            </div>
                                        );
                                    })()}
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Client</p>
                                        <p className="text-sm font-semibold text-zinc-950">{ticketData.name}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ID</p>
                                        <p className="text-sm font-semibold text-zinc-950">{ticketData.clientId}</p>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Description</p>
                                    <p className="text-[14px] text-zinc-600 leading-relaxed bg-white p-5 rounded-2xl border border-zinc-100">
                                        {ticketData.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* CREATIVE IMAGE - Frameless and Floating */}
                <div className="mt-auto pt-10 flex justify-center lg:justify-end overflow-hidden">
                    <motion.img
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771648113/undraw_progress-indicator_c14b_1_q7t0vc.svg"
                        alt="Support Illustration"
                        className="max-w-md w-full h-auto object-contain pointer-events-none select-none mix-blend-multiply opacity-80"
                        // Note: Replace this URL with your actual creative illustration or 3D asset
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                </div>

                {/* Footer Bar */}
                <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-400 font-medium">
                    <p>© {new Date().getFullYear()} Redlix Execution Tracking</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-red-600 transition-colors">Terms</Link>
                        <Link href="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}