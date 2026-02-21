import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { careerId, fullName, email, phone, resumeUrl } = body;

        // Basic validation
        if (!careerId || !fullName || !email || !resumeUrl) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if career exists
        const career = await prisma.career.findUnique({
            where: { id: careerId },
        });

        if (!career) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        const application = await prisma.careerApplication.create({
            data: {
                careerId,
                fullName,
                email,
                phone: phone || "",
                resumeUrl,
            },
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
