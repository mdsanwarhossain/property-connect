"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface FilterProps {
  filters: {
    location: string
    type: string
    priceRange: number[]
    verified: boolean
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      location: string
      type: string
      priceRange: number[]
      verified: boolean
    }>
  >
}

export default function PropertyFilter({ filters, setFilters }: FilterProps) {
  const [priceRange, setPriceRange] = useState(filters.priceRange)
  const [location, setLocation] = useState(filters.location)
  const [type, setType] = useState(filters.type)
  const [verified, setVerified] = useState(filters.verified)

  const handleApplyFilters = () => {
    setFilters({
      location,
      type,
      priceRange,
      verified,
    })
  }

  const handleResetFilters = () => {
    setLocation("")
    setType("")
    setPriceRange([0, 100000])
    setVerified(false)
    setFilters({
      location: "",
      type: "",
      priceRange: [0, 100000],
      verified: false,
    })
  }

  const formatPrice = (value: number) => {
    return `${value.toLocaleString()} BDT`
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="type">Property Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger id="type" className="mt-1">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Office">Office Space</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Price Range</Label>
            <div className="mt-6">
              <Slider value={priceRange} min={0} max={100000} step={5000} onValueChange={setPriceRange} />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <div className="flex items-center space-x-2 h-10">
              <Switch id="verified-filter" checked={verified} onCheckedChange={setVerified} />
              <Label htmlFor="verified-filter" className="cursor-pointer">
                Verified Only
              </Label>
            </div>
          </div>

          <div className="flex items-end gap-2">
            <Button onClick={handleApplyFilters} className="flex-1">
              <Search className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
            <Button variant="outline" onClick={handleResetFilters} className="flex-none">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
