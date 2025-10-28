"use client"

import { useReveal } from "../../hooks/use-reveal"
import { MagneticButton } from "../../components/magnetic-button"
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export function FooterSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [footerData, setFooterData] = useState<any>(null)

  useEffect(() => {
    fetch("/10-footer.json")
      .then(r => r.json())
      .then(data => setFooterData(data))
  }, [])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <h3 className="font-sans text-2xl font-light mb-4 text-foreground/95">{footerData?.logo || "Personal Brand Launch"}</h3>
            <p className="text-sm text-foreground/85 font-normal">
              We create viral content for your brand. You just have to film it.
            </p>
          </div>

          {/* Links */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="font-sans text-sm font-medium mb-4 text-foreground/95">Social Media</h4>
            <ul className="space-y-2 text-sm text-foreground/85 font-normal">
              {footerData?.links?.map((link: any) => (
                <li key={link.id}>
                  <a href={link.url} className="hover:text-[#c4ff00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h4 className="font-sans text-sm font-medium mb-4 text-foreground/95">Get Started</h4>
            <MagneticButton size="lg" variant="primary">
              Book Your Free Strategy Call
            </MagneticButton>
          </div>
        </div>

        {/* Social Media */}
        <div
          className={`flex items-center gap-4 justify-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="#"
            className="p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="#"
            className="p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="size-5" />
          </a>
          <a
            href="#"
            className="p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="#"
            className="p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>

        {/* Copyright */}
        <div
          className={`mt-12 text-center text-sm text-foreground/60 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <span className="font-normal">{footerData?.copyright || `© ${new Date().getFullYear()} Personal Brand Launch. All rights reserved.`}</span>
        </div>
      </div>
    </section>
  )
}

