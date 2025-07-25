"use client"

import { useState } from "react"
import { Search, MapPin, Home, DollarSign, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useSearch } from "@/hooks/useSearch"

const locations = [
  { value: "kota-gorontalo", label: "🏙️ Kota Gorontalo", count: 15 },
  { value: "limboto", label: "🌾 Limboto", count: 8 },
  { value: "bone-bolango", label: "🏖️ Bone Bolango", count: 5 },
  { value: "gorontalo-utara", label: "⛰️ Gorontalo Utara", count: 3 },
  { value: "pohuwato", label: "🌴 Pohuwato", count: 2 },
  { value: "boalemo", label: "🏞️ Boalemo", count: 1 },
]

const kosTypes = [
  { value: "putri", label: "🌸 ANTIEQ Putri Residence", count: 12 },
  { value: "putra", label: "🏢 ANTIEQ Putra Elite", count: 18 },
  { value: "luxury", label: "👑 ANTIEQ Luxury Suites", count: 4 },
]

const priceRanges = [
  { value: "300k-500k", label: "💰 Rp 300rb - 500rb (Ekonomis)" },
  { value: "500k-800k", label: "💎 Rp 500rb - 800rb (Premium)" },
  { value: "800k-1.2jt", label: "👑 Rp 800rb - 1.2jt (Elite)" },
  { value: "1.2jt+", label: "🏆 Rp 1.2jt+ (Luxury)" },
]

export function SearchForm() {
  const { filters, searchQuery, updateFilter, setSearchQuery, clearFilters, totalResults, isLoading } = useSearch()
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const activeFiltersCount = [filters.location, filters.type, filters.priceRange].filter(Boolean).length

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Search Bar */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Cari kost impian Anda... (nama, lokasi, fasilitas)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2">
            <Select
              value={filters.location || "defaultLocation"}
              onValueChange={(value) => updateFilter("location", value)}
            >
              <SelectTrigger className="w-48 h-12">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Pilih Lokasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defaultLocation">Semua Lokasi</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    <div className="flex items-center justify-between w-full">
                      <span>{location.label}</span>
                      <Badge variant="secondary" className="ml-2">
                        {location.count}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.type || "defaultType"} onValueChange={(value) => updateFilter("type", value)}>
              <SelectTrigger className="w-48 h-12">
                <Home className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tipe Hunian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defaultType">Semua Tipe</SelectItem>
                {kosTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center justify-between w-full">
                      <span>{type.label}</span>
                      <Badge variant="secondary" className="ml-2">
                        {type.count}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Advanced Filters Toggle */}
            <Popover open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="h-12 px-4 relative bg-transparent">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filter
                  {activeFiltersCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Filter Lanjutan</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-red-500 hover:text-red-600"
                    >
                      Reset
                    </Button>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Range Harga
                    </label>
                    <Select
                      value={filters.priceRange || "defaultPriceRange"}
                      onValueChange={(value) => updateFilter("priceRange", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih range harga" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="defaultPriceRange">Semua Harga</SelectItem>
                        {priceRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort Options */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Urutkan Berdasarkan</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select
                        value={filters.sortBy || "defaultSortBy"}
                        onValueChange={(value) => updateFilter("sortBy", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="popular">Popularitas</SelectItem>
                          <SelectItem value="price">Harga</SelectItem>
                          <SelectItem value="rating">Rating</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={filters.sortOrder || "defaultSortOrder"}
                        onValueChange={(value) => updateFilter("sortOrder", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desc">Tertinggi</SelectItem>
                          <SelectItem value="asc">Terendah</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {filters.location && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {locations.find((l) => l.value === filters.location)?.label}
                <button
                  onClick={() => updateFilter("location", "")}
                  className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
            {filters.type && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                {kosTypes.find((t) => t.value === filters.type)?.label}
                <button onClick={() => updateFilter("type", "")} className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
                  ×
                </button>
              </Badge>
            )}
            {filters.priceRange && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                {priceRanges.find((p) => p.value === filters.priceRange)?.label}
                <button
                  onClick={() => updateFilter("priceRange", "")}
                  className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <span>Mencari hunian terbaik...</span>
            </div>
          ) : (
            <span>
              Ditemukan <strong>{totalResults}</strong> hunian yang sesuai
              {searchQuery && (
                <span>
                  {" "}
                  untuk "<strong>{searchQuery}</strong>"
                </span>
              )}
            </span>
          )}
        </div>
        {totalResults > 0 && (
          <div className="text-xs text-gray-500">
            Diurutkan berdasarkan{" "}
            {filters.sortBy === "popular" ? "popularitas" : filters.sortBy === "price" ? "harga" : "rating"}
          </div>
        )}
      </div>
    </div>
  )
}
