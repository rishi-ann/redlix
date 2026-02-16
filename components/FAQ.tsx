"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
                    <span key={i} className="text-red-500 font-medium">{part}</span>
                ) : (
                    part
                )
            )}
        </span>
    );
};

const FAQItem = ({ faq }: { faq: typeof faqs[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 sm:py-6 md:py-7 flex items-center justify-between text-left group transition-all"
            >
                <div className="flex-1 pr-4 sm:pr-6 md:pr-8">
                    <span className={`text-[15px] sm:text-[16px] md:text-[18px] tracking-tight transition-colors duration-300 ${faq.special ? "text-red-500 font-semibold" :
                        isOpen ? "text-gray-900 font-medium" : "text-gray-600 font-normal group-hover:text-black"
                        }`}>
                        {faq.question}
                    </span>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ?
                        <Minus className={`w-4 h-4 ${faq.special ? "text-red-500" : "text-gray-400"}`} strokeWidth={2.5} /> :
                        <Plus className={`w-4 h-4 ${faq.special ? "text-red-500" : "text-gray-400"}`} strokeWidth={2.5} />
                    }
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 sm:pb-8 text-gray-400 leading-relaxed font-normal text-[13px] sm:text-[14px] md:text-[15px] max-w-2xl">
                            <HighlightText text={faq.answer} />
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section id="faqs" className="relative w-full py-12 sm:py-16 bg-white">
            <div className="absolute inset-y-0 left-[6%] md:left-[10%] w-px border-l border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>
            <div className="absolute inset-y-0 right-[6%] md:right-[10%] w-px border-r border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="max-w-md">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
                            <HighlightText text="Frequently" /> asked <br />
                            <span className="text-gray-400 font-normal"><HighlightText text="questions" />.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-[12px] sm:text-[13px] text-gray-400 font-normal leading-relaxed">
                            Everything you need to know about <HighlightText text="partnering" /> with us for digital <HighlightText text="excellence" />.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl">
                    <div className="border-t border-gray-100">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} faq={faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;