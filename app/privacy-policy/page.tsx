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

      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-black mb-4 sm:mb-6">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black">Privacy Policy</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 sm:mb-4">
              <span className="text-red-600">Privacy</span> Framework
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"><span className="text-red-600">Privacy</span> Policy</h2>
            <p className="text-black text-base sm:text-lg">
              Last Updated: <span className="text-red-600">February 7, 2026</span> — Transparency regarding our <span className="text-red-600">freelance data practices</span>.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8 text-black">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">1.</span> Overview</h2>
              <p className="text-black">
                This <span className="text-red-600">Privacy Policy</span> describes how <strong className="text-red-600">Redlix Studio</strong>, operating as an <span className="text-red-600">independent freelance studio</span>, collects, uses, stores, and protects <span className="text-red-600">personal and professional information</span> shared through this website. <strong className="text-red-600">Redlix Studio is not a registered company or legal entity</strong> and functions solely as a <span className="text-red-600">freelance brand</span>. Information is collected strictly for <span className="text-red-600">professional</span>, <span className="text-red-600">communication</span>, and <span className="text-red-600">service-related purposes</span> and is handled in accordance with applicable <strong className="text-red-600">Indian laws</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">2.</span> Information We Collect</h2>
              <p className="text-black">
                We collect only the <span className="text-red-600">information voluntarily provided</span> by users when they contact us, submit inquiries, or engage us for <span className="text-red-600">freelance services</span>. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><span className="text-red-600">Names</span> and <span className="text-red-600">email addresses</span></li>
                <li><span className="text-red-600">Contact details</span></li>
                <li><span className="text-red-600">Project requirements</span></li>
                <li><span className="text-red-600">Client IDs</span> and <span className="text-red-600">Support Ticket Details</span> when utilizing our Ticket system</li>
                <li>Related <span className="text-red-600">professional information</span></li>
              </ul>
              <p className="mt-3 text-black">
                <strong className="text-red-600">No sensitive personal data</strong> is intentionally collected unless it is required for the execution of a specific <span className="text-red-600">freelance engagement</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">3.</span> Use of Information</h2>
              <p className="text-black">
                The information collected is used solely for <strong className="text-red-600">legitimate freelance purposes</strong>, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li>Responding to <span className="text-red-600">inquiries</span></li>
                <li>Managing <span className="text-red-600">communication</span></li>
                <li>Coordinating <span className="text-red-600">projects</span></li>
                <li>Delivering agreed <span className="text-red-600">services</span></li>
              </ul>
              <p className="mt-3 text-black">
                We <strong className="text-red-600">do not use personal data for advertising or profiling</strong>. <strong className="text-red-600">Redlix Studio does not monetize personal information</strong> under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">4.</span> Project Management & Internal Tools</h2>
              <p className="text-black">
                Client information may be stored within <strong className="text-red-600">internal project tracking and collaboration tools</strong> used for <span className="text-red-600">freelance operations</span>. These tools are utilized strictly to ensure effective <span className="text-red-600">planning</span>, <span className="text-red-600">communication</span>, and <span className="text-red-600">delivery</span>. Access is limited to the <strong className="text-red-600">freelancer(s) directly involved</strong> in the respective project.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">5.</span> Support Ticketing System</h2>
              <p className="text-black">
                When using our <Link href="/raise-ticket" className="text-red-600 hover:underline">Raise a Ticket</Link> and <Link href="/track-ticket" className="text-red-600 hover:underline">Track Ticket</Link> pages, we collect specific project parameters including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><span className="text-red-600">Authorized Submitter Names</span></li>
                <li><span className="text-red-600">Client Identifiers (IDs)</span></li>
                <li><span className="text-red-600">Target URLs</span> and detailed <span className="text-red-600">Change Descriptions</span></li>
              </ul>
              <p className="mt-3 text-black">
                This information is securely logged into our internal dashboards strictly to <strong className="text-red-600">monitor system changes, execute technical developments, and satisfy service commitments</strong>. We generate a <span className="text-red-600">unique Ticket ID</span> for you enabling transparent progress tracking. This framework aligns securely with our independent freelance scope and is maintained under confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">6.</span> Portfolio and Case Studies</h2>
              <p className="text-black">
                This website functions as a <strong className="text-red-600">professional portfolio</strong>. Any projects displayed are shared in a <strong className="text-red-600">generalized or anonymized manner</strong> unless <strong className="text-red-600">explicit written consent</strong> has been obtained. <strong className="text-red-600">Proprietary credentials or private client materials are never disclosed publicly</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">7.</span> Data Security Measures</h2>
              <p className="text-black">
                <strong className="text-red-600">Industry-standard security practices</strong> are implemented across our <span className="text-red-600">freelance toolset</span>, including the <strong className="text-red-600">CSAPP system</strong>. Measures include <strong className="text-red-600">secure access controls</strong> and <strong className="text-red-600">restricted permissions</strong> within development systems to safeguard <span className="text-red-600">client data</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">8.</span> Data Retention</h2>
              <p className="text-black">
                Personal and project data is retained only as long as necessary to fulfill <strong className="text-red-600">professional or legal requirements</strong>. Upon project completion, data may be archived or securely deleted unless retention is <strong className="text-red-600">contractually mandated</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">9.</span> Third-Party Disclosure</h2>
              <p className="text-black">
                We <strong className="text-red-600">do not share personal information with third parties</strong> except where required to complete a <span className="text-red-600">freelance service</span> (e.g., domain registration) <strong className="text-red-600">explicitly requested by you</strong>, or where <strong className="text-red-600">mandated by law</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">10.</span> Legal Compliance</h2>
              <p className="text-black">
                This policy is governed by <strong className="text-red-600">Indian law</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>. Users accessing the site from outside India acknowledge that information may be processed in <strong className="text-red-600">India under these standards</strong>.
              </p>
              <div className="mt-4 p-4 sm:p-5 bg-red-50 border-l-4 border-red-600 rounded-lg">
                <p className="text-black">
                  <strong className="text-red-600">Key Legal Framework:</strong> This <span className="text-red-600">Privacy Policy</span> operates under the jurisdiction of <strong className="text-red-600">Indian laws</strong>, with primary compliance to the <strong className="text-red-600">Information Technology Act, 2000</strong> and its associated rules and regulations governing <span className="text-red-600">data protection</span> and <span className="text-red-600">privacy</span> in India.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">11.</span> User Rights</h2>
              <p className="text-black">
                As a user of <span className="text-red-600">Redlix Studio's services</span>, you have the following rights under applicable <strong className="text-red-600">Indian laws</strong>, including the <strong className="text-red-600">Information Technology Act, 2000</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><strong className="text-red-600">Right to Access:</strong> You have the right to request access to the <span className="text-red-600">personal information</span> we hold about you.</li>
                <li><strong className="text-red-600">Right to Correction:</strong> You may request correction of any inaccurate or incomplete <span className="text-red-600">personal information</span>.</li>
                <li><strong className="text-red-600">Right to Withdrawal:</strong> You have the right to withdraw <span className="text-red-600">consent</span> for data processing at any time, where processing is based on consent.</li>
                <li><strong className="text-red-600">Right to Grievance:</strong> You may file a <span className="text-red-600">grievance</span> regarding the processing of your <span className="text-red-600">personal information</span>.</li>
                <li><strong className="text-red-600">Right to Data Portability:</strong> Where applicable, you may request a copy of your <span className="text-red-600">data</span> in a structured format.</li>
                <li><strong className="text-red-600">Right to Deletion:</strong> You may request <span className="text-red-600">deletion</span> of your <span className="text-red-600">personal information</span>, subject to legal and contractual obligations.</li>
              </ul>
              <p className="mt-4 text-black">
                To exercise any of these rights, please contact us at <a href="mailto:hello@redlix.com" className="text-red-600 hover:underline font-semibold">hello@redlix.com</a>. We will respond to your request in accordance with applicable <strong className="text-red-600">Indian laws</strong> and the <strong className="text-red-600">Information Technology Act, 2000</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">12.</span> Contact Us</h2>
              <p className="text-black">
                If you have any questions about this <span className="text-red-600">Privacy Policy</span> or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-black">
                <p><strong className="text-red-600">Email:</strong> <a href="mailto:hello@redlix.com" className="text-red-600 hover:underline font-semibold">hello@redlix.com</a></p>
                <p><strong className="text-red-600">Website:</strong> <Link href="/" className="text-red-600 hover:underline">www.redlix.co.in</Link></p>
                <p><strong className="text-red-600">Location:</strong> <span className="text-red-600">Hyderabad, Telangana, India</span></p>
                <p><strong className="text-red-600">Founder:</strong> <span className="text-red-600">Rishi Rohan Kalapala</span></p>
                <p className="mt-4 text-sm text-black">
                  <strong className="text-red-600">Note:</strong> Redlix Studio operates as an <span className="text-red-600">independent freelance studio</span> and is not a registered company or legal entity.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-black">
                This <span className="text-red-600">Privacy Policy</span> is part of our <Link href="/terms" className="text-red-600 hover:underline">Terms of Service</Link> and <Link href="/cookies-policy" className="text-red-600 hover:underline">Cookies Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
