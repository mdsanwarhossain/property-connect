"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Mic, Calendar, MapPin, Home } from "lucide-react"

interface Message {
  id: number
  role: "assistant" | "user"
  content: string
  timestamp: string
}

export default function VirtualPropertyAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your virtual property assistant. How can I help you today? You can ask me about properties, schedule visits, or get information about the buying/renting process.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)
    setShowSuggestions(false)

    // Simulate assistant response
    setTimeout(() => {
      let response = ""

      // Simple pattern matching for demo purposes
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes("schedule") || lowerInput.includes("visit") || lowerInput.includes("appointment")) {
        response =
          "I'd be happy to help you schedule a property visit! Please let me know which property you're interested in and your preferred date and time. Alternatively, I can check the agent's availability for you."
      } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("budget")) {
        response =
          "Property prices vary based on location, size, and amenities. Our listings range from 25,000 BDT/month for apartments to 150,000 BDT/month for luxury villas. What's your budget range so I can recommend suitable properties?"
      } else if (
        lowerInput.includes("document") ||
        lowerInput.includes("verification") ||
        lowerInput.includes("legal")
      ) {
        response =
          "For property transactions, you'll need documents like ownership deeds, tax clearance certificates, and mutation papers. Our legal team can help verify these documents and ensure a smooth process. Would you like me to connect you with a legal advisor?"
      } else if (lowerInput.includes("location") || lowerInput.includes("area") || lowerInput.includes("where")) {
        response =
          "We have properties available in popular areas like Dhanmondi, Gulshan, Banani, Uttara, and Purbachal. Each area has its own advantages in terms of connectivity, amenities, and lifestyle. Which area are you most interested in?"
      } else {
        response =
          "Thank you for your message. I'd be happy to help with your property needs. Could you provide more details about what you're looking for? For example, are you interested in buying or renting, and what type of property are you considering?"
      }

      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
  }

  return (
    <Card className="w-full h-[500px] flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-medium">Property Assistant</span>
          </div>
          <Badge className="bg-green-500">Online</Badge>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Assistant" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div
                  className={`text-xs mt-1 flex justify-end ${
                    message.role === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Assistant" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              <SuggestionChip
                text="How do I schedule a property visit?"
                icon={<Calendar className="h-3 w-3" />}
                onClick={() => handleSuggestionClick("How do I schedule a property visit?")}
              />
              <SuggestionChip
                text="What documents do I need for verification?"
                icon={<FileText className="h-3 w-3" />}
                onClick={() => handleSuggestionClick("What documents do I need for verification?")}
              />
              <SuggestionChip
                text="Which areas have the best properties?"
                icon={<MapPin className="h-3 w-3" />}
                onClick={() => handleSuggestionClick("Which areas have the best properties?")}
              />
              <SuggestionChip
                text="What's the price range for apartments?"
                icon={<Home className="h-3 w-3" />}
                onClick={() => handleSuggestionClick("What's the price range for apartments?")}
              />
            </div>
          </div>
        )}

        <div className="p-3 border-t flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Mic className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="rounded-full"
          />
          <Button onClick={handleSendMessage} disabled={!input.trim()} size="icon" className="rounded-full h-8 w-8">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function SuggestionChip({
  text,
  icon,
  onClick,
}: {
  text: string
  icon: React.ReactNode
  onClick: () => void
}) {
  return (
    <Button variant="outline" size="sm" className="rounded-full text-xs py-1 h-auto" onClick={onClick}>
      {icon}
      <span className="ml-1">{text}</span>
    </Button>
  )
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}
