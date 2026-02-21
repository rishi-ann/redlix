"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, UploadCloud } from "lucide-react";

export default function ApplicationForm({ careerId }: { careerId: string }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        resumeUrl: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numbersOnly = value.replace(/[^0-9]/g, "");
            if (numbersOnly.length <= 10) {
                setFormData({ ...formData, [name]: numbersOnly });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        if (formData.phone.length !== 10) {
            setStatus("error");
            setMessage("Please enter a valid 10-digit Indian mobile number.");
            return;
        }

        try {
            const formattedPhone = `+91 ${formData.phone}`;

            const res = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, phone: formattedPhone, careerId }),
            });

            if (!res.ok) throw new Error("Application failed");

            setStatus("success");
            setMessage("Application submitted successfully!");
            setFormData({ fullName: "", email: "", phone: "", resumeUrl: "" });
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 rounded-xl p-6 text-center animate-in fade-in duration-300 border border-green-100">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                    <CheckCircle size={28} />
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-1">Application Received!</h3>
                <p className="text-sm text-green-700">Thank you for applying. We'll be in touch soon.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-xs font-semibold text-green-700 hover:text-green-900 underline"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    const inputClass = "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm";
    const labelClass = "block text-xs font-medium text-red-600 mb-1 ml-0.5";

    return (
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Reduced space-y */}
            {status === "error" && (
                <div className="p-3 rounded-md bg-red-50 border border-red-100 flex items-start gap-2"> {/* Reduced padding */}
                    <AlertCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" /> {/* Reduced icon size */}
                    <p className="text-xs text-red-600">{message}</p> {/* Reduced font size */}
                </div>
            )}

            <div>
                <label className={labelClass}>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                />
            </div>

            <div>
                <label className={labelClass}>Email Address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                />
            </div>

            <div>
                <label className={labelClass}>Phone Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 text-sm"> {/* Adjusted text size */}
                        +91
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputClass} pl-12`}
                        required
                        pattern="[0-9]{10}"
                    />
                </div>
                <p className="text-[10px] text-gray-400 mt-1 ml-0.5">Enter your 10-digit mobile number</p> {/* Reduced font size and margin */}
            </div>

            <div>
                <label className={labelClass}>Resume / Portfolio Link</label>
                <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <UploadCloud size={16} /> {/* Reduced icon size */}
                    </div>
                    <input
                        type="url"
                        name="resumeUrl"
                        placeholder="https://drive.google.com/..."
                        value={formData.resumeUrl}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>
                <p className="text-[10px] text-gray-400 mt-1 ml-0.5">Google Drive, LinkedIn, or personal website link</p> {/* Reduced font size and margin */}
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-3 text-sm" // Simplified button, reduced padding/font
            >
                {status === "submitting" ? (
                    "Submitting..."
                ) : (
                    <>Submit Application <Send size={16} /></> // Reduced icon size
                )}
            </button>
        </form>
    );
}