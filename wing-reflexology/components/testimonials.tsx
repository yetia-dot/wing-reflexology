import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Shewit",
    content:
      "Wing Reflexology has completely transformed my wellness journey. The practitioners are incredibly knowledgeable and caring. I feel so much better after each session!",
    rating: 5,
  },
  {
    id: 2,
    name: "Hirut Alemu",
    content:
      "Best reflexology experience I've had. The atmosphere is so calming and the team really knows what they're doing. I'm a regular now!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya",
    content:
      "Incredible service and attention to detail. The head and shoulder massage helped my chronic tension. Highly recommend to anyone looking for quality wellness care.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Client Testimonials</p>
          <h2 className="heading-serif text-4xl md:text-5xl text-foreground mb-4">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-card border-border">
              <div className="flex gap-1 mb-4">
  {[...Array(testimonial.rating)].map((_, i) => (
    <span key={i} className="text-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 72 72">
        <path fill="#fcea2b" d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z" />
        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z" />
      </svg>
    </span>
  ))}
</div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
