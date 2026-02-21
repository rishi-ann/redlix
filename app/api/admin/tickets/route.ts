import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json(
                { message: "Ticket ID and new status are required" },
                { status: 400 }
            );
        }

        const updatedTicket = await prisma.supportTicket.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedTicket, { status: 200 });
    } catch (error) {
        console.error("Update Support Ticket Status Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
