import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, Phone } from "lucide-react"

export default function SupportBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-full">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Need Help?</h3>
              <p className="text-gray-600">Our support team is available 24/7</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat Now
            </Button>
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
