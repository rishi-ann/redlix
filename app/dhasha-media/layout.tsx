import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhasha Media - Creator Booking System",
  description: "How Dhasha Media and Redlix automate complex media workflows. A centralized digital platform for managing media creator discovery, booking, coordination, and project lifecycles with the Central Booking System (CBS).",
  keywords: ["media booking system", "creator management", "ERP development", "media agency software", "workflow automation", "Dhasha Media"],
  openGraph: {
    title: "Dhasha Media - Creator Booking System",
    description: "How Dhasha Media and Redlix automate complex media workflows. A centralized digital platform for managing media creators.",
    url: "/dhasha-media",
  },
  alternates: {
    canonical: "/dhasha-media",
  },
};

export default function DhashaMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
