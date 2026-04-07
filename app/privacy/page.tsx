import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bold privacy policy: how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      description="How Bold collects, uses, and protects customer data across the website, product, and supporting services."
      title="Privacy Policy"
      updatedAt="December 15, 2025"
    >
      <>
        <h1>Privacy Policy</h1>

        <h2>1. What This Policy Covers</h2>
        <p>
          This Privacy Policy applies to the Bold website, user accounts,
          uploaded or connected videos and transcripts, and related tools and
          communications.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>User-provided information</h3>
        <ul>
          <li>Name, email, account details</li>
          <li>Billing and payment information</li>
          <li>Uploaded videos or third-party platform connections</li>
          <li>Questions, prompts, or platform inputs</li>
          <li>Support communications</li>
        </ul>
        <h3>Automatically collected information</h3>
        <ul>
          <li>Log data (IP address, browser type, usage activity)</li>
          <li>Device and session information</li>
          <li>Cookies and similar technologies</li>
        </ul>

        <h2>3. How Information Is Used</h2>
        <p>Bold Video uses data to:</p>
        <ul>
          <li>Operate the service</li>
          <li>Process payments and subscriptions</li>
          <li>Generate transcripts and AI responses</li>
          <li>Improve performance and experience</li>
          <li>Account communications and updates</li>
          <li>Security and abuse prevention</li>
        </ul>
        <p>
          <strong>We do not sell your data.</strong>
        </p>

        <h2>4. Video Content and Privacy</h2>
        <ul>
          <li>Content remains private by default</li>
          <li>Accessible only to authorized users</li>
          <li>Not made public without explicit action</li>
          <li>
            We do not use your private video content to train public AI models
          </li>
          <li>AI processing limited to requested functionality</li>
        </ul>

        <h2>5. Information Sharing</h2>
        <p>Data is shared only with:</p>
        <ul>
          <li>Trusted service providers (hosting, payments, analytics)</li>
          <li>Legal requirements or processes</li>
          <li>Rights, safety, and security protection needs</li>
        </ul>
        <p>Partners must handle data securely.</p>

        <h2>6. Data Storage and Security</h2>
        <p>
          Protective measures include secure hosting, encryption, access
          controls, and monitoring. No system is 100 percent secure, but
          protecting your content is a core priority.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Data is retained while your account is active, service delivery
          requires it, or legal obligations exist. You can delete content or
          close your account anytime.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          You may access, correct, delete, export your data, or withdraw consent
          based on your location.
        </p>

        <h2>9. Cookies</h2>
        <p>
          Cookies are used for sign-in maintenance, usage analysis, and
          performance improvement. You can control cookies via your browser
          settings.
        </p>

        <h2>10. Third-Party Services</h2>
        <p>
          Integrations with external platforms are governed by their own privacy
          policies.
        </p>

        <h2>11. Policy Changes</h2>
        <p>
          Updates will be communicated via the website or account notification.
        </p>

        <h2>12. Contact Information</h2>
        <p>
          <strong>Bold Video</strong>
          <br />
          Email:{" "}
          <a href="mailto:support@boldvideo.com">support@boldvideo.com</a>
          <br />
          Website: boldvideo.com
        </p>
      </>
    </LegalPage>
  );
}
