import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: "Vegetables",
    image: "/placeholder.svg?height=200&width=200",
    description: "Fresh, seasonal vegetables from local farms",
    link: "/products?category=vegetables"
  },
  {
    name: "Fruits",
    image: "/placeholder.svg?height=200&width=200",
    description: "Juicy, ripe fruits harvested at peak freshness",
    link: "/products?category=fruits"
  },
  {
    name: "Seeds",
    image: "/placeholder.svg?height=200&width=200",
    description: "High-quality seeds for your garden or farm",
    link: "/products?category=seeds"
  },
  {
    name: "Fertilizers",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic and chemical fertilizers for better yields",
    link: "/products?category=fertilizers"
  }
]

export default function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse by Category</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our wide range of agricultural products
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.link}
              className="group flex flex-col items-center rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="mt-2 text-center text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
