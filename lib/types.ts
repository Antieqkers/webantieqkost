export interface Property {
  id: string
  name: string
  location: string
  price: number
  original_price?: number
  originalPrice?: number
  rating: number
  reviews?: number
  reviews_count?: number
  image?: string
  image_url?: string
  images: string[]
  facilities: string[]
  available?: number
  available_rooms?: number
  discount?: string
  discount_percentage?: number
  isPopular?: boolean
  is_popular?: boolean
  story?: string | null
  description: string
  type: "putri" | "putra" | "luxury" | "campur"
  latitude?: number | null
  longitude?: number | null
  amenities: string[]
  rules: string[]
  contact?: {
    phone?: string
    whatsapp?: string
    email?: string
  }
  contact_phone?: string | null
  contact_whatsapp?: string | null
  contact_email?: string | null
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

export interface SearchFilters {
  location: string
  type: string
  priceRange: string
  sortBy: string
  sortOrder: string
  search?: string
}

export interface Booking {
  id: string
  userId: string
  propertyId: string
  checkIn: Date
  duration: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled" | "completed"
  notes?: string
  createdAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Review {
  id: string
  propertyId: string
  user: User
  rating: number
  comment: string
  createdAt: Date
}
