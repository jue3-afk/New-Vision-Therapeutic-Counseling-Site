import { BookButton } from "@/components/book-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check } from "lucide-react"

const services = [
  {
    title: "Individual Therapy",
    price: "$150",
    duration: "50 minutes",
    features: ["One-on-one sessions", "Personalized treatment plan", "Evidence-based approaches"],
  },
  {
    title: "Couples Therapy",
    price: "$180",
    duration: "60 minutes",
    features: ["Joint sessions", "Communication skills", "Relationship strengthening"],
  },
  {
    title: "Online Sessions",
    price: "$150",
    duration: "50 minutes",
    features: ["Secure video platform", "Same quality care", "Convenience of home"],
  },
]

export default function FeesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-wrap hero-wash mx-auto max-w-4xl px-6 py-12 text-center md:px-10">
            <p className="eyebrow">Clear and welcoming pricing</p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-balance">Fees</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Transparent pricing for our therapy services. We believe quality mental health care should be accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="soft-card flex flex-col bg-white/90">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription>{service.duration}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-semibold text-primary">{service.price}</span>
                    <span className="text-muted-foreground"> / session</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-accent-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4">
                    <BookButton variant="outline" className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="section-wrap section-wash">
            <CardContent className="pt-8 pb-8">
              <h2 className="mb-6 text-center text-2xl font-serif font-semibold text-foreground">
                Insurance & Payment
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Insurance:</strong> We are happy to provide superbills for
                  out-of-network reimbursement. Please check with your insurance provider about your out-of-network
                  mental health benefits.
                </p>
                <p>
                  <strong className="text-foreground">Payment:</strong> Payment is due at the time of service. We accept
                  credit cards, debit cards, and HSA/FSA cards through our secure SimplePractice portal.
                </p>
                <p>
                  <strong className="text-foreground">Cancellation Policy:</strong> Please provide at least 24 hours
                  notice for cancellations. Late cancellations or no-shows may be subject to the full session fee.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
