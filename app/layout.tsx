import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.redlix.co.in"),
  title: {
    default: "Redlix - Strategic Web Design & Development Agency",
    template: "%s | Redlix",
  },
  description: "Redlix specializes in engineering high-performance ecosystems, management portals, and strategic web design for modern institutions. We deliver full-stack development, UI/UX strategy, and scalable cloud infrastructure.",
  keywords: ["web design", "web development", "full stack development", "UI/UX design", "Next.js", "React", "digital agency", "B2B software", "enterprise solutions", "Rishi Rohan Kalapala"],
  authors: [{ name: "Rishi Rohan Kalapala" }, { name: "Redlix" }],
  creator: "Rishi Rohan Kalapala",
  publisher: "Redlix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Redlix",
    title: "Redlix - Strategic Web Design & Development Agency",
    description: "Strategic web design, and campaigns tailored to drive results and conversions. Engineering high-performance ecosystems for modern institutions.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Redlix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redlix - Strategic Web Design & Development Agency",
    description: "Strategic web design, and campaigns tailored to drive results and conversions.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.redlix.co.in";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Redlix",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.png`,
    "description": "Strategic web design, and campaigns tailored to drive results and conversions. Engineering high-performance ecosystems for modern institutions.",
    "founder": {
      "@type": "Person",
      "name": "Rishi Rohan Kalapala",
      "jobTitle": "Founder & Lead Developer",
      "description": "Founder and Lead Developer of Redlix, specializing in full-stack development and systems architecture."
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@redlix.com",
      "contactType": "Customer Service"
    }
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rishi Rohan Kalapala",
    "jobTitle": "Founder & Lead Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Redlix"
    },
    "description": "Rishi Rohan Kalapala is the Founder and Lead Developer of Redlix, a strategic web design and development agency. He specializes in full-stack development, systems architecture, and engineering high-performance ecosystems for modern institutions.",
    "knowsAbout": ["Web Development", "Full Stack Development", "Systems Architecture", "Next.js", "React", "TypeScript", "B2B Software", "Enterprise Solutions"]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
