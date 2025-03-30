import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about Saarthi
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking & Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How do I book a property?</h3>
              <p className="text-muted-foreground">
                To book a property, browse our listings, select your desired property, choose your dates, and follow the booking process. You'll need to provide your details and make the required payment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, debit cards, and UPI payments. Some properties may also accept bank transfers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is a security deposit required?</h3>
              <p className="text-muted-foreground">
                Yes, a security deposit is required for most properties. The amount varies by property and is fully refundable after your stay, subject to our terms and conditions.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property Hosting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How can I list my property?</h3>
              <p className="text-muted-foreground">
                To list your property, create an account, go to the "List Your Property" section, and follow the listing process. You'll need to provide property details, photos, and pricing information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What documents do I need to list my property?</h3>
              <p className="text-muted-foreground">
                You'll need property ownership documents, government-issued ID, and proof of address. Additional documents may be required based on your property type.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I receive payments?</h3>
              <p className="text-muted-foreground">
                Payments are processed through our secure platform and transferred to your registered bank account after the guest's stay is complete.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety & Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How do you verify properties?</h3>
              <p className="text-muted-foreground">
                Our team conducts thorough property inspections, verifies documents, and ensures all safety measures are in place before listing any property.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What happens if there's an issue during my stay?</h3>
              <p className="text-muted-foreground">
                Our 24/7 support team is available to assist you with any issues. You can contact us through the app or our helpline number.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is my personal information secure?</h3>
              <p className="text-muted-foreground">
                Yes, we use industry-standard encryption and security measures to protect your personal information and payment details.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cancellation & Refunds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">What is your cancellation policy?</h3>
              <p className="text-muted-foreground">
                Our cancellation policy varies by property. Generally, you can cancel up to 48 hours before check-in for a full refund. Some properties may have different policies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How long does it take to receive a refund?</h3>
              <p className="text-muted-foreground">
                Refunds are typically processed within 5-7 business days, depending on your payment method and bank.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I modify my booking?</h3>
              <p className="text-muted-foreground">
                Yes, you can modify your booking dates or details through your account dashboard, subject to availability and property policies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 