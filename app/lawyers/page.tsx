import LawyerDirectory from "@/components/lawyer-directory"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LawyersPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Legal Experts</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with our experienced property lawyers who can guide you through the legal aspects of property
            transactions, document verification, and dispute resolution.
          </p>
        </div>
      </div>

      <LawyerDirectory />
    </main>
  )
}
