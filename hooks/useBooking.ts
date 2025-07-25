"use client"

import { useState } from "react"

export function useBooking() {
  const [isLoading, setIsLoading] = useState(false)

  const createBooking = async (bookingData: {
    user_id: string
    property_id: string
    check_in: string
    duration_months: number
    total_price: number
    notes?: string
  }) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      const data = await response.json()

      if (response.ok) {
        return { success: true, booking: data.booking }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: "Failed to create booking" }
    } finally {
      setIsLoading(false)
    }
  }

  const updateBookingStatus = async (bookingId: string, status: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      const data = await response.json()

      if (response.ok) {
        return { success: true, booking: data.booking }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: "Failed to update booking" }
    } finally {
      setIsLoading(false)
    }
  }

  const getBookings = async (userId?: string, status?: string) => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (userId) params.set("userId", userId)
      if (status) params.set("status", status)

      const response = await fetch(`/api/bookings?${params}`)
      const data = await response.json()

      if (response.ok) {
        return { success: true, bookings: data.bookings }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: "Failed to fetch bookings" }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    createBooking,
    updateBookingStatus,
    getBookings,
  }
}
