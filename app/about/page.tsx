import Image from "next/image"
import { BookButton } from "@/components/book-button"

const aboutIntro = {
  eyebrow: "About Deborah Ejiofor",
  title: "Deborah Ejiofor",
  lead: "Licensed Professional Counselor (LPC), National Certified Counselor (NCC)",
  body: [
    "I am a Licensed Professional Counselor (LPC) in New Jersey and a National Certified Counselor (NCC) through the National Board for Certified Counselors (NBCC). I earned a Bachelor of Arts in Psychology and a Master of Arts in Clinical Mental Health Counseling from Fairleigh Dickinson University in Madison, New Jersey.",
    "With experience in private practice, assisted living, education, hospitals, and correctional facilities, I bring a diverse and well-rounded perspective to therapy. I use an eclectic approach, drawing from a variety of evidence-based techniques to help clients identify their strengths, overcome challenges, and work toward meaningful goals.",
    "Seeking support is a significant step, and I am committed to providing a safe, supportive, and collaborative environment throughout your therapeutic journey. I invite you to contact me for a free phone consultation to learn more about how I may be able to help."
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <p className="eyebrow">{aboutIntro.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-serif font-semibold leading-tight text-foreground md:text-5xl">
                {aboutIntro.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-primary md:text-xl">
                {aboutIntro.lead}
              </p>
              <div className="mt-8 max-w-3xl space-y-4 text-left text-lg leading-relaxed text-muted-foreground">
                {aboutIntro.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Therapist image */}
            <div className="flex-1">
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
                <Image
                  src="/NEWV_DEB_PIC.jpg"
                  alt={`${aboutIntro.title} portrait`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Take the first step toward wellness today.</p>
          <div className="mt-8">
            <BookButton variant="large" />
          </div>
        </div>
      </section>
    </div>
  )
}
