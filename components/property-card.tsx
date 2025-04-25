import type { Property } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import VerificationBadge from "./verification-badge"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-blue-600">{property.type}</Badge>
        </div>
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-semibold line-clamp-1">{property.title}</h3>
            {property.verified && (
              <VerificationBadge verified={property.verified} date={property.verificationDate} size="sm" />
            )}
          </div>
          <div className="flex items-center mt-2 text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center mt-2 text-gray-500">
            <Home className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {property.bedrooms} Bed • {property.bathrooms} Bath
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <div className="flex items-center text-blue-600 font-bold">
            <Tag className="h-4 w-4 mr-1" />
            <span>{property.price}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
