import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FarmerProductList } from "@/components/farmer-product-list"
import { FarmerOrderList } from "@/components/farmer-order-list"

export default function FarmerDashboard() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
        <Link href="/farmer/products/new">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </Link>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <FarmerProductList />
          </TabsContent>
          <TabsContent value="orders" className="mt-6">
            <FarmerOrderList />
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <div className="rounded-lg border p-8 text-center">
              <h3 className="text-lg font-medium">Analytics Coming Soon</h3>
              <p className="text-gray-500">We're working on providing detailed analytics for your farm products.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
