import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            Understanding how we use cookies on Saarthi
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What are Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Functionality Cookies</h3>
              <p className="text-muted-foreground">
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our pages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Marketing Cookies</h3>
              <p className="text-muted-foreground">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Remember your preferences and settings</li>
              <li>Improve website performance and security</li>
              <li>Analyze how you use our website</li>
              <li>Provide personalized content and advertisements</li>
              <li>Enable social media features</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Managing Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            <p className="text-muted-foreground">
              To manage your cookie preferences, you can use our cookie consent banner or adjust your browser settings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We use services from third parties that may also set cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing features</li>
              <li>Payment processors for secure transactions</li>
              <li>Advertising networks for targeted advertising</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@saarthi.com<br />
              Address: 123 Business Street, City, Country
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 