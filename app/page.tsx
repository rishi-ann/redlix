import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";

import CSAPP from "@/components/CSAPP";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Redlix, founded by Rishi Rohan Kalapala, specializes in strategic web design, full-stack development, and high-performance ecosystems for modern institutions. Explore our portfolio of B2B software, enterprise solutions, and digital transformation projects.",
  keywords: ["Rishi Rohan Kalapala", "Redlix founder", "web development", "full stack developer"],
  openGraph: {
    title: "Redlix - Strategic Web Design & Development Agency",
    description: "Strategic web design, and campaigns tailored to drive results and conversions. Engineering high-performance ecosystems for modern institutions. Founded by Rishi Rohan Kalapala.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      <Hero />
      <Showcase />

      <Services />

      <FAQ />

      <CSAPP />

      <Testimonials />

      <CTA />

      <Footer />
    </main>
  );
}
