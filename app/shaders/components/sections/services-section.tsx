"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"

export function PainPointsSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [painPoints, setPainPoints] = useState<any[]>([])

  useEffect(() => {
    fetch("/2-pain-points.json")
      .then(r => r.json())
      .then(data => setPainPoints(data.painPoints))
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
            Why Business Owners
            <br />
            <span className="text-[#c4ff00]">Struggle with Social Media</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {painPoints.map((point, i) => (
            <PainPointCard key={point.id} point={point} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PainPointCard({
  point,
  index,
  isVisible,
}: {
  point: { id: number; title: string; description: string; number?: string; stat?: string }
  index: number
  isVisible: boolean
}) {
  const directions = ["left", "right", "top"]

  const getRevealClass = () => {
    if (!isVisible) {
      switch (directions[index]) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[#c4ff00]" />
        <span className="font-mono text-xs text-foreground/60">{point.number}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground/95 md:text-3xl">{point.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/90 md:text-base font-normal">{point.description}</p>
      {point.stat && <p className="text-xs text-[#c4ff00] mt-2 font-medium">{point.stat}</p>}
    </div>
  )
}
