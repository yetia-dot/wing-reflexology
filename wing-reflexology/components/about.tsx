import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/wing2.webp"
              alt="Wing Reflexology spa environment"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">About Wing Reflexology</p>
              <h2 className="heading-serif text-4xl text-foreground">Your Path to Wellness Starts Here</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Wing Reflexology is dedicated to helping you achieve optimal health and wellness through the ancient
              healing art of reflexology combined with modern therapeutic techniques. Our team of certified and
              experienced practitioners provides personalized care in a serene, welcoming environment.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Expert Practitioners</h4>
                  <p className="text-muted-foreground">Certified professionals with years of experience</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Care</h4>
                  <p className="text-muted-foreground">Customized treatments tailored to your needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Holistic Approach</h4>
                  <p className="text-muted-foreground">We treat the whole person, not just symptoms</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-accent text-primary-foreground mt-6">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
