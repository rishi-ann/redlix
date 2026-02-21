
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if subscription already exists
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            if (!existingSubscriber.isActive) {
                // Reactive if they unsubscribed previously
                await prisma.newsletter.update({
                    where: { email },
                    data: { isActive: true },
                });
                return NextResponse.json({ message: 'Subscribed successfully' });
            }
            return NextResponse.json(
                { message: 'Email already subscribed' },
                { status: 409 }
            );
        }

        await prisma.newsletter.create({
            data: { email },
        });

        return NextResponse.json(
            { message: 'Subscribed successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
