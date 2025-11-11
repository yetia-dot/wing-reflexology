import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Foot Reflexology",
    description:
      "Ancient healing technique that stimulates pressure points on your feet to promote overall wellness and balance throughout your body.",
    icon: "🦶",
  },
  {
    id: 2,
    title: "Hand & Ear Reflexology",
    description:
      "Targeted therapy on your hands and ears to improve circulation, reduce pain, and enhance your natural healing abilities.",
    icon: "👂",
  },
  {
    id: 3,
    title: "Head & Shoulder Massage",
    description:
      "Release tension and stress from your upper body with our professional massage techniques designed for deep relaxation.",
    icon: "💆",
  },
  {
    id: 4,
    title: "Herbal Soaking & Compression",
    description:
      "Therapeutic herbal soak followed by targeted compression therapy to reduce inflammation and soothe tired muscles.",
    icon: "🌿",
  },
  {
    id: 5,
    title: "Pedicure & Waxing",
    description:
      "Premium foot care and waxing services to keep your feet and skin looking beautiful and feeling their best.",
    icon: "✨",
  },
  {
    id: 6,
    title: "Chair Massage",
    description: "Quick and effective massage while seated, perfect for busy schedules. Great for offices and events.",
    icon: "🪑",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Our Services</p>
          <h2 className="heading-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">What We're Offering</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive wellness and reflexology services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="p-8 bg-card hover:shadow-lg transition-shadow border-border">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="heading-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
            <Link href="/contact">Book a Service Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
