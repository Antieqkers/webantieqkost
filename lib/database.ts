import { supabase, supabaseAdmin } from "./supabase"
import type { Database } from "./supabase"

type Property = Database["public"]["Tables"]["properties"]["Row"]
type PropertyInsert = Database["public"]["Tables"]["properties"]["Insert"]
type PropertyUpdate = Database["public"]["Tables"]["properties"]["Update"]

type Booking = Database["public"]["Tables"]["bookings"]["Row"]
type BookingInsert = Database["public"]["Tables"]["bookings"]["Insert"]
type BookingUpdate = Database["public"]["Tables"]["bookings"]["Update"]

type Review = Database["public"]["Tables"]["reviews"]["Row"]
type ReviewInsert = Database["public"]["Tables"]["reviews"]["Insert"]

type Contact = Database["public"]["Tables"]["contacts"]["Row"]
type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"]

type User = Database["public"]["Tables"]["users"]["Row"]

// Properties
export async function getProperties(filters?: {
  location?: string
  type?: string
  priceMin?: number
  priceMax?: number
  search?: string
  sortBy?: "price" | "rating" | "popular"
  sortOrder?: "asc" | "desc"
  limit?: number
  offset?: number
}) {
  let query = supabase
    .from("properties")
    .select(`
      *,
      reviews:reviews(rating, comment, created_at, users(name, avatar_url))
    `)
    .eq("is_active", true)

  // Apply filters
  if (filters?.location) {
    query = query.ilike("location", `%${filters.location}%`)
  }

  if (filters?.type) {
    query = query.eq("type", filters.type)
  }

  if (filters?.priceMin) {
    query = query.gte("price", filters.priceMin)
  }

  if (filters?.priceMax) {
    query = query.lte("price", filters.priceMax)
  }

  if (filters?.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,location.ilike.%${filters.search}%,description.ilike.%${filters.search}%`,
    )
  }

  // Apply sorting
  if (filters?.sortBy) {
    const ascending = filters.sortOrder === "asc"
    switch (filters.sortBy) {
      case "price":
        query = query.order("price", { ascending })
        break
      case "rating":
        query = query.order("rating", { ascending })
        break
      case "popular":
        query = query.order("is_popular", { ascending: false })
        query = query.order("reviews_count", { ascending: false })
        break
    }
  } else {
    query = query.order("is_popular", { ascending: false })
    query = query.order("created_at", { ascending: false })
  }

  // Apply pagination
  if (filters?.limit) {
    query = query.limit(filters.limit)
  }

  if (filters?.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1)
  }

  const { data, error, count } = await query

  if (error) {
    throw new Error(`Failed to fetch properties: ${error.message}`)
  }

  return { properties: data || [], total: count || 0 }
}

export async function getPropertyById(id: string) {
  const { data, error } = await supabase
    .from("properties")
    .select(`
      *,
      reviews:reviews(
        id,
        rating,
        comment,
        created_at,
        users(name, avatar_url)
      )
    `)
    .eq("id", id)
    .eq("is_active", true)
    .single()

  if (error) {
    throw new Error(`Failed to fetch property: ${error.message}`)
  }

  return data
}

export async function createProperty(property: PropertyInsert) {
  const { data, error } = await supabaseAdmin.from("properties").insert(property).select().single()

  if (error) {
    throw new Error(`Failed to create property: ${error.message}`)
  }

  return data
}

export async function updateProperty(id: string, updates: PropertyUpdate) {
  const { data, error } = await supabaseAdmin.from("properties").update(updates).eq("id", id).select().single()

  if (error) {
    throw new Error(`Failed to update property: ${error.message}`)
  }

  return data
}

// Bookings
export async function createBooking(booking: BookingInsert) {
  const { data, error } = await supabase
    .from("bookings")
    .insert(booking)
    .select(`
      *,
      properties(name, location, price),
      users(name, email, phone)
    `)
    .single()

  if (error) {
    throw new Error(`Failed to create booking: ${error.message}`)
  }

  return data
}

export async function getBookings(userId?: string, status?: string) {
  let query = supabase
    .from("bookings")
    .select(`
      *,
      properties(name, location, price, image_url),
      users(name, email, phone)
    `)
    .order("created_at", { ascending: false })

  if (userId) {
    query = query.eq("user_id", userId)
  }

  if (status) {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    throw new Error(`Failed to fetch bookings: ${error.message}`)
  }

  return data || []
}

export async function updateBookingStatus(id: string, status: Booking["status"]) {
  const { data, error } = await supabase.from("bookings").update({ status }).eq("id", id).select().single()

  if (error) {
    throw new Error(`Failed to update booking: ${error.message}`)
  }

  return data
}

// Reviews
export async function createReview(review: ReviewInsert) {
  const { data, error } = await supabase
    .from("reviews")
    .insert(review)
    .select(`
      *,
      users(name, avatar_url)
    `)
    .single()

  if (error) {
    throw new Error(`Failed to create review: ${error.message}`)
  }

  // Update property rating
  await updatePropertyRating(review.property_id)

  return data
}

export async function getReviews(propertyId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select(`
      *,
      users(name, avatar_url)
    `)
    .eq("property_id", propertyId)
    .order("created_at", { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch reviews: ${error.message}`)
  }

  return data || []
}

async function updatePropertyRating(propertyId: string) {
  const { data: reviews } = await supabase.from("reviews").select("rating").eq("property_id", propertyId)

  if (reviews && reviews.length > 0) {
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    const roundedRating = Math.round(avgRating * 10) / 10

    await supabase
      .from("properties")
      .update({
        rating: roundedRating,
        reviews_count: reviews.length,
      })
      .eq("id", propertyId)
  }
}

// Contacts
export async function createContact(contact: ContactInsert) {
  const { data, error } = await supabase.from("contacts").insert(contact).select().single()

  if (error) {
    throw new Error(`Failed to create contact: ${error.message}`)
  }

  return data
}

export async function getContacts(status?: string) {
  let query = supabaseAdmin.from("contacts").select("*").order("created_at", { ascending: false })

  if (status) {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    throw new Error(`Failed to fetch contacts: ${error.message}`)
  }

  return data || []
}

// Property Views (Analytics)
export async function trackPropertyView(propertyId: string, userId?: string, ipAddress?: string, userAgent?: string) {
  const { error } = await supabase.from("property_views").insert({
    property_id: propertyId,
    user_id: userId,
    ip_address: ipAddress,
    user_agent: userAgent,
  })

  if (error) {
    console.error("Failed to track property view:", error.message)
  }
}

// Users
export async function getUserById(id: string) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id).single()

  if (error) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }

  return data
}

export async function updateUser(id: string, updates: Partial<User>) {
  const { data, error } = await supabase.from("users").update(updates).eq("id", id).select().single()

  if (error) {
    throw new Error(`Failed to update user: ${error.message}`)
  }

  return data
}
