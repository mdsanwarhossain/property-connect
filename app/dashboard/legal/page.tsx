"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Scale, Users, Calendar, CheckCircle, User, Building, ArrowRight, Filter, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LegalAdvisorDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for legal cases
  const cases = [
    {
      id: 1,
      title: "Property Deed Verification",
      propertyTitle: "Modern Apartment in Dhanmondi",
      propertyImage: "/a.jpeg?height=80&width=120",
      clientName: "Ahmed Khan",
      clientImage: "/agent.jpg?height=40&width=40",
      deadline: "2025-05-10",
      status: "active",
      progress: 35,
      created: "2025-04-15",
    },
    {
      id: 2,
      title: "Lease Agreement Review",
      propertyTitle: "Office Space in Motijheel",
      propertyImage: "/d.jpg?height=80&width=120",
      clientName: "Nasreen Akter",
      clientImage: "/w.jpg?height=40&width=40",
      deadline: "2025-04-30",
      status: "active",
      progress: 70,
      created: "2025-04-10",
    },
    {
      id: 3,
      title: "Property Purchase Agreement",
      propertyTitle: "Family House in Uttara",
      propertyImage: "/b.jpg?height=80&width=120",
      clientName: "Kamal Hossain",
      clientImage: "/agent.jpg?height=40&width=40",
      deadline: "2025-05-15",
      status: "active",
      progress: 20,
      created: "2025-04-18",
    },
    {
      id: 4,
      title: "Document Verification",
      propertyTitle: "Commercial Space in Farmgate",
      propertyImage: "/c.jpg?height=80&width=120",
      clientName: "Fatima Rahman",
      clientImage: "/w.jpg?height=40&width=40",
      deadline: "2025-04-05",
      status: "completed",
      progress: 100,
      created: "2025-03-25",
    },
    {
      id: 5,
      title: "Title Deed Transfer",
      propertyTitle: "Residential Plot in Purbachal",
      propertyImage: "/e.jpg?height=80&width=120",
      clientName: "Rahim Chowdhury",
      clientImage: "/agent.jpg?height=40&width=40",
      deadline: "2025-03-30",
      status: "completed",
      progress: 100,
      created: "2025-03-15",
    },
  ]

  // Filter cases based on status
  const activeCases = cases.filter((c) => c.status === "active")
  const completedCases = cases.filter((c) => c.status === "completed")

  // Mock data for document verification
  const pendingDocuments = [
    {
      id: 1,
      title: "Ownership Deed",
      propertyTitle: "Modern Apartment in Dhanmondi",
      requestedBy: "Ahmed Khan",
      requestDate: "2025-04-20",
      priority: "high",
      type: "pdf",
    },
    {
      id: 2,
      title: "Tax Clearance Certificate",
      propertyTitle: "Office Space in Motijheel",
      requestedBy: "Nasreen Akter",
      requestDate: "2025-04-18",
      priority: "medium",
      type: "pdf",
    },
    {
      id: 3,
      title: "Building Approval Documents",
      propertyTitle: "Family House in Uttara",
      requestedBy: "Kamal Hossain",
      requestDate: "2025-04-15",
      priority: "low",
      type: "image",
    },
  ]

  // Mock data for recent consultations
  const recentConsultations = [
    {
      id: 1,
      clientName: "Ahmed Khan",
      clientImage: "/agent.jpg?height=40&width=40",
      topic: "Property purchase legal advice",
      date: "2025-04-22",
      time: "60 min",
      notes: "Client is interested in purchasing an apartment and needs guidance on legal documentation.",
    },
    {
      id: 2,
      clientName: "Nasreen Akter",
      clientImage: "/w.jpg?height=40&width=40",
      topic: "Lease agreement clarifications",
      date: "2025-04-20",
      time: "45 min",
      notes: "Reviewed commercial lease terms and suggested modifications to protect client's interests.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Fatima!</h1>
          <p className="mb-4">
            You have {activeCases.length} active cases and {pendingDocuments.length} documents awaiting verification.
            Two cases have upcoming deadlines this week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <Plus className="mr-2 h-4 w-4" />
              New Case
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <FileText className="mr-2 h-4 w-4" />
              Verify Documents
            </Button>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Cases</p>
                <p className="text-3xl font-bold">{activeCases.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Scale className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Documents Pending</p>
                <p className="text-3xl font-bold">{pendingDocuments.length}</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Clients</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed Cases</p>
                <p className="text-3xl font-bold">{completedCases.length}</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cases section */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Legal Cases</CardTitle>
                <CardDescription>Track and manage your active legal cases</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Case
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="active">Active ({activeCases.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({completedCases.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                  {activeCases.map((legalCase) => (
                    <CaseCard key={legalCase.id} legalCase={legalCase} />
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {completedCases.map((legalCase) => (
                    <CaseCard key={legalCase.id} legalCase={legalCase} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Document Verification */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Document Verification Requests</CardTitle>
              <CardDescription>Documents awaiting your legal verification</CardDescription>
            </CardHeader>
            <CardContent>
              {pendingDocuments.length > 0 ? (
                <div className="space-y-4">
                  {pendingDocuments.map((document) => (
                    <div key={document.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {document.type === "pdf" ? (
                          <FileText className="h-6 w-6 text-red-500" />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-blue-500"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{document.title}</h4>
                          {document.priority === "high" && <Badge className="bg-red-500">High Priority</Badge>}
                          {document.priority === "medium" && <Badge className="bg-yellow-500">Medium Priority</Badge>}
                          {document.priority === "low" && <Badge className="bg-green-500">Low Priority</Badge>}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          For: <span className="font-medium">{document.propertyTitle}</span>
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <User className="h-3 w-3 mr-1" />
                          <span>Requested by {document.requestedBy}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(document.requestDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm">Verify</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No pending documents</h3>
                  <p className="text-gray-500">All documents have been verified</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Calendar / Schedule */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Client Meeting</h4>
                    <p className="text-xs text-gray-500">10:30 AM - 11:30 AM</p>
                    <p className="text-xs text-gray-700 mt-1">with Ahmed Khan (Property Purchase)</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Join
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Scale className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Document Review</h4>
                    <p className="text-xs text-gray-500">2:00 PM - 4:00 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Lease agreements for Office Space</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Building className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Property Visit</h4>
                    <p className="text-xs text-gray-500">5:00 PM - 6:00 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Family House in Uttara (Legal inspection)</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent consultations */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              {recentConsultations.length > 0 ? (
                <div className="space-y-4">
                  {recentConsultations.map((consultation) => (
                    <div key={consultation.id} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage
                            src={consultation.clientImage || "/placeholder.svg"}
                            alt={consultation.clientName}
                          />
                          <AvatarFallback>{consultation.clientName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{consultation.clientName}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(consultation.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>{consultation.time}</span>
                          </div>
                        </div>
                      </div>
                      <h5 className="text-sm font-medium mb-1">{consultation.topic}</h5>
                      <p className="text-sm text-gray-600">{consultation.notes}</p>
                      <div className="flex justify-end mt-3">
                        <Button size="sm" variant="outline">
                          View Notes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No recent consultations</h3>
                  <p className="text-gray-500">Your recent client consultations will appear here</p>
                </div>
              )}
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Users className="mr-2 h-4 w-4" />
                View All Consultations
              </Button>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Create New Document
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  <Scale className="mr-2 h-4 w-4" />
                  Start New Case
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  <Building className="mr-2 h-4 w-4" />
                  Property Verification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CaseCard({ legalCase }: { legalCase: any }) {
  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500"
    if (progress < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  const daysRemaining = () => {
    const deadline = new Date(legalCase.deadline)
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const days = daysRemaining()

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative h-20 w-28 rounded-md overflow-hidden flex-shrink-0">
          <img
            src={legalCase.propertyImage || "/placeholder.svg"}
            alt={legalCase.propertyTitle}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{legalCase.title}</h3>
            {legalCase.status === "active" ? (
              <Badge className="bg-blue-500">Active</Badge>
            ) : (
              <Badge className="bg-green-500">Completed</Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Property: <span className="font-medium">{legalCase.propertyTitle}</span>
          </p>
          <div className="flex items-center mt-2">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={legalCase.clientImage || "/placeholder.svg"} alt={legalCase.clientName} />
              <AvatarFallback>{legalCase.clientName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{legalCase.clientName}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between md:items-end md:w-48">
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between text-sm">
            <span>Progress:</span>
            <span>{legalCase.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${getProgressColor(legalCase.progress)}`}
              style={{ width: `${legalCase.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between w-full">
          <div className="text-sm">
            {legalCase.status === "active" ? (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                <span className={days < 5 ? "text-red-600 font-medium" : "text-gray-600"}>{days} days left</span>
              </div>
            ) : (
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-gray-600">Completed</span>
              </div>
            )}
          </div>
          <Button size="sm">View</Button>
        </div>
      </div>
    </div>
  )
}
