// app/contact/page.tsx

"use client"

import React, { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {Instagram, Send, MapPin, Mail } from "lucide-react"
import emailjs from '@emailjs/browser'; // <-- NEW IMPORT

// --- Email.js Configuration (REPLACE THESE TWO LINES) ---
// These are not sensitive and can be placed here.
const EMAILJS_SERVICE_ID = 'service_bmpjqeb'; 
const EMAILJS_TEMPLATE_ID = 'template_4jqy84a'; 
// The Public Key is loaded securely from the .env.local file.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  // NEW: State for tracking submission status and user feedback
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Optional check to prevent resubmission while sending
    if (status === 'sending') return;

    setStatus('sending'); 

    // Template parameters MUST match the variables you set up in your Email.js template
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
            // The public key is securely accessed from the environment variables
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, 
        }
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setStatus('success'); // Set success status
       setFormData({ name: "", email: "", message: "" }); // Clear form
       // Optional: Revert status after 5 seconds
       setTimeout(() => setStatus('idle'), 5000); 
    }, (err) => {
       console.log('FAILED...', err);
       setStatus('error'); // Set error status
       setTimeout(() => setStatus('idle'), 5000); 
    });
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
                disabled={status === 'sending'} // Disable button while sending
              >
                {/* Dynamic button text based on status */}
                {status === 'sending' ? 'Sending...' : 'Send'}
              </Button>
              
              {/* User Feedback Messages */}
              {status === 'success' && (
                <p className="text-green-500 font-semibold">Message sent successfully! We will be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-semibold">Failed to send message. Please try again or call us.</p>
              )}
            </form>

            {/* Contact Info (Social links updated with target="_blank" for best practice) */}
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
                <a href="https://www.instagram.com/wing_reflexology?igsh=c2g3cGdrMXBpY3g3" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
                <a   href="https://www.tiktok.com/@user9781406225921?_r=1&_t=ZM-91KUtNtQEUy" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                </a>
                <a href="mailto:Wingreflexology@gmail.com"  className="hover:text-primary transition">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://share.google/1ikpGMJ4Ni3QLVE1V" className="hover:text-primary transition" target="_blank" rel="noopener noreferrer">
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