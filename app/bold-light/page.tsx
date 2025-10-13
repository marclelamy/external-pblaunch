import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Zap, Target, Rocket, ChevronDown, Home } from "lucide-react"
import Link from "next/link"

export default function BoldLight() {
    return (
        <div className="min-h-screen bg-white text-black">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#c4ff00]/20">
                <div className="container mx-auto px-4 lg:px-8">
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
                                href="#process"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Process
                            </a>
                            <a
                                href="#results"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Results
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

                <div className="container mx-auto px-4 lg:px-8 relative">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-8">
                            <Zap className="w-5 h-5 text-black" />
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Done-For-You Growth</span>
                        </div>

                        <h1 className="font-bold text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                            BLOW UP YOUR
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">SOCIAL MEDIA</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mb-12 leading-tight">
                            We create viral content for your brand. You film it. We edit it. You post it. Simple.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Button
                                size="lg"
                                className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-black"
                            >
                                Get Started
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
                                <div className="font-bold text-4xl lg:text-5xl text-black tracking-tight">3X</div>
                                <div className="text-sm uppercase tracking-wider text-gray-600 mt-1">Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">The Opportunity</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-12">
                            WHY BUILD YOUR
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">PERSONAL BRAND?</span>
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

            <section id="process" className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
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
                                description: "We study what's working in your niche. Top creators. Viral posts. Trending formats.",
                            },
                            {
                                number: "02",
                                icon: Zap,
                                title: "SCRIPTING",
                                description: "We write 30 days of scripts. Hooks that grab attention. Content that converts.",
                            },
                            {
                                number: "03",
                                icon: Rocket,
                                title: "FILM & EDIT",
                                description: "You film the scripts. We handle all editing, effects, captions, and polish.",
                            },
                            {
                                number: "04",
                                icon: TrendingUp,
                                title: "UPLOAD",
                                description: "We schedule and post everything. Optimized captions. Perfect hashtags. Done.",
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

            <section id="results" className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-[#c4ff00]/5 transform skew-y-3 origin-bottom-right" />

                <div className="container mx-auto px-4 lg:px-8 relative">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Proof</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
                            REAL RESULTS
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">REAL CLIENTS</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Sarah's Fitness", before: "2.3K", after: "47K", platform: "IG", growth: "+1,943%" },
                            { name: "Tech Startup", before: "890", after: "28K", platform: "LI", growth: "+3,046%" },
                            { name: "Local Restaurant", before: "1.5K", after: "35K", platform: "TT", growth: "+2,233%" },
                            { name: "Fashion Brand", before: "5.2K", after: "89K", platform: "IG", growth: "+1,612%" },
                            { name: "Coaching Biz", before: "780", after: "22K", platform: "YT", growth: "+2,721%" },
                            { name: "E-commerce", before: "3.1K", after: "56K", platform: "TT", growth: "+1,706%" },
                        ].map((result, index) => (
                            <div key={index} className="bg-white border-2 border-black hover:border-[#c4ff00] transition-colors p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-lg tracking-tight">{result.name}</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-[#c4ff00] text-black px-2 py-1 border border-black">
                                        {result.platform}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-gray-600 mb-1">Before</div>
                                        <div className="font-bold text-2xl">{result.before}</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6" />
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-gray-600 mb-1">After</div>
                                        <div className="font-bold text-2xl">{result.after}</div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t-2 border-[#c4ff00]">
                                    <span className="text-lg font-bold">{result.growth}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-16">
                        <div className="inline-block px-4 py-2 bg-[#c4ff00]/20 border border-[#c4ff00] mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider text-black">Testimonials</span>
                        </div>
                        <h2 className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
                            WHAT OUR CLIENTS
                            <br />
                            <span className="text-[#c4ff00] [-webkit-text-stroke:2px_black]">ARE SAYING</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-50 border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">70X GROWTH IN 4 MONTHS</div>
                                <div className="text-sm text-gray-600">120 → 8,500 followers</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                "Before I started working with PBL, my IG account only had around 120 followers. I didn't really have a
                                strategy for my content. I was just making content that I thought would work, not content based on any
                                research. After working with PBL for 4 months, I now have close to 8500 followers and growing. Not only
                                that, I'm getting a lot of engagement on a lot of reels and have gotten feedback from followers that
                                they really like my content and page. I'm very happy that I decided to work with PBL, otherwise I
                                probably would've just kept doing the same thing and not seen any results. PBL helped get my business
                                off the ground and I now have a strong foundation to keep growing."
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">$100K IN 30 DAYS</div>
                                <div className="text-sm text-gray-600">Business Revenue</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                "I wanted to tell you guys that my business just did 100k in 30 days & I absolutely believe the
                                professional quality of the shorts that PBL is doing contributed to that!"
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">PEACE OF MIND</div>
                                <div className="text-sm text-gray-600">Work/Life Balance</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                "Wanted to send an email of appreciation to you all. Not only is my account consistently growing, but
                                the peace of mind of not having to come up with ideas, edit, and post has been life-changing for my
                                work/life balance. I get to do what I love, which is educate and act, and you all do the rest. I'm so
                                grateful for everything that you guys do. Please send this to Ava and everyone else who has helped my
                                account so far. Thank you!"
                            </p>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">$10K+ MONTHLY REVENUE</div>
                                <div className="text-sm text-gray-600">Business Growth</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                "The support from Personal Brand Launch has significantly impacted my business, enabling us to generate
                                over $10K in monthly revenue. Their expertise has been crucial in identifying industry trends and
                                crafting content that drives sales. Partnering with them has proven to be the best business decision
                                I've ever made."
                            </p>
                        </div>

                        <div className="bg-[#c4ff00] text-black border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">SOLD OUT IN 24 HOURS</div>
                                <div className="text-sm">Summit Launch</div>
                            </div>
                            <p className="leading-relaxed">
                                "All 24 seats of the summit have sold out. Crazy insanity. Totalllllly wild. It was released yesterday
                                at 12 noon."
                            </p>
                        </div>

                        <div className="bg-[#c4ff00] text-black border-2 border-black p-8">
                            <div className="mb-6">
                                <div className="font-bold text-xl mb-2">HIGH-VALUE CLIENTS</div>
                                <div className="text-sm">Lead Generation</div>
                            </div>
                            <p className="leading-relaxed">
                                "Yaaaay! I'm so excited. I actually have so many leads in my DM's that I have to hustle to create a paid
                                plan in my app for mental performance coaching to capitalize on the opportunity. I also had someone
                                reach out for a speaking engagement! Crazy!"
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 border-2 border-black p-8">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            "Videos are working! I've had <span className="font-bold text-black">4 high value clients</span> reach out
                            for massive polices."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-[#c4ff00]/5 transform -skew-y-3 origin-top-left" />

                <div className="container mx-auto px-4 lg:px-8 relative">
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
                                    "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow! One of my clients is a career strategist - we grew her account from 700 followers to 450K in 6 months. My niche is social media marketing for business owners - we grew my account from 0 to 100K in 7 months. But in both cases, we built strong personal brands, 10xed our business, and have loyal followers that consist of our target customers.",
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

            <section className="py-20 lg:py-32 bg-[#c4ff00] text-black border-y-4 border-black">
                <div className="container mx-auto px-4 lg:px-8">
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
                <div className="container mx-auto px-4 lg:px-8">
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
