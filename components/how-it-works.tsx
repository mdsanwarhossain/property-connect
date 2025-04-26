import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, UserCheck, FileCheck, CreditCard, CheckCircle, Percent, Shield } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Property Connect Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We act as a trusted middleman connecting property owners with potential buyers and renters, ensuring legal,
            safe, and transparent transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white border-t-4 border-t-blue-600">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Sellers & Landlords</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Post your property with complete details and documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Our team verifies your property and documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Get connected with genuine buyers/renters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Complete the transaction securely through our platform</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-blue-600">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Buyers & Renters</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Browse verified property listings with confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Schedule visits and request to buy/rent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Get legal assistance and document verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Complete transactions with peace of mind</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-blue-600">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Percent className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Commission Structure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Buying/Selling:</span>
                    <p className="text-sm">2-3% commission from the total sale amount</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Renting:</span>
                    <p className="text-sm">One month's rent as commission from the landlord</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Premium Services:</span>
                    <p className="text-sm">Paid listings, virtual tours, legal documentation</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            Fraud Prevention Measures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Digital Contracts with OTP Verification</p>
                <p className="text-sm text-gray-600">
                  Both parties must agree via OTP before viewing full contact details
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <UserCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Booking Token System</p>
                <p className="text-sm text-gray-600">Locks the deal and confirms intent to proceed</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 mt-0.5 flex-shrink-0"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <p className="font-medium">In-app Chat & Phone Masking</p>
                <p className="text-sm text-gray-600">Keeps communication within the platform</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Refundable Visit Fee</p>
                <p className="text-sm text-gray-600">Nominal fee refundable only if the deal happens via the app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
