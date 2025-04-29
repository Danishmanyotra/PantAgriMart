import Image from "next/image"
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Farmer",
    image: "/placeholder.svg?height=100&width=100",
    content: "AgriMart has transformed my business. I can now sell directly to customers and get better prices for my produce. The platform is easy to use and has helped me expand my customer base.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Buyer",
    image: "/placeholder.svg?height=100&width=100",
    content: "I love buying fresh produce from AgriMart. The quality is exceptional, and I feel good knowing I'm supporting local farmers. The delivery is always prompt and the prices are reasonable.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Farmer",
    image: "/placeholder.svg?height=100&width=100",
    content: "As a small-scale organic farmer, AgriMart has been a game-changer. I can now reach customers who specifically want organic produce, and the platform handles all the logistics.",
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of farmers and buyers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1">
                <p className="text-gray-600">{testimonial.content}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
