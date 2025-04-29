"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "grains", name: "Grains & Cereals" },
  { id: "dairy", name: "Dairy Products" },
  { id: "seeds", name: "Seeds" },
  { id: "fertilizers", name: "Fertilizers" },
  { id: "organic", name: "Organic" },
]

export function CategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md border px-3 py-1">
            <p className="text-xs text-gray-500">Min</p>
            <input type="number" className="w-full border-0 p-0 focus:outline-none focus:ring-0" placeholder="0" />
          </div>
          <div className="rounded-md border px-3 py-1">
            <p className="text-xs text-gray-500">Max</p>
            <input type="number" className="w-full border-0 p-0 focus:outline-none focus:ring-0" placeholder="1000" />
          </div>
        </div>
      </div>
    </div>
  )
}
