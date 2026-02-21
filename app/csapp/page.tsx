"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CSAPPLearnMore = () => {
    return (
        <main className="min-h-screen bg-white selection:bg-red-50 selection:text-red-600 font-sans antialiased text-gray-900">
            <Navbar />

            <section className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-tight">
                                <span className="px-2.5 py-1 bg-gray-100 rounded text-gray-500">Our Work</span>
                                <span className="text-gray-300">/</span>
                                <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded">Redlix Tracker</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight text-gray-950 leading-[1.15]">
                                How Redlix Tracker and Redlix Made Project Management Seamless
                            </h1>

                            <div className="space-y-3">
                                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Developed by:</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                                        RR
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 leading-none">Rishi Rohan Kalapala</p>
                                        <p className="text-[10px] text-gray-500 mt-1">Lead Developer & Systems Architect</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-1.5 w-fit border border-gray-100">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Link copied to clipboard!");
                                    }}
                                    className="text-black hover:text-red-500 transition-colors p-1"
                                    title="Copy Link"
                                >
                                    <Link2 size={16} />
                                </button>
                                <div className="w-px h-4 bg-gray-200 mx-1" />
                                <div className="flex items-center gap-1">
                                    <Link href="/dhasha-media" className="text-black hover:text-red-500 transition-colors p-1" title="Previous Project">
                                        <ArrowLeft size={16} />
                                    </Link>
                                    <Link href="/forge-digital" className="text-black hover:text-red-500 transition-colors p-1" title="Next Project">
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                                <div className="w-px h-4 bg-gray-200 mx-1" />
                                <div className="flex items-center gap-2.5 text-gray-400">
                                    <button
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this case study on Redlix Tracker!")}`, "_blank")}
                                        className="hover:text-red-500 transition-colors"
                                        title="Share on X"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h.001Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" /></svg>
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank")}
                                        className="hover:text-red-500 transition-colors"
                                        title="Share on LinkedIn"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    <aside className="md:col-span-3 space-y-10 order-2 md:order-1">
                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold">About</p>
                            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                                Redlix
                                <a href="https://csapp-new.vercel.app/" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                                    <Link2 size={16} />
                                </a>
                            </h2>
                            <p className="text-[13px] leading-relaxed text-gray-600">
                                Redlix specializes in engineering high-performance ecosystems and management portals for modern institutions.
                            </p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">HQ</p>
                            <p className="text-[13px] text-gray-800 font-medium">Remote / Global</p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">Industry</p>
                            <p className="text-[13px] text-gray-800 font-medium">Enterprise Software</p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">Project Scope</p>
                            <p className="text-[13px] text-gray-800 font-medium">Full Ecosystem (<span className="text-red-500">B2B</span>)</p>
                        </div>
                    </aside>

                    <div className="md:col-span-9 space-y-16 order-1 md:order-2">
                        <div className="max-w-3xl w-full space-y-16">
                            <section className="space-y-6">
                                <h2 className="text-xl font-medium text-gray-900">System Overview</h2>
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    A comprehensive client project tracking system built with Next.js, TypeScript, and Tailwind CSS. This ecosystem allows for efficient brand onboarding, real-time progress monitoring, and direct support management through a centralized portal.
                                </p>
                            </section>

                            <section className="space-y-10">
                                <h2 className="text-xl font-medium text-gray-900">Core Features</h2>

                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Client Management
                                        </h3>
                                        <ul className="space-y-3 pl-4 border-l border-gray-100">
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Client ID Assignment:</strong> Automated generation of unique secure IDs for institutional clients.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Dynamic Intake:</strong> Multi-step form system with intelligent validation and asset upload support.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Real-time Dashboard:</strong> 6-stage lifecycle tracking with auto-calculating completion metrics.</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Administrative Logic
                                        </h3>
                                        <ul className="space-y-3 pl-4 border-l border-gray-100">
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Command Center:</strong> Global overview of all project statuses with 5-second auto-refresh stability.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Progress Editor:</strong> Granular control over individual stage percentages and project state management.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Support Hub:</strong> Integrated ticket management system for handling post-delivery revisions.</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Support & Maintenance
                                        </h3>
                                        <ul className="space-y-3 pl-4 border-l border-gray-100">
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Ticket Lifecycle:</strong> Clients can raise, track, and resolve error reports within their portal.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Automated Notifications:</strong> System-wide status updates for resolved tickets.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-10">
                                <h2 className="text-xl font-medium text-gray-900">Architecture & Strategic Flow</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Client Journey</h4>
                                        <p className="text-[12px] text-gray-500 leading-relaxed">
                                            Clients enter through a secure ID gateway, routing them dynamically based on their onboarding state. The system handles intelligent pre-filling of data, asset storage (Cloudinary integration), and real-time refresh (30s intervals) for status transparency.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Admin Logic</h4>
                                        <p className="text-[12px] text-gray-500 leading-relaxed">
                                            Powered by a 5-second polling dashboard, admins can manage the entire 6-stage lifecycle (Initial Consultation to Final Delivery). Includes bulk import tools for completed projects and a secure session-based authentication layer.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-xl font-medium text-gray-900">Technology Stack</h2>
                                <div className="flex flex-wrap gap-2">
                                    {["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "React 19", "Framer Motion", "Lucide React", "Bcryptjs", "Secure Session Context"].map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-[10px] font-medium rounded-full border border-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section className="pt-10">
                                <a
                                    href="https://csapp-new.vercel.app/"
                                    target="_blank"
                                    className="inline-flex px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-red-600 transition-all active:scale-95"
                                >
                                    Launch Live Portal
                                </a>
                            </section>

                            <div className="pt-16 border-t border-gray-100">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold">Services Delivered</p>
                                <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-medium text-gray-800">
                                    <li>B2B Management Ecosystem</li>
                                    <li>Full Stack Development</li>
                                    <li>UI/UX Strategy & Design</li>
                                    <li>Scalable Cloud Infrastructure</li>
                                    <li>Secure Admin Authentication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default CSAPPLearnMore;