"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "A total game-changer for our agency operations.",
        author: "Dhanush Reddy",
        role: "Founder @ Dhasha Media",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png"
    },
    {
        quote: "A modern, fast, and accessible face for our state's digital initiatives.",
        author: "HSGA Telangana",
        role: "Government Infrastructure",
        image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
    },
    {
        quote: "Our sales velocity doubled since launch.",
        author: "Jaswanth Sonti",
        role: "Founder @ Forge Digital Technologies",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184951/Screenshot_2026-02-16_at_01.18.59_yodn7t.png"
    },
    {
        quote: "Precision engineering for modern governance.",
        author: "HSGA CMRIT",
        role: "HSGA Chapter",
        image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
    },
    {
        quote: "Redlix has been an exceptional partner in our journey.",
        author: "Harshith Sai Tunguntla",
        role: "CEO @ SAS",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184658/Screenshot_2026-02-16_at_01.14.02_btxipo.png"
    },
    {
        quote: "An incredible collaboration that delivered beyond expectations.",
        author: "NSS CMRIT",
        role: "Student Chapter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY63DjvYa-bL8ci8s5_KTiLm_9Mw_Wy0Xdw&s"
    }
];

const HighlightedText = ({ text }: { text: string }) => {
    const keywords = [
        "fantastic", "transformed", "revolutionary", "game-changer",
        "efficiency", "unmatched", "saved", "superpower",
        "intuitive", "impressive", "vital", "productivity", "results",
        "high-speed", "business impact", "doubled", "Seamless communication",
        "scalable architecture", "long-term growth", "converts", "performing 3x",
        "Professional", "talented", "flawless", "peace of mind", "exceptional", "market-ready"
    ];

    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return (
        <span>
            {parts.map((part, i) =>
                keywords.includes(part.toLowerCase()) ? (
                    <span key={i} className="text-red-500 font-medium">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </span>
    );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="w-full bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[280px] sm:min-h-[340px]"
    >
        <div className="flex flex-col gap-6">
            <svg width="20" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
                <path d="M0 18V9.11308L4.04561 0H8.38596L4.23158 9.11308H8.38596V18H0ZM13.8947 18V9.11308L17.9404 0H22.2807L18.1263 9.11308H22.2807V18H13.8947Z" fill="currentColor" />
            </svg>
            <p className="text-[14px] leading-[1.6] text-gray-500 font-normal">
                <HighlightedText text={testimonial.quote} />
            </p>
        </div>

        <div className="flex flex-col items-start gap-3 mt-8">
            <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex flex-col">
                <span className="text-[12px] font-bold text-black tracking-tight">{testimonial.author}</span>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{testimonial.role}</span>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const col1 = testimonials.filter((_, i) => i % 4 === 0);
    const col2 = testimonials.filter((_, i) => i % 4 === 1);
    const col3 = testimonials.filter((_, i) => i % 4 === 2);
    const col4 = testimonials.filter((_, i) => i % 4 === 3);

    return (
        <section id="achievements" className="relative w-full py-12 sm:py-16 bg-white">
            <div className="absolute inset-y-0 left-[6%] md:left-[10%] w-px border-l border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>
            <div className="absolute inset-y-0 right-[6%] md:right-[10%] w-px border-r border-dotted border-gray-300 pointer-events-none hidden sm:block"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="max-w-md">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
                            Loved by <span className="text-red-500 font-medium">founders</span> <br />
                            <span className="text-gray-400 font-normal">everywhere.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-[12px] sm:text-[13px] text-gray-400 font-normal leading-relaxed">
                            Here's what some of our <span className="text-red-500 font-medium">partners</span> have to say about Redlix.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-start">
                    <div className="flex flex-col gap-4">
                        {col1.map((t, idx) => <TestimonialCard key={idx} testimonial={t} index={idx} />)}
                    </div>
                    <div className="flex flex-col gap-4 lg:mt-12">
                        {col2.map((t, idx) => <TestimonialCard key={idx} testimonial={t} index={idx} />)}
                    </div>
                    <div className="flex flex-col gap-4 lg:mt-6">
                        {col3.map((t, idx) => <TestimonialCard key={idx} testimonial={t} index={idx} />)}
                    </div>
                    <div className="flex flex-col gap-4 lg:mt-16">
                        {col4.map((t, idx) => <TestimonialCard key={idx} testimonial={t} index={idx} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;