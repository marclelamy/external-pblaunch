# PB Launch Landing Page Design Guide

Quick reference for design patterns and UI components for each section.

---

## Design System
- **Primary Color:** `#c4ff00` (lime/neon yellow-green) - for CTAs, highlights, accents
- **Background:** White/off-white
- **Typography:** Large bold headlines, clean body text

---


- **Max Content Width:** All main containers should be constrained to a `max-width: 1140px` and horizontally centered using `margin: 0 auto;`.  
  - In Tailwind, use: `max-w-[1140px] mx-auto`
  - In CSS:  
    ```css
    .container {
      max-width: 1140px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    ```
  - Use this consistently for hero, testimonials, pricing, etc.

> **All sections and components must be fully responsive on desktop, tablet, and mobile.**




## Section Designs

### 1. Hero Section
**Pattern:** Split layout (text left, visual right)
- Large headline + subheading
- "Limited spots available" urgency text
- CTA button with `#c4ff00` background
- Hero visual/video on right side
- Stack on mobile

### 2. Social Proof Strip
**Pattern:** Horizontal marquee or logo grid
- "Trusted by 50+ business owners..." text
- Client logos/profile pics in a row
- Auto-scroll or static

### 3. Testimonials
**Pattern:** Card carousel with before/after stats (Swiss Design style)  
- Layout: On desktop, each testimonial card is a split layout — **image/photo/square is on the left**, and all other info is on the right. On mobile, **image is stacked on top**, and the rest of the info is below.
- Quote is the main focus: **Make the quote the largest text on the card**, with all other details (stats, name, handle, etc.) smaller and below the quote.
- Carousel design:  
    - Use the same carousel as the Swiss Design page, with visible left/right arrows for navigation.  
    - Carousel auto-advances every 5 seconds, but **pauses auto-advance on hover**.  
- Each card includes:  
    - Prominent **quote** (largest font).
    - Handle (e.g. @username), name/title.
    - Stats: Display a row showing **"Before → After"** for each key metric, using arrows (e.g. `700 → 936K`).  
    - Use accent color (`#c4ff00`) to highlight growth/"after" numbers.
- Example format:
    - **Before:** Posts: 21 | Followers: 34 | Following: 54  
    - **After:** Posts: 376 | Followers: 421K | Following: 123  
    - Each stat should be shown as "Before → After" with an arrow between.  
- Section also has:  
    - Left/right navigation arrows (see Swiss Design, `page.tsx`).  
    - Dots navigation below the cards.
- Ensures **full responsiveness** for all layouts (image left/info right on desktop, image top/info below on mobile).

### 4. Pain Points
**Pattern:** 3-column icon cards
- Icon + heading + description per card
- Time Drain | No Strategy | Steep Learning Curve
- Subtle problem-focused styling

### 5. Benefits: Old Way vs New Way
**Pattern:** Two-column comparison + feature grid
- Left card: "Old Way ❌" (dimmed)
- Right card: "New Way ✅" (highlighted with `#c4ff00` border)
- Below: 4-card grid of key benefits with metrics

### 6. More Benefits
**Pattern:** 6-card feature grid (3×2)
- Icon + headline + description per card
- Hover: lift effect + `#c4ff00` accent
- 6 benefits cards

### 7. How It Works
**Pattern:** 4-step horizontal timeline
- Numbered circles (1-4) with `#c4ff00`
- Icon + title + description per step
- Connecting arrows between steps
- Stack on mobile

### 8. Pricing
**Pattern:** 3-tier cards (side-by-side)
- GROW | SCALE | DOMINATE
- Middle card (SCALE) elevated with "Most Popular" badge
- Price + content volume + services + CTA per card
- Stack on mobile

### 9. FAQ
**Pattern:** Accordion (single column)
- Click to expand/collapse
- Plus/minus icon animation
- Expanded item gets `#c4ff00` left border
- 8 questions total

### 10. Footer
**Pattern:** Multi-column dark footer
- Dark background, light text
- Columns: Brand | Links | Resources | Social
- Copyright bar at bottom
- Links hover with `#c4ff00`

---

## Components Needed
- Button, Card, Accordion, Carousel
- TestimonialCard, PricingCard, StepCard, BenefitCard
- BeforeAfterStats, ComparisonCard, SocialProofBand, Footer

