import { BookButton } from "@/components/book-button"
import { Card, CardContent } from "@/components/ui/card"

const values = [
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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-wrap hero-wash mx-auto max-w-4xl px-6 py-12 text-center md:px-10">
            <p className="eyebrow">Warm, evidence-based care</p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-balance">
              About New Vision Counseling
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              New Vision Counseling provides evidence-based therapy with a focus on client-centered care. We believe
              that healing happens through genuine connection and collaborative support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-wrap section-wash px-6 py-12 md:px-10">
            <div className="mb-12 text-center">
              <h2 className="section-title">Our Approach</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do at New Vision Counseling.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="soft-card bg-white/90">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="cta-band rounded-[2rem] px-6 py-12 shadow-[0_22px_60px_rgba(28,57,71,0.28)] md:px-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-primary-foreground/90 text-lg">Take the first step toward wellness today.</p>
            <div className="mt-8">
              <BookButton variant="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
