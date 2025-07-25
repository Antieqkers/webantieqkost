"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, User, Phone, Mail, MessageSquare, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/types"

interface BookingFormProps {
  property: Property
  onClose: () => void
}

export function BookingForm({ property, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    duration: "1",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Calculate total price
      const totalPrice = property.price * Number.parseInt(formData.duration)

      console.log("Booking submitted:", {
        property_id: property.id,
        ...formData,
        total_price: totalPrice,
      })

      setIsSuccess(true)
    } catch (error) {
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateTotal = () => {
    return property.price * Number.parseInt(formData.duration || "1")
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-green-800">Booking Berhasil!</h3>
        <p className="text-gray-600">Terima kasih! Kami akan menghubungi Anda dalam 24 jam untuk konfirmasi booking.</p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Booking ID:</strong> BK{Date.now()}
          </p>
          <p className="text-sm text-green-700">
            <strong>Total:</strong> {formatPrice(calculateTotal())}
          </p>
        </div>
        <Button onClick={onClose} className="w-full">
          Tutup
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Book {property.name}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{formatPrice(property.price)}/bulan</span>
          <Badge variant="outline">{property.available_rooms} kamar tersedia</Badge>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Nomor WhatsApp</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="phone"
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkIn">Tanggal Masuk</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleInputChange("checkIn", e.target.value)}
              className="pl-10"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Durasi Sewa</Label>
          <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih durasi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bulan</SelectItem>
              <SelectItem value="3">3 Bulan</SelectItem>
              <SelectItem value="6">6 Bulan</SelectItem>
              <SelectItem value="12">12 Bulan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Catatan (Opsional)</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Textarea
              id="notes"
              placeholder="Permintaan khusus atau pertanyaan..."
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              className="pl-10 min-h-[80px]"
            />
          </div>
        </div>

        {/* Price Summary */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Ringkasan Biaya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                {formatPrice(property.price)} × {formData.duration} bulan
              </span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-blue-600">{formatPrice(calculateTotal())}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1 bg-transparent"
            disabled={isSubmitting}
          >
            Batal
          </Button>
          <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Memproses..." : "Konfirmasi Booking"}
          </Button>
        </div>
      </form>

      <div className="text-xs text-gray-500 text-center">
        Dengan melakukan booking, Anda menyetujui syarat dan ketentuan kami
      </div>
    </div>
  )
}
