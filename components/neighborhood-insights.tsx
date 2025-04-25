import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ShoppingBag, Shield, Bus, GraduationCap, Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface NeighborhoodProps {
  data: {
    description: string
    amenities: string[]
    safetyRating: number
    transitRating: number
    schoolsRating: number
  }
  location: string
}

export default function NeighborhoodInsights({ data, location }: NeighborhoodProps) {
  const renderRating = (rating: number, label: string, icon: React.ReactNode) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1 font-semibold">{rating.toFixed(1)}</span>
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <Progress value={rating * 20} className="h-2" />
    </div>
  )

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          {location} Neighborhood
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">{data.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-blue-600" />
            Nearby Amenities
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.amenities.map((amenity, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold mb-1">Neighborhood Ratings</h4>
          {renderRating(data.safetyRating, "Safety", <Shield className="h-4 w-4 text-blue-600" />)}
          {renderRating(data.transitRating, "Public Transit", <Bus className="h-4 w-4 text-blue-600" />)}
          {renderRating(data.schoolsRating, "Schools", <GraduationCap className="h-4 w-4 text-blue-600" />)}
        </div>
      </CardContent>
    </Card>
  )
}
