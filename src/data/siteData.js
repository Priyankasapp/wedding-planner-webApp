// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Atelier', path: '/atelier' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Journal', path: '/journal' },
  { label: 'Contact', path: '/contact' },
]

// ============================================================
// PORTFOLIO DATA
// ============================================================
export const portfolioData = [
  {
    id: '1',
    slug: 'amara-noah',
    couple: 'Amara & Noah',
    date: 'June 14, 2024',
    location: 'Santorini, Greece',
    category: 'Destination',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    ],
    story: 'Amara and Noah chose the cliffs of Santorini for their intimate ceremony, surrounded by the deep blue Aegean and golden afternoon light. Every detail was curated to reflect their shared love of art, travel, and each other.',
    vendors: [
      { role: 'Venue', name: 'Canaves Oia Suites' },
      { role: 'Photographer', name: 'Elena Rousseau' },
      { role: 'Florist', name: 'Bloom & Wild Athens' },
      { role: 'Caterer', name: 'Thalassa Fine Dining' },
    ],
  },
  {
    id: '2',
    slug: 'elena-marco',
    couple: 'Elena & Marco',
    date: 'September 3, 2024',
    location: 'Tuscany, Italy',
    category: 'Grand Celebration',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    ],
    story: 'In the rolling hills of Tuscany, Elena and Marco celebrated with 180 guests under centuries-old olive trees, dancing until dawn. A grand celebration woven with Italian tradition and modern elegance.',
    vendors: [
      { role: 'Venue', name: 'Villa Medicea di Lilliano' },
      { role: 'Photographer', name: 'Marco Vitale Studio' },
      { role: 'Florist', name: 'Fiori di Toscana' },
      { role: 'Caterer', name: 'La Cucina del Borgo' },
    ],
  },
  {
    id: '3',
    slug: 'isla-rhys',
    couple: 'Isla & Rhys',
    date: 'April 20, 2024',
    location: 'The Cotswolds, UK',
    category: 'Intimate',
    coverImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    ],
    story: 'Isla and Rhys exchanged vows in a centuries-old stone chapel, followed by an intimate garden reception for forty of their closest loved ones. Wildflowers, candlelight, and quiet joy defined their perfect day.',
    vendors: [
      { role: 'Venue', name: 'Barnsley House' },
      { role: 'Photographer', name: 'Rose & Ivy Photography' },
      { role: 'Florist', name: 'Wild & Whimsical Blooms' },
      { role: 'Caterer', name: 'The Garden Kitchen' },
    ],
  },
  {
    id: '4',
    slug: 'sophia-james',
    couple: 'Sophia & James',
    date: 'November 9, 2024',
    location: 'New York City, USA',
    category: 'Grand Celebration',
    coverImage: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80',
      'https://images.unsplash.com/photo-1470217957101-da7150b9b681?w=800&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    ],
    story: 'A black-tie affair in the heart of Manhattan. Sophia and James transformed a historic rooftop venue into a glittering celebration, with skyline views and an orchestra that played into the night.',
    vendors: [
      { role: 'Venue', name: 'The Rainbow Room' },
      { role: 'Photographer', name: 'Lux & Light NYC' },
      { role: 'Florist', name: 'Putnam & Putnam' },
      { role: 'Caterer', name: 'Cipriani Events' },
    ],
  },
]

// ============================================================
// JOURNAL DATA
// ============================================================
export const journalData = [
  {
    id: '1',
    slug: 'planning-a-destination-wedding',
    title: 'Planning a Destination Wedding',
    category: 'Planning Tips',
    date: 'October 12, 2024',
    readTime: '6 min read',
    excerpt: 'From legal paperwork to logistics, here is everything you need to know before saying "I do" abroad.',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    content: `Planning a destination wedding is one of the most exciting — and complex — decisions a couple can make. The romance of exchanging vows in a foreign land is undeniable, but the logistics require careful planning.

Start at least 18 months in advance. Legal requirements vary by country, and some nations require residency periods before a ceremony is legally recognized. Always consult with a local coordinator who understands the paperwork.

Guest experience is everything. Think about travel and accommodation blocks, welcome bags, and a pre-wedding dinner to help guests connect. Your wedding weekend becomes a mini-vacation for your loved ones — make it memorable.

Budget for the unexpected. Currency fluctuations, import fees for decor, and international vendor contracts all add complexity. Build a 15–20% contingency into your budget.

Finally, hire a local florist and caterer. They understand seasonal availability, local flavors, and can save you significant cost on logistics.`,
    author: 'Maison Lior Team',
  },
  {
    id: '2',
    slug: 'florals-that-feel-like-a-garden',
    title: 'Florals That Feel Like a Garden',
    category: 'Florals & Design',
    date: 'September 28, 2024',
    readTime: '4 min read',
    excerpt: 'The art of creating lush, unstructured arrangements that bring the beauty of nature indoors.',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    content: `The most memorable wedding florals don't look arranged — they look grown. The garden-style aesthetic has taken the wedding world by storm, and for good reason: it feels personal, abundant, and effortlessly romantic.

The key is choosing flowers at different stages of bloom. Mix tight buds with fully open blooms, and layer in unexpected textures — feathery grasses, trailing vines, and sculptural seed pods add depth that roses alone cannot.

Color is secondary to form. Rather than matching hues perfectly, work within a tonal family and let variety create richness. Soft blush, antique white, and muted terracotta together feel far more luxurious than a single shade repeated.

Work with your florist to source locally and seasonally. Not only does this reduce cost, it ensures freshness — and flowers that were growing in a nearby field just days before your wedding carry a magic that imported stems cannot replicate.`,
    author: 'Maison Lior Team',
  },
  {
    id: '3',
    slug: 'a-bride-letter-to-herself',
    title: 'A Bride\'s Letter to Herself',
    category: 'Love Stories',
    date: 'September 10, 2024',
    readTime: '3 min read',
    excerpt: 'A deeply personal reflection on love, nerves, and what it means to step into a new chapter.',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    content: `Dear future me,

Today you will stand in front of everyone you love and make a promise. Your hands might shake. Your voice might waver. That is not weakness — that is the weight of meaning.

You have spent months choosing flowers, fabrics, and fonts. But none of that is what people will remember. They will remember the look on your face when you saw him standing at the end of that aisle. They will remember your laugh during the vows, the way your mother squeezed your hand, the first song and the last dance.

Let it be imperfect. Let the timeline slip a little. Let yourself cry when you need to and laugh when you shouldn't. The best moments of this day will be the ones nobody planned.

You are not just getting married today. You are beginning. And beginnings, in all their uncertainty and joy, are the most beautiful things in the world.

With love,
You — the day before.`,
    author: 'Maison Lior Team',
  },
  {
    id: '4',
    slug: 'the-rise-of-multi-day-celebrations',
    title: 'The Rise of Multi-Day Celebrations',
    category: 'Planning Tips',
    date: 'August 22, 2024',
    readTime: '5 min read',
    excerpt: 'Why more couples are choosing to stretch their wedding into a full weekend experience.',
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    content: `The one-day wedding is giving way to something richer: a full weekend of celebration that allows couples and guests to truly savour the experience. Multi-day weddings are no longer reserved for royalty — they have become one of the most requested formats we see.

The typical structure unfolds across three days. A welcome dinner on Friday sets the tone — intimate, relaxed, a chance for guests from different parts of your life to meet. The ceremony and reception anchor Saturday. Sunday brunch closes the weekend gently, giving everyone a moment to reflect before returning to ordinary life.

For guests who have travelled far, the extended format transforms a wedding into a genuine gathering. Friendships form, stories are shared, and the couple gets to spend real time with the people they love most rather than rushing from table to table in a single evening.

The key to a successful multi-day wedding is pacing. Each event should have its own character and energy level. Don't try to recreate the same intensity three times — let Friday be soft, Saturday be grand, and Sunday be quiet.`,
    author: 'Maison Lior Team',
  },
  {
    id: '5',
    slug: 'the-quiet-luxury-of-restraint',
    title: 'The Quiet Luxury of Restraint',
    category: 'Florals & Design',
    date: 'August 5, 2024',
    readTime: '4 min read',
    excerpt: 'How doing less — and doing it impeccably — creates the most lasting impression.',
    coverImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
    content: `There is a particular kind of elegance that announces itself quietly. No chandelier forests, no towering floral installations — just intention, precision, and an absolute refusal to compromise on quality.

Quiet luxury in wedding design means choosing one extraordinary element and letting everything else serve it. A single variety of bloom in monochromatic abundance. A table set with antique linens and one perfect taper candle per place setting. A venue whose architecture is allowed to speak rather than being buried beneath decoration.

The discipline required is significant. Every instinct says to add more, to fill the space, to ensure no surface goes untouched. Resisting that instinct — and trusting that emptiness is not absence but presence — is where true sophistication begins.

When couples ask us what makes a wedding feel truly luxurious, our answer is always the same: the feeling that every single decision was made with complete intention. Not budget. Not scale. Intention.`,
    author: 'Maison Lior Team',
  },
  {
    id: '6',
    slug: 'real-wedding-elena-marco',
    title: 'Real Wedding: Elena & Marco',
    category: 'Real Weddings',
    date: 'July 18, 2024',
    readTime: '5 min read',
    excerpt: 'A Tuscan celebration that blended Italian heritage with contemporary elegance across three unforgettable days.',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    content: `When Elena and Marco first came to us, they had one request: make it feel like Tuscany has always felt — timeless, warm, and abundant.

We spent six months working with local artisans, vintners, and florists to craft a celebration that grew from the land itself. The welcome dinner was held in a centuries-old wine cellar, long tables lit by hundreds of pillar candles. Guests sipped the estate's own Chianti and ate food that had been prepared over two days by a team of local nonnas.

The ceremony took place in the villa's private chapel at golden hour. Elena wore a bias-cut gown in ivory silk; Marco, a linen suit the colour of warm stone. Their vows were handwritten and read in both English and Italian.

The reception unfolded under a canopy of olive trees draped in warm light. The floral design — by Fiori di Toscana — drew entirely from the surrounding landscape: wild rosemary, terracotta dahlias, climbing roses, and olive branches woven through every arrangement.

By midnight, three generations of both families were on the dance floor. By Sunday brunch, nobody wanted to leave.`,
    author: 'Maison Lior Team',
  },
]

// ============================================================
// SERVICES DATA
// ============================================================
export const servicesData = [
  {
    id: '1',
    title: 'Full Wedding Planning',
    description: 'End-to-end planning from engagement to reception. We handle everything — vendor sourcing, design direction, timeline management, and day-of coordination — so you can simply enjoy the journey.',
    features: [
      'Unlimited consultations',
      'Full vendor sourcing & management',
      'Budget planning & tracking',
      'Design concept & mood boarding',
      'Timeline & logistics coordination',
      'Day-of coordination',
    ],
    icon: 'crown',
  },
  {
    id: '2',
    title: 'Partial Planning',
    description: 'For couples who have started but need expert guidance to bring it all together. We step in where you need us most and ensure every detail aligns with your vision.',
    features: [
      'Up to 10 planning consultations',
      'Vendor review & recommendations',
      'Design refinement',
      'Timeline creation',
      'Final month coordination',
      'Day-of coordination',
    ],
    icon: 'heart',
  },
  {
    id: '3',
    title: 'Day-of Coordination',
    description: 'Your vision, perfectly executed. We take over the final weeks to ensure every detail is confirmed, every vendor is briefed, and your wedding day unfolds flawlessly.',
    features: [
      '2 planning consultations',
      'Vendor confirmation calls',
      'Detailed day-of timeline',
      'Ceremony rehearsal coordination',
      'Full day-of coordination team',
      'Emergency kit included',
    ],
    icon: 'calendar',
  },
]

// ============================================================
// TESTIMONIALS DATA
// ============================================================
export const testimonialsData = [
  {
    id: '1',
    quote: 'Maison Lior didn\'t just plan our wedding — they understood our story and told it beautifully. Every detail felt like us, only more so.',
    couple: 'Amara & Noah',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80',
  },
  {
    id: '2',
    quote: 'From the first meeting, we knew we were in extraordinary hands. The day was beyond anything we had imagined — and we had imagined a great deal.',
    couple: 'Elena & Marco',
    location: 'Tuscany, Italy',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&q=80',
  },
  {
    id: '3',
    quote: 'The calm they brought to what could have been a stressful process was invaluable. On the day itself, we were just two people in love — everything else was taken care of.',
    couple: 'Isla & Rhys',
    location: 'The Cotswolds, UK',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&q=80',
  },
]

// ============================================================
// TEAM DATA
// ============================================================
export const teamData = [
  {
    id: '1',
    name: 'Isabelle Laurent',
    role: 'Founder & Lead Planner',
    bio: 'With over a decade of experience across Europe and beyond, Isabelle founded Maison Lior on the belief that every love story deserves to be told with intention and artistry.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: '2',
    name: 'Sophie Renard',
    role: 'Design Director',
    bio: 'Sophie brings a background in interior design and editorial styling to every wedding she touches. Her eye for detail and love of texture creates celebrations that feel curated rather than decorated.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: '3',
    name: 'Clara Fontaine',
    role: 'Senior Coordinator',
    bio: 'Clara is the logistical heart of Maison Lior. Calm under pressure and meticulous in planning, she ensures that every wedding day unfolds with effortless precision.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  },
]

// ============================================================
// PROCESS STEPS
// ============================================================
export const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with a conversation — learning your story, your vision, and what matters most to you.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We craft a bespoke design concept and curate a team of vendors who share our commitment to excellence.',
  },
  {
    step: '03',
    title: 'Coordination',
    description: 'We manage every detail in the lead-up to your day, so you can be fully present for what matters.',
  },
  {
    step: '04',
    title: 'Celebration',
    description: 'On the day itself, we are there — quietly ensuring that every moment unfolds exactly as it should.',
  },
]

// ============================================================
// FAQ DATA
// ============================================================
export const faqData = [
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend reaching out at least 12–18 months before your wedding date, particularly for peak season dates (May–October). That said, we do occasionally have availability for shorter timelines — please inquire.',
  },
  {
    question: 'Do you work with international weddings?',
    answer: 'Absolutely. Destination weddings are a significant part of our work. We have coordinated celebrations across Europe, the Mediterranean, and beyond, and have established relationships with trusted local partners in many countries.',
  },
  {
    question: 'How do you select your vendors?',
    answer: 'Every vendor in our network has been personally vetted and, in most cases, worked with on previous weddings. We consider not only skill and style, but professionalism and how they treat couples on the day.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our packages are custom-quoted based on the scope of your wedding, location, and level of service required. We are transparent about pricing from the first conversation and will never recommend services you do not need.',
  },
  {
    question: 'Can you work with our existing vendors?',
    answer: 'Yes. For Partial Planning and Day-of Coordination, we are very experienced at stepping into an existing vendor team and ensuring everyone works in harmony toward the same vision.',
  },
  {
    question: 'What happens on the wedding day?',
    answer: 'We arrive before the first vendor and leave after the last guest. We manage timelines, troubleshoot quietly, and ensure that you and your families are never dealing with logistics — only celebrating.',
  },
]