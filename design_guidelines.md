# Design Guidelines: Debut (18th Birthday) Celebration Website

## Design Approach
**Reference-Based Design** inspired by premium event websites (The Knot, Zola, Minted) with Filipino cultural celebration elements. Sophisticated, elegant, and celebratory aesthetic befitting a milestone coming-of-age event.

## Layout Architecture

**Countdown Banner**: Fixed top banner (h-16) spanning full width with countdown timer displaying days, hours, minutes, seconds in elegant typography

**Hero Section**: Full-bleed celebratory image (80vh) with debutante's photo, event title overlay, and date. Text centered with blur-backed buttons for primary CTA.

**Event Details Section**: Two-column layout (lg:grid-cols-2) - left column for date/time/venue details, right column for embedded Google Map. Single column on mobile.

**Theme & Dress Code**: Centered content block (max-w-3xl) with large heading and detailed description in paragraph format

**Traditions Section**: Three-column grid (lg:grid-cols-3) for 18 Treasures, 18 Roses, and 18 Candles. Each column displays ordered list of participant names with elegant numbering.

**Directions**: Transportation tips in card layout with icon + text pairs for different transport modes

**FAQ Section**: Accordion-style collapsible Q&A items, each question expands to reveal answer

## Typography System

**Headings**: Serif font family (Playfair Display or Cormorant Garamond) for elegant, formal feel
- H1: text-5xl to text-6xl, font-bold
- H2: text-4xl, font-semibold  
- H3: text-2xl, font-medium

**Body Text**: Sans-serif (Inter or Lato) for readability
- Base: text-base to text-lg
- Small: text-sm for supporting info

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Section padding: py-16 to py-20 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Component gaps: gap-4, gap-6, gap-8

## Component Library

**Countdown Timer**: Four number blocks displaying digits with labels, horizontal layout with separators

**Event Cards**: White/cream cards with subtle shadow, rounded corners (rounded-lg), containing icon + title + details

**Map Container**: Embedded iframe with 16:9 aspect ratio, rounded corners

**Tradition Lists**: Numbered lists in elegant cards with participant names, decorative numbering (1st, 2nd, etc.)

**FAQ Accordion**: Clickable question headers with expand/collapse icons, smooth transitions

**CTA Buttons**: Prominent buttons with blur backgrounds (backdrop-blur-md) when over images, generous padding (px-8 py-3)

## Images

**Hero Image**: Large celebratory photo of the debutante in formal attire or thematic setting (professional portrait, elegant venue backdrop, or styled photoshoot). Full-width, 80vh height.

**Section Backgrounds**: Subtle textured patterns or floral accents as decorative elements in tradition sections

**Icons**: Use Heroicons via CDN for transport modes, FAQ indicators, and section accents

## Accessibility
- Sufficient contrast ratios for text on red backgrounds
- Keyboard navigation for accordion items
- ARIA labels for countdown timer and interactive elements
- Focus states on all interactive components