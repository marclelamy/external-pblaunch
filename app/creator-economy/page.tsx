'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Home, Star } from "lucide-react"
import Link from "next/link"

export default function CreatorEconomy() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-[#c4ff00]">
                <div className="container mx-auto px-4 lg:px-8">
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
                                href="#process"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#c4ff00] transition-colors"
                            >
                                How It Works
                            </a>
                            <a
                                href="#results"
                                className="text-sm font-bold uppercase tracking-wider hover:text-[#ff6b9d] transition-colors"
                            >
                                Success Stories
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

                <div className="container mx-auto px-4 lg:px-8 relative">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-4 border-[#c4ff00] rounded-full mb-8 shadow-lg">
                            <Sparkles className="w-5 h-5 text-[#c4ff00]" />
                            <span className="text-sm font-bold uppercase tracking-wider">Your Content, Supercharged</span>
                            <Heart className="w-5 h-5 text-[#ff6b9d]" />
                        </div>

                        <h1 className="font-bold text-6xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
                            Turn Your Brand Into
                            <br />
                            <span className="text-[#c4ff00]">Social Media</span>
                            <br />
                            <span className="text-[#ff6b9d]">GOLD</span> ✨
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                            We handle the boring stuff (research, scripting, editing) so you can focus on what you do best: being
                            awesome.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button
                                size="lg"
                                className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-16 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all"
                            >
                                Start Growing Today
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                className="bg-[#ff6b9d] text-white hover:bg-[#ff6b9d]/90 text-lg font-bold uppercase tracking-wider h-16 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all"
                            >
                                See The Magic ✨
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

            {/* Process Section */}
            <section id="process" className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
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
                                We study the top creators in your niche and figure out what makes content go viral. You get the insider
                                secrets!
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ff6b9d]/20 to-[#ff6b9d]/5 border-4 border-[#ff6b9d] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#ff6b9d] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">2</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">SCRIPTING ✍️</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We write a month's worth of scroll-stopping scripts. All you do is read and record. Easy peasy!
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ff8c42]/20 to-[#ff8c42]/5 border-4 border-[#ff8c42] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-[#ff8c42] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">3</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">EDIT 🎬</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                You film the content (just use your phone!), we make it look like a million bucks with pro editing.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#c4ff00]/20 via-[#ff6b9d]/10 to-[#ff8c42]/10 border-4 border-[#c4ff00] rounded-3xl p-8 hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#c4ff00] to-[#ff6b9d] rounded-2xl flex items-center justify-center mb-6">
                                <span className="font-bold text-3xl text-white">4</span>
                            </div>
                            <h3 className="font-bold text-3xl tracking-tight mb-4">UPLOAD 🚀</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We post everything to your platforms (IG, TikTok, YouTube, LinkedIn). You just watch the followers roll
                                in!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="results" className="py-20 lg:py-32 bg-gradient-to-br from-[#c4ff00]/10 via-white to-[#ff6b9d]/10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-6">
                            REAL PEOPLE, <span className="text-[#ff6b9d]">REAL RESULTS</span> 💪
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our amazing clients are saying!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#c4ff00] text-[#c4ff00]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "From 120 to 8500 followers in 4 months! That's 70x growth! PBL helped me build a strong foundation and
                                now I'm unstoppable! 🔥"
                            </p>
                            <div className="font-bold text-lg">Sarah M.</div>
                            <div className="text-sm text-gray-500">Life Coach</div>
                        </div>

                        <div className="bg-white border-4 border-[#ff6b9d] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#ff6b9d] text-[#ff6b9d]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "My business did $100K in 30 days! The professional quality shorts PBL creates are absolutely
                                game-changing! 💰"
                            </p>
                            <div className="font-bold text-lg">Marcus T.</div>
                            <div className="text-sm text-gray-500">E-commerce Owner</div>
                        </div>

                        <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#ff8c42] text-[#ff8c42]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "Peace of mind from not having to create content has been life-changing! I get to focus on what I love
                                while PBL handles the rest! 🙌"
                            </p>
                            <div className="font-bold text-lg">Jessica L.</div>
                            <div className="text-sm text-gray-500">Educator & Actor</div>
                        </div>

                        <div className="bg-white border-4 border-[#c4ff00] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#c4ff00] text-[#c4ff00]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "Sold out all 24 seats of my summit! Released yesterday at noon and it was GONE. Totally wild! 🎉"
                            </p>
                            <div className="font-bold text-lg">David R.</div>
                            <div className="text-sm text-gray-500">Business Coach</div>
                        </div>

                        <div className="bg-white border-4 border-[#ff6b9d] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#ff6b9d] text-[#ff6b9d]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "So many leads in my DMs! I had to create a paid plan to handle all the opportunities. This is crazy!
                                📈"
                            </p>
                            <div className="font-bold text-lg">Amanda K.</div>
                            <div className="text-sm text-gray-500">Mental Performance Coach</div>
                        </div>

                        <div className="bg-white border-4 border-[#ff8c42] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#ff8c42] text-[#ff8c42]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "Over $10K in monthly revenue! Their expertise in crafting content that drives sales has been crucial.
                                Best decision ever! 💎"
                            </p>
                            <div className="font-bold text-lg">Chris P.</div>
                            <div className="text-sm text-gray-500">Digital Products</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-r from-[#c4ff00] via-[#ff6b9d] to-[#ff8c42] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5" />
                <div className="container mx-auto px-4 lg:px-8 relative text-center">
                    <h2 className="font-bold text-5xl lg:text-7xl tracking-tight mb-8 text-white">READY TO BLOW UP? 🚀</h2>
                    <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
                        Join 50+ creators who are crushing it on social media. Your growth story starts here!
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 text-xl font-bold uppercase tracking-wider h-20 px-12 rounded-full shadow-2xl hover:scale-105 transition-all"
                    >
                        Let's Make You Famous
                        <Sparkles className="w-6 h-6 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    )
}
