"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  MapPin,
  Star,
  Users,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Home,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Shirt,
  MapPinIcon,
  Settings,
  BrushIcon as Broom,
  Clock,
  FileText,
  Moon,
  Award,
  MessageCircle,
  Filter,
  SortAsc,
  SortDesc,
} from "lucide-react"
import { SearchForm } from "@/components/SearchForm"
import { PropertyCard } from "@/components/PropertyCard"
import { ContactForm } from "@/components/ContactForm"
import { useSearch } from "@/hooks/useSearch"
import type { Property } from "@/lib/types"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showAllProperties, setShowAllProperties] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  const { filteredProperties, filters, updateFilter, totalResults } = useSearch()

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const ultimateFacilities = [
    {
      icon: Shirt,
      title: "LAUNDRY",
      description: "Layanan cuci lengkap",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "CO-WORKING SPACE",
      description: "Ruang kerja modern",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Coffee,
      title: "COFFEE SHOP",
      description: "Kafe dalam area",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Dumbbell,
      title: "FITNESS CENTER",
      description: "Gym lengkap 24/7",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Wifi,
      title: "HIGH-SPEED WIFI",
      description: "Internet super cepat",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Car,
      title: "PARKING AREA",
      description: "Parkir luas & aman",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: MapPinIcon,
      title: "PREMIUM LOCATION",
      description: "Lokasi strategis",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Settings,
      title: "GOOD MAINTENANCE",
      description: "Perawatan terbaik",
      color: "from-gray-500 to-gray-600",
    },
    {
      icon: Broom,
      title: "CLEANING ROUTINE",
      description: "Kebersihan terjaga",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Moon,
      title: "MOSQUE AREA",
      description: "Mushola dalam area",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: FileText,
      title: "FLEXIBLE LEASING",
      description: "Kontrak fleksibel",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "24/7 SUPPORT",
      description: "Bantuan sepanjang waktu",
      color: "from-violet-500 to-violet-600",
    },
  ]

  const storyMilestones = [
    {
      year: "2019",
      title: "Mimpi Dimulai",
      description:
        "Berawal dari pengalaman pribadi mencari kos yang nyaman di Gorontalo, kami memahami perjuangan anak muda daerah.",
      icon: "🌱",
    },
    {
      year: "2021",
      title: "Revolusi Digital",
      description: "Meluncurkan platform digital pertama yang mengubah cara anak muda Gorontalo mencari hunian impian.",
      icon: "🚀",
    },
    {
      year: "2023",
      title: "Ekspansi Regional",
      description: "Hadir di seluruh Provinsi Gorontalo dengan 500+ pilihan hunian premium berkualitas tinggi.",
      icon: "🏆",
    },
    {
      year: "2024",
      title: "Masa Depan Cerah",
      description: "Terus berinovasi dengan AI dan teknologi terdepan untuk pengalaman hunian terbaik di Gorontalo.",
      icon: "✨",
    },
  ]

  const testimonials = [
    {
      name: "Siti Nurhaliza Pakaya",
      role: "Mahasiswa UNG",
      content:
        "ANTIEQ WISMA KOST memberikan pengalaman tinggal yang luar biasa di Gorontalo. Fasilitasnya lengkap, lingkungannya aman, dan yang paling penting - saya merasa seperti di rumah sendiri meski jauh dari keluarga.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SNP",
      location: "ANTIEQ Melati Residence, Gorontalo",
    },
    {
      name: "Muhammad Akbar Daulima",
      role: "Fresh Graduate",
      content:
        "Sebagai anak Gorontalo yang baru lulus kuliah, ANTIEQ memberikan solusi hunian yang perfect. Lokasinya strategis, komunitasnya solid, dan harganya sangat reasonable untuk standar Gorontalo.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MAD",
      location: "ANTIEQ Harmoni Elite, Limboto",
    },
    {
      name: "Fatimah Zahra Monoarfa",
      role: "Content Creator",
      content:
        "ANTIEQ WISMA KOST memahami kebutuhan generasi digital seperti saya. WiFi super cepat, ruang kreatif yang inspiring, dan pemandangan Teluk Tomini yang menakjubkan. Perfect untuk content creation!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=FZM",
      location: "ANTIEQ Luxury Suites, Bone Bolango",
    },
  ]

  const realPhotos = [
    {
      src: "/images/antieq-exterior.jpg",
      alt: "ANTIEQ WISMA KOST - Tampak Depan Bangunan Modern",
      title: "Bangunan Modern 2 Lantai",
      description: "Arsitektur modern dengan balkon dan pencahayaan yang baik",
    },
    {
      src: "/images/antieq-corridor.jpg",
      alt: "ANTIEQ WISMA KOST - Koridor Bersih dan Terang",
      title: "Koridor Premium",
      description: "Koridor bersih dengan skylight dan ventilasi udara alami",
    },
    {
      src: "/images/antieq-kitchen.jpg",
      alt: "ANTIEQ WISMA KOST - Dapur Bersama Modern",
      title: "Dapur Bersama",
      description: "Dapur modern dengan kompor gas dan area memasak yang luas",
    },
    {
      src: "/images/antieq-common-area.jpg",
      alt: "ANTIEQ WISMA KOST - Area Bersama",
      title: "Area Komunal",
      description: "Ruang bersama dengan kulkas, hiburan, dan penyimpanan",
    },
  ]

  const displayedProperties = showAllProperties ? filteredProperties : filteredProperties.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:bg-blue-50 transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ANTIEQ WISMA KOST
                  </span>
                  <div className="text-xs text-gray-500 font-medium">Gorontalo Premium Living</div>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Beranda
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#facilities"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Fasilitas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Galeri
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#story"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Cerita Kami
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#search"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Cari Hunian
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Testimoni
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium relative group"
              >
                Kontak
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:inline-flex bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/80 transition-all duration-300"
              >
                Login/SignUp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Promotional Banners */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Banner 1 - HEMAT */}
          <Card className="group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-3xl overflow-hidden relative cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="relative z-10">
              <Badge className="bg-white/20 text-white mb-3 animate-pulse">🔥 Hot Deal Gorontalo</Badge>
              <div className="text-sm mb-2 opacity-90">Simpang</div>
              <div className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                HEMAT!!
              </div>
              <div className="text-4xl font-bold">
                Rp 1.5<span className="text-lg">JT</span>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
          </Card>

          {/* Banner 2 - 20 */}
          <Card className="group bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white p-6 rounded-3xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
            <div className="text-7xl font-bold group-hover:rotate-12 transition-transform duration-300 relative z-10">
              20
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20 group-hover:animate-pulse"></div>
          </Card>

          {/* Banner 3 - CARI KOS */}
          <Card className="group bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white p-6 rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="bg-white/20 text-white mb-3">✨ Promo Gorontalo</Badge>
              <div className="text-xl font-bold mb-1 group-hover:animate-bounce">CARI KOS?</div>
              <div className="text-xl font-bold">DI ANTIEQ AJA</div>
              <div className="text-2xl mt-2 group-hover:animate-spin">💡</div>
            </div>
          </Card>

          {/* Banner 4 - GAMPANG */}
          <Card className="group bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white p-6 rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="bg-white/20 text-white mb-3">📱 Easy Booking</Badge>
              <div className="text-lg font-bold mb-1">BOOKING</div>
              <div className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                GAMPANG
              </div>
              <div className="text-sm opacity-90">LEWAT APLIKASI</div>
              <div className="text-xs mt-2 bg-white/20 rounded-full px-2 py-1 inline-block">READY UNIT</div>
            </div>
          </Card>

          {/* Banner 5 - PROJECT & KERJASAMA */}
          <Card className="group bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-6 rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="bg-white/20 text-white mb-3">🤝 Partnership</Badge>
              <div className="text-lg font-bold mb-1 group-hover:animate-pulse">PROJECT &</div>
              <div className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                KERJASAMA
              </div>
              <div className="text-sm opacity-90 mb-2">Bergabung dengan kami</div>
              <div className="flex items-center space-x-2">
                <div className="text-xs bg-white/20 rounded-full px-2 py-1">INVESTOR</div>
                <div className="text-xs bg-white/20 rounded-full px-2 py-1">PARTNER</div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-6 translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute top-2 right-2 text-2xl group-hover:animate-bounce">🏗️</div>
          </Card>
        </div>
      </div>

      {/* Hero Section with Real Photos */}
      <section id="home" className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full animate-pulse">
                  🏠 Hunian Premium Gorontalo
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Yuk Cek Dulu
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent animate-pulse">
                  Disini!
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  <span className="text-indigo-600 font-bold">ANTIEQ WISMA KOST</span> - Hunian Premium Pertama di
                  Gorontalo
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Solusi Sewa Rumah Kos Terbaik Untuk Kamu di{" "}
                  <span className="text-indigo-600 font-semibold">Provinsi Gorontalo</span>. Nikmati pengalaman tinggal
                  yang tak terlupakan dengan pemandangan{" "}
                  <span className="text-purple-600 font-semibold">Teluk Tomini</span> yang menakjubkan.
                </p>
              </div>

              {/* Stats with Gorontalo Focus */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Hunian Premium</div>
                  <div className="text-xs text-gray-500">Se-Gorontalo</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    5K+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Penghuni Bahagia</div>
                  <div className="text-xs text-gray-500">Sejak 2019</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    4.9
                  </div>
                  <div className="text-sm text-gray-600 font-medium flex items-center justify-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    Rating
                  </div>
                  <div className="text-xs text-gray-500">Kepuasan Tinggi</div>
                </div>
              </div>
            </div>

            {/* Enhanced Search Form for Gorontalo */}
            <SearchForm />
          </div>

          {/* Right Side - Real Hero Photo */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                <img
                  src="/images/antieq-exterior.jpg"
                  alt="ANTIEQ WISMA KOST Gorontalo - Bangunan Premium"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg p-4 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-1">Hunian Premium Pertama di Gorontalo</h4>
                  <p className="text-sm text-gray-600">
                    Bangunan modern 2 lantai dengan fasilitas lengkap dan desain arsitektur terdepan
                  </p>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Best Kost 2024</div>
                    <div className="text-sm text-gray-600">Gorontalo Property Awards</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-xl animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">5K+ Happy Residents</div>
                    <div className="text-sm text-gray-600">Komunitas Terbesar Gorontalo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search & Listings */}
      <section id="search" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RUMAH KOS PILIHAN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan hunian impian Anda di seluruh Provinsi Gorontalo dengan fasilitas terlengkap
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {totalResults} hunian ditemukan
              </Badge>
              {filters.location && (
                <Badge className="bg-indigo-100 text-indigo-800">📍 {filters.location.replace("-", " ")}</Badge>
              )}
              {filters.type && <Badge className="bg-purple-100 text-purple-800">🏠 {filters.type}</Badge>}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateFilter("sortOrder", filters.sortOrder === "asc" ? "desc" : "asc")}
              >
                {filters.sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onBooking={setSelectedProperty} />
            ))}
          </div>

          {/* Load More Button */}
          {filteredProperties.length > 6 && (
            <div className="text-center">
              <Button
                onClick={() => setShowAllProperties(!showAllProperties)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {showAllProperties
                  ? "Tampilkan Lebih Sedikit"
                  : `Lihat Semua (${filteredProperties.length - 6} lainnya)`}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              HUBUNGI KAMI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim ANTIEQ WISMA KOST siap membantu Anda menemukan hunian impian di Gorontalo
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">ANTIEQ WISMA KOST</div>
                  <div className="text-sm text-gray-300">Gorontalo Premium Living</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hunian premium terdepan di Provinsi Gorontalo dengan fasilitas lengkap dan pelayanan terbaik untuk
                generasi muda Indonesia.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Beranda
                </a>
                <a href="#facilities" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Fasilitas
                </a>
                <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Galeri
                </a>
                <a href="#search" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Cari Hunian
                </a>
                <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Testimoni
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Lokasi Gorontalo</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span className="text-gray-300">Kota Gorontalo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span className="text-gray-300">Limboto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span className="text-gray-300">Bone Bolango</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span className="text-gray-300">Gorontalo Utara</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">WhatsApp 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">hello@antieqwismakost.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span className="text-gray-300">Gorontalo, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-300">
                © 2024 ANTIEQ WISMA KOST. All rights reserved. Made with ❤️ in Gorontalo.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
