import { User, Video } from "lucide-react"
import { BookButton } from "@/components/book-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    description:
      "One-on-one sessions focused on your unique needs, goals, and challenges. Together, we'll explore patterns, develop coping strategies, and work toward meaningful change.",
  },
  
  {
    icon: Video,
    title: "Online Sessions",
    description:
      "Convenient and secure telehealth sessions from the comfort of your home. Video therapy is just as effective as in-person sessions for many concerns.",
  },
]

const faqs = [
  {
    question: "What can I expect in my first session?",
    answer:
      "Your first session is a time for us to get to know each other. We'll discuss what brought you to therapy, your history, and your goals. It's also an opportunity for you to ask questions and see if we're a good fit.",
  },
  {
    question: "How long does therapy typically take?",
    answer:
      "The length of therapy varies greatly depending on your goals and needs. Some clients find relief in 8-12 sessions, while others benefit from longer-term support. We'll regularly check in about your progress and adjust as needed.",
  },
  {
    question: "Do you offer telehealth sessions?",
    answer:
      "Yes! We offer secure video sessions for clients who prefer the convenience of therapy from home. Telehealth is just as effective as in-person therapy for many concerns.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-balance">Services</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We offer a range of therapeutic services tailored to meet you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card border-border hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-4">
                  <BookButton variant="outline" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-primary-foreground/90 leading-relaxed">
            Book an appointment through our secure SimplePractice portal.
          </p>
          <div className="mt-6">
            <BookButton variant="large" className="bg-background text-primary hover:bg-background/90" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
