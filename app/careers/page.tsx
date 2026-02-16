import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function CareersPage() {
    const careers = await prisma.career.findMany({
        where: { status: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
            <Navbar />

            {/* Compact Condensed Hero - Content aligned left, with image on right */}
            <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden border-b border-gray-100 bg-gray-50/50">
                <div
                    className={cn(
                        "absolute inset-0 z-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#a3a3a3_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-4 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">We are hiring</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                            Join Our <span className="text-red-600">Team</span>
                        </h1>
                        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Explore challenges that matter. Build the future with Redlix.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771269499/undraw_searching-everywhere_tffi_ntrwnx.svg"
                            alt="People searching for jobs"
                            className="w-full max-w-sm h-auto object-contain" // Added object-contain for SVGs
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {careers.map((career) => (
                        <div
                            key={career.id}
                            className="group flex flex-col bg-white rounded-[40px] border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/30 transition-all duration-500 overflow-hidden h-full relative"
                        >
                            <Link href={`/careers/${career.slug}`} className="absolute inset-0 z-10" />

                            <div className="p-2">
                                <div className="bg-[#F9FAFB] rounded-[32px] aspect-[1.4/1] flex items-center justify-center overflow-hidden relative border border-gray-50">
                                    {career.companyLogo ? (
                                        <img
                                            src={career.companyLogo}
                                            alt={career.companyName || "Company"}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-700"
                                        />
                                    ) : (
                                        <Briefcase className="w-16 h-16 text-gray-200 group-hover:text-red-500 transition-colors duration-500" />
                                    )}
                                </div>
                            </div>

                            <div className="p-6 pt-3 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-red-50 border border-red-100 w-fit">
                                        <span className="text-[9px] font-medium text-red-500 uppercase tracking-widest">{career.jobType}</span>
                                    </div>
                                    {career.location && (
                                        <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 w-fit">
                                            <span className="text-[9px] font-medium text-gray-500 uppercase tracking-widest">{career.location}</span>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-[17px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors line-clamp-2">
                                    {career.title}
                                </h3>

                                <div className="text-[13px] leading-relaxed text-gray-400 font-normal mb-6 flex-grow space-y-1">
                                    {career.companyName && <p>at <span className="text-gray-600 font-medium">{career.companyName}</span></p>}
                                    {career.salary && <p>Salary: <span className="text-gray-600">{career.salary}</span></p>}
                                    <p className="line-clamp-2 mt-2">{career.description}</p>
                                </div>

                                <div className="flex items-center text-red-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                                    View Details <ArrowRight size={14} className="ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {careers.length === 0 && (
                        <div className="col-span-full text-center py-20 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                            <Briefcase size={24} className="text-gray-300 mx-auto mb-3" />
                            <h3 className="text-base font-bold text-gray-900">No open positions</h3>
                            <p className="text-sm text-gray-500 mt-1">Please check back later.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}