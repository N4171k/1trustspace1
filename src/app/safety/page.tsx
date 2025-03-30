import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SafetyPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Safety Guidelines</h1>
          <p className="text-xl text-muted-foreground">
            Your safety is our top priority. Please review our safety guidelines below.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Property Verification</CardTitle>
            <CardDescription>
              How we ensure property safety and quality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All properties listed on Saarthi undergo a thorough verification process to ensure they meet our safety standards.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Property inspection by our team</li>
              <li>Document verification</li>
              <li>Safety equipment check</li>
              <li>Emergency exit verification</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guest Safety</CardTitle>
            <CardDescription>
              Guidelines for a safe stay
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We provide comprehensive safety information and guidelines to ensure a secure experience for all guests.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Emergency contact information</li>
              <li>Safety equipment locations</li>
              <li>Evacuation procedures</li>
              <li>First aid kit availability</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Host Safety</CardTitle>
            <CardDescription>
              Protecting our property hosts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We implement various measures to ensure the safety of property hosts and their assets.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Guest identity verification</li>
              <li>Security deposit requirements</li>
              <li>Insurance coverage</li>
              <li>24/7 support system</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>COVID-19 Safety</CardTitle>
            <CardDescription>
              Our health and hygiene protocols
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We maintain strict health and hygiene protocols to ensure the safety of all users.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Regular sanitization</li>
              <li>Social distancing guidelines</li>
              <li>Health screening procedures</li>
              <li>Updated safety protocols</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 