import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSGA Telangana - Government Digital Infrastructure",
  description: "How HSGA Telangana and Redlix built a digital face for public infrastructure. Official landing page for state-wide sports and gaming infrastructure development in Telangana with WCAG compliance and performance optimization.",
  keywords: ["government website", "public sector", "sports infrastructure", "Telangana", "HSGA", "digital transformation", "accessibility"],
  openGraph: {
    title: "HSGA Telangana - Government Digital Infrastructure",
    description: "How HSGA Telangana and Redlix built a digital face for public infrastructure. Official landing page for state-wide sports infrastructure.",
    url: "/hsga-landing",
  },
  alternates: {
    canonical: "/hsga-landing",
  },
};

export default function HSGALandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
