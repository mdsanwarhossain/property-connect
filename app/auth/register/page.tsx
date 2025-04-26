"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RoleSelection from "@/components/role-selection"
import Image from "next/image"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("account")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleRoleSelect = (role: string) => {
    setFormData((prev) => ({ ...prev, role }))
    if (errors["role"]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors["role"]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (activeTab === "role" && !formData.role) {
      newErrors.role = "Please select a role"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (activeTab === "account") {
      if (validateForm()) {
        setActiveTab("role")
      }
    } else if (activeTab === "role") {
      if (validateForm()) {
        // In a real application, this would send the data to an API
        console.log("Registration data:", formData)

        // Redirect to the dashboard based on role
        router.push(`/dashboard/${formData.role.toLowerCase()}`)
      }
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Link href="/" className="flex items-center mb-6 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:flex flex-col justify-center">
            <div className="relative w-full h-[450px]">
              <Image
                src="/placeholder.svg?height=450&width=400"
                alt="Registration illustration"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Property Connect</h2>
              <p className="text-gray-600">
                Find, buy, sell, and rent properties with ease. Our platform connects you with verified properties and
                trustworthy partners.
              </p>
            </div>
          </div>

          <Card className="w-full shadow-lg border-0">
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>
                Sign up to access our property services and connect with verified users.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="px-6">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="account">Account Info</TabsTrigger>
                    <TabsTrigger value="role">Select Role</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="account">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+880 1234 567890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleChange}
                          className={errors.password ? "border-red-500" : ""}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? "border-red-500" : ""}
                      />
                      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => router.push("/auth/login")}>
                      Already have an account?
                    </Button>
                    <Button type="submit">Next</Button>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="role">
                  <CardContent>
                    <RoleSelection selectedRole={formData.role} onSelectRole={handleRoleSelect} />
                    {errors.role && <p className="text-red-500 text-sm mt-2">{errors.role}</p>}
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("account")}>
                      Back
                    </Button>
                    <Button type="submit">Create Account</Button>
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
