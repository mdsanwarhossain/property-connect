import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Scale, UserCheck, Camera, Megaphone } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
  badge: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Property Verifier",
    description: "Physically visits properties to verify ownership and collect accurate details for listings.",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Verification Expert",
  },
  {
    id: 2,
    name: "Fatima Rahman",
    role: "Legal Advisor",
    description: "Ensures all property documents are valid and transactions comply with local regulations.",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Legal Expert",
  },
  {
    id: 3,
    name: "Rahim Chowdhury",
    role: "Sales Agent",
    description: "Acts as an intermediary between app users and landlords/buyers to facilitate smooth transactions.",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Top Performer",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Photographer",
    description: "Captures high-quality images and creates 360° virtual tours of properties.",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Visual Expert",
  },
  {
    id: 5,
    name: "Kamal Hossain",
    role: "Promotional Team Lead",
    description: "Conducts on-ground promotions and builds partnerships with local real estate agents.",
    image: "/placeholder.svg?height=100&width=100",
    badge: "Marketing Guru",
  },
]

export default function FieldTeamSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Field Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated field team ensures every property on Property Connect is verified, legally sound, and
            presented with accurate information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-blue-100">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <div className="flex items-center mt-1">
                      {member.role === "Property Verifier" && <CheckCircle className="h-4 w-4 text-green-600 mr-1" />}
                      {member.role === "Legal Advisor" && <Scale className="h-4 w-4 text-blue-600 mr-1" />}
                      {member.role === "Sales Agent" && <UserCheck className="h-4 w-4 text-purple-600 mr-1" />}
                      {member.role === "Photographer" && <Camera className="h-4 w-4 text-amber-600 mr-1" />}
                      {member.role === "Promotional Team Lead" && <Megaphone className="h-4 w-4 text-red-600 mr-1" />}
                      <span className="text-gray-600">{member.role}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <Badge variant="outline" className="bg-blue-50">
                  {member.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
