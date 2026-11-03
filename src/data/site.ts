// Brand details from the client (25 Oct 2026). Placeholders are marked.
export const site = {
  name: 'Ansareez',
  description:
    'Ansareez is a digital agency in Slough offering digital marketing, AI automation and cybersecurity audits.',
  // PLACEHOLDER: the client's real business email
  email: 'hello@example.com',
  address: {
    street: '45 Hampshire Avenue',
    town: 'Slough',
    postcode: 'SL1 3AG',
    country: 'GB',
  },
  // Every call to action leads to the contact form.
  ctaLabel: 'Get in touch',
  ctaUrl: '/#contact',
  // Clients, Results and Gallery only show in the menu once those sections have real content.
  nav: [
    { label: 'Clients', href: '/#clients' },
    { label: 'Services', href: '/#services' },
    { label: 'Where to start', href: '/#start' },
    { label: 'Process', href: '/#process' },
    { label: 'Results', href: '/#results' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'FAQ', href: '/#faq' },
  ],
  // PLACEHOLDER: the client's real profile links. Links left as '#' are not sent to search engines.
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  analytics: {
    // PLACEHOLDER: the client's Google Analytics 4 measurement ID, for example G-ABC123XYZ.
    // While empty, no analytics code or cookie banner is added to the site.
    gaMeasurementId: '',
  },
};
