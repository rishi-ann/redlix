import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Redlix Terms of Service - Read our terms and conditions for using our website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
