"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DhashaMediaPage = () => {
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
                                <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded">Dhasha Media</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight text-gray-950 leading-[1.15]">
                                How Dhasha Media and Redlix Automate Complex Media Workflows
                            </h1>

                            <div className="space-y-3">
                                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">A conversation with:</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png"
                                        alt="Dhanush Reddy"
                                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                                    />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 leading-none">Dhanush Reddy</p>
                                        <p className="text-[10px] text-gray-500 mt-1">Founder @ Dhasha Media</p>
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
                                    <Link href="/hus-system" className="text-black hover:text-red-500 transition-colors p-1" title="Previous Project">
                                        <ArrowLeft size={16} />
                                    </Link>
                                    <Link href="/csapp" className="text-black hover:text-red-500 transition-colors p-1" title="Next Project">
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                                <div className="w-px h-4 bg-gray-200 mx-1" />
                                <div className="flex items-center gap-2.5 text-gray-400">
                                    <button
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this case study on Dhasha Media by Redlix!")}`, "_blank")}
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
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold">Client</p>
                            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                                Dhasha Media
                                <a href="https://www.dhashamedia.com/" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                                    <Link2 size={16} />
                                </a>
                            </h2>
                            <p className="text-[13px] leading-relaxed text-gray-600">
                                A premier media agency requiring sophisticated internal tools to manage complex booking workflows and project lifecycles.
                            </p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">Location</p>
                            <p className="text-[13px] text-gray-800 font-medium">Hyderabad, India</p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">Industry</p>
                            <p className="text-[13px] text-gray-800 font-medium">Media & Entertainment</p>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-semibold">Project Scope</p>
                            <p className="text-[13px] text-gray-800 font-medium">Operations Engine (<span className="text-red-500">Internal</span>)</p>
                        </div>
                    </aside>

                    <div className="md:col-span-9 space-y-16 order-1 md:order-2">
                        <div className="max-w-3xl w-full space-y-16">
                            <section className="space-y-6">
                                <h2 className="text-xl font-medium text-gray-900">System Overview</h2>
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    The Dhasha Media Creator Booking System is a centralized digital platform designed to streamline the discovery, booking, coordination, and management of media creators. Built to support creative professionals and administrative teams alike, the system simplifies the entire media booking lifecycle—from registration to confirmed project execution.
                                </p>
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    At the core of the platform lies the <strong className="text-gray-900 font-semibold">Central Booking System (CBS)</strong>, a unified management environment that integrates all modules into one seamless workflow. This ensures transparency, operational efficiency, and smooth communication.
                                </p>
                            </section>

                            <section className="space-y-10">
                                <h2 className="text-xl font-medium text-gray-900">Key Functional Modules</h2>

                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 1. Admin Module
                                        </h3>
                                        <p className="text-[14px] text-gray-600 leading-relaxed italic">Centralized Control & System Governance</p>
                                        <ul className="space-y-3 pl-4 border-l border-gray-100">
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">User Governance:</strong> Role-based access control (Super Admin, Coordinator, Reviewer) and permission management.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Portal Monitoring:</strong> Performance tracking, user verification, and approval of media registrations.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Analytics:</strong> Deep insights into booking reports, creator activity, and client engagement metrics.</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 2. Booking System
                                        </h3>
                                        <p className="text-[14px] text-gray-600 leading-relaxed italic">Efficient Scheduling & Client Coordination</p>
                                        <ul className="space-y-3 pl-4 border-l border-gray-100">
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Real-Time Tracking:</strong> Automated availability sync with creator schedules to prevent double-booking.</li>
                                            <li className="text-[13px] text-gray-600"><strong className="text-gray-900 font-medium">Lifecycle Management:</strong> Structured workflows from Pending Approval through to Completion or Cancellation.</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 3. Media Registration
                                        </h3>
                                        <p className="text-[14px] text-gray-600 leading-relaxed italic">Structured Onboarding for Creators</p>
                                        <p className="text-[13px] text-gray-600 pl-4 border-l border-gray-100">
                                            Enables videographers, photographers, and editors to join the ecosystem through a structured verification process, covering portfolios, expertise, and availability preferences.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 4. Media Creator Login Portal
                                        </h3>
                                        <p className="text-[14px] text-gray-600 leading-relaxed italic">Personalized Creator Dashboard</p>
                                        <p className="text-[13px] text-gray-600 pl-4 border-l border-gray-100">
                                            Empowers creators with full visibility over upcoming engagements, booking details, and the ability to manage their professional profiles and availability in real-time.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-base font-semibold text-black flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 5. Central Booking System (CBS)
                                        </h3>
                                        <p className="text-[14px] text-gray-600 leading-relaxed italic">The Unified Operational Core</p>
                                        <p className="text-[13px] text-gray-600 pl-4 border-l border-gray-100">
                                            The coordination engine that synchronizes creator availability, maintains a unified database, and prevents scheduling conflicts through automated validation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-xl font-medium text-gray-900">Workflow Overview</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        { step: "1", title: "Registration", desc: "Creators sign up and submit portfolios." },
                                        { step: "2", title: "Verification", desc: "Admin reviews and approves profiles." },
                                        { step: "3", title: "Activation", desc: "Creators gain access to their portals." },
                                        { step: "4", title: "Booking", desc: "Clients schedule appts via the system." },
                                        { step: "5", title: "Execution", desc: "Creators manage and complete projects." },
                                        { step: "6", title: "Oversight", desc: "Admin monitors activity through CBS." },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <span className="text-red-500 font-bold text-lg leading-none">{item.step}</span>
                                            <div className="space-y-1">
                                                <p className="text-[13px] font-semibold text-gray-900">{item.title}</p>
                                                <p className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-xl font-medium text-gray-900">System Benefits</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">For Media Creators</p>
                                        <p className="text-[13px] text-gray-600">Organized booking management, professional digital presence, and real-time scheduling visibility.</p>
                                    </div>
                                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">For Administrators</p>
                                        <p className="text-[13px] text-gray-600">Centralized management, operational transparency, and reduced manual coordination.</p>
                                    </div>
                                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">For the Organization</p>
                                        <p className="text-[13px] text-gray-600">Structured talent ecosystem, scalable architecture, and improved service reliability.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="pt-10">
                                <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium opacity-80 cursor-not-allowed">
                                    Internal System (Restricted)
                                </button>
                            </section>

                            <div className="pt-16 border-t border-gray-100">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold">Services Delivered</p>
                                <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-medium text-gray-800">
                                    <li>Custom ERP Development</li>
                                    <li>Database Architecture</li>
                                    <li>UI/UX Design</li>
                                    <li>Process Automation</li>
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

export default DhashaMediaPage;