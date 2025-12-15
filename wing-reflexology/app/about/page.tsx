import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">About Wing Reflexology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
Discover our story, mission, and the dedicated team behind your wellness journey. At Wing Reflexology, we’re committed to helping you heal, relax, and renew through the perfect balance of care and expertise.          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
<Image 
  src="/wing2.webp"
  alt="Wing Reflexology spa environment"
  width={150} 
  height={50}
/>      </div>
            <div className="space-y-6">
              <h2 className="heading-serif text-4xl text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Wing Reflexology, our journey began with a simple mission — 
                to share the healing power of reflexology and therapeutic touch 
                with everyone seeking balance and renewal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in the heart of Bole, Addis Ababa, we believe true wellness is more than relaxation — 
                it’s harmony between body, mind, and spirit. Our experienced practitioners draw on years of 
                holistic health expertise to create personalized treatments that restore balance, relieve stress, and rejuvenate your energy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Step into our serene space and discover a place where care, comfort, and calm come together — 
                your sanctuary for healing and renewal.
                </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Healing</h3>
              <p className="text-muted-foreground">
                We embrace natural, holistic therapies that nurture balance and support your body’s innate power to heal itself.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Care</h3>
              <p className="text-muted-foreground">
               Every guest is unique — our treatments are personalized to meet your individual needs and wellness goals.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="heading-serif text-2xl text-foreground mb-4">Integrity</h3>
              <p className="text-muted-foreground">
We uphold the highest standards of professionalism, ethics, and respect in every service we provide.              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
