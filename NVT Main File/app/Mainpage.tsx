import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/site-content"

const services = [
  {
    title: "Anxiety",
    description: "Learn to manage worry and find calm in everyday life.",
    image: "/anxiety.jpg",
    imageAlt: "Anxiety support",
  },
  {
    title: "Depression",
    description: "Rediscover hope and reconnect with what matters most.",
    image: "/depression2.jpg",
    imageAlt: "Depression support",
  },
  {
    title: "Life Transitions",
    description: "Navigate change with support and clarity.",
    image: "/lifetrans.png",
    imageAlt: "Life transitions support",
  },
]
// Simple headway url for booking appointments, 
// can be replaced with a custom form in the future if desired
//left var as SIMPLE_PRACTICE_URL for easy reference and updating if needed
const SIMPLE_PRACTICE_URL =
  "https://care.headway.co/providers/deborah-ejiofor?utm_source=pem&utm_medium=direct_link&utm_campaign=78094"

export default function MainPage() {
  return (
    <div className="min-h-screen">
      {/*Background image hero section*/}
      <section
      /*Background image hero section content, sizing, and styling*/
        className="py-10 md:py-14"
        style={{
          backgroundImage: "url('/secondcalmchair.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}

      >
        {/*Background image hero section content*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-12xl text-center">
              <p className="eyebrow">{siteContent.homeIntro.eyebrow}</p>
              <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-serif font-semibold leading-tight text-balance text-foreground md:text-5xl lg:text-4xl">
                {siteContent.practiceName}
              </h1>
                {/* End of hero section content */}

                {/* CTA buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/about">
                  <Button size="lg" className="gap-2 px-8 py-6 text-lg">
                    About
                  </Button>
                </Link>
                <Link href="/therapy">
                  <Button size="lg" className="gap-2 px-8 py-6 text-lg">
                    Services
                  </Button>
                </Link>
              </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-lg leading-relaxed text-foreground md:text-xl">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {siteContent.homeIntro.title}
            </h2>
            {siteContent.homeIntro.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      
        {/*
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
                <div className="mb-4 flex justify-center">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-32 w-32 rounded-3xl object-cover"
                  />
                </div>
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
*/}
      

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
