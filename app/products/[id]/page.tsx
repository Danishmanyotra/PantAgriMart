import Link from "next/link"
import { ArrowLeft, Leaf, Truck, ShoppingCart, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/data"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="container py-10">
      <Link href="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <ProductImageGallery product={product} />

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              {product.isOrganic && <Badge className="bg-green-600 hover:bg-green-700">Organic</Badge>}
            </div>
            <p className="text-lg text-gray-500">by {product.farmer}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">₹{product.price.toFixed(2)}</p>
            <p className="text-gray-500">per {product.unit}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                  -
                </Button>
                <div className="flex h-8 w-12 items-center justify-center border-y">1</div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                  +
                </Button>
              </div>
              <p className="text-sm text-gray-500">{product.quantity} available</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
          </div>

          <div className="rounded-lg border p-4 space-y-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Delivery Information</h4>
                <p className="text-sm text-gray-500">Free delivery on orders over ₹500</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Freshness Guarantee</h4>
                <p className="text-sm text-gray-500">Harvested within 24 hours of delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
