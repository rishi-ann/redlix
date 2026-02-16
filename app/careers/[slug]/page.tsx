import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import ApplicationForm from "./ApplicationForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper type for params
type Props = {
    params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export default async function CareerDetailsPage({ params }: Props) {
    const { slug } = await params;

    const career = await prisma.career.findUnique({
        where: { slug },
    });

    if (!career) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
            {/* Hero Section - Condensed */}
            <div className="relative pt-10 pb-10 sm:pt-16 sm:pb-12 border-b border-gray-100">
                <div
                    className={cn(
                        "absolute inset-0 z-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#a3a3a3_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Breadcrumbs - Compact */}
                    <nav className="mb-6 text-xs font-medium text-gray-500">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <Link href="/" className="hover:text-black transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/careers" className="hover:text-black transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-gray-900 truncate max-w-[200px]">
                                {career.title}
                            </li>
                        </ol>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight leading-tight flex flex-col sm:flex-row sm:items-center gap-4">
                                {career.companyLogo ? (
                                    <div className="flex-shrink-0">
                                        <img src={career.companyLogo} alt={career.companyName || "Company Logo"} className="h-16 md:h-20 w-auto object-contain rounded-lg bg-white p-1 border border-gray-100 shadow-sm" />
                                    </div>
                                ) : null}
                                <span>
                                    {career.title}
                                    {career.companyName && <span className="block text-lg text-gray-400 font-medium mt-1">at {career.companyName}</span>}
                                </span>
                            </h1>
                            <div className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600 font-medium text-sm">
                                <span className="flex items-center gap-2"><MapPin size={16} className="text-red-500" /> {career.location}</span>
                                <span className="flex items-center gap-2"><Briefcase size={16} className="text-red-500" /> {career.jobType}</span>
                                <span className="flex items-center gap-2"><Clock size={16} className="text-red-500" /> {career.experience}</span>
                            </div>
                        </div>
                        {career.salary && (
                            <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg self-start">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide block">Salary Range</span>
                                <span className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <span className="text-green-600 text-base">₹</span> {career.salary}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-24 pb-16 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Job Details - Tighter spacing */}
                <div className="lg:col-span-8 space-y-8">
                    <section>
                        <h2 className="text-lg font-bold mb-3 text-gray-900 border-b border-gray-100 pb-2">
                            About the Role
                        </h2>
                        <div className="prose prose-sm md:prose-base text-gray-600 leading-relaxed whitespace-pre-wrap max-w-none">
                            {career.description}
                        </div>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h2 className="text-lg font-bold mb-4 text-gray-900">Requirements</h2>
                        <div className="flex flex-wrap gap-2">
                            {career.requirements.split(/\n|-/).map((req, i) => {
                                const text = req.trim();
                                if (!text) return null;
                                return (
                                    <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-700 shadow-sm">
                                        {text}
                                    </span>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">Key Responsibilities</h2>
                        <div className="space-y-3">
                            {career.responsibilities.split(/\n/).map((res, i) => {
                                const text = res.replace(/^-/, '').trim();
                                if (!text) return null;
                                return (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Application Form Sidebar - Sticky and Compact */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-24 space-y-5">
                        <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-lg shadow-gray-200/40">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-red-600">Apply Now</h3>
                                <p className="text-xs text-gray-500 mt-0.5">Please complete the form below.</p>
                            </div>
                            <ApplicationForm careerId={career.id} />
                        </div>

                        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/20 rounded-full blur-2xl -mr-8 -mt-8"></div>

                            <h4 className="font-bold text-sm mb-3 relative z-10 text-gray-100">Why Redlix?</h4>
                            <ul className="space-y-2 text-xs text-gray-300 relative z-10">
                                <li className="flex items-start gap-2.5"><CheckCircle2 size={14} className="mt-0.5 text-red-500 shrink-0" /> Annual Learning Budget</li>
                                <li className="flex items-start gap-2.5"><CheckCircle2 size={14} className="mt-0.5 text-red-500 shrink-0" /> Remote-First Policy</li>
                                <li className="flex items-start gap-2.5"><CheckCircle2 size={14} className="mt-0.5 text-red-500 shrink-0" /> Performance Bonuses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}