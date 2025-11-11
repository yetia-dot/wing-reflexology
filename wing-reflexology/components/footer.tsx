import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">W</span>
              </div>
              <span className="font-bold text-foreground">Wing Reflexology</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your sanctuary for holistic healing and wellness through reflexology and therapeutic massage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Foot Reflexology</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Hand & Ear Reflexology</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Head & Shoulder Massage</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Herbal Soaking</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Pedicure & Waxing</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+251941252505" className="hover:text-primary transition-colors">
                  +251 941 252 505
                </a>
              </li>
              <li>
                <a href="mailto:Wingreflexology@gmail.com" className="hover:text-primary transition-colors">
                  Wingreflexology@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/1ikpGMJ4Ni3QLVE1V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Find Us on Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Wing Reflexology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://share.google/1ikpGMJ4Ni3QLVE1V"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
