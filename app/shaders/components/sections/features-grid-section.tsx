"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"
import { Sparkles, Clock, DollarSign, Target, Zap, TrendingUp } from "lucide-react"

const featureIcons = [Sparkles, Clock, DollarSign, Target, Zap, TrendingUp]

export function FeaturesGridSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [features, setFeatures] = useState<any[]>([])

  useEffect(() => {
    fetch("/3-benefits.json")
      .then(r => r.json())
      .then(data => setFeatures(data.features))
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
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl">
            What You Get
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={feature.id}
                className={`group border border-foreground/20 p-6 hover:border-[#c4ff00] hover:shadow-[0_0_20px_rgba(196,255,0,0.2)] transition-all duration-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4">
                  <Icon className="size-8 text-[#c4ff00]" />
                </div>
                <h3 className="font-sans text-xl font-light mb-2 text-foreground/95">{feature.title}</h3>
                <p className="text-sm text-foreground/85 font-normal">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

