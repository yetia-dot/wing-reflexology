"use client"

import React, { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {Instagram, Send, MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background text-primary">
      <Header />

      {/* Hero / Main Contact Section */}
      <section className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-center md:text-left mb-6">
            Contact Us
          </h1>
          <p className="text-secondary-400 text-lg md:text-xl max-w-2xl text-center md:text-left mx-auto md:mx-0 mb-16">
            Please feel free to contact us and we will get back to you as soon as we can.
          </p>

          {/* Responsive Grid: Form left | Info right */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-primary-600 pb-2 text-lg placeholder-secondary-500 focus:border-accent focus:outline-none transition-colors"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-primary-600 pb-2 text-lg placeholder-secondary-500 focus:border-accent focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full bg-transparent border-b border-primary-600 pb-2 text-lg placeholder-secondary-500 focus:border-accent focus:outline-none resize-none transition-colors"
              />

              <Button
                type="submit"
                className="bg-secondary hover:bg-accent-200 text-background font-medium px-12 py-6 rounded-4 text-lg transition-all"
              >
                Send
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8 text-gray-400">
              <div>
                <h3 className="text-xs uppercase tracking-widest">Visit us</h3>
                <p className="text-primary leading-relaxed text-lg">
                  Bole, Saromaria Hotel
                  <br />
                  Next to Friendship Hotel
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest ">Talk to us</h3>
                <p className="text-primary leading-relaxed text-lg">
                  +251941252505
                  <br />
                  wingreflexology@gmail.com
                </p>
              </div>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/wing_reflexology?igsh=c2g3cGdrMXBpY3g3" className="hover:text-primary transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a   href="https://www.tiktok.com/@user9781406225921?_r=1&_t=ZM-91KUtNtQEUy" className="hover:text-primary transition">
                  <Send className="h-5 w-5" />
                </a>
                <a href="mailto:Wingreflexology@gmail.com"  className="hover:text-primary transition">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://share.google/1ikpGMJ4Ni3QLVE1V" className="hover:text-primary transition">
                  <MapPin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}