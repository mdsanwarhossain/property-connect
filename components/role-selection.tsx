"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, User, Users, Building, Scale, Shield } from "lucide-react"

interface RoleSelectionProps {
  selectedRole: string
  onSelectRole: (role: string) => void
}

interface RoleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  isSelected: boolean
  onClick: () => void
}

export default function RoleSelection({ selectedRole, onSelectRole }: RoleSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium mb-2">Choose your role in Property Connect</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RoleCard
          title="Property Owner"
          description="List and manage your properties, connect with potential buyers and renters."
          icon={<Home className="h-6 w-6 text-blue-600" />}
          isSelected={selectedRole === "owner"}
          onClick={() => onSelectRole("owner")}
        />

        <RoleCard
          title="Buyer / Renter"
          description="Browse properties, contact owners, and find your dream property."
          icon={<User className="h-6 w-6 text-green-600" />}
          isSelected={selectedRole === "buyer"}
          onClick={() => onSelectRole("buyer")}
        />

        <RoleCard
          title="Agent / Broker"
          description="Represent buyers and sellers, facilitate transactions, and earn commission."
          icon={<Users className="h-6 w-6 text-purple-600" />}
          isSelected={selectedRole === "agent"}
          onClick={() => onSelectRole("agent")}
        />

        <RoleCard
          title="Property Developer"
          description="Showcase your development projects and connect with potential buyers."
          icon={<Building className="h-6 w-6 text-orange-600" />}
          isSelected={selectedRole === "developer"}
          onClick={() => onSelectRole("developer")}
        />

        <RoleCard
          title="Legal Advisor"
          description="Provide legal services for property transactions and documentation."
          icon={<Scale className="h-6 w-6 text-red-600" />}
          isSelected={selectedRole === "legal"}
          onClick={() => onSelectRole("legal")}
        />

        <RoleCard
          title="Property Verifier"
          description="Physically verify properties and validate listed information."
          icon={<Shield className="h-6 w-6 text-yellow-600" />}
          isSelected={selectedRole === "verifier"}
          onClick={() => onSelectRole("verifier")}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">You can change your role later in account settings if needed.</p>
    </div>
  )
}

function RoleCard({ title, description, icon, isSelected, onClick }: RoleCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? "ring-2 ring-blue-600 ring-offset-2" : ""
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-start gap-3">
        <div className="p-2 rounded-full bg-gray-100">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            {isSelected && <CheckCircle className="h-5 w-5 text-blue-600" />}
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
