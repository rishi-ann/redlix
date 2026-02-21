"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Loader2,
    Check,
    Instagram,
    Linkedin,
    Twitter,
    Globe
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <footer className="relative bg-[#050505] text-white pt-24 pb-4 overflow-hidden">

            {/* 1. THE ARCHITECTURAL RED WATERMARK */}
            {/* Perfectly centered at the bottom, using an outline-style for premium feel */}
            <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none overflow-hidden z-0">
                <h1 className="text-[28vw] font-bold text-center leading-none tracking-tighter opacity-20 select-none pointer-events-none"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #dc2626', // Red-600
                    }}
                >
                    redlix
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* 2. MAIN CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">

                    {/* Brand & Integrated Newsletter */}
                    <div className="lg:col-span-6 space-y-12">
                        <div className="space-y-6">
                            <Link href="/" className="inline-block transition-transform hover:scale-105">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                                    alt="Redlix"
                                    className="h-10 brightness-0 invert"
                                />
                            </Link>
                            <p className="text-gray-400 text-xl leading-relaxed max-w-md">
                                Strategic design and engineering for brands that demand a competitive edge.
                            </p>
                        </div>

                        {/* Newsletter Integrated into the flow */}
                        <div className="max-w-md pt-4">
                            <p className="text-sm font-medium mb-2 text-white/60">Stay updated with our newsletter</p>
                            <form onSubmit={handleSubscribe} className="relative group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-red-600 transition-all text-sm pr-12 placeholder:text-gray-600"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : status === "success" ? (
                                        <Check size={20} className="text-green-500" />
                                    ) : (
                                        <ArrowRight size={20} />
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Navigation Link Groups */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-[13px] font-bold text-red-600 tracking-wide">Company</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Services", href: "/#services" },
                                    { name: "Achievements", href: "/#achievements" },
                                    { name: "FAQs", href: "/#faqs" },
                                    { name: "Careers", href: "/careers" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[15px] text-gray-400 hover:text-white transition-all duration-300">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[13px] font-bold text-red-600 tracking-wide">Support</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Maintenance", href: "/maintenance" },
                                    { name: "Raise a ticket", href: "/raise-ticket" },
                                    { name: "Track ticket", href: "/track-ticket" },
                                    { name: "Contact", href: "/#contact" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[15px] text-gray-400 hover:text-white transition-all duration-300">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h4 className="text-[13px] font-bold text-red-600 tracking-wide">Connect</h4>
                            <div className="flex flex-col gap-4">
                                <a href="#" className="text-[15px] text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                                    <Instagram size={16} className="group-hover:text-red-600" /> Instagram
                                </a>
                                <a href="#" className="text-[15px] text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                                    <Linkedin size={16} className="group-hover:text-red-600" /> LinkedIn
                                </a>
                                <a href="#" className="text-[15px] text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                                    <Twitter size={16} className="group-hover:text-red-600" /> Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. SUB-FOOTER BAR */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8 pb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Globe size={14} />
                            <span>Worldwide Digital Studio</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <Link href="/privacy-policy" className="text-gray-600 hover:text-white text-xs transition-colors">Privacy policy</Link>
                            <Link href="/terms" className="text-gray-600 hover:text-white text-xs transition-colors">Terms of service</Link>
                            <Link href="/cookies-policy" className="text-gray-600 hover:text-white text-xs transition-colors">Cookie settings</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <p className="text-gray-600 text-xs">© {currentYear} REDLIX</p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 group"
                        >
                            <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;