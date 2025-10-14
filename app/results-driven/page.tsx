'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Target, BarChart3, Home, CheckCircle2, Clock, TrendingDown, BookOpen, Zap, Rocket, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
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
            number: "01",
            name: "Karl Morningstar",
            handle: "@theyounetworkhq",
            title: "CEO | Franchise Consultant",
            metric: "1,238%",
            metricLabel: "Follower Growth",
            before: { posts: "21", followers: "34", engagement: "12%" },
            after: { posts: "376", followers: "421K", engagement: "18%" },
            quote: '"I am on the plane flying back, and so many leads are coming in, I can\'t finish any of my other work. I am going to have to hire an admin or AI the shit out of this! Thanks!"',
        },
        {
            number: "02",
            name: "Susana Briscoe Alba",
            handle: "@iam_susanaalba",
            title: "Leadership & Career Coach",
            metric: "133,614%",
            metricLabel: "Follower Growth",
            before: { posts: "315", followers: "700", engagement: "8%" },
            after: { posts: "1,428", followers: "936K", engagement: "22%" },
            quote: '"The support from Personal Brand Launch has significantly impacted my business, enabling us to generate over $10K in monthly revenue. Partnering with them has proven to be the best business decision I\'ve ever made."',
        },
        {
            number: "03",
            name: "Gabby",
            handle: "@_boldbreak",
            title: "Volleyball & Resilience Coach",
            metric: "1,059%",
            metricLabel: "Follower Growth",
            before: { posts: "0", followers: "2,607", engagement: "5%" },
            after: { posts: "599", followers: "30.2K", engagement: "15%" },
            quote: '"Yaaaay! I\'m so excited. I actually have so many leads in my DM\'s that I have to hustle to create a paid plan in my app for mental performance coaching to capitalize on the opportunity. I also had someone reach out for a speaking engagement! Crazy!"',
        },
    ]

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-slate-900 to-black">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400 mb-8">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-400">Proven Results</span>
                    </div>
                    <h2 className="font-bold text-5xl lg:text-7xl leading-tight tracking-tight max-w-4xl mb-4">
                        CLIENT SUCCESS
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BY THE NUMBERS</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl">Real data from real clients. These metrics tell the story.</p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="bg-slate-900/50 border border-blue-500/30 p-8 hover:border-blue-400/50 transition-colors backdrop-blur-sm">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            {/* Metric Square - Top on mobile, Left on desktop */}
                                            <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 overflow-hidden flex flex-col items-center justify-center">
                                                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{testimonial.metric}</div>
                                                <div className="text-xs uppercase tracking-wider text-gray-400 mt-2">{testimonial.metricLabel}</div>
                                            </div>

                                            {/* Content - Bottom on mobile, Right on desktop */}
                                            <div className="flex-1">
                                                {/* Quote - Main Focus */}
                                                <p className="text-gray-300 italic text-xl mb-6 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Name and Title */}
                                                <div className="mb-6">
                                                    <h3 className="font-bold text-lg text-blue-400">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
                                                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                                                </div>

                                                {/* Before/After Stats Grid */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-slate-800/50 border border-slate-700 p-4">
                                                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Before</div>
                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Posts:</span>
                                                                <span className="text-gray-300">{testimonial.before.posts}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Followers:</span>
                                                                <span className="text-gray-300">{testimonial.before.followers}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Engagement:</span>
                                                                <span className="text-gray-300">{testimonial.before.engagement}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-blue-500/10 border border-blue-500/30 p-4">
                                                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">After</div>
                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Posts:</span>
                                                                <span className="font-bold text-blue-400">{testimonial.after.posts}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Followers:</span>
                                                                <span className="font-bold text-blue-400 text-lg">{testimonial.after.followers}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-400">Engagement:</span>
                                                                <span className="font-bold text-blue-400">{testimonial.after.engagement}</span>
                                                            </div>
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-900 border border-blue-500 p-3 hover:bg-blue-500/20 transition-colors"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-blue-400" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-900 border border-blue-500 p-3 hover:bg-blue-500/20 transition-colors"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-blue-400" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 border border-blue-500 transition-colors ${
                                index === selectedIndex ? "bg-blue-500" : "bg-transparent"
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

export default function ResultsDriven() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-200">
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
                                Proof
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Process
                            </a>
                            <a
                                href="#pricing"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Pricing
                            </a>
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider">
                                Get Results
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff00] mb-8">
                                    <Target className="w-5 h-5 text-black" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-black">Data-Driven Growth</span>
                                </div>

                                <h1 className="font-bold text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8">
                                    BLOW UP YOUR
                                    <br />
                                    <span className="text-[#c4ff00]">SOCIAL MEDIA</span>
                                </h1>

                                <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                                    We create viral content for your brand. We research, script, edit, and post viral content for your brand. You just have to film it.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Button
                                        size="lg"
                                        className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-14 px-8"
                                    >
                                        Book Your Free Strategy Call
                                        <ArrowRight className="w-6 h-6 ml-2" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-black hover:bg-black hover:text-white bg-transparent"
                                    >
                                        See The Numbers
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#c4ff00] p-8 border-4 border-black">
                                    <div className="font-bold text-6xl text-black tracking-tight mb-2">70X</div>
                                    <div className="text-sm uppercase tracking-wider text-black font-bold">AVG GROWTH</div>
                                    <div className="mt-4 text-xs text-black/70">120 → 8,500 followers in 4 months</div>
                                </div>
                                <div className="bg-white p-8 border-4 border-black">
                                    <div className="font-bold text-6xl text-black tracking-tight mb-2">$100K</div>
                                    <div className="text-sm uppercase tracking-wider text-black font-bold">IN 30 DAYS</div>
                                    <div className="mt-4 text-xs text-gray-600">Client revenue generated</div>
                                </div>
                                <div className="bg-white p-8 border-4 border-black">
                                    <div className="font-bold text-6xl text-black tracking-tight mb-2">500K+</div>
                                    <div className="text-sm uppercase tracking-wider text-black font-bold">FOLLOWERS</div>
                                    <div className="mt-4 text-xs text-gray-600">Total generated for clients</div>
                                </div>
                                <div className="bg-[#c4ff00] p-8 border-4 border-black">
                                    <div className="font-bold text-6xl text-black tracking-tight mb-2">$10K+</div>
                                    <div className="text-sm uppercase tracking-wider text-black font-bold">MRR</div>
                                    <div className="mt-4 text-xs text-black/70">Monthly recurring revenue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="py-12 bg-black text-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 text-center">
                    <p className="text-xl font-bold uppercase tracking-wide">Trusted by 50+ business owners who've grown to 100K+ followers</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsCarousel />

            {/* Pain Points Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            WHY BUSINESS OWNERS <span className="text-gray-400">STRUGGLE</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">The data shows these are the top 3 obstacles to social media success</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-gray-50 border-2 border-black p-8">
                            <Clock className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Time Drain</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Spending 20+ hours a week creating content that gets 100 views
                            </p>
                            <div className="text-sm font-bold text-gray-500">Average: 20+ hrs/week wasted</div>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8">
                            <TrendingDown className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">No Strategy</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Posting randomly with no plan, hoping something sticks
                            </p>
                            <div className="text-sm font-bold text-gray-500">Result: Inconsistent growth</div>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8">
                            <BookOpen className="w-12 h-12 mb-6 text-black" />
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Steep Learning Curve</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Trying to figure out editing, trends, and algorithms while running your business
                            </p>
                            <div className="text-sm font-bold text-gray-500">Learning time: 6+ months</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            WHY BUSINESS OWNERS <span className="text-[#c4ff00]">CHOOSE US</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Data-driven results that speak for themselves</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                        <div className="bg-white border-2 border-gray-300 p-8">
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-2xl tracking-tight">Save 16+ Hours Every Week</h3>
                                <div className="font-bold text-4xl text-[#c4ff00]">16+</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                You film for 4 hours a month. We handle the other 60+ hours of research, scripting, editing, and posting. Run your business instead of becoming a content creator.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-2xl tracking-tight">10X Your Reach in 6 Months</h3>
                                <div className="font-bold text-4xl text-[#c4ff00]">10X</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Our proven system took clients from 700 to 450K followers. Your content gets seen by your ideal customers, not just random scrollers.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-2xl tracking-tight">Turn Followers Into Paying Customers</h3>
                                <div className="font-bold text-3xl text-[#c4ff00]">$10K+</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                936K followers generated $10K+ monthly revenue for one client. We don't just chase vanity metrics—we create content that drives sales and leads.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Done-For-You Content Strategy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                No more guessing what to post. Our data-driven approach studies the top 1% in your niche and replicates what actually works.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Professional Quality Without the Learning Curve</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Skip the 6-month learning curve of mastering editing software. Our team delivers scroll-stopping content that looks like you hired a full production crew.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 hover:border-[#c4ff00] transition-colors">
                            <h3 className="font-bold text-2xl mb-4 tracking-tight">Consistent Growth That Compounds</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Post 15-30 shorts per month consistently. The algorithm rewards consistency—something impossible to maintain when you're doing it alone.
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
                            WHY BUILD YOUR <span className="text-[#c4ff00]">PERSONAL BRAND?</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
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
                                    <div key={index} className="border-l-4 border-[#c4ff00] pl-6 py-2 bg-gray-50">
                                        <div className="font-bold text-xl">{person.name}</div>
                                        <div className="text-gray-600">{person.business}</div>
                                        <div className="text-black font-bold text-lg">{person.achievement}</div>
                                    </div>
                                ))}
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

            {/* Process Section */}
            <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            OUR <span className="text-[#c4ff00]">PROVEN</span> PROCESS
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Four steps backed by data and optimized for maximum ROI.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-white">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">RESEARCH</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    We find and study the top creators/best performing content in your niche on social media.
                                </p>
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Competitor Analysis</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Trend Identification</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Audience Insights</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-white">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">SCRIPT</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    Using the research and information on you and your business. We script an entire month of short form content.
                                </p>
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Hook Optimization</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">CTA Testing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">SEO Keywords</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-white">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">FILM & EDIT</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    You film the scripts. We edit the videos.
                                </p>
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Color Grading</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Captions & Graphics</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Sound Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-white">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">4</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">UPLOAD</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube, Linkedin).
                                </p>
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Multi-Platform</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Peak Timing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#c4ff00]" />
                                        <span className="font-bold">Performance Tracking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            CHOOSE YOUR <span className="text-[#c4ff00]">GROWTH PLAN</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Data-driven pricing for measurable results</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* GROW Plan */}
                        <div className="bg-white border-2 border-black p-8">
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

                            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider h-12">
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

                            <Button className="w-full bg-black text-[#c4ff00] hover:bg-gray-900 font-bold uppercase tracking-wider h-12">
                                BOOK A CALL
                            </Button>
                        </div>

                        {/* DOMINATE Plan */}
                        <div className="bg-white border-2 border-black p-8">
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

                            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider h-12">
                                BOOK A CALL
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
                            FREQUENTLY ASKED <span className="text-[#c4ff00]">QUESTIONS</span>
                        </h2>
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
                                    "What do all these people and their businesses have in common? Kylie Jenner (Kylie Cosmetics - Youngest Billionaire), Rihanna (Fenty Beauty - $2.8B), Ryan Reynolds (Mint Mobile - Sold for $1B), Logan Paul (Prime - $3.1B), The Rock (Teremana Tequila - $3.5B). All these people built up their personal brands by acting, singing, TV, or social media. When they started businesses because they had such BIG personal brands their companies exploded. Their personal brand essentially was their marketing. Social media is the best way for your average person to do this without being an actor, singer, or athlete.",
                            },
                            {
                                question: "Why should my business be on social media?",
                                answer:
                                    "There are 4.26 billion social media users. 54% of people use social media to research products. 71% of purchase decisions are made on social media. The opportunity is massive.",
                            },
                            {
                                question: "How much time does it take?",
                                answer:
                                    "We take on as much of the workload as we can. We will research, script, edit and upload for you. The only thing you have to do is film since it is your personal brand. Filming time varies person to person but for most people 4 hours a month.",
                            },
                            {
                                question: "What kind of results can I expect?",
                                answer:
                                    "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow! Case Study 1: Career Strategist went from 700 to 450K followers in 6 months. Case Study 2: Social Media Marketing went from 0 to 100K followers in 7 months.",
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
                                className="bg-gray-50 border-2 border-black hover:border-[#c4ff00] transition-colors group"
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

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-black text-white">
                <div className="max-w-[1140px] mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-8">
                        READY FOR <span className="text-[#c4ff00]">MEASURABLE</span> GROWTH?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Join the businesses generating real revenue from social media. Your data-driven growth starts now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-xl font-bold uppercase tracking-wider h-16 px-12"
                        >
                            Book Your Free Strategy Call
                            <TrendingUp className="w-6 h-6 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-white border-t border-gray-200">
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
