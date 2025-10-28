# JSON Integration Guide - Personal Brand Launch

## Overview

All landing page content is now managed through JSON files in the `/public` folder. This allows you to update content across all pages without touching any code.

## JSON Files Used

### `/public/0-hero.json`
**Used in:** Hero Section
- `headline` - Main headline text
- `headlineHighlight` - Highlighted portion (shown in #c4ff00)
- `subheadline` - Subheading text
- `primaryCta` - Primary button text
- `secondaryCta` - Secondary button text
- `badge` - Small badge text above CTA
- `statCards` - Array of statistics cards

### `/public/1-testimonials.json`
**Used in:** Testimonials Carousel
- `testimonials` - Array of testimonial objects, each containing:
  - `handle` - Instagram handle
  - `name` - Client name
  - `title` - Client title
  - `quote` - Testimonial quote
  - `before` - Before stats (posts, followers, engagement)
  - `after` - After stats (posts, followers, engagement)
  - `images` - Image paths (before, after, quoteImg)

### `/public/2-pain-points.json`
**Used in:** Pain Points Section
- `title` - Section title
- `subtitle` - Section subtitle
- `painPoints` - Array of pain point objects, each containing:
  - `title` - Pain point title
  - `description` - Pain point description
  - `stat` - Statistics/metrics

### `/public/3-benefits.json`
**Used in:** Benefits Section and Features Grid
- `title` - Section title
- `subtitle` - Section subtitle
- `comparison` - Old Way vs New Way comparison
  - `oldWay` - Old way title, items array, result
  - `newWay` - New way title, items array, result
- `features` - Array of 6 feature objects, each containing:
  - `title` - Feature title
  - `description` - Feature description
  - `metric` - Optional metric/stat

### `/public/5-process.json`
**Used in:** How It Works Section
- `title` - Section title
- `subtitle` - Section subtitle
- `steps` - Array of 4 step objects, each containing:
  - `title` - Step title
  - `description` - Step description
  - `features` - Array of step features

### `/public/6-pricing.json`
**Used in:** Pricing Section
- `title` - Section title
- `subtitle` - Section subtitle
- `plans` - Array of 3 pricing plan objects, each containing:
  - `name` - Plan name
  - `price` - Price string
  - `period` - Period string (/month)
  - `featured` - Boolean for highlighted plan
  - `badge` - Badge text (e.g., "Most Popular")
  - `contentVolume` - Object with title and items array
  - `services` - Object with title and items array
  - `cta` - CTA button text

### `/public/7-faq.json`
**Used in:** FAQ Section
- `title` - Section title
- `faqs` - Array of FAQ objects, each containing:
  - `question` - FAQ question
  - `answer` - FAQ answer

### `/public/9-social-proof.json`
**Used in:** Social Proof Section
- `text` - Social proof text

### `/public/10-footer.json`
**Used in:** Footer Section
- `logo` - Logo/brand name
- `links` - Array of social media links
- `copyright` - Copyright text

## How to Update Content

1. Open the desired JSON file in `/public` folder
2. Edit the values (keep the structure the same)
3. Save the file
4. The page will automatically update (in development mode)
5. No code changes needed!

## Example Updates

### Change Hero Headline
Edit `/public/0-hero.json`:
```json
{
  "headline": "GROW YOUR",
  "headlineHighlight": "SOCIAL MEDIA",
  ...
}
```

### Add a New Testimonial
Edit `/public/1-testimonials.json`:
```json
{
  "testimonials": [
    ...existing testimonials...,
    {
      "id": 4,
      "handle": "@newclient",
      "name": "New Client",
      ...
    }
  ]
}
```

### Update Pricing
Edit `/public/6-pricing.json`:
```json
{
  "plans": [
    {
      "name": "GROW",
      "price": "$3,495",
      ...
    }
  ]
}
```

## Benefits

✅ **Single Source of Truth** - Update once, reflects everywhere
✅ **Non-Technical Friendly** - Anyone can edit JSON files
✅ **No Rebuild Required** - Changes appear instantly in development
✅ **Version Control** - Track content changes in git
✅ **Consistent Data** - Same data structure across all pages

## Technical Notes

- All sections use `useEffect` to fetch JSON on component mount
- Fallback values provided for each field (won't break if JSON is invalid)
- TypeScript type safety could be added later for better validation
- Images reference paths are relative to `/public` folder

