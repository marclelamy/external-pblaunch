"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"

export function BenefitsSection() {
    const { ref, isVisible } = useReveal(0.3)
    const [benefits, setBenefits] = useState<any>(null)

    useEffect(() => {
        fetch("/3-benefits.json")
            .then(r => r.json())
            .then(data => setBenefits(data))
    }, [])

    return (
        <section
            ref={ref}
            className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div
                    className={`mb-12 transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
                        }`}
                >
                    <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl">
                        Why Business Owners
                        <br />
                        Choose Personal Brand Launch
                    </h2>
                </div>

                {/* Two-column comparison */}
                <div className="grid gap-8 md:grid-cols-2 mb-16">
                    {/* Old Way */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="border border-foreground/20 p-8 bg-foreground/5">
                            <h3 className="font-sans text-2xl font-light mb-4 text-foreground/95">
                                {benefits?.comparison?.oldWay?.title || "Old Way: DIY Social Media ❌"}
                            </h3>
                            <ul className="space-y-2 mb-4">
                                {benefits?.comparison?.oldWay?.items?.map((point: string, i: number) => (
                                    <li key={i} className="text-sm text-foreground/85 font-normal">
                                        • {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-foreground/95">
                                {benefits?.comparison?.oldWay?.result || "Result: Burned out with 100 views per post"}
                            </p>
                        </div>
                    </div>

                    {/* New Way */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                            }`}
                        style={{ transitionDelay: "350ms" }}
                    >
                        <div className="border-2 border-[#c4ff00] p-8 bg-[#c4ff00]/5">
                            <h3 className="font-sans text-2xl font-light mb-4 text-foreground/95">
                                {benefits?.comparison?.newWay?.title || "New Way: Personal Brand Launch ✅"}
                            </h3>
                            <ul className="space-y-2 mb-4">
                                {benefits?.comparison?.newWay?.items?.map((point: string, i: number) => (
                                    <li key={i} className="text-sm text-foreground/95 font-normal">
                                        • {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-[#c4ff00]">
                                {benefits?.comparison?.newWay?.result || "Result: 700 → 450K followers in 6 months"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4-card grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {benefits?.features?.slice(0, 4).map((benefit: any, i: number) => (
                        <div
                            key={benefit.id}
                            className={`group border border-foreground/20 p-6 hover:border-[#c4ff00] transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                }`}
                            style={{ transitionDelay: `${500 + i * 100}ms` }}
                        >
                            <h4 className="font-sans text-lg font-light mb-2 text-foreground/95">{benefit.title}</h4>
                            <p className="text-sm text-foreground/80 font-normal">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

