"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  Search,
  MapPin,
  Building,
  DollarSign,
  Star,
  Heart,
  Users,
  Sparkles,
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
} from "lucide-react"

export default function HomePage() {
  const [location, setLocation] = useState("")
  const [kosType, setKosType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  const featuredProperties = [
    {
      id: 1,
      name: "ANTIEQ Melati Residence",
      location: "Kota Gorontalo, Gorontalo",
      price: "600K",
      originalPrice: "900K",
      rating: 4.9,
      reviews: 85,
      image: "/placeholder.svg?height=300&width=400&text=ANTIEQ+Melati+Gorontalo",
      facilities: ["WiFi 100Mbps", "AC Premium", "Kamar Mandi Dalam", "Parkir Luas", "CCTV 24/7"],
      available: 5,
      discount: "33%",
      isPopular: true,
      story: "Hunian eksklusif untuk putri di jantung Kota Gorontalo dengan akses mudah ke kampus dan pusat kota",
    },
    {
      id: 2,
      name: "ANTIEQ Harmoni Elite",
      location: "Limboto, Gorontalo",
      price: "450K",
      originalPrice: "650K",
      rating: 4.8,
      reviews: 62,
      image: "/placeholder.svg?height=300&width=400&text=ANTIEQ+Harmoni+Limboto",
      facilities: ["WiFi Unlimited", "Dapur Bersama", "Laundry Gratis", "Security 24/7", "Mushola"],
      available: 8,
      discount: "31%",
      isPopular: false,
      story: "Konsep co-living modern untuk putra di area Limboto yang tenang dengan suasana kampung yang asri",
    },
    {
      id: 3,
      name: "ANTIEQ Luxury Suites",
      location: "Bone Bolango, Gorontalo",
      price: "800K",
      originalPrice: "1.2M",
      rating: 4.9,
      reviews: 94,
      image: "/placeholder.svg?height=300&width=400&text=ANTIEQ+Luxury+Bone+Bolango",
      facilities: ["WiFi Fiber", "AC Inverter", "Gym & Pool", "Rooftop Garden", "Coworking Space"],
      available: 3,
      discount: "33%",
      isPopular: true,
      story: "Apartemen mewah dengan pemandangan Teluk Tomini untuk profesional muda yang menghargai kualitas",
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

      {/* Ultimate Facilities Section */}
      <section id="facilities" className="relative z-10 bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">ULTIMATE FASILITAS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fasilitas premium terlengkap di Gorontalo untuk mendukung gaya hidup modern Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {ultimateFacilities.map((facility, index) => (
              <Card
                key={index}
                className="group p-6 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl text-center"
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <facility.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{facility.title}</h3>
                    <p className="text-xs text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section with Gorontalo Focus */}
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
            <Card className="p-8 bg-white/80 backdrop-blur-lg border-0 shadow-2xl rounded-3xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    🔍 Pencarian Cerdas Gorontalo
                  </h3>
                  <p className="text-gray-600">Temukan hunian impian di seluruh Provinsi Gorontalo</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                      Lokasi di Gorontalo
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="h-14 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 text-lg">
                        <SelectValue placeholder="Pilih lokasi di Gorontalo..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kota-gorontalo">🏙️ Kota Gorontalo</SelectItem>
                        <SelectItem value="limboto">🌾 Limboto</SelectItem>
                        <SelectItem value="bone-bolango">🏖️ Bone Bolango</SelectItem>
                        <SelectItem value="gorontalo-utara">⛰️ Gorontalo Utara</SelectItem>
                        <SelectItem value="pohuwato">🌴 Pohuwato</SelectItem>
                        <SelectItem value="boalemo">🏞️ Boalemo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-purple-600" />
                      Tipe Hunian Premium
                    </label>
                    <Select value={kosType} onValueChange={setKosType}>
                      <SelectTrigger className="h-14 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-500 text-lg">
                        <SelectValue placeholder="Pilih tipe hunian yang cocok..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="putri">🌸 ANTIEQ Putri Residence</SelectItem>
                        <SelectItem value="putra">🏢 ANTIEQ Putra Elite</SelectItem>
                        <SelectItem value="luxury">👑 ANTIEQ Luxury Suites</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      Budget Gorontalo
                    </label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger className="h-14 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-green-500 text-lg">
                        <SelectValue placeholder="Pilih budget yang sesuai..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300k-500k">💰 Rp 300rb - 500rb (Ekonomis)</SelectItem>
                        <SelectItem value="500k-800k">💎 Rp 500rb - 800rb (Premium)</SelectItem>
                        <SelectItem value="800k-1.2jt">👑 Rp 800rb - 1.2jt (Elite)</SelectItem>
                        <SelectItem value="1.2jt+">🏆 Rp 1.2jt+ (Luxury)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                    <Search className="h-6 w-6 mr-3 group-hover:animate-spin" />
                    CARI SEKARANG
                    <Sparkles className="h-6 w-6 ml-3 group-hover:animate-pulse" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Hero Visual */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
                <img
                  src="/placeholder.svg?height=600&width=800&text=ANTIEQ+WISMA+KOST+Gorontalo+Premium"
                  alt="ANTIEQ WISMA KOST Gorontalo Premium Building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg p-4 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-1">Hunian Premium Pertama di Gorontalo</h4>
                  <p className="text-sm text-gray-600">
                    Dengan pemandangan Teluk Tomini yang menakjubkan dan fasilitas bintang 5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RUMAH KOS PILIHAN Section */}
      <section id="search" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">RUMAH KOS PILIHAN</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Koleksi hunian premium terbaik di seluruh Provinsi Gorontalo dengan fasilitas lengkap dan lokasi strategis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Card
              key={property.id}
              className={`group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white rounded-3xl border-0 ${
                property.isPopular ? "ring-2 ring-gradient-to-r from-yellow-400 to-orange-500" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {property.isPopular && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                    -{property.discount}
                  </Badge>
                </div>

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </Button>

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Badge className="bg-green-500 text-white">{property.available} unit tersisa</Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {property.name}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
                    {property.location}
                  </p>

                  <p className="text-sm text-gray-600 italic leading-relaxed bg-gray-50 p-3 rounded-xl">
                    "{property.story}"
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{property.rating}</span>
                  <span className="text-sm text-gray-500">({property.reviews} ulasan)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Rp {property.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">Rp {property.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">/bulan</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {property.facilities.slice(0, 3).map((facility, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-indigo-50 text-indigo-600 border-indigo-200"
                    >
                      {facility}
                    </Badge>
                  ))}
                  {property.facilities.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                      +{property.facilities.length - 3} fasilitas
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105">
                    Lihat Detail
                  </Button>
                  <Button
                    variant="outline"
                    className="px-4 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials with Gorontalo Stories */}
      <section id="testimonials" className="relative z-10 bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg">
              💬 Cerita Penghuni Gorontalo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-indigo-600 bg-clip-text text-transparent">
              Transformasi Hidup di Gorontalo
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Anak muda Gorontalo yang telah merasakan pengalaman luar biasa tinggal di ANTIEQ WISMA KOST
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-3xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-indigo-600 font-medium">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed">"{testimonial.content}"</blockquote>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">Penghuni sejak 2023 • Verified Review ✓</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Gorontalo Focus */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ANTIEQ WISMA KOST
                  </span>
                  <div className="text-xs text-gray-400">Gorontalo Premium Living</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Platform hunian premium pertama di Gorontalo yang telah mengubah cara 5,000+ anak muda Gorontalo
                menemukan rumah impian mereka sejak 2019.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-pink-600 rounded-full transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-blue-400 rounded-full transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Lokasi Gorontalo</h3>
              <div className="space-y-3">
                {["Kota Gorontalo", "Limboto", "Bone Bolango", "Gorontalo Utara", "Pohuwato"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Koleksi Hunian</h3>
              <div className="space-y-3">
                {["ANTIEQ Putri Residence", "ANTIEQ Putra Elite", "ANTIEQ Luxury Suites", "ANTIEQ Co-Living"].map(
                  (item) => (
                    <div key={item} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white">Hubungi Kami</h3>
              <div className="space-y-3">
                <div className="text-gray-400 flex items-center hover:text-white transition-colors duration-300">
                  <Phone className="h-4 w-4 mr-3 text-green-500" />
                  +62 812-3456-7890
                </div>
                <div className="text-gray-400 flex items-center hover:text-white transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-3 text-blue-500" />
                  hello@antieqwismakost.id
                </div>
                <div className="text-gray-400 flex items-center hover:text-white transition-colors duration-300">
                  <MapPin className="h-4 w-4 mr-3 text-red-500" />
                  Gorontalo, Indonesia
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 ANTIEQ WISMA KOST - Proudly Serving Gorontalo Since 2019 ❤️
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
