"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Who is behind Redlix?",
        answer: "Redlix is led by Rishi Rohan Kalapala and a dedicated team of elite engineers and designers committed to digital excellence.",
        special: true
    },
    {
        question: "How does Redlix ensure high performance for web apps?",
        answer: "We utilize modern frameworks like Next.js and React, coupled with optimized backend architectures to deliver lightning-fast, scalable web applications."
    },
    {
        question: "Can you help with mobile app development?",
        answer: "Absolutely. We specialize in building native and cross-platform mobile applications for both iOS and Android, ensuring a seamless user experience."
    },
    {
        question: "What is your approach to UI/UX design?",
        answer: "Our design process is user-centric. We focus on creating intuitive, clean, and conversion-focused interfaces that prioritize user clarity and engagement."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide comprehensive post-launch support, including maintenance, updates, and performance monitoring to ensure your product continues to thrive."
    }
];

const redKeywords = ["frequently", "questions", "partnering", "Rishi Rohan Kalapala", "excellence"];

const HighlightText = ({ text }: { text: string }) => {
    const regex = new RegExp(`(${redKeywords.join("|")})`, "gi");
    const parts = text.split(regex);
    return (
        <span>
            {parts.map((part, i) =>
                redKeywords.some(kw => kw.toLowerCase() === part.toLowerCase()) ? (
                    <span key={i} className="text-red-600 font-semibold">{part}</span>
                ) : (
                    part
                )
            )}
        </span>
    );
};

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0 group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 sm:py-6 flex items-start justify-between text-left transition-all"
            >
                <div className="flex gap-4 sm:gap-6 pr-4">
                    <span className={`text-[10px] font-bold pt-1.5 transition-colors ${isOpen ? "text-red-600" : "text-gray-300"}`}>
                        0{index + 1}
                    </span>
                    <span className={`text-[15px] sm:text-[16px] tracking-tight transition-all duration-300 ${faq.special ? "text-red-600 font-semibold" :
                            isOpen ? "text-zinc-950 font-medium" : "text-zinc-600 font-normal group-hover:text-zinc-950"
                        }`}>
                        {faq.question}
                    </span>
                </div>
                <div className={`mt-1 flex-shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    <Plus size={18} className={isOpen ? "text-red-600" : "text-zinc-400"} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pl-8 sm:pl-12 pr-6 pb-6">
                            <p className="text-zinc-500 leading-relaxed text-[13px] sm:text-[14px] max-w-xl">
                                <HighlightText text={faq.answer} />
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section id="faqs" className="relative w-full py-20 bg-white overflow-hidden">

            {/* Architectural Vertical Lines (Left and Right) */}
            <div className="absolute inset-y-0 left-[4%] sm:left-[8%] md:left-[10%] w-[1px] bg-gray-100 pointer-events-none" />
            <div className="absolute inset-y-0 right-[4%] sm:right-[8%] md:right-[10%] w-[1px] bg-gray-100 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-10 sm:px-16 md:px-24 relative z-10">

                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-red-600 uppercase tracking-widest">
                            <HelpCircle size={12} />
                            Help center
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-950 tracking-tight leading-tight">
                            frequently asked <br />
                            <span className="text-zinc-300">questions.</span>
                        </h2>
                    </div>
                    <div className="max-w-[200px]">
                        <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                            everything you need to know about partnering with redlix for digital excellence.
                        </p>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="border-t border-gray-100">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>

                {/* Subtle bottom detail */}
                <div className="mt-12 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <span className="text-[10px] text-zinc-400 font-medium">still have questions?</span>
                        <a href="#contact" className="text-[10px] font-bold text-red-600 hover:underline">get in touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;