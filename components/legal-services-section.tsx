import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckSquare, Scale, Search, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LegalServicesSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Legal Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Property Connect offers end-to-end legal services to ensure your property transaction is secure,
            transparent, and legally sound. Our team of experts handles all aspects of property verification and legal
            documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Property Search Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We assist our clients in verifying property ownership and obtaining certified documentation essential
                for ownership validation. Following this, we prepare a comprehensive search report detailing the
                property's current status.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Land tax records verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mutation entries confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Deed verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Certified document collection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Document Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Thorough examination of all legal documents to ensure authenticity and compliance, protecting you from
                potential fraud. We meticulously verify each document to ensure your investment is secure.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Title deed authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Khatian/Porcha verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Building plan approval check</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Encumbrance certificate verification</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <CheckSquare className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Transaction Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Handling all legal formalities, from drafting agreements to registration and post-purchase compliance.
                Our comprehensive service ensures that every aspect of your transaction is handled professionally.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Agreement drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Registration assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mutation process handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Post-purchase compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Litigation Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Assistance in resolving any legal disputes or issues that may arise during or after the purchase. Our
                team is equipped to handle any legal challenges, ensuring your rights are protected.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dispute resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Legal representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mediation services</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Legal advisory</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/legal-services">
            <Button size="lg" className="px-8">
              Learn More About Our Legal Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
