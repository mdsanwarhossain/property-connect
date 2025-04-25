import { CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VerificationBadgeProps {
  verified: boolean
  date?: string
  size?: "sm" | "md" | "lg"
}

export default function VerificationBadge({ verified, date, size = "md" }: VerificationBadgeProps) {
  if (!verified) return null

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 text-green-600">
            <CheckCircle className={sizeClasses[size]} />
            <span className={size === "sm" ? "text-xs" : "text-sm"}>Verified</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            This property has been verified by our team
            {date ? ` on ${new Date(date).toLocaleDateString()}` : ""}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
