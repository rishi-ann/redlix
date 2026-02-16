import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "Redlix Cookies Policy - Learn about how we use cookies and similar technologies to enhance your browsing experience and analyze site traffic.",
  openGraph: {
    title: "Cookies Policy | Redlix",
    description: "Redlix Cookies Policy - Learn about how we use cookies and similar technologies.",
    url: "/cookies-policy",
  },
  alternates: {
    canonical: "/cookies-policy",
  },
};

export default function CookiesPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
