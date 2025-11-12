import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Foot Reflexology",
    description:
      "Stimulate natural healing and relieve tension through precise pressure points on your feet — improving circulation, balance, and total body wellness.",
    icon: "🦶",
  },
  {
    id: 2,
    title: "Hand & Ear Reflexology",
    description:
      "Experience deep relaxation and improved energy flow with gentle hand and ear reflexology that eases stress and promotes inner calm.",
    icon: "👂",
  },
  {
    id: 3,
    title: "Head & Shoulder Massage",
    description:
      "Release built-up tension and soothe tired muscles with our signature head and shoulder massage — perfect for unwinding after a busy day.",
    icon: "💆",
  },
  {
    id: 4,
    title: "Herbal Soaking & Compression",
    description:
      "Indulge in the calming power of herbal blends that detoxify, soothe, and rejuvenate your skin while easing muscle stiffness.",
    icon: "🌿",
  },
  {
    id: 5,
    title: "Pedicure & Waxing",
    description:
      "Pamper yourself with our professional pedicure and gentle waxing services — for soft, smooth, and refreshed skin.",
    icon: "✨",
  },
  {
    id: 6,
    title: "Chair Massage",
    description: "A quick yet deeply relaxing massage that melts away tension, boosts energy, and leaves you feeling recharged — ideal for busy days or travelers on the go.",
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
