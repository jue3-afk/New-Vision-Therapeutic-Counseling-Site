import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookButtonProps {
  variant?: "default" | "outline" | "large"
  className?: string
}

export function BookButton({ variant = "default", className = "" }: BookButtonProps) {
  if (variant === "large") {
    return (
      <Link href="/booking">
        <Button size="lg" className={`gap-2 px-8 py-6 text-lg ${className}`}>
          <Calendar size={20} />
          Book Your Session
        </Button>
      </Link>
    )
  }

  if (variant === "outline") {
    return (
      <Link href="/booking">
        <Button variant="outline" className={`gap-2 ${className}`}>
          <Calendar size={18} />
          Book Now
        </Button>
      </Link>
    )
  }

  return (
    <Link href="/booking">
      <Button className={`gap-2 ${className}`}>
        <Calendar size={18} />
        Book Now
      </Button>
    </Link>
  )
}
