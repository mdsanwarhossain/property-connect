"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Building,
  DollarSign,
  FileText,
  Calendar,
  Clock,
  User,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  BarChart,
  ArrowRight,
  Plus,
  Filter,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for clients
  const clients = [
    {
      id: 1,
      name: "Ahmed Khan",
      image: "/placeholder.svg?height=40&width=40",
      type: "Buyer",
      status: "active",
      phone: "+880 1712 345678",
      email: "ahmed.khan@example.com",
      propertyPreference: "Apartment in Dhanmondi",
      budget: "30,000 - 45,000 BDT/month",
      lastContact: "2025-04-22",
    },
    {
      id: 2,
      name: "Nasreen Akter",
      image: "/placeholder.svg?height=40&width=40",
      type: "Seller",
      status: "active",
      phone: "+880 1812 345678",
      email: "nasreen.akter@example.com",
      propertyPreference: "Office Space in Motijheel",
      budget: "70,000 - 90,000 BDT/month",
      lastContact: "2025-04-20",
    },
    {
      id: 3,
      name: "Kamal Hossain",
      image: "/placeholder.svg?height=40&width=40",
      type: "Buyer",
      status: "active",
      phone: "+880 1912 345678",
      email: "kamal.hossain@example.com",
      propertyPreference: "Family House in Uttara",
      budget: "40,000 - 60,000 BDT/month",
      lastContact: "2025-04-18",
    },
    {
      id: 4,
      name: "Fatima Rahman",
      image: "/placeholder.svg?height=40&width=40",
      type: "Seller",
      status: "inactive",
      phone: "+880 1612 345678",
      email: "fatima.rahman@example.com",
      propertyPreference: "Commercial Space in Farmgate",
      budget: "50,000 - 70,000 BDT/month",
      lastContact: "2025-04-10",
    },
  ]

  // Filter clients based on status
  const activeClients = clients.filter((client) => client.status === "active")
  const inactiveClients = clients.filter((client) => client.status === "inactive")

  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      type: "Apartment",
      price: "35,000 BDT/month",
      status: "available",
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
      status: "available",
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
  ]

  // Mock data for transactions
  const transactions = [
    {
      id: 1,
      propertyTitle: "Modern Apartment in Dhanmondi",
      propertyImage: "/placeholder.svg?height=80&width=120",
      buyer: "Ahmed Khan",
      seller: "Nasreen Akter",
      type: "Rental",
      value: "35,000 BDT/month",
      status: "in progress",
      stage: "Document Verification",
      progress: 60,
      date: "2025-04-15",
    },
    {
      id: 2,
      propertyTitle: "Office Space in Motijheel",
      propertyImage: "/placeholder.svg?height=80&width=120",
      buyer: "Kamal Hossain",
      seller: "Fatima Rahman",
      type: "Sale",
      value: "12,500,000 BDT",
      status: "completed",
      stage: "Completed",
      progress: 100,
      date: "2025-04-10",
    },
  ]

  // Mock data for upcoming appointments
  const appointments = [
    {
      id: 1,
      title: "Property Showing",
      client: "Ahmed Khan",
      clientImage: "/placeholder.svg?height=40&width=40",
      property: "Modern Apartment in Dhanmondi",
      date: "2025-04-28",
      time: "10:30 AM",
    },
    {
      id: 2,
      title: "Contract Signing",
      client: "Nasreen Akter",
      clientImage: "/placeholder.svg?height=40&width=40",
      property: "Office Space in Motijheel",
      date: "2025-04-29",
      time: "2:00 PM",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Rahul!</h1>
          <p className="mb-4">
            You have {activeClients.length} active clients and{" "}
            {transactions.filter((t) => t.status === "in progress").length} ongoing transactions. {appointments.length}{" "}
            appointments are scheduled for this week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <Plus className="mr-2 h-4 w-4" />
              Add New Client
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <Building className="mr-2 h-4 w-4" />
              List New Property
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
                <p className="text-sm font-medium text-gray-500">Active Clients</p>
                <p className="text-3xl font-bold">{activeClients.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Listed Properties</p>
                <p className="text-3xl font-bold">{properties.length}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Building className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Transactions</p>
                <p className="text-3xl font-bold">{transactions.filter((t) => t.status === "in progress").length}</p>
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
                <p className="text-sm font-medium text-gray-500">Monthly Commission</p>
                <p className="text-3xl font-bold">45.2K</p>
                <p className="text-xs text-green-600">↑ 12% from last month</p>
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
        {/* Clients section */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">My Clients</CardTitle>
                <CardDescription>Manage your client relationships</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Client
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="active">Active ({activeClients.length})</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive ({inactiveClients.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                  {activeClients.map((client) => (
                    <ClientCard key={client.id} client={client} />
                  ))}
                </TabsContent>

                <TabsContent value="inactive" className="space-y-4">
                  {inactiveClients.map((client) => (
                    <ClientCard key={client.id} client={client} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Clients
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Transactions */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Recent Transactions</CardTitle>
              <CardDescription>Track your property transactions</CardDescription>
            </CardHeader>
            <CardContent>
              {transactions.length > 0 ? (
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative h-20 w-28 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={transaction.propertyImage || "/placeholder.svg"}
                          alt={transaction.propertyTitle}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{transaction.propertyTitle}</h4>
                          {transaction.status === "in progress" ? (
                            <Badge className="bg-yellow-500">In Progress</Badge>
                          ) : (
                            <Badge className="bg-green-500">Completed</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <span className="font-medium">{transaction.type}</span>
                          <span className="mx-2">•</span>
                          <span>{transaction.value}</span>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <User className="h-4 w-4 text-gray-500 mr-1" />
                          <span>
                            {transaction.buyer} → {transaction.seller}
                          </span>
                        </div>
                        {transaction.status === "in progress" && (
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>{transaction.stage}</span>
                              <span>{transaction.progress}%</span>
                            </div>
                            <Progress value={transaction.progress} className="h-1" />
                          </div>
                        )}
                        <div className="flex justify-end mt-2">
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No transactions yet</h3>
                  <p className="text-gray-500">Your property transactions will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Upcoming appointments */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{appointment.title}</h4>
                      <p className="text-xs text-gray-500">
                        {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                      </p>
                      <div className="flex items-center mt-1">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src={appointment.clientImage || "/placeholder.svg"} alt={appointment.client} />
                          <AvatarFallback>{appointment.client.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-gray-700">{appointment.client}</p>
                      </div>
                      <p className="text-xs text-gray-700 mt-1">{appointment.property}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Listed properties */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Listed Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {properties.map((property) => (
                  <div key={property.id} className="p-3 border rounded-lg">
                    <div className="relative h-32 w-full rounded-md overflow-hidden mb-3">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      {property.verified && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-blue-500">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium text-sm">{property.title}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-bold mt-1 text-sm">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{property.price}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{property.inquiries} inquiries</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Property
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance metrics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Client Conversion Rate</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Property Closing Rate</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Client Satisfaction</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Full Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ClientCard({ client }: { client: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="flex items-center gap-4 flex-1">
        <Avatar className="h-12 w-12">
          <AvatarImage src={client.image || "/placeholder.svg"} alt={client.name} />
          <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{client.name}</h3>
            <Badge className={client.type === "Buyer" ? "bg-blue-500" : "bg-green-500"}>{client.type}</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 mt-2">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-3 w-3 mr-1" />
              <span>{client.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-3 w-3 mr-1" />
              <span>{client.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 md:col-span-2">
              <Building className="h-3 w-3 mr-1" />
              <span>{client.propertyPreference}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 md:col-span-2">
              <DollarSign className="h-3 w-3 mr-1" />
              <span>Budget: {client.budget}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between md:items-end md:w-48">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>Last contact: {new Date(client.lastContact).toLocaleDateString()}</span>
        </div>
        <div className="flex gap-2 mt-3">
          <Button size="sm" variant="outline">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </Button>
          <Button size="sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}
