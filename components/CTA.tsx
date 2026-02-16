"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
    return (
        <section id="contact" className="relative w-full py-12 sm:py-16 bg-white dark:bg-zinc-900 overflow-hidden">

            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        Ready to build your <br />
                        <span className="text-red-600">next big thing?</span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-normal mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                        Join 30+ founders who trust Redlix to transform their complex ideas into scalable, high-performance digital realities.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-3xl">
                        {["Web systems", "Mobile logic", "Cloud scale", "Modern design", "Tech strategy", "System support"].map((service, idx) => (
                            <span key={idx} className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-[12px] sm:text-[13px] font-medium border border-gray-200 dark:border-zinc-700 shadow-sm whitespace-nowrap hover:border-red-200 hover:text-red-500 transition-colors cursor-default">
                                {service}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4">
                        <a href="https://cal.com/redlix.co.in/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-[14px] sm:text-[15px] transition-all duration-300 hover:scale-105 hover:bg-red-600 dark:hover:bg-gray-200 shadow-xl shadow-black/5">
                                Book a 30-min call
                            </button>
                        </a>
                        <Link href="/csapp" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-full font-medium text-[14px] sm:text-[15px] transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900">
                                View all projects
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
