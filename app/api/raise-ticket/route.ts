import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, clientId, pageUrl, description, authorizedPerson } = body;

        // Basic Presence Validation
        if (!name || !clientId || !pageUrl || !description || !authorizedPerson) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Strict Regex Validation
        const nameRegex = /^[A-Za-z\s.'-]{2,100}$/; // Only letters, spaces, dots, dashes
        const clientIdRegex = /^[A-Za-z0-9_-]{3,50}$/; // Alphanumeric, hyphens, underscores
        const safeTextRegex = /^[^<>{}|`]+$/; // Disallow dangerous characters

        if (!nameRegex.test(name)) {
            return NextResponse.json({ message: "Invalid Name format" }, { status: 400 });
        }
        if (!clientIdRegex.test(clientId)) {
            return NextResponse.json({ message: "Invalid Client ID format" }, { status: 400 });
        }
        if (!nameRegex.test(authorizedPerson)) {
            return NextResponse.json({ message: "Invalid Authorized Person format" }, { status: 400 });
        }
        if (!safeTextRegex.test(description)) {
            return NextResponse.json({ message: "Description contains invalid characters" }, { status: 400 });
        }
        if (!safeTextRegex.test(pageUrl)) {
            return NextResponse.json({ message: "URLs contain invalid characters" }, { status: 400 });
        }

        // Generate Ticket ID e.g., TKT-8A3B-2C
        const generateTicketId = () => {
            const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
            return `TKT-${randomStr.substring(0, 4)}-${randomStr.substring(4)}`;
        };

        const ticketId = generateTicketId();

        // Create the support ticket in DB
        const ticket = await prisma.supportTicket.create({
            data: {
                ticketId,
                name,
                clientId,
                pageUrl,
                description,
                authorizedPerson,
                status: "OPEN",
            },
        });

        // Add additional notification logic like email sending here in the future if needed

        return NextResponse.json(
            { message: "Ticket created successfully", ticketId: ticket.ticketId },
            { status: 201 }
        );
    } catch (error) {
        console.error("Support Ticket Creation Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
