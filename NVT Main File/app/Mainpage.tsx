import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BookButton } from "@/components/book-button"
import { siteContent } from "@/lib/site-content"

const services = [
  {
    title: "Anxiety",
    description: "Learn to manage worry and find calm in everyday life.",
  },
  {
    title: "Depression",
    description: "Rediscover hope and reconnect with what matters most.",
  },
  {
    title: "Life Transitions",
    description: "Navigate change with support and clarity.",
  },
]

// URL link
const SIMPLE_PRACTICE_URL =
  "https://care.headway.co/providers/deborah-ejiofor?utm_source=pem&utm_medium=direct_link&utm_campaign=78094"

export default function MainPage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
              <p className="eyebrow">{siteContent.homeIntro.eyebrow}</p>
              <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-serif font-semibold leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                {siteContent.homeIntro.title}
              </h1>
              <div className="mx-auto mt-6 max-w-4xl space-y-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                {siteContent.homeIntro.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Services button */}
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <BookButton variant="large" />
                <Link
                  href="/therapy"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 px-8 py-3 text-lg text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Services
                </Link>
              </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl border-l-4 border-primary/40 pl-6">
            <h2 className="mb-4 text-2xl font-serif font-semibold text-foreground">Therapy</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Whether you&apos;re facing anxiety, depression, relationship challenges, or life transitions, I provide a
              safe space for adults to explore their feelings and develop coping strategies.
            </p>
            <Link
              href="/therapy"
              className="inline-flex items-center font-medium text-primary underline-offset-4 hover:underline"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="section-title">Areas of Focus</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Specialized support for the challenges you&apos;re facing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="border-l-4 border-primary/30 pl-5">
                <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/therapy" className="inline-flex items-center font-medium text-primary underline-offset-4 hover:underline">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title">My Approach</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I believe in meeting each client where they are. Using evidence-based techniques including Cognitive
            Behavioral Therapy (CBT), mindfulness practices, and person-centered approaches, I tailor treatment to your
            unique needs and goals. Therapy is a collaborative process, and I&apos;m here to support you every step of
            the way.
          </p>
        </div>
      </section>

      <section className="py-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground md:text-4xl">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your journey to wellness begins with a single conversation. Reach out today to schedule your first session.
          </p>
          <div className="mt-8">
            <Link
              href={SIMPLE_PRACTICE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
