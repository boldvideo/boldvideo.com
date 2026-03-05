import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Bold Video terms of service — the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1 px-4 py-20">
        <article className="prose prose-gray mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: December 15, 2025</p>

          <h2>1. About Bold Video</h2>
          <p>
            Bold Video provides a platform that allows users to upload, connect, and interact with
            video content through search, transcription, and AI-powered features.
          </p>

          <h2>2. Eligibility and Accounts</h2>
          <ul>
            <li>You must be at least 18 years old to use the service</li>
            <li>You must maintain account security</li>
            <li>You are responsible for all activity under your account</li>
            <li>Accurate information is required during registration</li>
            <li>We reserve the right to terminate accounts for violations</li>
          </ul>

          <h2>3. Use of the Service</h2>
          <p>You agree to use the service lawfully. Prohibited activities include:</p>
          <ul>
            <li>Uploading content without proper rights</li>
            <li>Unauthorized system access attempts</li>
            <li>Platform reverse engineering</li>
            <li>Any legal violations</li>
          </ul>
          <p>We may limit or suspend access if we believe the service is being misused.</p>

          <h2>4. Your Content</h2>
          <p>
            You retain full ownership of your content. We receive a limited, non-exclusive license
            to process your content solely to provide the service. Processing includes transcription,
            search indexing, and AI-powered responses.
          </p>

          <h2>5. Privacy and Confidentiality</h2>
          <ul>
            <li>Content remains private by default</li>
            <li>We do not use private videos to train public AI models</li>
            <li>Access is limited to authorized users only</li>
            <li>Additional details are available in our Privacy Policy</li>
          </ul>

          <h2>6. AI and Generated Outputs</h2>
          <p>
            Outputs are generated automatically and may not always be accurate. You should validate
            outputs before relying on them. We are not responsible for decisions based on AI content.
          </p>

          <h2>7. Subscriptions and Payments</h2>
          <ul>
            <li>Pricing is displayed at the time of purchase</li>
            <li>Advance billing is standard</li>
            <li>Subscriptions renew automatically unless cancelled</li>
            <li>Fees are non-refundable except where required by law</li>
            <li>Pricing may change with notice</li>
          </ul>

          <h2>8. Third-Party Services</h2>
          <p>
            We integrate with external platforms but are not responsible for third-party services.
          </p>

          <h2>9. Termination</h2>
          <p>We may suspend or terminate your account for:</p>
          <ul>
            <li>Terms violations</li>
            <li>Security or legal risks</li>
            <li>Legal requirements</li>
          </ul>
          <p>Data deletion follows our retention practices.</p>

          <h2>10. Intellectual Property</h2>
          <p>
            All Bold Video branding, software, and platform components are owned by Bold Video or
            its licensors. Unauthorized copying or distribution is prohibited.
          </p>

          <h2>11. Disclaimers</h2>
          <p>
            The service is provided &quot;as is&quot; and &quot;as available.&quot; We make no
            warranties regarding operation continuity, output accuracy, or fitness for a particular
            purpose.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            Our liability is capped at amounts paid within the past 12 months. Indirect and
            consequential damages are excluded.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify Bold Video for claims involving your use of the service, your
            content, or violations of these terms.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            We may update these terms periodically. Material changes will trigger notification.
            Continued use indicates acceptance.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These terms are governed by the laws of Bold Video&apos;s jurisdiction, without
            application of conflict of law provisions.
          </p>

          <h2>16. Contact</h2>
          <p>
            <strong>Bold Video</strong>
            <br />
            Email:{" "}
            <a href="mailto:support@boldvideo.com">support@boldvideo.com</a>
            <br />
            Website: boldvideo.com
          </p>
        </article>
      </main>
    </PageShell>
  );
}
