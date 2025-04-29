import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Leaf className="h-6 w-6 text-green-600" />
              <span>AgriMart</span>
            </Link>
            <p className="text-gray-500 max-w-xs">
              Connecting farmers and buyers directly for fresher produce and fairer prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-green-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">For Users</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register?type=farmer" className="text-gray-500 hover:text-green-600">
                  Farmer Registration
                </Link>
              </li>
              <li>
                <Link href="/register?type=buyer" className="text-gray-500 hover:text-green-600">
                  Buyer Registration
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-500 hover:text-green-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <Mail className="h-5 w-5 text-green-600" />
                <span>support@agrimart.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <Phone className="h-5 w-5 text-green-600" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgriMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
