import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Redlix Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
  openGraph: {
    title: "Privacy Policy | Redlix",
    description: "Redlix Privacy Policy - Learn how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Privacy Policy</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Privacy Framework
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
            <p className="text-gray-600 text-lg">
              Last Updated: <strong>February 7, 2026</strong> — Transparency regarding our freelance data practices.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Overview</h2>
              <p>
                This Privacy Policy describes how <strong>Redlix Studio</strong>, operating as an <strong>independent freelance studio</strong>, collects, uses, stores, and protects personal and professional information shared through this website. <strong>Redlix Studio is not a registered company or legal entity</strong> and functions solely as a <strong>freelance brand</strong>. Information is collected strictly for professional, communication, and service-related purposes and is handled in accordance with applicable <strong className="text-red-600">Indian laws</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We collect only the information voluntarily provided by users when they contact us, submit inquiries, or engage us for freelance services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Names and email addresses</li>
                <li>Contact details</li>
                <li>Project requirements</li>
                <li>Related professional information</li>
              </ul>
              <p className="mt-3">
                <strong>No sensitive personal data</strong> is intentionally collected unless it is required for the execution of a specific freelance engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Use of Information</h2>
              <p>
                The information collected is used solely for <strong>legitimate freelance purposes</strong>, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Responding to inquiries</li>
                <li>Managing communication</li>
                <li>Coordinating projects</li>
                <li>Delivering agreed services</li>
              </ul>
              <p className="mt-3">
                We <strong>do not use personal data for advertising or profiling</strong>. <strong>Redlix Studio does not monetize personal information</strong> under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Project Management & Internal Tools</h2>
              <p>
                Client information may be stored within <strong>internal project tracking and collaboration tools</strong> used for freelance operations. These tools are utilized strictly to ensure effective planning, communication, and delivery. Access is limited to the <strong>freelancer(s) directly involved</strong> in the respective project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Portfolio and Case Studies</h2>
              <p>
                This website functions as a <strong>professional portfolio</strong>. Any projects displayed are shared in a <strong>generalized or anonymized manner</strong> unless <strong>explicit written consent</strong> has been obtained. <strong>Proprietary credentials or private client materials are never disclosed publicly</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Security Measures</h2>
              <p>
                <strong>Industry-standard security practices</strong> are implemented across our freelance toolset, including the <strong>CSAPP system</strong>. Measures include <strong>secure access controls</strong> and <strong>restricted permissions</strong> within development systems to safeguard client data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
              <p>
                Personal and project data is retained only as long as necessary to fulfill <strong>professional or legal requirements</strong>. Upon project completion, data may be archived or securely deleted unless retention is <strong>contractually mandated</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Disclosure</h2>
              <p>
                We <strong>do not share personal information with third parties</strong> except where required to complete a freelance service (e.g., domain registration) <strong>explicitly requested by you</strong>, or where <strong>mandated by law</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Legal Compliance</h2>
              <p>
                This policy is governed by <strong className="text-red-600">Indian law</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>. Users accessing the site from outside India acknowledge that information may be processed in <strong className="text-red-600">India under these standards</strong>.
              </p>
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-600 rounded">
                <p className="text-gray-800">
                  <strong className="text-red-600">Key Legal Framework:</strong> This Privacy Policy operates under the jurisdiction of <strong className="text-red-600">Indian laws</strong>, with primary compliance to the <strong className="text-red-600">Information Technology Act, 2000</strong> and its associated rules and regulations governing data protection and privacy in India.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. User Rights</h2>
              <p>
                As a user of Redlix Studio's services, you have the following rights under applicable <strong className="text-red-600">Indian laws</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Right to Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                <li><strong>Right to Correction:</strong> You may request correction of any inaccurate or incomplete personal information.</li>
                <li><strong>Right to Withdrawal:</strong> You have the right to withdraw consent for data processing at any time, where processing is based on consent.</li>
                <li><strong>Right to Grievance:</strong> You may file a grievance regarding the processing of your personal information.</li>
                <li><strong>Right to Data Portability:</strong> Where applicable, you may request a copy of your data in a structured format.</li>
                <li><strong>Right to Deletion:</strong> You may request deletion of your personal information, subject to legal and contractual obligations.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:help.ckrdatapoint@gmail.com" className="text-red-600 hover:underline font-semibold">help.ckrdatapoint@gmail.com</a>. We will respond to your request in accordance with applicable <strong className="text-red-600">Indian laws</strong> and the <strong className="text-red-600">Information Technology Act, 2000</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:help.ckrdatapoint@gmail.com" className="text-red-600 hover:underline font-semibold">help.ckrdatapoint@gmail.com</a></p>
                <p><strong>Website:</strong> <Link href="https://www.redlix.co.in" className="text-red-600 hover:underline">www.redlix.co.in</Link></p>
                <p><strong>Location:</strong> <strong>Hyderabad, India</strong></p>
                <p><strong>Founder:</strong> <strong>Rishi Rohan Kalapala</strong></p>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Note:</strong> Redlix Studio operates as an independent freelance studio and is not a registered company or legal entity.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
