import Link from "next/link"
import { siteContent } from "@/lib/site-content"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-secondary/55 py-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-foreground">
            {siteContent.therapistName}, {siteContent.credentials}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This website is not intended for crisis situations.
            <br />
            If you are in immediate danger, call <strong>911</strong> or <strong>988</strong>.
          </p>

          <p className="text-muted-foreground text-sm">
            Serving clients in {siteContent.serviceArea} with telehealth and office-based care.
          </p>

          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-primary transition-colors underline text-sm"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {siteContent.practiceName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
