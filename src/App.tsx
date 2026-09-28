import React, { useState } from 'react'

type DetailSelection = { type: 'service' | 'vendor'; slug: string }
type Page = 'home' | 'terms' | 'privacy'

const getCurrentPage = (): Page => {
  const path = window.location.pathname
    .slice(import.meta.env.BASE_URL.length)
    .replace(/^\/+|\/+$/g, '')

  return path === 'terms' || path === 'privacy' ? path : 'home'
}

const getPageUrl = (destination: 'top' | 'services' | 'vendors' | 'about' | 'contact' | 'login' | 'terms' | 'privacy') => {
  if (destination === 'terms' || destination === 'privacy') {
    return `${import.meta.env.BASE_URL}${destination}/`
  }

  const homePath = window.location.pathname
    .slice(import.meta.env.BASE_URL.length)
    .replace(/^\/+|\/+$/g, '')

  return homePath ? `${import.meta.env.BASE_URL}#${destination}` : `#${destination}`
}

const serviceGallery = {
  tents: [
    ['/images/services/tents-canopies-1.jpg', 'Wedding ceremony beneath a draped canopy'],
    ['/images/services/tents-canopies-2.jpg', 'Floral wedding aisle beneath a canopy'],
    ['/images/services/tents-canopies-3.jpg', 'Illuminated canopy at an evening wedding reception'],
    ['/images/services/tents-canopies-4.jpg', 'Outdoor wedding reception under a decorated tent'],
  ],
  lawns: [
    ['/images/services/wedding-lawns-1.jpg', 'Outdoor lawn ceremony with floral decor'],
    ['/images/services/wedding-lawns-2.jpg', 'Open-air wedding venue at sunset'],
    ['/images/services/wedding-lawns-3.jpg', 'Garden wedding lawn reception with evening lights'],
    ['/images/services/wedding-lawns-4.jpg', 'Wedding ceremony setup on a landscaped lawn'],
  ],
  photoVideo: [
    ['/images/services/photography-videography-1.jpg', 'Wedding photography and videography photo 1'],
    ['/images/services/photography-videography-2.jpg', 'Wedding photography and videography photo 2'],
    ['/images/services/photography-videography-3.jpg', 'Wedding photography and videography photo 3'],
    ['/images/services/photography-videography-4.jpg', 'Wedding photography and videography photo 4'],
  ],
  reels: [
    ['/images/services/reel-shoots-1.jpg', 'Reel shoot service photo 1'],
    ['/images/services/reel-shoots-2.jpg', 'Reel shoot service photo 2'],
    ['/images/services/reel-shoots-3.jpg', 'Reel shoot service photo 3'],
    ['/images/services/reel-shoots-4.jpg', 'Reel shoot service photo 4'],
  ],
  social: [
    ['/images/services/reel-social-media-management-1.jpg', 'Reel and social media management photo 1'],
    ['/images/services/reel-social-media-management-2.jpg', 'Reel and social media management photo 2'],
    ['/images/services/reel-social-media-management-3.jpg', 'Reel and social media management photo 3'],
    ['/images/services/reel-social-media-management-4.jpg', 'Reel and social media management photo 4'],
  ],
  other: [
    ['/images/services/other-services-1.jpg', 'Other wedding services photo 1'],
    ['/images/services/other-services-2.jpg', 'Other wedding services photo 2'],
    ['/images/services/other-services-3.jpg', 'Other wedding services photo 3'],
    ['/images/services/other-services-4.jpg', 'Other wedding services photo 4'],
  ],
} as const

const services = [
  {
    slug: 'tents-canopies',
    name: 'Tents & Canopies',
    description: 'Waterproof tents, luxury tents, and outdoor canopies',
    detailedDescription: 'A well-planned tent or canopy gives an outdoor wedding a comfortable, welcoming setting while protecting guests from sun, wind, or unexpected rain. This service covers event tents in a range of sizes, from a simple ceremony canopy to a larger covered reception space. The team can help assess the guest count, venue dimensions, access routes, and ground conditions before recommending a layout. Options may include weather-resistant roof and side panels, flooring, entryways, lighting, and coordinated fabric finishes. The setup is arranged to leave clear circulation around dining tables, the stage, and service areas, while keeping important sightlines open for the ceremony and photographs. Couples should discuss installation and dismantling times, power access, anchoring requirements, and any venue restrictions before confirming a package. A site visit is especially useful where the ground is uneven or the event is close to trees, buildings, or water. The provider can also coordinate with decorators and caterers so that the tent plan supports the wider event schedule. Final sizes, materials, furnishings, and weather provisions depend on the venue and package selected. A confirmed floor plan helps suppliers avoid crowding entrances and emergency access routes. Request a written quotation and confirm what is included, what requires an additional charge, and how last-minute weather decisions are handled.',
    owner: 'Rohan Mehta (sample profile)',
    rating: '4.8 / 5 (sample rating)',
    location: 'Jaipur, Rajasthan (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.tents,
  },
  {
    slug: 'wedding-lawns',
    name: 'Wedding Lawns',
    description: 'Scenic outdoor venues and lawns for ceremonies',
    detailedDescription: 'A wedding lawn offers an open-air setting for ceremonies, receptions, and celebrations surrounded by greenery. This service helps couples explore a suitable outdoor venue based on guest capacity, event style, accessibility, and the practical needs of the day. A venue plan can include ceremony seating, an aisle, a reception dining area, space for the stage or entertainment, and clear routes for guests and staff. Couples can discuss the lawn’s available amenities, including power, restrooms, parking, preparation rooms, and weather contingencies. The natural setting can be styled with floral arrangements, lighting, a canopy, or other decor to complement the couple’s theme without obscuring the landscape. Before booking, it is useful to visit the property at the same time of day as the event, review access for suppliers, and ask about sound limits, setup windows, cleanup, and any restrictions on outdoor installations. The team can coordinate with tent, catering, and decor providers so that each area fits comfortably within the grounds. Since outdoor conditions can change, a practical backup plan for rain or heat should be discussed in advance. Venue availability, included facilities, capacity, and package terms vary by property and date; couples should confirm each detail directly and request it in writing.',
    owner: 'Ananya Sharma (sample profile)',
    rating: '4.7 / 5 (sample rating)',
    location: 'Udaipur, Rajasthan (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.lawns,
  },
  {
    slug: 'photography-videography',
    name: 'Photography & Videography',
    description: 'Candid and traditional photography, plus cinematic wedding videography',
    detailedDescription: 'Wedding photography and videography preserve the moments, people, and atmosphere that make a celebration personal. This combined service can cover key events from preparations and the ceremony through portraits, family photographs, and the reception. Before the wedding, the couple can share a schedule, preferred styles, important guests, cultural moments, and any restrictions at the venue. The team can then plan coverage, camera positions, and coordination so that important moments are documented without interrupting the event. Photography may include candid storytelling, group portraits, and carefully composed couple images. Video coverage can capture ceremony audio, speeches, movement, and the overall ambience, with the final edit shaped around the agreed format. Couples should review complete sample galleries and films, confirm how many professionals will attend, and ask about backup equipment and delivery timelines. It is also important to clarify image selection, editing, album or highlight-film options, file formats, usage rights, and how long the final files remain available. Coverage hours and deliverables depend on the chosen package and event schedule. Confirm whether travel, overtime, and extra event coverage are priced separately. A planning conversation before the date helps create a realistic shot list while leaving room for spontaneous moments. All services and delivery commitments should be confirmed in a written agreement.',
    owner: 'Kabir Sethi (sample profile)',
    rating: '4.9 / 5 (sample rating)',
    location: 'New Delhi (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.photoVideo,
  },
  {
    slug: 'reel-shoots',
    name: 'Reel Shoots',
    description: 'Short-form content and wedding reels',
    detailedDescription: 'A wedding reel shoot is designed to capture lively, shareable highlights in a short vertical-video format. The creator works around the event schedule to film details such as decor, entrances, candid reactions, dance-floor moments, and brief couple clips. Before the celebration, couples can discuss the mood they want, preferred music, visual references, important moments, and whether they want natural behind-the-scenes footage or more directed scenes. A simple shot plan helps the creator work efficiently without taking the couple away from their guests for long periods. Filming is coordinated with the photography and videography team to avoid blocking key views or disrupting formal moments. Sharing a finalized schedule and designated contact makes on-site coordination smoother. After the event, selected clips can be edited with pacing, captions, transitions, and music appropriate to the agreed style and platform format. Couples should confirm how many edited reels are included, expected video length, revision limits, delivery time, and whether raw clips are provided. Music and platform usage rights should also be discussed, since not every track is cleared for every use. This service focuses on short-form social content and complements, rather than replaces, full event photography or film coverage. Exact coverage, editing, and delivery depend on the agreed package.',
    owner: 'Ishita Rao (sample profile)',
    rating: '4.8 / 5 (sample rating)',
    location: 'Mumbai, Maharashtra (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.reels,
  },
  {
    slug: 'reel-social-media-management',
    name: 'Reel and Social Media Management',
    description: 'Reel creation, content planning, and social media management',
    detailedDescription: 'Reel and social media management combines short-form wedding content with thoughtful planning for a couple’s chosen social channels. Work can begin before the event with a conversation about the couple’s preferred tone, privacy boundaries, key milestones, and the people or moments they would like featured. A content plan can organize ideas for announcements, event-day stories, short vertical videos, and post-wedding highlights. On the day, the creator captures agreed moments while respecting the schedule and the couple’s requests about guests, children, and sensitive ceremonies. Afterward, footage can be selected and edited into reels, with captions and formatting adapted for the intended platforms. Management support may also include preparing a posting calendar, drafting captions, organizing approved assets, and scheduling content when requested. Couples retain control over what is published: review and approval steps should be agreed before any post goes live, and account access should never be shared without clear safeguards. Written approval steps help ensure private moments are not published unintentionally. Confirm the number of filming hours, content pieces, revisions, delivery format, posting responsibilities, and any ongoing management period. This service is intended to complement formal photo and video coverage, not replace it. Platform features and music rights can change, so final posting plans should be checked against current platform rules.',
    owner: 'Meera Kapoor (sample profile)',
    rating: '4.6 / 5 (sample rating)',
    location: 'Bengaluru, Karnataka (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.social,
  },
  {
    slug: 'other-services',
    name: 'Other Services',
    description: 'Catering, decoration, and more',
    detailedDescription: 'Wedding celebrations often need several supporting services to bring the couple’s plans together. This listing covers a range of options such as catering, floral and venue decoration, table styling, lighting, and related event support. Couples can describe the scale and style of their celebration, share the venue layout, guest count, dietary needs, and event schedule, then discuss which services are available for their date. For catering, it is helpful to review sample menus, serving style, tasting arrangements, dietary accommodations, and how food service will coordinate with the program. For decoration, conversations can cover a visual theme, color palette, floral preferences, installation timing, venue rules, and what will be removed after the event. A site visit and clear floor plan can help providers plan deliveries, staffing, setup, and guest movement. Ask for an itemized proposal that separates included materials and labor from optional upgrades, transport, taxes, and overtime. A shared schedule helps each provider coordinate setup and avoid delays. It is also useful to clarify who will be the on-site point of contact and how changes are handled as the date approaches. This category includes different kinds of work, so not every provider offers every service. Confirm the selected provider’s scope, availability, safety requirements, and cancellation terms directly before making arrangements.',
    owner: 'Arjun Malhotra (sample profile)',
    rating: '4.7 / 5 (sample rating)',
    location: 'Pune, Maharashtra (sample location)',
    contactNumber: '+91 00000 00000 (demo number)',
    gallery: serviceGallery.other,
  },
]

const vendorImages = {
  tents: [
    ['/images/vendors/luxury-tent-palace-1.jpg', 'Luxury tent palace photo 1'],
    ['/images/vendors/luxury-tent-palace-2.jpg', 'Luxury tent palace photo 2'],
    ['/images/vendors/luxury-tent-palace-3.jpg', 'Luxury tent palace photo 3'],
    ['/images/vendors/luxury-tent-palace-4.jpg', 'Luxury tent palace photo 4'],
  ],
  lawn: [
    ['/images/vendors/riverside-wedding-lawn-1.jpg', 'Riverside wedding lawn photo 1'],
    ['/images/vendors/riverside-wedding-lawn-2.jpg', 'Riverside wedding lawn photo 2'],
    ['/images/vendors/riverside-wedding-lawn-3.jpg', 'Riverside wedding lawn photo 3'],
    ['/images/vendors/riverside-wedding-lawn-4.jpg', 'Riverside wedding lawn photo 4'],
  ],
  photography: [
    ['/images/vendors/candid-moments-1.jpg', 'Candid Moments photo 1'],
    ['/images/vendors/candid-moments-2.jpg', 'Candid Moments photo 2'],
    ['/images/vendors/candid-moments-3.jpg', 'Candid Moments photo 3'],
    ['/images/vendors/candid-moments-4.jpg', 'Candid Moments photo 4'],
  ],
  videography: [
    ['/images/vendors/everlasting-memories-1.jpg', 'Everlasting Memories photo 1'],
    ['/images/vendors/everlasting-memories-2.jpg', 'Everlasting Memories photo 2'],
    ['/images/vendors/everlasting-memories-3.jpg', 'Everlasting Memories photo 3'],
    ['/images/vendors/everlasting-memories-4.jpg', 'Everlasting Memories photo 4'],
  ],
  reels: [
    ['/images/vendors/reel-it-right-studios-1.jpg', 'Reel It Right Studios photo 1'],
    ['/images/vendors/reel-it-right-studios-2.jpg', 'Reel It Right Studios photo 2'],
    ['/images/vendors/reel-it-right-studios-3.jpg', 'Reel It Right Studios photo 3'],
    ['/images/vendors/reel-it-right-studios-4.jpg', 'Reel It Right Studios photo 4'],
  ],
  decor: [
    ['/images/vendors/event-decor-hub-1.jpg', 'Event Decor Hub photo 1'],
    ['/images/vendors/event-decor-hub-2.jpg', 'Event Decor Hub photo 2'],
    ['/images/vendors/event-decor-hub-3.jpg', 'Event Decor Hub photo 3'],
    ['/images/vendors/event-decor-hub-4.jpg', 'Event Decor Hub photo 4'],
  ],
} as const

const vendors = [
  {
    slug: 'luxury-tent-palace',
    name: 'Luxury Tent Palace',
    category: 'Deluxe tent packages',
    description: 'Premium tent rentals for weddings and events. Waterproof, elegant, and customizable options available.',
    detailedDescription: 'Luxury Tent Palace offers covered event spaces designed to make outdoor wedding celebrations comfortable and visually cohesive. Couples can discuss tent styles and sizes based on their guest count, venue dimensions, ceremony format, and reception layout. Package options may include weather-resistant roofing, side panels, flooring, entryways, lighting, and coordinated fabric finishes. The team can help plan clear routes between the ceremony, dining tables, stage, and service areas, while considering sightlines for guests and photographers. A site visit is useful for checking ground conditions, access for delivery vehicles, anchoring requirements, and venue restrictions. Couples should confirm setup and dismantling windows, power availability, rain or wind contingencies, and what furnishings or decor are included. Coordination with the venue, caterer, and decorator can help avoid schedule conflicts and ensure that essential walkways remain open. Before booking, review an itemized proposal that specifies tent dimensions, materials, labor, transport, optional upgrades, taxes, and any overtime charges. Ask how changes in guest count or weather plans affect the final arrangement. The sample profile reflects a general tent-rental offering only; actual equipment, availability, service area, and package terms must be confirmed directly with the provider. A written agreement helps document expectations, timing, and responsibilities for event day.',
    rating: '4.8 / 5 (sample rating)',
    location: 'Jaipur, Rajasthan (sample location)',
    price: '₹80,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.tents,
  },
  {
    slug: 'riverside-wedding-lawn',
    name: 'Riverside Wedding Lawn',
    category: 'Open air venue',
    description: 'Scenic riverside location with natural beauty and modern amenities for wedding ceremonies.',
    detailedDescription: 'Riverside Wedding Lawn is presented as an open-air venue for couples seeking a scenic setting for a ceremony, reception, or multi-part celebration. The grounds can be planned around guest capacity, event timing, and the natural features of the property, with areas for seating, an aisle, dining, entertainment, and guest circulation. Couples should arrange a site visit to understand the landscape, river access, lighting at the planned event time, and available indoor or covered alternatives. Ask which facilities are included, such as parking, restrooms, preparation rooms, electrical access, and on-site support. Outdoor celebrations also require clear plans for changing weather, guest comfort, sound limits, and safe boundaries near water. The venue team can coordinate with tent, catering, and decor providers so that delivery routes and setup windows work within the property’s rules. Before confirming a date, review the capacity, booking hours, cleanup requirements, noise policies, cancellation terms, and any restrictions on installations or open flames. Request a written proposal that lists included services and optional charges separately. The sample profile describes a typical garden venue experience and does not verify the real property, amenities, or views. Availability, exact location, facilities, and package terms should be confirmed directly before making travel or booking arrangements.',
    rating: '4.7 / 5 (sample rating)',
    location: 'Udaipur, Rajasthan (sample location)',
    price: '₹1,50,000',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.lawn,
  },
  {
    slug: 'candid-moments',
    name: 'Candid Moments',
    category: 'Wedding photography',
    description: 'Candid wedding photography capturing every emotion and moment of your special day with artistic storytelling.',
    detailedDescription: 'Candid Moments focuses on documenting a wedding as it unfolds, balancing spontaneous interactions with the portraits and family photographs couples may want to keep. Coverage can be planned around the event schedule, cultural traditions, key guests, venue rules, and moments that matter most to the couple. A pre-event conversation helps the photographer understand preferred editing style, group-photo priorities, privacy boundaries, and any restrictions on flash or movement during the ceremony. Couples should review full sample galleries from similar events rather than relying only on a small selection of highlights. It is also worth confirming the number of photographers, coverage hours, travel arrangements, backup equipment, and the process for handling schedule changes. Package details may include edited digital photographs, an album, or additional event coverage, each with separate timelines and costs. Ask how images are selected, how many are delivered, what file formats are provided, and whether personal or commercial usage is permitted. A written agreement should state delivery expectations, revision policies, and how long the gallery remains accessible. This sample description outlines a photography service and is not a verified claim about a particular provider’s portfolio or workflow. Confirm availability, deliverables, and terms directly before booking. Discuss low-light coverage and how the team handles fast-moving ceremony moments.',
    rating: '4.9 / 5 (sample rating)',
    location: 'New Delhi (sample location)',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.photography,
  },
  {
    slug: 'everlasting-memories',
    name: 'Everlasting Memories',
    category: 'Wedding videography',
    description: 'Cinematic wedding videography and highlight reels that tell your love story beautifully.',
    detailedDescription: 'Everlasting Memories is presented as a wedding film service that records the atmosphere, voices, and movement of a celebration. Coverage can include preparations, the ceremony, family moments, speeches, and the reception, shaped around the couple’s schedule and preferred film style. Before the event, couples can share important traditions, key people, music preferences, venue restrictions, and moments that should receive particular attention. Ask how the videography team coordinates with photographers so that both can capture key events without obstructing guests or one another. Review complete films from comparable weddings to understand pacing, audio quality, color treatment, and the balance between candid scenes and directed portraits. Confirm how many crew members will attend, what equipment and audio capture are used, and whether backup recording plans are available. The proposal should specify filming hours, edited deliverables, approximate film length, delivery format, revision limits, and expected turnaround. Couples should also clarify music licensing, file access duration, raw-footage availability, travel, and overtime charges. This sample profile describes a general cinematic wedding-film offering; it does not verify a specific portfolio, equipment list, or delivery record. Confirm all details in writing with the provider before booking. Discuss how vows and speeches will be recorded clearly. Confirm delivery resolution details.',
    rating: '4.8 / 5 (sample rating)',
    location: 'Mumbai, Maharashtra (sample location)',
    price: '₹65,000',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.videography,
  },
  {
    slug: 'reel-it-right-studios',
    name: 'Reel It Right Studios',
    category: 'Reel shoots',
    description: 'Professional short-form content and wedding reel production for social media and entertainment.',
    detailedDescription: 'Reel It Right Studios is presented as a short-form video service for couples who want quick, shareable highlights from their wedding celebration. A planning discussion can identify the desired tone, vertical-video format, important moments, visual references, and any people or rituals that should remain private. On the event day, the creator can capture details, entrances, candid reactions, dance-floor scenes, and brief couple clips around the schedule. Coordination with the photography and film teams is important so that filming does not block views or disrupt formal moments. Couples should discuss how much direction they prefer and how much time, if any, is set aside for staged clips. After the event, selected footage may be edited with pacing, transitions, captions, and music according to the agreed style. Confirm the number and expected length of finished reels, coverage hours, delivery timeline, revision policy, and whether original clips are included. Ask about music usage rights and platform restrictions before publishing. Confirm the preferred aspect ratio, captions, and delivery method before the event. This sample description reflects a typical reel-production workflow and does not verify a specific studio’s portfolio or deliverables. Review sample work and agree all package terms in writing before booking. Confirm clip delivery resolution.',
    rating: '4.6 / 5 (sample rating)',
    location: 'Bengaluru, Karnataka (sample location)',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.reels,
  },
  {
    slug: 'event-decor-hub',
    name: 'Event Decor Hub',
    category: 'Decoration services',
    description: 'Complete wedding decoration services including flowers, lighting, and theme decor.',
    detailedDescription: 'Event Decor Hub is presented as a wedding styling service that can help bring a couple’s visual theme to the ceremony and reception spaces. Planning may cover a color palette, floral preferences, stage and aisle styling, table arrangements, lighting, and decor details suited to the venue. A clear brief, reference images, guest count, floor plan, and event timeline help the decorator create a practical proposal. A site visit can identify installation access, power needs, venue rules, ceiling or rigging limits, and what can safely be attached to existing structures. Couples should clarify which flowers and materials are included, whether substitutions may occur, and how seasonal availability affects the design. The schedule should specify delivery, setup, handover, and removal times, as well as who will coordinate with the venue and other suppliers. Ask for an itemized estimate separating design, materials, labor, transport, lighting, and optional upgrades. It is also important to discuss reusable or rented items, cleanup responsibilities, cancellation terms, and how final changes are priced. Request references that match your venue and theme. This sample profile describes a general decor offering and does not verify a provider’s inventory, past work, or service area. Review photos of completed installations and confirm scope and terms in writing before booking.',
    rating: '4.7 / 5 (sample rating)',
    location: 'Pune, Maharashtra (sample location)',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    gallery: vendorImages.decor,
  },
]

const mobileNavigationLinks: Array<{ label: string; page: 'services' | 'vendors' | 'about' | 'contact' }> = [
  { label: 'Services', page: 'services' },
  { label: 'Vendors', page: 'vendors' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
]

const legalContent = {
  terms: {
    title: 'Terms & Conditions',
    introduction: 'These Terms & Conditions govern your access to and use of WeddingVendors.in, including its website, service listings, vendor profiles, and related content. By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.',
    sections: [
      {
        title: 'Terms of Use',
        paragraphs: [
          'Use WeddingVendors.in to browse wedding-service information and make informed enquiries. Keep your communications lawful, respectful, and accurate, and independently confirm vendor details before relying on a listing. The website is currently an information directory, not a booking or payment service.',
        ],
      },
      {
        title: '1. About the platform',
        paragraphs: [
          'WeddingVendors.in is an informational directory intended to help couples discover wedding-related services and contact service providers. Listings, descriptions, photographs, and prices are provided for general information and may be illustrative.',
          'Unless a specific feature is expressly made available, the website does not itself provide wedding services, confirm bookings, process payments, hold deposits, or act as an agent, employer, insurer, or contracting party for a vendor. A listing or enquiry does not mean a vendor is verified, available, endorsed, or guaranteed by the platform.',
        ],
      },
      {
        title: '2. Eligibility and acceptable use',
        paragraphs: [
          'You must be at least 18 years old, or use the website with the involvement and permission of a parent or legal guardian. You agree to use the website lawfully and responsibly.',
          'You must not misuse the website, attempt to disrupt or gain unauthorized access to it, introduce malicious code, scrape or harvest information in a way that harms people or the service, impersonate another person, or use website content for fraud, harassment, spam, or unlawful discrimination.',
        ],
      },
      {
        title: '3. Listings, prices, and availability',
        paragraphs: [
          'We aim to present useful information, but listings may be incomplete, outdated, inaccurate, or subject to change. Photos may be representative and may not show the exact venue, equipment, or service being offered. Prices are not a binding quote and may exclude taxes, travel, setup, customization, or other charges.',
          'Before making plans or paying anyone, independently confirm the provider’s identity, services, availability, price, location, cancellation terms, permissions, and any applicable taxes or additional costs directly with that provider.',
        ],
      },
      {
        title: '4. Enquiries, bookings, and dealings with vendors',
        paragraphs: [
          'Any enquiry, negotiation, booking, contract, payment, refund, cancellation, or dispute is between you and the relevant vendor unless we expressly state otherwise in writing. Review the vendor’s terms and obtain written confirmation of important arrangements.',
          'WeddingVendors.in is not responsible for a vendor’s acts, omissions, qualifications, service quality, safety, legal compliance, availability, representations, or performance. We do not guarantee that a vendor will respond or that a service will meet your expectations. This does not exclude any responsibility that cannot legally be excluded.',
        ],
      },
      {
        title: '5. Accounts and website features',
        paragraphs: [
          'The sign-in screens currently displayed on the website are not connected to an authentication service. Do not enter a real password or sensitive account information into them. No account is created and no sign-in is completed through those screens.',
          'We may add, change, suspend, or remove website features or listings. We will not treat a displayed feature as an active booking, payment, or account service unless it is expressly enabled and its applicable terms are provided.',
        ],
      },
      {
        title: '6. Intellectual property and submitted materials',
        paragraphs: [
          'Unless otherwise stated, the website’s original text, branding, layout, and software are owned by or licensed to the website operator and are protected by applicable intellectual-property laws. You may access and print pages for personal, non-commercial wedding-planning use.',
          'You must not reproduce, sell, modify, publish, or commercially exploit website content without permission, except where applicable law permits. Third-party names, photographs, and marks belong to their respective owners and may be subject to separate terms.',
        ],
      },
      {
        title: '7. Third-party services and links',
        paragraphs: [
          'The website may display content hosted by third parties or link to external websites, including image providers and professional-networking services. Those services are operated independently and governed by their own terms and privacy policies. We do not control or endorse their content and are not responsible for their availability or practices.',
        ],
      },
      {
        title: '8. Disclaimers and limitation of liability',
        paragraphs: [
          'To the extent permitted by applicable law, the website and its content are provided on an “as is” and “as available” basis, without warranties that the website will be uninterrupted, error-free, secure, or that listings are complete or accurate. Nothing in these terms removes a consumer right or other protection that cannot lawfully be waived.',
          'To the extent permitted by law, the website operator will not be liable for indirect or consequential loss, loss of profit, loss of opportunity, or loss arising from a user’s dealings with a vendor or reliance on listing content. These terms do not limit liability for fraud, wilful misconduct, or any liability that applicable law does not allow us to limit.',
        ],
      },
      {
        title: '9. Indemnity, suspension, and changes',
        paragraphs: [
          'To the extent permitted by law, you agree to be responsible for claims and reasonable costs arising from your unlawful use of the website or your material breach of these terms. We may restrict or suspend access where reasonably necessary to protect users, the website, or our legal rights.',
          'We may update these terms from time to time. The revised version will be posted on this page with a new “Last updated” date. Your continued use after the change takes effect means you accept the revised terms. If a provision is unenforceable, the remaining provisions continue to apply.',
        ],
      },
      {
        title: '10. Governing law and contact',
        paragraphs: [
          'These terms are governed by the laws of India. Subject to mandatory consumer-protection laws and rules on jurisdiction, courts with competent jurisdiction in Bareilly, Uttar Pradesh, may hear disputes relating to these terms or the website.',
          'Questions about these terms may be sent to support@weddingvendors.in or raised using the contact details on our Contact page.',
        ],
      },
      {
        title: 'Be Safe Online',
        paragraphs: [
          'Confirm a vendor’s identity, services, availability, location, total price, and cancellation terms directly before making a commitment. Use a written agreement where appropriate, and do not send money or sensitive documents based only on a website listing or an unverified message.',
          'Use strong, unique passwords on services that support accounts. WeddingVendors.in sign-in screens are currently demonstration-only; do not enter a real password or sensitive account information into them.',
        ],
      },
      {
        title: 'Report Misuse',
        paragraphs: [
          'If you encounter a listing or message that appears fraudulent, abusive, misleading, or otherwise inappropriate, please report it to support@weddingvendors.in. Include the vendor name or page URL, a brief description of the concern, and any relevant details. Do not include passwords, payment-card details, or unnecessary sensitive information.',
          'We may review reports and take appropriate steps, including correcting or removing content or restricting access. We cannot guarantee a particular outcome or resolve private disputes between users and vendors.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    introduction: 'This Privacy Policy explains how WeddingVendors.in handles information when you visit the website. It reflects the features currently available. Please review it together with our Terms & Conditions.',
    sections: [
      {
        title: '1. Information we receive',
        paragraphs: [
          'The website currently provides informational pages and vendor listings. It does not currently provide working account registration, authentication, booking, payment, or enquiry-submission forms. The sign-in screens are demonstration interfaces: submitting them displays a message in your browser and does not send the entered email address or password to us. Please do not enter real passwords or sensitive information there.',
          'If you contact us directly by email or telephone, we receive the information you choose to provide, such as your name, contact details, and the contents of your message. We may also receive limited technical information, such as browser requests, approximate network information, device and browser details, and timestamps, through website hosting, security, or diagnostic services where those services make such logs available.',
        ],
      },
      {
        title: '2. How information is used',
        paragraphs: [
          'Information sent to us directly may be used to respond to your request, provide support, address safety or legal issues, and keep a record of relevant correspondence. Technical information may be used by the hosting provider or website operator to deliver, secure, troubleshoot, and maintain the website.',
          'We do not currently use information entered into the demonstration sign-in forms to create accounts, authenticate users, or contact vendors. We do not currently use the website to take bookings or payments.',
        ],
      },
      {
        title: '3. Cookies and similar technologies',
        paragraphs: [
          'The website application does not currently set cookies or use local storage for advertising, analytics, or user tracking. The hosting provider or third-party content providers may use essential technologies or collect technical data as part of delivering their services; consult their privacy information for details.',
        ],
      },
      {
        title: '4. Images, links, and third parties',
        paragraphs: [
          'Some photographs are loaded from Unsplash. When your browser requests these images, Unsplash may receive technical information such as your IP address and request details under its own privacy practices. The website also links to third-party services, including LinkedIn; visiting those services is subject to their own privacy policies.',
          'The website is hosted as a static site. The hosting provider may process technical request data to deliver and protect the website. We do not control how independent providers handle information, so review their policies before using their services.',
        ],
      },
      {
        title: '5. Sharing and disclosure',
        paragraphs: [
          'We do not sell personal information. We may share information you send directly only where needed to operate the website or respond to you, with service providers supporting hosting or security, with your direction or consent, or where required to comply with law, protect rights, or address a security or safety issue.',
          'The public vendor and service profiles are displayed as website content; they are not personal information you submit through a form. Do not send private information about another person without authorization.',
        ],
      },
      {
        title: '6. Retention and security',
        paragraphs: [
          'We keep correspondence only for as long as reasonably necessary to respond, maintain appropriate business records, resolve issues, and meet legal obligations. Hosting and security logs, if available, are retained according to the hosting provider’s settings and policies.',
          'We take reasonable steps appropriate to the website’s current operation, but internet transmission and storage cannot be guaranteed to be completely secure. Avoid sending passwords, financial details, identity documents, or other sensitive information by ordinary email or through the demonstration sign-in screens.',
        ],
      },
      {
        title: '7. Your choices and rights',
        paragraphs: [
          'You can choose not to provide personal information when contacting us, although that may prevent us from responding. You may contact us to request access to, correction of, or deletion of personal information you previously sent, subject to applicable law, legitimate record-keeping needs, and the rights of others.',
          'Depending on where you live, you may have additional rights under applicable privacy or data-protection laws. We will handle valid requests in accordance with those laws. You may also raise a concern with the relevant data-protection or consumer-protection authority.',
        ],
      },
      {
        title: '8. Children and international visitors',
        paragraphs: [
          'The website is intended for people planning or providing wedding services and is not directed to children. Please do not knowingly send us personal information about a child. If you believe a child has provided information to us, contact us so we can review and address it.',
          'The website may be accessed from outside India. Information you choose to send may be processed in India or in other locations where our hosting or communications providers operate, subject to applicable law.',
        ],
      },
      {
        title: '9. Changes and contact',
        paragraphs: [
          'We may update this policy when the website, its providers, or applicable law changes. The updated policy will be posted here with a revised “Last updated” date.',
          'For privacy questions or requests, email support@weddingvendors.in or use the contact details on our Contact page.',
        ],
      },
    ],
  },
} as const

const App: React.FC = () => {
  const [loginMessage, setLoginMessage] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState<DetailSelection | null>(null)
  const currentPage = getCurrentPage()
  const selectedService = selectedDetail?.type === 'service'
    ? services.find((service) => service.slug === selectedDetail.slug)
    : undefined
  const selectedVendor = selectedDetail?.type === 'vendor'
    ? vendors.find((vendor) => vendor.slug === selectedDetail.slug)
    : undefined
  const selectedContent = selectedService ?? selectedVendor

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoginMessage('Sign-in is not connected yet. Authentication will be available once the platform backend is configured.')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-background/98">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <a href={getPageUrl('top')} className="shrink-0 font-semibold text-text-h text-base sm:text-lg tracking-tight">WeddingVendors.in</a>
          
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a href={getPageUrl('services')} className="text-sm text-text-h hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              Services
            </a>
            <a href={getPageUrl('vendors')} className="text-sm text-text-h hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              Vendors
            </a>
            <a href={getPageUrl('about')} className="text-sm text-text-h hover:text-text-h transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:opacity-0 hover:after:w-full hover:after:opacity-100">
              About
            </a>
            <a href={getPageUrl('contact')} className="hidden sm:inline text-sm text-text-h hover:text-text transition-colors">Contact</a>
            <a href={getPageUrl('login')} className="px-3 sm:px-4 py-2 text-sm font-medium text-text-h border border-text-h/20 rounded-lg bg-white/60 hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Login
            </a>
            <button
              type="button"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-h transition hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-border bg-background px-4 py-3 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {mobileNavigationLinks.map(({ label, page }) => (
                <a
                  key={page}
                  href={getPageUrl(page)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-text-h transition hover:bg-accent/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {currentPage === 'home' && (
      <>
      {/* Hero Section */}
      <header id="top" className="pt-24 pb-12 sm:pt-28 md:pt-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-accent/5 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-h mb-6 animate-fade-up">
                Find & Book Perfect Wedding Vendors
              </h1>
              <p className="text-text text-lg mb-8 max-w-2xl animate-fade-up delay-150">
                Discover trusted tent providers, lawn owners, photographers, videographers, and more for your special day. Browse profiles, check ratings, and book directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300">
                <a href={getPageUrl('vendors')} className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-accent-bg bg-accent rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/10 text-center">
                  Browse Vendors
                </a>
                <a href={getPageUrl('login')} className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 text-center">
                  Get Started
                </a>
              </div>
            </div>
            <div className="relative mx-1 sm:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80" 
                alt="Wedding couple" 
                className="w-full h-72 sm:h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl rotate-0 sm:rotate-[-2deg] animate-slide-in" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Categories */}
      <section id="services" className="py-16 sm:py-20 md:py-32 bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-8 sm:mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Tent Services */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'tents-canopies' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618106494700-4b0049e83ed8?auto=format&fit=crop&w=900&q=80" 
                  alt="White event canopy tent on a grassy field" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M8 21h8M12 17l-4-8 4-8"></path>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Tents & Canopies</h3>
                <p className="mt-2 text-sm text-text/6">Waterproof tents, luxury tents, and outdoor canopies</p>
              </div>
            </div>
            </button>

            {/* Lawn Services */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'wedding-lawns' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1762216444919-043cf813e4de?auto=format&fit=crop&w=900&q=80" 
                  alt="Outdoor wedding ceremony in a lush garden" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v2h2v18H3zm5 3h14M3 7v10c2 3 5 5 8 3s5-2 8-3V7m3 4h6m6-4h2m-5-5a4 4 0 0 1-4 4V15m0-4a4 4 0 0 0-4 4v2m4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Wedding Lawns</h3>
                <p className="mt-2 text-sm text-text/6">Scenic outdoor venues and lawns for ceremonies</p>
              </div>
            </div>
            </button>

            {/* Photography & Videography */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'photography-videography' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529258132933-bc07a7487d1d?auto=format&fit=crop&w=900&q=80" 
                  alt="Wedding videographer filming with a stabilized camera" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    <polyline points="22 4 12 14 9 10.37"></polyline>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Photography & Videography</h3>
                <p className="mt-2 text-sm text-text/6">Candid and traditional photography, plus cinematic wedding videography</p>
              </div>
            </div>
            </button>

            {/* Reel Shoots */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'reel-shoots' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1768777271060-4b76e9ebf582?auto=format&fit=crop&w=900&q=80" 
                  alt="Smartphone recording a wedding ceremony by the ocean" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h.56l.01-.01a1.15 1.15 0 0 1 .33-.08 1.65 1.65 0 0 0 .78-1.02 1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H5a1.65 1.65 0 0 0 1 1.51v.09a1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.02.78 1.65 1.65 0 0 0 .33.08l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Reel Shoots</h3>
                <p className="mt-2 text-sm text-text/6">Short-form content and wedding reels</p>
              </div>
            </div>
            </button>

            {/* Reel and Social Media Management */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'reel-social-media-management' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80" 
                  alt="Content creator working with a laptop and smartphone" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h12a2 2 0 0 1 2 2v8H3z"></path>
                    <path d="m17 11 4-2v8l-4-2"></path>
                    <circle cx="10" cy="12" r="2.5"></circle>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Reel and Social Media Management</h3>
                <p className="mt-2 text-sm text-text/6">Reel creation, content planning, and social media management</p>
              </div>
            </div>
            </button>

            {/* Other Services */}
            <button type="button" onClick={() => setSelectedDetail({ type: 'service', slug: 'other-services' })} className="block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-accent">
            <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80" 
                  alt="Catered buffet with a variety of prepared dishes" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <line x1="9" y1="11" x2="9.01" y2="11"></line>
                    <line x1="15" y1="11" x2="15.01" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-text-h">Other Services</h3>
                <p className="mt-2 text-sm text-text/6">Catering, decoration, and more</p>
              </div>
            </div>
            </button>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section id="vendors" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-8 sm:mb-10 text-center animate-fade-up">Featured Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <button
                type="button"
                key={vendor.slug}
                onClick={() => setSelectedDetail({ type: 'vendor', slug: vendor.slug })}
                className="group relative block w-full rounded-2xl border border-border p-6 text-left transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="h-48 overflow-hidden bg-gradient-to-b from-accent/10 to-transparent">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-h">{vendor.name}</h3>
                  <p className="mt-1 text-sm text-text/6">{vendor.category}</p>
                  <p className="mt-2 text-xs text-text/6">{vendor.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-text-h">{vendor.price}</span>
                    <span className="rounded bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors group-hover:bg-accent/15">
                      View details
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedContent && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-20 sm:items-center sm:py-8"
          role="presentation"
          onClick={() => setSelectedDetail(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
            className="relative my-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-white/95 shadow-2xl shadow-black/20 backdrop-blur-sm"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close details"
              onClick={() => setSelectedDetail(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/90 text-text-h shadow-sm transition hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.5fr_1fr] lg:p-8">
              <div className="grid grid-cols-2 content-start gap-3">
                {selectedContent.gallery.map(([src, alt]) => (
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    className={`${selectedContent.gallery.length === 4 ? 'aspect-[3/4]' : 'aspect-[4/3]'} w-full rounded-2xl object-cover`}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {selectedVendor?.category ?? 'Wedding service'}
                </span>
                <h2 id="detail-title" className="mt-4 pr-12 text-3xl font-bold tracking-tight text-text-h sm:text-4xl">
                  {selectedContent.name}
                </h2>
                <p className="mt-4 text-base leading-7 text-text/70">
                  {selectedService?.detailedDescription ?? selectedVendor?.detailedDescription ?? selectedContent.description}
                </p>

                <div className="mt-6 space-y-4 rounded-2xl border border-border bg-background/70 p-5">
                  {selectedVendor ? (
                    <>
                      <p className="text-xs leading-5 text-text/60">
                        Sample profile details for demonstration only. Rating and location are not verified.
                      </p>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Price</p>
                        <p className="mt-1 text-2xl font-bold text-text-h">{selectedVendor.price}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Rating</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedVendor.rating}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Location</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedVendor.location}</p>
                      </div>
                    </>
                  ) : selectedService ? (
                    <>
                      <p className="text-xs leading-5 text-text/60">
                        Sample profile details for demonstration only. Owner, rating, location, and contact information are not verified.
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Owner’s name</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedService.owner}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Rating</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedService.rating}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Contact number</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedService.contactNumber}</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Location</p>
                        <p className="mt-1 text-sm font-medium text-text-h">{selectedService.location}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Owner</p>
                        <p className="mt-1 text-sm font-medium text-text-h">Not provided yet</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Contact number</p>
                        <p className="mt-1 text-sm font-medium text-text-h">Not provided yet</p>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text/60">Location</p>
                        <p className="mt-1 text-sm font-medium text-text-h">Not provided yet</p>
                      </div>
                    </>
                  )}
                </div>
                <a
                  href={getPageUrl('contact')}
                  onClick={() => setSelectedDetail(null)}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-fit"
                >
                  {selectedVendor ? 'Contact Vendor' : 'Contact Us'}
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid min-w-0 lg:grid-cols-[1.3fr_0.9fr] gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  About us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-h animate-fade-up">About Us</h2>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-150">
                  We are dedicated to helping couples find the perfect wedding vendors for their special day. Our platform connects you with trusted tent providers, lawn owners, photographers, videographers, and other wedding service professionals.
                </p>
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-300">
                  With verified profiles, genuine ratings, and transparent pricing, we make wedding planning easier and more reliable.
                </p>
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-450">
                  Planning a celebration often means coordinating many details at once. We bring a range of wedding services together in one place, so couples can explore options, compare offerings, and find services that fit their plans and priorities.
                </p>
                <p className="text-base md:text-lg leading-8 text-text/70 animate-fade-up delay-450">
                  We want every couple to feel more confident as they plan their day. Browse at your own pace, ask providers the questions that matter to you, and confirm important details directly before making arrangements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 animate-fade-up delay-450">
                {/* Team Member 1 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Aman</h4>
                  <p className="mt-1 text-sm text-text/60">CEO</p>
                </div>

                {/* Team Member 2 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Aish Maheshwari</h4>
                  <p className="mt-1 text-sm text-text/60">COO</p>
                </div>

                {/* Team Member 3 */}
                <div className="group rounded-2xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx="9" cy="11" r="5"></circle>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.04"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-h">Siddharth Sharma</h4>
                  <p className="mt-1 text-sm text-text/60">CMO</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-white/70 p-6 md:p-8 shadow-xl shadow-accent/5 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-h animate-fade-up">Our Team's LinkedIn</h3>
              </div>

              <div className="space-y-4 animate-fade-up delay-150">
                <a href="https://www.linkedin.com/in/aman-bhardwaj-08a6172a4/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Aman</span>
                </a>
                <a href="https://www.linkedin.com/in/aishmaheshwari15/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Aish Maheshwari</span>
                </a>
                <a href="https://www.linkedin.com/in/siddharth-sharma-a966702b3/" className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-text-h transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:translate-x-1" target="_blank">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-7v-7a5.5 5.5 0 0 0-1.083-3.268A5.5 5.5 0 0 0 16 8Z"></path>
                      <path d="M12.5 3h-1v8h1V3Zm3.5 3h-1v8h1V3Zm2.866-1.813a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1.394 8.233a4.5 4.5 0 1 1 6.838 2.54 4.5 4.5 0 0 1-6.838-2.54ZM7.5 12h2.19a4.5 4.5 0 0 1 1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083 4.26 4.5 4.5 0 0 1-1.083-4.26H7.5Z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Siddharth Sharma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="scroll-mt-20 border-y border-border bg-gradient-to-b from-accent/5 to-background py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-accent/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Welcome back
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-text-h md:text-5xl">Sign in to WeddingVendors.in</h2>
            <p className="mt-4 text-base leading-7 text-text/70">
              Choose the sign-in option that fits you. Your account details stay separate for couples and wedding professionals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="min-w-0 rounded-3xl border border-border bg-white/80 p-5 sm:p-6 shadow-lg shadow-accent/5 md:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M20 8v6m3-3h-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">For couples</p>
                  <h3 className="mt-1 text-2xl font-semibold text-text-h">User login</h3>
                  <p className="mt-2 text-sm leading-6 text-text/70">Manage your wedding plans, enquiries, and saved vendors.</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="user-email" className="mb-2 block text-sm font-medium text-text-h">Email address</label>
                  <input id="user-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="user-password" className="mb-2 block text-sm font-medium text-text-h">Password</label>
                  <input id="user-password" name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                  Sign in as a user
                </button>
              </form>
            </div>

            <div className="min-w-0 rounded-3xl border border-border bg-white/80 p-5 sm:p-6 shadow-lg shadow-accent/5 md:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">For wedding professionals</p>
                  <h3 className="mt-1 text-2xl font-semibold text-text-h">Vendor login</h3>
                  <p className="mt-2 text-sm leading-6 text-text/70">Manage your business profile, enquiries, and services.</p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="vendor-email" className="mb-2 block text-sm font-medium text-text-h">Business email</label>
                  <input id="vendor-email" name="email" type="email" autoComplete="email" required placeholder="you@business.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="vendor-password" className="mb-2 block text-sm font-medium text-text-h">Password</label>
                  <input id="vendor-password" name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-h outline-none transition placeholder:text-text/40 focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <button type="submit" className="w-full rounded-xl border border-accent bg-white px-5 py-3 text-sm font-semibold text-text-h transition hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                  Sign in as a vendor
                </button>
              </form>
            </div>
          </div>

          {loginMessage && (
            <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-accent/20 bg-white/80 px-4 py-3 text-center text-sm text-text-h" role="status">
              {loginMessage}
            </p>
          )}
        </div>
      </section>

      {/* Contact/Support Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-h mb-6 animate-fade-up">Get In Touch</h2>
              <p className="text-text/6 mb-8 animate-fade-up delay-150">
                Have questions or need assistance? Our support team is here to help you with bookings, payments, vendor queries, and more.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Support Team</p>
                    <p className="text-text/6">support@weddingvendors.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <path d="M10 9L19 12L10 15"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Helpline</p>
                    <p className="text-text/6">+919876543210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                  <div>
                    <p className="font-medium text-text-h">Address</p>
                    <p className="text-text/6">Bareilly, Uttar Pradesh – 243001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-h mb-6 animate-fade-up">Quick Links</h3>
              <div className="flex flex-col items-start gap-3 animate-fade-up delay-150">
                <a href={getPageUrl('services')} className="text-text hover:text-text transition-colors">Services</a>
                <a href={getPageUrl('vendors')} className="text-text hover:text-text transition-colors">Vendors</a>
                <a href={getPageUrl('about')} className="text-text hover:text-text transition-colors">About Us</a>
                <a href={getPageUrl('contact')} className="text-text hover:text-text transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legal" className="scroll-mt-20 border-t border-border bg-border/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-text-h sm:text-4xl">Terms & Privacy</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text/70">
            Learn how to use WeddingVendors.in and how we handle information when you visit the site.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <a href={getPageUrl('terms')} className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <h3 className="text-xl font-semibold text-text-h transition-colors group-hover:text-accent">Terms of Use</h3>
              <p className="mt-2 text-sm leading-6 text-text/70">Read the rules and important information that apply when using our website and vendor listings.</p>
              <span className="mt-4 inline-flex text-sm font-medium text-accent">Read Terms <span className="ml-1" aria-hidden="true">→</span></span>
            </a>
            <a href={getPageUrl('privacy')} className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <h3 className="text-xl font-semibold text-text-h transition-colors group-hover:text-accent">Privacy Policy</h3>
              <p className="mt-2 text-sm leading-6 text-text/70">See what information may be handled when you browse the site or contact our team.</p>
              <span className="mt-4 inline-flex text-sm font-medium text-accent">Read Privacy Policy <span className="ml-1" aria-hidden="true">→</span></span>
            </a>
          </div>
        </div>
      </section>
      </>
      )}

      {Object.entries(legalContent).map(([slug, document]) => (
        currentPage === slug && <main key={slug} id={slug} className="min-h-[calc(100vh-4rem)] bg-background py-16 sm:py-20 md:py-28">
          <article className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-xl shadow-accent/5 sm:p-8 md:p-10">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                WeddingVendors.in
              </span>
              <a href={getPageUrl('top')} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-text-h">
                <span aria-hidden="true">←</span>
                Back to home
              </a>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-h sm:text-4xl">{document.title}</h1>
              <p className="mt-4 text-sm text-text/60">Last updated: 27 September 2026</p>
              <p className="mt-6 text-base leading-8 text-text/70">{document.introduction}</p>

              <div className="mt-10 space-y-8">
                {document.sections.map((section) => (
                  <section key={section.title} className="border-t border-border pt-6">
                    <h2 className="text-xl font-semibold text-text-h">{section.title}</h2>
                    <div className="mt-3 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-text/70 sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </article>
        </main>
      ))}

      {/* Footer */}
      <footer className="py-12 bg-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="font-semibold text-text-h">WeddingVendors.in</div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text/6">
              <a href={getPageUrl('terms')} className="hover:underline transition-colors">Terms of Use</a>
              <a href={getPageUrl('privacy')} className="hover:underline transition-colors">Privacy Policy</a>
              <a href="#" className="hover:underline transition-colors">Cookies</a>
            </div>
            <p className="mt-2 md:mt-0 text-xs text-text/6">2026 WeddingVendors.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App