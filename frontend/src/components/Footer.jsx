import Link from "next/link"
import { Car, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-6">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">VIT Travel Buddy</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting VIT students for safe, affordable, and convenient shared travel experiences since 2025.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Find Rides
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-gray-400 hover:text-white transition-colors">
                  Post a Ride
                </Link>
              </li>
              <li>
                <Link href="/my-plans" className="text-gray-400 hover:text-white transition-colors">
                  My Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">support@vittravelbuddy.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white">+91 98765 43210</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-400 mb-2">Emergency Support</div>
              <div className="text-white font-medium">24/7 Available</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} VIT Travel Buddy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for VIT Students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
