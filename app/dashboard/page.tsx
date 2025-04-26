import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { Building, Home, Users, Scale, CheckSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function UniversalDashboard() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Property Connect</h1>
        <p className="text-gray-500">Select your role to access your personalized dashboard</p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buyer/Renter Role Card */}
          <RoleCard
            title="Buyer/Renter"
            description="Browse properties, save favorites, and manage your applications"
            icon={Home}
            href="/dashboard/buyer"
            color="bg-blue-50"
            iconColor="text-blue-600"
          />

          {/* Property Owner Role Card */}
          <RoleCard
            title="Property Owner"
            description="Manage your properties, view inquiries, and handle contracts"
            icon={Building}
            href="/dashboard/owner"
            color="bg-green-50"
            iconColor="text-green-600"
          />

          {/* Agent/Broker Role Card */}
          <RoleCard
            title="Agent/Broker"
            description="Manage clients, properties, and track transactions"
            icon={Users}
            href="/dashboard/agent"
            color="bg-purple-50"
            iconColor="text-purple-600"
          />

          {/* Property Developer Role Card */}
          <RoleCard
            title="Property Developer"
            description="Showcase your projects and manage development inquiries"
            icon={Building}
            href="/dashboard/developer"
            color="bg-amber-50"
            iconColor="text-amber-600"
          />

          {/* Legal Advisor Role Card */}
          <RoleCard
            title="Legal Advisor"
            description="Manage cases, documents, and client interactions"
            icon={Scale}
            href="/dashboard/legal"
            color="bg-red-50"
            iconColor="text-red-600"
          />

          {/* Property Verifier Role Card */}
          <RoleCard
            title="Property Verifier"
            description="Verify properties, submit reports, and maintain standards"
            icon={CheckSquare}
            href="/dashboard/verifier"
            color="bg-teal-50"
            iconColor="text-teal-600"
          />
        </div>
      </Suspense>

      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">Not sure which role is right for you?</p>
        <Button asChild variant="outline">
          <Link href="/help/roles">Learn more about roles</Link>
        </Button>
      </div>
    </div>
  )
}

interface RoleCardProps {
  title: string
  description: string
  icon: React.ElementType
  href: string
  color: string
  iconColor: string
}

function RoleCard({ title, description, icon: Icon, href, color, iconColor }: RoleCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className={`${color} pb-2`}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm min-h-[60px]">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button asChild variant="default" className="w-full">
          <Link href={href}>Access Dashboard</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
