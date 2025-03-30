export default function TermsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Saarthi. By accessing or using our platform, you agree to be
            bound by these Terms of Service. Please read them carefully.
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li>
              <strong>Platform:</strong> The Saarthi website, mobile application,
              and all related services.
            </li>
            <li>
              <strong>User:</strong> Any individual or entity that uses our
              Platform.
            </li>
            <li>
              <strong>Property Owner:</strong> A User who lists properties for
              rental on our Platform.
            </li>
            <li>
              <strong>Renter:</strong> A User who rents properties through our
              Platform.
            </li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            To use our Platform, you must create an account. You are responsible
            for maintaining the confidentiality of your account information and
            for all activities that occur under your account.
          </p>

          <h2>4. Property Listings</h2>
          <p>
            Property Owners must provide accurate and complete information about
            their properties. We reserve the right to remove any listing that
            violates our policies or contains false information.
          </p>

          <h2>5. Booking and Payments</h2>
          <p>
            All payments are processed through our secure payment system. We use
            an escrow service to protect both Property Owners and Renters.
          </p>

          <h2>6. Live Verification</h2>
          <p>
            Our Platform includes live verification features to ensure property
            authenticity. Users agree to participate in these verification
            processes when requested.
          </p>

          <h2>7. User Conduct</h2>
          <p>
            Users must not:
          </p>
          <ul>
            <li>Provide false or misleading information</li>
            <li>Violate any laws or regulations</li>
            <li>Harass or abuse other users</li>
            <li>Attempt to circumvent our security measures</li>
            <li>Use our Platform for any illegal purposes</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on our Platform, including text, graphics, logos, and
            software, is the property of Saarthi or its licensors and is
            protected by copyright and other intellectual property laws.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            Saarthi is not liable for any damages arising from your use of our
            Platform, including but not limited to direct, indirect, incidental,
            or consequential damages.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify users of any material changes through our Platform or via
            email.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: support@saarthi.com<br />
            Address: 123 Business Street, Mumbai, Maharashtra 400001, India
          </p>
        </div>
      </div>
    </div>
  )
} 