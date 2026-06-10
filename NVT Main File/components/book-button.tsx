import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const SIMPLE_PRACTICE_URL =
  "https://care.headway.co/providers/deborah-ejiofor?utm_source=pem&utm_medium=direct_link&utm_campaign=78094"

interface BookButtonProps {
  variant?: "default" | "outline" | "large"
  className?: string
}

export function BookButton({ variant = "default", className = "" }: BookButtonProps) {
  if (variant === "large") {
    return (
      <Link href={SIMPLE_PRACTICE_URL} target="_blank" rel="noreferrer">
        <Button size="lg" className={`gap-2 px-8 py-6 text-lg ${className}`}>
          <Calendar size={20} />
          Book Your Session
        </Button>
      </Link>
    )
  }

  if (variant === "outline") {
    return (
      <Link href={SIMPLE_PRACTICE_URL} target="_blank" rel="noreferrer">
        <Button variant="outline" className={`gap-2 ${className}`}>
          <Calendar size={18} />
          Book Now
        </Button>
      </Link>
    )
  }

  return (
    <Link href={SIMPLE_PRACTICE_URL} target="_blank" rel="noreferrer">
      <Button className={`gap-2 ${className}`}>
        <Calendar size={18} />
        Book Now
      </Button>
    </Link>
  )
}
