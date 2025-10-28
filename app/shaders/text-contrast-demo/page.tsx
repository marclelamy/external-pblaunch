"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { GrainOverlay } from "../components/grain-overlay"
import { useRef, useEffect, useState } from "react"
import { Eye } from "lucide-react"
import Image from "next/image"

// Sample testimonial data
const sampleTestimonial = {
  quote: "I am on the plane flying back, and so many leads are coming in, I can't finish any of my other work. I am going to have to hire an admin or AI the shit out of this! Thanks!",
  before: { posts: "21", followers: "34" },
  after: { posts: "376", followers: "421K" },
  handle: "@theyounetworkhq",
  name: "Karl Morningstar",
  title: "CEO | Franchise Consultant"
}

// Helper function to format follower growth
const formatGrowth = (before: string, after: string) => {
  const beforeNum = parseInt(before.replace(/,/g, ''))
  const afterNum = parseInt(after.replace(/[K]/g, '')) * (after.includes('K') ? 1000 : 1)
  const growth = afterNum - beforeNum
  
  if (growth >= 10000) {
    return `+${(growth / 1000).toFixed(0)}K`
  } else {
    const percentage = ((growth / beforeNum) * 100).toFixed(0)
    return `+${percentage}%`
  }
}

// Approach 1: Current (no modifications)
function ApproachCurrent() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Current (No Changes)</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/90 italic text-lg leading-relaxed">
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight">
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1">FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">Before</div>
              <div className="text-foreground/80 text-xs">{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium">{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl">→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">After</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground">{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm">{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm">{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 1: Text Shadow
function ApproachTextShadow() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 1: Text Shadow</h3>
        <p className="text-xs text-foreground/50">Dark drop shadows on all text</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.8)' }}>
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9), 2px 2px 6px rgba(0,0,0,0.8)' }}>
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Before</div>
              <div className="text-foreground/80 text-xs" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>After</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 2: Increased Card Opacity + Backdrop Blur
function ApproachCardOpacity() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/20 backdrop-blur-md">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 2: Card Opacity + Blur</h3>
        <p className="text-xs text-foreground/50">bg-foreground/20 + backdrop-blur-md</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/90 italic text-lg leading-relaxed">
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight">
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1">FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/20 border border-foreground/20 rounded-lg p-4 w-full max-w-xl backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">Before</div>
              <div className="text-foreground/80 text-xs">{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium">{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl">→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">After</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground">{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm">{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm">{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 3: Combined (Shadow + Opacity)
function ApproachCombined() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/15 backdrop-blur-md">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 3: Combined</h3>
        <p className="text-xs text-foreground/50">Text shadow + increased opacity + blur</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/20 border border-foreground/20 rounded-lg p-4 w-full max-w-xl backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>Before</div>
              <div className="text-foreground/80 text-xs" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>After</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 4: Text Stroke
function ApproachTextStroke() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 4: Text Stroke</h3>
        <p className="text-xs text-foreground/50">-webkit-text-stroke for outlines</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ WebkitTextStroke: '0.5px rgba(0,0,0,0.8)' }}>
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.9)' }}>
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>Before</div>
              <div className="text-foreground/80 text-xs" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl" style={{ WebkitTextStroke: '0.5px rgba(0,0,0,0.9)' }}>→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>After</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm" style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.8)' }}>{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 5: Mix Blend Mode
function ApproachMixBlend() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 5: Mix Blend Mode</h3>
        <p className="text-xs text-foreground/50">mix-blend-mode: difference</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <p className="text-foreground italic text-lg leading-relaxed mix-blend-difference">
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight mix-blend-difference">
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1 mix-blend-difference">FOLLOWERS</div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center mix-blend-difference">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">Before</div>
              <div className="text-foreground/80 text-xs">{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium">{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl">→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">After</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-base text-foreground mix-blend-difference">{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm mix-blend-difference">{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm mix-blend-difference">{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 6: Duplicate Text Layers
function ApproachDuplicateLayers() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 6: Duplicate Text Layers</h3>
        <p className="text-xs text-foreground/50">Layered light/dark text with blend modes</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1 relative">
          <p className="text-white italic text-lg leading-relaxed mix-blend-screen">
            "{sampleTestimonial.quote}"
          </p>
          <p className="absolute inset-0 text-black italic text-lg leading-relaxed mix-blend-multiply">
            "{sampleTestimonial.quote}"
          </p>
        </div>
        <div className="flex-shrink-0 text-right relative">
          <div className="text-[#d4ff40] font-sans text-5xl font-bold tracking-tight mix-blend-screen">
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="absolute inset-0 text-[#204400] font-sans text-5xl font-bold tracking-tight mix-blend-multiply">
            {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
          </div>
          <div className="text-foreground/60 text-xs mt-1 relative">
            <span className="mix-blend-screen">FOLLOWERS</span>
            <span className="absolute inset-0 mix-blend-multiply">FOLLOWERS</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-foreground/10 border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="relative">
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">
                <span className="mix-blend-screen">Before</span>
                <span className="absolute inset-0 mix-blend-multiply">Before</span>
              </div>
              <div className="text-foreground/80 text-xs">{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium">{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center relative">
              <div className="text-[#c4ff00] text-2xl mix-blend-screen">→</div>
              <div className="absolute text-[#204400] text-2xl mix-blend-multiply">→</div>
            </div>
            <div className="relative">
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">
                <span className="mix-blend-screen">After</span>
                <span className="absolute inset-0 mix-blend-multiply">After</span>
              </div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="relative">
          <p className="font-medium text-base text-white mix-blend-screen">{sampleTestimonial.handle}</p>
          <p className="absolute inset-0 font-medium text-base text-black mix-blend-multiply">{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm">{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm">{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

// Approach 7: Dark Background Box
function ApproachDarkBox() {
  return (
    <div className="border border-foreground/20 p-6 mx-auto rounded-lg bg-foreground/5">
      <div className="mb-4">
        <h3 className="text-sm font-mono text-foreground/60 mb-2 uppercase tracking-wider">Approach 7: Dark Background Boxes</h3>
        <p className="text-xs text-foreground/50">Semi-transparent dark backgrounds behind text</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 items-start">
        <div className="flex-1">
          <div className="bg-black/40 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-foreground/90 italic text-lg leading-relaxed">
              "{sampleTestimonial.quote}"
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="bg-black/40 rounded-lg p-4 backdrop-blur-sm inline-block">
            <div className="text-[#c4ff00] font-sans text-5xl font-bold tracking-tight">
              {formatGrowth(sampleTestimonial.before.followers, sampleTestimonial.after.followers)}
            </div>
            <div className="text-foreground/60 text-xs mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm border border-foreground/20 rounded-lg p-4 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">Before</div>
              <div className="text-foreground/80 text-xs">{sampleTestimonial.before.posts} Posts</div>
              <div className="text-foreground/80 text-xs font-medium">{sampleTestimonial.before.followers} Followers</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#c4ff00] text-2xl">→</div>
            </div>
            <div>
              <div className="text-foreground/60 text-xs uppercase tracking-wide mb-1">After</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.posts} Posts</div>
              <div className="text-[#c4ff00] text-xs font-medium">{sampleTestimonial.after.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="bg-black/40 rounded-lg p-3 backdrop-blur-sm">
          <p className="font-medium text-base text-foreground">{sampleTestimonial.handle}</p>
          <p className="text-foreground/70 text-sm">{sampleTestimonial.name}</p>
          <p className="text-foreground/60 text-sm">{sampleTestimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function TextContrastDemo() {
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = (): boolean => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <GrainOverlay />

      {/* Shader Background - Same as main page */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#c4ff00"
            colorB="#3b00ff"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#c4ff00"
            upColor="#c4ff00"
            downColor="#3b00ff"
            leftColor="#3b00ff"
            rightColor="#c4ff00"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-opacity duration-700 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 -z-10 backdrop-blur-md" />
        
        <a href="/shaders" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c4ff00] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#c4ff00]/90">
            <span className="font-sans text-xl font-bold text-black">←</span>
          </div>
          <span className="font-sans text-xl font-semibold tracking-tight text-foreground">Text Contrast Demo</span>
        </a>

        <div className="text-sm text-foreground/70 font-mono">Compare approaches side-by-side</div>
      </nav>

      {/* Content */}
      <div
        ref={scrollContainerRef}
        className={`relative z-10 pt-32 pb-20 px-6 md:px-12 transition-opacity duration-700 overflow-y-auto ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: '100vh' }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Text Contrast Solutions
            </h1>
            <p className="text-lg text-foreground/80">
              Compare different approaches to improve text readability on animated shader backgrounds
            </p>
          </div>

          {/* Demo Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ApproachCurrent />
            <ApproachTextShadow />
            <ApproachCardOpacity />
            <ApproachCombined />
            <ApproachTextStroke />
            <ApproachMixBlend />
            <ApproachDuplicateLayers />
            <ApproachDarkBox />
          </div>

          {/* Summary */}
          <div className="mt-16 bg-foreground/10 backdrop-blur-md border border-foreground/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Recommendation Summary
            </h2>
            <div className="space-y-4 text-foreground/90">
              <p><strong>Best Overall:</strong> Approach 3 (Combined) - Balances readability with aesthetics</p>
              <p><strong>Simplest:</strong> Approach 1 (Text Shadow) - Easy to implement, works well</p>
              <p><strong>Most Dramatic:</strong> Approach 7 (Dark Boxes) - Guaranteed readability, changes design feel</p>
              <p><strong>Most Creative:</strong> Approach 6 (Duplicate Layers) - Interesting effect but performance cost</p>
              <p><strong>Avoid:</strong> Approach 5 (Mix Blend) - Unpredictable results on gradient backgrounds</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}

