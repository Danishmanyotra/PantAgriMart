import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    image: "/placeholder.svg?height=300&width=300",
    price: 2.99,
    unit: "kg",
    rating: 4.5,
    seller: "Green Valley Farm",
    organic: true,
  },
  {
    id: 2,
    name: "Fresh Apples",
    image: "/placeholder.svg?height=300&width=300",
    price: 3.49,
    unit: "kg",
    rating: 4.2,
    seller: "Sunny Orchard",
    organic: true,
  },
  {
    id: 3,
    name: "Premium Carrot Seeds",
    image: "/placeholder.svg?height=300&width=300",
    price: 1.99,
    unit: "packet",
    rating: 4.8,
    seller: "Seed Master",
    organic: false,
  },
  {
    id: 4,
    name: "Organic Fertilizer",
    image: "/placeholder.svg?height=300&width=300",
    price: 12.99,
    unit: "5kg bag",
    rating: 4.6,
    seller: "EcoGrow",
    organic: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Handpicked quality products from our trusted farmers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
              <Link href={`/products/${product.id}`} className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-lg group-hover:underline">{product.name}</h3>
                  </Link>
                  {product.organic && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Organic</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500">Sold by {product.seller}</p>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="font-bold text-lg">
                    ${product.price}
                    <span className="text-sm font-normal text-gray-500">/{product.unit}</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/products">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
