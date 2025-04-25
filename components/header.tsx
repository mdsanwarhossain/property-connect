import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Plus, User } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">Property Connect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="/properties" className="text-gray-600 hover:text-blue-600">
            Properties
          </Link>
          <Link href="/admin" className="text-gray-600 hover:text-blue-600">
            Admin
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/admin">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
