# Bay Marina

PT/EN restaurant website built with Next.js 16 App Router, TypeScript, Tailwind CSS 4, Framer Motion 12, Lucide, next/font and Next.js Image.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

Node.js 22 recommended. Open http://localhost:3000. The production build uses Next.js’s supported Webpack bundler. Deploy using Vercel’s Next.js preset. Copy `.env.example` to `.env.local` and configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. The supplied values are configured locally; set the same variables in Vercel before deployment. `.env.local` is ignored by Git. Nothing has been published or pushed.

## Content and configuration

- `lib/restaurant.ts`: supplied address, telephone, daily lunch/dinner hours, Instagram, Glovo, Maps and reservation destinations. All booking CTAs point to `/reservation`, containing the navbar and the eagerly loaded Intelis iframe. Intelis previously returned “Reservation widget not found” at the supplied URL; check its configuration before launch.
- `lib/assets.ts`: venue images follow current filenames 1–3 / 4–5 / 6–8 in the desktop mosaic with a subtle 4px gap. Static imports give replaced files a new content hash so renamed/replaced photos do not reuse old optimized images. Contact photography uses `public/images/contact-image.webp`. Update alt text if image content changes. All 18 image assets are WebP (photographs at quality 90, logo lossless with transparency preserved). Total source size fell from 46.2 MB to 6.3 MB, about 86%. The hero serves its WebP without another compression pass; the source resolution limits large-screen detail.
- Food photography: 1–4 in the top carousel and 5–8 in the bottom. Both move right to left, pause offscreen, have no image hover effect and become static scrollable rows under reduced motion. The manual pause control was removed as requested.
- `lib/reviews.ts`: the six authentic review names and quotations transcribed from user-supplied Google screenshots. Text remains in its supplied English language. Each card shows five gold stars, without dates, counts, numerical scores, profile photos or extra badges. No aggregate rating is claimed.
- `lib/translations.ts`: PT/EN interface text with local language persistence. Quotes remain unchanged when the interface language changes.
- Buffet prices are transcribed from the supplied photo: weekday lunch adult €16.95, ages 4–9 €9.95; dinner every day and weekend/public-holiday lunch adult €19.95, ages 4–9 €10.95. VAT included; drinks and coffee excluded. Daily hours 12:00–15:00 and 19:00–23:00.
- `public/images/logo.webp`: losslessly converted official logo with transparency preserved. Palette combines teal, charcoal, yellow gold and pale stone. Footer credits Intelis.

## Latest validation

Production Webpack build, ESLint and TypeScript pass. Browser checks at 360, 390, 430, 600, 768, 1024, 1440 and 1920px found no horizontal overflow. Review cards use one column on phones, two on tablets and three on desktop. Contacts stack below 800px; underlined links have arrow indicators and at least 44px tap targets. Field headings and values have distinct colors. Confirmed six reviews, thirty stars, current hashed gallery/contact images, removal of the food tagline, and the PT/EN drinks-and-coffee note. Checked images were unbroken and the browser console had no warnings/errors.

## Legal links and Home navigation

`lib/legal.ts` reads only `privacy_policy_url` and `terms_and_conditions_url` from the `restaurants` row with `id=baymarina`, using the public Supabase REST API and the two configured variables. The homepage revalidates every five minutes so published URL changes appear without rebuilding. Only absolute HTTP/HTTPS destinations are rendered as links. Empty values or an unavailable backend leave labelled “Available soon” text in the footer, without broken links. Both database fields were null when checked; fill them in Supabase to activate the policies. No legal text was invented and no database rows were modified.

`components/HomeLink.tsx` sends logo and Início/Home links to `/#home`, explicitly scrolling to the top on the homepage after the mobile menu releases its scroll lock. Cross-page navigation also targets the hero anchor.

Original PNGs were archived outside the project at `/private/tmp/bay-marina-original-pngs-2026-10-21.zip` before removal from `public/images`. Use that archive if original sources are needed.

Latest verification: all image sources are WebP with no broken images. Desktop Home, mobile Início after menu closure and reservation-to-home navigation all returned to scroll position 0. Legal footer checked at 360, 390, 768, 1024 and 1440px without overflow. Legal fetch checks cover exact row/column selection, 300-second refresh, populated URLs, invalid/null values and offline fallback. Build (Webpack with network access), lint and TypeScript passed.

## Deploy to Vercel

1. Import this repository into Vercel and select the **Next.js** framework preset.
2. Use the repository root as the root directory and **Node.js 22.x** (also declared in `package.json` and `.nvmrc`).
3. Install command: `npm ci`. Build command: `npm run build`. Leave the output directory at the Next.js default; do not configure a static export. The lockfile pins dependency versions.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from your local `.env.local` to the intended Vercel Preview and Production environments before building. `.env.example` lists the names; `.env.local` stays ignored.
5. Deploy. The `/` homepage supports five-minute revalidation of legal links, and `/reservation` is included as a normal Next.js route. No custom Vercel routing configuration is needed.

Content activation still depends on the external services: populate the two legal URLs in Supabase, and activate/correct the Intelis booking widget if its supplied URL still returns “Reservation widget not found.” These are independent of build/deployment readiness. No deployment has been performed by this task.

The gallery now has 4px gaps at all breakpoints. Hamburger navigation uses 28px section links and a 13px booking CTA, retaining at least 44px link targets and a 48px button.

Deployment-readiness verification: clean `npm ci`, standard `npm run build`, lint and type checks passed. Production preview confirms 4px mosaic gaps at 360, 390, 768, 1024 and 1440px without horizontal overflow. At 390px, hamburger links compute to 28px and the CTA to 13px with a 48px height; Escape closes the menu and browser console checks were clean.
