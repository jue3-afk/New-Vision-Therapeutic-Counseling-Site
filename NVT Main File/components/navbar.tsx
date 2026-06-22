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
      className="top-0 left-0 right-0 w-full z-50 border-b border-border/70 bg-cover bg-top bg-no-repeat"
      style={{
        /*backgroundImage: "url('/flowerpic.jpg')",*/
        backgroundPosition: "center 30%",
        backgroundSize: 'cover',
        minHeight: '80px',
      }}
    >

      <nav className="w-full px-4 py-2">
        {/* Mobile menu */}
        <div className="relative flex min-h-14 items-center justify-center md:hidden">
          <Link
            href="/"
            className="max-w-[75%] text-center text-lg font-semibold leading-tight text-primary"
            aria-label={`${siteContent.practiceName} home`}
            onClick={() => setIsOpen(false)}
          >
            {siteContent.practiceName}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 inline-flex h-11 w-11 items-center justify-center text-foreground"
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
          <div id="mobile-nav" className="mt-2 flex flex-col items-center gap-3 border-t border-border pt-3 pb-2 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`py-2 transition-colors ${
                  pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <BookButton />
          </div>
        )}
      </nav>
    </header>
   
  )
}
