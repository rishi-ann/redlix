import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUS System - Sports Administration Platform",
  description: "How HSGA Telangana and Redlix unified sports administration. A massive digital infrastructure project centralizing management of sports associations, athletes, and tournaments across Telangana with real-time scoring and centralized registry.",
  keywords: ["sports management", "athlete database", "tournament operations", "government infrastructure", "HUS System", "sports administration"],
  openGraph: {
    title: "HUS System - Sports Administration Platform",
    description: "How HSGA Telangana and Redlix unified sports administration. A massive digital infrastructure project for sports management.",
    url: "/hus-system",
  },
  alternates: {
    canonical: "/hus-system",
  },
};

export default function HUSSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
