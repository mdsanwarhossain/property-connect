import HowItWorks from "@/components/how-it-works"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
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
          <h1 className="text-4xl font-bold mb-4">How Property Connect Works</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about our platform flow, commission structure, and how we ensure safe and transparent property
            transactions.
          </p>
        </div>
      </div>

      <HowItWorks />
    </main>
  )
}
