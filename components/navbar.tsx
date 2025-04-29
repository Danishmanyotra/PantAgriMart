"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Menu, User, ShoppingCart, Leaf } from 'lucide-react'
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  
  // This would be replaced with actual auth logic
  const userType = pathname.includes("/farmer") ? "farmer" : "buyer"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                >
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>AgriMart</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-2 pt-8">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-lg font-medium rounded-md hover:bg-accent",
                    pathname === "/" && "bg-accent"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-lg font-medium rounded-md hover:bg-accent",
                    pathname === "/products" && "bg-accent"
                  )}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-lg font-medium rounded-md hover:bg-accent",
                    pathname === "/about" && "bg-accent"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-lg font-medium rounded-md hover:bg-accent",
                    pathname === "/contact" && "bg-accent"
                  )}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>AgriMart</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/products" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              {userType === "buyer" && (
                <Link href="/buyer/cart">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Shopping cart</span>
                  </Button>
                </Link>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/${userType}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/${userType}/profile`}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden md:block">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
