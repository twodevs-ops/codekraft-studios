import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">CodeKraft Studios</h3>
            <p className="text-sm opacity-90 mb-4">
              Krafting Digital Excellence for Amritsar Businesses
            </p>
            <p className="text-sm opacity-75">9+ years combined experience</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-80 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-80 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:opacity-80 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Brand Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              <a
                href="tel:+919876543210"
                className="hover:opacity-80 transition"
              >
                +91 98765 43210
              </a>
            </p>
            <p className="text-sm mb-4">
              <a
                href="mailto:hello@codekraftstudios.in"
                className="hover:opacity-80 transition"
              >
                hello@codekraftstudios.in
              </a>
            </p>
            <p className="text-sm opacity-90">Amritsar, Punjab, India</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <p>&copy; 2025 CodeKraft Studios. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
