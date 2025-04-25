import Link from "next/link"
import { Home, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">Property Connect</span>
            </div>
            <p className="text-gray-600 mb-4">
              Find your perfect property with our easy-to-use platform. Browse listings, connect with owners, and make
              informed decisions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-600 hover:text-blue-600">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-600 hover:text-blue-600">
                  Add Property
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/?type=Apartment" className="text-gray-600 hover:text-blue-600">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/?type=House" className="text-gray-600 hover:text-blue-600">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/?type=Villa" className="text-gray-600 hover:text-blue-600">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/?type=Office" className="text-gray-600 hover:text-blue-600">
                  Office Spaces
                </Link>
              </li>
              <li>
                <Link href="/?type=Land" className="text-gray-600 hover:text-blue-600">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600">info@propertyconnect.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600">+880 1234 567890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Property Connect. All rights reserved.</p>
          <p className="text-sm mt-1">Institute of Information Technology, NSTU</p>
        </div>
      </div>
    </footer>
  )
}
