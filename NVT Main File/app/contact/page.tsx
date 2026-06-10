import { Mail, Phone } from "lucide-react"
import { BookButton } from "@/components/book-button"
import { siteContent } from "@/lib/site-content"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-balance">Contact</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Reach out to schedule a consultation or ask a question about services, availability, or next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="border-l-4 border-primary/30 pl-5">
              <Phone className="mb-4 w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a href={siteContent.phoneHref} className="text-muted-foreground transition-colors hover:text-primary">
                {siteContent.phoneDisplay}
              </a>
            </div>

            <div className="border-l-4 border-primary/30 pl-5">
              <Mail className="mb-4 w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a href={siteContent.contactPath} className="text-muted-foreground transition-colors hover:text-primary">
                dejiofor@hotmail.com
              </a>
            </div>

  
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">{siteContent.contactCta}</p>
            <BookButton variant="large" />
          </div>
        </div>
      </section>
    </div>
  )
}
