import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Fresh Organic Tomatoes",
    description:
      "Vine-ripened organic tomatoes grown without pesticides. These juicy, flavorful tomatoes are perfect for salads, sauces, or eating fresh. Harvested at peak ripeness for maximum flavor and nutritional value.",
    price: 60,
    unit: "kg",
    quantity: 50,
    category: "Vegetables",
    subcategory: "Fruits & Vegetables",
    farmer: "Green Valley Farms",
    imageUrl: "/placeholder.svg?height=400&width=400",
    additionalImages: [
      "/placeholder.svg?height=400&width=400&text=Tomato+Close+Up",
      "/placeholder.svg?height=400&width=400&text=Tomato+Bunch",
      "/placeholder.svg?height=400&width=400&text=Tomato+Plant",
    ],
    isOrganic: true,
    dateAdded: "2023-05-10",
  },
  {
    id: "prod-002",
    name: "Premium Basmati Rice",
    description:
      "Long-grain aromatic basmati rice grown in the foothills of the Himalayas. Known for its distinctive fragrance and fluffy texture when cooked. Perfect for biryanis, pulaos, and other rice dishes.",
    price: 120,
    unit: "kg",
    quantity: 100,
    category: "Grains",
    subcategory: "Rice",
    farmer: "Himalayan Harvest Co.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Basmati+Rice",
    isOrganic: false,
    dateAdded: "2023-05-12",
  },
  {
    id: "prod-003",
    name: "Organic Spinach Bunch",
    description:
      "Fresh, crisp organic spinach leaves packed with nutrients. This versatile leafy green is perfect for salads, smoothies, or cooking. Grown using sustainable farming practices.",
    price: 40,
    unit: "bunch",
    quantity: 30,
    category: "Vegetables",
    subcategory: "Leafy Greens",
    farmer: "Green Valley Farms",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Spinach",
    additionalImages: [
      "/placeholder.svg?height=400&width=400&text=Spinach+Leaves",
      "/placeholder.svg?height=400&width=400&text=Spinach+Field",
    ],
    isOrganic: true,
    dateAdded: "2023-05-11",
  },
  {
    id: "prod-004",
    name: "Farm Fresh Eggs",
    description:
      "Free-range eggs from hens raised on natural feed without antibiotics. These eggs have rich, golden yolks and exceptional flavor. Packed with protein and essential nutrients.",
    price: 90,
    unit: "dozen",
    quantity: 40,
    category: "Dairy",
    subcategory: "Eggs",
    farmer: "Happy Hen Farms",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Fresh+Eggs",
    isOrganic: false,
    dateAdded: "2023-05-13",
  },
  {
    id: "prod-005",
    name: "Alphonso Mangoes",
    description:
      "Premium Alphonso mangoes known for their rich, creamy texture and distinctive sweet flavor. These seasonal delights are harvested at the perfect ripeness for maximum sweetness.",
    price: 350,
    unit: "kg",
    quantity: 25,
    category: "Fruits",
    subcategory: "Seasonal Fruits",
    farmer: "Konkan Fruit Orchards",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Alphonso+Mangoes",
    additionalImages: [
      "/placeholder.svg?height=400&width=400&text=Mango+Close+Up",
      "/placeholder.svg?height=400&width=400&text=Mango+Box",
    ],
    isOrganic: false,
    dateAdded: "2023-05-14",
  },
  {
    id: "prod-006",
    name: "Organic Turmeric Powder",
    description:
      "Freshly ground organic turmeric with high curcumin content. This vibrant yellow spice adds flavor and color to dishes while offering numerous health benefits.",
    price: 180,
    unit: "500g",
    quantity: 60,
    category: "Spices",
    subcategory: "Ground Spices",
    farmer: "Spice Haven Collective",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Turmeric+Powder",
    isOrganic: true,
    dateAdded: "2023-05-15",
  },
  {
    id: "prod-007",
    name: "Fresh Paneer",
    description:
      "Homemade fresh paneer made from pure cow's milk. This soft, unaged cheese is perfect for curries, grilling, or adding to vegetable dishes. Rich in protein and calcium.",
    price: 280,
    unit: "kg",
    quantity: 15,
    category: "Dairy",
    subcategory: "Cheese",
    farmer: "Pure Dairy Farm",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Fresh+Paneer",
    isOrganic: false,
    dateAdded: "2023-05-16",
  },
  {
    id: "prod-008",
    name: "Organic Honey",
    description:
      "Raw, unfiltered organic honey collected from wildflower meadows. This golden nectar has a complex flavor profile and is packed with natural enzymes and antioxidants.",
    price: 450,
    unit: "liter",
    quantity: 20,
    category: "Sweeteners",
    subcategory: "Natural Sweeteners",
    farmer: "Bee Happy Apiaries",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Organic+Honey",
    additionalImages: [
      "/placeholder.svg?height=400&width=400&text=Honey+Jar",
      "/placeholder.svg?height=400&width=400&text=Honeycomb",
    ],
    isOrganic: true,
    dateAdded: "2023-05-17",
  },
]
