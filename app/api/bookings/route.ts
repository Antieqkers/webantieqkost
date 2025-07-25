import { type NextRequest, NextResponse } from "next/server"
import { createBooking, getBookings } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["user_id", "property_id", "check_in", "duration_months", "total_price"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Create booking
    const booking = await createBooking({
      user_id: body.user_id,
      property_id: body.property_id,
      check_in: body.check_in,
      duration_months: body.duration_months,
      total_price: body.total_price,
      notes: body.notes,
    })

    return NextResponse.json({
      success: true,
      booking,
      message: "Booking created successfully",
    })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId") || undefined
    const status = searchParams.get("status") || undefined

    const bookings = await getBookings(userId, status)

    return NextResponse.json({
      bookings,
      total: bookings.length,
    })
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}
