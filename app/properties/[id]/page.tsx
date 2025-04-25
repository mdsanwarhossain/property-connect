"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { usePropertyContext } from "@/lib/store"
import type { Property } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Tag, ArrowLeft, Phone, Mail, Calendar, AlertCircle } from "lucide-react"
import Image from "next/image"
import VerificationBadge from "@/components/verification-badge"
import NeighborhoodInsights from "@/components/neighborhood-insights"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PropertyDetails() {
  const { id } = useParams()
  const router = useRouter()
  const { properties } = usePropertyContext()
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    const foundProperty = properties.find((p) => p.id === Number.parseInt(id as string))
    if (foundProperty) {
      setProperty(foundProperty)
    }
  }, [id, properties])

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Property not found</h2>
        <Button onClick={() => router.push("/")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button onClick={() => router.push("/")} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Properties
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            {!property.verified && (
              <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                Verification Pending
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            {property.verified && (
              <VerificationBadge verified={property.verified} date={property.verificationDate} size="lg" />
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-600">{property.type}</Badge>
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="font-semibold">{property.bedrooms}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                  <line x1="12" y1="8" x2="20" y2="8" />
                  <line x1="18" y1="5" x2="18" y2="11" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="font-semibold">{property.bathrooms}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-semibold">{property.area} sq.ft</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Year Built</p>
                  <p className="font-semibold">{property.yearBuilt}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="description" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="neighborhood">Neighborhood</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="pt-4">
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </TabsContent>

            <TabsContent value="features" className="pt-4">
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="neighborhood" className="pt-4">
              <NeighborhoodInsights data={property.neighborhood} location={property.location.split(",")[0]} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-blue-600 font-bold text-2xl">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>{property.price}</span>
                </div>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <h3 className="font-semibold mb-3">Contact Agent</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/placeholder.svg?height=48&width=48" alt="Agent" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Property Agent</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Agent
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Agent
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Coming Soon</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    <span className="text-sm">Easy Rent Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M12 7v.01" />
                      <path d="M16 7v.01" />
                      <path d="M8 7v.01" />
                    </svg>
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
