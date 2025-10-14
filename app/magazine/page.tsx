'use client'

import { Button } from "@/components/ui/button"
import { Plus, Minus, Check, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
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
            name: "@theyounetworkhq",
            description: "Karl Morningstar | CEO | Franchise Consultant",
            before: ["Posts: 21", "Followers: 34"],
            after: ["Posts: 376", "Followers: 421K"],
            quote: '"I am on the plane flying back, and so many leads are coming in, I can\'t finish any of my other work. I am going to have to hire an admin or AI the shit out of this! Thanks!"',
        },
        {
            number: "2",
            name: "@iam_susanaalba",
            description: "Leadership & Career Coach",
            before: ["Posts: 315", "Followers: 700"],
            after: ["Posts: 1,428", "Followers: 936K"],
            quote: '"The support from Personal Brand Launch has significantly impacted my business, enabling us to generate over $10K in monthly revenue. Partnering with them has proven to be the best business decision I\'ve ever made."',
        },
        {
            number: "3",
            name: "@_boldbreak",
            description: "Gabby | Volleyball & Resilience Coach",
            before: ["Followers: 2,607"],
            after: ["Posts: 599", "Followers: 30.2K"],
            quote: '"Yaaaay! I\'m so excited. I actually have so many leads in my DM\'s that I have to hustle to create a paid plan in my app for mental performance coaching to capitalize on the opportunity. I also had someone reach out for a speaking engagement! Crazy!"',
        },
    ]

    return (
        <section className="border-b border-gray-200">
            <div className="max-w-[1140px] mx-auto px-6 py-20">
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-16">
                    Real people, <span className="italic">real results</span>
                </h2>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="bg-white border border-gray-200 p-8 mx-auto">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            {/* Number Square - Top on mobile, Left on desktop */}
                                            <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-100 overflow-hidden flex items-center justify-center hover:bg-[#c4ff00]/20 transition-colors duration-300">
                                                <span className="text-gray-400 text-5xl font-serif">{testimonial.number}</span>
                                            </div>

                                            {/* Content - Bottom on mobile, Right on desktop */}
                                            <div className="flex-1">
                                                {/* Quote - Main Focus */}
                                                <p className="text-gray-700 italic text-xl mb-6 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Name and Description - Smaller */}
                                                <h3 className="font-medium mb-1">{testimonial.name}</h3>
                                                <p className="text-gray-600 mb-4 text-sm">
                                                    {testimonial.description}
                                                </p>

                                                {/* Before/After Stats with Arrow */}
                                                <div className="flex items-center gap-4 text-xs">
                                                    <div className="text-gray-500">
                                                        <div className="uppercase tracking-wider mb-1">Before</div>
                                                        {testimonial.before.map((item, i) => (
                                                            <div key={i}>{item}</div>
                                                        ))}
                                                    </div>
                                                    <div className="text-xl">→</div>
                                                    <div>
                                                        <div className="uppercase tracking-wider mb-1 text-gray-500">After</div>
                                                        {testimonial.after.map((item, i) => (
                                                            <div key={i} className="font-medium">{item.includes('K') ? <span className="text-[#c4ff00] bg-[#c4ff00]/10 px-1">{item}</span> : item}</div>
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 p-3 hover:bg-[#c4ff00]/10 transition-colors rounded-sm"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 p-3 hover:bg-[#c4ff00]/10 transition-colors rounded-sm"
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
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === selectedIndex ? "bg-[#c4ff00]" : "bg-gray-300"
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

export default function MagazinePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-[#fdfcf9] text-gray-900">
            {/* Hero Section */}
            <section className="border-b border-gray-200">
                <div className="max-w-[1140px] mx-auto px-6 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="font-serif text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
                                Blow up your <span className="italic">social media</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                                We create viral content for your brand. We research, script, edit, and post viral content for your brand. You just have to film it.
                            </p>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Limited spots available</p>
                                <Button className="bg-[#c4ff00] hover:bg-[#b3e600] text-black font-medium px-8 py-6 text-lg rounded-sm">
                                    Book Your Free Strategy Call
                                </Button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#c4ff00]/10 to-[#c4ff00]/5 aspect-square rounded-sm flex items-center justify-center border border-gray-200">
                            <div className="text-center p-8">
                                <div className="text-6xl font-serif mb-4">📈</div>
                                <p className="text-sm text-gray-600">Visual content placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-[1140px] mx-auto px-6 py-12">
                    <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
                        Trusted by 50+ business owners who've grown to 100K+ followers
                    </p>
                    <div className="flex justify-center gap-12 items-center opacity-60">
                        <div className="text-xs text-gray-400 font-medium">@theyounetworkhq</div>
                        <div className="text-xs text-gray-400 font-medium">@iam_susanaalba</div>
                        <div className="text-xs text-gray-400 font-medium">@_boldbreak</div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsCarousel />

            {/* Pain Points */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-[1140px] mx-auto px-6 py-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-16">
                        Why business owners <span className="italic">struggle</span> with social media
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="border-l-2 border-gray-300 pl-6">
                            <h3 className="font-medium text-xl mb-3">Time Drain</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Spending 20+ hours a week creating content that gets 100 views
                            </p>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-6">
                            <h3 className="font-medium text-xl mb-3">No Strategy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Posting randomly with no plan, hoping something sticks
                            </p>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-6">
                            <h3 className="font-medium text-xl mb-3">Steep Learning Curve</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trying to figure out editing, trends, and algorithms while running your business
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Old Way vs New Way */}
            <section className="border-b border-gray-200">
                <div className="max-w-[1140px] mx-auto px-6 py-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-16">
                        The <span className="italic">better</span> way
                    </h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Old Way */}
                        <div className="bg-white border border-gray-200 p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <X className="w-5 h-5 text-gray-400" />
                                <h3 className="font-medium text-xl">Old Way: DIY Social Media</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>Spend 20+ hours/week researching trends</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>Learn complex editing software</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>Get random results with no strategy</span>
                                </li>
                            </ul>
                            <p className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
                                Result: Burned out with 100 views per post
                            </p>
                        </div>

                        {/* New Way */}
                        <div className="bg-[#c4ff00]/5 border-2 border-[#c4ff00] p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Check className="w-5 h-5 text-[#c4ff00]" />
                                <h3 className="font-medium text-xl">New Way: Personal Brand Launch</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>We research the top-performing content in your niche</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>Professional editing team handles post-production</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>–</span>
                                    <span>Data-driven strategy based on what works</span>
                                </li>
                            </ul>
                            <p className="mt-6 pt-6 border-t border-gray-300 text-sm font-medium">
                                Result: 700 → 450K followers in 6 months, $10K+ monthly revenue
                            </p>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">Save 16+ Hours Every Week</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                You film for 4 hours a month. We handle the other 60+ hours of research, scripting, editing, and posting.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">10X Your Reach</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Proven system that took clients from 700 to 1M followers
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">Turn Followers Into Customers</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Content that drives sales, not just likes
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">Done-For-You Strategy</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our data-driven approach studies the top 1% in your niche and replicates what works
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">Professional Quality</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Skip the learning curve. Our team delivers scroll-stopping content that looks like a full production crew
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-medium mb-2">Consistent Growth</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Post 15-30 shorts per month consistently. The algorithm rewards consistency
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-[1140px] mx-auto px-6 py-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-16">
                        How it <span className="italic">works</span>
                    </h2>
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-[#c4ff00] flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-serif">1</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">Research</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We find and study the top creators/best performing content in your niche on social media
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-[#c4ff00] flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-serif">2</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">Script</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Using the research and information on you and your business, we script an entire month of short form content
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-[#c4ff00] flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-serif">3</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">Film & Edit</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                You film the scripts. We edit the videos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-[#c4ff00] flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-serif">4</span>
                            </div>
                            <h3 className="font-medium text-lg mb-2">Upload</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, Youtube, Linkedin)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-16">
                        Frequently asked <span className="italic">questions</span>
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "How do I know if I am fit?",
                                a: "If you are a business owner who wants to grow and sell on social media and is willing to invest in a growth system that works then book a call. If you are not willing to invest please do not."
                            },
                            {
                                q: "What is the point of building up your personal brand?",
                                a: "What do all these people and their businesses have in common? Kylie Jenner - Kylie Cosmetics, Rihanna - Fenty Beauty, Ryan Reynolds - Mint Mobile, Logan Paul - Prime, The Rock - Teremana Tequila. All these people built up their personal brands by acting, singing, TV, or social media. When they started businesses because they had such BIG personal brands their companies exploded. Their personal brand essentially was their marketing. Social media is the best way for your average person to do this without being an actor, singer, or athlete."
                            },
                            {
                                q: "Why should my business be on social media?",
                                a: "There are 4.26 billion social media users. 54% of people use social media to research products. 71% of purchase decisions are made on social media."
                            },
                            {
                                q: "How much time does it take?",
                                a: "We take on as much of the workload as we can. We will research, script, edit and upload for you. The only thing you have to do is film since it is your personal brand. Filming time varies person to person but for most people 4 hours a month. But we do not guarantee a time because for everyone it is different."
                            },
                            {
                                q: "What kind of results can I expect?",
                                a: "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow! Case Study 1: Career Strategist went from 700 followers to 450K followers in 6 months. Case Study 2: Social Media Marketing for Business Owners went from 0 followers to 100K followers in 7 months."
                            },
                            {
                                q: "What is short form content?",
                                a: "Short form content are videos 60 seconds or less in 9:16 format. These are your Instagram Reels, Facebook Reels, TikToks, YouTube Shorts, etc."
                            },
                            {
                                q: "What social media platforms do you work with?",
                                a: "Instagram, TikTok, Facebook, YouTube, LinkedIn, and Twitter. Note: We optimize for Instagram because as of now it's the best platform to grow and sell on social media for business owners."
                            },
                            {
                                q: "How long does it take to see results?",
                                a: "You will start seeing results when we start posting videos! To do the strategy call, research, scripting, filming, and editing takes about 3 weeks and then the posting begins!"
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 bg-white">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium pr-4">{faq.q}</span>
                                    {openFaq === idx ? (
                                        <Minus className="w-5 h-5 flex-shrink-0 text-[#c4ff00]" />
                                    ) : (
                                        <Plus className="w-5 h-5 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-[1140px] mx-auto px-6 py-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light text-center mb-4">
                        Choose your <span className="italic">growth</span> plan
                    </h2>
                    <p className="text-center text-gray-600 mb-16">Investment in your brand's future</p>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* GROW */}
                        <div className="bg-white border border-gray-200 p-8">
                            <h3 className="font-medium text-xl mb-2">Grow</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-serif">$2,995</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            
                            <div className="space-y-6 mb-8">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Content Volume</p>
                                    <p className="text-sm">15 Shorts/Month</p>
                                    <p className="text-sm">7 Sales Focused Instagram Stories</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Services Included</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• Onboarding/Review Calls</li>
                                        <li>• Research</li>
                                        <li>• Scripting</li>
                                        <li>• Editing</li>
                                        <li>• Uploading</li>
                                        <li>• 24/7 Weekday Email Support</li>
                                        <li>• Monthly Reports</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Bonus</p>
                                    <p className="text-sm">✨ Optimize Your Profile Checklist</p>
                                </div>
                            </div>
                            
                            <Button className="w-full bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-medium">
                                Book a Call
                            </Button>
                        </div>

                        {/* SCALE - Most Popular */}
                        <div className="bg-[#c4ff00]/5 border-2 border-[#c4ff00] p-8 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c4ff00] px-4 py-1 text-xs font-medium uppercase tracking-wider">
                                Most Popular
                            </div>
                            <h3 className="font-medium text-xl mb-2">Scale</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-serif">$3,495</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            
                            <div className="space-y-6 mb-8">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Content Volume</p>
                                    <p className="text-sm">20 Shorts/Month</p>
                                    <p className="text-sm">10 Sales Focused Instagram Stories</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Services Included</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• Onboarding/Review Calls</li>
                                        <li>• Research</li>
                                        <li>• Scripting</li>
                                        <li>• Editing</li>
                                        <li>• Uploading</li>
                                        <li>• 24/7 Weekday Email Support</li>
                                        <li>• Monthly Reports</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Bonus</p>
                                    <p className="text-sm">✨ Optimize Your Profile Checklist</p>
                                </div>
                            </div>
                            
                            <Button className="w-full bg-[#c4ff00] hover:bg-[#b3e600] text-black font-medium">
                                Book a Call
                            </Button>
                        </div>

                        {/* DOMINATE */}
                        <div className="bg-white border border-gray-200 p-8">
                            <h3 className="font-medium text-xl mb-2">Dominate</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-serif">$4,495</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            
                            <div className="space-y-6 mb-8">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Content Volume</p>
                                    <p className="text-sm">30 Shorts/Month</p>
                                    <p className="text-sm">15 Sales Focused Instagram Stories</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Services Included</p>
                                    <ul className="text-sm space-y-1">
                                        <li>• Onboarding/Review Calls</li>
                                        <li>• Research</li>
                                        <li>• Scripting</li>
                                        <li>• Editing</li>
                                        <li>• Uploading</li>
                                        <li>• 24/7 Weekday Email Support</li>
                                        <li>• Monthly Reports</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Bonus</p>
                                    <p className="text-sm">✨ Optimize Your Profile Checklist</p>
                                </div>
                            </div>
                            
                            <Button className="w-full bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-medium">
                                Book a Call
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="border-b border-gray-200">
                <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                    <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
                        Ready to go <span className="italic">viral?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Join 50+ business owners who've transformed their social media presence
                    </p>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Limited spots available</p>
                        <Button className="bg-[#c4ff00] hover:bg-[#b3e600] text-black font-medium px-8 py-6 text-lg rounded-sm">
                            Book Your Free Strategy Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-[1140px] mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-[#c4ff00]" />
                                <span className="font-medium text-white">PBLAUNCH</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Personal Brand Launch - We create viral content for your brand
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Content Creation</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Strategy</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Editing</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Social Media Management</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">TikTok</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-[#c4ff00] transition-colors">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8">
                        <p className="text-sm text-gray-500 text-center">
                            © 2025 Personal Brand Launch. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

