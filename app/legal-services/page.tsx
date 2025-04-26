import LegalServicesSection from "@/components/legal-services-section"
import PropertyVerificationGuide from "@/components/property-verification-guide"
import ComplianceGuide from "@/components/compliance-guide"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LegalServicesPage() {
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
          <h1 className="text-4xl font-bold mb-4">Legal Services & Property Verification</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Property Connect offers comprehensive legal services to ensure your property transaction is secure,
            transparent, and legally sound. Our team of experts handles all aspects of property verification and legal
            documentation.
          </p>
        </div>
      </div>

      <LegalServicesSection />
      <PropertyVerificationGuide />
      <ComplianceGuide />
    </main>
  )
}
