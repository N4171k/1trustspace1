import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Saarthi</h1>
          <p className="text-xl text-muted-foreground">
            Empowering property owners and renters with trust and transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Building trust in property rentals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Saarthi aims to revolutionize the property rental industry by providing
                a platform that prioritizes trust, transparency, and security. We
                connect property owners with potential renters while ensuring a
                safe and reliable rental experience for all parties involved.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                The future of property rentals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We envision a world where property rentals are seamless, secure,
                and accessible to everyone. Through our innovative features like
                live verification and AI-powered trust mechanisms, we're building
                the future of property rentals.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Why Choose Saarthi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Verification</CardTitle>
                <CardDescription>
                  Real-time property verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Request virtual tours and verify properties before booking to
                  ensure they match the listings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  Protected transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our escrow system ensures your money is safe until check-in,
                  providing peace of mind for both parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Trust</CardTitle>
                <CardDescription>
                  Advanced verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI technology analyzes listings and reviews to prevent
                  fraudulent activities and ensure authenticity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Join Our Community</h2>
          <p className="text-muted-foreground">
            Be part of the growing Saarthi community and experience the future of
            property rentals.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Sign Up
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 