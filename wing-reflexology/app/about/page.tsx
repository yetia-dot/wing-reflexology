import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">About Wing Reflexology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover our mission, values, and the experienced team dedicated to your wellness journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src="/reflexology-wellness-spa-therapist.jpg" alt="Our reflexology practice" className="w-full rounded-lg" />
            </div>
            <div className="space-y-6">
              <h2 className="heading-serif text-4xl text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wing Reflexology was founded with a simple mission: to bring the healing power of reflexology and
                therapeutic massage to everyone who needs it. Our team believes that true wellness comes from treating
                the whole person—body, mind, and spirit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of combined experience in holistic health practices, our practitioners are committed to
                providing personalized care in a calm, welcoming environment where you can truly relax and rejuvenate.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Healing</h3>
              <p className="text-muted-foreground">
                We focus on natural, holistic approaches to wellness that support your body's innate ability to heal
                itself.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Care</h3>
              <p className="text-muted-foreground">
                Every client receives personalized attention and treatment tailored to their specific needs and wellness
                goals.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest professional and ethical standards in all aspects of our practice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
