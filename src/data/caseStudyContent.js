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
//                "./Design Decisions" card, matching Thermal's first
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
    bodyBg: '#292E3E',
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
        iconSize: 144,
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
        body: "With Claude's help, I mapped out a system architecture first, which I used to define user flows and wireframes before moving into high fidelity design. The system centers on four main pages:",
        subItem: {
          title: '01 — The Product Page',
          body: 'The product page tracks stock, order history, and supplier names, not just a simple inventory list.',
          image: {
            src: '/images/markettrack-product-page.png',
            alt: 'MarketTrack product page — stock list with buy/sell price, margin, and status',
          },
        },
      },
      {
        accent: 'right',
        title: '02 — The Sales Page',
        subheading: true,
        body: 'The sales page lets the business record sales, print receipts, and generate sales reports.',
        image: {
          src: '/images/markettrack-sales-page.png',
          alt: 'MarketTrack sales page — revenue summary cards and a table of recorded sales with gross profit',
        },
      },
      {
        accent: 'left',
        title: '03 — The Expense Page',
        subheading: true,
        body: 'The expense page tracks spending and generates expense reports.',
        image: {
          src: '/images/markettrack-expense-page.png',
          alt: 'MarketTrack expense page — today/week/month/year totals, category breakdown, and profit summary',
        },
      },
      {
        accent: 'right',
        title: '04 — The Dashboard',
        subheading: true,
        body: 'The dashboard brings it together as the entry point into the system.',
        image: {
          src: '/images/markettrack-dashboard.png',
          alt: 'MarketTrack dashboard — revenue, cost of goods, expenses, net profit, top selling products, and low stock alerts',
        },
      },
      {
        accent: 'left',
        title: './Testing & Iteration',
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
      eyebrow: 'UI/UX case study',
      heading:
        'My Portfolio As A Case Study- Designing For The Readers Attention',
      ctaLabel: 'Read Case Study',
    },
    meta: [
      { icon: 'work', label: 'Project Type', value: 'Portfolio' },
      { icon: 'person', label: 'My Role', value: 'Designer, Developer' },
      { icon: 'team', label: 'Team', value: 'Solo' },
      { icon: 'hourglass', label: 'Timeline', value: 'Ongoing' },
      { icon: 'tools', label: 'Tools', value: 'Figma, Adobe' },
    ],
    sections: [
      {
        accent: 'left',
        title: './Introduction',
        body: "A portfolio isn't really a gallery. It's more like a pitch that has about thirty seconds to convince someone before they scroll past and forget you existed. With that, rather than just designing a website to display some work, i wanted the portfolio itself to BE the project, just like id design based around a clients brief. Being able to design something to engage them, with no work yet loading, just design choices, would be good evidence",
      },
      {
        accent: 'right',
        title: './Storyteling With Visuals',
        body: "You can see this most clearly in the About section, the illustration of a girl stepping onto a mountain sits right where I'm talking about foundation. It's not decoration, it's the same idea said twice, once in the image and once in the words. Same thing happens in the hero. The floating mockups start with Figma, then move into actual designs – the tool first, then what it becomes. That order wasn't random. It's the story of how I actually work, shown before I've said a single word about it.",
      },
      {
        accent: 'left',
        title: './Colour and visuals for a cinematic feel',
        body: "The dark colour scheme on the site wasn't merely a matter of style; it was intended to have a cinematic effect, making the experience more like watching something than simply scrolling through it. The animations adhere to this principle as well. I wanted each section to unfold in the way a scene does in a presentation, rather than just appearing when you've scrolled far enough. This is also the reason why there is a video preview of previous work at the end instead of another series of screenshots and text; a thirty-second clip conveys more and quicker than someone scrolling past five static images in an attempt to work out what a project actually does.",
      },
      {
        accent: 'right',
        title: ',/Visual hierarchy',
        body: "When you look at an image on screen, it captures attention more readily than text does, so I added micro visuals along with all text elements on the page. Prior to anyone even starting to consume a block of text, it gives some kind of context using an image, icon or a visual representation of the content on hand - you're essentially reading an endorsement of what you already see.",
      },
      {
        accent: 'left',
        title: './Never leaving someone without a next step',
        body: 'Every section has somewhere to go next. "View Case Studies" and "View Resume" sit right in the hero. "Read more" and "See next" live on the case study cards. The contact button stays visible in the nav the entire time you scroll. And the page closes by circling all the way back to a direct email link. At no point should someone have to go hunting for what to do next – there\'s always something offered.',
      },
      {
        accent: 'right',
        title: './Where this leaves things',
        body: "This portfolio is not done and the goal is not for it to feel done- -it's live in the same way that any real product evolves after meeting real users. That being said, everything on this page was thoughtfully decided, even the parts that I'm still refining. If this case study did its job, of some what I just described already worked on you before you got here.",
      },
    ],
  },
};

export default caseStudyContent;
