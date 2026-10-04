// Full detail-page content for case studies that use the shared
// CaseStudyTemplate component, keyed by slug. This is the "CMS" data file —
// adding a new case study to this template means adding an entry here, not
// writing a new page component. (Guidely and Thermal have their own
// hand-built pages with bespoke layouts too rich to fit this generic
// template yet, so they aren't listed here.)
//
// Shape:
//   id           display id shown in the topbar, e.g. "CS-03"
//   prevSlug     slug for the "Previous" nav link, or null to hide it
//   nextSlug     slug for the "Next" nav link, or null to hide it
//   hero         { eyebrow, heading, ctaLabel, ctaHref?, image?, video?, bg? }
//                bg is optional: a CSS color for the hero section itself
//                (default is Portfolio's dark red-brown theme) — shows in
//                the margins around the video and in its letterbox area
//                ctaHref is optional: if set, the CTA button renders as an
//                external link (target="_blank") instead of an inert
//                button — e.g. a Loom walkthrough
//                image is optional: { src, alt } — a screenshot/cover shown
//                under the CTA button. Ignored if video is set.
//                video is optional: a path string to a muted looping clip
//                filling the hero as its background (height = video's own
//                aspect ratio + 10px top padding), with the eyebrow/heading/
//                button positioned over it like Guidely's hero title
//   meta         array of { icon, label, value } — icon is one of
//                'work' | 'tools' | 'hourglass' | 'person' | 'team'
//   bodyBg       optional CSS color overriding this case study's content-card
//                background (the ".portfolio-body" panel below the topbar —
//                default is Portfolio's dark red-brown theme). The outer
//                page background stays the site-wide dark shade either way,
//                same as Guidely's white body sitting on its dark page.
//   glassCards   optional true — renders each section as a frosted glass
//                card (translucent fill + blur + border), matching
//                Thermal's card treatment, instead of Portfolio's plain
//                centered-text style
//   sections     array of { accent: 'left' | 'right', title, subheading?,
//                narrow?, icon?, iconRounded?, iconSize?, body, list?,
//                image?, images?, imagePlaceholder?, subItem? }
//                icon is optional: one of 'search' | 'computer-check' |
//                'chat' (recolored #3B82F6 copies of Guidely's own section
//                icons) | 'problem' (custom icon) | 'mlogo' (the
//                MarketTrack brand mark) — floated in the empty space
//                beside a narrow card (opposite whichever edge it's
//                pinned to), or closer to the edge on a regular
//                (non-narrow) card, where there's much less room
//                iconRounded is optional true — adds border-radius to the
//                icon (for image-based icons like 'mlogo' rather than flat
//                line-icon SVGs)
//                iconSize is optional: pixel size overriding the default
//                120px — on a narrow card the icon is re-centered in the
//                473px gap automatically to match
//                body is a string (one paragraph) or an array of strings
//                (multiple paragraphs, rendered in order)
//                narrow is optional true — only meaningful with glassCards:
//                shrinks the card to 655px (matching Thermal's smaller dark
//                cards, e.g. .thermal-concept-body) and pins it 30px off
//                the edge matching its accent (left accent → left edge,
//                right accent → right edge) instead of centering it,
//                producing the same left/right zigzag Thermal's cards have
//                subheading is optional true — for a numbered sub-decision
//                rendered as its OWN card (e.g. "02 — The Sales Page"):
//                renders the title smaller/in a different family so it
//                reads as subordinate, instead of a top-level "./Section"
//                heading size
//                subItem is optional: { title, body, list?, image?,
//                images?, imagePlaceholder? } — a numbered sub-decision
//                merged into THIS section's card instead of getting its own
//                (e.g. "01 — The Product Page" living inside the
//                "./Design decisions" card, matching Thermal's first
//                decision sitting inside its parent section). Always
//                rendered with the smaller subheading title style.
//                list is optional: an array of strings rendered as a
//                bulleted list below the body paragraphs
//                image is optional: { src, alt } — a single full-width
//                image rendered below the section text
//                images is optional: [{ src, alt }, ...] — use instead of
//                image for a multi-shot gallery row within the section
//                imagePlaceholder is optional: a string caption (or `true`)
//                rendering a dashed placeholder box instead of a real image
//                — used while real screenshots aren't ready yet. Ignored if
//                image/images is also set.

const caseStudyContent = {
  markettrack: {
    id: 'CS-01',
    prevSlug: null,
    nextSlug: 'guidely',
    bodyBg: 'var(--color-surface)',
    glassCards: true,
    hero: {
      eyebrow: 'UI/UX case study',
      heading:
        'MarketTrack — An Inventory, Sales, And Expense Tracking System Built For A Small Electrical Business',
      ctaLabel: 'Watch Loom Video',
      ctaHref: 'https://www.loom.com/share/aeff9793ba7f423193972d26cb93a6cd',
      video: '/videos/markettrack-hero.mp4',
    },
    meta: [
      { icon: 'work', label: 'Project Type', value: 'Client Project' },
      { icon: 'person', label: 'My Role', value: 'Owned Product Design' },
      { icon: 'team', label: 'Team', value: 'Solo' },
      { icon: 'hourglass', label: 'Timeline', value: 'June 2025 - Oct 2025' },
      { icon: 'tools', label: 'Tools', value: 'Figma, Claude Code' },
    ],
    sections: [
      {
        accent: 'left',
        title: './Problem',
        narrow: true,
        icon: 'problem',
        iconSize: 'large',
        body: [
          "Ifythel Lights & Accessories, a small electrical business, was running its entire operation on paper. Stock counts were scattered across notebooks with no consistent system, expenses were tracked from memory, and receipts were handwritten and kept as hardcopies, making it time-consuming to find past records or understand actual profit. Warehouse items had no SKU system, so locating specific stock meant physically searching shelves.",
          "The business had no reliable way to answer basic questions like what's actually selling, what they're spending, and what stock they have and where it is. Every answer required digging through handwritten records or relying on memory, which meant decisions were being made without real data.",
        ],
      },
      {
        accent: 'right',
        title: './Research',
        narrow: true,
        icon: 'mlogo',
        iconRounded: true,
        body: "I started by identifying the business's core pain points directly from how the store operated day to day: scattered stock records, no profit visibility, expenses tracked from memory, and no SKU system for locating warehouse items. From there, I translated these into clear goals: give the business a system to track inventory, sales, and expenses in one place, with real records instead of memory and handwriting.",
      },
      {
        accent: 'left',
        title: './Design Decisions',
        body: "With Claude's help, I mapped out a system architecture first, which I used to define user flows and wireframes before moving into high fidelity design. I organized the system around the decisions the store needed to make: find stock, record a sale, understand spending, and review business performance. The four pages below show how those needs shaped the interface:",
        subItem: {
          title: '01 — Make stock easier to find',
          body: [
            'Testing exposed that product-name-only search was too limited, so I added SKU search alongside it. The decision was to support another way to locate a product without forcing the user to know its exact name.',
            'I kept stock, order history, and supplier information together to support inventory decisions. When testing exposed details missing from the main table, I added a “more info” action rather than expanding every row and making the list harder to scan.',
          ],
          evidence: 'I searched by SKU and confirmed that the matching product appeared.',
          image: {
            src: '/images/markettrack-product-page.webp',
            alt: 'MarketTrack product page — stock list with buy/sell price, margin, and status',
          },
        },
      },
      {
        accent: 'right',
        title: '02 — Support exceptions in the sales workflow',
        subheading: true,
        body: [
          'The initial sales flow assumed every item already existed in inventory. Testing showed that new items could arrive before they had been entered, so I added a manual-sale-entry option at the top of the product dropdown, before the existing products. This made the alternative available at the point where the user would otherwise need to select an inventory item.',
          'A recorded sale also needed to accommodate a customer changing their selection. I added editing to the recorded sale rather than treating the first entry as permanent. Receipts and reports remain part of the same sales workflow.',
        ],
        evidence: 'I confirmed that the manual-sale-entry option appeared at the top of the product dropdown.',
        image: {
          src: '/images/markettrack-sales-page.webp',
          alt: 'MarketTrack sales page — revenue summary cards and a table of recorded sales with gross profit',
        },
      },
      {
        accent: 'left',
        title: '03 — Make spending visible alongside profit',
        subheading: true,
        body: 'Expenses had been tracked from memory, which made actual profit hard to understand. I gave spending its own page with time-based totals, a category breakdown, and a profit summary, so the business could review recorded costs rather than rely on recollection.',
        evidence: 'The screen brings period totals, spending categories, and a profit summary together.',
        image: {
          src: '/images/markettrack-expense-page.webp',
          alt: 'MarketTrack expense page — today/week/month/year totals, category breakdown, and profit summary',
        },
      },
      {
        accent: 'right',
        title: '04 — Bring the business picture into one view',
        subheading: true,
        body: 'The store could not easily answer what was selling, what it was spending, or what stock was running low. I made the dashboard the entry point, bringing revenue, cost of goods, expenses, net profit, top-selling products, and low-stock alerts into one view. The aim was to make the next operational question easier to identify before opening a detailed page.',
        evidence: 'The dashboard is part of the system now used in the store’s daily operations.',
        image: {
          src: '/images/markettrack-dashboard.webp',
          alt: 'MarketTrack dashboard — revenue, cost of goods, expenses, net profit, top selling products, and low stock alerts',
        },
      },
      {
        accent: 'left',
        title: './Testing & iteration',
        narrow: true,
        icon: 'computer-check',
        body: 'During testing, a few real gaps showed up and shaped further decisions:',
        list: [
          'Search on the product page only worked by product name, so I added SKU search as well',
          'Some product info wasn\'t visible on the main table, so I added a "more info" button to surface it without cluttering the table',
          "Recording a sale assumed the item already existed in inventory, but new items sometimes didn't. I added a manual entry option to handle that case",
          'Sales sometimes needed to change after the fact, like when a customer requested a switch, so I added an edit function on recorded sales',
        ],
      },
      {
        accent: 'right',
        title: './Outcome',
        narrow: true,
        icon: 'chat',
        body: "MarketTrack is in active use at Ifythel Lights & Accessories today. It's not publicly accessible since it was built specifically for the store's internal operations, but it replaced a fully paper-based system with real digital records, giving the business visibility into inventory, sales, and expenses that it didn't have before.",
      },
      {
        accent: 'left',
        title: './Reflection',
        body: [
          "This project was different from my usual process. Instead of designing fully in Figma first, I worked with Claude to map system architecture early, then moved into wireframes and high fidelity design from there. It meant thinking in terms of data and flow structure earlier than I normally would, closer to how I'd approach a technical problem, which fit naturally with my software engineering background.",
          "Testing on a real, in-use business tool also taught me that some of the most important fixes aren't visible in a wireframe. The SKU search gap, the manual entry option, the sales edit function: none of these came up until real usage exposed them. It reinforced that a system isn't finished when the design looks complete, it's finished when it holds up under how people actually use it.",
        ],
      },
    ],
  },
  portfolio: {
    id: 'CS-04',
    prevSlug: 'thermal',
    nextSlug: null,
    hero: {
      eyebrow: './Portfolio / Design & development',
      heading: 'Designing a portfolio around the reader’s attention.',
      ctaLabel: 'Explore the decisions',
    },
    meta: [
      { icon: 'work', label: 'Project Type', value: 'Personal portfolio' },
      { icon: 'person', label: 'My Role', value: 'Design & development' },
      { icon: 'team', label: 'Team', value: 'Solo' },
      { icon: 'hourglass', label: 'Timeline', value: 'Ongoing' },
      { icon: 'tools', label: 'Tools', value: 'Figma, Adobe, React, Vite' },
    ],
    sections: [
      { title: './The brief', body: 'I wanted a recruiter to understand my work, my engineering foundation, and how to contact me without having to piece the story together. I treated the portfolio as a product: establish who I am, show relevant work early, explain my decisions, and offer a clear next step.' },
      { title: './A person behind the work', body: 'The hero pairs a direct introduction with a portrait edged like torn paper. A “Tested & trusted” stamp lands once, adding a personal visual signature. The About section uses a separate headshot beside my background, with the paragraphs aligned to the title so the story reads as one column.' },
      { title: './A hierarchy built for scanning', body: 'Three featured projects lead the page. Each introduces the problem and my contribution before linking to the full case study. Consistent ./ section labels, readable text widths, and shared gutters help the reader move between work, background, skills, experience, and contact. The portfolio’s own story sits alongside the featured work as additional context.' },
      { title: './Colour and motion with purpose', body: 'A warm dark background, off-white text, and the muted rose accent #B89595 give the site a consistent identity. Off-white makes the hero stamp distinct. Sections reveal once as they enter the viewport; the tools row loops to show the workflow on the page. The loop has a pause control, and reduced-motion settings disable decorative animation.' },
      { title: './Making the case studies easier to read', body: 'MarketTrack now opens with the working product and its shipped outcome. Section links make the story easier to scan. Product, Sales, Expense, and Dashboard belong together under Design Decisions, while testing findings show the changes prompted by real use. Screenshots support the decisions, and the next-project thumbnail keeps the journey going.' },
      { title: './Designing for the smaller screen', body: 'The mobile hero stacks the full headline above a compact portrait. Longer layouts stack into readable columns, metadata keeps consistent label-to-value spacing, and the tools remain within the page width. Images use WebP where practical, include dimensions, and load lazily below the fold. The existing React and Vite structure remains in place.' },
      { title: './A clear next step', body: 'The hero offers case studies and a resume. The navigation keeps Contact within reach, case studies link to the next project, and the page closes with direct email and professional links. These choices support the reader’s next action without asking them to search for it.' },
      { title: './What I learned', body: 'The refinement made consistency as important as individual visual moments. A strong hero needs equally considered sections below it; a case study needs a clear relationship between its headings and supporting screens. I continue to refine the site through layout, accessibility, and build checks. Its success as a recruiter tool still needs real feedback rather than an assumed conversion claim.' },
    ],
  },
};

export default caseStudyContent;
