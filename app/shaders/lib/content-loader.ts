// Content loader utility to fetch JSON data from public folder
// This allows dynamic content updates without rebuilding

export async function loadContent() {
  const [hero, testimonials, painPoints, benefits, process, pricing, faq, socialProof, footer] = await Promise.all([
    fetch("/0-hero.json").then(r => r.json()),
    fetch("/1-testimonials.json").then(r => r.json()),
    fetch("/2-pain-points.json").then(r => r.json()),
    fetch("/3-benefits.json").then(r => r.json()),
    fetch("/5-process.json").then(r => r.json()),
    fetch("/6-pricing.json").then(r => r.json()),
    fetch("/7-faq.json").then(r => r.json()),
    fetch("/9-social-proof.json").then(r => r.json()),
    fetch("/10-footer.json").then(r => r.json()),
  ])

  return {
    hero,
    testimonials: testimonials.testimonials,
    painPoints: painPoints.painPoints,
    benefits,
    process: process.steps,
    pricing: pricing.plans,
    faq: faq.faqs,
    socialProof,
    footer,
  }
}

// Export type for the content
export type ContentData = Awaited<ReturnType<typeof loadContent>>

