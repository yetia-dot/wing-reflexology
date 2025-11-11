import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">Welcome to Wing Reflexology</p>
              <h1 className="heading-serif text-5xl md:text-6xl leading-tight text-foreground text-balance">
                Your Sanctuary of Healing & Wellness
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Experience the ancient art of reflexology combined with modern wellness techniques. Our expert
              practitioners will guide you on a journey to restore balance, reduce stress, and rejuvenate your body and
              mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                <Link href="/contact">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-secondary/30 bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
            <div className="pt-8 flex items-start gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-foreground">Expert Practitioners</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-foreground">Holistic Care</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/wing1.webp"
              alt="Reflexology massage session"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
