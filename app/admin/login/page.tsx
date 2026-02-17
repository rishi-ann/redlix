"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import Link from "next/link";
import { Shield, Lock, Mail, ArrowRight, Home } from "lucide-react";

const initialState = {
    error: "",
};

export default function AdminLogin() {
    const [state, formAction, isPending] = useActionState(loginAction, initialState);

    return (
        <div className="relative flex min-h-screen bg-white font-sans overflow-hidden">

            {/* Logo - Top Left (Clickable to go home) */}
            <Link
                href="/"
                className="absolute top-6 left-6 md:top-10 md:left-10 z-50 hover:opacity-80 transition-opacity"
            >
                <img
                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                    alt="Redlix Logo"
                    className="h-10 md:h-14 w-auto object-contain cursor-pointer"
                />
            </Link>

            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50 items-center justify-center p-12">
                <img
                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771347770/undraw_enter-password_1kl4_uczrfb.svg"
                    alt="Admin Login"
                    className="w-full max-w-lg h-auto object-contain"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-24 py-12 relative bg-white">
                <div className="relative z-10 w-full max-w-md mx-auto">
                    {/* Red Box Container */}
                    <div className="bg-red-500 rounded-2xl p-8 md:p-10">
                        {/* Form Header */}
                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
                                Welcome Back
                            </h1>
                            <p className="text-white/90 text-base leading-relaxed">
                                Sign in to access the admin dashboard
                            </p>
                        </div>

                        {/* Login Form */}
                        <form action={formAction} className="space-y-5">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-semibold text-white uppercase tracking-wider">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="admin@redlix.com"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-xs font-semibold text-white uppercase tracking-wider">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {state?.error && (
                                <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                                    <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {state.error}
                                    </p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-black/10 active:scale-[0.99] group"
                                >
                                    {isPending ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Authenticating...
                                        </>
                                    ) : (
                                        <>
                                            Sign In
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="mt-8 pt-6 border-t border-white/20 text-center">
                            <p className="text-xs text-white/80">
                                Protected by enterprise-grade security
                            </p>
                        </div>
                    </div>
                    {/* End Red Box Container */}
                </div>
            </div>
        </div>
    );
}
