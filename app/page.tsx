"use client"

import type React from "react"

import { useState } from "react"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import { initialProperties } from "@/lib/data"
import type { Property } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { PlusCircle, CheckCircle, ArrowRight, Shield, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"
import SupportBanner from "@/components/support-banner"
import LegalServicesSection from "@/components/legal-services-section"
import MapIntegration from "@/components/map-integration"
import PropertyCategories from "@/components/property-categories"

export default function Home() {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: [0, 100000],
    verified: false,
  })

  // Filter properties based on selected filters
  const filteredProperties = properties.filter((property) => {
    const locationMatch = !filters.location || property.location.includes(filters.location)
    const typeMatch = !filters.type || property.type === filters.type
    const price = Number.parseInt(property.price.replace(/[^0-9]/g, ""))
    const priceMatch = price >= filters.priceRange[0] && price <= filters.priceRange[1]
    const verifiedMatch = !filters.verified || property.verified === filters.verified

    return locationMatch && typeMatch && priceMatch && verifiedMatch
  })

  return (
    <main>
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Property</h1>
            <p className="text-xl mb-6">Browse through our curated list of verified properties for rent and sale</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/admin">
                <Button className="bg-white text-blue-700 hover:bg-gray-100">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Property (Admin)
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                <CheckCircle className="mr-2 h-4 w-4" />
                Verified Properties Only
              </Button>
              <Link href="/legal-services">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Shield className="mr-2 h-4 w-4" />
                  Legal Services
                </Button>
              </Link>
              <Link href="/lawyers">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Lawyer Communication
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section className="mb-8">
          <PropertyFilter filters={filters} setFilters={setFilters} />
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Properties</h2>
            <Link href="/properties">
              <Button variant="outline" size="sm">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <PropertyCategories />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Properties on Map
            </h2>
            <Link href="/properties?view=map">
              <Button variant="outline" size="sm">
                View Full Map
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <MapIntegration properties={filteredProperties.slice(0, 10)} height="400px" />
        </section>

        <LegalServicesSection />

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Scale className="h-5 w-5 text-blue-600" />
              Our Legal Experts
            </h2>
            <Link href="/lawyers">
              <Button variant="outline" size="sm">
                View All Lawyers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Show only first 4 lawyers */}
            <LawyerCard
              name="Fatima Rahman"
              specialization="Property Law"
              image="/placeholder.svg?height=200&width=200"
              id={1}
            />
            <LawyerCard
              name="Ahmed Khan"
              specialization="Real Estate Law"
              image="/placeholder.svg?height=200&width=200"
              id={2}
            />
            <LawyerCard
              name="Nasreen Akter"
              specialization="Contract Law"
              image="/placeholder.svg?height=200&width=200"
              id={3}
            />
            <LawyerCard
              name="Kamal Hossain"
              specialization="Land Dispute Resolution"
              image="/placeholder.svg?height=200&width=200"
              id={4}
            />
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">How Property Connect Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We act as a trusted middleman connecting property owners with potential buyers and renters, ensuring legal,
            safe, and transparent transactions.
          </p>
          <Link href="/how-it-works">
            <Button className="mt-2">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>

        <section className="mb-12">
          <SupportBanner />
        </section>
      </div>
    </main>
  )
}

function LawyerCard({
  name,
  specialization,
  image,
  id,
}: { name: string; specialization: string; image: string; id: number }) {
  return (
    <Link href={`/lawyers/${id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center mt-1 text-gray-600">
            <Scale className="h-4 w-4 text-blue-600 mr-1" />
            <span>{specialization}</span>
          </div>
          <Button className="w-full mt-4">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    </Link>
  )
}

function Scale(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}

function Image({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`${className} ${fill ? "absolute inset-0 w-full h-full object-cover" : ""}`}
    />
  )
}
