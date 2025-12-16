import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/95 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2">
            <Image
  src="/logo.png"
  alt="Wing Reflexology Logo"
  width={112} 
  height={128} 
  className="rounded-full" 
/>
          </Link>
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
              <li className="flex items-start gap-4">
                <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+251911266475" className="opacity-90 hover:opacity-100 transition-opacity">
                    +251 911 266 475
                  </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:Wingreflexology@gmail.com" className="hover:text-primary transition-colors">
                  Wingreflexology@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 shrink-0" />
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
            
            <a href="https://share.google/1ikpGMJ4Ni3QLVE1V"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-muted-foreground hover:text-primary transition-colors"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 24 24">
    <g fill="none" stroke="#3f2c26" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64" />
      <path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
    </g>
  </svg>
</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
