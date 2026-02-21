"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Globe, Plus } from "lucide-react";
import { trackButtonClick, trackLinkClick } from "@/lib/analytics";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services", id: "services" },
        { name: "Achievements", href: "#achievements", id: "achievements" },
        { name: "FAQs", href: "#faqs", id: "faqs" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id?: string) => {
        e.preventDefault();
        trackLinkClick(href, id || href);
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 sm:px-6 sm:py-6 pointer-events-none">
            <nav
                className={`max-w-7xl mx-auto transition-all duration-700 rounded-[1.5rem] border pointer-events-auto ${scrolled
                        ? "bg-white/70 backdrop-blur-2xl border-gray-200/50 shadow-[0_10px_40px_rgba(0,0,0,0.04)] py-3 px-5 sm:px-6"
                        : "bg-white border-transparent py-4 px-6 sm:px-8 shadow-sm"
                    }`}
            >
                <div className="flex items-center justify-between">

                    {/* LEFT SECTION: Logo + Divider + Navigation */}
                    <div className="flex items-center">
                        <Link href="/" className="relative z-[110] flex items-center shrink-0">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                                alt="Redlix Logo"
                                className="h-7 sm:h-8 w-auto transition-all duration-500"
                            />
                        </Link>

                        {/* Architectural Divider */}
                        <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-6 lg:mx-8" />

                        {/* Desktop Links (Left Aligned) */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                                    className="relative text-[13px] lg:text-[14px] font-medium text-gray-500 hover:text-black transition-colors cursor-pointer group py-1"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SECTION: CTA & Mobile Trigger */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Status Indicator (Visible on Desktop) */}
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full mr-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </span>
                            <span className="text-[11px] font-medium text-gray-500">Available</span>
                        </div>

                        <div className="hidden md:block">
                            <a
                                href="https://cal.com/redlix.co.in/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white transition-all duration-500 bg-black rounded-xl hover:bg-red-600 hover:rounded-full active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10 text-[13px]">Book a call</span>
                                <Plus size={14} className="relative z-10 ml-2 group-hover:rotate-45 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-900 border border-gray-100"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col pt-32 px-8 pb-12"
                        >
                            <div className="space-y-8">
                                <p className="text-[11px] font-bold text-red-600 uppercase tracking-widest">Menu</p>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link, idx) => (
                                        <motion.a
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href, link.id)}
                                            className="text-4xl font-semibold text-gray-900 flex items-center justify-between"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={24} className="text-gray-300" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto space-y-6">
                                <div className="h-[1px] w-full bg-gray-100" />
                                <a
                                    href="https://cal.com/redlix.co.in/30min"
                                    className="w-full py-5 bg-black text-white rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3"
                                >
                                    Book Now <ArrowUpRight />
                                </a>
                                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                    <Globe size={14} />
                                    <span>Based in London, Worldwide</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;