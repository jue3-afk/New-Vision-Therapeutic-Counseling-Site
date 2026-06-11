import { User, Video } from "lucide-react"
import { BookButton } from "@/components/book-button"

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
              <div key={service.title} className="border-l-4 border-primary/30 pl-5">
                <service.icon className="mb-4 w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <BookButton variant="outline" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My apporach Banner */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-7 text-center">
          <h2 className="section-title">My Approach</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I believe in meeting each client where they are. Using evidence-based techniques including Cognitive
            Behavioral Therapy (CBT), mindfulness practices, and person-centered approaches, I tailor treatment to your
            unique needs and goals. Therapy is a collaborative process, and I&apos;m here to support you every step of
            the way.
          </p>
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
              <div key={index} className="border-l-4 border-primary/30 pl-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
