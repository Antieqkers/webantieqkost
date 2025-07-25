import { type NextRequest, NextResponse } from "next/server"

// Comprehensive sample data that matches our expected structure
const sampleProperties = [
  {
    id: "sample-1",
    name: "ANTIEQ WISMA KOST",
    location: "Jl. Antapani, Bandung",
    price: 850000,
    original_price: 1000000,
    rating: 4.8,
    reviews_count: 127,
    image_url: "/images/antieq-exterior.jpg",
    images: [
      "/images/antieq-exterior.jpg",
      "/images/antieq-corridor.jpg",
      "/images/antieq-kitchen.jpg",
      "/images/antieq-common-area.jpg",
      "/images/antieq-bathroom.jpg",
      "/images/antieq-bedroom1.jpg",
      "/images/antieq-bedroom2.jpg",
      "/images/antieq-upper-corridor.jpg",
      "/images/antieq-evening-view.jpg",
      "/images/antieq-community.jpg",
    ],
    facilities: ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir Motor", "Laundry", "Security 24 Jam"],
    amenities: [
      "WiFi Super Cepat",
      "AC Split",
      "Kamar Mandi Dalam",
      "Water Heater",
      "Lemari Pakaian",
      "Meja Belajar",
      "Kasur Spring Bed",
      "Dapur Bersama",
      "Kulkas Bersama",
      "Dispenser",
      "Parkir Motor",
      "Laundry Service",
      "Security 24 Jam",
      "CCTV",
      "Cleaning Service",
    ],
    rules: [
      "Dilarang merokok di dalam kamar",
      "Jam malam pukul 22:00",
      "Tamu maksimal sampai pukul 21:00",
      "Dilarang membawa hewan peliharaan",
      "Wajib menjaga kebersihan bersama",
    ],
    available_rooms: 8,
    discount_percentage: 15,
    is_popular: true,
    story:
      "Kost modern dengan fasilitas lengkap di kawasan strategis Antapani. Dekat dengan kampus dan pusat perbelanjaan.",
    description:
      "Kost eksklusif dengan desain modern dan fasilitas premium. Lokasi strategis dekat kampus ITB, UNPAD, dan pusat kota Bandung. Dilengkapi dengan WiFi super cepat, AC di setiap kamar, dapur bersama yang bersih, dan area komunal yang nyaman.",
    type: "luxury",
    latitude: -6.9175,
    longitude: 107.6191,
    contact_phone: "+62812-3456-7890",
    contact_whatsapp: "+62812-3456-7890",
    contact_email: "info@antieqkost.com",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "sample-2",
    name: "ANTIEQ Melati Residence",
    location: "Kota Gorontalo, Gorontalo",
    price: 600000,
    original_price: 900000,
    rating: 4.9,
    reviews_count: 85,
    image_url: "/images/antieq-exterior.jpg",
    images: [
      "/images/antieq-exterior.jpg",
      "/images/antieq-corridor.jpg",
      "/images/antieq-bedroom1.jpg",
      "/images/antieq-bathroom.jpg",
    ],
    facilities: ["WiFi 100Mbps", "AC Premium", "Kamar Mandi Dalam", "Parkir Luas", "CCTV 24/7"],
    amenities: [
      "WiFi Fiber 100Mbps",
      "AC di setiap kamar",
      "Kamar mandi dalam",
      "Lemari pakaian",
      "Meja belajar",
      "Kasur spring bed",
      "Parkir motor",
      "CCTV 24 jam",
      "Security",
      "Dapur bersama",
      "Ruang tamu",
      "Laundry",
    ],
    rules: [
      "Khusus putri",
      "Tidak boleh membawa tamu lawan jenis ke kamar",
      "Jam malam 22:00 WIT",
      "Dilarang merokok",
      "Dilarang membawa hewan peliharaan",
      "Wajib menjaga kebersihan",
    ],
    available_rooms: 5,
    discount_percentage: 33,
    is_popular: true,
    story: "Hunian eksklusif untuk putri di jantung Kota Gorontalo dengan akses mudah ke kampus dan pusat kota",
    description:
      "ANTIEQ Melati Residence adalah hunian premium khusus putri yang berlokasi strategis di pusat Kota Gorontalo. Dengan desain modern dan fasilitas lengkap, tempat ini menjadi pilihan utama mahasiswi dan pekerja muda.",
    type: "putri",
    latitude: 0.5435,
    longitude: 123.0582,
    contact_phone: "+62 812-3456-7890",
    contact_whatsapp: "+62 812-3456-7890",
    contact_email: "melati@antieqkost.id",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "sample-3",
    name: "ANTIEQ Harmoni Elite",
    location: "Limboto, Gorontalo",
    price: 450000,
    original_price: 650000,
    rating: 4.8,
    reviews_count: 62,
    image_url: "/images/antieq-evening-view.jpg",
    images: [
      "/images/antieq-evening-view.jpg",
      "/images/antieq-common-area.jpg",
      "/images/antieq-kitchen.jpg",
      "/images/antieq-community.jpg",
    ],
    facilities: ["WiFi Unlimited", "Dapur Bersama", "Laundry Gratis", "Security 24/7", "Mushola"],
    amenities: [
      "WiFi unlimited",
      "Dapur bersama lengkap",
      "Laundry gratis",
      "Mushola",
      "Ruang santai",
      "Parkir luas",
      "Security 24 jam",
      "Air mineral",
      "Cleaning service",
      "Coworking space",
    ],
    rules: [
      "Khusus putra",
      "Jam berkunjung tamu sampai 21:00 WIT",
      "Dilarang membawa alkohol",
      "Wajib menjaga ketenangan",
      "Gotong royong kebersihan",
      "Respect sesama penghuni",
    ],
    available_rooms: 8,
    discount_percentage: 31,
    is_popular: false,
    story: "Konsep co-living modern untuk putra di area Limboto yang tenang dengan suasana kampung yang asri",
    description:
      "ANTIEQ Harmoni Elite menawarkan konsep co-living yang modern dengan suasana kekeluargaan. Berlokasi di Limboto yang tenang, cocok untuk mahasiswa dan pekerja yang menginginkan lingkungan kondusif.",
    type: "putra",
    latitude: 0.6089,
    longitude: 123.0107,
    contact_phone: "+62 812-3456-7891",
    contact_whatsapp: "+62 812-3456-7891",
    contact_email: "harmoni@antieqkost.id",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// Helper functions for data processing
function normalizeProperty(property: any) {
  return {
    id: property.id || `fallback-${Math.random()}`,
    name: property.name || "Unnamed Property",
    location: property.location || "Unknown Location",
    price: Number(property.price) || 0,
    original_price: Number(property.original_price || property.price) || 0,
    rating: Number(property.rating) || 0,
    reviews_count: Number(property.reviews_count) || 0,
    image_url: property.image_url || "/placeholder.jpg",
    images:
      Array.isArray(property.images) && property.images.length > 0
        ? property.images
        : [property.image_url || "/placeholder.jpg"],
    facilities: Array.isArray(property.facilities) ? property.facilities : [],
    amenities: Array.isArray(property.amenities) ? property.amenities : [],
    rules: Array.isArray(property.rules) ? property.rules : [],
    available_rooms: Number(property.available_rooms) || 0,
    discount_percentage: Number(property.discount_percentage) || 0,
    is_popular: Boolean(property.is_popular),
    story: property.story || null,
    description: property.description || "",
    type: property.type || "mixed",
    latitude: Number(property.latitude) || 0,
    longitude: Number(property.longitude) || 0,
    contact_phone: property.contact_phone || "",
    contact_whatsapp: property.contact_whatsapp || "",
    contact_email: property.contact_email || "",
    is_active: Boolean(property.is_active !== false),
    created_at: property.created_at || new Date().toISOString(),
    updated_at: property.updated_at || new Date().toISOString(),
  }
}

function applyFilters(properties: any[], filters: any) {
  let filtered = [...properties]

  if (filters.location) {
    filtered = filtered.filter((p) => p.location?.toLowerCase().includes(filters.location.toLowerCase()))
  }

  if (filters.type && filters.type !== "all") {
    filtered = filtered.filter((p) => p.type === filters.type)
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name?.toLowerCase().includes(searchLower) ||
        p.location?.toLowerCase().includes(searchLower) ||
        p.description?.toLowerCase().includes(searchLower),
    )
  }

  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice)
  }

  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice)
  }

  return filtered
}

function applySorting(properties: any[], sortBy: string, sortOrder: string) {
  const sorted = [...properties]

  switch (sortBy) {
    case "price":
      return sorted.sort((a, b) => {
        const comparison = a.price - b.price
        return sortOrder === "asc" ? comparison : -comparison
      })
    case "rating":
      return sorted.sort((a, b) => {
        const comparison = a.rating - b.rating
        return sortOrder === "asc" ? comparison : -comparison
      })
    case "popular":
    default:
      return sorted.sort((a, b) => {
        if (a.is_popular && !b.is_popular) return -1
        if (!a.is_popular && b.is_popular) return 1
        return b.reviews_count - a.reviews_count
      })
  }
}

function paginateResults(properties: any[], page: number, limit: number) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  return properties.slice(startIndex, endIndex)
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Parse query parameters
    const filters = {
      location: searchParams.get("location") || "",
      type: searchParams.get("type") || "",
      search: searchParams.get("search") || "",
      minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null,
      maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null,
    }

    const sortBy = searchParams.get("sortBy") || "popular"
    const sortOrder = searchParams.get("sortOrder") || "desc"
    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
    const limit = Math.max(1, Math.min(100, Number.parseInt(searchParams.get("limit") || "12")))

    // For now, we'll use sample data since Supabase is having issues
    // In production, you would try Supabase first, then fallback to sample data

    console.log("Using sample data due to Supabase configuration issues")

    // Apply filters and sorting to sample data
    let filtered = applyFilters(sampleProperties, filters)
    filtered = applySorting(filtered, sortBy, sortOrder)

    const total = filtered.length
    const paginatedResults = paginateResults(filtered, page, limit)

    // Normalize all properties
    const normalizedProperties = paginatedResults.map(normalizeProperty)

    const response = {
      properties: normalizedProperties,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      usingFallback: true,
      message: "Using sample data - database connection will be configured in production",
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("API route error:", error)

    // Always return a valid response, never crash
    const fallbackResponse = {
      properties: sampleProperties.slice(0, 12).map(normalizeProperty),
      total: sampleProperties.length,
      page: 1,
      limit: 12,
      totalPages: Math.ceil(sampleProperties.length / 12),
      usingFallback: true,
      error: "Temporary server issue - using sample data",
    }

    return NextResponse.json(fallbackResponse, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.location || !body.price) {
      return NextResponse.json({ error: "Missing required fields: name, location, price" }, { status: 400 })
    }

    // For now, simulate successful creation
    const newProperty = normalizeProperty({
      ...body,
      id: `new-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    return NextResponse.json(newProperty, { status: 201 })
  } catch (error) {
    console.error("Error creating property:", error)
    return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
  }
}
