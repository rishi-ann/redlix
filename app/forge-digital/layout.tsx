import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Digital - B2B Marketplace Platform",
  description: "How Forge Digital and Redlix doubled B2B sales velocity. A high-performance B2B marketplace platform with multi-vendor architecture, dynamic pricing engine, and real-time inventory management.",
  keywords: ["B2B marketplace", "multi-vendor platform", "SaaS", "FinTech", "e-commerce", "dynamic pricing", "Forge Digital"],
  openGraph: {
    title: "Forge Digital - B2B Marketplace Platform",
    description: "How Forge Digital and Redlix doubled B2B sales velocity. A high-performance B2B marketplace platform.",
    url: "/forge-digital",
  },
  alternates: {
    canonical: "/forge-digital",
  },
};

export default function ForgeDigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
