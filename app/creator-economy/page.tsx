'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Home, Star, Clock, TrendingDown, BookOpen, Target, Zap, Rocket, TrendingUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

function TestimonialsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

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

    const testimonials = [
        {
            number: "1",
            name: "The You Network",
            handle: "@theyounetworkhq",
            description: "Karl Morningstar | CEO",
            before: "34",
            after: "421K",
            borderColor: "border-[#c4ff00]",
            accentColor: "text-[#c4ff00]",
            bgColor: "bg-[#c4ff00]",
            quote: '"I am on the plane flying back, and so many leads are coming in, I can\'t finish any of my other work. I am going to have to hire an admin! Thanks!" 🚀',
        },
        {
            number: "2",
            name: "Susana Briscoe Alba",
            handle: "@iam_susanaalba",
            description: "Leadership & Career Coach",
            before: "700",
            after: "936K",
            borderColor: "border-[#ff6b9d]",
            accentColor: "text-[#ff6b9d]",
            bgColor: "bg-[#ff6b9d]",
            quote: '"The support from Personal Brand Launch has significantly impacted my business, enabling us to generate over $10K in monthly revenue. Best decision ever!" 💰',
        },
        {
            number: "3",
            name: "The Bold Break",
            handle: "@_boldbreak",
            description: "Gabby | Volleyball & Resilience Coach",
            before: "2,607",
            after: "30.2K",
            borderColor: "border-[#ff8c42]",
            accentColor: "text-[#ff8c42]",
            bgColor: "bg-[#ff8c42]",
            quote: '"Yaaaay! I\'m so excited. I actually have so many leads in my DMs! I also had someone reach out for a speaking engagement! Crazy!" 🎉',
        },
    ]

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-[#c4ff00]/10 via-white to-[#ff6b9d]/10">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                        REAL PEOPLE, <span className="text-[#ff6b9d]">REAL RESULTS</span> 💪
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our amazing clients are saying!
                    </p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className={`bg-white ${testimonial.borderColor} border-4 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow`}>
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            {/* Number Square - Top on mobile, Left on desktop */}
                                            <div className={`flex-shrink-0 w-full md:w-32 h-32 ${testimonial.bgColor}/20 rounded-2xl overflow-hidden flex items-center justify-center transition-colors duration-300`}>
                                                <span className={`${testimonial.accentColor} text-5xl font-bold`}>{testimonial.number}</span>
                                            </div>

                                            {/* Content - Bottom on mobile, Right on desktop */}
                                            <div className="flex-1">
                                                {/* Stars */}
                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`w-5 h-5 fill-current ${testimonial.accentColor}`} />
                                                    ))}
                                                </div>

                                                {/* Quote - Main Focus */}
                                                <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Name and Description - Smaller */}
                                                <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    {testimonial.handle}<br/>{testimonial.description}
                                                </p>

                                                {/* Before/After Stats */}
                                                <div className={`${testimonial.bgColor}/10 rounded-2xl p-4`}>
                                                    <div className="grid grid-cols-2 gap-4 text-center">
                                                        <div>
                                                            <div className="text-xs uppercase tracking-wider text-gray-600">Before</div>
                                                            <div className="font-bold text-lg">{testimonial.before}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs uppercase tracking-wider text-gray-600">After</div>
                                                            <div className={`font-bold text-2xl ${testimonial.accentColor}`}>{testimonial.after}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-4 border-[#c4ff00] rounded-full p-3 hover:bg-[#c4ff00] transition-colors shadow-lg"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-4 border-[#c4ff00] rounded-full p-3 hover:bg-[#c4ff00] transition-colors shadow-lg"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full border-2 border-[#c4ff00] transition-colors ${
                                index === selectedIndex ? "bg-[#c4ff00]" : "bg-white"
                            }`}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default function CreatorEconomy() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-[#c4ff00]">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-6">
                            <Link href="/">
                                <Button variant="ghost" size="icon" className="hover:bg-[#c4ff00]/20 rounded-full">
                                    <Home className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#c4ff00] rounded-2xl" />
                                <span className="font-bold text-2xl tracking-tight">PBLAUNCH</span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#testimonials"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#ff6b9d] transition-colors"
                            >
                                Success Stories
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#ff8c42] transition-colors"
                            >
                                Pricing
                            </a>
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider rounded-full">
                                Let's Grow! 🚀
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-[#c4ff00]/10 via-[#ff6b9d]/5 to-[#ff8c42]/10">
                <div className="absolute top-20 right-10 w-64 h-64 bg-[#ff6b9d]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c4ff00]/20 rounded-full blur-3xl" />

                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 relative">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-4 border-[#c4ff00] rounded-full mb-8 shadow-lg">
                            <Sparkles className="w-5 h-5 text-[#c4ff00]" />
                            <span className="text-sm font-bold uppercase tracking-wider">Limited Spots Available</span>
                            <Heart className="w-5 h-5 text-[#ff6b9d]" />
                        </div>

                        <h1 className="font-bold text-6xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
                            BLOW UP YOUR
                            <br />
                            <span className="text-[#c4ff00]">SOCIAL</span>
                            {" "}
                            <span className="text-[#ff6b9d]">MEDIA</span> ✨
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                            We create viral content for your brand. We research, script, edit, and post viral content for your brand. You just have to film it.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                size="lg"
                                className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-16 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all"
                            >
                                Book Your Free Strategy Call
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-6 shadow-lg">
                                <div className="font-bold text-5xl text-[#c4ff00] tracking-tight mb-2">500K+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600">Followers Generated</div>
                            </div>
                            <div className="bg-white border-4 border-[#ff6b9d] rounded-3xl p-6 shadow-lg">
                                <div className="font-bold text-5xl text-[#ff6b9d] tracking-tight mb-2">50+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600">Happy Creators</div>
                            </div>
                            <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-6 shadow-lg">
                                <div className="font-bold text-5xl text-[#ff8c42] tracking-tight mb-2">70X</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600">Average Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="py-12 bg-gradient-to-r from-[#c4ff00] via-[#ff6b9d] to-[#ff8c42] text-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 text-center">
                    <p className="text-xl font-bold uppercase tracking-wide">✨ Trusted by 50+ business owners who've grown to 100K+ followers ✨</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsCarousel />

            {/* Pain Points Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            WHY BUSINESS OWNERS <span className="text-gray-400">STRUGGLE</span> 😰
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These are the biggest challenges we hear about every day...
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-300 rounded-3xl p-8 hover:scale-105 transition-transform">
                            <Clock className="w-12 h-12 mb-6 text-red-500" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Time Drain ⏰</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Spending 20+ hours a week creating content that gets 100 views
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-4 border-orange-300 rounded-3xl p-8 hover:scale-105 transition-transform">
                            <TrendingDown className="w-12 h-12 mb-6 text-orange-500" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">No Strategy 📉</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Posting randomly with no plan, hoping something sticks
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-300 rounded-3xl p-8 hover:scale-105 transition-transform">
                            <BookOpen className="w-12 h-12 mb-6 text-yellow-600" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Learning Curve 📚</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Trying to figure out editing, trends, and algorithms while running your business
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-[#ff6b9d]/10 via-[#ff8c42]/10 to-[#c4ff00]/10">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            THE <span className="text-[#c4ff00]">BETTER</span> WAY! 🌟
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See how we make social media easy and fun!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                        <div className="bg-white border-4 border-gray-300 rounded-3xl p-8">
                            <h3 className="font-bold text-3xl mb-6 tracking-tight">Old Way: DIY Social Media ❌</h3>
                            <ul className="space-y-4 mb-6 text-gray-600">
                                <li>• Spend 20+ hours/week researching trends</li>
                                <li>• Learn complex editing software</li>
                                <li>• Get random results with no strategy</li>
                            </ul>
                            <div className="font-bold text-lg pt-4 border-t-4 border-gray-300 text-red-600">
                                Result: Burned out with 100 views per post 😞
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#c4ff00] to-[#ff6b9d] border-4 border-[#c4ff00] rounded-3xl p-8">
                            <h3 className="font-bold text-3xl mb-6 tracking-tight">New Way: Personal Brand Launch ✅</h3>
                            <ul className="space-y-4 mb-6">
                                <li>• We research the top-performing content in your niche</li>
                                <li>• Professional editing team handles post-production</li>
                                <li>• Data-driven strategy based on what works</li>
                            </ul>
                            <div className="font-bold text-lg pt-4 border-t-4 border-black">
                                Result: 700 → 450K followers in 6 months, $10K+ monthly revenue 🚀
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#c4ff00]">Save 16+ Hours Every Week</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You film for 4 hours a month. We handle the other 60+ hours of research, scripting, editing, and posting!
                            </p>
                        </div>

                        <div className="bg-white border-4 border-[#ff6b9d] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#ff6b9d]">10X Your Reach in 6 Months</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our proven system took clients from 700 to 450K followers. Your content gets seen by your ideal customers!
                            </p>
                        </div>

                        <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#ff8c42]">Turn Followers Into Paying Customers</h3>
                            <p className="text-gray-700 leading-relaxed">
                                936K followers generated $10K+ monthly revenue for one client. We create content that drives sales!
                            </p>
                        </div>

                        <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#c4ff00]">Done-For-You Content Strategy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                No more guessing what to post. Our data-driven approach studies the top 1% and replicates what works!
                            </p>
                        </div>

                        <div className="bg-white border-4 border-[#ff6b9d] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#ff6b9d]">Professional Quality</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Skip the learning curve! Our team delivers scroll-stopping content that looks like you hired a full production crew!
                            </p>
                        </div>

                        <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="font-bold text-2xl mb-4 tracking-tight text-[#ff8c42]">Consistent Growth That Compounds</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Post 15-30 shorts per month consistently. The algorithm rewards consistency!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Brand Value Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            WHY BUILD YOUR <span className="text-[#ff6b9d]">PERSONAL BRAND?</span> 🤔
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-[#c4ff00]/20 to-[#ff6b9d]/20 border-4 border-[#c4ff00] rounded-3xl p-8">
                            <h3 className="font-bold text-3xl mb-6 tracking-tight">WHAT DO THEY HAVE IN COMMON? 💎</h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Kylie Jenner", business: "Kylie Cosmetics", achievement: "Youngest Billionaire" },
                                    { name: "Rihanna", business: "Fenty Beauty", achievement: "$2.8B Valuation" },
                                    { name: "Ryan Reynolds", business: "Mint Mobile", achievement: "Sold for $1B" },
                                    { name: "Logan Paul", business: "Prime", achievement: "$3.1B Valuation" },
                                    { name: "The Rock", business: "Teremana Tequila", achievement: "$3.5B Valuation" },
                                ].map((person, index) => (
                                    <div key={index} className="bg-white border-2 border-[#ff6b9d] rounded-2xl p-4">
                                        <div className="font-bold text-xl">{person.name}</div>
                                        <div className="text-gray-600">{person.business}</div>
                                        <div className="text-[#ff6b9d] font-bold">{person.achievement}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-[#ff8c42]/20 to-[#c4ff00]/20 border-4 border-[#ff8c42] rounded-3xl p-8">
                                <p className="text-xl leading-relaxed mb-6">
                                    All these people built up their personal brands by acting, singing, TV, or social media. When they
                                    started businesses, their companies <span className="font-bold text-[#ff8c42]">EXPLODED</span>! 💥
                                </p>
                                <p className="text-xl leading-relaxed">
                                    Their personal brand was their marketing. Social media is the best way for YOU to do
                                    this! 🌟
                                </p>
                            </div>

                            <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8">
                                <h4 className="font-bold text-2xl mb-6 tracking-tight">THE NUMBERS DON'T LIE 📊</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl text-[#c4ff00]">4.26B</div>
                                        <div className="text-gray-600 pt-2">Social media users worldwide</div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl text-[#ff6b9d]">54%</div>
                                        <div className="text-gray-600 pt-2">Use social media to research products</div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl text-[#ff8c42]">71%</div>
                                        <div className="text-gray-600 pt-2">Purchase decisions made on social media</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#c4ff00] to-[#ff6b9d] text-black p-8 border-4 border-black rounded-3xl">
                                <p className="text-xl font-bold leading-tight">
                                    There is a HUGE opportunity here! If you don't take it, your competitors will! 🚨
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-[#c4ff00]/10 via-[#ff6b9d]/10 to-[#ff8c42]/10">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            HOW WE <span className="text-[#c4ff00]">MAKE MAGIC</span> ✨
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Four simple steps to social media stardom. No stress, just success!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-gradient-to-br from-[#c4ff00]/20 to-[#c4ff00]/5 border-4 border-[#c4ff00] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#c4ff00] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-black">1</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">RESEARCH 🔍</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We find and study the top creators/best performing content in your niche on social media. You get the insider
                                secrets!
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ff6b9d]/20 to-[#ff6b9d]/5 border-4 border-[#ff6b9d] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#ff6b9d] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">2</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">SCRIPT ✍️</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Using the research and information on you and your business. We script an entire month of short form content. All you do is read and record!
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ff8c42]/20 to-[#ff8c42]/5 border-4 border-[#ff8c42] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#ff8c42] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">3</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">FILM & EDIT 🎬</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                You film the scripts. We edit the videos. We make it look like a million bucks with pro editing!
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#c4ff00]/20 via-[#ff6b9d]/10 to-[#ff8c42]/10 border-4 border-[#c4ff00] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#c4ff00] to-[#ff6b9d] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">4</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">UPLOAD 🚀</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube, Linkedin). You just watch the followers roll
                                in!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-[#c4ff00]/10 via-[#ff6b9d]/10 to-[#ff8c42]/10">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            CHOOSE YOUR <span className="text-[#c4ff00]">GROWTH</span> PLAN! 💎
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Pick the perfect plan to supercharge your social media! 🚀
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* GROW Plan */}
                        <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8">
                            <h3 className="font-bold text-4xl mb-4 tracking-tight text-[#c4ff00]">GROW 🌱</h3>
                            <div className="mb-8">
                                <span className="font-bold text-5xl">$2,995</span>
                                <span className="text-xl text-gray-600">/month</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3 text-[#c4ff00]">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>• 15 Shorts/Month</li>
                                    <li>• 7 Sales Focused Instagram Stories</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3 text-[#c4ff00]">Services Included</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                    <li>• ✨ Optimize Your Profile Checklist</li>
                                </ul>
                            </div>

                            <Button className="w-full bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider h-12 rounded-full border-2 border-black">
                                BOOK A CALL 📞
                            </Button>
                        </div>

                        {/* SCALE Plan */}
                        <div className="bg-gradient-to-br from-[#ff6b9d] to-[#ff8c42] text-white border-4 border-[#ff6b9d] rounded-3xl p-8 relative transform lg:scale-110">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-[#c4ff00] px-6 py-2 text-sm uppercase tracking-wider font-bold rounded-full border-2 border-[#c4ff00]">
                                ⭐ Most Popular ⭐
                            </div>
                            <h3 className="font-bold text-4xl mb-4 tracking-tight">SCALE 🚀</h3>
                            <div className="mb-8">
                                <span className="font-bold text-5xl">$3,495</span>
                                <span className="text-xl">/month</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>• 20 Shorts/Month</li>
                                    <li>• 10 Sales Focused Instagram Stories</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3">Services Included</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                    <li>• ✨ Optimize Your Profile Checklist</li>
                                </ul>
                            </div>

                            <Button className="w-full bg-white text-[#ff6b9d] hover:bg-gray-100 font-bold uppercase tracking-wider h-12 rounded-full border-2 border-white">
                                BOOK A CALL 📞
                            </Button>
                        </div>

                        {/* DOMINATE Plan */}
                        <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-8">
                            <h3 className="font-bold text-4xl mb-4 tracking-tight text-[#ff8c42]">DOMINATE 👑</h3>
                            <div className="mb-8">
                                <span className="font-bold text-5xl">$4,495</span>
                                <span className="text-xl text-gray-600">/month</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3 text-[#ff8c42]">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>• 30 Shorts/Month</li>
                                    <li>• 15 Sales Focused Instagram Stories</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3 text-[#ff8c42]">Services Included</p>
                                <ul className="space-y-2 text-sm">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                    <li>• ✨ Optimize Your Profile Checklist</li>
                                </ul>
                            </div>

                            <Button className="w-full bg-[#ff8c42] text-white hover:bg-[#ff8c42]/90 font-bold uppercase tracking-wider h-12 rounded-full border-2 border-black">
                                BOOK A CALL 📞
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            GOT <span className="text-[#ff6b9d]">QUESTIONS?</span> 🤔
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We've got answers! Here are the most common questions we get:
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: "How do I know if I am fit?",
                                answer:
                                    "If you are a business owner who wants to grow and sell on social media and is willing to invest in a growth system that works then book a call. If you are not willing to invest please do not.",
                            },
                            {
                                question: "What is the point of building up your personal brand?",
                                answer:
                                    "What do all these people and their businesses have in common? Kylie Jenner (Kylie Cosmetics - Youngest Billionaire), Rihanna (Fenty Beauty - $2.8B), Ryan Reynolds (Mint Mobile - Sold for $1B), Logan Paul (Prime - $3.1B), The Rock (Teremana Tequila - $3.5B). All these people built up their personal brands by acting, singing, TV, or social media. When they started businesses because they had such BIG personal brands their companies exploded. Social media is the best way for your average person to do this without being an actor, singer, or athlete!",
                            },
                            {
                                question: "Why should my business be on social media?",
                                answer:
                                    "There are 4.26 billion social media users. 54% of people use social media to research products. 71% of purchase decisions are made on social media. The opportunity is HUGE!",
                            },
                            {
                                question: "How much time does it take?",
                                answer:
                                    "We take on as much of the workload as we can. We will research, script, edit and upload for you. The only thing you have to do is film since it is your personal brand. Filming time varies person to person but for most people 4 hours a month.",
                            },
                            {
                                question: "What kind of results can I expect?",
                                answer:
                                    "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow! Case Study 1: Career Strategist went from 700 to 450K followers in 6 months. Case Study 2: Social Media Marketing went from 0 to 100K followers in 7 months. We build strong personal brands and 10x your business!",
                            },
                            {
                                question: "What is short form content?",
                                answer:
                                    "Short form content are videos 60 seconds or less in 9:16 format. These are your Instagram Reels, Facebook Reels, TikTok's, Youtube Shorts, etc.",
                            },
                            {
                                question: "What social media platforms do you work with?",
                                answer:
                                    "Instagram, TikTok, Facebook, Youtube, Linkedin, and Twitter. But we optimize for Instagram because as of now it's the best platform to grow and sell on social media for business owners.",
                            },
                            {
                                question: "How long does it take to see results?",
                                answer:
                                    "You will start seeing results when we start posting videos! To do the strategy call, research, scripting, filming, and editing takes about 3 weeks and then the posting begins!",
                            },
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="bg-gradient-to-r from-[#c4ff00]/10 to-[#ff6b9d]/10 border-4 border-[#c4ff00] rounded-3xl hover:shadow-xl transition-shadow group"
                            >
                                <summary className="p-6 lg:p-8 cursor-pointer flex items-center justify-between">
                                    <h3 className="font-bold text-xl lg:text-2xl tracking-tight pr-4">{faq.question}</h3>
                                    <ChevronDown className="w-6 h-6 text-[#ff6b9d] transition-transform group-open:rotate-180 flex-shrink-0" />
                                </summary>
                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-r from-[#c4ff00] via-[#ff6b9d] to-[#ff8c42] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5" />
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 relative text-center">
                    <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-8 text-white">READY TO BLOW UP? 🚀</h2>
                    <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
                        Join 50+ creators who are crushing it on social media. Your growth story starts here!
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 text-xl font-bold uppercase tracking-wider h-20 px-12 rounded-full shadow-2xl hover:scale-105 transition-all"
                    >
                        Book Your Free Strategy Call
                        <Sparkles className="w-6 h-6 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-black text-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#c4ff00] rounded-2xl" />
                            <span className="font-bold text-xl tracking-tight">PBLAUNCH</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#ff6b9d] transition-colors">
                                TikTok
                            </a>
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#ff8c42] transition-colors">
                                LinkedIn
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">© 2025 PBLAUNCH ✨</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
