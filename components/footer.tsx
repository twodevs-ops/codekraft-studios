import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { footerContent, contactInfo } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {footerContent.brand.name}
            </h3>
            <p className="text-sm opacity-90 mb-4">
              {footerContent.brand.tagline}
            </p>
            <p className="text-sm opacity-75">
              {footerContent.brand.experience}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerContent.quickLinks.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {footerContent.quickLinks.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:opacity-80 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerContent.services.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {footerContent.services.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:opacity-80 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerContent.contact.title}
            </h4>
            <p className="text-sm mb-2">
              <a
                href={`tel:${contactInfo.phone.link}`}
                className="hover:opacity-80 transition"
              >
                {contactInfo.phone.display}
              </a>
            </p>
            <p className="text-sm mb-4">
              <a
                href={`mailto:${contactInfo.email.hello}`}
                className="hover:opacity-80 transition"
              >
                {contactInfo.email.hello}
              </a>
            </p>
            <p className="text-sm opacity-90">{contactInfo.location.full}</p>
            <div className="flex gap-3 mt-4">
              <a
                href={footerContent.socialMedia.facebook}
                className="hover:opacity-80 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={footerContent.socialMedia.linkedin}
                className="hover:opacity-80 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={footerContent.socialMedia.instagram}
                className="hover:opacity-80 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={footerContent.socialMedia.twitter}
                className="hover:opacity-80 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <p>{footerContent.legal.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {footerContent.legal.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:opacity-100 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
