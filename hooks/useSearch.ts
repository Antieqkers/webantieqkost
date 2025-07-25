"use client"

import { useState, useEffect, useCallback } from "react"
import type { Property } from "@/lib/types"

interface SearchFilters {
  location: string
  type: string
  search: string
  minPrice?: number
  maxPrice?: number
  sortBy: string
  sortOrder: string
}

interface SearchResult {
  properties: Property[]
  total: number
  page: number
  limit: number
  totalPages: number
  usingFallback?: boolean
}

export function useSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    type: "",
    search: "",
    sortBy: "popular",
    sortOrder: "desc",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchResult, setSearchResult] = useState<SearchResult>({
    properties: [],
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 0,
  })

  const searchProperties = useCallback(
    async (page = 1) => {
      setLoading(true)
      setError(null)

      try {
        const params = new URLSearchParams()

        if (filters.location) params.set("location", filters.location)
        if (filters.type) params.set("type", filters.type)
        if (filters.search) params.set("search", filters.search)
        if (filters.minPrice) params.set("minPrice", filters.minPrice.toString())
        if (filters.maxPrice) params.set("maxPrice", filters.maxPrice.toString())

        params.set("sortBy", filters.sortBy)
        params.set("sortOrder", filters.sortOrder)
        params.set("page", page.toString())
        params.set("limit", "12")

        const response = await fetch(`/api/properties?${params.toString()}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON")
        }

        const data = await response.json()

        if (!data || typeof data !== "object") {
          throw new Error("Invalid response format")
        }

        const result: SearchResult = {
          properties: Array.isArray(data.properties) ? data.properties : [],
          total: data.total || 0,
          page: data.page || 1,
          limit: data.limit || 12,
          totalPages: data.totalPages || 0,
          usingFallback: data.usingFallback || false,
        }

        setSearchResult(result)
        setCurrentPage(page)

        if (result.usingFallback) {
          console.warn("Using fallback data due to database issues")
        }
      } catch (err) {
        console.error("Search error:", err)
        setError(err instanceof Error ? err.message : "Search failed")

        // Set empty result on error
        setSearchResult({
          properties: [],
          total: 0,
          page: 1,
          limit: 12,
          totalPages: 0,
        })
      } finally {
        setLoading(false)
      }
    },
    [filters],
  )

  // Initial search on mount
  useEffect(() => {
    searchProperties(1)
  }, [searchProperties])

  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
    setCurrentPage(1)
  }, [])

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= searchResult.totalPages) {
        searchProperties(page)
      }
    },
    [searchProperties, searchResult.totalPages],
  )

  const resetFilters = useCallback(() => {
    setFilters({
      location: "",
      type: "",
      search: "",
      sortBy: "popular",
      sortOrder: "desc",
    })
    setCurrentPage(1)
  }, [])

  return {
    // Data
    properties: searchResult.properties,
    filteredProperties: searchResult.properties, // Alias for backward compatibility
    total: searchResult.total,
    totalResults: searchResult.total, // Alias for backward compatibility
    currentPage,
    totalPages: searchResult.totalPages,

    // State
    loading,
    error,
    usingFallback: searchResult.usingFallback,

    // Filters
    filters,
    updateFilters,
    resetFilters,

    // Actions
    searchProperties,
    goToPage,
  }
}
