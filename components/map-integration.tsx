"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Home, Building, Search, Layers } from "lucide-react"
import Link from "next/link"
import type { Property } from "@/lib/types"

interface MapIntegrationProps {
  properties?: Property[]
  singleProperty?: Property
  height?: string
}

export default function MapIntegration({ properties, singleProperty, height = "500px" }: MapIntegrationProps) {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  // In a real implementation, we would use a proper map library like Google Maps, Mapbox, or Leaflet
  // For this demo, we'll create a simplified map visualization

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
  }

  const renderPropertyMarkers = () => {
    if (singleProperty) {
      return (
        <div className="absolute" style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <div
            className="bg-blue-600 text-white rounded-full p-2 shadow-lg cursor-pointer animate-bounce"
            onClick={() => setSelectedProperty(singleProperty)}
          >
            <MapPin className="h-6 w-6" />
          </div>
        </div>
      )
    }

    return properties?.map((property) => {
      // Generate random positions for demo purposes
      const top = Math.floor(Math.random() * 70) + 10
      const left = Math.floor(Math.random() * 70) + 10

      return (
        <div key={property.id} className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
          <div
            className={`${
              selectedProperty?.id === property.id ? "bg-blue-600 text-white scale-125" : "bg-white text-blue-600"
            } rounded-full p-1 shadow-lg cursor-pointer transition-all duration-200 hover:scale-125 border-2 border-blue-600`}
            onClick={() => handlePropertyClick(property)}
          >
            {property.type === "Apartment" && <Home className="h-4 w-4" />}
            {property.type === "House" && <Home className="h-4 w-4" />}
            {property.type === "Villa" && <Building className="h-4 w-4" />}
            {property.type === "Office" && <Building className="h-4 w-4" />}
            {property.type === "Land" && <Layers className="h-4 w-4" />}
          </div>
        </div>
      )
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          {singleProperty ? "Property Location" : "Browse Properties on Map"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative" style={{ height }}>
          {!mapLoaded ? (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-gray-500">Loading map...</p>
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full bg-blue-50 overflow-hidden">
              {/* Simplified map visualization */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="border-r border-gray-400 h-full"></div>
                  ))}
                </div>
                <div className="grid grid-rows-8 h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="border-b border-gray-400 w-full"></div>
                  ))}
                </div>
              </div>

              {/* Property markers */}
              {renderPropertyMarkers()}

              {/* Selected property info */}
              {selectedProperty && (
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{selectedProperty.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{selectedProperty.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-blue-600">{selectedProperty.type}</Badge>
                        <span className="text-blue-600 font-semibold">{selectedProperty.price}</span>
                      </div>
                    </div>
                    <Link href={`/properties/${selectedProperty.id}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button variant="outline" size="icon" className="bg-white h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white h-8 w-8">
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white h-8 w-8">
                  <Navigation className="h-4 w-4" />
                </Button>
              </div>

              {/* Search box */}
              {!singleProperty && (
                <div className="absolute top-4 left-4 right-20">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search for a location..."
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function Minus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  )
}
