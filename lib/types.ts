export interface Property {
  id: number
  title: string
  location: string
  type: string
  price: string
  description: string
  image: string
  bedrooms: number
  bathrooms: number
  area: number
  yearBuilt: number
  features: string[]
  verified: boolean
  verificationDate?: string
  neighborhood: {
    description: string
    amenities: string[]
    safetyRating: number
    transitRating: number
    schoolsRating: number
  }
}
