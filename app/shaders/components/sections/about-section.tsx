"use client"

import { MagneticButton } from "../../components/magnetic-button"
import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"

export function HeroSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
    const { ref, isVisible } = useReveal(0.3)
    const [heroData, setHeroData] = useState<any>(null)

    useEffect(() => {
        fetch("/0-hero.json")
            .then(r => r.json())
            .then(data => setHeroData(data))
    }, [])

    return (
        <section
            ref={ref}
            className="flex h-screen w-screen shrink-0 snap-start px-4 pt-8 md:px-12 md:pt-12 lg:px-16 border-2 border-red-500"
        >
            <div className="mx-auto w-full max-w-7xl flex items-center h-full">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-start w-full">
                    {/* Left side - Headline and Description */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div
                                className={`mb-6 transition-all duration-700 md:mb-8 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
                                    }`}
                            >
                                <h1 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground/95 md:mb-4 md:text-6xl lg:text-7xl">
                                    {heroData?.headline || "Blow up your"}
                                    <br />
                                    <span className="text-[#c4ff00]">{heroData?.headlineHighlight || "social media"}</span>
                                </h1>
                            </div>

                            <div
                                className={`space-y-3 transition-all duration-700 md:space-y-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    }`}
                                style={{ transitionDelay: "200ms" }}
                            >
                                <p className="max-w-md text-sm leading-relaxed text-foreground/95 md:text-lg font-normal">
                                    {heroData?.subheadline || "We create viral content for your brand. We research, script, edit, and post viral content for your brand. You just have to film it."}
                                </p>
                            </div>
                        </div>

                        <div
                            className={`mt-8 flex flex-col items-start gap-2 transition-all duration-700 md:mt-10 md:gap-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                }`}
                            style={{ transitionDelay: "750ms" }}
                        >
                            <p className="text-xs text-[#c4ff00] font-mono font-medium">{heroData?.badge || "Limited spots available"}</p>
                            <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(8)}>
                                {heroData?.primaryCta || "Book Your Free Strategy Call"}
                            </MagneticButton>
                        </div>
                    </div>

                    {/* Right side - Visual placeholder */}
                    <div className="flex flex-col justify-start h-full">
                        <div
                            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                                }`}
                            style={{ transitionDelay: "400ms" }}
                        >
                            <div className="aspect-square rounded-lg border border-foreground/20 bg-foreground/5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}