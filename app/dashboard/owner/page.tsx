"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  Users,
  Eye,
  DollarSign,
  PlusCircle,
  ArrowRight,
  Clock,
  Calendar,
  Milestone,
  Bell,
  CheckCircle,
  User,
  FileText,
  BarChart,
  PieChart,
} from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for owner's properties
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      type: "Apartment",
      price: "35,000 BDT/month",
      status: "active",
      verified: true,
      views: 145,
      inquiries: 12,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Office Space in Motijheel",
      location: "Motijheel, Dhaka",
      type: "Office",
      price: "75,000 BDT/month",
      status: "active",
      verified: true,
      views: 98,
      inquiries: 5,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Family House in Uttara",
      location: "Uttara, Dhaka",
      type: "House",
      price: "45,000 BDT/month",
      status: "pending",
      verified: false,
      views: 0,
      inquiries: 0,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 4,
      title: "Commercial Shop in Farmgate",
      location: "Farmgate, Dhaka",
      type: "Retail",
      price: "50,000 BDT/month",
      status: "inactive",
      verified: true,
      views: 76,
      inquiries: 3,
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  // Filter properties based on status
  const activeProperties = properties.filter((p) => p.status === "active")
  const pendingProperties = properties.filter((p) => p.status === "pending")
  const inactiveProperties = properties.filter((p) => p.status === "inactive")

  // Mock data for inquiries
  const inquiries = [
    {
      id: 1,
      propertyId: 1,
      propertyTitle: "Modern Apartment in Dhanmondi",
      userName: "Ahmed Khan",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-22",
      time: "15:30",
      message: "I'm interested in viewing this apartment. Is it available for rent from next month?",
      status: "new",
    },
    {
      id: 2,
      propertyId: 1,
      propertyTitle: "Modern Apartment in Dhanmondi",
      userName: "Fatima Rahman",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-21",
      time: "10:15",
      message: "Can you tell me if utilities are included in the rent? And is there parking available?",
      status: "replied",
    },
    {
      id: 3,
      propertyId: 2,
      propertyTitle: "Office Space in Motijheel",
      userName: "Kamal Hossain",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-20",
      time: "09:45",
      message:
        "We're looking for office space for our team of 15 people. Is this suitable and available for long-term lease?",
      status: "new",
    },
  ]

  // Mock data for verification requests
  const verificationRequests = [
    {
      id: 1,
      propertyId: 3,
      propertyTitle: "Family House in Uttara",
      status: "pending",
      date: "2025-04-21",
      requiredDocuments: ["Ownership Deed", "Tax Clearance", "Utility Bill"],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="mb-4">
            Manage your property listings and inquiries efficiently. You have {activeProperties.length} active
            properties and {inquiries.filter((i) => i.status === "new").length} new inquiries.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Property
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <Bell className="mr-2 h-4 w-4" />
              View Inquiries
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
                <p className="text-sm font-medium text-gray-500">Listed Properties</p>
                <p className="text-3xl font-bold">{properties.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Views</p>
                <p className="text-3xl font-bold">{properties.reduce((acc, curr) => acc + curr.views, 0)}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Inquiries</p>
                <p className="text-3xl font-bold">{inquiries.length}</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Revenue</p>
                <p className="text-3xl font-bold">35.5K</p>
                <p className="text-xs text-gray-500">BDT/month</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Properties section */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">My Properties</CardTitle>
                <CardDescription>Manage your property listings</CardDescription>
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Property
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="active">Active ({activeProperties.length})</TabsTrigger>
                  <TabsTrigger value="pending">Pending ({pendingProperties.length})</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive ({inactiveProperties.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                  {activeProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </TabsContent>

                <TabsContent value="pending" className="space-y-4">
                  {pendingProperties.length > 0 ? (
                    pendingProperties.map((property) => <PropertyCard key={property.id} property={property} />)
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-medium text-gray-700 mb-2">No pending properties</h3>
                      <p className="text-gray-500">Properties awaiting verification will appear here</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="inactive" className="space-y-4">
                  {inactiveProperties.length > 0 ? (
                    inactiveProperties.map((property) => <PropertyCard key={property.id} property={property} />)
                  ) : (
                    <div className="text-center py-8">
                      <Building className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-medium text-gray-700 mb-2">No inactive properties</h3>
                      <p className="text-gray-500">Properties you've deactivated will appear here</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Recent Inquiries */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Recent Inquiries</CardTitle>
              <CardDescription>Inquiries from potential renters and buyers</CardDescription>
            </CardHeader>
            <CardContent>
              {inquiries.length > 0 ? (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={inquiry.userImage || "/placeholder.svg"}
                          alt={inquiry.userName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{inquiry.userName}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                              {new Date(inquiry.date).toLocaleDateString()} at {inquiry.time}
                            </span>
                            {inquiry.status === "new" ? (
                              <Badge className="bg-blue-500">New</Badge>
                            ) : (
                              <Badge variant="outline">Replied</Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Re: <span className="font-medium">{inquiry.propertyTitle}</span>
                        </p>
                        <p className="text-sm mt-2">{inquiry.message}</p>
                        <div className="flex justify-end mt-3">
                          <Button size="sm">Reply</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No inquiries yet</h3>
                  <p className="text-gray-500">When someone inquires about your property, it will appear here</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Inquiries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Verification requests */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Verification Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              {verificationRequests.length > 0 ? (
                <div className="space-y-4">
                  {verificationRequests.map((request) => (
                    <div key={request.id} className="bg-white p-4 rounded-lg border border-blue-100">
                      <h4 className="font-medium">{request.propertyTitle}</h4>
                      <div className="flex items-center mt-1 mb-3">
                        <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">
                          Requested on {new Date(request.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h5 className="text-sm font-medium mb-2">Required Documents:</h5>
                      <ul className="space-y-1">
                        {request.requiredDocuments.map((doc, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <FileText className="h-4 w-4 text-blue-600 mr-2" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4">Upload Documents</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No verification requests</h3>
                  <p className="text-sm text-gray-500">
                    All your properties are verified or don't require verification
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming events */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Property Inspection</h4>
                    <p className="text-xs text-gray-500">Apr 28, 2025 • 2:30 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Family House in Uttara</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Tenant Meeting</h4>
                    <p className="text-xs text-gray-500">Apr 30, 2025 • 5:00 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Modern Apartment in Dhanmondi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Milestone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Lease Renewal</h4>
                    <p className="text-xs text-gray-500">May 5, 2025</p>
                    <p className="text-xs text-gray-700 mt-1">Office Space in Motijheel</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property insights */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Property Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Traffic by Property Type</h4>
                  </div>
                  <div className="relative h-40 w-full">
                    <PieChart className="absolute h-full w-full text-gray-200" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-sm text-gray-500">View detailed</span>
                      <span className="text-sm text-blue-600">analytics</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Top Performing Property</h4>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium">Modern Apartment in Dhanmondi</h5>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>145 views this month</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Engagement rate</span>
                        <span className="font-medium">8.3%</span>
                      </div>
                      <Progress value={83} className="h-1" />
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <BarChart className="mr-2 h-4 w-4" />
                  View All Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function PropertyCard({ property }: { property: any }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending Verification
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-700">
            Inactive
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="relative h-32 w-full md:w-48 rounded-md overflow-hidden flex-shrink-0">
        <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{property.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Building className="h-4 w-4 mr-1" />
              <span>{property.type}</span>
              <span className="mx-2">•</span>
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getStatusBadge(property.status)}
            {property.verified && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center text-blue-600 font-bold">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>{property.price}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div className="flex items-center">
            <Eye className="h-4 w-4 text-gray-400 mr-2" />
            <span>{property.views} Views</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <span>{property.inquiries} Inquiries</span>
          </div>
          <div className="flex justify-end col-span-2 md:col-span-1">
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
