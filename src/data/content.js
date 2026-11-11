// Edit all website text here. Items in [BRACKETS] are placeholders.

export const brand = {
  name: 'Xcel Techno Solutions',
  email: 'xceltechno.blr@gmail.com',
  phone: '+91 88927 23958', // shown on the page
  phoneLink: '+918892723958', // used for tel: links
  whatsapp: '918892723958', // country code + number, no + or spaces
  whatsappMessage: 'Hi, I would like to enquire about a project.',
  location: 'BTM Layout, Bangalore',
  replyTime: '24 hours',
  heroImage: '/hero-watermark-subtle.jpg',
}

// EmailJS settings (emailjs.com). Paste your own IDs here.
export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'Printing', href: '#printing' },
  { label: 'Contact us', href: '#contact' },
]

export const about = {
  eyebrow: 'About us',
  heading: 'Help small businesses look professional and get more customers online.',
  promise: 'A clear process, on-time delivery and support after launch.',
  whyHeading: 'Why choose us',
  features: [
    { title: 'Web and print under one roof', text: 'Keep your digital and printed brand consistent.', accent: 'bg-tealdark' },
    { title: 'Mobile-first design', text: 'Make your website work beautifully on every screen.', accent: 'bg-teal' },
    { title: 'Clear process and pricing', text: 'Know what to expect at every step of your project.', accent: 'bg-blue' },
    { title: 'Support after launch', text: 'Get help keeping your website up to date.', accent: 'bg-cyan' },
  ],
  callToAction: 'Ready to talk about your project?',
  buttonText: 'Send an enquiry',
}

export const services = [
  { title: 'Small business websites', text: 'Simple, affordable sites that put your shop or service online.', icon: 'small-business-websites' },
  { title: 'Company profile websites', text: 'A professional home for your brand, team and portfolio.', icon: 'company-profile-websites' },
  { title: 'Service-based websites', text: 'Show your services and take enquiries or bookings.', icon: 'service-based-websites' },
  { title: 'Landing pages', text: 'One focused page built to turn visitors into leads.', icon: 'landing-pages' },
  { title: 'Website redesign', text: 'Refresh an old site: faster, cleaner, mobile-friendly.', icon: 'website-redesign' },
  { title: 'Website maintenance', text: 'Updates, fixes and hosting support, month after month.', icon: 'website-maintenance' },
]

export const printItems = [
  {
    title: 'Digital Printing',
    description: 'Fast, high-quality printing solutions for everyday business and personal needs.',
    icon: 'digital-printing',
    products: [
      'Business Cards',
      'Flyers & Leaflets',
      'Brochures',
      'Posters',
      'Invitations & Event Cards',
      'Letterheads & Envelopes',
      'Certificates',
      'ID Cards',
      'Stickers & Labels',
    ],
  },
  {
    title: 'Offset Printing',
    description: 'Cost-effective bulk printing with consistent colours and professional finishing.',
    icon: 'offset-printing',
    products: [
      'Brochures & Catalogues',
      'Books & Magazines',
      'Calendars & Diaries',
    ],
  },
  {
    title: 'Wide Format Printing',
    description: 'Large-scale printing solutions to make your brand visible and stand out.',
    icon: 'wide-format-printing',
    products: [
      'Flex Banners',
      'Vinyl Printing',
      'Roll-up Standees',
      'Backlit Displays',
      'Posters & Hoardings',
      'Signage & Name Boards'
    ],
  },
  {
    title: 'Corporate Gifting',
    description: 'Personalised corporate gifts that help businesses build meaningful relationships.',
    icon: 'corporate-gifting',
    products: [
      'Custom Printed T-Shirts',
      'Personalised Mugs',
      'Branded Pens',
      'Custom Diaries & Notebooks',
      'Water Bottles',
      'Keychains',
      'Employee Welcome Kits',
      'Festive & Event Gifts',
    ],
  },
]

export const steps = [
  { title: 'Discover', text: 'Your goals, content and budget.', border: 'border-tealdark' },
  { title: 'Design', text: 'A mockup for your approval.', border: 'border-teal' },
  { title: 'Build', text: 'React, Vite and Tailwind CSS.', border: 'border-blue' },
  { title: 'Launch and support', text: 'Go live, then keep it healthy.', border: 'border-cyan' },
]

export const projectsNote = 'Concept designs showing the kind of website we build for businesses like yours.'

export const projects = [
  { title: 'Apex Builders', type: 'Concept project · Construction company website', image: '/recent-works/apex-builders.webp' },
  { title: 'Fresh Bite Cafe', type: 'Concept project · Cafe and restaurant website', image: '/recent-works/fresh-bite-cafe.webp' },
  { title: 'Zenith Fitness', type: 'Concept project · Fitness and gym website', image: '/recent-works/zenith-fitness.webp' },
]

export const needOptions = ['A website', 'Website redesign', 'Website maintenance', 'Printing']
