"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePropertyContext } from "@/lib/store"
import type { Property } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function AdminPage() {
  const router = useRouter()
  const { properties, addProperty } = usePropertyContext()

  const [formData, setFormData] = useState<Omit<Property, "id">>({
    title: "",
    location: "",
    type: "Apartment",
    price: "",
    description: "",
    image: "/placeholder.svg?height=400&width=600",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    yearBuilt: 2020,
    features: ["Air Conditioning", "Parking", "Security"],
    verified: false,
    neighborhood: {
      description: "",
      amenities: [],
      safetyRating: 4.0,
      transitRating: 4.0,
      schoolsRating: 4.0,
    },
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNumberChange = (name: string, value: string) => {
    const numValue = value === "" ? 0 : Number.parseInt(value)
    setFormData((prev) => ({ ...prev, [name]: numValue }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      verified: checked,
      verificationDate: checked ? new Date().toISOString().split("T")[0] : undefined,
    }))
  }

  const handleNeighborhoodChange = (field: string, value: string | string[] | number) => {
    setFormData((prev) => ({
      ...prev,
      neighborhood: {
        ...prev.neighborhood,
        [field]: value,
      },
    }))
  }

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.trim()) {
      const amenitiesList = value.split(",").map((item) => item.trim())
      handleNeighborhoodChange("amenities", amenitiesList)
    } else {
      handleNeighborhoodChange("amenities", [])
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.title.trim()) {
      errors.title = "Title is required"
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required"
    }

    if (!formData.price.trim()) {
      errors.price = "Price is required"
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required"
    }

    if (!formData.neighborhood.description.trim()) {
      errors.neighborhoodDescription = "Neighborhood description is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const newProperty: Property = {
      ...formData,
      id: properties.length > 0 ? Math.max(...properties.map((p) => p.id)) + 1 : 1,
    }

    addProperty(newProperty)
    router.push("/")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button onClick={() => router.push("/")} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Properties
      </Button>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Property</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Modern Apartment in Dhanmondi"
                  className={formErrors.title ? "border-red-500" : ""}
                />
                {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Dhanmondi, Dhaka"
                  className={formErrors.location ? "border-red-500" : ""}
                />
                {formErrors.location && <p className="text-red-500 text-sm">{formErrors.location}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Property Type</Label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Office">Office Space</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="35,000 BDT/month"
                  className={formErrors.price ? "border-red-500" : ""}
                />
                {formErrors.price && <p className="text-red-500 text-sm">{formErrors.price}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleNumberChange("bedrooms", e.target.value)}
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => handleNumberChange("bathrooms", e.target.value)}
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area (sq.ft)</Label>
                <Input
                  id="area"
                  type="number"
                  value={formData.area}
                  onChange={(e) => handleNumberChange("area", e.target.value)}
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearBuilt">Year Built</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  value={formData.yearBuilt}
                  onChange={(e) => handleNumberChange("yearBuilt", e.target.value)}
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-gray-500">
                  Enter a URL for the property image. Leave as is for a placeholder.
                </p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe the property..."
                  className={formErrors.description ? "border-red-500" : ""}
                />
                {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
              </div>

              <div className="md:col-span-2 flex items-center space-x-2 py-4">
                <Switch id="verified" checked={formData.verified} onCheckedChange={handleSwitchChange} />
                <Label htmlFor="verified" className="font-medium cursor-pointer">
                  Mark as Verified Property
                </Label>
                {formData.verified && (
                  <span className="text-sm text-gray-500">(Verification Date: {formData.verificationDate})</span>
                )}
              </div>
            </div>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-4">Neighborhood Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="neighborhoodDescription">Neighborhood Description</Label>
                <Textarea
                  id="neighborhoodDescription"
                  value={formData.neighborhood.description}
                  onChange={(e) => handleNeighborhoodChange("description", e.target.value)}
                  rows={3}
                  placeholder="Describe the neighborhood..."
                  className={formErrors.neighborhoodDescription ? "border-red-500" : ""}
                />
                {formErrors.neighborhoodDescription && (
                  <p className="text-red-500 text-sm">{formErrors.neighborhoodDescription}</p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="amenities">Nearby Amenities</Label>
                <Input
                  id="amenities"
                  placeholder="Parks, Schools, Restaurants, etc. (comma separated)"
                  value={formData.neighborhood.amenities.join(", ")}
                  onChange={handleAmenitiesChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="safetyRating">Safety Rating (1-5)</Label>
                <Input
                  id="safetyRating"
                  type="number"
                  value={formData.neighborhood.safetyRating}
                  onChange={(e) => handleNeighborhoodChange("safetyRating", Number(e.target.value))}
                  min="1"
                  max="5"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transitRating">Public Transit Rating (1-5)</Label>
                <Input
                  id="transitRating"
                  type="number"
                  value={formData.neighborhood.transitRating}
                  onChange={(e) => handleNeighborhoodChange("transitRating", Number(e.target.value))}
                  min="1"
                  max="5"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolsRating">Schools Rating (1-5)</Label>
                <Input
                  id="schoolsRating"
                  type="number"
                  value={formData.neighborhood.schoolsRating}
                  onChange={(e) => handleNeighborhoodChange("schoolsRating", Number(e.target.value))}
                  min="1"
                  max="5"
                  step="0.1"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-8">
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
