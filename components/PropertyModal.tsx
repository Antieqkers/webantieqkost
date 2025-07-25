"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Star,
  Phone,
  MessageCircle,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  Wifi,
  Car,
  Shield,
  Utensils,
  Home,
  Clock,
} from "lucide-react"
import { BookingForm } from "./BookingForm"
import type { Property } from "@/lib/types"

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
  onBooking?: (property: Property) => void
}

export function PropertyModal({ property, isOpen, onClose, onBooking }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)

  if (!property) return null

  // Normalize property data with safe defaults
  const normalizedProperty = {
    id: property.id || "",
    name: property.name || "Nama tidak tersedia",
    location: property.location || "Lokasi tidak tersedia",
    price: property.price || 0,
    originalPrice: property.original_price || property.originalPrice || property.price || 0,
    rating: property.rating || 0,
    reviews: property.reviews_count || property.reviews || 0,
    image: property.image_url || property.image || "/placeholder.svg",
    images: Array.isArray(property.images)
      ? property.images
      : [property.image_url || property.image || "/placeholder.svg"],
    facilities: Array.isArray(property.facilities) ? property.facilities : [],
    amenities: Array.isArray(property.amenities) ? property.amenities : [],
    rules: Array.isArray(property.rules) ? property.rules : [],
    available: property.available_rooms || property.available || 0,
    discount: property.discount_percentage ? `${property.discount_percentage}%` : property.discount || "0%",
    isPopular: property.is_popular || property.isPopular || false,
    story: property.story || "",
    description: property.description || "",
    type: property.type || "putri",
    contact: {
      phone: property.contact_phone || (property.contact && property.contact.phone) || "",
      whatsapp: property.contact_whatsapp || (property.contact && property.contact.whatsapp) || "",
      email: property.contact_email || (property.contact && property.contact.email) || "",
    },
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % normalizedProperty.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + normalizedProperty.images.length) % normalizedProperty.images.length)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${normalizedProperty.name} di ${normalizedProperty.location}. Bisakah saya mendapatkan informasi lebih lanjut?`,
    )
    window.open(`https://wa.me/${normalizedProperty.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  const handleCall = () => {
    window.open(`tel:${normalizedProperty.contact.phone}`, "_self")
  }

  const handleEmail = () => {
    window.open(`mailto:${normalizedProperty.contact.email}`, "_self")
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getFacilityIcon = (facility: string) => {
    const facilityLower = facility.toLowerCase()
    if (facilityLower.includes("wifi")) return <Wifi className="h-4 w-4" />
    if (facilityLower.includes("parkir")) return <Car className="h-4 w-4" />
    if (facilityLower.includes("security") || facilityLower.includes("cctv")) return <Shield className="h-4 w-4" />
    if (facilityLower.includes("dapur")) return <Utensils className="h-4 w-4" />
    if (facilityLower.includes("kamar")) return <Home className="h-4 w-4" />
    return <Clock className="h-4 w-4" />
  }

  if (showBookingForm) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Booking {normalizedProperty.name}</DialogTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowBookingForm(false)}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </div>
          </DialogHeader>
          <BookingForm property={normalizedProperty} onClose={onClose} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{normalizedProperty.name}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={normalizedProperty.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${normalizedProperty.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
              {normalizedProperty.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {normalizedProperty.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {normalizedProperty.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {normalizedProperty.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? "border-blue-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg"
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            {/* Header Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {normalizedProperty.isPopular && <Badge className="bg-red-500 text-white">🔥 Popular</Badge>}
                <Badge variant="outline">{normalizedProperty.type}</Badge>
                {normalizedProperty.discount !== "0%" && (
                  <Badge className="bg-green-500 text-white">-{normalizedProperty.discount}</Badge>
                )}
              </div>

              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{normalizedProperty.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(normalizedProperty.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold">{normalizedProperty.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({normalizedProperty.reviews} ulasan)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-blue-600">{formatCurrency(normalizedProperty.price)}</span>
                {normalizedProperty.originalPrice > normalizedProperty.price && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatCurrency(normalizedProperty.originalPrice)}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600">/bulan</div>
              <div className="text-sm text-green-600 font-medium">{normalizedProperty.available} kamar tersedia</div>
            </div>

            {/* Story */}
            {normalizedProperty.story && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">"{normalizedProperty.story}"</p>
              </div>
            )}

            {/* Description */}
            {normalizedProperty.description && (
              <div>
                <h4 className="font-semibold mb-2">Deskripsi</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{normalizedProperty.description}</p>
              </div>
            )}

            {/* Contact Buttons */}
            <div className="flex gap-2">
              <Button onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button onClick={handleCall} variant="outline" className="flex-1 bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Telepon
              </Button>
              {normalizedProperty.contact.email && (
                <Button onClick={handleEmail} variant="outline">
                  <Mail className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Booking Button */}
            <Button
              onClick={() => setShowBookingForm(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Sekarang
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Facilities & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Facilities */}
          {normalizedProperty.facilities.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Fasilitas Utama
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {normalizedProperty.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {getFacilityIcon(facility)}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          {normalizedProperty.amenities.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Amenitas Lengkap
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {normalizedProperty.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {getFacilityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rules */}
        {normalizedProperty.rules.length > 0 && (
          <>
            <Separator className="my-6" />
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Peraturan Kost
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {normalizedProperty.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
