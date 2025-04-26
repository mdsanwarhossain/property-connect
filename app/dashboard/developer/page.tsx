"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  Users,
  DollarSign,
  FileText,
  Calendar,
  MapPin,
  ArrowRight,
  Plus,
  Filter,
  BarChart,
  Home,
  Layers,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for development projects
  const projects = [
    {
      id: 1,
      title: "Green Valley Residences",
      location: "Purbachal, Dhaka",
      type: "Residential",
      units: 120,
      totalValue: "450M BDT",
      status: "active",
      progress: 65,
      startDate: "2024-08-15",
      completionDate: "2026-12-30",
      image: "/placeholder.svg?height=120&width=200",
      soldUnits: 78,
      availableUnits: 42,
    },
    {
      id: 2,
      title: "Metro Business Tower",
      location: "Motijheel, Dhaka",
      type: "Commercial",
      units: 85,
      totalValue: "380M BDT",
      status: "active",
      progress: 40,
      startDate: "2024-11-10",
      completionDate: "2026-10-15",
      image: "/placeholder.svg?height=120&width=200",
      soldUnits: 35,
      availableUnits: 50,
    },
    {
      id: 3,
      title: "Riverside Apartments",
      location: "Keraniganj, Dhaka",
      type: "Residential",
      units: 60,
      totalValue: "220M BDT",
      status: "planning",
      progress: 10,
      startDate: "2025-06-01",
      completionDate: "2027-05-30",
      image: "/placeholder.svg?height=120&width=200",
      soldUnits: 15,
      availableUnits: 45,
    },
    {
      id: 4,
      title: "Sunset Heights",
      location: "Uttara, Dhaka",
      type: "Residential",
      units: 45,
      totalValue: "180M BDT",
      status: "completed",
      progress: 100,
      startDate: "2023-03-15",
      completionDate: "2025-02-28",
      image: "/placeholder.svg?height=120&width=200",
      soldUnits: 42,
      availableUnits: 3,
    },
  ]

  // Filter projects based on status
  const activeProjects = projects.filter((p) => p.status === "active")
  const planningProjects = projects.filter((p) => p.status === "planning")
  const completedProjects = projects.filter((p) => p.status === "completed")

  // Mock data for inquiries
  const inquiries = [
    {
      id: 1,
      projectId: 1,
      projectTitle: "Green Valley Residences",
      userName: "Ahmed Khan",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-22",
      message: "I'm interested in a 3-bedroom apartment in your Green Valley project. Can you provide more details?",
      status: "new",
    },
    {
      id: 2,
      projectId: 2,
      projectTitle: "Metro Business Tower",
      userName: "Nasreen Akter",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-20",
      message: "Looking for office space around 2000 sq ft. What are the available options and pricing?",
      status: "replied",
    },
    {
      id: 3,
      projectId: 1,
      projectTitle: "Green Valley Residences",
      userName: "Kamal Hossain",
      userImage: "/placeholder.svg?height=40&width=40",
      date: "2025-04-18",
      message: "What are the payment plans available for your Green Valley project?",
      status: "new",
    },
  ]

  // Mock data for construction updates
  const constructionUpdates = [
    {
      id: 1,
      projectId: 1,
      projectTitle: "Green Valley Residences",
      date: "2025-04-20",
      update: "Foundation work completed for Block A and B. Starting structural work next week.",
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      projectId: 2,
      projectTitle: "Metro Business Tower",
      date: "2025-04-18",
      update: "Completed 4th floor slab casting. Electrical and plumbing work in progress for lower floors.",
      image: "/placeholder.svg?height=80&width=120",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Rahim!</h1>
          <p className="mb-4">
            You have {activeProjects.length} active projects and {inquiries.filter((i) => i.status === "new").length}{" "}
            new inquiries. Your projects are progressing well with an average completion rate of 65%.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <Building className="mr-2 h-4 w-4" />
              View Construction Updates
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
                <p className="text-sm font-medium text-gray-500">Total Projects</p>
                <p className="text-3xl font-bold">{projects.length}</p>
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
                <p className="text-sm font-medium text-gray-500">Total Units</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, curr) => acc + curr.units, 0)}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Home className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Units Sold</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, curr) => acc + curr.soldUnits, 0)}</p>
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
                <p className="text-sm font-medium text-gray-500">Total Value</p>
                <p className="text-3xl font-bold">1.23B</p>
                <p className="text-xs text-gray-500">BDT</p>
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
        {/* Projects section */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">My Projects</CardTitle>
                <CardDescription>Manage your development projects</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="active">Active ({activeProjects.length})</TabsTrigger>
                  <TabsTrigger value="planning">Planning ({planningProjects.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                  {activeProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </TabsContent>

                <TabsContent value="planning" className="space-y-4">
                  {planningProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {completedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Recent inquiries */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Recent Inquiries</CardTitle>
              <CardDescription>Inquiries from potential buyers</CardDescription>
            </CardHeader>
            <CardContent>
              {inquiries.length > 0 ? (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex gap-4 p-4 border rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={inquiry.userImage || "/placeholder.svg"} alt={inquiry.userName} />
                        <AvatarFallback>{inquiry.userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{inquiry.userName}</h4>
                          {inquiry.status === "new" ? (
                            <Badge className="bg-blue-500">New</Badge>
                          ) : (
                            <Badge variant="outline">Replied</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Re: <span className="font-medium">{inquiry.projectTitle}</span>
                        </p>
                        <p className="text-sm mt-2">{inquiry.message}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-500">{new Date(inquiry.date).toLocaleDateString()}</span>
                          <Button size="sm">Reply</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No inquiries yet</h3>
                  <p className="text-gray-500">When someone inquires about your projects, it will appear here</p>
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
          {/* Construction updates */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Construction Updates</CardTitle>
            </CardHeader>
            <CardContent>
              {constructionUpdates.length > 0 ? (
                <div className="space-y-4">
                  {constructionUpdates.map((update) => (
                    <div key={update.id} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={update.image || "/placeholder.svg"}
                            alt={update.projectTitle}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{update.projectTitle}</h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(update.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{update.update}</p>
                      <div className="flex justify-end mt-3">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Updates
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Building className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">No updates yet</h3>
                  <p className="text-gray-500">Construction updates will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sales overview */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Green Valley Residences</span>
                    <span className="font-medium">65% Sold</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Metro Business Tower</span>
                    <span className="font-medium">41% Sold</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Riverside Apartments</span>
                    <span className="font-medium">25% Sold</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Sunset Heights</span>
                    <span className="font-medium">93% Sold</span>
                  </div>
                  <Progress value={93} className="h-2" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Sales Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming milestones */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Layers className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Green Valley - Block A Completion</h4>
                    <p className="text-xs text-gray-500">May 15, 2025</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-blue-600">75% complete</span>
                      <span className="mx-2 text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">18 days left</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Metro Tower - Permit Approval</h4>
                    <p className="text-xs text-gray-500">May 5, 2025</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-purple-600">Pending approval</span>
                      <span className="mx-2 text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">8 days left</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Riverside - Sales Launch</h4>
                    <p className="text-xs text-gray-500">May 20, 2025</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-600">Preparations ongoing</span>
                      <span className="mx-2 text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">23 days left</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Project Timeline
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>
      case "planning":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Planning
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
            Completed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="relative h-32 w-full md:w-48 rounded-md overflow-hidden flex-shrink-0">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{project.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Building className="h-4 w-4 mr-1" />
              <span>{project.type}</span>
              <span className="mx-2">•</span>
              <MapPin className="h-4 w-4 mr-1" />
              <span>{project.location}</span>
            </div>
          </div>
          <div>{getStatusBadge(project.status)}</div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Home className="h-4 w-4 text-gray-400 mr-2" />
            <span>{project.units} Units</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
            <span>{project.totalValue}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <span>{project.soldUnits} Sold</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <span>Completion: {new Date(project.completionDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Progress:</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="flex justify-end mt-3">
          <Button size="sm">Manage Project</Button>
        </div>
      </div>
    </div>
  )
}
