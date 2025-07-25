"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Save, X, Home, LogIn } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<Property>>({
    name: "",
    location: "",
    price: 0,
    original_price: 0,
    rating: 0,
    reviews_count: 0,
    image_url: "",
    images: [],
    facilities: [],
    available_rooms: 0,
    discount_percentage: 0,
    is_popular: false,
    story: "",
    description: "",
    type: "putri",
    amenities: [],
    rules: [],
    contact_phone: "",
    contact_whatsapp: "",
    contact_email: "",
    is_active: true,
  })

  useEffect(() => {
    if (isAuthenticated) {
      fetchProperties()
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")

    // Demo credentials
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true)
      setLoginError("")
    } else {
      setLoginError("Username atau password salah")
    }
  }

  const fetchProperties = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/properties")
      const data = await response.json()
      setProperties(data.properties || [])
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const url = editingProperty ? `/api/properties/${editingProperty.id}` : "/api/properties"
      const method = editingProperty ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await fetchProperties()
        setIsDialogOpen(false)
        resetForm()
      }
    } catch (error) {
      console.error("Error saving property:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus properti ini?")) return

    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchProperties()
      }
    } catch (error) {
      console.error("Error deleting property:", error)
    }
  }

  const handleEdit = (property: Property) => {
    setEditingProperty(property)
    setFormData({
      ...property,
      facilities: property.facilities || [],
      amenities: property.amenities || [],
      rules: property.rules || [],
      images: property.images || [],
    })
    setIsDialogOpen(true)
  }

  const resetForm = () => {
    setEditingProperty(null)
    setFormData({
      name: "",
      location: "",
      price: 0,
      original_price: 0,
      rating: 0,
      reviews_count: 0,
      image_url: "",
      images: [],
      facilities: [],
      available_rooms: 0,
      discount_percentage: 0,
      is_popular: false,
      story: "",
      description: "",
      type: "putri",
      amenities: [],
      rules: [],
      contact_phone: "",
      contact_whatsapp: "",
      contact_email: "",
      is_active: true,
    })
  }

  const handleArrayInput = (field: keyof Property, value: string) => {
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
    setFormData((prev) => ({ ...prev, [field]: array }))
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">ANTIEQ WISMA KOST</div>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">Admin Panel</CardTitle>
            <p className="text-gray-600">Login untuk mengelola konten website</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
              <Button type="submit" className="w-full">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-800 mb-2">Demo Login:</p>
              <p className="text-sm text-blue-600">Username: admin</p>
              <p className="text-sm text-blue-600">Password: admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ANTIEQ WISMA KOST</h1>
                <p className="text-sm text-gray-600">Admin Panel</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
              className="text-red-600 hover:text-red-700"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Kelola Properti</h2>
            <p className="text-gray-600">Tambah, edit, dan hapus properti kost</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Properti
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProperty ? "Edit Properti" : "Tambah Properti Baru"}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Properti</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Nama properti"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="Lokasi properti"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="price">Harga</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData((prev) => ({ ...prev, price: Number(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="original_price">Harga Asli</Label>
                      <Input
                        id="original_price"
                        type="number"
                        value={formData.original_price}
                        onChange={(e) => setFormData((prev) => ({ ...prev, original_price: Number(e.target.value) }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        type="number"
                        step="0.1"
                        max="5"
                        value={formData.rating}
                        onChange={(e) => setFormData((prev) => ({ ...prev, rating: Number(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="reviews_count">Jumlah Review</Label>
                      <Input
                        id="reviews_count"
                        type="number"
                        value={formData.reviews_count}
                        onChange={(e) => setFormData((prev) => ({ ...prev, reviews_count: Number(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="available_rooms">Kamar Tersedia</Label>
                      <Input
                        id="available_rooms"
                        type="number"
                        value={formData.available_rooms}
                        onChange={(e) => setFormData((prev) => ({ ...prev, available_rooms: Number(e.target.value) }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="type">Tipe</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: any) => setFormData((prev) => ({ ...prev, type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="putri">Putri</SelectItem>
                        <SelectItem value="putra">Putra</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="image_url">URL Gambar Utama</Label>
                    <Input
                      id="image_url"
                      value={formData.image_url}
                      onChange={(e) => setFormData((prev) => ({ ...prev, image_url: e.target.value }))}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="images">Gambar Lainnya (pisahkan dengan koma)</Label>
                    <Textarea
                      id="images"
                      value={formData.images?.join(", ")}
                      onChange={(e) => handleArrayInput("images", e.target.value)}
                      placeholder="url1.jpg, url2.jpg, url3.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Deskripsi properti"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="story">Cerita</Label>
                    <Textarea
                      id="story"
                      value={formData.story || ""}
                      onChange={(e) => setFormData((prev) => ({ ...prev, story: e.target.value }))}
                      placeholder="Cerita tentang properti"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="facilities">Fasilitas (pisahkan dengan koma)</Label>
                    <Textarea
                      id="facilities"
                      value={formData.facilities?.join(", ")}
                      onChange={(e) => handleArrayInput("facilities", e.target.value)}
                      placeholder="WiFi, AC, Kamar Mandi Dalam"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="amenities">Amenitas (pisahkan dengan koma)</Label>
                    <Textarea
                      id="amenities"
                      value={formData.amenities?.join(", ")}
                      onChange={(e) => handleArrayInput("amenities", e.target.value)}
                      placeholder="WiFi 24 Jam, AC Split, Lemari"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="rules">Peraturan (pisahkan dengan koma)</Label>
                    <Textarea
                      id="rules"
                      value={formData.rules?.join(", ")}
                      onChange={(e) => handleArrayInput("rules", e.target.value)}
                      placeholder="Tidak boleh merokok, Jam malam 22:00"
                      rows={2}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <Label htmlFor="contact_phone">Telepon</Label>
                      <Input
                        id="contact_phone"
                        value={formData.contact_phone || ""}
                        onChange={(e) => setFormData((prev) => ({ ...prev, contact_phone: e.target.value }))}
                        placeholder="+62812345678"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact_whatsapp">WhatsApp</Label>
                      <Input
                        id="contact_whatsapp"
                        value={formData.contact_whatsapp || ""}
                        onChange={(e) => setFormData((prev) => ({ ...prev, contact_whatsapp: e.target.value }))}
                        placeholder="+62812345678"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact_email">Email</Label>
                      <Input
                        id="contact_email"
                        value={formData.contact_email || ""}
                        onChange={(e) => setFormData((prev) => ({ ...prev, contact_email: e.target.value }))}
                        placeholder="contact@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.is_popular}
                        onChange={(e) => setFormData((prev) => ({ ...prev, is_popular: e.target.checked }))}
                      />
                      <span>Popular</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) => setFormData((prev) => ({ ...prev, is_active: e.target.checked }))}
                      />
                      <span>Aktif</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Batal
                </Button>
                <Button onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Simpan
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Properti</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.name}</TableCell>
                      <TableCell>{property.location}</TableCell>
                      <TableCell>{formatCurrency(property.price)}</TableCell>
                      <TableCell>
                        <Badge variant={property.type === "luxury" ? "default" : "secondary"}>{property.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          {property.is_active && <Badge className="bg-green-100 text-green-800">Aktif</Badge>}
                          {property.is_popular && <Badge className="bg-yellow-100 text-yellow-800">Popular</Badge>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(property)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDelete(property.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
