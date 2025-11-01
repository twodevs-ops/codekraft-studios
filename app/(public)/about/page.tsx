import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-custom">
          <h1 className="heading-xl text-primary mb-6 text-balance">
            Meet the Team Behind CodeKraft Studios
          </h1>
          <p className="text-lg text-foreground/80">
            Two passionate developers with 9+ years of combined experience,
            helping Amritsar businesses thrive online.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg text-primary mb-6">Our Story</h2>
              <p className="text-foreground/80 mb-4">
                We started CodeKraft Studios with a simple mission: to make
                professional websites accessible and affordable for every
                Amritsar business.
              </p>
              <p className="text-foreground/80 mb-4">
                Having worked with businesses of all sizes, we saw a gap in the
                market. Local businesses deserved quality, affordable websites
                without the corporate price tag. That&apos;s where CodeKraft
                Studios comes in.
              </p>
              <p className="text-foreground/80">
                Today, we&apos;re proudly serving Amritsar and Punjab,
                delivering results that matter: more customers, more revenue,
                more growth.
              </p>
            </div>
            <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center">
              <Image
                src="/placeholder.svg?key=team-story"
                alt="Our story"
                className="rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Partnership Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Partnership
              </h3>
              <p className="text-foreground/80 mb-4">
                CodeKraft Studios is a partnership between two dedicated
                developers combining frontend expertise with backend
                optimization knowledge.
              </p>
              <p className="text-foreground/80">
                Together, we bring 9+ years of professional experience,
                creativity, and enterprise-grade technical skills to deliver
                websites that look great and perform exceptionally.
              </p>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Why Two Developers?
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Faster project delivery and completion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Better code quality through peer review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Backup coverage - never delayed by illness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>
                    Combined expertise: frontend + backend + architecture
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-foreground/80">
                Making professional websites accessible and affordable for every
                Amritsar business. We believe technology should serve
                businesses, not complicate them.
              </p>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-foreground/80">
                Becoming Punjab&apos;s most trusted web development partner. We
                want every local business to have the digital presence they
                deserve.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Lakshay Kapoor",
                  role: "Full Stack Developer & Co-Founder",
                  exp: "2.5+ years",
                  skills: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "Python",
                    "Frontend Expert",
                  ],
                },
                {
                  name: "Amandeep Kochhar",
                  role: "Senior Full Stack Developer & Co-Founder",
                  exp: "6.5+ years",
                  skills: [
                    "React",
                    "Angular",
                    "Node.js",
                    "System Architecture",
                    "AWS",
                    "Backend Optimization",
                  ],
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg border text-center hover:shadow-lg transition bg-card"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-medium text-foreground/80 mb-2">
                    {member.role}
                  </p>
                  <p className="text-secondary font-semibold mb-6">
                    {member.exp} professional experience
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Enhanced */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            Expert in 15+ Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", category: "Frontend" },
              { name: "Next.js", category: "Frontend" },
              { name: "Angular", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "Express", category: "Backend" },
              { name: "Python", category: "Backend" },
              { name: "Flask", category: "Backend" },
              { name: "PostgreSQL", category: "Database" },
              { name: "MongoDB", category: "Database" },
              { name: "Firebase", category: "Database" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "TypeScript", category: "Language" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-lg bg-white border hover:shadow-lg transition"
              >
                <p className="font-bold text-primary text-sm mb-1">
                  {tech.name}
                </p>
                <p className="text-xs text-foreground/60">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-lg text-primary mb-12 text-center">
            CodeKraft vs Others
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="font-bold text-lg text-primary mb-4">
                vs Freelancers
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Two developers (faster, backup coverage)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Professional business setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Guaranteed delivery timelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Structured process & support</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-lg border bg-card">
              <h3 className="font-bold text-lg text-primary mb-4">
                vs Big Agencies
              </h3>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Direct communication with developers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>50-70% lower costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Personal attention to your project</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">✓</span>
                  <span>Local Amritsar presence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-primary-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            We&apos;re excited to help grow your business
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-foreground"
          >
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
