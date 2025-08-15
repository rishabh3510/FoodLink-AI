import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#3BB273] p-2 rounded-lg">
                <div className="h-6 w-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">FoodLink AI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI-powered platform matching surplus food to those in need. Together, we're fighting food waste and
              hunger.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/matching" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                  AI Matching
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-300 hover:text-[#3BB273] transition-colors">
                  Impact Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#3BB273]" />
                <span className="text-gray-300">rishabhkumar.co2@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#3BB273]" />
                <span className="text-gray-300">+919334883055</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#3BB273]" />
                <span className="text-gray-300">Knowledge Park 2, Greater Noida, UP, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 FoodLink AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-[#3BB273] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#3BB273] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#3BB273] text-sm transition-colors">
              Support
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Developed by <span className="text-[#3BB273] font-semibold">Binary Crew</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
