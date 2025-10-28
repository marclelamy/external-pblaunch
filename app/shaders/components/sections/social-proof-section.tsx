"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"

export function SocialProofSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [socialProofText, setSocialProofText] = useState("")

  useEffect(() => {
    fetch("/9-social-proof.json")
      .then(r => r.json())
      .then(data => setSocialProofText(data.text))
  }, [])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl text-center">
            {socialProofText || "Trusted by 50+ business owners who've grown to 100K+ followers"}
          </h2>
        </div>

        {/* Grid of before/after thumbnail pairs */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square border border-foreground/10 bg-foreground/5 hover:border-[#c4ff00] transition-all duration-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

