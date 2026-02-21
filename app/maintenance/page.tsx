"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Server } from 'lucide-react';

export default function MaintenancePage() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        clientId: '',
        requestType: 'Status Update'
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/maintenance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', clientId: '', requestType: 'Status Update' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="relative flex flex-col lg:flex-row min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-700 overflow-x-hidden">

            {/* Logo */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 hover:opacity-80 transition-opacity">
                <Link href="/">
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                        alt="Redlix Logo"
                        className="h-8 sm:h-10 md:h-14 w-auto object-contain cursor-pointer"
                    />
                </Link>
            </div>

            {/* Left Side - Image/Content Section */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50 items-center justify-center overflow-hidden p-6 sm:p-12 min-h-[50vh] lg:min-h-screen pt-24 lg:pt-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                {/* Decorative Pills (Static) */}

                {/* Top Left - Status */}
                <div className="absolute top-[25%] sm:top-[15%] lg:top-[18%] left-[2%] sm:left-[8%] lg:left-[12%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Status</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">System Upgrade</span>
                </div>

                {/* Top Right - Database */}
                <div className="absolute top-[20%] lg:top-[18%] right-[2%] sm:right-[8%] lg:right-[12%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Database</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">Optimizing...</span>
                </div>

                {/* Upper Middle Left - Priority (New) */}
                <div className="absolute top-[45%] lg:top-[38%] left-[-2%] sm:left-[4%] lg:left-[8%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center scale-90 sm:scale-100">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Priority</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">Critical</span>
                </div>

                {/* Upper Middle Right - Server (New) */}
                <div className="absolute top-[45%] lg:top-[38%] right-[-2%] sm:right-[4%] lg:right-[8%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center scale-90 sm:scale-100">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Server</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">Maintenance</span>
                </div>

                {/* Lower Middle Left - Security */}
                <div className="absolute top-[65%] lg:top-[58%] left-[0%] sm:left-[4%] lg:left-[8%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 items-center scale-90 sm:scale-100 hidden sm:flex">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Security</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">100% Secure</span>
                </div>

                {/* Lower Middle Right - Performance */}
                <div className="absolute top-[65%] lg:top-[58%] right-[0%] sm:right-[4%] lg:right-[8%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 items-center scale-90 sm:scale-100 hidden sm:flex">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Performance</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">Boosting</span>
                </div>

                {/* Bottom Left - Time */}
                <div className="absolute bottom-[10%] lg:bottom-[20%] left-[5%] lg:left-[12%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Est. Time</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">&lt; 2 Hours</span>
                </div>

                {/* Bottom Right - Support */}
                <div className="absolute bottom-[5%] lg:bottom-[20%] right-[3%] lg:right-[12%] bg-white/90 backdrop-blur px-3 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm border border-gray-100 z-20 hover:scale-105 transition-transform duration-300 flex items-center">
                    <span className="text-gray-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mr-1.5 lg:mr-2">Support</span>
                    <span className="text-red-600 text-[10px] sm:text-xs lg:text-sm font-bold">Active</span>
                </div>

                <img
                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771308060/undraw_maintenance_4unj_udjqan.svg"
                    alt="System Maintenance"
                    className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain relative z-10"
                />
            </div>

            {/* Right Side - Form/Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-24 py-24 sm:py-24 lg:py-16 relative bg-white">
                <div className="relative z-10 w-full max-w-md mx-auto">
                    <div className="mb-8 sm:mb-10">
                        <div className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-red-50 text-red-600 mb-5 sm:mb-6 border border-red-100">
                            <Server className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Maintenance Mode</h1>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            If you are requesting us to check your systems, databases, and servers, please verify your identity below.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div className="p-6 bg-green-50 rounded-xl border border-green-100 text-center">
                            <h3 className="text-green-800 font-semibold mb-2">Request Received</h3>
                            <p className="text-green-600 text-sm">We've received your request and our team will be in touch shortly.</p>
                            <button onClick={() => setStatus('idle')} className="mt-4 text-green-700 font-medium text-sm underline hover:text-green-800">Submit another request</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="firstName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="lastName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="clientId" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Client ID</label>
                                <input
                                    type="text"
                                    id="clientId"
                                    value={formData.clientId}
                                    onChange={handleChange}
                                    required
                                    placeholder="CID-8842-X"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="requestType" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Request Type</label>
                                <div className="relative">
                                    <select
                                        id="requestType"
                                        value={formData.requestType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none appearance-none cursor-pointer"
                                    >
                                        <option>Status Update</option>
                                        <option>Emergency Data Access</option>
                                        <option>Report Issue</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-[0.99]"
                                >
                                    {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Redlix Systems</p>
                        <div className="flex gap-4">
                            <Link href="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-red-600 transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
