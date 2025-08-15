"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, TrendingUp, Users, Leaf, ChefHat, Calendar, Award } from "lucide-react"
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export default function ImpactAnalyticsPage() {
  // Sample data for charts
  const monthlyData = [
    { month: "Jan", meals: 1200, co2: 480 },
    { month: "Feb", meals: 1800, co2: 720 },
    { month: "Mar", meals: 2400, co2: 960 },
    { month: "Apr", meals: 3200, co2: 1280 },
    { month: "May", meals: 2800, co2: 1120 },
    { month: "Jun", meals: 3600, co2: 1440 },
  ]

  const ngoDistribution = [
    { name: "Food Banks", value: 45, color: "#3BB273" },
    { name: "Shelters", value: 30, color: "#60A5FA" },
    { name: "Community Centers", value: 15, color: "#F59E0B" },
    { name: "Schools", value: 10, color: "#EF4444" },
  ]

  const handleDownloadReport = () => {
    // Mock download functionality
    alert("Impact report downloaded successfully!")
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-2">Impact Analytics</h1>
              <p className="text-gray-600 text-lg">Track your environmental and social impact</p>
            </div>
            <Button
              onClick={handleDownloadReport}
              className="bg-[#3BB273] hover:bg-[#2d8f5a] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Impact Report
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Meals Delivered */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Meals Delivered</CardTitle>
              <ChefHat className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B1B1B] mb-1">15,200</div>
              <div className="flex items-center text-sm text-[#3BB273]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +23% this month
              </div>
              <div className="text-xs text-gray-500 mt-2">Since January 2024</div>
            </CardContent>
          </Card>

          {/* CO₂ Saved */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">CO₂ Saved</CardTitle>
              <Leaf className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B1B1B] mb-1">6,080 kg</div>
              <div className="flex items-center text-sm text-[#3BB273]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +18% this month
              </div>
              <div className="text-xs text-gray-500 mt-2">Equivalent to 26 trees planted</div>
            </CardContent>
          </Card>

          {/* NGO Partners */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">NGO Partners</CardTitle>
              <Users className="h-5 w-5 text-[#3BB273]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B1B1B] mb-1">47</div>
              <div className="flex items-center text-sm text-[#3BB273]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +5 new this month
              </div>
              <div className="text-xs text-gray-500 mt-2">Active partnerships</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart - Monthly Progress */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#1B1B1B]">Monthly Impact Trend</CardTitle>
              <p className="text-gray-600">Meals delivered and CO₂ saved over time</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="meals" fill="#3BB273" name="Meals Delivered" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="co2" fill="#60A5FA" name="CO₂ Saved (kg)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Pie Chart - NGO Distribution */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#1B1B1B]">NGO Partner Distribution</CardTitle>
              <p className="text-gray-600">Types of organizations we work with</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ngoDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {ngoDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">98.5%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <Award className="h-8 w-8 text-[#3BB273]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">14 min</div>
                  <div className="text-sm text-gray-600">Avg Delivery Time</div>
                </div>
                <Calendar className="h-8 w-8 text-[#3BB273]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">2,840</div>
                  <div className="text-sm text-gray-600">People Fed</div>
                </div>
                <Users className="h-8 w-8 text-[#3BB273]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#1B1B1B]">127</div>
                  <div className="text-sm text-gray-600">Active Restaurants</div>
                </div>
                <ChefHat className="h-8 w-8 text-[#3BB273]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Summary */}
        <Card className="bg-gradient-to-r from-[#3BB273] to-[#2d8f5a] text-white shadow-lg">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Your Impact This Year</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">15,200</div>
                  <div className="text-green-100">Meals Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">6,080 kg</div>
                  <div className="text-green-100">CO₂ Emissions Prevented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2,840</div>
                  <div className="text-green-100">People Helped</div>
                </div>
              </div>
              <p className="mt-6 text-green-100 text-lg">
                Together, we're making a real difference in fighting food waste and hunger.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
