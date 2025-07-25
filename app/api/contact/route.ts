import { type NextRequest, NextResponse } from "next/server"
import { createContact } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "subject", "message"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Create contact
    const contact = await createContact({
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
    })

    return NextResponse.json({
      success: true,
      contact,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error creating contact:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
