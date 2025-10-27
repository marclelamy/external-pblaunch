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
- Layout: On desktop, each testimonial card is a split layout — **3-image grid is on the left**, and all other info is on the right. On mobile, **images are stacked on top**, and the rest of the info is below.
- **3-Image Grid:** Displays three stacked images vertically:
    1. **Before** profile screenshot (Instagram stats before working with PBL)
    2. **After** profile screenshot (Instagram stats after working with PBL)
    3. **Quote/Testimonial** screenshot (actual message from client)
- Quote is the main focus: **Make the quote the largest text on the card**, with all other details (stats, name, handle, etc.) smaller and below the quote.
- Carousel design:  
    - Use the same carousel as the Swiss Design page, with visible left/right arrows for navigation.  
    - Manual navigation with left/right arrows.  
- Each card includes:  
    - Left: 3-image grid (before, after, quote screenshots)
    - Right: Prominent **quote** (largest font), handle (e.g. @username), name/title, and stats displayed as **"Before → After"** for each key metric, using arrows (e.g. `700 → 936K`).  
    - Use accent color (`#c4ff00`) to highlight growth/"after" numbers.
- Example format:
    - **Before:** Posts: 21 | Followers: 34 | Following: 54  
    - **After:** Posts: 376 | Followers: 421K | Following: 123  
    - Each stat should be shown as "Before → After" with an arrow between.  
- Section also has:  
    - Left/right navigation arrows (see Swiss Design, `page.tsx`).  
    - Dots navigation below the cards.
- Ensures **full responsiveness** for all layouts (images left/info right on desktop, images top/info below on mobile).
- **Image mappings:** Reference `landing-page-screenshots.md` for all testimonial image paths.

### 3a. Before/After Results Marquee
**Pattern:** Horizontal auto-scrolling marquee with before/after image cards
- Displays anonymous client growth results
- Each card contains:
  - "Before" label + before profile screenshot
  - Down arrow (↓) in accent color `#c4ff00`
  - "After" label + after profile screenshot
- Card styling: White background, 2px black border, compact width (256px)
- Marquee behavior:
  - Auto-scrolls horizontally left-to-right continuously
  - Infinite loop (duplicates content set twice for seamless loop)
  - 60s animation duration
  - Pauses on hover
- Layout: Full-width section with overflow hidden
- Displays 24 before/after pairs from `public/images/all-images/before-after/`
- **Image mappings:** Reference `landing-page-screenshots.md` lines 17-89 for all image paths

### 3b. Client Leads Marquee
**Pattern:** Horizontal auto-scrolling marquee with text quote cards
- Displays client testimonial quotes (text only, no names)
- Each card contains:
  - Italicized quote text with quotation marks
  - Clean, simple card design
- Card styling: White background, 2px black border, medium width (320px)
- Marquee behavior:
  - Auto-scrolls horizontally right-to-left (reverse direction from 3a)
  - Infinite loop (duplicates content set twice for seamless loop)
  - 60s animation duration
  - Pauses on hover
- Layout: Full-width section with overflow hidden
- Background: Light grey (`bg-neutral-100`) to alternate with other sections
- Text extracted from client messages (from `public/testimonials.json`)

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
- TestimonialCard (with 3-image grid), PricingCard, StepCard, BenefitCard
- BeforeAfterStats, ComparisonCard, SocialProofBand, Footer
- BeforeAfterMarquee, ClientLeadsMarquee (auto-scrolling testimonials)

