"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { trackButtonClick, trackLinkClick } from "@/lib/analytics";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
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
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } else {
            window.location.href = href;
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 py-3 sm:py-4">
            <nav
                className={`max-w-6xl mx-auto transition-all duration-300 rounded-full border border-gray-100 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-2 px-4 sm:px-6"
                    : "bg-white py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 shadow-sm"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                            alt="Redlixx Logo"
                            className="h-7 sm:h-8 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.id)}
                                className="text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <a href="https://cal.com/redlix.co.in/30min" target="_blank" rel="noopener noreferrer" onClick={() => trackButtonClick("book_now_navbar", "navbar")}>
                            <button className="group relative px-6 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95 shadow-lg shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-700 flex items-center gap-2">
                                <span>Book Now</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col gap-3 sm:gap-4 animate-in fade-in zoom-in-95">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.id)}
                                className="text-lg font-medium text-gray-600 border-b border-gray-50 pb-2 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://cal.com/redlix.co.in/30min" target="_blank" rel="noopener noreferrer" onClick={() => trackButtonClick("book_now_mobile", "mobile_menu")}>
                            <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl mt-2">
                                Book Now
                            </button>
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;