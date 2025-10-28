"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
    const { ref, isVisible } = useReveal(0.3)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [showProof, setShowProof] = useState<Record<number, boolean>>({})

    useEffect(() => {
        fetch("/1-testimonials.json")
            .then(r => r.json())
            .then(data => setTestimonials(data.testimonials))
    }, [])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    // Helper function to format follower growth
    const formatGrowth = (before: string, after: string) => {
        const beforeNum = parseInt(before.replace(/,/g, ''))
        const afterNum = parseInt(after.replace(/[K]/g, '')) * (after.includes('K') ? 1000 : 1)
        const growth = afterNum - beforeNum

        if (growth >= 10000) {
            return `+${(growth / 1000).toFixed(0)}K`
        } else {
            const percentage = ((growth / beforeNum) * 100).toFixed(0)
            return `+${percentage}%`
        }
    }

    return (
        <section
            ref={ref}
            className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
        >
            <div className="mx-auto w-full max-w-[1100px]">
                <div
                    className={`mb-12 transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
                        }`}
                >
                    <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl">
                        Real people,
                        <br />
                        <span className="italic text-foreground/90">real results</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="border border-foreground/20 p-6 md:p-8 mx-auto rounded-lg bg-foreground/5">
                                        {/* Top Row: Quote (left) + Growth Number (right) */}
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
                                            {/* Quote - Left */}
                                            <div className="flex-1">
                                                <p className="text-foreground/95 italic text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
                                                    "{testimonial.quote}"
                                                </p>
                                            </div>

                                            {/* Growth Number - Right */}
                                            <div className="flex-shrink-0 text-right">
                                                <div className="text-[#c4ff00] font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                                    {formatGrowth(testimonial.before.followers, testimonial.after.followers)}
                                                </div>
                                                <div className="text-foreground/60 text-xs md:text-sm mt-1">
                                                    FOLLOWERS
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Row: Before/After (left) + Profile Info (right) */}
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-4">
                                            {/* Before/After Stats - Left */}
                                            <div className="flex-shrink-0 md:w-64">
                                                <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4">
                                                    <div className="grid grid-cols-3 gap-3 text-center">
                                                        {/* Before */}
                                                        <div>
                                                            <div className="text-foreground/70 text-xs uppercase tracking-wide mb-1 font-medium">Before</div>
                                                            {testimonial.before.posts && (
                                                                <div className="text-foreground/90 text-xs md:text-sm font-normal">
                                                                    {testimonial.before.posts} Posts
                                                                </div>
                                                            )}
                                                            <div className="text-foreground/90 text-xs md:text-sm font-medium">
                                                                {testimonial.before.followers} Followers
                                                            </div>
                                                        </div>

                                                        {/* Arrow */}
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-[#c4ff00] text-2xl md:text-3xl">→</div>
                                                        </div>

                                                        {/* After */}
                                                        <div>
                                                            <div className="text-foreground/70 text-xs uppercase tracking-wide mb-1 font-medium">After</div>
                                                            {testimonial.after.posts && (
                                                                <div className="text-[#c4ff00] text-xs md:text-sm font-medium">
                                                                    {testimonial.after.posts} Posts
                                                                </div>
                                                            )}
                                                            <div className="text-[#c4ff00] text-xs md:text-sm font-medium">
                                                                {testimonial.after.followers} Followers
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Profile Info + View Proof Button - Right */}
                                            <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                                <div>
                                                    <a
                                                        href={`https://instagram.com/${testimonial.handle.replace('@', '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-medium text-base text-foreground hover:text-[#c4ff00] transition-colors block"
                                                    >
                                                        {testimonial.handle}
                                                    </a>
                                                    <p className="text-foreground/80 text-xs md:text-sm font-normal">{testimonial.name}</p>
                                                    <p className="text-foreground/70 text-xs md:text-sm font-normal">{testimonial.title}</p>
                                                </div>

                                                {/* View Proof Button */}
                                                <button
                                                    onClick={() => setShowProof(prev => ({ ...prev, [testimonial.id]: !prev[testimonial.id] }))}
                                                    className="flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors group"
                                                >
                                                    <Eye className="size-4 group-hover:text-[#c4ff00] transition-colors" />
                                                    <span className="text-xs md:text-sm font-medium">{showProof[testimonial.id] ? 'Hide Proof' : 'View Proof'}</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Images - Toggleable */}
                                        {showProof[testimonial.id] && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                <div className="relative w-full h-64 rounded-lg border border-foreground/10 overflow-hidden bg-foreground/5">
                                                    <Image
                                                        src={testimonial.images.before}
                                                        alt="Before stats"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div className="relative w-full h-64 rounded-lg border border-foreground/10 overflow-hidden bg-foreground/5">
                                                    <Image
                                                        src={testimonial.images.after}
                                                        alt="After stats"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div className="relative w-full h-64 rounded-lg border border-foreground/10 overflow-hidden bg-foreground/5">
                                                    <Image
                                                        src={testimonial.images.quoteImg}
                                                        alt="Testimonial quote"
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="size-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 border border-foreground/20 rounded-full hover:border-[#c4ff00] transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="size-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-2 w-2 rounded-full transition-all ${index === selectedIndex ? "bg-[#c4ff00] w-8" : "bg-foreground/20"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

