"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Upload, CheckCircle, AlertCircle, FileCheck, Clock, Download, Pen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DocumentAutomationProps {
  propertyId?: number
}

export default function DocumentAutomation({ propertyId }: DocumentAutomationProps) {
  const [activeTab, setActiveTab] = useState("verification")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedDocuments, setUploadedDocuments] = useState<
    {
      name: string
      status: "pending" | "verified" | "rejected"
      message?: string
      uploadDate: string
    }[]
  >([
    {
      name: "Ownership Deed.pdf",
      status: "verified",
      uploadDate: "2025-03-15",
    },
    {
      name: "Tax Clearance Certificate.pdf",
      status: "pending",
      uploadDate: "2025-03-16",
    },
    {
      name: "Building Approval.pdf",
      status: "rejected",
      message: "Document is expired. Please upload the latest version.",
      uploadDate: "2025-03-14",
    },
  ])

  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          // Add a new document to the list
          setUploadedDocuments((prev) => [
            ...prev,
            {
              name: "Mutation Certificate.pdf",
              status: "pending",
              uploadDate: new Date().toISOString().split("T")[0],
            },
          ])
          return 0
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <FileText className="h-5 w-5 text-blue-600" />
          Document Automation System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="verification">Document Verification</TabsTrigger>
            <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
            <TabsTrigger value="signatures">Digital Signatures</TabsTrigger>
          </TabsList>

          <TabsContent value="verification" className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <FileCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Automated Document Verification</h3>
                  <p className="text-sm text-gray-600">
                    Our AI-powered system automatically verifies your property documents for authenticity and legal
                    compliance. Upload your documents below to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
              {isUploading ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Upload className="h-8 w-8 text-blue-600 animate-pulse" />
                  </div>
                  <p className="text-sm text-gray-600">Uploading document...</p>
                  <Progress value={uploadProgress} className="w-full max-w-md mx-auto" />
                  <p className="text-xs text-gray-500">{uploadProgress}% complete</p>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Upload Property Documents</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Drag and drop your documents here or click the button below to browse files. Supported formats: PDF,
                    JPG, PNG (max 10MB)
                  </p>
                  <Button onClick={handleUpload}>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                </>
              )}
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="font-medium">Uploaded Documents</h3>

              {uploadedDocuments.length > 0 ? (
                <div className="space-y-3">
                  {uploadedDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">Uploaded on {doc.uploadDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.status === "pending" && (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 bg-yellow-50 text-yellow-700 border-yellow-200"
                          >
                            <Clock className="h-3 w-3" />
                            <span>Pending</span>
                          </Badge>
                        )}
                        {doc.status === "verified" && (
                          <Badge className="flex items-center gap-1 bg-green-50 text-green-700 border-green-200">
                            <CheckCircle className="h-3 w-3" />
                            <span>Verified</span>
                          </Badge>
                        )}
                        {doc.status === "rejected" && (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            <span>Rejected</span>
                          </Badge>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">No documents uploaded yet.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="contracts" className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
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
                  className="text-blue-600 mt-1 flex-shrink-0"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                  <path d="M9 9h1" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Smart Contract Generation</h3>
                  <p className="text-sm text-gray-600">
                    Generate legally binding contracts automatically based on your property details and transaction
                    requirements. Our system ensures all necessary clauses are included.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContractCard
                title="Sale Agreement"
                description="Standard contract for property sale transactions"
                status="ready"
              />
              <ContractCard
                title="Rental Agreement"
                description="Comprehensive lease agreement for rental properties"
                status="ready"
              />
              <ContractCard
                title="Property Transfer Deed"
                description="Legal document for transferring property ownership"
                status="ready"
              />
              <ContractCard
                title="Mortgage Agreement"
                description="Contract for property financing and mortgage terms"
                status="draft"
              />
            </div>
          </TabsContent>

          <TabsContent value="signatures" className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <Pen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Digital Signature Integration</h3>
                  <p className="text-sm text-gray-600">
                    Securely sign and execute property documents online with our legally binding digital signature
                    system. No need for physical meetings or paper documents.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Documents Awaiting Signature</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Sale Agreement - Property #1042</p>
                      <p className="text-xs text-gray-500">Expires in 7 days</p>
                    </div>
                  </div>
                  <Button>
                    <Pen className="mr-2 h-4 w-4" />
                    Sign Now
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Property Inspection Report</p>
                      <p className="text-xs text-gray-500">Expires in 3 days</p>
                    </div>
                  </div>
                  <Button>
                    <Pen className="mr-2 h-4 w-4" />
                    Sign Now
                  </Button>
                </div>
              </div>

              <h3 className="font-medium mt-6">Recently Signed Documents</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Booking Agreement - Property #1036</p>
                      <p className="text-xs text-gray-500">Signed on March 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Property Visit Authorization</p>
                      <p className="text-xs text-gray-500">Signed on March 10, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ContractCard({
  title,
  description,
  status,
}: {
  title: string
  description: string
  status: "ready" | "draft" | "pending"
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{title}</h3>
            {status === "ready" && <Badge className="bg-green-600">Ready to Use</Badge>}
            {status === "draft" && (
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                Draft
              </Badge>
            )}
            {status === "pending" && (
              <Badge variant="outline" className="bg-gray-100">
                Pending
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="M9 9h1" />
                <path d="M9 13h6" />
                <path d="M9 17h6" />
              </svg>
              Preview
            </Button>
            <Button size="sm" className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="M9 9h1" />
                <path d="M9 13h6" />
                <path d="M9 17h6" />
              </svg>
              Generate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
