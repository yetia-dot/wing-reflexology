import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const detailedServices = [
  {
    id: 1,
    title: "Foot Reflexology",
    description:
      "Our most popular service, foot reflexology is an ancient healing technique that applies pressure to specific points on your feet, which correspond to different organs and systems in your body. This promotes relaxation, improves circulation, and supports your body's natural healing process.",
    benefits: ["Improves circulation", "Reduces stress", "Promotes better sleep", "Relieves pain", "Boosts immunity"],
    duration: "60-90 minutes",
    icon: "🦶",
    imageSrc: "/foot-reflexology.png",
  },
  {
    id: 2,
    title: "Hand & Ear Reflexology",
    description:
      "Perfect for those with limited mobility or time, hand and ear reflexology delivers the same benefits as foot reflexology through targeted pressure points on your hands and ears. These sessions are quick, effective, and wonderfully refreshing.",
    benefits: [
      "Quick and convenient",
      "Reduces headaches",
      "Improves focus",
      "Balances energy",
      "No special clothing needed",
    ],
    duration: "30-45 minutes",
    icon: "👂",
    imageSrc: "/hand-reflexology.png",
  },
  {
    id: 3,
    title: "Head & Shoulder Massage",
    description:
      "Melt away tension from your neck, shoulders, and head with our therapeutic massage technique. Perfect for those who spend long hours at a desk or carry stress in their upper body.",
    benefits: [
      "Relieves tension headaches",
      "Improves posture",
      "Reduces neck stiffness",
      "Promotes relaxation",
      "Increases mobility",
    ],
    duration: "45-60 minutes",
    icon: "💆",
    imageSrc: "shoulder-massage.webp",
  },
  {
    id: 4,
    title: "Herbal Soaking & Compression",
    description:
      "Experience the double benefit of our herbal soaking therapy followed by compression techniques. The healing herbs warm and relax your muscles while the compression promotes healing and reduces inflammation.",
    benefits: ["Reduces inflammation", "Soothes sore muscles", "Improves flexibility", "Detoxifies", "Deep relaxation"],
    duration: "60-75 minutes",
    icon: "🌿",
    imageSrc: "herbal-soak.webp",
  },
  {
    id: 5,
    title: "Pedicure & Waxing",
    description:
      "Keep your feet and skin looking beautiful and feeling their best with our premium pedicure and waxing services. We use high-quality products and careful techniques to ensure comfort and amazing results.",
    benefits: [
      "Beautiful foot appearance",
      "Healthy skin",
      "Professional results",
      "Relaxing experience",
      "Long-lasting effects",
    ],
    duration: "45-60 minutes",
    icon: "✨",
    imageSrc: "pedicure.webp",
  },
  {
    id: 6,
    title: "Chair Massage",
    description:
      "Need quick wellness on your schedule? Our chair massage is performed while you remain seated and clothed, making it perfect for offices, events, or when time is limited.",
    benefits: [
      "Quick energy boost",
      "Stress relief",
      "No clothing required",
      "Office-friendly",
      "Immediate relaxation",
    ],
    duration: "15-30 minutes",
    icon: "🪑",
    imageSrc: "wing7.jpeg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
At Wing Reflexology, every treatment is designed to restore balance and bring harmony to your body and mind.
From targeted reflexology sessions to soothing spa treatments, our services blend traditional techniques with modern wellness practices — offering you a truly revitalizing experience in the heart of Bole, Addis Ababa.          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="heading-serif text-4xl text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-primary">Duration: {service.duration}</span>
                    <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-4xl mb-6">Ready to Experience Our Services?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment and begin your wellness journey.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
