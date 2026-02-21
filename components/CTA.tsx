"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Layers } from "lucide-react";

const CTA = () => {
    return (
        <section id="contact" className="relative w-full py-10 sm:py-14 bg-red-600 overflow-hidden">
            {/* Architectural subtle pattern for modern texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
            </div>

            {/* Subtle background glow to add depth to the red */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-[1.1]">
                            Ready to build your <br />
                            <span className="opacity-80">next big thing?</span>
                        </h2>

                        <p className="text-red-100 text-base sm:text-lg font-normal mb-8 max-w-xl leading-relaxed">
                            Join 30+ founders who trust Redlix to transform complex ideas into scalable digital realities.
                        </p>

                        {/* Creative Service Tags (Sentence Case) */}
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["Web systems", "Mobile logic", "Cloud scale", "Modern design"].map((service, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-medium border border-white/20 backdrop-blur-md cursor-default transition-colors hover:bg-white/20"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <a
                            href="https://cal.com/redlix.co.in/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto group"
                        >
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-red-600 rounded-full font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-gray-100 group-hover:scale-105 shadow-lg shadow-black/10">
                                <Calendar size={18} />
                                Book a 30-min call
                            </button>
                        </a>

                        <Link href="/csapp" className="w-full sm:w-auto group">
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white">
                                <Layers size={18} />
                                View projects
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;