"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

const initialState = {
    error: "",
};

export default function AdminLogin() {
    const [state, formAction, isPending] = useActionState(loginAction, initialState);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-96">
                <h1 className="mb-6 text-2xl font-bold text-center">Admin Login</h1>
                <form action={formAction} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    {state?.error && (
                        <p className="text-red-500 text-sm text-center">{state.error}</p>
                    )}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-blue-400"
                    >
                        {isPending ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
