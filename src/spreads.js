/** @typedef {{ image: string, desc: string }} LeftPage */
/** @typedef {{
 *   title?: string,
 *   role?: string,
 *   paragraphs?: string[],
 *   hint?: string,
 *   job?: { name: string, label: string, meta: string, summary: string, bullets: string[], link?: { href: string, label: string } },
 *   links?: { href: string, label: string }[],
 * }} RightPage */
/** @typedef {{ left: LeftPage, right: RightPage }} Spread */

/** @type {Spread[]} */
export const spreads = [
  {
    left: {
      image: '/images/cover.svg',
      desc: 'Lagos skyline at dusk — where the work begins',
    },
    right: {
      title: 'Henry Bassey',
      role: 'Founder, <a href="https://qlabs.space" target="_blank" rel="noreferrer">Quill Labs</a>',
      paragraphs: [
        'Building products from <a href="https://en.wikipedia.org/wiki/Lagos" target="_blank" rel="noreferrer">Lagos</a>. Writing about it (and anything else) on the internet.',
        '<a href="https://blogs.henrybassey.me" target="_blank" rel="noreferrer">I write, sometimes</a>',
      ],
      hint: 'Turn the page →',
    },
  },
  {
    left: {
      image: '/images/about.svg',
      desc: 'A notebook open beside a curious face — learning by shipping',
    },
    right: {
      title: 'About Me',
      paragraphs: [
        'I am Henry Bassey, a 19 year old founder based in <mark>Lagos, Nigeria</mark>. I started a software company, <a href="https://www.qlabs.space" target="_blank" rel="noreferrer">Quill Labs</a>, when I was 18. It\'s one of the many things I\'d love to scale with the people I connect with over the next few years — building products we believe in and making a lasting impact.',
        'I learned by shipping. Console games in <a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noreferrer">Python</a> became full products and <mark>AI applications</mark>. I care less about titles and more about taking ideas from zero to something people use.',
      ],
    },
  },
  {
    left: {
      image: '/images/shop.svg',
      desc: 'A clean storefront on a screen — product built for conversion',
    },
    right: {
      title: 'Work',
      job: {
        name: 'Suprvillain Store',
        label: 'Product & Build',
        meta: 'April 2025 – Present · E-Commerce',
        summary:
          'Designed and shipped a modern storefront for a premium lifestyle brand — clean product displays, cart, and a minimalist look built for conversion.',
        bullets: [
          'Full storefront from scratch',
          'Product listing, cart, and checkout',
          'Performance and mobile-first polish',
        ],
      },
    },
  },
  {
    left: {
      image: '/images/home.svg',
      desc: 'A smart home glowing at dusk — systems made simple',
    },
    right: {
      title: 'Work',
      job: {
        name: 'Smart IQ Living',
        label: 'Website',
        meta: 'October 2025 · Corporate Site',
        summary:
          'Built the corporate site for a smart home automation company — security, lighting, AV, and IoT services in one clear story.',
        bullets: [
          'Full corporate site design and build',
          'Scroll-driven motion for key sections',
          'Service pages structured for conversion',
        ],
        link: { href: 'https://smartiqliving.com', label: 'View Project' },
      },
    },
  },
  {
    left: {
      image: '/images/parent.svg',
      desc: 'A parent and child beside a story page — media made readable',
    },
    right: {
      title: 'Work',
      job: {
        name: 'The African Parent',
        label: 'Platform',
        meta: 'Sep 2025 – Jan 2026 · Editorial Revamp',
        summary:
          'Revamped a leading parenting media brand — design, engagement, and a custom admin for content and analytics.',
        bullets: [
          'Full site redesign for readability',
          'Admin dashboard for content & analytics',
          'Email and Stripe subscription flows',
        ],
        link: { href: 'https://theafricanparent.org', label: 'View Project' },
      },
    },
  },
  {
    left: {
      image: '/images/magazine.svg',
      desc: 'Stacked magazine covers and a shop tag — culture in print and pixels',
    },
    right: {
      title: 'Work',
      job: {
        name: 'Modemen Magazine',
        label: 'Platform',
        meta: 'Nov 2025 – Feb 2026 · Magazine & Shop',
        summary:
          'Built an editorial and shop platform for a fashion and culture magazine celebrating African masculinity — articles, interviews, events, and commerce in one place.',
        bullets: [
          'Magazine + shop in one platform',
          'Articles, interviews, and events',
          'Content and product data layer',
        ],
        link: { href: 'https://modemenmag.com', label: 'View Project' },
      },
    },
  },
  {
    left: {
      image: '/images/hello.svg',
      desc: 'An open envelope waiting for a reply — say hi',
    },
    right: {
      title: 'Say Hi',
      paragraphs: ['If you\'d like to work together or just say hello:'],
      links: [
        { href: 'mailto:henrybassey2007@gmail.com', label: 'Email' },
        { href: 'https://github.com/whoshnry', label: 'GitHub' },
        { href: 'https://x.com/whoshnry', label: 'X' },
        { href: 'https://instagram.com/sfw_henry', label: 'Instagram' },
      ],
    },
  },
]
