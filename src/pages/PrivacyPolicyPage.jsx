import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Privacy Policy</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg prose max-w-none">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>Welcome to Bill Bash Group. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@billbashgroup.com.</p>
            <p>When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites and our services.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
            <ul className="list-disc pl-6">
              <li>Name and Contact Data (e.g., email address, phone number)</li>
              <li>Credentials (e.g., passwords, password hints)</li>
              <li>Payment Data (if applicable, processed by third-party payment processors)</li>
              <li>Usage Data (e.g., IP address, browser type, pages visited)</li>
              <li>Inquiry details related to our services.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
             <ul className="list-disc pl-6">
                <li>To facilitate account creation and logon process.</li>
                <li>To post testimonials (with your consent).</li>
                <li>Request feedback.</li>
                <li>To enable user-to-user communications (with consent).</li>
                <li>To manage user accounts.</li>
                <li>To send administrative information to you.</li>
                <li>To protect our Services.</li>
                <li>To respond to legal requests and prevent harm.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <p>We may need to share your personal information in the following situations:</p>
             <ul className="list-disc pl-6">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice.</li>
                <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies and Similar Technologies</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy (if applicable, or detailed here).</p>
            <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can control cookies through your browser settings. For more information, please see our Cookie Consent banner and options.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. How Long Do We Keep Your Information?</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-2">7. How Do We Keep Your Information Safe?</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.</p>
            <p>We use Supabase for backend services, which provides robust security features, including Row-Level Security and encryption for data at rest and in transit. Personally Identifiable Information (PII) is handled with care and encrypted where appropriate.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Privacy Rights (GDPR)</h2>
            <p>If you are a resident in the European Economic Area (EEA) or UK, you have certain data protection rights. Bill Bash Group aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <ul className="list-disc pl-6">
              <li><strong>The right to access, update or delete</strong> the information we have on you. You can manage your data within your User Profile page.</li>
              <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
              <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
              <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
              <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
              <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Bill Bash Group relied on your consent to process your personal information.</li>
            </ul>
            <p>To exercise these rights, please contact us at info@billbashgroup.com. Please note that we may ask you to verify your identity before responding to such requests.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Updates to This Notice</h2>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at info@billbashgroup.com or by post to:</p>
            <p>Bill Bash Group<br />123 Business Avenue<br />Commerce City, CC 12345<br />Country</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;