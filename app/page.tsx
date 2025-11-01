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
  Check,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Website Design & Development",
      desc: "Custom, professional websites built with React & Next.js",
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive Design",
      desc: "Perfect on all devices - 100% optimized for mobile",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Online stores with payment gateway integration",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Get found on Google - Local SEO for Amritsar",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      desc: "Keep your site running smoothly with expert support",
    },
    {
      icon: Palette,
      title: "Logo & Branding",
      desc: "Complete brand identity and design systems",
    },
  ];

  const reasons = [
    {
      title: "Local Expertise",
      desc: "Based in Amritsar. Personal meetings, local support, same-day responses via WhatsApp.",
    },
    {
      title: "Affordable Pricing",
      desc: "Starting at ₹15,000. Transparent pricing, no hidden costs. UPI, Bank Transfer, Cash accepted.",
    },
    {
      title: "Fast Delivery",
      desc: "Your website ready in 2-3 weeks. Quick turnaround without compromising quality.",
    },
    {
      title: "Technical Excellence",
      desc: "9+ years combined experience. Expert in 15+ technologies: React, Next.js, Node.js, Python.",
    },
  ];

  const testimonials = [
    {
      quote:
        "CodeKraft Studios created our website in just 2 weeks. We're now getting 5-10 customer inquiries daily through our website. Highly recommend!",
      author: "Rajesh Kumar",
      business: "Amritsari Kulcha House",
    },
    {
      quote:
        "Professional work at affordable prices. The team understood exactly what our boutique needed. Sales have increased 30% since launch!",
      author: "Priya Sharma",
      business: "Shahi Designs Boutique",
    },
    {
      quote:
        "Best decision we made for our clinic. Patients can now book appointments online and find us easily. Very happy with the service!",
      author: "Dr. Harpreet Singh",
      business: "Singh Dental Clinic",
    },
  ];

  const pricingPlans = [
    {
      name: "BASIC",
      price: "₹15,000",
      popular: false,
      features: [
        "5-7 pages website",
        "Mobile responsive design",
        "Contact form",
        "WhatsApp integration",
        "Google Maps integration",
        "SSL certificate",
        "Responsive design",
        "Fast loading speed",
        "Source code access",
        "Full website ownership",
        "3 months free support",
        "Free 3 revision rounds",
      ],
      perfect: "Salons, Clinics, Small Shops",
    },
    {
      name: "STANDARD",
      price: "₹25,000",
      popular: true,
      features: [
        "Everything in Basic",
        "10-15 pages",
        "Admin panel for updates",
        "SEO optimization",
        "Email setup",
        "Image gallery/portfolio",
        "Social media integration",
        "Domain setup assistance",
        "Google Analytics setup",
        "Search Console setup",
        "6 months free support",
        "Free 3 revision rounds",
      ],
      perfect: "Restaurants, Boutiques, Coaching Centers",
    },
    {
      name: "PREMIUM",
      price: "Starting ₹40,000",
      popular: false,
      features: [
        "Everything in Standard",
        "E-commerce/Booking system",
        "Payment gateway integration",
        "Customer database",
        "Advanced SEO optimization",
        "Custom features",
        "Analytics dashboard",
        "Performance optimization",
        "Monthly analytics reports",
        "Priority support",
        "1 year free support",
        "Unlimited revisions (6 months)",
      ],
      perfect: "Hotels, Wedding Venues, Manufacturers",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      desc: "We discuss your business needs and goals. 15-minute free consultation.",
    },
    {
      step: "2",
      title: "Design & Development",
      desc: "We create your custom website. Regular updates throughout.",
    },
    {
      step: "3",
      title: "Review & Launch",
      desc: "You review, we refine. Then we launch your site.",
    },
    {
      step: "4",
      title: "Support & Grow",
      desc: "Free support included. We help you grow your online presence.",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-balance mb-6 text-primary">
                Professional Websites That Drive Results
              </h1>
              <p className="text-lg text-foreground/80 mb-8 text-balance">
                Affordable, mobile-responsive websites that bring you more
                customers. Starting at just ₹15,000. Same-day WhatsApp response
                guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary bg-transparent"
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-primary">9+</p>
                  <p className="text-foreground/70">Years Experience</p>
                </div>
                <div>
                  <p className="font-bold text-primary">15+</p>
                  <p className="text-foreground/70">Technologies</p>
                </div>
                <div>
                  <p className="font-bold text-primary">2-3</p>
                  <p className="text-foreground/70">Week Delivery</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg h-96 flex items-center justify-center">
                <Image
                  src="/modern-laptop-showing-websites.png"
                  alt="Website mockup"
                  className="rounded-lg"
                  width={600}
                  height={284}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            Services Built for Your Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border hover:shadow-lg transition bg-card"
                >
                  <Icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            Why Businesses Choose CodeKraft Studios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border hover:shadow-lg transition bg-card"
              >
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 border hover:shadow-lg bg-card transition ${
                  plan.popular
                    ? "border-secondary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <p className="text-sm text-foreground/70 mb-6">
                  Perfect for: {plan.perfect}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-secondary hover:bg-secondary/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Flexible Payment Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Payment Methods</h4>
                <p className="text-sm text-foreground/70">
                  UPI (PhonePe, GPay), Bank Transfer, Cash, Cheque, Card
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Payment Schedule</h4>
                <p className="text-sm text-foreground/70">
                  30% advance, 40% mid-project, 30% on launch
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Special Offer</h4>
                <p className="text-sm text-foreground/70">
                  EMI available. 5% discount for upfront payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            How It Works - Simple & Transparent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {process.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block flex-1 h-1 bg-border"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-primary">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/70">
                  {testimonial.business}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-primary-foreground">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join 50+ businesses already growing with CodeKraft Studios
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">
              Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
