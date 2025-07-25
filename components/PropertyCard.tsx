"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Heart, Phone, MessageCircle, Eye, Wifi, Car, Shield, Utensils } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency, generateWhatsAppUrl } from "@/lib/utils"
import { PropertyModal } from "./PropertyModal"

interface PropertyCardProps {
  property: Property
  onBooking?: (property: Property) => void
}

export function PropertyCard({ property, onBooking }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Normalize property data
  const normalizedProperty = {
    ...property,
    image: property.image_url || property.image || "/placeholder.svg",
    originalPrice: property.original_price || property.originalPrice || property.price,
    reviews: property.reviews_count || property.reviews || 0,
    available: property.available_rooms || property.available || 0,
    discount: property.discount_percentage ? `${property.discount_percentage}%` : property.discount || "0%",
    isPopular: property.is_popular || property.isPopular || false,
    contact: {
      phone: property.contact_phone || property.contact?.phone || "",
      whatsapp: property.contact_whatsapp || property.contact?.whatsapp || "",
      email: property.contact_email || property.contact?.email || "",
    },
  }

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${normalizedProperty.name} di ${normalizedProperty.location}. Bisakah saya mendapatkan informasi lebih lanjut?`
    const url = generateWhatsAppUrl(normalizedProperty.contact.whatsapp, message)
    window.open(url, "_blank")
  }

  const handleCall = () => {
    window.open(`tel:${normalizedProperty.contact.phone}`, "_self")
  }

  const getFacilityIcon = (facility: string) => {
    if (facility.toLowerCase().includes("wifi")) return <Wifi className="h-3 w-3" />
    if (facility.toLowerCase().includes("parkir")) return <Car className="h-3 w-3" />
    if (facility.toLowerCase().includes("security") || facility.toLowerCase().includes("cctv"))
      return <Shield className="h-3 w-3" />
    if (facility.toLowerCase().includes("dapur")) return <Utensils className="h-3 w-3" />
    return null
  }

  return (
    <>
      <Card
        className={`group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white rounded-3xl border-0 ${
          normalizedProperty.isPopular ? "ring-2 ring-yellow-400" : ""
        }`}
      >
        <div className="relative">
          <img
            src={normalizedProperty.image || "/placeholder.svg"}
            alt={normalizedProperty.name}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {normalizedProperty.isPopular && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse">
                🔥 Most Popular
              </Badge>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
              -{normalizedProperty.discount}
            </Badge>
          </div>

          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute bottom-4 right-4 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isLiked ? "bg-red-100 hover:bg-red-200" : "bg-white/90 hover:bg-white"
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "text-red-500 fill-red-500" : "text-red-500"}`} />
          </Button>

          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Badge className="bg-green-500 text-white">{normalizedProperty.available} unit tersisa</Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
              {normalizedProperty.name}
            </h3>
            <p className="text-gray-600 flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
              {normalizedProperty.location}
            </p>

            {normalizedProperty.story && (
              <p className="text-sm text-gray-600 italic leading-relaxed bg-gray-50 p-3 rounded-xl">
                "{normalizedProperty.story}"
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(normalizedProperty.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">{normalizedProperty.rating}</span>
            <span className="text-sm text-gray-500">({normalizedProperty.reviews} ulasan)</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {formatCurrency(normalizedProperty.price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(normalizedProperty.originalPrice)}
                </span>
              </div>
              <div className="text-sm text-gray-500">/bulan</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {normalizedProperty.facilities.slice(0, 3).map((facility, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-indigo-50 text-indigo-600 border-indigo-200 flex items-center gap-1"
              >
                {getFacilityIcon(facility)}
                {facility}
              </Badge>
            ))}
            {normalizedProperty.facilities.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                +{normalizedProperty.facilities.length - 3} fasilitas
              </Badge>
            )}
          </div>

          <div className="flex space-x-2 pt-2">
            <Button
              onClick={() => setShowModal(true)}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="h-4 w-4 mr-2" />
              Lihat Detail
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleCall}
              variant="outline"
              className="px-4 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
            >
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <PropertyModal
        property={normalizedProperty}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onBooking={onBooking}
      />
    </>
  )
}
