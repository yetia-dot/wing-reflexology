import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-linear-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">Welcome to Wing Reflexology</p>
              <h1 className="heading-serif text-5xl md:text-6xl leading-tight text-foreground text-balance">
                Your Luxury Wellness Retreat in Addis Ababa
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Step into a world of calm and renewal.
At Wing Reflexology, we blend the ancient art of reflexology with modern spa comfort to help you relax, restore balance, and feel completely refreshed — mind, body, and soul.
Whether you seek deep healing or pure relaxation, our skilled therapists will guide you on a soothing journey toward total well-being.
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
            
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/gallery3.jpg"
              alt="Reflexology massage session"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
