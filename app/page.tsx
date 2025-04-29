import Link from "next/link"
import { ArrowRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { CategoryFilter } from "@/components/category-filter"
import { products } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl md:text-2xl text-green-600">PantAgriMart</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#" className="flex items-center text-lg font-medium transition-colors hover:text-green-600">
                Products
              </Link>
              <Link href="#" className="flex items-center text-lg font-medium transition-colors hover:text-green-600">
                Categories
              </Link>
              <Link href="#" className="flex items-center text-lg font-medium transition-colors hover:text-green-600">
                About
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0 md:w-80">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[300px]"
                />
              </div>
            </div>
            <nav className="flex gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                  Register
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Fresh Farm Products Direct to You
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Connect with local farmers and buy fresh, organic produce at the best prices.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/products">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/farmer/register">
                  <Button variant="outline">Sell Your Produce</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="md:w-1/4">
                <div className="sticky top-24 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Filter className="h-4 w-4" />
                  </div>
                  <CategoryFilter />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
                  <div className="flex items-center gap-2">
                    <select className="rounded-md border px-2 py-1 text-sm">
                      <option>Sort by: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-50 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2023 PantAgriMart. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-green-600">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-green-600">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
