"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-primary">Wing Reflexology</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/service" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Book Button */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex bg-primary hover:bg-accent text-primary-foreground">
              <Link href="/contact">Book Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              About
            </Link>
            <Link href="/service" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors">
              Contact
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground mt-4">
              <Link href="/contact">Book Now</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
