"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"
import { MagneticButton } from "../../components/magnetic-button"

export function PricingSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [plans, setPlans] = useState<any[]>([])

  useEffect(() => {
    fetch("/6-pricing.json")
      .then(r => r.json())
      .then(data => setPlans(data.plans))
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
            Pricing
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`relative border p-8 transition-all duration-700 ${
                plan.featured
                  ? "border-[#c4ff00] bg-[#c4ff00]/5 shadow-[0_0_30px_rgba(196,255,0,0.3)]"
                  : "border-foreground/20"
              } ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c4ff00] text-black text-xs font-medium">
                  {plan.badge}
                </div>
              )}

              {/* Tier name */}
              <h3 className="font-sans text-2xl font-light mb-4 text-foreground/95">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-light text-foreground/95">{plan.price}</span>
                <span className="text-sm text-foreground/70 font-normal">{plan.period}</span>
              </div>

              {/* Content volume */}
              <div className="mb-6 pb-6 border-b border-foreground/10">
                <p className="text-sm font-medium mb-2 text-foreground/95">{plan.contentVolume.title}</p>
                <ul className="space-y-1 text-sm text-foreground/85 font-normal">
                  {plan.contentVolume.items.map((item: string, j: number) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="mb-6 pb-6 border-b border-foreground/10">
                <p className="text-sm font-medium mb-2 text-foreground/95">{plan.services.title}</p>
                <ul className="space-y-1 text-sm text-foreground/85 font-normal">
                  {plan.services.items.map((item: string, j: number) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <MagneticButton
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full"
                onClick={() => {
                  // Navigate to contact or booking
                }}
              >
                {plan.cta}
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

