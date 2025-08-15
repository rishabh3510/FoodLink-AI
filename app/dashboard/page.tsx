import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Scale, Users, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function RestaurantDashboard() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-2">Restaurant Dashboard</h1>
          <p className="text-gray-600 text-lg">Monitor your surplus food and impact in real-time</p>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Today's Surplus */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Surplus Detected</CardTitle>
              <Scale className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B1B1B] mb-1">24.5 kg</div>
              <div className="flex items-center text-sm text-[#3BB273]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% from yesterday
              </div>
            </CardContent>
          </Card>

          {/* Estimated Meals */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Estimated Meals</CardTitle>
              <ChefHat className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B1B1B] mb-1">82</div>
              <div className="text-sm text-gray-500">From current surplus</div>
            </CardContent>
          </Card>

          {/* AI Quality Status */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">AI Quality Status</CardTitle>
              <CheckCircle className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#3BB273] hover:bg-[#2d8f5a] text-white">Safe to Deliver</Badge>
              </div>
              <div className="text-sm text-gray-500">All items passed quality check</div>
            </CardContent>
          </Card>
        </div>

        {/* Surplus Breakdown */}
        <Card className="bg-white shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-[#1B1B1B]">Surplus Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Prepared Meals</div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">15.2 kg</div>
                </div>
                <CheckCircle className="h-8 w-8 text-[#3BB273]" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Fresh Produce</div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">6.8 kg</div>
                </div>
                <CheckCircle className="h-8 w-8 text-[#3BB273]" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Bakery Items</div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">2.5 kg</div>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">Total Items</div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">47</div>
                </div>
                <Users className="h-8 w-8 text-[#3BB273]" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-[#1B1B1B]">Ready to Match</CardTitle>
            <p className="text-gray-600">Your surplus food is ready to be matched with nearby NGOs</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[#3BB273] bg-opacity-10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-[#3BB273]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1B1B1B]">3 NGOs Available</div>
                  <div className="text-sm text-gray-600">Within 5km radius</div>
                </div>
              </div>

              <Link href="/matching">
                <Button
                  size="lg"
                  className="bg-[#3BB273] hover:bg-[#2d8f5a] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Match to NGO
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
