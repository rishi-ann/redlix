import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Redlix Terms of Service - Read our terms and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | Redlix",
    description: "Redlix Terms of Service - Read our terms and conditions for using our website and services.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Terms of Service</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Legal Disclosure & Terms of Use
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Service</h2>
            <p className="text-gray-600 text-lg">
              Last Updated: <strong>February 7, 2026</strong> — These terms govern your interaction with Redlix Studio.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction and Identity</h2>
              <p>
                Welcome to <strong>Redlix Studio</strong>. <strong>Redlix Studio is a freelance brand name</strong> used by independent professionals to provide design, development, and engineering services. <strong>Redlix Studio is not a registered company</strong>, private limited entity, limited liability partnership (LLP), partnership firm, or corporate organization under the laws of India. The use of the name "Redlix Studio" is strictly for <strong>branding and professional identification purposes</strong> and does not constitute a separate legal entity. All services offered through this platform are provided by <strong>individual freelancers operating independently</strong> under this brand name.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Purpose of the Website</h2>
              <p>
                This website has been developed solely for <strong>professional and informational purposes</strong>. Its primary objectives are to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Present a portfolio of past freelance work</li>
                <li>Demonstrate technical and creative capabilities</li>
                <li>Provide a centralized platform for communication, project coordination, and engagement with clients</li>
              </ul>
              <p className="mt-3">
                The website <strong>does not function as a marketplace, agency, or employer entity</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Nature of Services</h2>
              <p>
                Redlix Studio offers freelance services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Digital product design</li>
                <li>Web development</li>
                <li>Application logic</li>
                <li>Cloud infrastructure</li>
              </ul>
              <p className="mt-3">
                All services are provided on a <strong>freelance and contractual basis</strong>. Each project engagement is governed by a <strong>separate written agreement</strong> that defines scope, timelines, deliverables, and responsibilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Contractual Relationship</h2>
              <p>
                All contracts, agreements, and communications are legally executed with the <strong>individual freelancer(s)</strong>. <strong>Redlix Studio itself does not enter into contracts as a legal entity</strong>. Clients acknowledge they are engaging <strong>independent freelancers</strong> and not a registered company, partnership, or firm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property Rights</h2>
              <p>
                All <strong>source code and designs shall be transferred to the client only upon full and final payment</strong>. Until such payment, all intellectual property remains the <strong>exclusive property of the freelancer</strong>. We retain the <strong>non-exclusive right to display completed work</strong> in portfolios and case studies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Payments and Invoicing</h2>
              <p>
                All payments are made <strong>directly to the individual freelancer(s)</strong>. Invoices are issued in accordance with <strong className="text-red-600">Indian freelance and tax regulations</strong>. <strong>Redlix Studio does not collect GST</strong> unless legally registered to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                Liability is strictly limited to the <strong>terms and monetary value specified in the individual freelance agreement</strong>. We are <strong>not liable for any indirect, incidental, or consequential damages</strong> resulting from project outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                Services and materials are provided on an <strong>"as is" and "as available" basis</strong>. <strong>No warranties are made</strong> regarding fitness for a particular purpose or error-free performance unless <strong>explicitly stated in a written agreement</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Confidentiality</h2>
              <p>
                <strong>Confidential information</strong> shared during an engagement shall be treated with <strong>reasonable care and confidentiality</strong>, subject to the terms of the project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
              <p>
                Governed by the <strong className="text-red-600">laws of India</strong>, including the <strong className="text-red-600">Indian Contract Act, 1872</strong>. Disputes are subject to the <strong className="text-red-600">exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India</strong>.
              </p>
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-600 rounded">
                <p className="text-gray-800">
                  <strong className="text-red-600">Legal Framework:</strong> These Terms are governed by <strong className="text-red-600">Indian law</strong>, with primary reference to the <strong className="text-red-600">Indian Contract Act, 1872</strong>. All legal proceedings shall be conducted in <strong className="text-red-600">Hyderabad, Telangana, India</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Acceptance of Terms</h2>
              <p>
                By accessing this website or engaging services, users and clients acknowledge they have <strong>read, understood, and agreed to these terms in full</strong>. <strong>Continued use constitutes acceptance</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:help.ckrdatapoint@gmail.com" className="text-red-600 hover:underline font-semibold">help.ckrdatapoint@gmail.com</a></p>
                <p><strong>Website:</strong> <Link href="https://www.redlix.co.in" className="text-red-600 hover:underline">www.redlix.co.in</Link></p>
                <p><strong>Location:</strong> <strong>Hyderabad, Telangana, India</strong></p>
                <p><strong>Founder:</strong> <strong>Rishi Rohan Kalapala</strong></p>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Note:</strong> Redlix Studio operates as an independent freelance brand and is not a registered company or legal entity.
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
