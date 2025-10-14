import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Moon, Sun, Sparkles, BarChart3 } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#c4ff00]" />
                        <h1 className="font-bold text-5xl tracking-tight">PBLAUNCH</h1>
                    </div>
                    <p className="text-xl text-muted-foreground">Design Variations Hub</p>
                    <p className="text-sm text-muted-foreground mt-2">Choose your preferred design style</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Sparkles className="w-6 h-6 text-[#ff6b9d]" />
                                    <h2 className="font-bold text-2xl tracking-tight">SWISS DESIGN</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Clean, simple, and elegant design with a modern look. Perfect for professional and corporate brands.
                                </p>
                            </div>
                        </div>
                        <Link href="/swiss-design">
                            <Button className="bg-gradient-to-r from-[#c4ff00] via-[#ff6b9d] to-[#ff8c42] text-white hover:opacity-90 font-bold uppercase tracking-wider w-full">
                                View Swiss Style
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Sparkles className="w-6 h-6 text-[#ff6b9d]" />
                                    <h2 className="font-bold text-2xl tracking-tight">CREATOR ECONOMY</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Playful, multi-color design with green, pink & orange. Perfect for younger entrepreneurs and creators.
                                </p>
                            </div>
                        </div>
                        <Link href="/creator-economy">
                            <Button className="bg-gradient-to-r from-[#c4ff00] via-[#ff6b9d] to-[#ff8c42] text-white hover:opacity-90 font-bold uppercase tracking-wider w-full">
                                View Creator Style
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <BarChart3 className="w-6 h-6 text-[#c4ff00]" />
                                    <h2 className="font-bold text-2xl tracking-tight">RESULTS-DRIVEN</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Data-heavy, proof-focused design with big numbers and metrics. Appeals to analytical business owners.
                                </p>
                            </div>
                        </div>
                        <Link href="/results-driven">
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider w-full">
                                View Results Style
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Moon className="w-6 h-6 text-[#c4ff00]" />
                                    <h2 className="font-bold text-2xl tracking-tight">BOLD & ENERGETIC - DARK</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    High-energy design with neon green on black. Social media native aesthetic.
                                </p>
                            </div>
                        </div>
                        <Link href="/bold-dark">
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider w-full">
                                View Dark Mode
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Sun className="w-6 h-6 text-[#c4ff00]" />
                                    <h2 className="font-bold text-2xl tracking-tight">BOLD & ENERGETIC - LIGHT</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Same bold energy, inverted colors. Clean white with vibrant green accents.
                                </p>
                            </div>
                        </div>
                        <Link href="/bold-light">
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider w-full">
                                View Light Mode
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 hover:border-[#c4ff00] transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Palette className="w-6 h-6 text-[#c4ff00]" />
                                    <h2 className="font-bold text-2xl tracking-tight">MAGAZINE</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Refined editorial design with soft colors and elegant typography. Perfect for sophisticated brands.
                                </p>
                            </div>
                        </div>
                        <Link href="/magazine">
                            <Button className="bg-[#c4ff00] text-black hover:bg-[#c4ff00]/90 font-bold uppercase tracking-wider w-full">
                                View Magazine Style
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-card border-2 border-border p-8 opacity-50">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Palette className="w-6 h-6 text-muted-foreground" />
                                    <h2 className="font-bold text-2xl tracking-tight text-muted-foreground">MORE VARIATIONS COMING</h2>
                                </div>
                                <p className="text-muted-foreground">Additional design styles will be added here.</p>
                            </div>
                        </div>
                        <Button disabled className="font-bold uppercase tracking-wider w-full">
                            Coming Soon
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
