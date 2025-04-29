export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string
  quantity: number
  category: string
  subcategory?: string
  farmer: string
  imageUrl: string
  additionalImages?: string[]
  isOrganic: boolean
  dateAdded: string
}
