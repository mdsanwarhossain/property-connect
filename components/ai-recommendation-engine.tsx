"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Sparkles, MapPin, Tag, BedIcon, BathIcon, ArrowRight, ThumbsUp, ThumbsDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Property } from "@/lib/types"
import { usePropertyContext } from "@/lib/store"

interface AIRecommendationEngineProps {
  userId?: string
}

export default function AIRecommendationEngine({ userId = "user-123" }: AIRecommendationEngineProps) {
  const { properties } = usePropertyContext()
  const [recommendations, setRecommendations] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [preferences, setPreferences] = useState({
    budget: [20000, 60000],
    bedrooms: 2,
    location: "Dhanmondi",
    propertyType: "Apartment",
    mustHaveFeatures: ["Air Conditioning", "Parking Space", "Security System"],
  })
  const [activeTab, setActiveTab] = useState("recommendations")

  // Simulate AI recommendation engine
  useEffect(() => {
    setLoading(true)

    // Simulate API call delay
    const timer = setTimeout(() => {
      // Filter properties based on user preferences
      const filtered = properties.filter((property) => {
        const price = Number.parseInt(property.price.replace(/[^0-9]/g, ""))
        const budgetMatch = price >= preferences.budget[0] && price <= preferences.budget[1]
        const bedroomsMatch = property.bedrooms >= preferences.bedrooms
        const locationMatch = property.location.includes(preferences.location)
        const typeMatch = property.type === preferences.propertyType
        const featuresMatch = preferences.mustHaveFeatures.every((feature) => property.features.includes(feature))

        // Calculate a match score (simplified for demo)
        const matchScore = [
          budgetMatch ? 30 : 0,
          bedroomsMatch ? 20 : 0,
          locationMatch ? 25 : 0,
          typeMatch ? 15 : 0,
          featuresMatch ? 10 : 0,
        ].reduce((a, b) => a + b, 0)

        // Only include properties with a good match score
        return matchScore > 50
      })

      // Sort by best match (in a real app, this would use a more sophisticated algorithm)
      const sorted = [...filtered].sort((a, b) => {
        // Prioritize verified properties
        if (a.verified && !b.verified) return -1
        if (!a.verified && b.verified) return 1

        // Then by exact bedroom match
        if (a.bedrooms === preferences.bedrooms && b.bedrooms !== preferences.bedrooms) return -1
        if (a.bedrooms !== preferences.bedrooms && b.bedrooms === preferences.bedrooms) return 1

        return 0
      })

      setRecommendations(sorted)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [properties, preferences])

  const handlePreferenceUpdate = (key: string, value: any) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleFeatureToggle = (feature: string) => {
    setPreferences((prev) => {
      if (prev.mustHaveFeatures.includes(feature)) {
        return {
          ...prev,
          mustHaveFeatures: prev.mustHaveFeatures.filter((f) => f !== feature),
        }
      } else {
        return {
          ...prev,
          mustHaveFeatures: [...prev.mustHaveFeatures, feature],
        }
      }
    })
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-blue-600" />
          AI-Powered Property Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="recommendations">Personalized Recommendations</TabsTrigger>
            <TabsTrigger value="preferences">Your Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-500">Our AI is finding your perfect match...</p>
              </div>
            ) : recommendations.length > 0 ? (
              <div className="space-y-6">
                <p className="text-gray-600">
                  Based on your preferences and browsing history, we've found {recommendations.length} properties that
                  might interest you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendations.map((property) => (
                    <PropertyRecommendationCard key={property.id} property={property} />
                  ))}
                </div>

                <div className="text-center mt-4">
                  <Link href="/properties">
                    <Button>
                      View All Properties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No properties match your current preferences.</p>
                <Button onClick={() => setActiveTab("preferences")}>Adjust Your Preferences</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Budget Range (BDT/month)</Label>
                <div className="pt-4">
                  <Slider
                    value={preferences.budget}
                    min={5000}
                    max={200000}
                    step={5000}
                    onValueChange={(value) => handlePreferenceUpdate("budget", value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>{preferences.budget[0].toLocaleString()} BDT</span>
                    <span>{preferences.budget[1].toLocaleString()} BDT</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Minimum Bedrooms</Label>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Button
                      key={num}
                      variant={preferences.bedrooms === num ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => handlePreferenceUpdate("bedrooms", num)}
                    >
                      {num}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preferred Location</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Dhanmondi", "Gulshan", "Banani", "Uttara", "Motijheel", "Purbachal"].map((location) => (
                    <Badge
                      key={location}
                      variant={preferences.location === location ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handlePreferenceUpdate("location", location)}
                    >
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Apartment", "House", "Villa", "Office", "Land"].map((type) => (
                    <Badge
                      key={type}
                      variant={preferences.propertyType === type ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handlePreferenceUpdate("propertyType", type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Must-Have Features</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "Air Conditioning",
                    "Parking Space",
                    "Security System",
                    "Backup Generator",
                    "Elevator",
                    "Swimming Pool",
                    "Garden",
                    "Gym",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Switch
                        id={`feature-${feature}`}
                        checked={preferences.mustHaveFeatures.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <Label htmlFor={`feature-${feature}`} className="cursor-pointer">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" onClick={() => setActiveTab("recommendations")}>
                <Sparkles className="mr-2 h-4 w-4" />
                Update Recommendations
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function PropertyRecommendationCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
        <div className="relative h-40 w-full">
          <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-blue-600">{property.type}</Badge>
          {property.verified && <Badge className="absolute top-2 left-2 bg-green-600">Verified</Badge>}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{property.title}</h3>

          <div className="flex items-center mt-2 text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-gray-500">
                <BedIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.bedrooms}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <BathIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.bathrooms}</span>
              </div>
            </div>
            <div className="flex items-center text-blue-600 font-bold">
              <Tag className="h-4 w-4 mr-1" />
              <span>{property.price}</span>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button variant="outline" size="sm" className="flex-1 mr-1">
              <ThumbsDown className="h-4 w-4 mr-1" />
              Not for me
            </Button>
            <Button size="sm" className="flex-1 ml-1">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Interested
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
