"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#F8F9FB] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-gray-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center items-center opacity-30">
                <span className="text-[60px] sm:text-[100px] md:text-[240px] font-black text-red-500/10 tracking-tighter uppercase whitespace-nowrap">
                    Redlix
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-8 mb-16 sm:mb-20 md:mb-24">

                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center group w-fit">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                                alt="Redlix Logo"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed max-w-70">
                            Strategic web design, and campaigns tailored to drive result and conversions.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        <h4 className="text-gray-900 font-bold text-[14px] sm:text-[15px]">Company</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {[
                                { name: "Services", href: "#" },
                                { name: "Achievements", href: "#achievements" },
                                { name: "FAQs", href: "#faqs" },

                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-500 hover:text-red-600 text-[14px] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        <h4 className="text-gray-900 font-bold text-[14px] sm:text-[15px]">Socials</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {[
                                { name: "Email", href: "mailto:hello@redlix.com" },
                                { name: "Instagram", href: "#" },
                                { name: "LinkedIn", href: "#" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-red-600 text-[14px] transition-colors flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <ArrowRight size={12} className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                        <h4 className="text-gray-900 font-bold text-[14px] sm:text-[15px]">Newsletter</h4>
                        <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed max-w-sm">
                            Stay ahead with design & marketing tips and strategies that drive results.
                        </p>

                        <div className="relative max-w-md w-full">
                            <div className="relative flex items-center bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-2 hover:border-red-500 transition-colors shadow-sm shadow-black/5">
                                <span className="text-gray-400 mr-2 text-[13px] sm:text-[14px]">@</span>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="bg-transparent border-none outline-none text-[13px] sm:text-[14px] text-gray-900 w-full placeholder:text-gray-400"
                                />
                                <button className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all active:scale-95 shrink-0 ml-2">
                                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 sm:pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <p className="text-gray-500 text-[13px] sm:text-[14px] text-center md:text-left">
                        ©{currentYear} Redlix All rights reserved
                    </p>

                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-end">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors">Terms of Service</Link>
                        <Link href="/cookies-policy" className="text-gray-500 hover:text-gray-900 text-[14px] transition-colors">Cookies Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
