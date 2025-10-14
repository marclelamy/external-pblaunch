'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Zap, Target, Rocket, ChevronDown, Home, Clock, TrendingDown, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
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
            description: "Karl Morningstar | CEO | Franchise Consultant",
            before: ["Posts: 21", "Followers: 34", "Following: 54"],
            after: ["Posts: 376", "Followers: 421K", "Following: 123"],
            quote: '"I am on the plane flying back, and so many leads are coming in, I can\'t finish any of my other work. I am going to have to hire an admin or AI the shit out of this! Thanks!"',
        },
        {
            number: "2",
            name: "Susana Briscoe Alba",
            handle: "@iam_susanaalba",
            description: "Leadership & Career Coach",
            before: ["Posts: 315", "Followers: 700", "Following: 426"],
            after: ["Posts: 1,428", "Followers: 936K", "Following: 827"],
            quote: '"The support from Personal Brand Launch has significantly impacted my business, enabling us to generate over $10K in monthly revenue. Partnering with them has proven to be the best business decision I\'ve ever made."',
        },
        {
            number: "3",
            name: "The Bold Break",
            handle: "@_boldbreak",
            description: "Gabby | Volleyball & Resilience Coach",
            before: ["Followers: 2,607", "Following: 174"],
            after: ["Posts: 599", "Followers: 30.2K", "Following: 434"],
            quote: '"Yaaaay! I\'m so excited. I actually have so many leads in my DM\'s that I have to hustle to create a paid plan in my app for mental performance coaching to capitalize on the opportunity. I also had someone reach out for a speaking engagement! Crazy!"',
        },
    ]

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-white">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                        <span className="text-sm font-bold uppercase tracking-wider text-black">Client Success Stories</span>
                    </div>
                    <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-12">
                        REAL RESULTS
                        <br />
                        <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">REAL CLIENTS</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="bg-gray-50 border-2 border-black hover:border-[#c4ff00] transition-colors p-8">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            {/* Number Square - Top on mobile, Left on desktop */}
                                            <div className="flex-shrink-0 w-full md:w-48 h-48 bg-white overflow-hidden flex items-center justify-center hover:bg-[#c4ff00]/20 transition-colors duration-300">
                                                <span className="text-gray-300 text-6xl font-bold">{testimonial.number}</span>
                                            </div>

                                            {/* Content - Bottom on mobile, Right on desktop */}
                                            <div className="flex-1">
                                                {/* Quote - Main Focus */}
                                                <p className="text-gray-700 italic text-xl mb-6 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Name and Description - Smaller */}
                                                <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    {testimonial.handle}<br/>{testimonial.description}
                                                </p>

                                                {/* Before/After Stats with Arrow */}
                                                <div className="flex items-center gap-4 text-xs">
                                                    <div>
                                                        <div className="uppercase tracking-wider mb-2 text-gray-600">Before</div>
                                                        {testimonial.before.map((item, i) => (
                                                            <div key={i} className="text-gray-500">{item}</div>
                                                        ))}
                                                    </div>
                                                    <div className="text-2xl">→</div>
                                                    <div className="font-bold">
                                                        <div className="uppercase tracking-wider mb-2 text-gray-600">After</div>
                                                        {testimonial.after.map((item, i) => (
                                                            <div key={i} className={item.includes('K') ? 'text-[#c4ff00] text-lg' : ''}>{item}</div>
                                                        ))}
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-2 border-black p-3 hover:bg-[#c4ff00] transition-colors"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-2 border-black p-3 hover:bg-[#c4ff00] transition-colors"
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
                            className={`w-3 h-3 border-2 border-black transition-colors ${
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

export default function BoldLight() {
    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#c4ff00]/20">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-6">
                            <Link href="/">
                                <Button variant="ghost" size="icon" className="hover:bg-[#c4ff00]/20">
                                    <Home className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#c4ff00]" />
                                <span className="font-bold text-2xl tracking-tight">PBLAUNCH</span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#testimonials"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Results
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Pricing
                            </a>
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider">
                                Book Call
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#c4ff00]/5 transform -skew-y-3 origin-top-left" />

                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 relative">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-8">
                            <Zap className="w-5 h-5 text-black" />
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Limited Spots Available</span>
                        </div>

                        <h1 className="font-bold text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                            BLOW UP YOUR
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:1px_black]">SOCIAL MEDIA</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mb-12 leading-tight">
                            We create viral content for your brand. We research, script, edit, and post viral content for your brand. You just have to film it.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Button
                                size="lg"
                                className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-black"
                            >
                                Book Your Free Strategy Call
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
                            >
                                See Results
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 max-w-2xl">
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-black tracking-tight">500K+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600 mt-1">Followers</div>
                            </div>
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-black tracking-tight">50+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600 mt-1">Clients</div>
                            </div>
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-black tracking-tight">70X</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600 mt-1">Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="py-12 bg-black text-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 text-center">
                    <p className="text-xl font-bold">Trusted by 50+ business owners who've grown to 100K+ followers</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsCarousel />

            {/* Pain Points Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-black text-white mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider">The Problem</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                            WHY BUSINESS OWNERS
                            <br />
                            <span className="text-gray-400">STRUGGLE WITH SOCIAL MEDIA</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-black p-8">
                            <Clock className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Time Drain</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Spending 20+ hours a week creating content that gets 100 views
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8">
                            <TrendingDown className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">No Strategy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Posting randomly with no plan, hoping something sticks
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8">
                            <BookOpen className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Steep Learning Curve</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trying to figure out editing, trends, and algorithms while running your business
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">The Solution</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                            WHY BUSINESS OWNERS
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">CHOOSE US</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-50 border-2 border-gray-300 p-8">
                            <h3 className="font-bold text-3xl mb-6 tracking-tight">Old Way: DIY Social Media ❌</h3>
                            <ul className="space-y-4 mb-6 text-gray-600">
                                <li>• Spend 20+ hours/week researching trends</li>
                                <li>• Learn complex editing software</li>
                                <li>• Get random results with no strategy</li>
                            </ul>
                            <div className="font-bold text-lg pt-4 border-t-2 border-gray-300">
                                Result: Burned out with 100 views per post
                            </div>
                        </div>

                        <div className="bg-[#c4ff00] border-4 border-black p-8">
                            <h3 className="font-bold text-3xl mb-6 tracking-tight">New Way: Personal Brand Launch ✅</h3>
                            <ul className="space-y-4 mb-6">
                                <li>• We research the top-performing content in your niche</li>
                                <li>• Professional editing team handles post-production</li>
                                <li>• Data-driven strategy based on what works</li>
                            </ul>
                            <div className="font-bold text-lg pt-4 border-t-2 border-black">
                                Result: 700 → 450K followers in 6 months, $10K+ monthly revenue
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Save 16+ Hours Every Week</h3>
                            <p className="text-gray-700 leading-relaxed">
                                You film for 4 hours a month. We handle the other 60+ hours of research, scripting, editing, and posting. Run your business instead of becoming a content creator.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">100X Your Reach in 6 Months</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our proven system took clients from 700 to 450K followers. Your content gets seen by your ideal customers, not just random scrollers.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Turn Followers Into Paying Customers</h3>
                            <p className="text-gray-700 leading-relaxed">
                                936K followers generated $10K+ monthly revenue for one client. We don't just chase vanity metrics—we create content that drives sales and leads.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Done-For-You Content Strategy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                No more guessing what to post. Our data-driven approach studies the top 1% in your niche and replicates what actually works.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Professional Quality Without the Learning Curve</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Skip the 6-month learning curve of mastering editing software. Our team delivers scroll-stopping content that looks like you hired a full production crew.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Consistent Growth That Compounds</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Post 15-30 shorts per month consistently. The algorithm rewards consistency—something impossible to maintain when you're doing it alone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Brand Value Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">The Opportunity</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-12">
                            WHY BUILD YOUR
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:1px_black]">PERSONAL BRAND?</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold text-3xl mb-6 tracking-tight">WHAT DO THEY HAVE IN COMMON?</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Kylie Jenner", business: "Kylie Cosmetics", achievement: "Youngest Billionaire" },
                                        { name: "Rihanna", business: "Fenty Beauty", achievement: "$2.8B Valuation" },
                                        { name: "Ryan Reynolds", business: "Mint Mobile", achievement: "Sold for $1B" },
                                        { name: "Logan Paul", business: "Prime", achievement: "$3.1B Valuation" },
                                        { name: "The Rock", business: "Teremana Tequila", achievement: "$3.5B Valuation" },
                                    ].map((person, index) => (
                                        <div key={index} className="border-l-4 border-[#c4ff00] pl-6 py-2 bg-white">
                                            <div className="font-bold text-xl">{person.name}</div>
                                            <div className="text-gray-600">{person.business}</div>
                                            <div className="text-black font-bold text-lg">{person.achievement}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-[#c4ff00]/20 border-2 border-[#c4ff00] p-8">
                                <p className="text-xl leading-relaxed mb-6">
                                    All these people built up their personal brands by acting, singing, TV, or social media. When they
                                    started businesses, their companies <span className="font-bold">EXPLODED</span>.
                                </p>
                                <p className="text-xl leading-relaxed">
                                    Their personal brand was their marketing. Social media is the best way for your average person to do
                                    this without being an actor, singer, or athlete.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-black p-8">
                                <h4 className="font-bold text-2xl mb-6 tracking-tight">THE NUMBERS DON'T LIE</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl">4.26B</div>
                                        <div className="text-gray-600 pt-2">Social media users worldwide</div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl">54%</div>
                                        <div className="text-gray-600 pt-2">Use social media to research products</div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="font-bold text-4xl">71%</div>
                                        <div className="text-gray-600 pt-2">Purchase decisions made on social media</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#c4ff00] text-black p-8 border-2 border-black">
                                <p className="text-xl font-bold leading-tight">
                                    There is a HUGE opportunity here. If you don't take it, your competitors will - and they'll take all
                                    your customers with them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">How It Works</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
                            4 STEPS TO
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">VIRAL CONTENT</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                number: "01",
                                icon: Target,
                                title: "RESEARCH",
                                description: "We find and study the top creators/best performing content in your niche on social media.",
                            },
                            {
                                number: "02",
                                icon: Zap,
                                title: "SCRIPT",
                                description: "Using the research and information on you and your business. We script an entire month of short form content.",
                            },
                            {
                                number: "03",
                                icon: Rocket,
                                title: "FILM & EDIT",
                                description: "You film the scripts. We edit the videos.",
                            },
                            {
                                number: "04",
                                icon: TrendingUp,
                                title: "UPLOAD",
                                description: "We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube, Linkedin).",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border-2 border-black hover:border-[#c4ff00] transition-colors p-8 lg:p-10 group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-[#c4ff00] border-2 border-black flex items-center justify-center">
                                        <item.icon className="w-8 h-8 text-black" />
                                    </div>
                                    <span className="font-bold text-6xl text-gray-200 group-hover:text-[#c4ff00]/40 transition-colors">
                                        {item.number}
                                    </span>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="mb-16 text-center">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Pricing</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight">
                            CHOOSE YOUR
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">GROWTH PLAN</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* GROW Plan */}
                        <div className="bg-gray-50 border-2 border-black p-8">
                            <h3 className="font-bold text-4xl mb-4 tracking-tight">GROW</h3>
                            <div className="mb-8">
                                <span className="font-bold text-5xl">$2,995</span>
                                <span className="text-xl text-gray-600">/month</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>• 15 Shorts/Month</li>
                                    <li>• 7 Sales Focused Instagram Stories</li>
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

                            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider h-12 border-2 border-black">
                                BOOK A CALL
                            </Button>
                        </div>

                        {/* SCALE Plan */}
                        <div className="bg-[#c4ff00] border-4 border-black p-8 relative transform lg:scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm uppercase tracking-wider font-bold">
                                Most Popular
                            </div>
                            <h3 className="font-bold text-4xl mb-4 tracking-tight">SCALE</h3>
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

                            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider h-12 border-2 border-black">
                                BOOK A CALL
                            </Button>
                        </div>

                        {/* DOMINATE Plan */}
                        <div className="bg-gray-50 border-2 border-black p-8">
                            <h3 className="font-bold text-4xl mb-4 tracking-tight">DOMINATE</h3>
                            <div className="mb-8">
                                <span className="font-bold text-5xl">$4,495</span>
                                <span className="text-xl text-gray-600">/month</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-wider font-bold mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>• 30 Shorts/Month</li>
                                    <li>• 15 Sales Focused Instagram Stories</li>
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

                            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider h-12 border-2 border-black">
                                BOOK A CALL
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-[#c4ff00]/5 transform skew-y-3 origin-bottom-right" />

                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 relative">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Questions</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
                            FREQUENTLY ASKED
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">QUESTIONS</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl space-y-6">
                        {[
                            {
                                question: "How do I know if I am fit?",
                                answer:
                                    "If you are a business owner who wants to grow and sell on social media and is willing to invest in a growth system that works then book a call. If you are not willing to invest please do not.",
                            },
                            {
                                question: "What is the point of building up your personal brand?",
                                answer:
                                    "What do all these people and their businesses have in common? Kylie Jenner (Kylie Cosmetics - Youngest Billionaire), Rihanna (Fenty Beauty - $2.8B), Ryan Reynolds (Mint Mobile - Sold for $1B), Logan Paul (Prime - $3.1B), The Rock (Teremana Tequila - $3.5B). All these people built up their personal brands by acting, singing, TV, or social media. When they started businesses because they had such BIG personal brands their companies exploded. Their personal brand essentially was their marketing. Social media is the best way for your average person to do this without being an actor, singer, or athlete. A regular business owner can build themselves and their business on social media like never before. There is a huge opportunity here, if you don't take it your competitors will and will take all your customers with them.",
                            },
                            {
                                question: "Why should my business be on social media?",
                                answer:
                                    "There are 4.26 billion social media users. 54% of people use social media to research products. 71% of purchase decisions are made on social media. The opportunity is massive.",
                            },
                            {
                                question: "How much time does it take?",
                                answer:
                                    "We take on as much of the workload as we can. We will research, script, edit and upload for you. The only thing you have to do is film since it is your personal brand. Filming time varies person to person but for most people 4 hours a month. But we do not guarantee a time because for everyone it is different.",
                            },
                            {
                                question: "What kind of results can I expect?",
                                answer:
                                    "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow! Case Study 1: Career Strategist went from 700 to 450K followers in 6 months. Case Study 2: Social Media Marketing went from 0 to 100K followers in 7 months. In both cases, we built strong personal brands, 10xed our business, and have loyal followers that consist of our target customers.",
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
                                className="bg-white border-2 border-black hover:border-[#c4ff00] transition-colors group"
                            >
                                <summary className="p-6 lg:p-8 cursor-pointer flex items-center justify-between">
                                    <h3 className="font-bold text-xl lg:text-2xl tracking-tight pr-4">{faq.question}</h3>
                                    <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180 flex-shrink-0" />
                                </summary>
                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 lg:py-32 bg-[#c4ff00] text-black border-y-4 border-black">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-bold text-5xl lg:text-7xl leading-tight tracking-tight mb-8">READY TO GO VIRAL?</h2>
                        <p className="text-xl lg:text-2xl mb-12">
                            Book a free call. We'll show you exactly how we'll grow your account.
                        </p>
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-black/90 text-lg font-bold uppercase tracking-wider h-16 px-12 border-2 border-black"
                        >
                            Book Your Free Call
                            <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-gray-800">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#c4ff00]" />
                            <span className="font-bold text-xl tracking-tight">PBLAUNCH</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors">
                                TikTok
                            </a>
                            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors">
                                LinkedIn
                            </a>
                        </div>
                        <p className="text-sm text-gray-600">© 2025 PBLAUNCH</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
