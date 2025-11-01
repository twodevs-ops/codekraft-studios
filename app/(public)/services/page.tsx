import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Wrench,
  Palette,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Website Design & Development",
      desc: "Custom, professional websites built with modern technology",
      features: ["Responsive design", "Fast loading", "SEO-ready", "Secure"],
      starting: "₹15,000",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Online stores with payment integration and inventory management",
      features: [
        "Payment gateway",
        "Product catalog",
        "Order management",
        "Shipping integration",
      ],
      starting: "₹40,000",
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive Design",
      desc: "Perfect experience on all devices and screen sizes",
      features: [
        "Touch-friendly",
        "Fast loading",
        "Optimized images",
        "Cross-browser",
      ],
      starting: "₹15,000",
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      desc: "Get found on Google and attract more customers",
      features: [
        "Keyword research",
        "On-page SEO",
        "Content optimization",
        "Analytics",
      ],
      starting: "₹5,000/month",
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      desc: "Keep your site running smoothly with expert support",
      features: ["Updates", "Backups", "Security monitoring", "Bug fixes"],
      starting: "₹500/month",
    },
    {
      icon: Palette,
      title: "Logo & Brand Design",
      desc: "Complete brand identity that stands out",
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette",
        "Typography",
      ],
      starting: "₹3,000",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-custom">
          <h1 className="heading-xl text-primary mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Comprehensive web solutions tailored for your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg border hover:shadow-lg transition bg-card"
                >
                  <Icon className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-bold text-secondary mb-4">
                    Starting {service.starting}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-primary">Add-on Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logo Design", price: "₹3,000 - ₹8,000" },
              { title: "Content Writing", price: "₹500/page" },
              { title: "Annual Maintenance", price: "₹500 - ₹2,000/month" },
              { title: "Domain + Hosting", price: "₹3,000 - ₹5,000/year" },
              {
                title: "Social Media Graphics",
                price: "₹2,000 - ₹5,000/month",
              },
              { title: "Website Redesign", price: "Custom quote" },
            ].map((addon, idx) => (
              <div
                key={idx}
                className="p-6 hover:shadow-lg transition bg-card rounded-lg border"
              >
                <h3 className="font-semibold mb-2">{addon.title}</h3>
                <p className="text-secondary font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
