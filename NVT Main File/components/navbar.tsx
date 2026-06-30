"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { BookButton } from "./book-button"
import { siteContent } from "@/lib/site-content"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/therapy", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 w-full border-b border-border/70 bg-background/95 shadow-sm backdrop-blur"
      style={{
        /*backgroundImage: "url('/flowerpic.jpg')",*/
        backgroundPosition: "center 30%",
        backgroundSize: "cover",
      }}
    >

      <nav className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6">
        {/* Mobile menu */}
        <div className="flex min-h-14 items-center justify-between gap-3 md:hidden">
          <Link
            href="/"
            className="min-w-0 flex-1 text-base font-semibold leading-tight text-primary"
            aria-label={`${siteContent.practiceName} home`}
            onClick={() => setIsOpen(false)}
          >
            {siteContent.practiceName}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`transition-colors ${
                pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <BookButton />
        </div>

        {isOpen && (
          <div id="mobile-nav" className="mt-2 flex flex-col gap-1 border-t border-border bg-background py-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  pathname === link.href ? "bg-accent text-primary" : "text-foreground hover:bg-accent hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <BookButton className="mt-2 w-full" />
          </div>
        )}
      </nav>
    </header>
   
  )
}
