import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Target, BarChart3, Home, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ResultsDriven() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-200">
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
                                href="#metrics"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Metrics
                            </a>
                            <a
                                href="#proof"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                Proof
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
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff00] mb-8">
                                    <Target className="w-5 h-5 text-black" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-black">Data-Driven Growth</span>
                                </div>

                                <h1 className="font-bold text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8">
                                    PROVEN
                                    <br />
                                    <span className="text-[#c4ff00]">RESULTS</span>
                                    <br />
                                    GUARANTEED
                                </h1>

                                <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                                    Stop guessing. Start growing. Our data-driven approach delivers measurable ROI for busy business
                                    owners.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <Button
                                        size="lg"
                                        className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-14 px-8"
                                    >
                                        See The Numbers
                                        <ArrowRight className="w-6 h-6 ml-2" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-black hover:bg-black hover:text-white bg-transparent"
                                    >
                                        Book Strategy Call
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

            {/* Metrics Section */}
            <section id="metrics" className="py-20 lg:py-32 bg-black text-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            THE <span className="text-[#c4ff00]">NUMBERS</span> DON'T LIE
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real metrics from real clients. This is what data-driven growth looks like.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        <div className="bg-white/5 border-2 border-[#c4ff00] p-8">
                            <BarChart3 className="w-12 h-12 text-[#c4ff00] mb-6" />
                            <div className="font-bold text-5xl text-[#c4ff00] tracking-tight mb-4">3.2M</div>
                            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">TOTAL IMPRESSIONS</div>
                            <p className="text-sm text-gray-400">Average monthly impressions across all client accounts</p>
                        </div>

                        <div className="bg-white/5 border-2 border-[#c4ff00] p-8">
                            <TrendingUp className="w-12 h-12 text-[#c4ff00] mb-6" />
                            <div className="font-bold text-5xl text-[#c4ff00] tracking-tight mb-4">847%</div>
                            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">ENGAGEMENT INCREASE</div>
                            <p className="text-sm text-gray-400">Average engagement rate improvement in first 90 days</p>
                        </div>

                        <div className="bg-white/5 border-2 border-[#c4ff00] p-8">
                            <Target className="w-12 h-12 text-[#c4ff00] mb-6" />
                            <div className="font-bold text-5xl text-[#c4ff00] tracking-tight mb-4">24</div>
                            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">SEATS SOLD OUT</div>
                            <p className="text-sm text-gray-400">Summit sold out in under 24 hours after launch</p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-[#c4ff00] p-12 border-4 border-white">
                        <h3 className="font-bold text-4xl text-black tracking-tight mb-8 text-center">AVERAGE CLIENT RESULTS</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="font-bold text-5xl text-black mb-2">4</div>
                                <div className="text-sm uppercase tracking-wider text-black font-bold">MONTHS</div>
                                <div className="text-xs text-black/70 mt-2">To significant growth</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-5xl text-black mb-2">70X</div>
                                <div className="text-sm uppercase tracking-wider text-black font-bold">GROWTH</div>
                                <div className="text-xs text-black/70 mt-2">Follower increase</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-5xl text-black mb-2">4+</div>
                                <div className="text-sm uppercase tracking-wider text-black font-bold">LEADS/DAY</div>
                                <div className="text-xs text-black/70 mt-2">High-value inquiries</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-5xl text-black mb-2">$10K+</div>
                                <div className="text-sm uppercase tracking-wider text-black font-bold">REVENUE</div>
                                <div className="text-xs text-black/70 mt-2">Monthly increase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            OUR <span className="text-[#c4ff00]">PROVEN</span> PROCESS
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Four steps backed by data and optimized for maximum ROI.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-gray-50">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">RESEARCH & ANALYSIS</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    We analyze top-performing content in your niche using proprietary data tools. Identify what works,
                                    eliminate what doesn't.
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

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-gray-50">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">STRATEGIC SCRIPTING</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    30 days of high-converting scripts optimized for engagement and sales. Every word is tested and
                                    proven.
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

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-gray-50">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">PROFESSIONAL EDITING</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    You film on your phone. We transform it into scroll-stopping content with professional editing and
                                    effects.
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

                        <div className="flex gap-6 items-start border-l-8 border-[#c4ff00] pl-8 py-6 bg-gray-50">
                            <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center flex-shrink-0">
                                <span className="font-bold text-3xl text-black">4</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-3xl tracking-tight mb-3">OPTIMIZED DISTRIBUTION</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    Strategic posting across all platforms at peak engagement times. We handle everything while you track
                                    the metrics.
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

            {/* Social Proof Section */}
            <section id="proof" className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            CASE <span className="text-[#c4ff00]">STUDIES</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real businesses. Real growth. Real revenue.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white border-4 border-black p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center">
                                    <span className="font-bold text-2xl text-black">SM</span>
                                </div>
                                <div>
                                    <div className="font-bold text-xl">Sarah M.</div>
                                    <div className="text-sm text-gray-600">Life Coach</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 border-2 border-[#c4ff00]">
                                    <div className="text-sm uppercase tracking-wider text-gray-600 mb-1">BEFORE</div>
                                    <div className="font-bold text-3xl text-black">120</div>
                                    <div className="text-xs text-gray-600">followers</div>
                                </div>
                                <div className="bg-[#c4ff00] p-4 border-2 border-black">
                                    <div className="text-sm uppercase tracking-wider text-black mb-1">AFTER</div>
                                    <div className="font-bold text-3xl text-black">8,500</div>
                                    <div className="text-xs text-black">followers</div>
                                </div>
                            </div>
                            <div className="bg-[#c4ff00] p-4 mb-6">
                                <div className="font-bold text-4xl text-black">70X GROWTH</div>
                                <div className="text-sm text-black">in 4 months</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "PBL helped get my business off the ground. I now have a strong foundation to keep growing with
                                consistent engagement and real followers who love my content."
                            </p>
                        </div>

                        <div className="bg-white border-4 border-black p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center">
                                    <span className="font-bold text-2xl text-black">MT</span>
                                </div>
                                <div>
                                    <div className="font-bold text-xl">Marcus T.</div>
                                    <div className="text-sm text-gray-600">E-commerce Owner</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 border-2 border-[#c4ff00]">
                                    <div className="text-sm uppercase tracking-wider text-gray-600 mb-1">TIMEFRAME</div>
                                    <div className="font-bold text-3xl text-black">30</div>
                                    <div className="text-xs text-gray-600">days</div>
                                </div>
                                <div className="bg-[#c4ff00] p-4 border-2 border-black">
                                    <div className="text-sm uppercase tracking-wider text-black mb-1">REVENUE</div>
                                    <div className="font-bold text-3xl text-black">$100K</div>
                                    <div className="text-xs text-black">generated</div>
                                </div>
                            </div>
                            <div className="bg-[#c4ff00] p-4 mb-6">
                                <div className="font-bold text-4xl text-black">$100K IN 30 DAYS</div>
                                <div className="text-sm text-black">from social media</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                "The professional quality of the shorts that PBL creates absolutely contributed to hitting $100K in a
                                single month. Game-changing results."
                            </p>
                        </div>

                        <div className="bg-white border-4 border-black p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center">
                                    <span className="font-bold text-2xl text-black">AK</span>
                                </div>
                                <div>
                                    <div className="font-bold text-xl">Amanda K.</div>
                                    <div className="text-sm text-gray-600">Mental Performance Coach</div>
                                </div>
                            </div>
                            <div className="bg-[#c4ff00] p-6 mb-6">
                                <div className="font-bold text-5xl text-black mb-2">4+</div>
                                <div className="text-sm uppercase tracking-wider text-black">HIGH-VALUE LEADS PER DAY</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                "I have so many leads in my DMs that I had to create a paid plan for mental performance coaching to
                                capitalize on the opportunity. Also had someone reach out for a speaking engagement!"
                            </p>
                            <div className="flex gap-2 text-sm">
                                <div className="bg-gray-100 px-3 py-1 font-bold">LEADS</div>
                                <div className="bg-gray-100 px-3 py-1 font-bold">SPEAKING GIGS</div>
                                <div className="bg-gray-100 px-3 py-1 font-bold">NEW REVENUE</div>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#c4ff00] flex items-center justify-center">
                                    <span className="font-bold text-2xl text-black">CP</span>
                                </div>
                                <div>
                                    <div className="font-bold text-xl">Chris P.</div>
                                    <div className="text-sm text-gray-600">Digital Products</div>
                                </div>
                            </div>
                            <div className="bg-[#c4ff00] p-6 mb-6">
                                <div className="font-bold text-5xl text-black mb-2">$10K+</div>
                                <div className="text-sm uppercase tracking-wider text-black">MONTHLY RECURRING REVENUE</div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                "The support from Personal Brand Launch has significantly impacted my business, enabling us to generate
                                over $10K in monthly revenue. Their expertise has been crucial in identifying industry trends and
                                crafting content that drives sales."
                            </p>
                            <div className="flex gap-2 text-sm">
                                <div className="bg-gray-100 px-3 py-1 font-bold">+$10K MRR</div>
                                <div className="bg-gray-100 px-3 py-1 font-bold">SALES CONTENT</div>
                                <div className="bg-gray-100 px-3 py-1 font-bold">TREND ANALYSIS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-black text-white">
                <div className="container mx-auto px-4 lg:px-8 text-center">
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
                            Book Strategy Call
                            <TrendingUp className="w-6 h-6 ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-xl font-bold uppercase tracking-wider h-16 px-12 border-2 border-[#c4ff00] text-[#c4ff00] hover:bg-[#c4ff00] hover:text-black bg-transparent"
                        >
                            View Full Case Studies
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
