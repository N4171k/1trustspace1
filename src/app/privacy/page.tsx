export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Saarthi, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information
            when you use our Platform.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you provide to us:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Email address and phone number</li>
            <li>Payment information</li>
            <li>Government-issued identification</li>
            <li>Property ownership documents</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <p>We automatically collect information about your use of our Platform:</p>
          <ul>
            <li>Device information</li>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on the Platform</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our Platform</li>
            <li>To process your transactions</li>
            <li>To verify your identity</li>
            <li>To communicate with you</li>
            <li>To improve our services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Payment processors</li>
            <li>Law enforcement when required</li>
            <li>Other users (with your consent)</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on
            our Platform and hold certain information. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being
            sent.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            Our Platform may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these external
            sites.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Platform is not intended for children under 13. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Email: privacy@saarthi.com<br />
            Address: 123 Business Street, Mumbai, Maharashtra 400001, India
          </p>
        </div>
      </div>
    </div>
  )
} 