export const contactInfo = {
  phone: {
    display: "+91 77194 47215",
    link: "+919876543210",
  },
  email: {
    support: "support@codekraftstudios.in",
    hello: "hello@webboxstudio.in",
  },
  location: {
    city: "Amritsar",
    state: "Punjab",
    country: "India",
    full: "Amritsar, Punjab, India",
  },
  officeHours: {
    weekdays: "Monday - Saturday: 10:00 AM - 7:00 PM",
    weekend: "Sunday: By appointment",
  },
  whatsapp: {
    number: "917719447215",
    displayNumber: "+917719447215",
    link: "https://wa.me/917719447215",
  },
};

export const contactPageContent = {
  hero: {
    title: "Get in Touch",
    description: "Let's discuss how we can help your business grow online",
  },
  form: {
    title: "Send us a Message",
    placeholders: {
      name: "Your Name *",
      phone: "Phone Number *",
      email: "Email Address *",
      business: "Business Name",
      message: "Tell us about your project... *",
    },
    validation: {
      nameRequired: "Name is required",
      phoneRequired: "Phone number is required",
      phoneInvalid: "Please enter a valid phone number",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      messageRequired: "Message is required",
    },
    types: [
      { value: "general", label: "General Inquiry" },
      { value: "website", label: "Website Project" },
      { value: "ecommerce", label: "E-commerce Store" },
      { value: "seo", label: "SEO Services" },
      { value: "maintenance", label: "Maintenance Support" },
      { value: "other", label: "Other" },
    ],
    services: [
      { value: "website", label: "Website Design" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "seo", label: "SEO" },
      { value: "maintenance", label: "Maintenance" },
      { value: "branding", label: "Branding" },
    ],
    submitButton: {
      default: "Send Message",
      loading: "Sending...",
    },
    messages: {
      success: "Thank you! We'll get back to you soon.",
      error: "Failed to send message. Please try again.",
    },
  },
  contactCards: {
    phone: {
      title: "Phone",
      icon: "Phone",
    },
    email: {
      title: "Email",
      icon: "Mail",
    },
    location: {
      title: "Location",
      icon: "MapPin",
    },
    hours: {
      title: "Office Hours",
      icon: "Clock",
    },
  },
  cta: {
    whatsapp: "Chat on WhatsApp",
  },
};

export const contactFAQ = [
  {
    question: "What is the typical project timeline?",
    answer:
      "2-3 weeks for standard packages. Premium projects may take 4-6 weeks.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes! Free support is included. Basic: 3 months, Standard: 6 months, Premium: 1 year.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "We work closely with you throughout the process and include regular updates.",
  },
];
