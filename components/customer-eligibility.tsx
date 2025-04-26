import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Home, Building, FileCheck, UserCheck } from "lucide-react"

export default function CustomerEligibility() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Categories & Eligibility</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Property Connect serves different types of users with specific eligibility requirements to ensure a safe and
            trustworthy platform for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Renters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Working professionals, students, families, and others looking for residential or commercial spaces to
                rent.
              </p>

              <h4 className="font-semibold mb-2">Required Documents:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">National ID Card (NID)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Professional or personal reference</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Past rent history (if applicable)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Buyers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Individuals or organizations looking to purchase residential plots, apartments, or commercial
                properties.
              </p>

              <h4 className="font-semibold mb-2">Required Documents:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">National ID Card (NID)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Proof of funds or bank statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">TIN certificate (for large transactions)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-blue-600" />
                Sellers/Landlords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Property owners looking to sell or rent out their residential or commercial properties.
              </p>

              <h4 className="font-semibold mb-2">Verification Process:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <UserCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Document upload (ownership proof)</span>
                </li>
                <li className="flex items-start gap-2">
                  <UserCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Physical verification by our team</span>
                </li>
                <li className="flex items-start gap-2">
                  <UserCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Legal document check by our advisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <UserCheck className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Property inspection and photography</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
