"use client"

import { useState } from "react"
import { usePropertyContext } from "@/lib/store"
import PropertyCard from "@/components/property-card"
import PropertyFilter from "@/components/property-filter"
import PropertyCategories from "@/components/property-categories"
import MapIntegration from "@/components/map-integration"
import { Button } from "@/components/ui/button"
import { Grid, Map, ListFilter } from "lucide-react"
import Link from "next/link"

export default function PropertiesPage() {
  const { properties } = usePropertyContext()
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: [0, 100000],
    verified: false,
  })
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Browse Properties</h1>
        <p className="text-gray-600">
          Explore our wide range of verified properties for sale and rent across Bangladesh. Use filters to find your
          perfect match.
        </p>
      </div>

      <PropertyCategories />

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">All Properties</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-1"
            >
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="flex items-center gap-1"
            >
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Map</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("filters")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-1"
            >
              <ListFilter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>
        </div>

        <div id="filters" className="mb-8">
          <PropertyFilter filters={filters} setFilters={setFilters} />
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.length === 0 ? (
              <div className="col-span-3 text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No properties match your filters. Try adjusting your search criteria.</p>
              </div>
            ) : (
              filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)
            )}
          </div>
        ) : (
          <div className="mb-8">
            <MapIntegration properties={filteredProperties} height="600px" />
          </div>
        )}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
        <Link href="/admin">
          <Button size="lg">List Your Property</Button>
        </Link>
      </div>
    </main>
  )
}
