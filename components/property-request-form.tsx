"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SendHorizonal, CheckCircle, Home } from "lucide-react"
import type { Property } from "@/lib/types"

interface PropertyRequestFormProps {
  property: Property
  type: "buy" | "rent"
}

export default function PropertyRequestForm({ property, type }: PropertyRequestFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [budget, setBudget] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [message, setMessage] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the data to the server
    console.log({ name, phone, email, budget, timeframe, message, agreeToTerms })

    // Show success message
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setName("")
      setPhone("")
      setEmail("")
      setBudget("")
      setTimeframe("")
      setMessage("")
      setAgreeToTerms(false)
      setSubmitted(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <SendHorizonal className="h-5 w-5 text-blue-600" />
          Request to {type === "buy" ? "Buy" : "Rent"} Property
        </CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="text-center py-8">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Request Submitted!</h3>
            <p className="text-gray-600">
              Your request has been submitted successfully. Our team will review your request and contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Home className="h-4 w-4 text-blue-600" />
              <span>{property.title}</span>
              <span className="mx-1">•</span>
              <span className="font-semibold text-blue-600">{property.price}</span>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Budget</label>
                <Input
                  placeholder={type === "buy" ? "Enter your budget (BDT)" : "Enter monthly budget (BDT)"}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Timeframe</label>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you want to move?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="6months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Information</label>
              <Textarea
                placeholder="Any specific requirements or questions about the property?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-500 leading-tight">
                I agree to the terms and conditions of Property Connect. I understand that my information will be shared
                with the property owner or agent.
              </label>
            </div>

            <Button type="submit" className="w-full" disabled={!agreeToTerms}>
              Submit Request
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
