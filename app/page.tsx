"use client"

import { useState } from "react"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import { initialProperties } from "@/lib/data"
import type { Property } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { PlusCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import SupportBanner from "@/components/support-banner"

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
    <main className="container mx-auto px-4 py-8">
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
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <PropertyFilter filters={filters} setFilters={setFilters} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No properties match your filters. Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>

      <section className="mb-12">
        <SupportBanner />
      </section>
    </main>
  )
}
