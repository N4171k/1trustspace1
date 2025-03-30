'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data for demonstration
const mockProperties = [
  {
    id: 1,
    title: 'Luxury Villa with Pool',
    description: 'Beautiful villa with private pool, perfect for family gatherings.',
    price: 5000,
    location: 'Mumbai',
    type: 'Villa',
    images: ['/mock/villa1.jpg'],
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'Spacious apartment in the heart of the city.',
    price: 3000,
    location: 'Delhi',
    type: 'Apartment',
    images: ['/mock/apartment1.jpg'],
  },
  {
    id: 3,
    title: 'Garden Venue',
    description: 'Large garden space ideal for outdoor events.',
    price: 2000,
    location: 'Bangalore',
    type: 'Garden',
    images: ['/mock/garden1.jpg'],
  },
]

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [propertyType, setPropertyType] = useState('all')

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = propertyType === 'all' || property.type.toLowerCase() === propertyType.toLowerCase()
    return matchesSearch && matchesType
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Properties</h1>
          <p className="text-muted-foreground">
            Find the perfect venue for your next event
          </p>
        </div>

        <div className="flex gap-4">
          <Input
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="garden">Garden</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
                <CardDescription>{property.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {property.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">₹{property.price}/day</span>
                  <Button>View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 