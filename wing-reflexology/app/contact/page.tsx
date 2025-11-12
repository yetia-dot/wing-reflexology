"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

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
              <p className="text-muted-foreground mt-2">Available for calls</p>
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
                <h3 className="heading-serif text-3xl text-foreground mb-4">Working hours</h3>
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
                <div className="flex gap-6">
                  <a
              href="https://www.instagram.com/wing_reflexology?igsh=c2g3cGdrMXBpY3g3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
	<path fill="#3f2c26" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" />
</svg>            </a>
            <a
  href="https://www.tiktok.com/@user9781406225921?_r=1&_t=ZM-91KUtNtQEUy"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-muted-foreground hover:text-primary transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
	<path fill="#3f2c26" d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
</svg>
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
