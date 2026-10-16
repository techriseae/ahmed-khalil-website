# Existing Ahmed Khalil Website

This is an existing Next.js / React / TypeScript website. Do not rebuild from scratch. Keep and improve the existing components, styling, content and functionality.

## Visual direction
Approved design: polished personal consultant portfolio. Dark navy-to-purple photo-led hero, large 'Ahmed Khalil' title, translucent Odoo dashboard card, strong violet accent, then alternating white/off-white sections for expertise, selected projects, Odoo Apps, YouTube academy, About and contact, finishing with a dark footer. Professional typography, large whitespace, smooth animations, high quality cards.

## Requirements
- English/Arabic language switch, correct RTL in Arabic.
- Light/dark theme.
- Fully responsive and accessible.
- Use Ahmed's real photo when supplied in `public/ahmed-original.jpeg`; never invent a different face.
- Keep personal branding 'Ahmed Khalil', not TechRise. TechRise may appear in biography.
- No fabricated testimonials, client names, earnings, metrics or credentials.
- Real work context: Odoo ERP consultant/developer, 8+ years, Odoo 18/19 certified, UAE/GCC; projects include construction ERP, workflow automation, AI agents, Odoo apps; YouTube Odoo Explained.
- When Ahmed supplies the approved design screenshot, match it pixel-by-pixel, adapting responsibly for mobile.

## Run
npm install && npm run dev
npm run build

## Visual QA against Ahmed's approved reference
The current screenshot shows an oversized flat purple portrait placeholder. The correct approved concept uses Ahmed's **real** headshot, integrated with the hero photo composition, a floating Odoo dashboard, and a more polished full-page portfolio. Match the reference screenshot from the user's ChatGPT conversation, not the placeholder. The real photo was provided by Ahmed in the ChatGPT conversation as `1725186363695.jpeg` (400×400) and should be placed at `public/ahmed-original.jpeg`. Never use another person's portrait. Until the photo is available in the repository, a fallback exists to prevent a broken image icon.

### Delivery acceptance
1. Hero visually aligns with reference at desktop 1440px and mobile 390px.
2. Real portrait loads (not purple fallback).
3. Every section and language switch works, theme toggle works.
4. No fake customer endorsements, fake financial statistics or invented contact links.
5. `npm run build` passes.
