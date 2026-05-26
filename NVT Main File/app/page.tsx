import Image from "next/image"
import Link from "next/link"
import { Heart, Brain, ArrowRight } from "lucide-react"
import { BookButton } from "@/components/book-button"
import { Card, CardContent } from "@/components/ui/card"
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-wrap hero-wash px-6 py-12 md:px-10 md:py-16">
            <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_70%)] md:block" />
            <div className="relative flex flex-col items-center gap-12 md:flex-row">
              <div className="flex-1 text-center md:text-left">
                <p className="eyebrow">{siteContent.homeIntro.eyebrow}</p>
                <h1 className="mt-4 text-4xl font-serif font-semibold leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
                  {siteContent.homeIntro.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg text-primary md:text-xl">{siteContent.homeIntro.lead}</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {siteContent.homeIntro.body[0]}
                </p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {siteContent.homeIntro.body[1]}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                  <BookButton variant="large" />
                  <Link
                    href="/therapy"
                    className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-background/70 px-8 py-3 text-lg text-primary shadow-[0_10px_24px_rgba(29,57,103,0.06)] transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_28px_60px_rgba(29,57,103,0.18)]">
                  <Image
                    src="/NEWV_DEB_PIC.jpg"
                    alt={`${siteContent.therapistName} portrait`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card className="soft-card transition-transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-serif font-semibold text-foreground">Therapy for Adults</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Whether you&apos;re facing anxiety, depression, relationship challenges, or life transitions, I
                  provide a safe space for adults to explore their feelings and develop coping strategies.
                </p>
                <Link
                  href="/therapy"
                  className="inline-flex items-center font-medium text-primary underline-offset-4 hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="soft-card transition-transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <Brain className="h-7 w-7 text-accent-foreground" />
                </div>
                <h2 className="mb-4 text-2xl font-serif font-semibold text-foreground">Therapy for Teens</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Adolescence can be challenging. I help teens navigate school stress, social pressures, identity
                  questions, and mental health concerns in a supportive, judgment-free environment.
                </p>
                <Link
                  href="/therapy"
                  className="inline-flex items-center font-medium text-primary underline-offset-4 hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-wrap section-wash px-6 py-12 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="section-title">Areas of Focus</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Specialized support for the challenges you&apos;re facing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="soft-card bg-white/90 transition-transform hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/therapy" className="inline-flex items-center font-medium text-primary underline-offset-4 hover:underline">
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-wrap section-wash px-6 py-12 md:px-10">
            <h2 className="section-title">My Approach</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I believe in meeting each client where they are. Using evidence-based techniques including Cognitive
              Behavioral Therapy (CBT), mindfulness practices, and person-centered approaches, I tailor treatment to your
              unique needs and goals. Therapy is a collaborative process, and I&apos;m here to support you every step of
              the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="cta-band rounded-[2rem] px-6 py-12 shadow-[0_22px_60px_rgba(15,39,92,0.24)] md:px-10">
            <h2 className="text-3xl font-serif font-semibold text-primary-foreground md:text-4xl">
              Ready to Take the First Step?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
              Your journey to wellness begins with a single conversation. Reach out today to schedule your first session.
            </p>
            <div className="mt-8">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-background px-10 py-4 text-lg font-medium text-primary transition-colors hover:bg-background/90"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
