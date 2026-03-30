# Design System Document

## 1. Overview & Creative North Star
**Creative North Star: The Architectural Editorial**

This design system is built to transform a digital interface into a high-end, tactile editorial experience. It departs from the "standard" SaaS aesthetic of rounded cards and soft shadows, leaning instead into the raw, unapologetic honesty of Neo-Brutalist architecture and premium print journalism. 

The system utilizes intentional asymmetry and staggered layouts to break the predictability of the digital grid. By treating the screen as a canvas of varying optical weights—where massive typography acts as a structural element rather than just a heading—we create a sense of "Anvi Digital" as an authority that doesn't need to follow trends because it defines them.

---

## 2. Colors
The palette is rooted in a "Graphite-on-Paper" philosophy. It relies on a high-contrast foundation of crisp whites and deep charcoals, punctuated by a singular, high-voltage accent to direct the eye.

### Palette Highlights
*   **Surface (`#faf9f7`)**: Our "Paper." A slightly warm, premium white that reduces eye strain and feels more curated than pure `#FFFFFF`.
*   **Primary (`#5e5e5e`) / On-Background (`#1a1c1b`)**: Our "Ink." Used for high-impact typography and structural elements.
*   **Secondary (`#006d3e`)**: Our "Signal." This vibrant green is used sparingly for conversion points and critical actions.

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders for sectioning are strictly prohibited.** Boundaries must be defined through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Negative Space:** Using the `24` (8.5rem) or `20` (7rem) spacing tokens to create a void that acts as a separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets. 
*   **Base:** `surface`
*   **Sectioning:** `surface-container-low` (used for large, asymmetrical layout blocks).
*   **Components:** `surface-container-lowest` (pure white) for cards to provide a subtle "pop" against the warm background.

### Signature Textures
For hero sections or primary CTAs, use a subtle linear gradient transitioning from `primary` to `on-primary-container`. This adds a "metallic" or "graphite" depth that prevents the design from feeling flat or "cheap."

---

## 3. Typography
Typography is the core of this system's identity. We utilize **Space Grotesk** for its blend of utilitarian monospaced heritage and modern geometric precision.

*   **Display (L/M/S):** Oversized, bold, and tight-tracked. These are used to "anchor" the layout. They should often be staggered or partially overlapped by other elements to create depth.
*   **Headline & Title:** High-contrast hierarchy. Use `headline-lg` for section headers to command attention immediately.
*   **Body:** `body-lg` is the workhorse. It must remain legible with generous line heights to evoke an editorial, long-form reading experience.
*   **Label:** Used for "meta" information (e.g., categories, timestamps). These should always be uppercase with increased letter spacing (+5% to +10%) to contrast against the bold headlines.

---

## 4. Elevation & Depth
In a brutalist-inspired system, depth is achieved through **Tonal Layering** rather than imitation of real-world physics.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container` section. The distinction in tone provides all the "lift" required.
*   **Ambient Shadows:** If an element must float (e.g., a modal or a floating action button), use a shadow with a `40px - 60px` blur and a very low opacity (`4%`). The color must be a tinted version of `on-surface` (`#1a1c1b`) to ensure it feels like a natural shadow on paper, not a digital drop shadow.
*   **The "Ghost Border" Fallback:** For interactive states (like focused inputs), use the `outline-variant` token at **20% opacity**. Never use a 100% opaque border unless it is a "Large Border" design choice (2px+) intended for a specific brutalist component.
*   **Glassmorphism:** For navigation bars or overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This integrates the element into the layout while maintaining the "stacked paper" feel.

---

## 5. Components

### Buttons
*   **Primary:** Sharp corners (`0px`). Background: `secondary` (#006d3e), Text: `on-secondary`. No shadows.
*   **Tertiary:** No background. Underlined text using the `secondary` color. The underline should be 2px thick to match the editorial weight.

### Input Fields
*   **Style:** Minimalist. No bounding box. Only a bottom border (2px) using `on-surface-variant`.
*   **States:** On focus, the bottom border transitions to the `secondary` (green) accent.

### Cards & Lists
*   **Rule:** **No Divider Lines.** 
*   **Implementation:** Use vertical whitespace (Token `8` or `10`) to separate list items. For cards, use a slight color shift to `surface-container-high` on hover to indicate interactivity.

### Branded Icons
*   **Style:** Use only high-stroke, geometric icons. Avoid rounded or "friendly" icon sets. Every icon should look like a technical diagram or a simplified architectural mark.

---

## 6. Do's and Don'ts

### Do
*   **DO** use "Negative Grid" placement: Start a headline on the second column but have the body text start on the first.
*   **DO** allow typography to be the largest visual element on the screen.
*   **DO** use the `0.5` (0.175rem) spacing token for micro-adjustments in "label" groupings to keep them tight and architectural.

### Don't
*   **DON'T** use border-radius. Every corner in this system must be `0px` to maintain the architectural edge.
*   **DON'T** use "Grey." Use the specific `surface-variant` or `surface-container` tokens to maintain the warm, premium "paper" tone.
*   **DON'T** center-align long-form text. Editorial design is traditionally left-aligned or justified; keep all body copy left-aligned for a professional, "published" feel.
*   **DON'T** use generic boxes. If a container is needed, try using a large, asymmetrical background block that extends to the edge of the screen on one side.