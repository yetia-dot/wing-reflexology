import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, TrendingUp } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="heading-serif text-4xl md:text-5xl leading-tight">Ready to Book Your Wellness Journey?</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Contact us today and discover the healing power of reflexology. Our team is ready to help you feel your
              best.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+251941252505" className="opacity-90 hover:opacity-100 transition-opacity">
                    +251 941 252 505
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:Wingreflexology@gmail.com"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Wingreflexology@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <a
                    href="https://share.google/1ikpGMJ4Ni3QLVE1V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="TikTok"
              >
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col justify-center items-center space-y-6 bg-primary-foreground/10 rounded-lg p-8">
            <h3 className="heading-serif text-3xl text-center">Call Anytime</h3>
            <p className="text-center opacity-90 text-lg">
              We're here to answer your questions and help you schedule your perfect wellness appointment.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full md:w-auto"
            >
              <a href="tel:+251941252505">Call +251 941 252 505</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full md:w-auto bg-transparent"
            >
              <Link href="/contact">Send Message</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
