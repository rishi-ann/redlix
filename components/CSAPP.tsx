"use client";

import React from "react";
import { motion } from "framer-motion";

const redKeywords = ["simplified", "precision", "modern", "ecosystem", "CSAPP"];

const HighlightText = ({ text }: { text: string }) => {
    const regex = new RegExp(`(${redKeywords.join("|")})`, "gi");
    const parts = text.split(regex);
    return (
        <span>
            {parts.map((part, i) =>
                redKeywords.some(kw => kw.toLowerCase() === part.toLowerCase()) ? (
                    <span key={i} className="text-red-500 font-medium">{part}</span>
                ) : (
                    part
                )
            )}
        </span>
    );
};

const CSAPP = () => {
    return (
        <section id="csapp" className="relative w-full py-12 sm:py-16 bg-[#FBFBFA] overflow-hidden">

            <div className="absolute inset-y-0 left-[6%] md:left-[10%] w-px border-l border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>
            <div className="absolute inset-y-0 right-[6%] md:right-[10%] w-px border-r border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <a
                            href="https://cal.com/redlix.co.in/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 mb-6 shadow-sm hover:border-red-200 hover:shadow-md transition-all cursor-pointer"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                            <span className="text-[12px] font-normal text-gray-500">
                                <HighlightText text="CSAPP" /> system
                            </span>
                        </a>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-2 leading-tight">
                            Management <br />
                            <span className="text-gray-400 font-normal">portal.</span>
                        </h2>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-medium mb-6 sm:mb-8 tracking-tight">
                            Workflow <HighlightText text="simplified" />.
                        </p>

                        <p className="text-[14px] sm:text-[15px] text-gray-500 font-normal leading-relaxed max-w-sm mb-6 sm:mb-8">
                            A minimalist <HighlightText text="ecosystem" /> designed for clarity and <HighlightText text="precision" /> in <HighlightText text="modern" /> digital administration.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                            <a
                                href="https://csapp-systems.redlix.co.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full text-[13px] sm:text-[14px] font-medium transition-all hover:bg-gray-800 hover:scale-105 shadow-lg shadow-gray-200 w-full sm:w-auto"
                            >
                                Launch System
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            <a
                                href="/csapp"
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 border border-gray-200 rounded-full text-[13px] sm:text-[14px] font-medium transition-all hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative w-full flex items-center justify-center p-0"
                    >
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771196000/undraw_visionary-technology_f6b3_umqsnq.svg"
                            alt="Redlix Tracker Ecosystem"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CSAPP;       