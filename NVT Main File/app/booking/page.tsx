import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// TODO: Replace with your SimplePractice booking URL
const SIMPLE_PRACTICE_URL = "https://clients.simplepractice.com"

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="section-wrap hero-wash">
            <CardContent className="pt-12 pb-12 text-center">
              <p className="eyebrow">Simple, secure scheduling</p>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Online Booking</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                You can book appointments through our secure SimplePractice portal. Schedule your session at a time that
                works best for you.
              </p>
              <div className="mt-8">
                <Link
                  href={SIMPLE_PRACTICE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-[0_14px_30px_rgba(15,39,92,0.24)] transition-colors hover:bg-primary/90"
                >
                  Open Booking Portal
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                You will be redirected to SimplePractice, our secure scheduling platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
