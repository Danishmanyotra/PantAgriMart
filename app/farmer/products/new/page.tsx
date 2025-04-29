import { ProductForm } from "@/components/product-form"

export default function NewProduct() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      <ProductForm />
    </div>
  )
}
