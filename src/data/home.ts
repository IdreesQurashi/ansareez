// DRAFT copy for the landing page. The three services come from the client (25 Oct 2026);
// the wording and the lists under each service are drafts for the client to confirm.
// Anything in [square brackets] is a fact only the client can supply.
// Writing rules: British spelling, no hyphens or dashes in prose, no invented numbers, names or testimonials.

/** Fill colours for frames, named by role so a palette change never touches this file */
export type Tone = 'white' | 'ink' | 'night' | 'deep' | 'violet' | 'teal' | 'sky';

export type ServiceKey = 'marketing' | 'automation' | 'security';

export const serviceNames: Record<ServiceKey, string> = {
  marketing: 'Digital marketing',
  automation: 'AI automation',
  security: 'Cybersecurity audits',
};

/** The short names on the service map cards (Idrees, 26 Oct 2026) */
export const serviceVerbs: Record<ServiceKey, { verb: string; label: string }> = {
  marketing: { verb: 'Grow', label: 'Marketing' },
  automation: { verb: 'Automate', label: 'AI adoption' },
  security: { verb: 'Protect', label: 'Cybersecurity audits' },
};

export interface Reel {
  topic: string;
  title: string;
  tone: Tone;
  video?: string;
  poster?: string;
}

export const hero = {
  headline: 'Elevate your brand and scale your reach.',
  lead: 'Ansareez helps businesses win more customers online, save hours with AI automation, and find security gaps before attackers do.',
  secondary: 'See our services',
  // The client's three short videos (28 Oct 2026), compressed to 540 x 960 in public/videos.
  // Each column shows all three in a different order, so the same clip never sits side by side.
  feed: {
    up: [
      { topic: 'Marketing', title: 'Strategy sessions', tone: 'ink', video: '/videos/reel-strategy.mp4', poster: '/videos/reel-strategy.webp' },
      { topic: 'Cybersecurity', title: 'Security audits', tone: 'night', video: '/videos/reel-security.mp4', poster: '/videos/reel-security.webp' },
      { topic: 'AI adoption', title: 'AI and automation', tone: 'white', video: '/videos/reel-ai.mp4', poster: '/videos/reel-ai.webp' },
    ] satisfies Reel[],
    down: [
      { topic: 'AI adoption', title: 'AI and automation', tone: 'white', video: '/videos/reel-ai.mp4', poster: '/videos/reel-ai.webp' },
      { topic: 'Marketing', title: 'Strategy sessions', tone: 'ink', video: '/videos/reel-strategy.mp4', poster: '/videos/reel-strategy.webp' },
      { topic: 'Cybersecurity', title: 'Security audits', tone: 'night', video: '/videos/reel-security.mp4', poster: '/videos/reel-security.webp' },
    ] satisfies Reel[],
  },
};

// The team's track record from its earlier company profile (same people, new brand: Idrees,
// 27 Oct 2026). Keep it true: update it as the count grows, never round it up.
export const clients = {
  heading: '70+ brands in 4 years',
  intro: 'Some of the brands our team has worked with.',
  more: 'more brands',
};

export const overview = {
  heading: 'What we do',
  intro: 'Three services that work on their own or together. Start with the one your business needs most.',
};

export const services = {
  items: [
    {
      key: 'marketing',
      tagline: 'Get found by the right customers.',
      body: 'We pick the channels that suit your goals, then run targeted campaigns using custom audiences and data, with content made for your brand rather than borrowed from a template.',
      // From the team's earlier company profile (27 Oct 2026)
      includes: [
        'Meta ads on Facebook and Instagram',
        'Google Ads and YouTube ads',
        'Content for TikTok, Instagram and YouTube Shorts',
        'Influencer partnerships',
      ],
      cta: 'Talk to us about marketing',
    },
    {
      key: 'automation',
      tagline: 'Hand the repetitive work to software.',
      body: 'We find the tasks that eat up your team’s time and automate them with AI, from answering enquiries to processing documents and updating your systems.',
      // DRAFT: client to confirm
      includes: ['A review of how work flows today', 'AI assistants for enquiries and support', 'Automations between the tools you already use', 'Training for your team'],
      cta: 'Talk to us about AI',
    },
    {
      key: 'security',
      tagline: 'Find the gaps before someone else does.',
      body: 'We check your website, systems and everyday practices for weaknesses, then give you a clear report and a plan to fix them in order of risk.',
      // DRAFT: client to confirm
      includes: ['Website and system vulnerability checks', 'Email and account security review', 'Staff phishing awareness', 'A written report with priorities'],
      cta: 'Talk to us about an audit',
    },
  ] satisfies { key: ServiceKey; tagline: string; body: string; includes: string[]; cta: string }[],
};

// The self check: three yes or no questions, one per service, shown one at a time. An answer
// that shows a need flags that service; the first flagged one is the suggestion and any others
// are listed as also worth a look. Generic questions, not claims; the client can reword them.
export const selfCheck = {
  heading: 'Not sure where to start?',
  intro: 'Three quick questions, and we will point you to the service that will help most.',
  questions: [
    { q: 'Do new customers find you online most weeks?', service: 'marketing', needIf: 'no' },
    { q: 'Does your team lose hours each week to repetitive admin?', service: 'automation', needIf: 'yes' },
    { q: 'Has anyone checked your systems for security gaps in the last year?', service: 'security', needIf: 'no' },
  ] satisfies { q: string; service: ServiceKey; needIf: 'yes' | 'no' }[],
  results: {
    marketing: 'More of the right people finding you will make the biggest difference right now.',
    automation: 'Getting the repetitive work off your team’s plate will free up the most time.',
    security: 'Closing the gaps now costs far less than dealing with a breach later.',
    none: 'You are in good shape across all three. If you want a second opinion, we are happy to take a look.',
  } satisfies Record<ServiceKey | 'none', string>,
  suggestionLabel: 'Our suggestion',
  noneTitle: 'Looking good',
  alsoLabel: 'Also worth a look:',
  back: 'Back',
  restart: 'Start again',
};

export const process = {
  heading: 'How working together goes',
  steps: [
    {
      name: 'Intro call',
      body: 'A short call about your business and where you want help: growth, automation, security or all three.',
    },
    {
      name: 'Review',
      body: 'We look at how things work today and find where the biggest gains or the biggest risks are.',
    },
    {
      name: 'Plan',
      body: 'You get a clear plan with priorities and costs. Nothing starts until you agree to it.',
    },
    {
      name: 'Deliver and report',
      body: 'We do the work and send weekly reports in plain language, with results measured against the plan.',
    },
  ],
};

// Services beyond the three main ones, in three groups (Idrees, 27 Oct 2026). The security and
// IT groups follow the service list of a reference site Idrees supplied; the creative group is
// his own example. Descriptions are written fresh. DRAFT: client to confirm each one is offered.
export type MoreServicesIcon = 'shield' | 'server' | 'pen';

export const moreServices = {
  heading: 'More services',
  intro: 'Beyond our three main services, we also look after the systems, kit and creative work your business runs on.',
  groups: [
    {
      key: 'security-systems',
      icon: 'shield',
      name: 'Security and surveillance',
      blurb: 'Ongoing protection for your network, your devices and your premises.',
      items: [
        { name: 'Cybersecurity solutions', body: 'Threat detection, network monitoring, data encryption and incident response planning.' },
        { name: 'Endpoint defence', body: 'Protection for every laptop, desktop and phone on your network, with malware protection, access control and real time monitoring.' },
        { name: 'CCTV and security systems', body: 'High definition surveillance with night vision and real time alerts, supplied and installed to suit your premises.' },
      ],
    },
    {
      key: 'it-infrastructure',
      icon: 'server',
      name: 'IT infrastructure and support',
      blurb: 'The hardware, software and support that keep your business running.',
      items: [
        { name: 'IT hardware', body: 'Laptops, desktops, servers and networking kit from leading brands, with after sales support.' },
        { name: 'Specialised software', body: 'Operating systems, ERP and CRM systems, and digital forensic software.' },
        { name: 'HCI and VDI solutions', body: 'Hyperconverged infrastructure that brings compute, storage and networking together, plus virtual desktops for office or remote work.' },
        { name: 'Cloud and bespoke IT', body: 'Custom setups, including cloud computing, built around your needs and your budget.' },
        { name: 'Digital document management', body: 'Digital archiving and records management, so documents are secure, compliant and easy to find.' },
        { name: 'Backup power', body: 'Uninterruptible power supplies and other backup energy, supplied and installed so a power cut does not stop work.' },
        { name: 'IT support agreements', body: 'Service level agreements for desktops, laptops, servers, printers and UPS units, shaped around keeping downtime low.' },
      ],
    },
    {
      key: 'creative',
      icon: 'pen',
      name: 'Creative studio',
      blurb: 'Design and video that make your brand easy to recognise.',
      items: [
        { name: 'Graphic design', body: 'Social posts, ads and print, designed to match your brand.' },
        { name: 'Video editing', body: 'Short reels and longer videos, edited for each platform.' },
        { name: 'Branding and logo design', body: 'Logos and brand identities that people remember.' },
      ],
    },
  ] satisfies {
    key: string;
    icon: MoreServicesIcon;
    name: string;
    blurb: string;
    items: { name: string; body: string }[];
  }[],
};

// How the team works, from its earlier company profile (27 Oct 2026). Written for marketing
// clients there; DRAFT: client to confirm they hold for AI and security work too.
export const whyUs = {
  heading: 'Why work with us',
  intro: 'The way our team has looked after 70+ brands, and how we will look after yours.',
  items: [
    {
      icon: 'report',
      name: 'Weekly reports and meetings',
      body: 'Every week you get a short report and a meeting, so you always know what is working and what is changing.',
    },
    {
      icon: 'support',
      name: 'A team on hand',
      body: 'Our support team is there whenever you need something, not just at the next review.',
    },
    {
      icon: 'review',
      name: 'Senior review on everything',
      body: 'Everything is checked by a senior member of the team before it goes out, so nothing slips through.',
    },
    {
      icon: 'brand',
      name: 'Your brand comes first',
      body: 'Every post, ad and video is an extension of your brand. Our marketing and design teams make sure each one adds to it.',
    },
  ] satisfies { icon: 'report' | 'support' | 'review' | 'brand'; name: string; body: string }[],
};

export const results = {
  heading: 'Results',
  intro: 'Case studies from client work, with the numbers and the time period behind them.',
};

export const gallery = {
  heading: 'Gallery',
  intro: 'A look at our work and the people behind it.',
};

export const faq = {
  heading: 'Common questions',
  items: [
    {
      q: 'Do I need all three services?',
      a: 'No. You can start with the service that matters most right now and add the others later if they help.',
    },
    {
      q: 'What does a cybersecurity audit cover?',
      a: '[Client to confirm the audit scope, for example website, network, email, devices and staff practices.]',
    },
    {
      q: 'Is my data safe with AI automation?',
      a: '[Client to confirm how client data is handled, which AI providers are used and where data is stored.]',
    },
    {
      q: 'How much do your services cost?',
      a: '[Client to confirm pricing, or that each project is quoted after the intro call.]',
    },
    {
      q: 'Where are you based?',
      a: 'We are based in Slough, Berkshire. [Client to confirm the areas they work in.]',
    },
  ],
};

export const contact = {
  heading: 'Let’s talk about your business.',
  lead: 'Tell us what you need help with and we will get back to you.',
  emailPrompt: 'Prefer email? Write to',
  // Main services first, then the groups in More services
  serviceOptions: [
    ...Object.values(serviceNames),
    'Security and surveillance',
    'IT infrastructure and support',
    'Creative studio',
    'Not sure yet',
  ],
  privacyNote: 'We only use your details to reply to you.',
  submit: 'Send message',
};
