"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-5xl md:text-6xl text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have questions? We'd love to hear from you. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-serif text-2xl text-foreground mb-2">Call Us</h3>
              <a
                href="tel:+251941252505"
                className="text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                +251 941 252 505
              </a>
              <p className="text-muted-foreground mt-2">Available for calls and WhatsApp</p>
            </Card>

            {/* Email */}
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-serif text-2xl text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:Wingreflexology@gmail.com"
                className="text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                Wingreflexology@gmail.com
              </a>
              <p className="text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </Card>

            {/* Location */}
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-serif text-2xl text-foreground mb-2">Visit Us</h3>
              <a
                href="https://share.google/1ikpGMJ4Ni3QLVE1V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                Our Location
              </a>
              <p className="text-muted-foreground mt-2">Find us on Google Maps</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-serif text-4xl text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 9XX XXX XXXX"
                    className="bg-card border-border text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Appointment inquiry"
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your needs..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="heading-serif text-3xl text-foreground mb-4">Hours of Operation</h3>
                <Card className="p-6 bg-card border-border">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold">Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold">Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold">Sunday</span>
                      <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="heading-serif text-3xl text-foreground mb-4">Quick Booking</h3>
                <Card className="p-6 bg-primary/5 border border-primary/20">
                  <p className="text-muted-foreground mb-4">
                    Ready to book? Call us directly or fill out the form to schedule your appointment.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    <a href="tel:+251941252505">Call Now</a>
                  </Button>
                </Card>
              </div>

              <div>
                <h3 className="heading-serif text-3xl text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-card border border-border text-primary hover:bg-primary/5 transition-colors text-center font-semibold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-card border border-border text-primary hover:bg-primary/5 transition-colors text-center font-semibold"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
