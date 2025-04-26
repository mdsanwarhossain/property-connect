"use client"

import { useParams, useRouter } from "next/navigation"
import LawyerChat from "@/components/lawyer-chat"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LawyerMessagePage() {
  const { id } = useParams()
  const router = useRouter()

  // In a real application, you would fetch the lawyer data from an API
  // For this demo, we'll use hardcoded data
  const lawyerData = {
    id: Number(id),
    name: id === "1" ? "Fatima Rahman" : id === "2" ? "Ahmed Khan" : id === "3" ? "Nasreen Akter" : "Kamal Hossain",
    image: "/placeholder.svg?height=200&width=200",
    specialization: "Property Law",
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button onClick={() => router.push("/lawyers")} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Lawyers
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Chat with {lawyerData.name}</h1>
        <LawyerChat
          lawyerId={lawyerData.id}
          lawyerName={lawyerData.name}
          lawyerImage={lawyerData.image}
          lawyerSpecialization={lawyerData.specialization}
        />
      </div>
    </main>
  )
}
