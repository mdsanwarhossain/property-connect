import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Building, User, Map, CreditCard, AlertTriangle, FileCheck, CheckCircle } from "lucide-react"

export default function ComplianceGuide() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compliance Guide for Property Transactions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Purchasing property in Bangladesh requires meticulous legal due diligence. Property Connect offers expert
            guidance through every step, ensuring compliance with all regulatory requirements and protecting your
            investment.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Key Compliance Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Our team of legal experts ensures thorough verification across all critical compliance areas. Expand each
              section below to learn more about our comprehensive compliance process.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="title">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Title Verification
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Sales Deed Review:</span>
                        <p className="text-sm text-gray-600">
                          We assist in obtaining and thoroughly reviewing the chain of ownership through the Sales Deed
                          (Bia Deed) for at least the past 25 years. This extensive review ensures there are no
                          disputes, legal encumbrances, or hidden issues associated with the property.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Khatiyan Verification:</span>
                        <p className="text-sm text-gray-600">
                          Our team verifies the Khatiyan records (C.S., S.A., R.S., B.S./City Jarip) provided by the
                          seller. We ensure that the Khatiyan is certified and printed, not a draft, safeguarding you
                          against fraudulent claims.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="encumbrance">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Non-Encumbrance Certificate
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Legal Status Check:</span>
                        <p className="text-sm text-gray-600">
                          We obtain a non-encumbrance certificate from the relevant Sub-registry office, confirming that
                          the property is free from any legal encumbrances such as mortgages or leases. This certificate
                          is essential in ensuring that there are no outstanding claims or liabilities on the property.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Land Tax Verification:</span>
                        <p className="text-sm text-gray-600">
                          The certificate also justifies if there is any outstanding land tax in the name of the
                          property, ensuring you don't inherit unexpected tax liabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mutation">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    Mutation Certificate
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Ownership Confirmation:</span>
                        <p className="text-sm text-gray-600">
                          We assist in checking the Mutation Certificate to ensure that the property is correctly
                          registered in the name of the seller in the Land Revenue Office records. This verification
                          step ensures that the seller has the legal right to transfer the property.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Post-Purchase Mutation:</span>
                        <p className="text-sm text-gray-600">
                          After purchase, we assist in the mutation of the property in your name at the Land Revenue
                          Office, updating the ownership records to reflect your new ownership.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="approvals">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    Building Approvals
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Construction Approvals:</span>
                        <p className="text-sm text-gray-600">
                          Our legal experts verify that the building has all necessary approvals and permits from local
                          municipal authorities, including the building plan, layout approval, and occupancy
                          certificate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Environmental Clearance:</span>
                        <p className="text-sm text-gray-600">
                          If applicable, we ensure that the building has obtained the necessary environmental
                          clearances, adhering to all regulatory norms.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seller">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Seller's Credentials
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Identity Verification:</span>
                        <p className="text-sm text-gray-600">
                          We verify the identity of the seller through their National ID or Passport, ensuring that you
                          are dealing with the rightful owner.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Authorization Check:</span>
                        <p className="text-sm text-gray-600">
                          If the seller is not the original owner, we ensure they have the proper authorization, such as
                          a Power of Attorney, preventing any unauthorized transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="zoning">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-blue-600" />
                    Land Use and Zoning Regulations
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Zoning Compliance:</span>
                        <p className="text-sm text-gray-600">
                          We confirm that the land use complies with local zoning regulations and that the property is
                          designated for residential use. This compliance check helps you avoid future legal
                          complications.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="financial">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    Financial Clearances
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Tax Payments:</span>
                        <p className="text-sm text-gray-600">
                          Our team verifies that all property taxes, ground rent, and other dues related to the property
                          are paid up to date. This step ensures that you will not inherit any outstanding liabilities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Utility Payments:</span>
                        <p className="text-sm text-gray-600">
                          We ensure all utility bills (electricity, water, gas) are settled, preventing any outstanding
                          liabilities from affecting your purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disputes">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    Legal Disputes
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Litigation Check:</span>
                        <p className="text-sm text-gray-600">
                          We perform a comprehensive search to ascertain whether the property is involved in any ongoing
                          legal disputes or litigation, thereby ensuring a clear and uncontested purchase.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileCheck className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Public Notice:</span>
                        <p className="text-sm text-gray-600">
                          We recommend displaying a signboard on the property and publishing a notice in the local
                          newspaper as proof for future reference, to avoid any potential conflicts with possible
                          stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            How Property Connect Ensures Compliance
          </h3>
          <p className="text-gray-700 mb-4">
            Our platform integrates comprehensive compliance checks into every property transaction, ensuring that all
            legal requirements are met and your investment is protected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium">Expert Legal Team</h4>
              </div>
              <p className="text-sm text-gray-600">
                Our dedicated legal experts specialize in real estate transactions and ensure all compliance
                requirements are met.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium">Document Verification System</h4>
              </div>
              <p className="text-sm text-gray-600">
                Our platform includes a robust document verification system that checks the authenticity of all property
                documents.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium">Compliance Reporting</h4>
              </div>
              <p className="text-sm text-gray-600">
                We provide detailed compliance reports for each property, highlighting any potential issues and their
                resolutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
