import {
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Wrench,
  Palette,
} from "lucide-react";

export const servicesPageContent = {
  hero: {
    title: "Our Services",
    description: "Comprehensive web solutions tailored for your business needs",
  },
  services: [
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
  ],
  addOns: {
    title: "Add-on Services",
    services: [
      { title: "Logo Design", price: "₹3,000 - ₹8,000" },
      { title: "Content Writing", price: "₹500/page" },
      { title: "Annual Maintenance", price: "₹500 - ₹2,000/month" },
      { title: "Domain + Hosting", price: "₹3,000 - ₹5,000/year" },
      { title: "Social Media Graphics", price: "₹2,000 - ₹5,000/month" },
      { title: "Website Redesign", price: "Custom quote" },
    ],
  },
  cta: {
    title: "Ready to Get Started?",
    buttonText: "Contact Us Today",
    buttonHref: "/contact",
  },
};
