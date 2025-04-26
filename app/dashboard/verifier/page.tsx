"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  Building,
  Camera,
  FileText,
  AlertTriangle,
  ArrowRight,
  Filter,
  Plus,
  User,
} from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function VerifierDashboard() {
  const [activeTab, setActiveTab] = useState("pending")

  // Mock data for verification tasks
  const verificationTasks = [
    {
      id: 1,
      propertyTitle: "Modern Apartment in Dhanmondi",
      propertyType: "Apartment",
      location: "Dhanmondi, Dhaka",
      owner: "Ahmed Khan",
      ownerImage: "/placeholder.svg?height=40&width=40",
      deadline: "2025-04-30",
      status: "pending",
      priority: "high",
      image: "/placeholder.svg?height=120&width=200",
      assignedDate: "2025-04-20",
    },
    {
      id: 2,
      propertyTitle: "Office Space in Motijheel",
      propertyType: "Office",
      location: "Motijheel, Dhaka",
      owner: "Nasreen Akter",
      ownerImage: "/placeholder.svg?height=40&width=40",
      deadline: "2025-05-05",
      status: "pending",
      priority: "medium",
      image: "/placeholder.svg?height=120&width=200",
      assignedDate: "2025-04-22",
    },
    {
      id: 3,
      propertyTitle: "Family House in Uttara",
      propertyType: "House",
      location: "Uttara, Dhaka",
      owner: "Kamal Hossain",
      ownerImage: "/placeholder.svg?height=40&width=40",
      deadline: "2025-05-10",
      status: "pending",
      priority: "low",
      image: "/placeholder.svg?height=120&width=200",
      assignedDate: "2025-04-23",
    },
    {
      id: 4,
      propertyTitle: "Luxury Villa in Gulshan",
      propertyType: "Villa",
      location: "Gulshan, Dhaka",
      owner: "Fatima Rahman",
      ownerImage: "/placeholder.svg?height=40&width=40",
      deadline: "2025-04-15",
      status: "completed",
      priority: "high",
      image: "/placeholder.svg?height=120&width=200",
      assignedDate: "2025-04-10",
      completedDate: "2025-04-14",
    },
    {
      id: 5,
      propertyTitle: "Studio Apartment in Banani",
      propertyType: "Apartment",
      location: "Banani, Dhaka",
      owner: "Rahim Chowdhury",
      ownerImage: "/placeholder.svg?height=40&width=40",
      deadline: "2025-04-18",
      status: "completed",
      priority: "medium",
      image: "/placeholder.svg?height=120&width=200",
      assignedDate: "2025-04-12",
      completedDate: "2025-04-17",
    },
  ]

  // Filter tasks based on status
  const pendingTasks = verificationTasks.filter((task) => task.status === "pending")
  const completedTasks = verificationTasks.filter((task) => task.status === "completed")

  // Mock data for upcoming site visits
  const upcomingVisits = [
    {
      id: 1,
      propertyTitle: "Modern Apartment in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      date: "2025-04-28",
      time: "10:30 AM",
      owner: "Ahmed Khan",
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      propertyTitle: "Office Space in Motijheel",
      location: "Motijheel, Dhaka",
      date: "2025-04-29",
      time: "2:00 PM",
      owner: "Nasreen Akter",
      image: "/placeholder.svg?height=80&width=120",
    },
  ]

  // Mock data for verification checklist
  const verificationChecklist = [
    { id: 1, title: "Property Ownership Documents", required: true },
    { id: 2, title: "Property Dimensions & Layout", required: true },
    { id: 3, title: "Building Condition Assessment", required: true },
    { id: 4, title: "Utility Connections Verification", required: true },
    { id: 5, title: "Neighborhood Assessment", required: false },
    { id: 6, title: "Photographic Documentation", required: true },
    { id: 7, title: "Legal Compliance Check", required: true },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Ahmed!</h1>
          <p className="mb-4">
            You have {pendingTasks.length} pending property verifications and {upcomingVisits.length} upcoming site
            visits scheduled for this week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <CheckCircle className="mr-2 h-4 w-4" />
              Start Verification
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Visit
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
                <p className="text-sm font-medium text-gray-500">Pending Verifications</p>
                <p className="text-3xl font-bold">{pendingTasks.length}</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed This Month</p>
                <p className="text-3xl font-bold">{completedTasks.length}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming Visits</p>
                <p className="text-3xl font-bold">{upcomingVisits.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Verification Rate</p>
                <p className="text-3xl font-bold">92%</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
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
                  className="h-6 w-6 text-purple-600"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Verification tasks section */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Property Verifications</CardTitle>
                <CardDescription>Manage your property verification tasks</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="pending">Pending ({pendingTasks.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4">
                  {pendingTasks.map((task) => (
                    <VerificationTaskCard key={task.id} task={task} />
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {completedTasks.map((task) => (
                    <VerificationTaskCard key={task.id} task={task} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Tasks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Upcoming site visits */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Upcoming Site Visits</CardTitle>
              <CardDescription>Your scheduled property inspections</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingVisits.length > 0 ? (
                <div className="space-y-4">
                  {upcomingVisits.map((visit) => (
                    <div key={visit.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="relative h-20 w-28 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={visit.image || "/placeholder.svg"}
                          alt={visit.propertyTitle}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{visit.propertyTitle}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{visit.location}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                            <span>{new Date(visit.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 text-blue-600 mr-1" />
                            <span>{visit.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm mt-1">
                          <User className="h-4 w-4 text-gray-500 mr-1" />
                          <span>Owner: {visit.owner}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No upcoming visits</h3>
                  <p className="text-gray-500 mb-4">Schedule a property visit to see it here</p>
                  <Button>Schedule a Visit</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Today's schedule */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Property Verification</h4>
                    <p className="text-xs text-gray-500">10:30 AM - 12:00 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Modern Apartment in Dhanmondi</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Camera className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Photo Documentation</h4>
                    <p className="text-xs text-gray-500">2:00 PM - 3:30 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Office Space in Motijheel</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Report Submission</h4>
                    <p className="text-xs text-gray-500">4:00 PM - 5:00 PM</p>
                    <p className="text-xs text-gray-700 mt-1">Weekly verification reports</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Schedule
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Verification checklist */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Verification Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {verificationChecklist.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-gray-300" />
                      <span className="text-sm">{item.title}</span>
                    </div>
                    {item.required && (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        Required
                      </Badge>
                    )}
                  </div>
                ))}
                <Button className="w-full mt-2">Download Checklist</Button>
              </div>
            </CardContent>
          </Card>

          {/* Equipment checklist */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Equipment Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Digital Camera</span>
                  </div>
                  <Badge className="bg-green-500">Ready</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Measuring Tape</span>
                  </div>
                  <Badge className="bg-green-500">Ready</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Verification Forms</span>
                  </div>
                  <Badge className="bg-green-500">Ready</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Moisture Meter</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Low Battery
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Tablet with App</span>
                  </div>
                  <Badge className="bg-green-500">Ready</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function VerificationTaskCard({ task }: { task: any }) {
  const daysRemaining = () => {
    const deadline = new Date(task.deadline)
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const days = daysRemaining()

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="relative h-32 w-full md:w-48 rounded-md overflow-hidden flex-shrink-0">
        <Image src={task.image || "/placeholder.svg"} alt={task.propertyTitle} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          {task.priority === "high" && <Badge className="bg-red-500">High Priority</Badge>}
          {task.priority === "medium" && <Badge className="bg-yellow-500">Medium</Badge>}
          {task.priority === "low" && <Badge className="bg-green-500">Low</Badge>}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{task.propertyTitle}</h3>
          {task.status === "pending" ? (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Pending
            </Badge>
          ) : (
            <Badge className="bg-green-500">Completed</Badge>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Building className="h-4 w-4 mr-1" />
          <span>{task.propertyType}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 mr-1" />
          <span>{task.location}</span>
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={task.ownerImage || "/placeholder.svg"} alt={task.owner} />
            <AvatarFallback>{task.owner.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">Owner: {task.owner}</span>
        </div>
        <div className="flex items-center text-sm mt-2">
          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
          <span>
            {task.status === "pending"
              ? `Assigned: ${new Date(task.assignedDate).toLocaleDateString()}`
              : `Completed: ${new Date(task.completedDate).toLocaleDateString()}`}
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          {task.status === "pending" ? (
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-500 mr-1" />
              <span className={days < 3 ? "text-red-600 font-medium text-sm" : "text-gray-600 text-sm"}>
                {days} days remaining
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-gray-600 text-sm">Verification complete</span>
            </div>
          )}
          <div className="flex gap-2">
            {task.status === "pending" ? (
              <>
                <Button size="sm" variant="outline">
                  Reschedule
                </Button>
                <Button size="sm">Start Verification</Button>
              </>
            ) : (
              <Button size="sm">View Report</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
