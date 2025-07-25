import { createClient } from "@supabase/supabase-js"

// Environment variables with fallback handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create Supabase client if environment variables are available
let supabase: ReturnType<typeof createClient> | null = null
let supabaseAdmin: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (serviceRoleKey) {
      supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)
    } else {
      supabaseAdmin = supabase
    }

    console.log("Supabase client initialized successfully")
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error)
    supabase = null
    supabaseAdmin = null
  }
} else {
  console.warn("Supabase environment variables not found. Running in fallback mode.")
}

export { supabase, supabaseAdmin }

// Helper functions
export const isSupabaseAvailable = () => {
  return supabase !== null
}

export const safeSupabaseQuery = async <T>(\
  queryFn: () => Promise<T>,\
  fallback: T\
)
: Promise<T> =>
{
  if (!supabase) {
    console.warn("Supabase not available, returning fallback")
    return fallback
  }

  try {
    return await queryFn()
  } catch (error) {
    console.error("Supabase query failed:", error)
    return fallback
  }
}

// Database types
export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          name: string
          location: string
          price: number
          original_price: number
          rating: number
          reviews_count: number
          image_url: string
          images: string[]
          facilities: string[]
          available_rooms: number
          discount_percentage: number
          is_popular: boolean
          story: string | null
          description: string
          type: "putri" | "putra" | "luxury" | "mixed"
          latitude: number | null
          longitude: number | null
          amenities: string[]
          rules: string[]
          contact_phone: string | null
          contact_whatsapp: string | null
          contact_email: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          price: number
          original_price: number
          rating?: number
          reviews_count?: number
          image_url: string
          images?: string[]
          facilities?: string[]
          available_rooms?: number
          discount_percentage?: number
          is_popular?: boolean
          story?: string | null
          description: string
          type: "putri" | "putra" | "luxury" | "mixed"
          latitude?: number | null
          longitude?: number | null
          amenities?: string[]
          rules?: string[]
          contact_phone?: string | null
          contact_whatsapp?: string | null
          contact_email?: string | null
          is_active?: boolean
        }
        Update: {
          name?: string
          location?: string
          price?: number
          original_price?: number
          rating?: number
          reviews_count?: number
          image_url?: string
          images?: string[]
          facilities?: string[]
          available_rooms?: number
          discount_percentage?: number
          is_popular?: boolean
          story?: string | null
          description?: string
          type?: "putri" | "putra" | "luxury" | "mixed"
          latitude?: number | null
          longitude?: number | null
          amenities?: string[]
          rules?: string[]
          contact_phone?: string | null
          contact_whatsapp?: string | null
          contact_email?: string | null
          is_active?: boolean
        }
      }
      bookings: {
        Row: {
          id: string
          user_id: string
          property_id: string
          check_in: string
          duration_months: number
          total_price: number
          status: "pending" | "confirmed" | "cancelled" | "completed"
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          property_id: string
          check_in: string
          duration_months: number
          total_price: number
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          notes?: string | null
        }
        Update: {
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          notes?: string | null
        }
      }
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          subject: string
          message: string
          status: "new" | "in_progress" | "resolved"
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          email: string
          phone: string
          subject: string
          message: string
          status?: "new" | "in_progress" | "resolved"
        }
        Update: {
          status?: "new" | "in_progress" | "resolved"
        }
      }
    }
  }
}
