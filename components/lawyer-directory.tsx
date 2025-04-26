import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, Star, MessageSquare, Phone, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Lawyer {
  id: number
  name: string
  specialization: string
  experience: number
  rating: number
  image: string
  description: string
  availability: string
  languages: string[]
  verified: boolean
}

const lawyers: Lawyer[] = [
  {
    id: 1,
    name: "Fatima Rahman",
    specialization: "Property Law",
    experience: 12,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Specializes in property law with extensive experience in document verification, title searches, and property disputes. Provides comprehensive legal advice for property transactions.",
    availability: "Mon-Fri, 9AM-5PM",
    languages: ["Bengali", "English"],
    verified: true,
  },
  {
    id: 2,
    name: "Ahmed Khan",
    specialization: "Real Estate Law",
    experience: 8,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Expert in real estate law focusing on property registration, transfer of ownership, and legal compliance. Helps clients navigate complex property transactions with ease.",
    availability: "Mon-Sat, 10AM-6PM",
    languages: ["Bengali", "English", "Hindi"],
    verified: true,
  },
  {
    id: 3,
    name: "Nasreen Akter",
    specialization: "Contract Law",
    experience: 10,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Specializes in contract law with focus on property agreements, lease contracts, and purchase agreements. Ensures all legal documents are properly drafted and executed.",
    availability: "Tue-Sat, 9AM-4PM",
    languages: ["Bengali", "English"],
    verified: true,
  },
  {
    id: 4,
    name: "Kamal Hossain",
    specialization: "Land Dispute Resolution",
    experience: 15,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Expert in resolving land disputes with extensive experience in litigation and mediation. Helps clients resolve property conflicts through legal channels.",
    availability: "Mon-Fri, 10AM-7PM",
    languages: ["Bengali", "English", "Urdu"],
    verified: true,
  },
]

export default function LawyerDirectory() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Legal Experts</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with our experienced property lawyers who can guide you through the legal aspects of property
            transactions, document verification, and dispute resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lawyers.map((lawyer) => (
            <Card key={lawyer.id} className="overflow-hidden h-full hover:shadow-lg transition-all duration-200">
              <div className="relative h-48 w-full bg-gray-100">
                <Image src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} fill className="object-cover" />
                {lawyer.verified && (
                  <Badge className="absolute top-2 right-2 bg-green-600 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Verified</span>
                  </Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                    <div className="flex items-center mt-1">
                      <Scale className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-gray-600 text-sm">{lawyer.specialization}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <span className="text-sm font-medium">{lawyer.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm line-clamp-3">{lawyer.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{lawyer.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M21.59 11.59a13.43 13.43 0 0 0-2.26-3.34 13.77 13.77 0 0 0-4.74-3.61 13.79 13.79 0 0 0-11.18 0 13.77 13.77 0 0 0-4.74 3.61 13.43 13.43 0 0 0-2.26 3.34A13.19 13.19 0 0 0 5.26 17.9a13.19 13.19 0 0 0 13.48 0 13.19 13.19 0 0 0 2.85-6.31" />
                      <path d="M3 3v5h5" />
                      <path d="M21 3v5h-5" />
                      <path d="M3 21v-5h5" />
                      <path d="M21 21v-5h-5" />
                    </svg>
                    <span className="text-gray-600">{lawyer.languages.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                    <span className="text-gray-600">{lawyer.experience} years experience</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-2">
                  <Link href={`/lawyers/${lawyer.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </Link>
                  <Link href={`/lawyers/${lawyer.id}/message`} className="flex-1">
                    <Button className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/lawyers">
            <Button size="lg">View All Legal Experts</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
