"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const userType = searchParams.get("type") || "buyer"
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault()
    console.log("Login submitted:", { ...formData, type })
    
    // Simulate successful login and redirect
    if (type === "farmer") {
      router.push("/farmer/dashboard")
    } else {
      router.push("/buyer/dashboard")
    }
  }

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>

        <Tabs defaultValue={userType} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buyer">Buyer</TabsTrigger>
            <TabsTrigger value="farmer">Farmer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buyer">
            <Card>
              <CardHeader>
                <CardTitle>Buyer Login</CardTitle>
                <CardDescription>
                  Access your buyer account to shop for fresh produce
                </CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "buyer")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/forgot-password" className="text-xs text-green-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Sign In
                  </Button>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register?type=buyer" className="text-green-600 hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="farmer">
            <Card>
              <CardHeader>
                <CardTitle>Farmer Login</CardTitle>
                <CardDescription>
                  Access your farmer account to manage your products
                </CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "farmer")}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-email">Email</Label>
                    <Input 
                      id="farmer-email" 
                      name="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="farmer-password">Password</Label>
                      <Link href="/forgot-password" className="text-xs text-green-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="farmer-password" 
                      name="password" 
                      type="password" 
                      value={formData.password}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Sign In
                  </Button>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register?type=farmer" className="text-green-600 hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
