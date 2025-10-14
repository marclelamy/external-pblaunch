"use client"

import Link from "next/link"
import { Home, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

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
            name: "The You Network (@theyounetworkhq)",
            description: "Karl Morningstar | CEO of The You Network | Franchise Consultant",
            before: ["Posts: 21", "Followers: 34", "Following: 54"],
            after: ["Posts: 376", "Followers: 421K", "Following: 123"],
            quote: '"I am on the plane flying back, and so many leads are coming in, I can\'t finish any of my other work. I am going to have to hire an admin or AI the shit out of this! Thanks!"',
        },
        {
            number: "2",
            name: "Susana Briscoe Alba (@iam_susanaalba)",
            description: "Susana | Leadership & Career Coach | Faith Based Life Coach\nHelping Women of Color Secure 6-Figure Roles & Lead with Authority",
            before: ["Posts: 315", "Followers: 700", "Following: 426"],
            after: ["Posts: 1,428", "Followers: 936K", "Following: 827"],
            quote: '"The support from Personal Brand Launch has significantly impacted my business, enabling us to generate over $10K in monthly revenue. Their expertise has been crucial in identifying industry trends and crafting content that drives sales. Partnering with them has proven to be the best business decision I\'ve ever made."',
        },
        {
            number: "3",
            name: "The Bold Break (@_boldbreak)",
            description: "Gabby | Volleyball & Resilience Coach\nBoundaries = Confidence, Self-awareness = Success",
            before: ["Followers: 2,607", "Following: 174"],
            after: ["Posts: 599", "Followers: 30.2K", "Following: 434"],
            quote: '"Yaaaay! I\'m so excited. I actually have so many leads in my DM\'s that I have to hustle to create a paid plan in my app for mental performance coaching to capitalize on the opportunity. I also had someone reach out for a speaking engagement! Crazy!"',
        },
    ]

    return (
        <section id="testimonials" className="py-20 px-4 md:px-8 bg-neutral-100">
            <div className="max-w-[1140px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold tracking-tighter mb-4">TESTIMONIALS</h2>
                    <p className="text-xl">Real results from real clients</p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="group bg-white p-8 border-2 border-black mx-auto">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            {/* Number Square - Top on mobile, Left on desktop */}
                                            <div className="flex-shrink-0 w-full md:w-48 h-48 bg-neutral-100 overflow-hidden flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors duration-300">
                                                <span className="text-black text-6xl font-bold">{testimonial.number}</span>
                                            </div>

                                            {/* Content - Bottom on mobile, Right on desktop */}
                                            <div className="flex-1">
                                                {/* Quote - Main Focus */}
                                                <p className="text-neutral-700 italic text-xl mb-6 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Name and Description - Smaller */}
                                                <h3 className="text-base font-bold mb-1">{testimonial.name}</h3>
                                                <p className="text-neutral-600 mb-4 whitespace-pre-line text-xs">
                                                    {testimonial.description}
                                                </p>

                                                {/* Before/After Stats with Arrow */}
                                                <div className="flex items-center gap-4 text-xs">
                                                    <div className="text-neutral-600">
                                                        {testimonial.before.map((item, i) => (
                                                            <div key={i}>{item}</div>
                                                        ))}
                                                    </div>
                                                    <div className="text-2xl">→</div>
                                                    <div className="text-neutral-600 font-bold">
                                                        {testimonial.after.map((item, i) => (
                                                            <div key={i}>{item}</div>
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

export default function SwissDesign() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
                <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link href="/">
                            <button className="hover:bg-gray-100 p-2 transition-colors">
                                <Home className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link href="/" className="text-xl font-bold tracking-tighter">
                            PERSONAL BRAND LAUNCH
                        </Link>
                    </div>
                    <div className="flex space-x-8">
                        <Link
                            href="#testimonials"
                            className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link href="#pricing" className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors">
                            Pricing
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-[1140px] mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
                            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
                            BLOW UP
                            <br />
                            YOUR
                            <br />
                            SOCIAL
                            <br />
                            MEDIA
                        </h1>
                        <p className="text-xl max-w-xl mb-8">
                            We create viral content for your brand. We research, script, edit, and post viral content for your brand.
                            You just have to film it.
                        </p>
                        <div className="mt-8">
                            <p className="text-sm uppercase tracking-widest mb-3">Limited spots available</p>
                            <Link
                                href="#pricing"
                                className="inline-block px-8 py-3 bg-[#c4ff00] text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-black"
                            >
                                Book Your Free Strategy Call
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex items-center justify-center">
                        <div className="relative w-full aspect-square bg-[#c4ff00]">
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="py-12 px-4 md:px-8 bg-black text-white">
                <div className="max-w-[1140px] mx-auto text-center">
                    <p className="text-xl mb-4">Trusted by 50+ business owners who've grown to 100K+ followers</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsCarousel />

            {/* Pain Points Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">
                        WHY BUSINESS OWNERS STRUGGLE WITH SOCIAL MEDIA
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-neutral-100 p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Time Drain</h3>
                            <p className="text-lg">Spending 20+ hours a week creating content that gets 100 views</p>
                        </div>

                        <div className="bg-neutral-100 p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">No Strategy</h3>
                            <p className="text-lg">Posting randomly with no plan, hoping something sticks</p>
                        </div>

                        <div className="bg-neutral-100 p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Steep Learning Curve</h3>
                            <p className="text-lg">
                                Trying to figure out editing, trends, and algorithms while running your business
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-100">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">
                        WHY BUSINESS OWNERS CHOOSE PERSONAL BRAND LAUNCH
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-3xl font-bold mb-4">Old Way: DIY Social Media ❌</h3>
                            <ul className="space-y-3 mb-6">
                                <li>• Spend 20+ hours/week researching trends</li>
                                <li>• Learn complex editing software</li>
                                <li>• Get random results with no strategy</li>
                            </ul>
                            <p className="font-bold">Result: Burned out with 100 views per post</p>
                        </div>

                        <div className="bg-white p-8 border-2 border-[#c4ff00] border-4">
                            <h3 className="text-3xl font-bold mb-4">New Way: Personal Brand Launch ✅</h3>
                            <ul className="space-y-3 mb-6">
                                <li>• We research the top-performing content in your niche</li>
                                <li>• Professional editing team handles post-production</li>
                                <li>• Data-driven strategy based on what works</li>
                            </ul>
                            <p className="font-bold">Result: 700 → 450K followers in 6 months, $10K+ monthly revenue</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Save 16+ Hours Every Week</h3>
                            <p>
                                You film for 4 hours a month. We handle the other 60+ hours of research, scripting, editing, and
                                posting. Run your business instead of becoming a content creator.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">100X Your Reach in 6 Months</h3>
                            <p>
                                Our proven system took clients from 700 to 450K followers. Your content gets seen by your ideal
                                customers, not just random scrollers.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Turn Followers Into Paying Customers</h3>
                            <p>
                                936K followers generated $10K+ monthly revenue for one client. We don't just chase vanity metrics—we
                                create content that drives sales and leads.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Done-For-You Content Strategy</h3>
                            <p>
                                No more guessing what to post. Our data-driven approach studies the top 1% in your niche and replicates
                                what actually works.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Professional Quality Without the Learning Curve</h3>
                            <p>
                                Skip the 6-month learning curve of mastering editing software. Our team delivers scroll-stopping content
                                that looks like you hired a full production crew.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black">
                            <h3 className="text-2xl font-bold mb-4">Consistent Growth That Compounds</h3>
                            <p>
                                Post 15-30 shorts per month consistently. The algorithm rewards consistency—something impossible to
                                maintain when you're doing it alone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-32 px-4 md:px-8 bg-black text-white">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter mb-16 text-center">HOW IT WORKS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
                        <div>
                            <div className="text-8xl font-bold mb-6 text-[#c4ff00]">1</div>
                            <h3 className="text-2xl font-bold mb-4">Research</h3>
                            <p className="text-neutral-400">
                                We find and study the top creators/best performing content in your niche on social media.
                            </p>
                        </div>

                        <div>
                            <div className="text-8xl font-bold mb-6 text-[#c4ff00]">2</div>
                            <h3 className="text-2xl font-bold mb-4">Script</h3>
                            <p className="text-neutral-400">
                                Using the research and information on you and your business. We script an entire month of short form
                                content.
                            </p>
                        </div>

                        <div>
                            <div className="text-8xl font-bold mb-6 text-[#c4ff00]">3</div>
                            <h3 className="text-2xl font-bold mb-4">Film & Edit</h3>
                            <p className="text-neutral-400">You film the scripts. We edit the videos.</p>
                        </div>

                        <div>
                            <div className="text-8xl font-bold mb-6 text-[#c4ff00]">4</div>
                            <h3 className="text-2xl font-bold mb-4">Upload</h3>
                            <p className="text-neutral-400">
                                We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube,
                                Linkedin).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 md:px-8 bg-[#c4ff00]">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">PRICING</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* GROW Plan */}
                        <div className="bg-white text-black p-8 border-2 border-black">
                            <h3 className="text-4xl font-bold mb-4">GROW</h3>
                            <p className="text-5xl font-bold mb-8">
                                $2,995<span className="text-2xl">/month</span>
                            </p>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>
                                        • <strong>15 Shorts/Month</strong>
                                    </li>
                                    <li>
                                        • <strong>7 Sales Focused Instagram Stories</strong>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Services Included</p>
                                <ul className="space-y-2">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-widest mb-3">Bonus</p>
                                <p>✨ Optimize Your Profile Checklist</p>
                            </div>

                            <Link
                                href="#contact"
                                className="block text-center px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors border-2 border-black"
                            >
                                Book A Call
                            </Link>
                        </div>

                        {/* SCALE Plan */}
                        <div className="bg-white text-black p-8 border-4 border-black relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm uppercase tracking-widest">
                                Most Popular
                            </div>
                            <h3 className="text-4xl font-bold mb-4">SCALE</h3>
                            <p className="text-5xl font-bold mb-8">
                                $3,495<span className="text-2xl">/month</span>
                            </p>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>
                                        • <strong>20 Shorts/Month</strong>
                                    </li>
                                    <li>
                                        • <strong>10 Sales Focused Instagram Stories</strong>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Services Included</p>
                                <ul className="space-y-2">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-widest mb-3">Bonus</p>
                                <p>✨ Optimize Your Profile Checklist</p>
                            </div>

                            <Link
                                href="#contact"
                                className="block text-center px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors border-2 border-black"
                            >
                                Book A Call
                            </Link>
                        </div>

                        {/* DOMINATE Plan */}
                        <div className="bg-white text-black p-8 border-2 border-black">
                            <h3 className="text-4xl font-bold mb-4">DOMINATE</h3>
                            <p className="text-5xl font-bold mb-8">
                                $4,495<span className="text-2xl">/month</span>
                            </p>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Content Volume</p>
                                <ul className="space-y-2">
                                    <li>
                                        • <strong>30 Shorts/Month</strong>
                                    </li>
                                    <li>
                                        • <strong>15 Sales Focused Instagram Stories</strong>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm uppercase tracking-widest mb-3">Services Included</p>
                                <ul className="space-y-2">
                                    <li>• Onboarding/Review Calls</li>
                                    <li>• Research</li>
                                    <li>• Scripting</li>
                                    <li>• Editing</li>
                                    <li>• Uploading</li>
                                    <li>• 24/7 Weekday Email Support</li>
                                    <li>• Monthly Reports</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-widest mb-3">Bonus</p>
                                <p>✨ Optimize Your Profile Checklist</p>
                            </div>

                            <Link
                                href="#contact"
                                className="block text-center px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors border-2 border-black"
                            >
                                Book A Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">FAQ</h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">How do I know if I am fit?</h3>
                            <p className="text-lg">
                                If you are a business owner who wants to grow and sell on social media and is willing to invest in a
                                growth system that works then book a call. If you are not willing to invest please do not.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">What is the point of building up your personal brand?</h3>
                            <p className="text-lg mb-4">What do all these people and their businesses have in common?</p>
                            <ul className="space-y-2 mb-4">
                                <li>
                                    • <strong>Kylie Jenner</strong> - Kylie Cosmetics - Youngest Person to Become a Billionaire
                                </li>
                                <li>
                                    • <strong>Rihanna</strong> - Fenty Beauty - 2.8 Billion Dollar Valuation
                                </li>
                                <li>
                                    • <strong>Ryan Reynolds</strong> - Mint Mobile - Sold for 1 Billion
                                </li>
                                <li>
                                    • <strong>Logan Paul</strong> - Prime - 3.1 Billion Dollar Valuation
                                </li>
                                <li>
                                    • <strong>The Rock</strong> - Teremana Tequila - 3.5 Billion Dollar Valuation
                                </li>
                            </ul>
                            <p className="text-lg mb-4">
                                All these people built up their personal brands by acting, singing, TV, or social media. When they
                                started businesses because they had such BIG personal brands their companies exploded. Their personal
                                brand essentially was their marketing.
                            </p>
                            <p className="text-lg">
                                Social media is the best way for your average person to do this without being an actor, singer, or
                                athlete. A regular business owner can build themselves and their business on social media like never
                                before. There is a huge opportunity here, if you don't take it your competitors will and will take all
                                your customers with them.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">Why should my business be on social media?</h3>
                            <ul className="space-y-2">
                                <li>
                                    • There are <strong>4.26 billion</strong> social media users
                                </li>
                                <li>
                                    • <strong>54%</strong> of people use social media to research products
                                </li>
                                <li>
                                    • <strong>71%</strong> of purchase decisions are made on social media
                                </li>
                            </ul>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">How much time does it take?</h3>
                            <p className="text-lg mb-4">
                                We take on as much of the workload as we can. We will research, script, edit and upload for you. The
                                only thing you have to do is film since it is your personal brand.
                            </p>
                            <p className="text-lg">
                                Filming time varies person to person but for most people <strong>4 hours a month</strong>. But we do not
                                guarantee a time because for everyone it is different.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">What kind of results can I expect?</h3>
                            <p className="text-lg mb-4">
                                Results vary from person to person. Factors like your niche, target audience, number of posts per month
                                all influence how fast you will grow!
                            </p>

                            <div className="mb-4">
                                <p className="font-bold mb-2">Case Study 1: Career Strategist</p>
                                <ul className="space-y-1">
                                    <li>
                                        • <strong>Before:</strong> 700 followers
                                    </li>
                                    <li>
                                        • <strong>After:</strong> 450K followers
                                    </li>
                                    <li>
                                        • <strong>Timeframe:</strong> 6 months
                                    </li>
                                    <li>• Everyone who has a job can be her target audience</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <p className="font-bold mb-2">Case Study 2: Social Media Marketing for Business Owners</p>
                                <ul className="space-y-1">
                                    <li>
                                        • <strong>Before:</strong> 0 followers
                                    </li>
                                    <li>
                                        • <strong>After:</strong> 100K followers
                                    </li>
                                    <li>
                                        • <strong>Timeframe:</strong> 7 months
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg">
                                In both cases, we built strong personal brands, 10xed our business, and have loyal followers that
                                consist of our target customers. Compared to paid marketing options social media looks a lot less
                                appealing. But the results you get are so much more worth it even if it takes longer to get them. I am
                                glad it's hard because otherwise, everyone would do it.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">What is short form content?</h3>
                            <p className="text-lg">
                                Short form content are videos <strong>60 seconds or less</strong> in <strong>9:16 format</strong>. These
                                are your Instagram Reels, Facebook Reels, TikToks, YouTube Shorts, etc.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">What social media platforms do you work with?</h3>
                            <p className="text-lg mb-2">Instagram, TikTok, Facebook, YouTube, LinkedIn, and Twitter.</p>
                            <p className="text-lg">
                                <strong>Note:</strong> We optimize for Instagram because as of now it's the best platform to grow and
                                sell on social media for business owners.
                            </p>
                        </div>

                        <div className="border-b-2 border-black pb-6">
                            <h3 className="text-2xl font-bold mb-4">How long does it take to see results?</h3>
                            <p className="text-lg mb-4">You will start seeing results when we start posting videos!</p>
                            <p className="text-lg">
                                To do the strategy call, research, scripting, filming, and editing takes about <strong>3 weeks</strong>{" "}
                                and then the posting begins!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 md:px-8 bg-black text-white">
                <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">© 2025 Personal Brand Launch. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors">
                            Instagram
                        </a>
                        <a href="#" className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors">
                            TikTok
                        </a>
                        <a href="#" className="text-sm uppercase tracking-widest hover:text-[#c4ff00] transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
