import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-black mb-4 sm:mb-6">
              <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black">Cookies Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 sm:mb-4"><span className="text-red-600">Cookies</span> Policy</h1>
            <p className="text-black text-base sm:text-lg">Last Updated: <span className="text-red-600">February 7, 2026</span></p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">1.</span> What Are <span className="text-red-600">Cookies</span>?</h2>
              <p className="text-black">
                <span className="text-red-600">Cookies</span> are small text files that are placed on your <span className="text-red-600">device</span> (computer, tablet, or mobile) when you visit a <span className="text-red-600">website</span>. They are widely used to make websites work more efficiently and provide information to website owners. <span className="text-red-600">Cookies</span> allow a website to recognize your <span className="text-red-600">device</span> and store some information about your <span className="text-red-600">preferences</span> or past actions.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">2.</span> How We Use <span className="text-red-600">Cookies</span></h2>
              <p className="text-black">
                <span className="text-red-600">Redlix Studio</span> uses <span className="text-red-600">cookies</span> and similar <span className="text-red-600">tracking technologies</span> to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li>Enhance your <span className="text-red-600">browsing experience</span></li>
                <li>Analyze <span className="text-red-600">site traffic</span> and <span className="text-red-600">user behavior</span></li>
                <li>Store your <span className="text-red-600">preferences</span> and <span className="text-red-600">settings</span></li>
                <li>Track <span className="text-red-600">user sessions</span> and <span className="text-red-600">interactions</span></li>
                <li>Improve <span className="text-red-600">website functionality</span> and <span className="text-red-600">performance</span></li>
                <li>Provide <span className="text-red-600">personalized content</span> and <span className="text-red-600">features</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">3.</span> Types of <span className="text-red-600">Cookies</span> We Use</h2>
              
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3"><span className="text-red-600">3.1 Essential Cookies</span></h3>
                <p className="mb-3 text-black">
                  These <span className="text-red-600">cookies</span> are <span className="text-red-600">necessary</span> for the website to function properly. They enable <span className="text-red-600">core functionality</span> such as <span className="text-red-600">security</span>, <span className="text-red-600">network management</span>, and <span className="text-red-600">accessibility</span>.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-black mb-2"><span className="text-red-600">Cookies</span> Used:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                    <li><strong className="text-red-600">redlix_cookie_consent</strong> - Stores your <span className="text-red-600">cookie consent preference</span> (Expires: <span className="text-red-600">365 days</span>)</li>
                    <li><strong className="text-red-600">redlix_analytics_enabled</strong> - Tracks whether <span className="text-red-600">analytics</span> is enabled (Expires: <span className="text-red-600">365 days</span>)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3"><span className="text-red-600">3.2 Analytics</span> and <span className="text-red-600">Performance Cookies</span></h3>
                <p className="mb-3 text-black">
                  These <span className="text-red-600">cookies</span> help us understand how <span className="text-red-600">visitors</span> interact with our website by collecting and reporting information <span className="text-red-600">anonymously</span>. This helps us improve the website's <span className="text-red-600">performance</span> and <span className="text-red-600">user experience</span>.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-black mb-2"><span className="text-red-600">Cookies</span> Used:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                    <li><strong className="text-red-600">redlix_session_id</strong> - Unique <span className="text-red-600">session identifier</span> (Expires: <span className="text-red-600">1 day</span>)</li>
                    <li><strong className="text-red-600">redlix_session_start</strong> - <span className="text-red-600">Session start</span> timestamp (Expires: <span className="text-red-600">1 day</span>)</li>
                    <li><strong className="text-red-600">redlix_page_views</strong> - Total <span className="text-red-600">page views</span> in current session (Expires: <span className="text-red-600">1 day</span>)</li>
                    <li><strong className="text-red-600">redlix_last_page</strong> - Last visited <span className="text-red-600">page URL</span> (Expires: <span className="text-red-600">1 day</span>)</li>
                    <li><strong className="text-red-600">redlix_last_scroll</strong> - Last <span className="text-red-600">scroll depth</span> percentage (Expires: <span className="text-red-600">1 day</span>)</li>
                    <li><strong className="text-red-600">redlix_user_actions</strong> - Array of <span className="text-red-600">user interaction events</span> (Expires: <span className="text-red-600">7 days</span>, Max: <span className="text-red-600">100 actions</span>)</li>
                  </ul>
                </div>
                <p className="text-sm text-black mt-3">
                  <strong className="text-red-600">Note:</strong> These <span className="text-red-600">cookies</span> are only set if you have accepted <span className="text-red-600">analytics cookies</span> through our <span className="text-red-600">cookie consent banner</span>.
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3"><span className="text-red-600">3.3 Preference Cookies</span></h3>
                <p className="mb-3 text-black">
                  These <span className="text-red-600">cookies</span> remember your <span className="text-red-600">preferences</span> and <span className="text-red-600">settings</span> to provide a more <span className="text-red-600">personalized experience</span>.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-black mb-2"><span className="text-red-600">Cookies</span> Used:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                    <li><strong className="text-red-600">redlix_preferences</strong> - Stores <span className="text-red-600">user preferences</span> and <span className="text-red-600">settings</span> (Expires: <span className="text-red-600">365 days</span>)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3"><span className="text-red-600">3.4 Third-Party Cookies</span></h3>
                <p className="mb-3 text-black">
                  We may use <span className="text-red-600">third-party services</span> that set their own <span className="text-red-600">cookies</span>. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                  <li><strong className="text-red-600">Google Analytics</strong> - If enabled, <span className="text-red-600">Google Analytics</span> may set <span className="text-red-600">cookies</span> to track <span className="text-red-600">website usage</span> and provide <span className="text-red-600">analytics data</span>. This is only active if you have accepted <span className="text-red-600">analytics cookies</span> and if we have configured <span className="text-red-600">Google Analytics</span>.</li>
                  <li><strong className="text-red-600">Vercel Analytics</strong> - <span className="text-red-600">Vercel Analytics</span> may use <span className="text-red-600">cookies</span> to track <span className="text-red-600">page views</span> and <span className="text-red-600">performance metrics</span> when the site is deployed on <span className="text-red-600">Vercel</span>.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">4.</span> <span className="text-red-600">Cookie</span> Details</h2>
              
              <div className="overflow-x-auto mt-4 -mx-4 sm:mx-0">
                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black"><span className="text-red-600">Cookie</span> Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black"><span className="text-red-600">Purpose</span></th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black"><span className="text-red-600">Duration</span></th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-black"><span className="text-red-600">Type</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_cookie_consent</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Stores user's <span className="text-red-600">cookie consent</span> choice</td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">365 days</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Essential</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_analytics_enabled</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Tracks whether <span className="text-red-600">analytics tracking</span> is enabled</td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">365 days</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Essential</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_session_id</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Unique identifier for <span className="text-red-600">user session</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">1 day</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_session_start</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Timestamp of <span className="text-red-600">session start</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">1 day</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_page_views</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Count of <span className="text-red-600">page views</span> in session</td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">1 day</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_last_page</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">URL of last visited <span className="text-red-600">page</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">1 day</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_last_scroll</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Last recorded <span className="text-red-600">scroll depth</span> percentage</td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">1 day</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_user_actions</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black">Array of <span className="text-red-600">user interaction events</span> (clicks, scrolls, etc.)</td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">7 days</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Analytics</span></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-mono text-xs text-black"><span className="text-red-600">redlix_preferences</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">User preferences</span> and <span className="text-red-600">settings</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">365 days</span></td>
                      <td className="border border-gray-300 px-4 py-3 text-black"><span className="text-red-600">Preference</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">5.</span> Managing Your <span className="text-red-600">Cookie Preferences</span></h2>
              <p className="mb-3 text-black">
                You have the right to <span className="text-red-600">control</span> and <span className="text-red-600">manage cookies</span> on your <span className="text-red-600">device</span>. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><strong className="text-red-600">Accept or Reject Cookies:</strong> When you first visit our website, you will see a <span className="text-red-600">cookie consent banner</span> where you can choose to accept or reject <span className="text-red-600">non-essential cookies</span>.</li>
                <li><strong className="text-red-600">Browser Settings:</strong> Most <span className="text-red-600">web browsers</span> allow you to control <span className="text-red-600">cookies</span> through their <span className="text-red-600">settings</span>. You can set your browser to refuse <span className="text-red-600">cookies</span> or alert you when <span className="text-red-600">cookies</span> are being sent.</li>
                <li><strong className="text-red-600">Delete Cookies:</strong> You can <span className="text-red-600">delete cookies</span> that are already on your <span className="text-red-600">device</span> at any time through your <span className="text-red-600">browser settings</span>.</li>
                <li><strong className="text-red-600">Update Preferences:</strong> You can change your <span className="text-red-600">cookie preferences</span> at any time by clearing your <span className="text-red-600">browser cookies</span> and revisiting our site to see the <span className="text-red-600">consent banner</span> again.</li>
              </ul>
              <p className="mt-4 text-sm text-black">
                <strong className="text-red-600">Note:</strong> Disabling or deleting <span className="text-red-600">cookies</span> may affect the <span className="text-red-600">functionality</span> of our website and your <span className="text-red-600">user experience</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">6.</span> <span className="text-red-600">Data</span> Collected Through <span className="text-red-600">Cookies</span></h2>
              <p className="mb-3 text-black">
                The <span className="text-red-600">information</span> collected through <span className="text-red-600">cookies</span> may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><span className="text-red-600">Pages visited</span> and <span className="text-red-600">time spent</span> on each page</li>
                <li><span className="text-red-600">Click events</span> and <span className="text-red-600">user interactions</span></li>
                <li><span className="text-red-600">Scroll depth</span> and <span className="text-red-600">engagement metrics</span></li>
                <li><span className="text-red-600">Session duration</span> and <span className="text-red-600">frequency</span></li>
                <li><span className="text-red-600">Device</span> and <span className="text-red-600">browser information</span></li>
                <li><span className="text-red-600">Referrer information</span></li>
                <li><span className="text-red-600">User preferences</span> and <span className="text-red-600">settings</span></li>
              </ul>
              <p className="mt-4 text-black">
                This <span className="text-red-600">data</span> is used to improve our website, understand <span className="text-red-600">user behavior</span>, and provide a better <span className="text-red-600">user experience</span>. We do not use <span className="text-red-600">cookies</span> to collect <span className="text-red-600">personally identifiable information</span> unless you explicitly provide it.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">7.</span> <span className="text-red-600">Legal Basis</span> and <span className="text-red-600">Compliance</span></h2>
              <p className="mb-3 text-black">
                Our use of <span className="text-red-600">cookies</span> is governed by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-black">
                <li><strong className="text-red-600">Information Technology Act, 2000 (India):</strong> We comply with <span className="text-red-600">Indian data protection laws</span> and <span className="text-red-600">regulations</span>.</li>
                <li><strong className="text-red-600">GDPR (if applicable):</strong> For users in the <span className="text-red-600">European Union</span>, we comply with <span className="text-red-600">GDPR requirements</span> for <span className="text-red-600">cookie consent</span>.</li>
                <li><strong className="text-red-600">Consent:</strong> We obtain your explicit <span className="text-red-600">consent</span> before setting <span className="text-red-600">non-essential cookies</span>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">8.</span> <span className="text-red-600">Third-Party Services</span></h2>
              <p className="mb-3 text-black">
                Our website may contain links to <span className="text-red-600">third-party websites</span> and <span className="text-red-600">services</span>. These <span className="text-red-600">third parties</span> may use their own <span className="text-red-600">cookies</span> and <span className="text-red-600">tracking technologies</span>. We are not responsible for the <span className="text-red-600">privacy practices</span> or <span className="text-red-600">cookie policies</span> of these <span className="text-red-600">third-party services</span>. We encourage you to review their <span className="text-red-600">privacy</span> and <span className="text-red-600">cookie policies</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">9.</span> Updates to This <span className="text-red-600">Policy</span></h2>
              <p className="text-black">
                We may update this <span className="text-red-600">Cookies Policy</span> from time to time to reflect changes in our practices or for other <span className="text-red-600">operational</span>, <span className="text-red-600">legal</span>, or <span className="text-red-600">regulatory reasons</span>. We will notify you of any <span className="text-red-600">material changes</span> by updating the "<span className="text-red-600">Last Updated</span>" date at the top of this <span className="text-red-600">policy</span>. Your continued use of our website after such changes constitutes your acceptance of the updated <span className="text-red-600">policy</span>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black mt-6 sm:mt-8 mb-3 sm:mb-4"><span className="text-red-600">10.</span> <span className="text-red-600">Contact Us</span></h2>
              <p className="mb-3 text-black">
                If you have any questions about our use of <span className="text-red-600">cookies</span> or this <span className="text-red-600">Cookies Policy</span>, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-3 text-black">
                <li><strong className="text-red-600">Email:</strong> <span className="text-red-600">hello@redlix.com</span></li>
                <li><strong className="text-red-600">Website:</strong> <Link href="/" className="text-red-600 hover:underline">www.redlix.co.in</Link></li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-black">
                This <span className="text-red-600">Cookies Policy</span> is part of our <Link href="/privacy-policy" className="text-red-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-red-600 hover:underline">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
