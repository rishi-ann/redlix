import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const ticketId = searchParams.get('ticketId');

        if (!ticketId) {
            return NextResponse.json({ message: "Ticket ID is required" }, { status: 400 });
        }

        const ticket = await prisma.supportTicket.findUnique({
            where: { ticketId }
        });

        if (!ticket) {
            return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
        }

        return NextResponse.json({ ticket }, { status: 200 });
    } catch (error) {
        console.error("Fetch Support Ticket Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
