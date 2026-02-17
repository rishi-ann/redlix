"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const works = [
    {
        title: "Dhasha Media",
        category: "Media / ERP",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183464/Screenshot_2026-02-16_at_00.54.16_ytr8rv.png",
        link: "/dhasha-media",
        className: "md:col-span-1",
    },
    {
        title: "HSGA Telangana",
        category: "Govt / Infrastructure",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183548/Screenshot_2026-02-16_at_00.55.41_we9z2s.png",
        link: "/hsga-landing",
        className: "md:col-span-1",
    },
    {
        title: "Forge Digital",
        category: "B2B / Marketplace",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183721/Screenshot_2026-02-16_at_00.58.35_idhgxq.png",
        link: "/forge-digital",
        className: "md:col-span-1",
    },
    {
        title: "HUS System",
        category: "Govt / Digital Infrastructure",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184011/Screenshot_2026-02-16_at_01.03.23_dldnmd.png",
        link: "/hus-system",
        className: "md:col-span-1",
    },
    {
        title: "Redlix Tracker",
        category: "B2B / Management",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183296/Screenshot_2026-02-16_at_00.51.10_cphv4q.png",
        link: "/csapp",
        className: "md:col-span-1",
    },
];

const OurWork = () => {
    return (
        <section id="our-work" className="relative w-full py-24 bg-white">
            <div className="absolute inset-y-0 left-[6%] md:left-[10%] w-px border-l border-dotted border-gray-300 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-[6%] md:right-[10%] w-px border-r border-dotted border-gray-300 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-12 md:px-24">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
                        Our Works
                    </h2>
                    <p className="text-[14px] text-gray-500 font-normal">
                        Still confused about us? Our Work Speaks for Itself
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, idx) => (
                        <Link key={idx} href={work.link} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className={`group relative rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 bg-gray-50 aspect-[4/5] md:aspect-[4/5] ${work.className} cursor-pointer`}
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white/60 text-[12px] font-medium uppercase tracking-widest mb-2">{work.category}</p>
                                        <h3 className="text-white text-2xl font-semibold tracking-tight">{work.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
