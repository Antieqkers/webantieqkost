"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="text-center p-8 bg-green-50 border-green-200">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800">Pesan Terkirim!</h3>
            <p className="text-green-700">
              Terima kasih telah menghubungi kami. Tim ANTIEQ WISMA KOST akan segera merespons pesan Anda.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telepon</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-sm text-gray-500">Senin - Minggu, 08:00 - 22:00 WIT</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-sm text-gray-500">Respon cepat 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">hello@antieqwismakost.id</p>
                  <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Alamat Kantor</h4>
                  <p className="text-gray-600">Jl. Jenderal Sudirman No. 123</p>
                  <p className="text-gray-600">Kota Gorontalo, Gorontalo 96115</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Kontak Cepat</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat WhatsApp
              </Button>
              <Button onClick={() => window.open("tel:+6281234567890", "_self")} variant="outline" className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Telepon Langsung
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="nama@email.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subjek</Label>
                <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Pilih subjek pesan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info-kost">Informasi Kost</SelectItem>
                    <SelectItem value="booking">Booking Kamar</SelectItem>
                    <SelectItem value="kerjasama">Kerjasama</SelectItem>
                    <SelectItem value="komplain">Komplain</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  required
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </div>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
