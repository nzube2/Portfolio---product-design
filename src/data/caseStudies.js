const caseStudies = [
  {
    id: 'CS-01',
    slug: 'markettrack',
    image: '/images/cs-00.webp',
    title:
      'MarketTrack — an inventory, sales, and expense tracking system for a small electrical business.',
    brief:
      'Ifythel Lights & Accessories was running its operations entirely on paper, scattered stock records, memory-tracked expenses, and no SKU system, making it hard to track profit or find inventory.',
    whatIDid:
      'I mapped out a system architecture with Claude, then designed a dashboard, product, sales, and expense pages to replace the paper system. Testing surfaced real gaps, like missing SKU search and manual entry for new stock, which I fixed before launch. MarketTrack is now in active use at Ifythel, giving the business real visibility into inventory, sales, and expenses for the first time.',
  },
  {
    id: 'CS-02',
    slug: 'guidely',
    image: '/images/cs-01.webp',
    title:
      'A campus companion for Nile University students; mobile design & development.',
    brief:
      "Nile University's portal efficiently manages academic functions like grades and course registration but fails to support student life activities. This has led to a fragmented student experience, where events and clubs rely on informal communication channels. New students often feel disconnected due to the absence of a centralized resource for campus life.",
    whatIDid:
      'I designed and led the UI/UX for Guidely, an app that consolidated campus life for students and prospectives unable to visit physically. It featured guest-to-student access, interest-based recommendations, and an offline-friendly virtual tour.',
  },
  {
    id: 'CS-03',
    slug: 'thermal',
    image: '/images/cs-02.webp',
    title:
      'Thermal — designing a music discovery experience built around feeling, not data',
    brief:
      "Spotify's recommendation engine has evolved to reflect users' existing tastes rather than promoting new discoveries. This shift has led to a form of musical confirmation, making it difficult for listeners to encounter genuinely new music without intentional effort.",
    whatIDid:
      'I designed Thermal, an AI music discovery concept that uses temperature to represent energy and emotion. I designed the complete journey: landing page, input form, vibe settings, AI analysis, and results, creating a consistent interaction model across the experience.',
  },
  {
    id: 'CS-04',
    slug: 'portfolio',
    image: '/images/cs-03.webp',
    title:
      'My portfolio — designing around the reader’s attention',
    brief:
      "Most junior portfolios fail the same way, they show the work but not the thinking behind it, or they look like a template with the names swapped out. I didn't want to build a page that displayed my projects. I wanted to build a page that behaved like one of my projects, something that proved my design instincts before a recruiter even opened a case study.",
    whatIDid:
      'I refined the portfolio around a clear recruiter journey: featured work first, personal portraits, consistent section labels, a muted rose palette, accessible motion, responsive layouts, and direct paths to case studies, my resume, and contact.',
  },
];

export default caseStudies;
