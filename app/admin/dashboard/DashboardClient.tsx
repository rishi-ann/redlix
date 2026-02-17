"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    FileText,
    Plus,
    Trash2,
    MapPin,
    Clock,
    DollarSign,
    ExternalLink,
    Menu,
    Home,
    X,
    Server,
} from "lucide-react";

// Types
type Application = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    resumeUrl: string;
    createdAt: Date;
    careerId: string;
};

type Career = {
    id: string;
    title: string;
    slug: string;
    location: string;
    jobType: string;
    experience: string;
    salary: string | null;
    companyName: string | null;
    companyLogo: string | null;
    description: string;
    requirements: string;
    responsibilities: string;
    status: boolean;
    createdAt: Date;
    applications?: Application[];
};

type MaintenanceRequest = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    clientId: string | null;
    requestType: string;
    status: string;
    createdAt: Date;
};

export function DashboardClient({ initialCareers, initialMaintenanceRequests }: { initialCareers: Career[], initialMaintenanceRequests: MaintenanceRequest[] }) {
    const [careers, setCareers] = useState<Career[]>(initialCareers);
    const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceRequest[]>(initialMaintenanceRequests);
    const router = useRouter();
    const [activeView, setActiveView] = useState<"jobs" | "applications" | "maintenance">("jobs");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar toggle

    // Flatten applications for the "Applications" view
    const allApplications = careers.flatMap(career =>
        (career.applications || []).map(app => ({
            ...app,
            careerTitle: career.title
        }))
    ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        jobType: "Full-time",
        experience: "",
        salary: "",
        description: "",
        requirements: "",
        responsibilities: "",
        companyName: "",
        companyLogo: "",
    });
    const [loading, setLoading] = useState(false);

    // Modal State
    const [selectedCareerValues, setSelectedCareerValues] = useState<Career | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to create career");

            const newCareer = await res.json();
            setCareers([newCareer, ...careers]);
            setFormData({
                title: "",
                location: "",
                jobType: "Full-time",
                experience: "",
                salary: "",
                description: "",
                requirements: "",
                responsibilities: "",
                companyName: "",
                companyLogo: "",
            });
            router.refresh();
        } catch (error) {
            alert("Error adding career");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this listing?")) return;

        try {
            const res = await fetch(`/api/careers?id=${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete");

            setCareers(careers.filter((c) => c.id !== id));
            router.refresh();
        } catch (error) {
            alert("Error deleting career");
        }
    };

    const inputClass = "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm";
    const labelClass = "block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5";

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-20 px-4 py-3 flex justify-between items-center">
                <span className="font-bold text-xl tracking-tight">Redlix Admin</span>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-gray-900 to-black text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen overflow-y-auto
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="p-6 border-b border-white/10">
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                        alt="Redlix Logo"
                        className="h-12 w-auto object-contain mb-2"
                    />
                    <p className="text-xs text-gray-400 mt-2">Administration Console</p>
                </div>

                <nav className="mt-6 px-4 space-y-2">
                    <button
                        onClick={() => { setActiveView("jobs"); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${activeView === "jobs"
                            ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <Briefcase size={18} className="mr-3" />
                        Manage Jobs
                    </button>
                    <button
                        onClick={() => { setActiveView("applications"); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${activeView === "applications"
                            ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <FileText size={18} className="mr-3" />
                        Applications
                        {allApplications.length > 0 && (
                            <span className={`ml-auto py-0.5 px-2 rounded-full text-xs font-bold ${activeView === "applications" ? "bg-white text-red-500" : "bg-white/10 text-white"
                                }`}>
                                {allApplications.length}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => { setActiveView("maintenance"); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${activeView === "maintenance"
                            ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <Server size={18} className="mr-3" />
                        Maintenance
                        {maintenanceRequests.length > 0 && (
                            <span className={`ml-auto py-0.5 px-2 rounded-full text-xs font-bold ${activeView === "maintenance" ? "bg-white text-red-500" : "bg-white/10 text-white"
                                }`}>
                                {maintenanceRequests.length}
                            </span>
                        )}
                    </button>
                </nav>

                <div className="absolute bottom-8 left-0 right-0 px-4">
                    <a href="/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                        <Home size={18} className="mr-3" />
                        Back to Site
                    </a>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 lg:p-10 p-4 pt-20 lg:pt-10 bg-gradient-to-br from-gray-50 to-white h-screen overflow-y-auto">
                <div className="max-w-7xl mx-auto">

                    {activeView === "jobs" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Job Listings</h1>
                                    <p className="text-gray-500 mt-2">Manage open positions and requirements.</p>
                                </div>
                            </div>

                            {/* Add Career Form - Full Width */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                                        <Plus size={20} />
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900">Post New Role</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className={labelClass}>Job Title</label>
                                        <input
                                            name="title"
                                            placeholder="e.g. Senior Product Designer"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className={inputClass}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <label className={labelClass}>Location</label>
                                            <input
                                                name="location"
                                                placeholder="e.g. Remote"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className={inputClass}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Type</label>
                                            <select
                                                name="jobType"
                                                value={formData.jobType}
                                                onChange={handleChange}
                                                className={inputClass}
                                            >
                                                <option>Full-time</option>
                                                <option>Part-time</option>
                                                <option>Contract</option>
                                                <option>Internship</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClass}>Experience</label>
                                            <input
                                                name="experience"
                                                placeholder="e.g. 3+ Years"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className={inputClass}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Salary (Optional)</label>
                                            <input
                                                name="salary"
                                                placeholder="e.g. $80k - $120k"
                                                value={formData.salary}
                                                onChange={handleChange}
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-red-50/30 p-4 rounded-xl border border-red-100">
                                        <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">External Opportunity (Optional)</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className={labelClass}>Company Name</label>
                                                <input
                                                    name="companyName"
                                                    placeholder="e.g. Google"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClass}>Logo URL</label>
                                                <input
                                                    name="companyLogo"
                                                    placeholder="https://..."
                                                    value={formData.companyLogo}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass}>Description</label>
                                        <textarea
                                            name="description"
                                            placeholder="Role overview..."
                                            value={formData.description}
                                            onChange={handleChange}
                                            className={`${inputClass} min-h-[80px] resize-y`}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className={labelClass}>Requirements</label>
                                            <textarea
                                                name="requirements"
                                                placeholder="Key skills..."
                                                value={formData.requirements}
                                                onChange={handleChange}
                                                className={`${inputClass} min-h-[80px] resize-y`}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Responsibilities</label>
                                            <textarea
                                                name="responsibilities"
                                                placeholder="Daily tasks..."
                                                value={formData.responsibilities}
                                                onChange={handleChange}
                                                className={`${inputClass} min-h-[80px] resize-y`}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="px-8 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-xl flex items-center gap-2"
                                        >
                                            {loading ? "Posting..." : <><Plus size={18} /> Publish Position</>}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* List Careers - Full Width */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-4 p-1">
                                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Roles</span>
                                    <span className="bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs font-bold">{careers.length}</span>
                                </div>

                                {careers.map((career) => (
                                    <div
                                        key={career.id}
                                        className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-red-100 transition-all duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                                    >
                                        <div className="space-y-3 flex-grow min-w-0">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-lg font-bold text-gray-900 truncate">{career.title}</h3>
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${career.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                                    }`}>
                                                    {career.status ? "Live" : "Closed"}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 items-center">
                                                <span className="flex items-center gap-1.5"><MapPin size={14} /> {career.location}</span>
                                                <span className="flex items-center gap-1.5"><Briefcase size={14} /> {career.jobType}</span>
                                                <span className="flex items-center gap-1.5"><Clock size={14} /> {career.experience}</span>
                                                {career.salary && <span className="flex items-center gap-1.5 text-green-600 font-medium"><DollarSign size={14} /> {career.salary}</span>}
                                            </div>
                                            <div className="pt-2">
                                                <button
                                                    onClick={() => setSelectedCareerValues(career)}
                                                    className="text-sm font-semibold text-red-600 hover:text-red-800 hover:underline flex items-center gap-1.5 transition-colors"
                                                >
                                                    View Applications <span className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded text-xs ml-1">{career.applications?.length || 0}</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleDelete(career.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                title="Delete Listing"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {careers.length === 0 && (
                                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <Briefcase size={24} />
                                        </div>
                                        <p className="text-gray-900 text-lg font-semibold">No active listings</p>
                                        <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto">Get started by creating a new job position using the form.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeView === "applications" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Applications</h1>
                                <p className="text-gray-500 mt-2">Track and manage candidate submissions.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                {allApplications.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50/50 border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                                                    <th className="px-6 py-4 font-semibold">Candidate</th>
                                                    <th className="px-6 py-4 font-semibold">Role</th>
                                                    <th className="px-6 py-4 font-semibold">Contact</th>
                                                    <th className="px-6 py-4 font-semibold">Date</th>
                                                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {allApplications.map((app) => (
                                                    <tr key={app.id} className="group hover:bg-gray-50/80 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="font-semibold text-gray-900">{app.fullName}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                                {app.careerTitle}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-900">{app.email}</div>
                                                            <div className="text-xs text-gray-500 mt-0.5 font-mono">{app.phone}</div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {new Date(app.createdAt).toLocaleDateString(undefined, {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <a
                                                                href={app.resumeUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black border border-gray-200 hover:border-gray-400 bg-white px-3 py-1.5 rounded-lg transition-all shadow-sm"
                                                            >
                                                                <ExternalLink size={14} />
                                                                Resume
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center py-24">
                                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <FileText size={24} />
                                        </div>
                                        <p className="text-gray-900 text-lg font-semibold">No applications yet</p>
                                        <p className="text-gray-500 text-sm mt-1">Candidates will appear here once they apply.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeView === "maintenance" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Maintenance Requests</h1>
                                <p className="text-gray-500 mt-2">Manage system check requests from clients.</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                {maintenanceRequests.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50/50 border-b border-gray-100 text-xs text-gray-500 uppercase tracking-wider">
                                                    <th className="px-6 py-4 font-semibold">Client</th>
                                                    <th className="px-6 py-4 font-semibold">Details</th>
                                                    <th className="px-6 py-4 font-semibold">Status</th>
                                                    <th className="px-6 py-4 font-semibold">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {maintenanceRequests.map((req) => (
                                                    <tr key={req.id} className="group hover:bg-gray-50/80 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="font-semibold text-gray-900">{req.firstName} {req.lastName}</div>
                                                            <div className="text-xs text-gray-500 mt-0.5">{req.email}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-1">
                                                                {req.requestType}
                                                            </span>
                                                            <div className="text-xs text-gray-500 font-mono">ID: {req.clientId || 'N/A'}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${req.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                                req.status === 'RESOLVED' ? 'bg-green-100 text-green-800' :
                                                                    'bg-gray-100 text-gray-800'
                                                                }`}>
                                                                {req.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {new Date(req.createdAt).toLocaleDateString(undefined, {
                                                                year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                                            })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center py-24">
                                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <Server size={24} />
                                        </div>
                                        <p className="text-gray-900 text-lg font-semibold">No requests yet</p>
                                        <p className="text-gray-500 text-sm mt-1">Requests submitted via the maintenance page will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </main >

            {/* Applications Modal (Specific Jobs - Retained for View Applications button) */}
            {
                selectedCareerValues && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
                        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-2xl">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Applicants
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-0.5">For {selectedCareerValues.title}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCareerValues(null)}
                                    className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 overflow-y-auto flex-grow bg-white">
                                {selectedCareerValues.applications && selectedCareerValues.applications.length > 0 ? (
                                    <div className="space-y-4">
                                        {selectedCareerValues.applications.map((app) => (
                                            <div key={app.id} className="border border-gray-100 rounded-xl p-5 hover:border-blue-100 hover:shadow-sm transition-all group">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-lg">{app.fullName}</h3>
                                                        <p className="text-sm text-gray-500">{new Date(app.createdAt).toLocaleDateString()}</p>
                                                    </div>
                                                    <a
                                                        href={app.resumeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 group-hover:text-blue-600 transition-colors"
                                                    >
                                                        <ExternalLink size={18} />
                                                    </a>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                                                    <div className="bg-gray-50 p-3 rounded-lg">
                                                        <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Email</span>
                                                        <span className="text-gray-900 font-medium overflow-hidden text-ellipsis block">{app.email}</span>
                                                    </div>
                                                    <div className="bg-gray-50 p-3 rounded-lg">
                                                        <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">Phone</span>
                                                        <span className="text-gray-900 font-medium font-mono">{app.phone}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                                            <FileText size={20} />
                                        </div>
                                        <p className="text-gray-600 font-medium">No candidates yet.</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl text-right">
                                <button
                                    onClick={() => setSelectedCareerValues(null)}
                                    className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:text-black transition-colors font-medium text-sm shadow-sm"
                                >
                                    Close View
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
