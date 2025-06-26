import Link from "next/link";
import { Car, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">TripSync</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              TripSync helps students and travelers connect, find rides, and journey together with ease.
              Save costs, stay safe, and share your route with like-minded people — travel made better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white transition" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
                <Mail className="w-5 h-5 text-gray-300 hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Find Rides
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-white transition-colors">
                  Post a Ride
                </Link>
              </li>
              <li>
                <Link href="/my-plans" className="hover:text-white transition-colors">
                  My Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Community / Note */}
          <div>
            <h3 className="text-lg font-semibold mb-5">For the Community</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We're constantly improving based on your feedback. Got suggestions or facing issues? We’d love to hear from you.
            </p>
            <p className="text-gray-400 text-sm">
              Built for everyone. 🚀
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TripSync. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>Made with ❤️ for students & travelers</span>
            <a
              href="https://www.linkedin.com/in/shatadru-bhattacharya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
