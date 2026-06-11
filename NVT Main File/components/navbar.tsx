"use client"
import Image from "next/image"
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
      className="full top-0 left-0 right-0 w-full z-50 border-b border-border/70 bg-cover bg-top bg-no-repeat "
      style={{
        backgroundImage: "url('/flowerpic.jpg')",
        backgroundPosition: "center 30%",
        height:"140px"
      }}
    >
      <nav className="w-full px-8 py-4">
        <div className="flex items-center justify-center md:block">
          <Link
            href="/"
            className="block text-center text-xl font-semibold leading-tight text-primary md:text-2xl"
            aria-label={`${siteContent.practiceName} home`}
            >
             
             





            <span className="text-xl font-semibold leading-tight text-primary md:text-3xl"></span>{""}
            <span className="bg-primary px-3 py-1 text-primary-foreground"></span>
            {siteContent.practiceName}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 p-2 text-foreground md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center gap-6">
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
          <div id="mobile-nav" className="mt-4 flex flex-col items-center gap-4 border-t border-border pt-4 md:hidden">
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
