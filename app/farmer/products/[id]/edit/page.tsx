import { ProductForm } from "@/components/product-form"
import { products } from "@/lib/data"

interface EditProductPageProps {
  params: {
    id: string
  }
}

export default function EditProduct({ params }: EditProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>
      <ProductForm />
    </div>
  )
}
