import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redlix Tracker - Client Project Management System",
  description: "How Redlix Tracker and Redlix made project management seamless. A comprehensive B2B client project tracking system built with Next.js, TypeScript, and Tailwind CSS for efficient brand onboarding and real-time progress monitoring.",
  keywords: ["project management", "B2B software", "client tracking", "Next.js", "TypeScript", "enterprise software", "Redlix Tracker"],
  openGraph: {
    title: "Redlix Tracker - Client Project Management System",
    description: "How Redlix Tracker and Redlix made project management seamless. A comprehensive B2B client project tracking system.",
    url: "/csapp",
  },
  alternates: {
    canonical: "/csapp",
  },
};

export default function CSAPPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
