'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Mock data for demonstration
const mockProperty = {
  id: 1,
  title: 'Luxury Villa with Pool',
  description: 'Beautiful villa with private pool, perfect for family gatherings.',
  price: 5000,
  location: 'Mumbai',
  type: 'Villa',
  amenities: ['Pool', 'Parking', 'AC', 'Kitchen'],
  images: ['/mock/villa1.jpg'],
  owner: {
    name: 'John Doe',
    rating: 4.8,
    reviews: 12,
  },
}

export default function PropertyDetailsPage() {
  const params = useParams()
  const [bookingDate, setBookingDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement booking submission
    console.log('Booking submitted:', { bookingDate, message })
  }

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Property Images */}
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg" />
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{mockProperty.title}</h1>
            <p className="text-muted-foreground">{mockProperty.location}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">₹{mockProperty.price}</span>
            <span className="text-muted-foreground">per day</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{mockProperty.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {mockProperty.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Property Owner</h2>
            <div className="flex items-center gap-2">
              <span>{mockProperty.owner.name}</span>
              <span className="text-muted-foreground">
                ({mockProperty.owner.rating} ★, {mockProperty.owner.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Book This Property</CardTitle>
              <CardDescription>
                Fill in the details to request a booking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Booking Date
                  </label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message to Owner
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell the owner about your plans..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Request Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 