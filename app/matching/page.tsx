"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Route, CheckCircle } from "lucide-react"

export default function AIMatchingPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [selectedNGO, setSelectedNGO] = useState(0)

  const ngos = [
    {
      name: "Hope Kitchen",
      distance: "2.3 km",
      time: "12 mins",
      rating: "4.9",
      capacity: "50+ meals",
      status: "Available Now",
    },
    {
      name: "Community Care Center",
      distance: "3.1 km",
      time: "18 mins",
      rating: "4.7",
      capacity: "30+ meals",
      status: "Available Now",
    },
    {
      name: "Helping Hands NGO",
      distance: "4.2 km",
      time: "25 mins",
      rating: "4.8",
      capacity: "40+ meals",
      status: "Available in 1hr",
    },
  ]

  const handleConfirmMatch = () => {
    setShowSuccessModal(true)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Map Section */}
        <div className="flex-1 relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
            {/* Grid lines to simulate map */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-gray-300"
                  style={{
                    left: `${i * 5}%`,
                    top: 0,
                    bottom: 0,
                    borderLeft: "1px solid",
                    opacity: 0.3,
                  }}
                />
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-gray-300"
                  style={{
                    top: `${i * 6.67}%`,
                    left: 0,
                    right: 0,
                    borderTop: "1px solid",
                    opacity: 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Restaurant Pin (Your Location) */}
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="bg-[#3BB273] p-3 rounded-full shadow-lg animate-pulse">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                Your Restaurant
              </div>
            </div>
          </div>

          {/* NGO Pins */}
          <div className="absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="bg-blue-500 p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                Hope Kitchen
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            <div className="relative">
              <div className="bg-purple-500 p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                Community Care
              </div>
            </div>
          </div>

          <div className="absolute top-2/3 right-1/4 transform translate-x-1/4 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="bg-orange-500 p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                Helping Hands
              </div>
            </div>
          </div>

          {/* Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
            <defs>
              <pattern id="dashed" patternUnits="userSpaceOnUse" width="10" height="2">
                <rect width="5" height="2" fill="#3BB273" />
              </pattern>
            </defs>
            <path d="M 33% 50% Q 50% 30% 67% 33%" stroke="url(#dashed)" strokeWidth="3" fill="none" opacity="0.8" />
          </svg>

          {/* Map Header */}
          <div className="absolute top-4 left-4 right-4 z-20">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-[#1B1B1B] mb-2">AI Matching in Progress</h2>
                <p className="text-gray-600">Finding the best NGO match for your 24.5kg surplus food</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* NGO Selection Panel */}
        <div className="w-full lg:w-96 bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-6">Available NGOs</h3>

            <div className="space-y-4">
              {ngos.map((ngo, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedNGO === index ? "ring-2 ring-[#3BB273] shadow-lg" : ""
                  }`}
                  onClick={() => setSelectedNGO(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-[#1B1B1B] text-lg">{ngo.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            ⭐ {ngo.rating}
                          </Badge>
                          <Badge
                            className={`text-xs ${
                              ngo.status === "Available Now"
                                ? "bg-[#3BB273] hover:bg-[#2d8f5a]"
                                : "bg-orange-500 hover:bg-orange-600"
                            } text-white`}
                          >
                            {ngo.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Route className="h-4 w-4 text-[#3BB273]" />
                        <span>{ngo.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#3BB273]" />
                        <span>{ngo.time} delivery time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#3BB273]" />
                        <span>Can handle {ngo.capacity}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Confirm Match Button */}
            <Button
              onClick={handleConfirmMatch}
              size="lg"
              className="w-full mt-6 bg-[#3BB273] hover:bg-[#2d8f5a] text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Confirm Match with {ngos[selectedNGO].name}
            </Button>

            {/* Selected NGO Details */}
            <Card className="mt-4 bg-[#3BB273] bg-opacity-5 border-[#3BB273] border-opacity-20">
              <CardContent className="p-4">
                <h5 className="font-semibold text-[#1B1B1B] mb-2">Match Summary</h5>
                <div className="text-sm space-y-1">
                  <div>
                    NGO: <span className="font-medium">{ngos[selectedNGO].name}</span>
                  </div>
                  <div>
                    Distance: <span className="font-medium">{ngos[selectedNGO].distance}</span>
                  </div>
                  <div>
                    Estimated Delivery: <span className="font-medium">{ngos[selectedNGO].time}</span>
                  </div>
                  <div>
                    Surplus: <span className="font-medium">24.5kg (82 meals)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="bg-white max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-[#3BB273] rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[#1B1B1B]">Matched!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Pickup scheduled with {ngos[selectedNGO].name}. They will arrive in approximately{" "}
                {ngos[selectedNGO].time}.
              </p>
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="bg-[#3BB273] hover:bg-[#2d8f5a] text-white px-8"
              >
                Great!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
