"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Scale, Send, Paperclip, Clock, Phone, Video } from "lucide-react"

interface Message {
  id: number
  sender: "user" | "lawyer"
  text: string
  timestamp: string
  read: boolean
}

interface LawyerChatProps {
  lawyerId: number
  lawyerName: string
  lawyerImage: string
  lawyerSpecialization: string
}

export default function LawyerChat({ lawyerId, lawyerName, lawyerImage, lawyerSpecialization }: LawyerChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "lawyer",
      text: "Hello! How can I assist you with your property-related legal questions today?",
      timestamp: "10:30 AM",
      read: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: true,
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate lawyer response after a delay
    setTimeout(() => {
      const lawyerResponse: Message = {
        id: messages.length + 2,
        sender: "lawyer",
        text: "Thank you for your message. I'll review your question and get back to you shortly. For property document verification, please make sure to have all the necessary documents ready.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      }
      setMessages((prevMessages) => [...prevMessages, lawyerResponse])
    }, 2000)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={lawyerImage || "/placeholder.svg"} alt={lawyerName} />
              <AvatarFallback>{lawyerName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{lawyerName}</CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <Scale className="h-3 w-3 mr-1" />
                <span>{lawyerSpecialization}</span>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-0">
        <div className="p-4 space-y-4 h-[400px] overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              {message.sender === "lawyer" && (
                <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                  <AvatarImage src={lawyerImage || "/placeholder.svg"} alt={lawyerName} />
                  <AvatarFallback>{lawyerName.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                <p>{message.text}</p>
                <div
                  className={`text-xs mt-1 flex justify-end items-center ${
                    message.sender === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  <span>{message.timestamp}</span>
                  {message.sender === "user" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full flex-shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="rounded-full"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="h-10 w-10 rounded-full p-0 flex-shrink-0"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex items-center justify-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>Typical response time: 30 minutes</span>
        </div>
      </div>
    </Card>
  )
}
