/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    type: "general",
    service: "website",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        type: "general",
        service: "website",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-custom">
          <h1 className="heading-xl text-primary mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/80">
            Let&apso;s discuss how we can help your business grow online
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Phone className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-primary hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Mail className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href="mailto:hello@codekraftstudios.in"
                  className="text-primary hover:underline"
                >
                  hello@codekraftstudios.in
                </a>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <MapPin className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-foreground/70">Amritsar, Punjab, India</p>
              </div>

              <div className="p-6 rounded-lg border hover:shadow-lg transition bg-card">
                <Clock className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                <p className="text-foreground/70 text-sm">
                  Monday - Saturday: 10:00 AM - 7:00 PM
                  <br />
                  Sunday: By appointment
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full justify-center font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>Thank you! We&apos;ll get back to you soon.</span>
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.name}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.phone}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.email}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                    <Input
                      type="text"
                      name="business"
                      placeholder="Business Name"
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="website">Website Project</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="seo">SEO Services</option>
                      <option value="maintenance">Maintenance Support</option>
                      <option value="other">Other</option>
                    </select>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="website">Website Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="seo">SEO</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="branding">Branding</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project... *"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      aria-invalid={!!fieldErrors.message}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 rounded-lg border overflow-hidden bg-primary/5">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Amritsar, Punjab"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3656206644344!2d74.87919!3d31.633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919038e66666667%3A0x1234567890abc!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
              //   allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            Quick Questions?
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  q: "What is the typical project timeline?",
                  a: "2-3 weeks for standard packages. Premium projects may take 4-6 weeks.",
                },
                {
                  q: "Do you offer support after launch?",
                  a: "Yes! Free support is included. Basic: 3 months, Standard: 6 months, Premium: 1 year.",
                },
                {
                  q: "What if I need changes during development?",
                  a: "We work closely with you throughout the process and include regular updates.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 hover:shadow-lg transition bg-card rounded-lg border"
                >
                  <p className="font-semibold text-primary mb-2">{item.q}</p>
                  <p className="text-foreground/70 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
