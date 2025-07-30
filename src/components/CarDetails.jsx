import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Car,
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  Heart,
  Share2,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowLeft,
  Star,
  User,
  Building2,
  Globe,
  Shield
} from 'lucide-react'
import { get } from '../services/apiEndpoint'

const CarDetails = () => {
  const [carData, setCarData] = useState(null)
  const [showroomData, setShowroomData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { id } = useParams()

  const fetchCarData = async () => {
    try {
      const getCarData = await get(`/api/create/${id}`)
      setCarData(getCarData.data)

      // Fetch showroom data using userId
      if (getCarData.data.userId) {
        const getShowroomData = await get(`/auth/owner/${getCarData.data.userId}`)
        console.log("getShowroomData",getShowroomData)
        setShowroomData(getShowroomData.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCarData()
  }, [])

  const formatDateTime = (timeString) => {
    if (!timeString) return { date: "Invalid", time: "Invalid" }

    const dateObj = new Date(timeString)
    if (isNaN(dateObj.getTime())) return { date: "Invalid", time: "Invalid" }

    const date = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const time = dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })

    return { date, time }
  }

  const cleanString = (str) => {
    if (!str) return ''
    return str.replace(/"/g, '')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6b451a]"></div>
      </div>
    )
  }

  if (!carData) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <Car className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">Car not found</p>
        </div>
      </div>
    )
  }

  const { date, time } = formatDateTime(carData.time)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to='/marketplace' className="flex items-center gap-2 text-gray-600 hover:text-[#6b451a] transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to listings</span>
            </Link>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#6b451a] transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96 bg-gray-100">
                {carData.images && carData.images.length > 0 ? (
                  <img
                    src={carData.images[currentImageIndex]} // Cloudinary image is a full URL
                    alt={`${cleanString(carData.carMake)} ${cleanString(carData.carName)}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Car className="h-20 w-20 text-gray-400" />
                  </div>
                )}

                {/* Image Navigation */}
                {carData.images && carData.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Car Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {cleanString(carData.carMake)} {cleanString(carData.carName)}
                </h1>
                <p className="text-4xl font-bold text-[#6b451a] mb-4">
                  {carData.carPrice} <span className="text-lg font-normal text-gray-600">lacs PKR</span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Updated on {date} at {time}</span>
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Gauge className="h-5 w-5 text-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Mileage</p>
                      <p className="font-semibold">{carData.mileage?.toLocaleString()} km</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Fuel className="h-5 w-5 text-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Engine Capacity</p>
                      <p className="font-semibold">{carData.engineCapacity} CC</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Model Year</p>
                      <p className="font-semibold">{carData.model}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="h-5 w-5 rounded-full border-2 border-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Color</p>
                      <p className="font-semibold capitalize">{cleanString(carData.color)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Car className="h-5 w-5 text-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Variant</p>
                      <p className="font-semibold">{cleanString(carData.varients)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#6b451a]" />
                    <div>
                      <p className="text-sm text-gray-600">Registered In</p>
                      <p className="font-semibold">{carData.registeredIn}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Imported From</p>
                    <p className="font-semibold capitalize">{cleanString(carData.importedFrom)}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              {carData.description && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {cleanString(carData.description)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Showroom Info */}
          <div className="space-y-6">
            {/* Showroom Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#6b451a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {showroomData?.showroomName || "Premium Showroom"}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-600 ml-2">4.0 (124 reviews)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Verified Dealer</span>
                </div>
              </div>

              {/* Showroom Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <User className="h-5 w-5 text-[#6b451a]" />
                  <div>
                    <p className="text-sm text-gray-600">Owner</p>
                    <p className="font-semibold">{showroomData?.ownerName || "Muhammad Ali"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#6b451a]" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">{showroomData?.location || "Lahore, Punjab"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-[#6b451a]" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold">{showroomData?.phone || "+92 300 1234567"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-[#6b451a]" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">{showroomData?.email || "info@showroom.com"}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#6b451a] hover:bg-[#5a3a16] text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </button>
                <button className="w-full border-2 border-[#6b451a] text-[#6b451a] hover:bg-[#6b451a] hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
                </button>
              </div>

              {/* Safety Tips */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Safety Tips</h4>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Meet in a safe, public location</li>
                  <li>• Inspect the car thoroughly</li>
                  <li>• Verify all documents</li>
                  <li>• Don't pay in advance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails