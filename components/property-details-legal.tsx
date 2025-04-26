import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCheck, UserCheck, Calendar, AlertTriangle, Shield, CheckCircle, Scale, Camera } from "lucide-react"

interface PropertyDetailsLegalProps {
  legalDocuments?: {
    ownershipVerified: boolean
    verifiedBy?: string
    verificationDate?: string
    documentTypes: string[]
  }
  fieldTeam?: {
    verifier?: string
    legalAdvisor?: string
    salesAgent?: string
    photographer?: string
  }
}

export default function PropertyDetailsLegal({ legalDocuments, fieldTeam }: PropertyDetailsLegalProps) {
  if (!legalDocuments && !fieldTeam) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-yellow-600 mb-4">
            <AlertTriangle className="h-5 w-5" />
            <p className="font-medium">Legal verification pending</p>
          </div>
          <p className="text-gray-600 text-sm">
            This property is awaiting legal verification by our team. Once verified, you'll be able to see detailed
            legal information and assigned field team members.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          Legal & Verification Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        {legalDocuments && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Document Verification</h4>
              {legalDocuments.ownershipVerified ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Verified</Badge>
              ) : (
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  Pending
                </Badge>
              )}
            </div>

            {legalDocuments.ownershipVerified && (
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>Verified by: {legalDocuments.verifiedBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>Verification Date: {new Date(legalDocuments.verificationDate || "").toLocaleDateString()}</span>
                </div>
              </div>
            )}

            <div className="mt-3">
              <h5 className="text-sm font-medium mb-2">Verified Documents:</h5>
              <div className="flex flex-wrap gap-2">
                {legalDocuments.documentTypes.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    <FileCheck className="h-3 w-3" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {fieldTeam && (
          <div>
            <h4 className="font-semibold mb-3">Assigned Field Team</h4>
            <div className="space-y-3">
              {fieldTeam.verifier && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="text-gray-500">Property Verifier:</span>
                    <span className="ml-1 font-medium">{fieldTeam.verifier}</span>
                  </div>
                </div>
              )}

              {fieldTeam.legalAdvisor && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Scale className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-gray-500">Legal Advisor:</span>
                    <span className="ml-1 font-medium">{fieldTeam.legalAdvisor}</span>
                  </div>
                </div>
              )}

              {fieldTeam.salesAgent && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <UserCheck className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-gray-500">Sales Agent:</span>
                    <span className="ml-1 font-medium">{fieldTeam.salesAgent}</span>
                  </div>
                </div>
              )}

              {fieldTeam.photographer && (
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-amber-100 p-1 rounded-full">
                    <Camera className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-gray-500">Photographer:</span>
                    <span className="ml-1 font-medium">{fieldTeam.photographer}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
