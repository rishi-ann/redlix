import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assuming prisma client instance utility exists

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, clientId, requestType } = body;

        const request = await prisma.maintenanceRequest.create({
            data: {
                firstName,
                lastName,
                email,
                clientId,
                requestType,
                status: 'PENDING',
            },
        });

        return NextResponse.json(request, { status: 201 });
    } catch (error) {
        console.error('Error creating maintenance request:', error);
        return NextResponse.json({ error: 'Failed to create request' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const requests = await prisma.maintenanceRequest.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(requests);
    } catch (error) {
        console.error('Error fetching maintenance requests:', error);
        return NextResponse.json({ error: 'Failed to fetch requests' }, { status: 500 });
    }
}
