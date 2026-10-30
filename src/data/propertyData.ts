export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  maxGuests: number;
  bedType: string;
  view: string;
  pricePerNight: number;
  priceIncludes: string;
  images: string[];
  amenities: string[];
  dimensions: string;
  features: string[];
}

export interface BoatingPackage {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  capacity: string;
  price: number;
  bestTime: string;
  highlights: string[];
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "homestay" | "rooms" | "backwaters" | "boating" | "nature" | "food" | "experiences";
  image: string;
  caption: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  guestName: string;
  location: string;
  travelType: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  driveTime: string;
  description: string;
  type: string;
  image: string;
}

export const PROPERTY_DETAILS = {
  name: "Vayuputra Boating & Homestays",
  fullBrand: "Vayuputra: Honnavar Sharavati Backwater Boating & Island Home Stays",
  localName: "ವಾಯುಪುತ್ರ: ಹೊನ್ನಾವರ ಶರಾವತಿ ಹಿನ್ನೀರು ಬೋಟಿಂಗ್ ಮತ್ತು ಹೋಮ್‌ಸ್ಟೇ",
  tagline: "Feel and Breathe the Untouched Natural Reservoir of Sharavati Backwaters",
  heroSubtitle: "TARIBAGILU & MAVINKURVA ISLAND • HONNAVAR, KARNATAKA",
  heroDescription:
    "We are a local family tour operator providing private boat rides, authentic island homestays, and extra nature activities. Explore the untouched group of islands, the long bay of Sharavati river, scenic sunrise and sunset viewpoints, and home-cooked Karavali meals.",
  notAResortNotice:
    "Please note: Vayuputra is a genuine village homestay and private boat service, NOT a commercial luxury resort. Come for the raw beauty of backwater island life, gentle boat cruises, home-cooked food, and peaceful simplicity.",
  welcomeHeading: "Authentic Island Homestays & Backwater Boating in Honnavar.",
  welcomeDescription:
    "We operate at Honnavar - Mavinkurva backwater riverside, offering private boats and genuine homestays at Mavinkurva main island and peaceful small islands. Whether you want to drift through mangrove forests, view lotus clusters, visit a group of islands, or simply relax under palm trees away from city chaos, our family warmly welcomes you.",
  boatingHeading: "Explore the Sharavati River & Group of Islands by Boat.",
  boatingDescription:
    "Our private motorboat services depart directly from the island riverbank. Discover the long bay of Sharavati river, sheltered mangrove labyrinths, blooming water lily spots, and breathtaking sunset panoramas with our experienced local boatman.",
  foodHeading: "Authentic Karavali Home Cooking from Our Family Kitchen.",
  foodDescription:
    "No commercial restaurant menus or reheated food. Enjoy simple, delicious coastal Karnataka home cooking prepared with freshly harvested coconuts, local spices, garden herbs, and fresh seafood sourced right from Honnavar harbor.",
  locationHeading: "How to Reach Taribagilu & Mavinkurva Island, Honnavar.",
  reviewsHeading: "Memories Shared by Our Wonderful Guests.",
  footerClosing: "Feel and breath the natural beauty of Sharavati backwaters. Book immediately for an attractive package!",
  operatingHours: "6:00 AM – 6:00 PM, Monday through Sunday (All boating ends by 6:00 PM)",
  contact: {
    phone: "+91 9739790357",
    phoneDisplay: "9739790357",
    whatsapp: "+919739790357",
    whatsappDisplay: "+91 9739790357",
    email: "ganeshgouda16@gmail.com",
    hostName: "Ganesh Gouda",
    address: "Taribagilu, Mavinkurva Backwater Riverside, Honnavar, Karwar / Uttara Kannada, Karnataka - 581334, India",
    coordinates: { lat: 14.2812, lng: 74.4439 },
    googleMapsUrl: "https://maps.google.com/?q=Taribagilu+Honnavar+Karnataka",
    checkInTime: "12:00 PM (Flexible for early train arrivals)",
    checkOutTime: "11:00 AM",
    operatingHoursBoating: "6:00 AM – 6:00 PM (All boating service strictly ends by 6:00 PM)",
  },
  hosts: {
    names: "Ganesh Gouda & Family",
    story:
      "Born and raised on the Sharavati backwater islands around Mavinkurva, Ganesh Gouda and his family have spent a lifetime navigating these peaceful waterways, mangroves, and secret lagoons. We started Vayuputra Boating & Homestays so guests could experience true coastal hospitality, explore untouched river islands, and disconnect in nature without the artificial gloss of commercial tourism.",
  },
};

export const HOMESTAY_VS_RESORT = [
  {
    feature: "Atmosphere & Setting",
    homestay: "Peaceful island village home surrounded by coconut groves and gentle river ripples",
    resort: "Commercial hotel blocks, loud poolside music, and crowded reception lobbies",
  },
  {
    feature: "Boating & River Access",
    homestay: "Private riverfront boarding with local boatman Ganesh Gouda—zero queues, personalized route",
    resort: "Third-party contracted boat rides, commercial boat stand lines with fixed short loops",
  },
  {
    feature: "Food & Dining",
    homestay: "Freshly prepared home-cooked Karavali delicacies (Neer Dosa, local fish fry, herbal rasam) straight from family kitchen",
    resort: "Generic banquet buffets, reheated Continental spreads, and commercial restaurant pricing",
  },
  {
    feature: "Nature & Environment",
    homestay: "Untouched mangrove channels, water lily clusters, starlit dark skies, morning bird choir at 5:30 AM",
    resort: "Artificial landscaping, chlorinated pools, manicured lawns with artificial lighting",
  },
  {
    feature: "Hospitality & Guidance",
    homestay: "Heartfelt personal care by host Ganesh Gouda; insider tips on hidden beaches, tide timing, and island paths",
    resort: "Rotating desk staff, transactional customer service, and commercial upsells",
  },
];

export const ROOMS: Room[] = [
  {
    id: "vayuputra-island-homestay",
    name: "Vayuputra Island Homestay Accommodation",
    tagline: "Authentic island home on Mavinkurva surrounded by coconut groves & calm backwaters",
    description:
      "A peaceful coastal island village home nestled under coconut palms along the tranquil Sharavati backwaters. Features an open wooden sit-out veranda facing the water, clean and airy bedrooms with traditional red-oxide cooling floors, attached spotless western bathroom with 24/7 hot water, natural river cross-breezes, and warm Karavali family hospitality. Far from noisy city hotels and commercial tourist crowds.",
    maxGuests: 6,
    bedType: "Comfortable Queen / Twin Beds + extra single cots & floor mattresses available",
    view: "Direct Sharavati Backwater & Coconut Grove View",
    pricePerNight: 1500,
    priceIncludes: "Complimentary authentic home-cooked Karavali breakfast & morning river herbal tea",
    dimensions: "Spacious Island Home with Waterfront Sit-Out Veranda",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    ],
    amenities: [
      "Waterfront sit-out veranda with wooden armchairs overlooking the river",
      "Attached spotless private western bathroom with 24/7 hot water geyser",
      "Ceiling fan & breezy natural coastal cross-ventilation",
      "Filtered RO safe drinking water",
      "Clean fresh organic cotton bed linens, quilts & bath towels",
      "Direct walking path to Vayuputra boat jetty (30 seconds)",
      "Complimentary fresh stone-ground Karavali breakfast (Neer Dosa, chutney, etc.)",
      "Safe, enclosed island yard for children and elders to relax peacefully",
    ],
    features: [
      "Step directly from the homestay onto the private boat dock",
      "Cool red-oxide stone flooring that stays refreshing in coastal heat",
      "Hammock tied between coconut palms facing water ripples",
      "Starlit dark night skies with pure river silence",
    ],
  },
];

export const BOATING_PACKAGES: BoatingPackage[] = [
  {
    id: "one-hour-backwater-safari",
    title: "1-Hour Sharavati Backwater & Mangrove Safari",
    badge: "1 Hour • ₹1500 / Boat",
    shortDesc: "Glide through sheltered mangrove tidal canals and Mavinkurva island backwaters.",
    fullDesc:
      "A soul-soothing 1-hour private boat journey through the dense mangrove channels and river waterways of Mavinkurva island. Drift slowly under hanging branches, spot exotic migratory birds, and feel the natural silence broken only by the gentle hum of our engine and water ripples.",
    duration: "1 Hour",
    capacity: "1 Boat – 8 Member Capacity",
    price: 1500,
    bestTime: "Available 6:00 AM – 6:00 PM (All boating ends by 6 PM)",
    highlights: [
      "Fixed Tariff: ₹1,500/- per boat (1 Hour)",
      "1 Boat – 8 member capacity included in tariff",
      "Passage through sheltered natural mangrove tree canals",
      "Close-up views of Brahminy Kites, Pied Kingfishers & Egrets",
      "Calm, protected inland water—ideal for children, elders & non-swimmers",
      "Certified life jackets provided for all 8 members",
      "All boating service strictly ends by 6:00 PM",
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "two-hour-island-cruise",
    title: "2-Hour Grand Sharavati Bay & Group of Islands Cruise",
    badge: "2 Hours • ₹2500 / Boat • Closes at 5 PM",
    shortDesc: "Visit multiple secluded river islands across the wide bay. Note: This 2-hour package closes at 5:00 PM daily.",
    fullDesc:
      "Vayuputra's signature 2-hour extended expedition! Cruise along the wide expanses of the Sharavati river bay, navigating between the main Mavinkurva island and smaller pristine river islands. Witness traditional fishermen, untouched sandy river bends, and vast water vistas. Please note: This 2-hour package strictly closes at 5:00 PM so all boating ends by 6:00 PM.",
    duration: "2 Hours",
    capacity: "1 Boat – 8 Member Capacity",
    price: 2500,
    bestTime: "6:00 AM – 5:00 PM (Package closes at 5:00 PM; all boating ends by 6 PM)",
    highlights: [
      "Fixed Tariff: ₹2,500/- per boat (2 Hours)",
      "1 Boat – 8 member capacity included in tariff",
      "⚠️ Important: This 2-Hour package closes at 5:00 PM daily",
      "All boating service strictly concludes by 6:00 PM",
      "Island hopping across Mavinkurva and smaller delta islands",
      "Cruising the vast and peaceful Sharavati river long bay",
      "Witnessing age-old traditional artisanal fishing methods",
      "Complimentary sweet tender coconut water served on board",
    ],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sunrise-sunset-cruise",
    title: "1-Hour Sunrise & Sunset Vantage Point Cruise",
    badge: "1 Hour • ₹1500 / Boat • Golden Hour",
    shortDesc: "Watch the sun rise over the Western Ghats or dip into the Arabian Sea horizon in molten gold.",
    fullDesc:
      "Honnavar is renowned for dramatic coastal sunsets where the river merges into the sea, and misty morning sunrises across the river delta. Our boat positions you at the finest vantage points where the sky and backwaters turn molten gold and crimson. A truly magical, unhurried coastal memory.",
    duration: "1 Hour",
    capacity: "1 Boat – 8 Member Capacity",
    price: 1500,
    bestTime: "Sunrise: 6:00 AM – 7:15 AM | Sunset: 5:00 PM – 6:00 PM (All boating ends by 6 PM)",
    highlights: [
      "Fixed Tariff: ₹1,500/- per boat (1 Hour)",
      "1 Boat – 8 member capacity included in tariff",
      "Prime viewing locations away from crowds and traffic",
      "Golden hour reflections dancing across calm backwaters",
      "Flocks of coastal birds flying back to island roosts",
      "Certified life jackets provided for all 8 members",
      "All boating service concludes by 6:00 PM",
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "water-lily-lotus-safari",
    title: "1-Hour Water Lily & Lotus Sanctuary Boat Safari",
    badge: "1 Hour • ₹1500 / Boat • Morning Special",
    shortDesc: "Explore secret backwater lagoons filled with wild blooming water lilies and pink lotuses.",
    fullDesc:
      "Tucked away in the calmest backwater lagoons of the Sharavati river are seasonal blooms of pink and white water lilies and lotuses. In the crisp morning air, these aquatic flowers open up across emerald waters, creating a natural spectacle few casual tourists ever get to see.",
    duration: "1 Hour",
    capacity: "1 Boat – 8 Member Capacity",
    price: 1500,
    bestTime: "6:30 AM – 9:00 AM (Flowers bloom in early morning sunlight)",
    highlights: [
      "Fixed Tariff: ₹1,500/- per boat (1 Hour)",
      "1 Boat – 8 member capacity included in tariff",
      "Drifting gently into secluded shallow water lily and lotus pools",
      "Spotting purple herons, bronze-winged jacanas and river terns",
      "Eco-conscious slow navigation that preserves aquatic flora",
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
];

export const BOATING_SAFETY_INFO = {
  boatModel: "Custom Karavali Fiber Craft with Low-Noise Yamaha 4-Stroke Engine",
  inspected: "Licensed & registered for inland Sharavati river navigation",
  safetyGear: "Govt-approved ISI certified life vests for all passengers (Adult, Child & Toddler sizes)",
  captain: "Ganesh Gouda (Local island boatman with 15+ years backwater navigational expertise)",
  maxCapacity: "1 Boat - 8 member capacity strictly for safety and quiet cruising",
  tariffStructure: "1 Hour: ₹1,500/- per boat | 2 Hours: ₹2,500/- per boat (2-Hour package closes at 5:00 PM; all boating ends by 6:00 PM)",
  jettyLocation: "Taribagilu & Mavinkurva island riverside jetty (direct boarding, zero queues)",
  operatingWindow: "6:00 AM to 6:00 PM (Daily; 2-hour tour closes at 5:00 PM; all boating ends by 6:00 PM)",
  childrenPolicy: "Children of all ages welcome with mandatory child-fitted life jackets",
  specialNotes: "Backwater channels are calm and sheltered, making the boat rides smooth, safe, and pleasant even for non-swimmers.",
};

export const FOOD_HIGHLIGHTS = [
  {
    name: "Fresh Cloud-Soft Neer Dosa",
    description: "Prepared fresh in the family kitchen from stone-ground rice batter, served with spicy freshly grated coconut chutney and jaggery.",
    type: "Homestyle Breakfast Special",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coastal Karavali Fish Thali (On Request)",
    description: "Fresh catch from Honnavara port simmered in coconut, sour kokum, and Byadgi red chilli gravy, served with rice and spiced fish fry.",
    type: "Authentic Coastal Lunch",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wholesome Village Veg Thali",
    description: "Red boiled rice (Kuchilakki) or white rice, aromatic vegetable palya, spiced coconut Tambuli, authentic saru (rasam), and crisp papad.",
    type: "Pure Homestyle Vegetarian Meal",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sweet Tender Coconut & Spiced Kashaya",
    description: "Cool sweet water freshly cut from our homestead island coconut trees, followed by warm, soothing herbal kashaya as twilight falls.",
    type: "Island Garden Refreshment",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Morning mist along Sharavati River backwaters",
    category: "backwaters",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    caption: "The untouched stillness of early morning at Mavinkurva island.",
    featured: true,
  },
  {
    id: "g-2",
    title: "Vayuputra motorboat navigating mangrove canals",
    category: "boating",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    caption: "Entering the sheltered mangrove waterways of Honnavar.",
    featured: true,
  },
  {
    id: "g-3",
    title: "Riverside cottage veranda sit-out",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    caption: "Wooden chairs overlooking the palm trees and calm water ripples.",
    featured: true,
  },
  {
    id: "g-4",
    title: "Traditional rustic homestay nestled under coconut palms",
    category: "homestay",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    caption: "Honest village living in coastal Karnataka: red tiles, clean rooms, river breeze.",
    featured: true,
  },
  {
    id: "g-5",
    title: "Golden sunset over Honnavar backwaters",
    category: "backwaters",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    caption: "Golden hour reflections on the Sharavati long bay cruise.",
    featured: true,
  },
  {
    id: "g-6",
    title: "Handmade Neer Dosa breakfast",
    category: "food",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
    caption: "Freshly made on cast iron tawa with spiced grated coconut chutney.",
    featured: false,
  },
  {
    id: "g-7",
    title: "Boarding the boat at Taribagilu private jetty",
    category: "experiences",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    caption: "Easy, relaxed boarding without commercial ticket counters.",
    featured: false,
  },
  {
    id: "g-8",
    title: "White-bellied Sea Eagle resting by the river",
    category: "nature",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    caption: "Honnavar's backwaters are a natural paradise for bird watchers.",
    featured: false,
  },
  {
    id: "g-9",
    title: "Clean, comfortable family homestay room",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    caption: "Simple, honest accommodation with fresh linens and natural air.",
    featured: false,
  },
  {
    id: "g-10",
    title: "Sweet tender coconut harvest from island palms",
    category: "food",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1200&q=80",
    caption: "Harvested fresh from our trees and cut open right in front of you.",
    featured: false,
  },
  {
    id: "g-11",
    title: "Island courtyard under shade of palms",
    category: "homestay",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    caption: "A peaceful place to read, sip tea, or listen to kingfishers.",
    featured: false,
  },
  {
    id: "g-12",
    title: "Drifting past the island mangrove roots",
    category: "boating",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    caption: "Witnessing the untouched roots that protect our river ecosystem.",
    featured: false,
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    guestName: "Nagaraj & Deepa Bhat",
    location: "Bengaluru, Karnataka",
    travelType: "Family Trip (2 nights)",
    rating: 5,
    date: "October 2026",
    quote:
      "Vayuputra is a real homestay in the truest sense! No fancy resort nonsense—just clean, airy rooms, delicious home-cooked neer dosa, and Ganesh Gouda's incredible hospitality. He took us on a 6:30 AM sunrise boat ride through the Mavinkurva mangroves and lotus spots. Unforgettable!",
    highlight: "Real village homestay & peaceful sunrise boating",
  },
  {
    id: "rev-2",
    guestName: "Prashanth Hegde",
    location: "Hubballi, Karnataka",
    travelType: "Nature & Birding Trip",
    rating: 5,
    date: "September 2026",
    quote:
      "I was looking for a peaceful stay near Honnavar away from tourist crowds. Staying right on Mavinkurva island was pure magic. Ganesh knows every canal and sandbank of the Sharavati river. We spotted kingfishers, egrets, and sea eagles. The boat was clean, comfortable, and very safe.",
    highlight: "Local boatman knowledge & rich birdlife",
  },
  {
    id: "rev-3",
    guestName: "Kavya & Anish Nair",
    location: "Kochi / Mumbai",
    travelType: "Couples Backwater Holiday",
    rating: 5,
    date: "August 2026",
    quote:
      "If you want 5-star marble luxury, go elsewhere. But if you want soul, quiet river breezes, authentic Karavali food, and private boat rides without queues, Vayuputra is unmatched. Sitting on the veranda with fresh tender coconut watching the sunset was the highlight of our vacation.",
    highlight: "Honest rustic beauty & authentic food",
  },
  {
    id: "rev-4",
    guestName: "Santosh Naik & Friends",
    location: "Goa",
    travelType: "Weekend Getaway",
    rating: 5,
    date: "July 2026",
    quote:
      "We took the Sharavati long bay island tour with Ganesh. The boat is in top condition and life jackets were provided for all of us. The island hopping and sunset views from the water were mesmerizing. Super easy to coordinate directly on WhatsApp with Ganesh.",
    highlight: "Long bay island cruise & direct WhatsApp booking",
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: "sharavathi-backwaters",
    name: "Sharavathi River Backwaters & Islands",
    distance: "0 km",
    driveTime: "Direct at doorstep",
    description: "Pristine tidal canals, lush mangrove waterways, and calm river islands ideal for boating and birdwatching.",
    type: "Nature & Water",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kasarkod-beach",
    name: "Kasarkod Blue Flag Eco Beach",
    distance: "5 km",
    driveTime: "12 mins drive",
    description: "Certified eco-friendly Blue Flag beach with golden sand, casuarina pine park, children play area, and clean boardwalk.",
    type: "Pristine Eco Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "apsarakonda-falls",
    name: "Apsarakonda Waterfalls & Sunset Hill",
    distance: "6.5 km",
    driveTime: "15 mins drive",
    description: "Legendary 'Pond of the Angels' sweet-water waterfall flowing into a natural pond, plus stunning sea-view hill park.",
    type: "Waterfall & Panorama",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mirjan-fort",
    name: "Historic Mirjan Fort",
    distance: "14 km",
    driveTime: "20 mins drive",
    description: "Historic 16th-century laterite stone citadel enveloped in lush green moss, ancient secret pathways, and watchtowers.",
    type: "Heritage Site",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sharavathi-bridge",
    name: "Sharavathi River Suspension Bridge",
    distance: "7 km",
    driveTime: "14 mins drive",
    description: "Spectacular pedestrian suspension footbridge offering panoramic views across the wide Sharavati river estuary.",
    type: "Scenic Viewpoint",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "idagunji-temple",
    name: "Idagunji Mahaganapathi Temple",
    distance: "15 km",
    driveTime: "22 mins drive",
    description: "Famous ancient temple dedicated to Lord Ganesha, revered by pilgrims across South India for its spiritual tranquility.",
    type: "Sacred Temple",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
  },
];

export const TRAVEL_DIRECTIONS = [
  {
    mode: "By Train (Konkan Railway)",
    detail: "Honnavar (HNA) is a key railway station on the Konkan Railway network with direct trains from Mumbai, Goa, Bengaluru, and Mangaluru. Vayuputra Boating & Homestay is located just 5.5 km (approx. 12 minutes) from Honnavar station. Auto-rickshaw pick-up from the station can be easily arranged by calling Ganesh Gouda.",
  },
  {
    mode: "By Road from Bengaluru",
    detail: "Approx. 440 km via Tumakuru -> Shivamogga -> Sagara -> Jog Falls -> Honnavar (NH 69 / NH 206). Enjoy the scenic drive through Western Ghats forests and Jog Falls on your way.",
  },
  {
    mode: "By Road from Goa / Mangaluru",
    detail: "Direct 4-lane highway drive along Coastal National Highway NH 66. From Panaji/South Goa: ~150-160 km (3.5 hrs); from Mangaluru: ~170 km (3.5 hrs).",
  },
  {
    mode: "By Air",
    detail: "Nearest airports: Goa Manohar International (Mopa) or Dabolim (~160 km, 3.5 hrs drive) or Mangalore International Airport (IXE, ~170 km, 3.5 hrs drive).",
  },
];
