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

      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-black mb-4 sm:mb-6">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black">Terms of Service</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 sm:mb-4">
              Legal Disclosure & <span className="text-red-600">Terms</span> of Use
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4"><span className="text-red-600">Terms</span> of Service</h2>
            <p className="text-black text-base sm:text-lg">
              Last Updated: <span className="text-red-600">February 7, 2026</span> — These terms govern your interaction with <span className="text-red-600">Redlix Studio</span>.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8 text-black">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">1.</span> Introduction and Identity</h2>
              <p className="text-black">
                Welcome to <strong className="text-red-600">Redlix Studio</strong>. <strong className="text-red-600">Redlix Studio is a freelance brand name</strong> used by <span className="text-red-600">independent professionals</span> to provide <span className="text-red-600">design</span>, <span className="text-red-600">development</span>, and <span className="text-red-600">engineering services</span>. <strong className="text-red-600">Redlix Studio is not a registered company</strong>, private limited entity, limited liability partnership (LLP), partnership firm, or corporate organization under the laws of India. The use of the name "Redlix Studio" is strictly for <strong className="text-red-600">branding and professional identification purposes</strong> and does not constitute a separate legal entity. All services offered through this platform are provided by <strong className="text-red-600">individual freelancers operating independently</strong> under this brand name.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">2.</span> Purpose of the <span className="text-red-600">Website</span></h2>
              <p className="text-black">
                This website has been developed solely for <strong className="text-red-600">professional and informational purposes</strong>. Its primary objectives are to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li>Present a <span className="text-red-600">portfolio</span> of past <span className="text-red-600">freelance work</span></li>
                <li>Demonstrate <span className="text-red-600">technical</span> and <span className="text-red-600">creative capabilities</span></li>
                <li>Provide a centralized platform for <span className="text-red-600">communication</span>, <span className="text-red-600">project coordination</span>, and <span className="text-red-600">engagement</span> with clients</li>
              </ul>
              <p className="mt-3 text-black">
                The website <strong className="text-red-600">does not function as a marketplace, agency, or employer entity</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">3.</span> Nature of <span className="text-red-600">Services</span></h2>
              <p className="text-black">
                <span className="text-red-600">Redlix Studio</span> offers <span className="text-red-600">freelance services</span> including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><span className="text-red-600">Digital product design</span></li>
                <li><span className="text-red-600">Web development</span></li>
                <li><span className="text-red-600">Application logic</span></li>
                <li><span className="text-red-600">Cloud infrastructure</span></li>
              </ul>
              <p className="mt-3 text-black">
                All services are provided on a <strong className="text-red-600">freelance and contractual basis</strong>. Each project engagement is governed by a <strong className="text-red-600">separate written agreement</strong> that defines <span className="text-red-600">scope</span>, <span className="text-red-600">timelines</span>, <span className="text-red-600">deliverables</span>, and <span className="text-red-600">responsibilities</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">4.</span> Support & Ticketing</h2>
              <p className="text-black">
                <span className="text-red-600">Redlix Studio</span> provides a specialized portal to <Link href="/raise-ticket" className="text-red-600 hover:underline">Raise a Ticket</Link> and <Link href="/track-ticket" className="text-red-600 hover:underline">Track Ticket</Link> progress.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li>By submitting a ticket, you warrant that you are an <strong className="text-red-600">authorized representative</strong> of the specified Client ID.</li>
                <li>Ticket resolution times and progress statuses (e.g., Open, In Progress, Resolved) are <strong className="text-red-600">estimates and not legally binding guarantees</strong> unless explicitly covered by a distinct SLA.</li>
                <li>We reserve the right to <strong className="text-red-600">evaluate, reprioritize, or decline</strong> ticket requests that fall outside the scope of your existing active service agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">5.</span> Contractual <span className="text-red-600">Relationship</span></h2>
              <p className="text-black">
                All <span className="text-red-600">contracts</span>, <span className="text-red-600">agreements</span>, and <span className="text-red-600">communications</span> are legally executed with the <strong className="text-red-600">individual freelancer(s)</strong>. <strong className="text-red-600">Redlix Studio itself does not enter into contracts as a legal entity</strong>. Clients acknowledge they are engaging <strong className="text-red-600">independent freelancers</strong> and not a registered company, partnership, or firm.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">6.</span> Intellectual Property <span className="text-red-600">Rights</span></h2>
              <p className="text-black">
                All <strong className="text-red-600">source code and designs shall be transferred to the client only upon full and final payment</strong>. Until such payment, all <span className="text-red-600">intellectual property</span> remains the <strong className="text-red-600">exclusive property of the freelancer</strong>. We retain the <strong className="text-red-600">non-exclusive right to display completed work</strong> in <span className="text-red-600">portfolios</span> and <span className="text-red-600">case studies</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">7.</span> Payments and <span className="text-red-600">Invoicing</span></h2>
              <p className="text-black">
                All payments are made <strong className="text-red-600">directly to the individual freelancer(s)</strong>. Invoices are issued in accordance with <strong className="text-red-600">Indian freelance and tax regulations</strong>. <strong className="text-red-600">Redlix Studio does not collect GST</strong> unless legally registered to do so.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">8.</span> Limitation of <span className="text-red-600">Liability</span></h2>
              <p className="text-black">
                Liability is strictly limited to the <strong className="text-red-600">terms and monetary value specified in the individual freelance agreement</strong>. We are <strong className="text-red-600">not liable for any indirect, incidental, or consequential damages</strong> resulting from project outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">9.</span> Disclaimer of <span className="text-red-600">Warranties</span></h2>
              <p className="text-black">
                Services and materials are provided on an <strong className="text-red-600">"as is" and "as available" basis</strong>. <strong className="text-red-600">No warranties are made</strong> regarding fitness for a particular purpose or error-free performance unless <strong className="text-red-600">explicitly stated in a written agreement</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">10.</span> Confidentiality</h2>
              <p className="text-black">
                <strong className="text-red-600">Confidential information</strong> shared during an engagement shall be treated with <strong className="text-red-600">reasonable care and confidentiality</strong>, subject to the terms of the <span className="text-red-600">project agreement</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">11.</span> Governing Law and Jurisdiction</h2>
              <p className="text-black">
                Governed by the <strong className="text-red-600">laws of India</strong>, including the <strong className="text-red-600">Indian Contract Act, 1872</strong>. Disputes are subject to the <strong className="text-red-600">exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India</strong>.
              </p>
              <div className="mt-4 p-4 sm:p-5 bg-red-50 border-l-4 border-red-600 rounded-lg">
                <p className="text-black">
                  <strong className="text-red-600">Legal Framework:</strong> These <span className="text-red-600">Terms</span> are governed by <strong className="text-red-600">Indian law</strong>, with primary reference to the <strong className="text-red-600">Indian Contract Act, 1872</strong>. All legal proceedings shall be conducted in <strong className="text-red-600">Hyderabad, Telangana, India</strong>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">12.</span> Acceptance of Terms</h2>
              <p className="text-black">
                By accessing this website or engaging services, users and clients acknowledge they have <strong className="text-red-600">read, understood, and agreed to these terms in full</strong>. <strong className="text-red-600">Continued use constitutes acceptance</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">13.</span> Contact Information</h2>
              <p className="text-black">
                If you have any questions about these <span className="text-red-600">Terms of Service</span>, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-black">
                <p><strong className="text-red-600">Email:</strong> <a href="mailto:hello@redlix.com" className="text-red-600 hover:underline font-semibold">hello@redlix.com</a></p>
                <p><strong className="text-red-600">Website:</strong> <Link href="/" className="text-red-600 hover:underline">www.redlix.co.in</Link></p>
                <p><strong className="text-red-600">Location:</strong> <span className="text-red-600">Hyderabad, Telangana, India</span></p>
                <p><strong className="text-red-600">Founder:</strong> <span className="text-red-600">Rishi Rohan Kalapala</span></p>
                <p className="mt-4 text-sm text-black">
                  <strong className="text-red-600">Note:</strong> Redlix Studio operates as an <span className="text-red-600">independent freelance brand</span> and is not a registered company or legal entity.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-black">
                These <span className="text-red-600">Terms of Service</span> are part of our <Link href="/privacy-policy" className="text-red-600 hover:underline">Privacy Policy</Link> and <Link href="/cookies-policy" className="text-red-600 hover:underline">Cookies Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
