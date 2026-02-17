"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
        // Set cookie
        (await cookies()).set("admin_auth", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });
        redirect("/admin/dashboard");
    } else {
        return { error: "Invalid credentials" };
    }
}
