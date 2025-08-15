import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, Truck } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-white">
        {/* Background Icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-[#3BB273]">
            <Utensils size={60} />
          </div>
          <div className="absolute top-40 right-20 text-[#3BB273]">
            <Truck size={50} />
          </div>
          <div className="absolute bottom-40 left-20 text-[#3BB273]">
            <Utensils size={40} />
          </div>
          <div className="absolute bottom-20 right-10 text-[#3BB273]">
            <Truck size={70} />
          </div>
          <div className="absolute top-60 left-1/2 text-[#3BB273]">
            <Utensils size={35} />
          </div>
          <div className="absolute top-32 left-1/3 text-[#3BB273]">
            <Truck size={45} />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1B1B1B] mb-6 leading-tight">
              Turn Food Waste into <span className="text-[#3BB273]">Meals</span> in Minutes
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI-powered platform matching surplus food to those in need.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-[#3BB273] hover:bg-[#2d8f5a] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/matching">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#3BB273] text-[#3BB273] hover:bg-[#3BB273] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#3BB273" fillOpacity="0.1" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3BB273] mb-2">1M+</div>
              <div className="text-gray-600">Meals Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3BB273] mb-2">500+</div>
              <div className="text-gray-600">Partner Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3BB273] mb-2">200+</div>
              <div className="text-gray-600">NGO Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
