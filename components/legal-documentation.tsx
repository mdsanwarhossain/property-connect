import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckSquare, Upload, Database, Shield, AlertTriangle } from "lucide-react"

export default function LegalDocumentation() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Legal & Documentation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Property Connect ensures all transactions are legally sound with our comprehensive documentation and
            verification process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                Document Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our partnered legal advisors verify all property ownership documents to ensure they are authentic and
                legally valid before listing on our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckSquare className="h-5 w-5 text-blue-600" />
                Standard Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We provide standard contract templates for buyers, sellers, renters, and landlords to ensure all parties
                are protected and terms are clear.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-blue-600" />
                Property Check-ups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our team conducts thorough land and house check-ups before any deal is finalized to ensure the property
                matches the description and is free from disputes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Upload className="h-5 w-5 text-blue-600" />
                Document Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Property Connect includes an option to upload and review scanned documents, making it easy to share and
                verify important paperwork.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="h-5 w-5 text-blue-600" />
                Digital Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We maintain secure digital records of all verified documents and agreements, providing an audit trail
                and easy access for all parties involved.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-blue-600" />
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our legal team is available to handle any disputes or complaints officially, providing mediation and
                resolution services to all parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
