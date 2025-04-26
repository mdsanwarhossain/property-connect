import FieldTeamSection from "@/components/field-team-section"
import LegalDocumentation from "@/components/legal-documentation"
import CustomerEligibility from "@/components/customer-eligibility"
import TrustGuarantee from "@/components/trust-guarantee"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-4">About Property Connect</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Property Connect is designed to be a transparent and trusted middleman in the property market. We handle
            everything from legal work, documentation, verification, to connecting buyers and sellers, ensuring that no
            party is cheated and all processes are secure and seamless.
          </p>
        </div>
      </div>

      <FieldTeamSection />
      <LegalDocumentation />
      <CustomerEligibility />
      <TrustGuarantee />
    </main>
  )
}
