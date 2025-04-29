"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function ProductForm() {
  const [images, setImages] = useState<string[]>([])
  const [mainImage, setMainImage] = useState<number>(0)
  const [isOrganic, setIsOrganic] = useState(false)

  // Function to handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    // Convert FileList to array and process each file
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImages((prev) => [...prev, event.target!.result as string])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  // Function to remove an image
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
    if (mainImage === index) {
      setMainImage(0)
    } else if (mainImage > index) {
      setMainImage(mainImage - 1)
    }
  }

  // Function to set an image as the main image
  const setAsMainImage = (index: number) => {
    setMainImage(index)
  }

  return (
    <form className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="grains">Grains & Cereals</SelectItem>
                  <SelectItem value="dairy">Dairy Products</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="fertilizers">Fertilizers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subcategory">Subcategory</Label>
              <Select>
                <SelectTrigger id="subcategory">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leafy">Leafy Vegetables</SelectItem>
                  <SelectItem value="root">Root Vegetables</SelectItem>
                  <SelectItem value="seasonal">Seasonal Fruits</SelectItem>
                  <SelectItem value="exotic">Exotic Varieties</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your product in detail" className="min-h-[120px]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="price">Price (₹)</Label>
              <Input id="price" type="number" min="0" step="0.01" placeholder="0.00" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select>
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Kilogram (kg)</SelectItem>
                  <SelectItem value="g">Gram (g)</SelectItem>
                  <SelectItem value="piece">Piece</SelectItem>
                  <SelectItem value="dozen">Dozen</SelectItem>
                  <SelectItem value="l">Liter (L)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Available Quantity</Label>
              <Input id="quantity" type="number" min="0" placeholder="0" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="organic" checked={isOrganic} onCheckedChange={setIsOrganic} />
            <Label htmlFor="organic">This product is organic</Label>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="block mb-2">Product Images</Label>
            <p className="text-sm text-gray-500 mb-4">
              Upload high-quality images of your product. The first image will be used as the main display image.
            </p>

            <div className="grid gap-4">
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-green-50 p-2 text-green-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="font-medium">Upload product images</h3>
                    <p className="text-sm text-gray-500">Drag and drop images or click to browse</p>
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    id="image-upload"
                    onChange={handleImageUpload}
                  />
                  <Label
                    htmlFor="image-upload"
                    className="mt-4 cursor-pointer rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Select Images
                  </Label>
                </CardContent>
              </Card>

              {images.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Uploaded Images</h4>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`group relative aspect-square overflow-hidden rounded-md border ${
                          index === mainImage ? "ring-2 ring-green-600" : ""
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="flex gap-2">
                            {index !== mainImage && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 bg-white text-black hover:bg-white/90"
                                onClick={() => setAsMainImage(index)}
                              >
                                Set as Main
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 bg-white text-red-500 hover:bg-white/90 hover:text-red-600"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {index === mainImage && (
                          <div className="absolute bottom-1 right-1 rounded-full bg-green-600 px-2 py-1 text-xs text-white">
                            Main
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-green-600 hover:bg-green-700">Save Product</Button>
      </div>
    </form>
  )
}
