"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, ArrowRight, Plus, Trash2, Check, Copy, Globe, ChevronLeft } from "lucide-react";

export default function RaiseTicketPage() {
    const [formData, setFormData] = useState({
        name: "",
        clientId: "",
        description: "",
        authorizedPerson: "",
    });
    const [urls, setUrls] = useState([{ value: "" }]);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [ticketId, setTicketId] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleUrlChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrls = [...urls];
        newUrls[index].value = e.target.value;
        setUrls(newUrls);
    };

    const addUrlField = () => setUrls([...urls, { value: "" }]);
    const removeUrlField = (index: number) => {
        const newUrls = urls.filter((_, i) => i !== index);
        setUrls(newUrls);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const pageUrl = urls.map(u => u.value.trim()).filter(Boolean).join(", ");
        if (!pageUrl) {
            alert("Please provide at least one valid URL or Page.");
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("/api/raise-ticket", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, pageUrl }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setTicketId(data.ticketId);
                setFormData({
                    name: "",
                    clientId: "",
                    description: "",
                    authorizedPerson: "",
                });
                setUrls([{ value: "" }]);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white selection:bg-red-100 selection:text-red-700">

            {/* LEFT PANEL: Branding (HIDDEN ON MOBILE) */}
            <div className="hidden lg:flex relative w-full lg:w-[40%] bg-[#050505] p-16 flex-col justify-between overflow-hidden">
                {/* Architectural Watermark */}
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
                        Request a support <br />execution.
                    </h2>
                    <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                        Describe the changes needed for your system, and our engineers will queue it for production.
                    </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 text-gray-500 text-sm">
                    <Globe size={16} />
                    <span>Global Support Infrastructure</span>
                </div>
            </div>

            {/* RIGHT PANEL: Form Area (FULL WIDTH ON MOBILE) */}
            <div className="w-full lg:w-[60%] bg-white p-6 md:p-12 lg:p-32 overflow-y-auto">

                {/* Mobile-only Header */}
                <div className="lg:hidden flex items-center justify-between mb-10">
                    <Link href="/">
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                            alt="Redlix"
                            className="h-6"
                        />
                    </Link>
                    <Link href="/" className="text-zinc-400">
                        <X size={20} />
                    </Link>
                </div>

                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-md mx-auto lg:mx-0"
                        >
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8">
                                <Check size={32} />
                            </div>
                            <h3 className="text-3xl font-semibold text-zinc-950 mb-4">Ticket logged.</h3>
                            <p className="text-zinc-500 mb-10 leading-relaxed">
                                Your request is now in our execution queue.
                            </p>

                            <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Ticket reference</p>
                                    <p className="text-2xl font-mono font-bold text-zinc-950 tracking-tighter">{ticketId}</p>
                                </div>
                                <button className="p-3 hover:bg-zinc-200 rounded-xl transition-colors text-zinc-400">
                                    <Copy size={20} />
                                </button>
                            </div>

                            <button onClick={() => setStatus("idle")} className="text-red-600 font-semibold text-sm hover:underline">
                                Raise another request
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto lg:mx-0">
                            <form onSubmit={handleSubmit} className="space-y-10">

                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                        01. Identity
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group space-y-2">
                                            <label className="text-[13px] font-medium text-zinc-400 group-focus-within:text-red-600 transition-colors">Full name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none focus:border-red-600 transition-colors text-zinc-950 placeholder:text-zinc-300"
                                                required
                                            />
                                        </div>
                                        <div className="group space-y-2">
                                            <label className="text-[13px] font-medium text-zinc-400 group-focus-within:text-red-600 transition-colors">Client id</label>
                                            <input
                                                type="text"
                                                id="clientId"
                                                value={formData.clientId}
                                                onChange={handleChange}
                                                placeholder="CID-XXXX"
                                                className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none focus:border-red-600 transition-colors text-zinc-950 placeholder:text-zinc-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                        02. Scope
                                    </div>
                                    <div className="space-y-6">
                                        {urls.map((urlObj, index) => (
                                            <div key={index} className="flex gap-4 items-end group">
                                                <div className="flex-1 space-y-2">
                                                    <label className="text-[11px] text-zinc-400">Target page or url</label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. Home page"
                                                        className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none focus:border-red-600 transition-colors text-zinc-950 placeholder:text-zinc-300"
                                                        value={urlObj.value}
                                                        onChange={(e) => handleUrlChange(index, e)}
                                                        required
                                                    />
                                                </div>
                                                {urls.length > 1 && (
                                                    <button type="button" onClick={() => removeUrlField(index)} className="p-2 text-zinc-300 hover:text-red-600 transition-colors">
                                                        <Trash2 size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={addUrlField}
                                            className="inline-flex items-center gap-2 text-[13px] font-semibold text-zinc-400 hover:text-red-600 transition-colors"
                                        >
                                            <Plus size={14} /> Add another location
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                        03. Description
                                    </div>
                                    <div className="group space-y-2">
                                        <label className="text-[13px] font-medium text-zinc-400 group-focus-within:text-red-600 transition-colors">Detailed changes needed</label>
                                        <textarea
                                            id="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Describe the changes required..."
                                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 outline-none focus:border-red-600/30 focus:ring-4 focus:ring-red-600/5 transition-all text-zinc-950 placeholder:text-zinc-300 resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="group space-y-2">
                                    <label className="text-[13px] font-medium text-zinc-400 group-focus-within:text-red-600 transition-colors">Authorized submitter</label>
                                    <input
                                        type="text"
                                        id="authorizedPerson"
                                        value={formData.authorizedPerson}
                                        onChange={handleChange}
                                        placeholder="Name of authorized person"
                                        className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none focus:border-red-600 transition-colors text-zinc-950 placeholder:text-zinc-300"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full group bg-black hover:bg-red-600 text-white py-5 rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-3 disabled:bg-zinc-200"
                                >
                                    {status === "loading" ? "Processing..." : "Submit request"}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                {status === "error" && (
                                    <p className="text-red-500 text-sm font-medium text-center">There was an error submitting your request. Please ensure all inputs are valid (e.g. valid Client ID formatting) and try again.</p>
                                )}
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-20 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-400 font-medium">
                    <p>© {new Date().getFullYear()} Redlix Systems Execution</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-red-600 transition-colors">Terms</Link>
                        <Link href="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Simple X icon for mobile
const X = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
