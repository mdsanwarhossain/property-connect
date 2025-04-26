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
  legalDocuments?: {
    ownershipVerified: boolean
    verifiedBy?: string
    verificationDate?: string
    documentTypes: string[]
  }
  fieldTeam?: {
    verifier?: string
    legalAdvisor?: string
    salesAgent?: string
    photographer?: string
  }
}

export interface FieldTeamMember {
  id: number
  name: string
  role: string
  email: string
  phone: string
  image: string
  assignedProperties: number[]
}

export interface LegalDocument {
  id: number
  propertyId: number
  documentType: string
  verified: boolean
  verifiedBy: string
  verificationDate: string
  fileUrl: string
}
