import {
  Code2,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";

export const COMPANY_NAME = "Webbox Studio";
export const COMPANY_WEBSITE = "https://codekraft-studios.vercel.app";

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
      "Webbox Studio created our website in just 2 weeks. We're now getting 5-10 customer inquiries daily through our website. Highly recommend!",
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

export { services, reasons, testimonials, pricingPlans, process };
