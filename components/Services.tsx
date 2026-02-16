"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Web systems",
        category: "PERFORMANCE",
        description: "High-performance platforms built for scale. We specialize in complex architectures that remain fast and reliable.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771193802/undraw_web-development_f0tp_wevl8v.svg",
    },
    {
        title: "Mobile logic",
        category: "EXPERIENCE",
        description: "Refined iOS and Android applications. We build native experiences focused on user retention and interface speed.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771194102/undraw_ai-chat_ljb9_tyqekm.svg",
    },
    {
        title: "Cloud scale",
        category: "INFRASTRUCTURE",
        description: "Resilient infrastructure that grows with your user base, ensuring zero downtime and optimized maintenance.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771194167/undraw_day-dreaming_2mlz_trvkiy.svg",
    },
    {
        title: "Modern design",
        category: "VISUALS",
        description: "Minimal interfaces that turn complex data into intuitive user journeys. Aesthetic balance meets functionality.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771194448/undraw_color-palette_zoli_n293cm.svg",
    },
    {
        title: "Tech strategy",
        category: "CONSULTING",
        description: "Consultancy on stack selection and digital transformation. We align technology with your business goals.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771194449/undraw_customer-survey_ek29_tkpu6x.svg",
    },
    {
        title: "System support",
        category: "OPERATIONS",
        description: "Managed maintenance and proactive monitoring to ensure your operations run seamlessly at all times.",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771194449/undraw_mcp-server_7kvc_avojp7.svg",
    },
];


const redKeywords = [
    "expert", "digital services", "Tailored engineering", "design solutions", "Redlix partners",
    "High-performance", "complex architectures", "native experiences", "zero downtime",
    "Aesthetic balance", "digital transformation", "proactive monitoring"
];

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

const ServiceCard = ({ item, index }: { item: typeof services[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group flex flex-col bg-white rounded-[40px] border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/30 transition-all duration-500 overflow-hidden h-full"
    >
        <div className="p-2">
            <div className="bg-[#F9FAFB] rounded-[32px] aspect-[1.4/1] flex items-center justify-center overflow-hidden relative border border-gray-50">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-700"
                />
            </div>
        </div>

        <div className="p-6 pt-3 flex flex-col flex-grow">
            <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-50 border border-red-100 mb-3 w-fit">
                <span className="text-[9px] font-medium text-red-500 uppercase tracking-widest">{item.category}</span>
            </div>

            <h3 className="text-[17px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                {item.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-gray-400 font-normal mb-6 flex-grow">
                <HighlightText text={item.description} />
            </p>
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services" className="relative w-full py-12 sm:py-16 bg-white">
            <div className="absolute inset-y-0 left-[6%] md:left-[10%] w-px border-l border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>
            <div className="absolute inset-y-0 right-[6%] md:right-[10%] w-px border-r border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="max-w-md">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
                            Our <HighlightText text="expert" /> <br />
                            <span className="text-gray-400 font-normal"><HighlightText text="digital services" />.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-[12px] sm:text-[13px] text-gray-400 font-normal leading-relaxed">
                            <HighlightText text="Tailored engineering" /> and <HighlightText text="design solutions" /> for modern <HighlightText text="Redlix partners" />.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} item={service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;