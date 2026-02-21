import { prisma } from "@/lib/prisma";
import { DashboardClient } from "./DashboardClient";

export const dynamic = "force-dynamic"; // Ensure fresh data

export default async function AdminDashboard() {
    const careers = await prisma.career.findMany({
        orderBy: { createdAt: "desc" },
        include: { applications: { orderBy: { createdAt: "desc" } } },
    });

    const maintenanceRequests = await prisma.maintenanceRequest.findMany({
        orderBy: { createdAt: "desc" },
    });

    const supportTickets = await prisma.supportTicket.findMany({
        orderBy: { createdAt: "desc" },
    });

    return <DashboardClient initialCareers={careers} initialMaintenanceRequests={maintenanceRequests} initialSupportTickets={supportTickets} />;
}
