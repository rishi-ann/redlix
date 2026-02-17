import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body.title || !body.description) {
            return NextResponse.json(
                { error: "Title and description are required" },
                { status: 400 }
            );
        }

        let slug = slugify(body.title, { lower: true, strict: true });

        const existing = await prisma.career.findUnique({ where: { slug } });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }

        const career = await prisma.career.create({
            data: {
                title: body.title,
                slug,
                location: body.location,
                jobType: body.jobType,
                experience: body.experience,
                salary: body.salary,
                companyName: body.companyName,
                companyLogo: body.companyLogo,
                description: body.description,
                requirements: body.requirements,
                responsibilities: body.responsibilities,
            },
        });

        return NextResponse.json(career);
    } catch (error) {
        console.error("Error creating career:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID required" }, { status: 400 });
        }

        await prisma.career.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting career:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
