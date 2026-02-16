import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Redlix Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
