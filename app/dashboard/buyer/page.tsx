"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, CheckSquare, Clock, Calendar, ArrowRight, Search, Heart, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { usePropertyContext } from "@/lib/store"
import PropertyCard from "@/components/property-card"

export default function BuyerDashboard() {
  const { properties } = usePropertyContext()
  const [activeTab, setActiveTab] = useState("recent")
  const [savedProperties, setSavedProperties] = useState<number[]>([1, 3]) // Mock saved properties IDs
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([2, 4, 5]) // Mock recently viewed properties IDs

  // Filter properties based on saved and recently viewed
  const savedPropertyList = properties.filter((property) => savedProperties.includes(property.id))
  const recentlyViewedList = properties.filter((property) => recentlyViewed.includes(property.id))

  // Mock values for profile completion
  const profileCompletion = 65
  const missingItems = ["Verify phone number", "Upload ID proof", "Set property preferences"]

  // Mock upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      propertyName: "Modern Apartment in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      date: "2025-04-29",
      time: "10:30 AM",
      status: "confirmed",
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      propertyName: "Family House in Uttara",
      location: "Uttara, Dhaka",
      date: "2025-05-02",
      time: "03:00 PM",
      status: "pending",
      image: "/placeholder.svg?height=80&width=120",
    },
  ]

  // Mock search history
  const searchHistory = [
    { id: 1, query: "Apartments in Dhanmondi", date: "2025-04-20" },
    { id: 2, query: "2 bedroom flat in Gulshan", date: "2025-04-18" },
    { id: 3, query: "Office space in Motijheel", date: "2025-04-15" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="mb-4">
            Continue your property search journey. You have {savedProperties.length} saved properties and{" "}
            {upcomingAppointments.length} upcoming property visits.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              <Search className="mr-2 h-4 w-4" />
              Browse Properties
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-2 space-y-6">
          {/* Property browsing section */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Your Property Journey</CardTitle>
              <CardDescription>Track properties you've saved and recently viewed</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="saved">
                    <Heart className="mr-2 h-4 w-4" />
                    Saved Properties
                  </TabsTrigger>
                  <TabsTrigger value="recent">
                    <Eye className="mr-2 h-4 w-4" />
                    Recently Viewed
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="saved" className="space-y-4">
                  {savedPropertyList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {savedPropertyList.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-medium text-gray-700 mb-2">No saved properties yet</h3>
                      <p className="text-gray-500 mb-4">Start saving properties you like for easy access later</p>
                      <Button asChild>
                        <Link href="/properties">Browse Properties</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="recent" className="space-y-4">
                  {recentlyViewedList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recentlyViewedList.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Eye className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-medium text-gray-700 mb-2">No recently viewed properties</h3>
                      <p className="text-gray-500 mb-4">Properties you view will appear here</p>
                      <Button asChild>
                        <Link href="/properties">Start Browsing</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Upcoming appointments */}
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Upcoming Property Visits</CardTitle>
                <CardDescription>Your scheduled property viewings</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Schedule New
              </Button>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="relative h-20 w-28 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={appointment.image || "/placeholder.svg"}
                          alt={appointment.propertyName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{appointment.propertyName}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{appointment.location}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 text-blue-600 mr-1" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {appointment.status === "confirmed" ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
                        )}
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
          {/* Profile completion card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Your profile is {profileCompletion}% complete</span>
                    <span className="text-sm font-medium">{profileCompletion}%</span>
                  </div>
                  <Progress value={profileCompletion} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Complete these items:</h4>
                  <ul className="space-y-1">
                    {missingItems.map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckSquare className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  Complete Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search history card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {searchHistory.map((search) => (
                  <div key={search.id} className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Search className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{search.query}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <Button variant="outline" size="sm" className="w-full mt-2">
                  <Search className="mr-2 h-4 w-4" />
                  New Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property stats card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Property Market Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Available Properties</span>
                  <p className="text-2xl font-bold">{properties.length}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Verified Properties</span>
                  <p className="text-2xl font-bold">{properties.filter((p) => p.verified).length}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">Average Price</span>
                  <p className="text-2xl font-bold">43.5K</p>
                  <span className="text-xs text-gray-500">BDT/month</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-500">New This Week</span>
                  <p className="text-2xl font-bold">24</p>
                  <span className="text-xs text-green-600">↑ 12%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
