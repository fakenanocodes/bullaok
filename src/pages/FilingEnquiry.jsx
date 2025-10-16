// HowToFileAnEnquiry.jsx  (or app/how-to-file-an-enquiry/page.jsx)
import MainLayout from '../components/MainLayout';
import home_bg from '../assets/home/home_bg.png';
import bulloak from '../assets/bulloak.png';

export default function FilingEnquiry() {
  return (
    <MainLayout>
      <div className="px-5 md:px-20">
        {/* decorative logo/top */}
        <div
          style={{
            backgroundImage: `url(${bulloak})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="laviossa mt-32 h-14 md:h-40"
        />

        {/* page background container */}
        <div
          className="bg-white text-lg h-fit"
          style={{
            backgroundImage: `url(${home_bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="laviossa text-3xl md:text-7xl text-center text-[#8e078aa4] font-bold flex flex-col justify-end">
            How to File an Enquiry
          </h1>

          <div className="mx-auto py-10 space-y-10">

            {/* Overview */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Overview</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We welcome enquiries from clients and prospective clients. This page explains how you can submit an enquiry,
                the information we need to process it efficiently, how we handle and respond to enquiries, and what to expect
                after you file. Following these simple steps helps us resolve your issue quickly and accurately.
              </p>
            </section>

            {/* When to File an Enquiry */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">When to File an Enquiry</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Consider filing an enquiry if you have questions or concerns about:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Account opening, verification or status.</li>
                <li>Trades, transactions or portfolio performance.</li>
                <li>Fees, billing or statements.</li>
                <li>Technical issues with the website or trading platform.</li>
                <li>Compliance, regulatory or documentation requests.</li>
              </ul>
            </section>

            {/* Required Information Checklist */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Required Information (Checklist)</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To help us respond quickly, please include as much of the following information as possible:
              </p>

              <ul className="list-decimal pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Full name:</strong> The name on your account.</li>
                <li><strong>Account number or client ID:</strong> If you are an existing client, include the account identifier.</li>
                <li><strong>Preferred contact details:</strong> Email and/or phone number where we can reach you.</li>
                <li><strong>Nature of the enquiry:</strong> A concise subject line and detailed description of the issue or question.</li>
                <li><strong>Relevant dates and transaction IDs:</strong> For trade or billing enquiries, include dates, amounts, and transaction references.</li>
                <li><strong>Attachments:</strong> Screenshots, statements, or documents that support your enquiry (attach as PDF, JPG or PNG).</li>
              </ul>

              <p className="mt-3 text-gray-700">
                Providing complete information reduces back-and-forth and speeds up resolution.
              </p>
            </section>

            {/* How to Submit */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">How to Submit an Enquiry</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We support multiple convenient channels for filing enquiries. Choose the method that best suits you.
              </p>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 border border-purple-100 p-4 rounded">
                  <h3 className="font-semibold text-[#8E0789]">Email</h3>
                  <p className="mt-2 text-gray-700">
                    Send an email to <span className="font-medium">admin@bulloakltd.com</span> with the subject line "Enquiry: [brief subject]".
                    Attach supporting documents as needed.
                  </p>
                </div>

                <div className="bg-gray-50 border border-purple-100 p-4 rounded">
                  <h3 className="font-semibold text-[#8E0789]">Online Form</h3>
                  <p className="mt-2 text-gray-700">
                    Use our Contact / Enquiry form on the website (under Support & Contact). Fill all required fields and upload attachments.
                    This method helps route your enquiry to the correct team.
                  </p>
                </div>

                <div className="bg-gray-50 border border-purple-100 p-4 rounded">
                  <h3 className="font-semibold text-[#8E0789]">Phone</h3>
                  <p className="mt-2 text-gray-700">
                    For urgent matters, call our support line as listed on the website. Have your account details and any reference numbers ready.
                    Phone enquiries may require additional verification for security.
                  </p>
                </div>
              </div>
            </section>

            {/* What to Expect After Filing */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">What to Expect After Filing</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Once we receive your enquiry:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Acknowledgement:</strong> We will acknowledge receipt (typically by email) within one business day.</li>
                <li><strong>Initial Review:</strong> Our support or compliance team will review and may request additional information.</li>
                <li><strong>Response Time:</strong> Many routine enquiries are resolved within 3–5 business days. Complex matters or those requiring third-party investigation may take longer. We will keep you informed of progress.</li>
                <li><strong>Security Checks:</strong> For account-related or sensitive requests, we may perform identity verification before disclosing information.</li>
              </ul>
            </section>

            {/* Escalation and Complaints */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Escalation & Complaints</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If you are unsatisfied with our handling of your enquiry:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>First,</strong> reply to the support response or send a follow-up to <span className="font-medium">admin@bulloakltd.com</span> requesting escalation.</li>
                <li><strong>Second,</strong> you may request that the matter be reviewed by our Compliance or Client Services Manager.</li>
                <li><strong>Final recourse:</strong> If you remain unsatisfied, the Firm’s formal dispute resolution procedures and regulatory complaint process are available; we will provide details on next steps as needed.</li>
              </ul>
            </section>

            {/* Privacy & Data Handling */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Privacy & Data Handling</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We treat all enquiries and personal data with strict confidentiality. Personal information you provide in an enquiry
                will be used solely to investigate and respond. We will retain enquiry records in accordance with our data retention
                policies and applicable law. For more detail, see our Privacy Policy.
              </p>
            </section>

            {/* Example Enquiry Template */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Example Enquiry Template</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Use the template below when emailing or using the web form to speed up processing:
              </p>

              <div className="mt-4 bg-gray-50 border border-purple-100 p-4 rounded text-sm text-gray-700">
                <pre className="whitespace-pre-wrap">
                {`Subject: Enquiry — [Short description, e.g. "Incorrect trade on 2025-09-10"]

                Full name: [Your full name]
                Account number / Client ID: [If applicable]
                Preferred contact: [email / phone]
                Date of incident: [YYYY-MM-DD]
                Transaction ID(s): [If applicable]
                Description: [Provide a clear, concise description of the issue — what happened, what you expected, and any supporting details]
                Attachments: [List of attached files — e.g., "screenshot-1.png", "statement.pdf"]

                Preferred resolution: [Refund / correction / explanation / other]
                `}
                </pre>

                <p className="mt-3">
                  You may copy the template above into an email or the web form. Attaching supporting documents reduces processing time.
                </p>
              </div>
            </section>

            {/* Response Timelines */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Response Timelines & Follow-up</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Typical timelines:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Acknowledgement: Within 1 business day.</li>
                <li>Initial response / status update: Within 3–5 business days.</li>
                <li>Full resolution: Depends on complexity; we provide periodic updates for ongoing investigations.</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Contact</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For enquiries and support, please contact:
              </p>
              <ul className="pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Email:</strong> <span className="font-medium">admin@bulloakltd.com</span></li>
                <li><strong>Support Form:</strong> Visit the Contact / Support page on our website and choose "Submit an Enquiry".</li>
                <li><strong>Phone:</strong> The support number listed on the website (for urgent matters).</li>
              </ul>
            </section>

            {/* Legal note */}
            <div className="text-sm text-gray-500">
              <p>
                <strong>Important:</strong> This guidance is intended to help you file enquiries efficiently and does not
                modify contractual or regulatory obligations. Where formal dispute resolution or regulatory complaints are sought,
                the Firm will follow the procedures outlined in account agreements and relevant regulations.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
