"use client";

import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { trackButtonClick } from "@/lib/analytics";

const people = [
    {
        id: 1,
        name: "Dhanush Reddy",
        designation: "Founder @ Dhasha Media",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png",
    },
    {
        id: 2,
        name: "HSGA Telangana",
        designation: "Government Infrastructure",
        image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg",
    },
    {
        id: 3,
        name: "Jaswanth Sonti",
        designation: "Founder @ Forge Digital",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184951/Screenshot_2026-02-16_at_01.18.59_yodn7t.png",
    },
    {
        id: 4,
        name: "Harshith Sai",
        designation: "CEO @ SAS",
        image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771184658/Screenshot_2026-02-16_at_01.14.02_btxipo.png",
    },
];

const Hero = () => {
    return (
        <section className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 bg-white overflow-hidden">
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#a3a3a3_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6">

                <div className="absolute inset-0 pointer-events-none hidden xl:block">

                    <div className="absolute left-6 top-[20%] -rotate-6 animate-float group/card1">
                        <div className="w-[270px] bg-white rounded-[40px] p-5 border border-gray-100 shadow-sm transition-all duration-500 hover:-rotate-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-200/50 cursor-default">
                            <div className="bg-[#F2F2F2] rounded-[28px] rounded-bl-none p-6 pb-12">
                                <p className="text-[12px] leading-relaxed text-gray-700 font-normal">
                                    "Redlix delivered <span className="text-red-600 font-medium">Dhasha Media's</span> custom <span className="text-red-600 font-medium">Bookings system</span> with precision."
                                </p>
                            </div>
                            <div className="bg-white rounded-[20px] p-4 shadow-xl shadow-black/5 border border-gray-100 -mt-10 ml-8 w-[88%] relative z-10 transition-transform duration-500 group-hover/card1:scale-105">
                                <p className="text-[11px] text-black font-semibold leading-tight">Streamlined media agency <span className="text-red-600">ops.</span></p>
                            </div>
                            <div className="mt-5 flex items-center gap-3 px-2">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770931011/Screenshot_2026-02-13_at_02.45.59_kw8pih.png"
                                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                                    alt="Founder"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-black tracking-tight leading-none mb-1">Dhanush Reddy</span>
                                    <span className="text-[10px] text-gray-400">Media Agency</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-6 top-[25%] rotate-6 animate-float-delayed group/card2">
                        <div className="w-[270px] bg-white rounded-[40px] p-5 border border-gray-100 shadow-sm transition-all duration-500 hover:rotate-2 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-200/50 cursor-default">
                            <div className="bg-[#F2F2F2] rounded-[28px] rounded-bl-none p-6 pb-12">
                                <p className="text-[12px] leading-relaxed text-gray-700 font-normal">
                                    "Brought <span className="text-red-600 font-medium">HSGA Telangana</span> to life with the robust <span className="text-red-600 font-medium">HUS System.</span>"
                                </p>
                            </div>
                            <div className="bg-white rounded-[20px] p-4 shadow-xl shadow-black/5 border border-gray-100 -mt-10 ml-8 w-[88%] relative z-10 transition-transform duration-500 group-hover/card2:scale-105">
                                <p className="text-[11px] text-black font-semibold leading-tight"><span className="text-red-600">State-wide</span> digital infrastructure.</p>
                            </div>
                            <div className="mt-5 flex items-center gap-3 px-2">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                                    alt="Founder"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-black tracking-tight leading-none mb-1">HSGA Telangana</span>
                                    <span className="text-[10px] text-gray-400">HUS System</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-left sm:text-center px-2 sm:px-0">

                    <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200/60 mb-6 sm:mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group cursor-default select-none animate-in fade-in slide-in-from-top-4 duration-1000">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></span>
                        <span className="text-[11px] sm:text-[12px] font-normal text-gray-600 tracking-tight">
                            Available for new projects
                        </span>
                        <div className="flex items-center justify-center h-4 w-4 rounded-full bg-black text-white transition-all ml-0.5 group-hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-2 h-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.15] mb-4 sm:mb-6">
                        The elite product partner for <br className="hidden sm:block" />
                        <span className="text-gray-400 font-normal">high-growth companies</span>
                    </h1>

                    <p className="max-w-lg sm:mx-auto text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed font-normal px-2 sm:px-0">
                        Redlix combines world-class design with high-performance engineering to turn
                        complex ideas into <span className="text-red-600 font-medium">scalable digital realities</span> for
                        <span className="text-red-600 font-medium ml-1">Startups</span> & <span className="text-red-600 font-medium">B2C</span> enterprises.
                    </p>

                    <div className="flex flex-col items-start sm:items-center gap-6 sm:gap-10">
                        <a href="https://cal.com/redlix.co.in/30min" target="_blank" rel="noopener noreferrer" onClick={() => trackButtonClick("book_call_hero", "hero_section")}>
                            <button className="group relative pr-8 sm:pr-10 pl-3 sm:pl-4 py-2.5 sm:py-3 bg-gray-950 text-white rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200 flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 w-full sm:w-auto justify-center">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 shadow-lg shadow-red-500/20 transition-all duration-300 group-hover:bg-red-600">
                                    <img
                                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770405388/icon-removebg-preview_v3cxkb.png"
                                        className="w-5 h-5 invert brightness-0"
                                        alt="Calendar Icon"
                                    />
                                </div>
                                <span className="relative z-10">Book a 30-min call</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </a>

                        <div className="flex flex-col items-start sm:items-center gap-3">
                            <div className="flex flex-row items-center justify-start sm:justify-center mb-0 w-full">
                                <AnimatedTooltip items={people} />
                                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-[11px] font-bold text-white ring-4 ring-white border border-gray-100 -ml-2 relative z-30">+10</div>
                            </div>
                            <p className="text-[11px] text-gray-400 font-normal tracking-wide uppercase mt-1">Trusted by 10+ Tech Founders</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;