import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
const galleryImages = [
  { id: 1, title: "Relaxation Room", query: "spa relaxation room massage therapy" },
  { id: 2, title: "Treatment Area", query: "professional spa treatment area" },
  { id: 3, title: "Foot Reflexology", query: "foot reflexology massage treatment" },
  { id: 4, title: "Massage Therapy", query: "professional massage therapy session" },
  { id: 5, title: "Wellness Space", query: "spa wellness peaceful environment" },
  { id: 6, title: "Healing Atmosphere", query: "calm spa healing atmosphere" },
  { id: 7, title: "Consultation Room", query: "wellness consultation spa room" },
  { id: 8, title: "Herbal Products", query: "natural herbal spa products" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
Step inside Wing Reflexology and explore our serene spaces, thoughtfully designed to help you unwind, rejuvenate, and experience total wellness.          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg h-64 cursor-pointer">
                <Image
  src={`/wing${image.id}${image.id <= 6 ? '.webp' : '.jpeg'}`}
  alt={image.title}
  fill={true} 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover group-hover:scale-105 transition-transform duration-300"
/>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
