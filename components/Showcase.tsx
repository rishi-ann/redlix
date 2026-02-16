"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        id: "1",
        studioDescription: "built Dhasha Media's complete <span className='text-red-600 font-medium'>internal operations engine</span>, automating <span className='text-red-600 font-medium'>bookings</span> and complex project workflows.",
        clientTestimonial: "A <span className='text-red-600'>total game-changer</span> for our agency operations.",
        author: {
            name: "Dhanush Reddy",
            role: "Founder @ Dhasha Media",
            avatar: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png"
        },
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183464/Screenshot_2026-02-16_at_00.54.16_ytr8rv.png",
        studioName: "Redlix",
        link: "/dhasha-media"
    },
    {
        id: "2",
        studioDescription: "designed and developed the <span className='text-red-600 font-medium'>official HSGA Telangana landing page</span>, setting a high bar for government digital presence.",
        clientTestimonial: "A <span className='text-red-600 font-medium'>modern, fast, and accessible</span> face for our state's digital initiatives.",
        author: {
            name: "HSGA Telangana",
            role: "Government Infrastructure",
            avatar: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
        },
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183548/Screenshot_2026-02-16_at_00.55.41_we9z2s.png",
        studioName: "Redlix",
        link: "/hsga-landing"
    },
    {
        id: "3",
        studioDescription: "developed Forge Digital's <span className='text-red-600 font-medium'>high-performance B2B platform</span> with multi-vendor support and <span className='text-red-600 font-medium'>dynamic pricing</span>.",
        clientTestimonial: "Our <span className='text-red-600'>sales velocity doubled</span> since launch.",
        author: {
            name: "Jaswanth Sonti",
            role: "Founder @ Forge Digital Technologies",
            avatar: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184951/Screenshot_2026-02-16_at_01.18.59_yodn7t.png"
        },
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771183721/Screenshot_2026-02-16_at_00.58.35_idhgxq.png",
        studioName: "Redlix",
        link: "/forge-digital"
    },
    {
        id: "4",
        studioDescription: "engineered the <span className='text-red-600 font-medium'>robust HUS System</span> for HSGA Telangana, a state-wide <span className='text-red-600 font-medium'>digital infrastructure</span>.",
        clientTestimonial: "<span className='text-red-600'>Precision engineering</span> for modern governance.",
        author: {
            name: "HSGA Telangana",
            role: "Government Infrastructure",
            avatar: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
        },
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184011/Screenshot_2026-02-16_at_01.03.23_dldnmd.png",
        studioName: "Redlix",
        link: "/hus-system"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    return (
        <Link href={project.link} className="block group">
            <div className="w-[320px] xs:w-[360px] sm:w-[400px] md:w-[480px] flex-shrink-0 bg-white border border-gray-300 rounded-[32px] sm:rounded-[48px] p-2.5 sm:p-3 flex flex-col gap-4 sm:gap-6 mx-2 sm:mx-4 hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                <div className="w-full aspect-[4/3] rounded-[36px] overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center relative">
                    <img
                        src={project.image}
                        alt="Project Preview"
                        className="w-full h-full object-cover object-top rounded-[36px]"
                    />
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                    <div className="bg-white rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col gap-2">
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-gray-800 font-normal">
                            <span className="font-semibold text-black">{project.studioName}</span>{" "}
                            <span dangerouslySetInnerHTML={{ __html: project.studioDescription }} />
                        </p>
                    </div>

                    <div className="flex justify-end -mt-8 mr-2 relative z-10">
                        <div className="bg-black rounded-[24px] px-6 py-4 shadow-xl shadow-black/10 border border-black/5 max-w-[85%] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-default">
                            <p className="text-[13px] sm:text-[14px] text-white/90 font-medium" dangerouslySetInnerHTML={{ __html: project.clientTestimonial }}></p>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold text-right">{project.studioName}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2 px-2">
                        <img
                            src={project.author.avatar}
                            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                            alt={project.author.name}
                        />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-bold text-black tracking-tight leading-none mb-1">{project.author.name}</span>
                            <span className="text-[11px] text-gray-500 font-medium">{project.author.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Showcase = () => {
    const row1 = [...projects, ...projects, ...projects];

    const marqueeVariant = (duration: number, direction: "left" | "right") => ({
        animate: {
            x: direction === "left" ? [0, -1 * (480 + 32) * projects.length] : [-1 * (480 + 32) * projects.length, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: duration,
                    ease: "linear" as any,
                },
            },
        },
    });

    return (
        <section className="w-full pt-0 pb-6 bg-white overflow-hidden">
            <div className="relative overflow-visible">
                <motion.div
                    className="flex"
                    variants={marqueeVariant(50, "left")}
                    animate="animate"
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {row1.map((project, idx) => (
                        <ProjectCard key={`row1-${project.id}-${idx}`} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
