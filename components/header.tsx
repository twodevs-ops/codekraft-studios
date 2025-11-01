"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container-custom flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-24 h-20 flex items-center justify-center mb-2">
              <Image
                src="/logo.png"
                alt="Website mockup"
                className="rounded-lg"
                width={150}
                height={160}
                objectFit="cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium hover:bg-accent/10 rounded-md transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-1 text-sm hover:text-primary transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent/10 rounded-md transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t bg-background p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 hover:bg-accent/10 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild className="w-full bg-secondary">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Floating Buttons - Enhanced for mobile focus on WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 font-bold text-xs"
          title="Chat on WhatsApp"
        >
          <div className="text-center">
            <MessageCircle className="w-6 h-6 mx-auto mb-1" />
            <span>Chat</span>
          </div>
        </a>
        <a
          href="tel:+919876543210"
          className="md:hidden w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110"
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default Header;
