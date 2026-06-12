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

const approachValues = [
  {
    title: "Evidence-Based",
    description:
      "Our methods are grounded in proven therapeutic approaches including CBT, mindfulness practices, and person-centered therapy.",
  },
  {
    title: "Client-Centered",
    description:
      "You are the expert on your own life. We guide and support, but ultimately empower you to find your own path to wellness.",
  },
  {
    title: "Compassionate Care",
    description:
      "We approach every session with genuine understanding. Your experiences are valid, and your feelings matter.",
  },
  {
    title: "Inclusive Space",
    description:
      "Everyone deserves quality mental health care. We welcome clients of all backgrounds, identities, and experiences.",
  },
]

const serviceDetails = [
  {
    title: "Client focus",
    description: [
      "Age Specialty: Adult, Senior, Young Adult.",
      "Demographic Experience: Black / African American / Latino, Men, Women clients.",
      "Language: English.",
    ],
  },
  {
    title: "Treatment Apporoach",
    description: [
      "Acceptance & Commitment Therapy (ACT)",
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Cognitive Therapy (MBCT)",
      "Psychodynamic Therapy",
      "Psychoeducational Therapy",
      "Solution-Focused Brief Therapy (SFBT)",
    ]
  }
]

const fees=[
  {
    title: "Fees & Insurance",
    description: ["Fees",
      "*Average Session Fee 120",
      "Insurance",
      "Accepts Insurance: Aetna, Anthem, Cigna and Evernorth, Horizon Blue Cross and Blue Shield",
      "Merltain Health, Oxfrd, United Healthcare|UHC|UBH",

    ]
  }
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
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">Our Approach</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at New Vision Counseling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachValues.map((value) => (
              <div key={value.title} className="border-l-4 border-primary/30 pl-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm shadow-black/5">
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

      {/* Services Section */}
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

      {/* Service Details */}
      <section className="py-8 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Service Details</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceDetails.map((detail) => (
              <div key={detail.title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm shadow-black/5">
                <h3 className="text-xl font-semibold text-foreground">{detail.title}</h3>
                <div className="mt-4 text-muted-foreground space-y-2">
                  {detail.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {fees.map((fee) => (
              <div key={fee.title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm shadow-black/5">
                <h3 className="text-xl font-semibold text-foreground">{fee.title}</h3>
                <div className="mt-4 text-muted-foreground space-y-2">
                  {fee.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
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
