import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Search,
  CheckCircle,
  Building,
  Map,
  FileCheck,
  AlertTriangle,
  Calendar,
  Database,
  Eye,
} from "lucide-react"

export default function PropertyVerificationGuide() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Property Ownership Verification Guide</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to verifying property ownership in Bangladesh. Follow these essential steps to ensure
            your property purchase is legally sound and free from disputes.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Essential Documents</TabsTrigger>
            <TabsTrigger value="verifiers">Property Verifiers</TabsTrigger>
            <TabsTrigger value="process">Verification Process</TabsTrigger>
            <TabsTrigger value="collection">Document Collection</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  Why Property Verification is Critical
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  When purchasing property in Bangladesh, due diligence is indispensable. With a high incidence of
                  ownership disputes and fraudulent documentation, a thorough verification process is crucial to secure
                  an undisputed property title.
                </p>
                <p className="text-gray-700">
                  Property Connect provides a comprehensive verification service that follows all legal requirements and
                  ensures your investment is protected. Our team of experts handles the entire process, from document
                  collection to legal verification.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-800">Important Note</h4>
                      <p className="text-sm text-amber-700">
                        Never proceed with a property transaction without thorough verification of all documents. Even
                        minor discrepancies can lead to costly litigation and potential loss of investment.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Essential Documentation Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The following documents are essential for any property transaction in Bangladesh. Our team ensures all
                  these documents are verified and authenticated before proceeding with the transaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        All previous deeds from the past 30 years (chain of ownership)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">All updated Khatian/Parcha documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mutation Certificate in the seller's name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Current Land Development Tax receipts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Succession Certificate (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Seller's NID and Tax Clearance Certificate</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Buyer's NID and Tax Clearance Certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Mouja Map</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Approval from RAJUK or relevant authority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Agreement with the Building Society</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Building Plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Utility Copies in the name of the Seller</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verifiers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Who Are Property Verifiers?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Property verifiers are professionals who ensure the legal validity of property transactions. Property
                  Connect works with various types of verifiers to ensure comprehensive verification.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Types of Property Verifiers</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Property Lawyers:</span>
                          <p className="text-sm text-gray-600">
                            Legal experts who guide buyers through the verification process and verify document
                            authenticity.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Property Handling Companies:</span>
                          <p className="text-sm text-gray-600">
                            Companies that conduct thorough assessments of properties, verifying ownership and legal
                            compliance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Banks and Financial Institutions:</span>
                          <p className="text-sm text-gray-600">
                            They verify property documents as part of the loan application process.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Government Agencies:</span>
                          <p className="text-sm text-gray-600">
                            Local authorities involved in verifying building approvals and permissions.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">What They Do</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Document Verification:</span>
                          <p className="text-sm text-gray-600">
                            Verify authenticity of title deeds, sale agreements, and encumbrance certificates.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Legal Compliance Check:</span>
                          <p className="text-sm text-gray-600">
                            Ensure property adheres to all local, state, and national regulations.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Title Search:</span>
                          <p className="text-sm text-gray-600">
                            Determine legal ownership and identify any encumbrances or liens.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Physical Inspection:</span>
                          <p className="text-sm text-gray-600">
                            Assess property condition and identify potential issues.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileCheck className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Risk Assessment:</span>
                          <p className="text-sm text-gray-600">
                            Assess potential risks and advise on mitigation strategies.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Verification Process Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Search className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. Collecting Property Information</h3>
                      <p className="text-gray-700">
                        Gather essential information about the property including plot (dag) number, Khaitan number,
                        current possessor's name, and precise holding address. These details are necessary to access
                        official records and verify ownership legitimacy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Establishing the Chain of Title</h3>
                      <p className="text-gray-700">
                        Review the complete history of ownership to establish a property's legal validity. Begin with
                        information from the current owner and local residents, then verify against legal documents to
                        confirm an unbroken line of ownership. Each transfer must be properly documented and free from
                        irregularities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <FileCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Authenticity of the Title Deed(s)</h3>
                      <p className="text-gray-700">
                        Verify title deed authenticity by conducting a search at the Sub Registry Office, which
                        maintains records of all registered deeds. Cross-reference deed number, registration date, and
                        other details to confirm genuineness. Review historical transactions spanning at least 25 years
                        to reveal any previous transfers or encumbrances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Database className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">4. Verification of Khatian/Porcha</h3>
                      <p className="text-gray-700">
                        Obtain and verify Khatian or Porcha documents from the Local Land Office, Deputy Commissioner's
                        Office, or other relevant authorities. Request certified copies and ensure ownership consistency
                        across all documents. Any inconsistencies should be thoroughly explained and documented.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">5. Checking the Mutation Khatian</h3>
                      <p className="text-gray-700">
                        If the current owner's name is absent from the latest Khatian/Porcha, mutation of the owner's
                        name is required. This involves a Mutation Proposal Letter, Duplicate Carbon Receipt, and
                        updated Mutation Khatian showing the new owner's name. Ownership transfer is not legally
                        permissible without proper mutation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">6. Verification for Government-Leased Property</h3>
                      <p className="text-gray-700">
                        For properties leased from government bodies (Department of Public Works, RAJUK, CDA), verify
                        lease terms compliance and ensure necessary permissions for property transfer have been granted
                        by the respective government agency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">7. Land Tax Records</h3>
                      <p className="text-gray-700">
                        Verify payment status of land tax (Khajna). Non-payment can result in government reclamation of
                        the property. Ensure all land taxes are current according to the Bangla Calendar Years and that
                        the land type aligns with the property description in title deeds and Khatian.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Map className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">8. Building Plan and Approval Verification</h3>
                      <p className="text-gray-700">
                        For properties with structures, verify building plans and approval documents to ensure
                        compliance with local zoning laws and regulations. This prevents issues related to unauthorized
                        construction and facilitates future resale or development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <Eye className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">9. Physical Verification of the Property</h3>
                      <p className="text-gray-700">
                        A personal visit to the property is necessary to verify whether the actual property corresponds
                        to the information in legal documents. Physical verification also allows you to check for any
                        possession disputes or unregistered tenants that may pose issues post-purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  Where to Collect Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Khatian/Porcha Documents</h3>
                    <p className="text-gray-700 mb-3">
                      You can obtain Khatian or Porcha documents from the following offices:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Union Land Office (Tahsil Office):</span>
                          <p className="text-sm text-gray-600">
                            Provides Khosra Khatian but not certified copies. Important for finding your Khatian number
                            and paying land taxes.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Upazila Land Office:</span>
                          <p className="text-sm text-gray-600">
                            Handles namjari/mutation and provides Khosra Khatian, but not certified copies.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">District DC Office:</span>
                          <p className="text-sm text-gray-600">
                            Provides certified copies of Khatian/Porcha. These documents have the highest importance and
                            are accepted everywhere.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Settlement Office:</span>
                          <p className="text-sm text-gray-600">
                            Provides new record or survey Porcha/Khatian and maps.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Land Tax Payment</h3>
                    <p className="text-gray-700 mb-3">
                      Land Revenue Offices at district and upazila levels provide all land-related services, including
                      tax collection. They handle:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Land tax collection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Various land-related fees and charges</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Maps and Plans</h3>
                    <p className="text-gray-700 mb-3">You can obtain maps or plans from these offices:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">District DC Office:</span>
                          <p className="text-sm text-gray-600">
                            Provides CS, SA, RS, BS mouja maps. Requires application form, court fee, and government
                            fee.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Land Record and Survey Department (Tejgaon, Dhaka):</span>
                          <p className="text-sm text-gray-600">
                            Provides maps for all of Bangladesh, including CS, SA, RS, BS, district maps, and Bangladesh
                            maps. These maps have high acceptability.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
