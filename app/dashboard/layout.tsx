"use client"

import { type ReactNode, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Home,
  User,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  Building,
  CheckSquare,
  Users,
  Scale,
  type LucideIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
  active?: boolean
  badge?: string | number
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const currentRole = pathname.split("/")[2] // Extracts role from URL pattern: /dashboard/[role]

  // Get navigation items based on role
  const navItems = getNavItemsByRole(currentRole)

  const roleName = getRoleName(currentRole)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">Property Connect</span>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User info */}
          <div className="border-b p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">{roleName}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <SidebarItem
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    active={pathname === item.href}
                    badge={item.badge}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="border-t p-4">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/auth/login">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navigation bar */}
        <header className="bg-white border-b px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold ml-2">{roleName} Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute top-0 right-0 h-4 w-4 p-0 flex items-center justify-center">3</Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, href, active, badge }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
        active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <Icon className={`mr-3 h-5 w-5 ${active ? "text-blue-600" : "text-gray-500"}`} />
        <span>{label}</span>
      </div>
      {badge && (
        <Badge variant={active ? "default" : "secondary"} className="ml-auto">
          {badge}
        </Badge>
      )}
    </Link>
  )
}

function getNavItemsByRole(role: string): { icon: LucideIcon; label: string; href: string; badge?: string | number }[] {
  const baseUrl = `/dashboard/${role}`

  // Common navigation items for all roles
  const commonItems = [
    { icon: LayoutDashboard, label: "Overview", href: baseUrl },
    { icon: User, label: "Profile", href: `${baseUrl}/profile` },
    { icon: MessageSquare, label: "Messages", href: `${baseUrl}/messages`, badge: 5 },
    { icon: Bell, label: "Notifications", href: `${baseUrl}/notifications`, badge: 3 },
    { icon: Settings, label: "Settings", href: `${baseUrl}/settings` },
  ]

  // Role-specific navigation items
  switch (role) {
    case "owner":
      return [
        ...commonItems,
        { icon: Building, label: "My Properties", href: `${baseUrl}/properties` },
        { icon: Users, label: "Inquiries", href: `${baseUrl}/inquiries`, badge: 2 },
        { icon: FileText, label: "Contracts", href: `${baseUrl}/contracts` },
      ]
    case "buyer":
      return [
        ...commonItems,
        { icon: Home, label: "Browse Properties", href: `${baseUrl}/browse` },
        { icon: CheckSquare, label: "Saved Properties", href: `${baseUrl}/saved` },
        { icon: FileText, label: "Applications", href: `${baseUrl}/applications` },
      ]
    case "agent":
      return [
        ...commonItems,
        { icon: Users, label: "My Clients", href: `${baseUrl}/clients` },
        { icon: Building, label: "Properties", href: `${baseUrl}/properties` },
        { icon: FileText, label: "Transactions", href: `${baseUrl}/transactions` },
      ]
    case "developer":
      return [
        ...commonItems,
        { icon: Building, label: "My Projects", href: `${baseUrl}/projects` },
        { icon: Users, label: "Inquiries", href: `${baseUrl}/inquiries`, badge: 2 },
        { icon: FileText, label: "Documents", href: `${baseUrl}/documents` },
      ]
    case "legal":
      return [
        ...commonItems,
        { icon: Scale, label: "Cases", href: `${baseUrl}/cases`, badge: 7 },
        { icon: FileText, label: "Documents", href: `${baseUrl}/documents` },
        { icon: Users, label: "Clients", href: `${baseUrl}/clients` },
      ]
    case "verifier":
      return [
        ...commonItems,
        { icon: CheckSquare, label: "Pending Verifications", href: `${baseUrl}/pending`, badge: 12 },
        { icon: Building, label: "Verified Properties", href: `${baseUrl}/verified` },
        { icon: FileText, label: "Reports", href: `${baseUrl}/reports` },
      ]
    default:
      return commonItems
  }
}

function getRoleName(role: string): string {
  switch (role) {
    case "owner":
      return "Property Owner"
    case "buyer":
      return "Buyer/Renter"
    case "agent":
      return "Agent/Broker"
    case "developer":
      return "Property Developer"
    case "legal":
      return "Legal Advisor"
    case "verifier":
      return "Property Verifier"
    default:
      return "User"
  }
}
