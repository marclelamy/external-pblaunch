import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Home } from "lucide-react"
import Link from "next/link"

export default function BoldDark() {
    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#c4ff00]/20">
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
                            <Zap className="w-5 h-5 text-[#c4ff00]" />
                            <span className="text-sm font-bold uppercase tracking-wider text-[#c4ff00]">Done-For-You Growth</span>
                        </div>

                        <h1 className="font-bold text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                            BLOW UP YOUR
                            <br />
                            <span className="text-[#c4ff00]">SOCIAL MEDIA</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mb-12 leading-tight">
                            We create viral content for your brand. You film it. We edit it. You post it. Simple.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Button
                                size="lg"
                                className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 text-lg font-bold uppercase tracking-wider h-14 px-8"
                            >
                                Get Started
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg font-bold uppercase tracking-wider h-14 px-8 border-2 border-[#c4ff00] text-[#c4ff00] hover:bg-[#c4ff00] hover:text-black bg-transparent"
                            >
                                See Results
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 max-w-2xl">
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-[#c4ff00] tracking-tight">500K+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-400 mt-1">Followers</div>
                            </div>
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-[#c4ff00] tracking-tight">50+</div>
                                <div className="text-sm uppercase tracking-wider text-gray-400 mt-1">Clients</div>
                            </div>
                            <div className="border-l-4 border-[#c4ff00] pl-4">
                                <div className="font-bold text-4xl lg:text-5xl text-[#c4ff00] tracking-tight">3X</div>
                                <div className="text-sm uppercase tracking-wider text-gray-400 mt-1">Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
