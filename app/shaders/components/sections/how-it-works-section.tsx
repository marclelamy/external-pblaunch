"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"
import { Search, FileText, Video, Upload } from "lucide-react"

const icons = [Search, FileText, Video, Upload]

export function HowItWorksSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [steps, setSteps] = useState<any[]>([])

  useEffect(() => {
    fetch("/5-process.json")
      .then(r => r.json())
      .then(data => setSteps(data.steps))
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
            How it works
          </h2>
        </div>

        {/* Timeline on desktop, vertical on mobile */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-foreground/20" />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = icons[i]
                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Numbered circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#c4ff00] flex items-center justify-center mb-4">
                      <span className="text-3xl font-light text-black">{step.id}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="size-8 text-foreground/60" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xl font-light mb-2 text-center text-foreground/95">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/85 text-center font-normal">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <div
                key={step.id}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Numbered circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#c4ff00] flex items-center justify-center">
                  <span className="text-2xl font-light text-black">{step.id}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="size-5 text-foreground/60" />
                    <h3 className="font-sans text-lg font-light text-foreground/95">{step.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/85 font-normal">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

