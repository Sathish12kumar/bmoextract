export const NavBardt = [
  { title: "Home", path: "/#home" },
  { title: "Features", path: "/#feature" },
  { title: "How It Works", path: "/#workflow" },
  { title: "Use Cases", path: "/#use-cases" },
  { title: "Reviews", path: "/#reviews" },
  { title: "FAQ", path: "/#faq" },
];

export const StatsDt = [
  { value: "30+", label: "Pages Auto-Scraped", sub: "Deep multi-page crawler" },
  { value: "9", label: "Core Data Points", sub: "Name, phone, address, site, etc." },
  { value: "100%", label: "Excel Ready", sub: "Instant UTF-8 .csv / .xlsx export" },
  { value: "⚡ 6x", label: "Parallel Enrichment", sub: "Live contact auto-fill workers" },
];

export const PartnerCompanies = [
  { name: "NEXORA", icon: "fa-solid fa-cube" },
  { name: "VERTEX", icon: "fa-solid fa-bolt" },
  { name: "CLOUDLY", icon: "fa-solid fa-cloud" },
  { name: "DATANEX", icon: "fa-solid fa-database" },
  { name: "ORBITAL", icon: "fa-solid fa-circle-nodes" },
  { name: "FLOWBASE", icon: "fa-solid fa-layer-group" },
  { name: "PIXELFORGE", icon: "fa-solid fa-shapes" },
  { name: "TECHNOVA", icon: "fa-solid fa-microchip" },
];

export const FeatureDt = [
  {
    id: "search",
    icon: "fa-magnifying-glass",
    tag: "Multi-Page Crawler",
    title: "Deep Google & Maps Scraping",
    description:
      "Search any business category and city. BMO Extract automatically crawls up to 30 continuous Google Search and Maps result pages without manual clicking.",
  },
  {
    id: "details",
    icon: "fa-database",
    tag: "9 Core Data Points",
    title: "Complete Verified Profiles",
    description:
      "Captures S.No, Company Name, Category, Verified Phone, Complete Address, Star Rating, Review Count, Operational Status (Open / Closed / 24h), and Website links.",
  },
  {
    id: "export",
    icon: "fa-file-excel",
    tag: "Instant Export",
    title: "1-Click Microsoft Excel Export",
    description:
      "Download clean spreadsheets with UTF-8 BOM encoding formatted perfectly for Microsoft Excel (.xlsx/.csv), ready for instant CRM import into HubSpot and Salesforce.",
  },
  {
    id: "time",
    icon: "fa-bolt",
    tag: "Live Auto-Enrichment",
    title: "Auto-Enrich Missing Contacts",
    description:
      "Background parallel enrichment workers visit detailed Google Maps listings in real time to automatically discover missing direct phone numbers, websites, and exact street addresses.",
  },
  {
    id: "dedupe",
    icon: "fa-filter-circle-xmark",
    tag: "Clean Architecture",
    title: "Smart Deduplication & Sanitization",
    description:
      "Built-in smart filters automatically skip repeated business names across pages, strip tracking parameters from URLs, normalize phone numbers, and ensure pristine data quality.",
  },
  {
    id: "scale",
    icon: "fa-puzzle-piece",
    tag: "Extension Powered",
    title: "BMO Chrome Extension",
    description:
      "Powered by a lightweight browser extension that bypasses CORS restrictions and proxy blocks, extracting live search data directly in your browser without proxy bills.",
  },
];

export const interactiveIndustries = [
  {
    id: "tech",
    name: "Software & Tech Companies",
    location: "Coimbatore, Tamil Nadu",
    icon: "fa-laptop-code",
    count: "126 results verified",
    places: [
      {
        name: "Kovai Tech Solutions",
        category: "Software Development",
        phone: "+91 98765 43210",
        website: "kovaitech.io",
        rating: 4.8,
        reviews: 312,
        address: "123 Main Street, Peelamedu, Coimbatore, TN 641004",
        status: "Open",
      },
      {
        name: "Apex Cloud Innovations",
        category: "IT Services & Consulting",
        phone: "+91 98432 10987",
        website: "apexcloud.in",
        rating: 4.7,
        reviews: 189,
        address: "456 Avinashi Road, Civil Aerodrome Post, Coimbatore, TN 641014",
        status: "Open",
      },
      {
        name: "CyberPark Digital Labs",
        category: "Enterprise Web & SaaS",
        phone: "+91 97890 12345",
        website: "cyberparklabs.com",
        rating: 4.9,
        reviews: 245,
        address: "789 Tidel Park Campus, Coimbatore, TN 641035",
        status: "Open",
      },
    ],
  },
  {
    id: "restaurants",
    name: "Cafes & Dining",
    location: "Chennai, Tamil Nadu",
    icon: "fa-utensils",
    count: "380 results found",
    places: [
      {
        name: "Madras Heritage Roast",
        category: "Artisan Coffee & Bakery",
        phone: "+91 94440 12345",
        website: "madrasroast.in",
        rating: 4.9,
        reviews: 420,
        address: "82 Khader Nawaz Khan Road, Nungambakkam, Chennai, TN 600006",
        status: "Open",
      },
      {
        name: "The Coromandel Hearth",
        category: "South Indian Fine Dining",
        phone: "+91 98410 67890",
        website: "coromandelhearth.com",
        rating: 4.8,
        reviews: 580,
        address: "14 TTK Road, Alwarpet, Chennai, TN 600018",
        status: "Open",
      },
      {
        name: "Bayleaf Coastal Kitchen",
        category: "Seafood Bistro",
        phone: "+91 98840 98765",
        website: "bayleafchennai.in",
        rating: 4.7,
        reviews: 310,
        address: "28 ECR Road, Thiruvanmiyur, Chennai, TN 600041",
        status: "Open",
      },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    location: "Bangalore, Karnataka",
    icon: "fa-building",
    count: "295 places found",
    places: [
      {
        name: "Zenith Urban Properties",
        category: "Commercial & Luxury Realty",
        phone: "+91 80 4123 5678",
        website: "zenithurban.com",
        rating: 4.9,
        reviews: 145,
        address: "100 Indiranagar 100ft Road, Bangalore, KA 560038",
        status: "Open",
      },
      {
        name: "Horizon Coastal Estates",
        category: "Residential Advisory",
        phone: "+91 80 2553 9100",
        website: "horizonestates.in",
        rating: 4.8,
        reviews: 210,
        address: "24 Outer Ring Road, Bellandur, Bangalore, KA 560103",
        status: "Open",
      },
      {
        name: "Capital Matrix Advisors",
        category: "Property Management & Leasing",
        phone: "+91 80 6789 0123",
        website: "capitalmatrix.in",
        rating: 4.7,
        reviews: 88,
        address: "55 Whitefield Main Road, Bangalore, KA 560066",
        status: "Open",
      },
    ],
  },
  {
    id: "health",
    name: "Dental & Healthcare Clinics",
    location: "Hyderabad, Telangana",
    icon: "fa-stethoscope",
    count: "340 places found",
    places: [
      {
        name: "Apollo Care Multi-Speciality",
        category: "General Medicine & Diagnostics",
        phone: "+91 40 2360 7777",
        website: "apollocaredoctors.com",
        rating: 4.9,
        reviews: 512,
        address: "Jubilee Hills Road No. 36, Hyderabad, TS 500033",
        status: "Open 24 hours",
      },
      {
        name: "Pearl Glow Dental Studio",
        category: "Cosmetic & Orthodontics",
        phone: "+91 40 4455 6677",
        website: "pearlglowdental.in",
        rating: 4.8,
        reviews: 320,
        address: "Plot 42 Gachibowli Main Road, Hyderabad, TS 500032",
        status: "Open",
      },
      {
        name: "Matrix Advanced Eye Care",
        category: "Ophthalmology Specialists",
        phone: "+91 40 8899 0011",
        website: "matrixeyecare.in",
        rating: 5.0,
        reviews: 198,
        address: "Banjara Hills Road No. 2, Hyderabad, TS 500034",
        status: "Open",
      },
    ],
  },
];

export const stepsdt = [
  {
    number: "01",
    phase: "Phase 01",
    tag: "Browser Setup",
    status: "Connected",
    chip: "Chrome v1.3+ • Zero Proxies",
    chipIcon: "fa-brands fa-chrome",
    icon: "fa-puzzle-piece",
    title: "Install BMO Extension",
    description: "Add the lightweight BMO Extract Chrome Extension in 10 seconds to scrape directly inside your browser without proxies.",
  },
  {
    number: "02",
    phase: "Phase 02",
    tag: "Target Query",
    status: "Active Input",
    chip: "e.g. Coimbatore Software",
    chipIcon: "fa-solid fa-magnifying-glass",
    icon: "fa-magnifying-glass",
    title: "Enter Search Query",
    description: "Type any category and city—such as 'software companies in coimbatore' or 'clinics in bangalore'—directly into the search bar.",
  },
  {
    number: "03",
    phase: "Phase 03",
    tag: "Live Extraction",
    status: "⚡ 6x Workers",
    chip: "30 Pages • Maps Auto-Fill",
    chipIcon: "fa-solid fa-bolt",
    icon: "fa-bolt",
    title: "Auto-Scrape & Enrich",
    description: "BMO Extract automatically crawls up to 30 pages while live background workers enrich phone numbers, websites, and addresses from Google Maps.",
  },
  {
    number: "04",
    phase: "Phase 04",
    tag: "Instant Export",
    status: "CRM Ready",
    chip: "UTF-8 BOM .csv / .xlsx",
    chipIcon: "fa-solid fa-file-excel",
    icon: "fa-file-excel",
    title: "1-Click Excel Export",
    description: "Download a clean, deduplicated spreadsheet with all 9 core data points formatted with UTF-8 BOM encoding ready for CRM import.",
  },
];

export const useCasesdt = [
  {
    number: "01",
    title: "B2B Lead Generation & Outreach",
    description:
      "Target high-value local businesses in specific cities. Extract verified phone numbers, official websites, and physical addresses to build hyper-targeted cold calling and email outreach lists.",
    icon: "fa-bullseye",
    tag: "For Sales Teams & SDRs",
  },
  {
    number: "02",
    title: "Agency Client Acquisition & Audit",
    description:
      "Identify local businesses with missing websites, low Google star ratings, or missing phone listings who urgently need your agency's web design, SEO, Google Ads, or reputation management services.",
    icon: "fa-chart-line",
    tag: "For Marketing Agencies",
  },
  {
    number: "03",
    title: "Market & Competitor Research",
    description:
      "Analyze market saturation, competitor density, average ratings, and opening hours across neighborhoods before launching a new business location or branch.",
    icon: "fa-chart-pie",
    tag: "For Founders & Analysts",
  },
  {
    number: "04",
    title: "Local Directory & Database Builders",
    description:
      "Populate city business guides, niche vendor directories, healthcare portals, or commercial real estate catalogs with hundreds of verified place profiles without tedious manual data entry.",
    icon: "fa-database",
    tag: "For Directory Builders",
  },
];

export const faqsdt = [
  {
    question: "What is BMO Extract and how does it work?",
    answer:
      "BMO Extract is a high-speed business data extraction platform built by BMO Software. Paired with our lightweight Chrome extension, it turns hours of manual Google Search and Google Maps research into a 30-second automated workflow. Simply type any search query (e.g. 'software companies in coimbatore'), auto-crawl up to 30 continuous pages, live-enrich verified phone numbers and websites, and export structured spreadsheets directly to Excel.",
  },
  {
    question: "What specific 9 core data points does BMO Extract collect?",
    answer:
      "Every extraction captures: (1) S.No, (2) Company Name, (3) Category / Industry, (4) Complete Street Address, (5) Verified Phone Number, (6) Star Rating (e.g. 4.8), (7) Total Reviews Count, (8) Operational Status (Open, Closed, Open 24 Hours), and (9) Clean Website URL plus direct Google Maps direction link.",
  },
  {
    question: "Why does BMO Extract use a Chrome Extension?",
    answer:
      "The BMO Extract Chrome Extension (v1.3+) runs search queries directly from your local browser session. This eliminates the need for expensive residential proxies, prevents IP blocks, and ensures you get 100% authentic, real-time Google search and Maps results without paying server proxy bills.",
  },
  {
    question: "How many pages of results can I scrape per query?",
    answer:
      "BMO Extract features deep multi-page auto-pagination that traverses up to 30 continuous Google Search and Maps result pages per query. You can harvest hundreds of verified company records in a single automated session without clicking 'Next' manually.",
  },
  {
    question: "What is Live Auto-Enrichment and how does it discover phone numbers?",
    answer:
      "While initial search snippets often lack direct phone numbers or websites, our background parallel enrichment workers automatically visit each business's detailed Google Maps listing in real time. They extract verified phone numbers, complete addresses, and official websites, filling in missing fields automatically.",
  },
  {
    question: "Can I export directly to Microsoft Excel with UTF-8 support?",
    answer:
      "Yes. Click 'Export to Excel' to instantly download your file named with your query and count (e.g. software_companies_in_coimbatore_126.csv). The export is encoded with UTF-8 BOM (Byte Order Mark), guaranteeing proper formatting in Microsoft Excel, Apple Numbers, Google Sheets, or CRM platforms without character corruption.",
  },
  {
    question: "How does BMO Extract handle Google CAPTCHA verification?",
    answer:
      "If Google presents an unusual traffic challenge, BMO Extract automatically pauses and presents a built-in CAPTCHA solve-and-retry prompt. You simply complete the verification in your browser, and extraction resumes seamlessly from where it left off without losing any previously scraped records.",
  },
  {
    question: "Is BMO Extract compatible with CRMs like HubSpot and Salesforce?",
    answer:
      "Yes. The exported spreadsheets contain clean, standardized headers: Company Name, Category, Phone Number, Address, Website, Rating, and Reviews. You can upload the CSV directly into HubSpot, Salesforce, Zoho CRM, Apollo, or cold email tools with zero column cleanup.",
  },
];

export const reviews = [
  {
    name: "Alex Thorne",
    role: "Lead Generation Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=1200&fit=crop&crop=faces&auto=format&q=95",
    rating: 5,
    review:
      "BMO Extract cut our prospecting time by 90%. Scraping 120+ software companies in Coimbatore with verified phone numbers took literally 40 seconds. The data is exceptionally clean with zero duplicate rows.",
    tag: "Saved 15+ hrs/week",
  },
  {
    name: "Marcus Vance",
    role: "Agency Founder & Growth Lead",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1200&fit=crop&crop=faces&auto=format&q=80",
    rating: 5,
    review:
      "The direct Excel export with all 9 fields is a game changer. We filter local businesses lacking modern websites or high review counts, export with 1 click, and launch cold outreach immediately. Unmatched ROI.",
    tag: "3.4x Pipeline Increase",
  },
  {
    name: "Elena Rostova",
    role: "Operations & Market Analyst",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1200&fit=crop&crop=faces&auto=format&q=80",
    rating: 5,
    review:
      "The auto-enrichment feature is incredible. It automatically visits Google Maps in the background to fill in missing contact numbers and addresses. We mapped thousands of locations across Tamil Nadu and Karnataka effortlessly.",
    tag: "4,000+ Places Extracted",
  },
  {
    name: "David Kim",
    role: "B2B Sales Strategist",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=1200&fit=crop&crop=faces&auto=format&q=80",
    rating: 5,
    review:
      "Clean UI, zero clutter, and blazing speed. We don't need expensive residential proxy services or python scrapers anymore. The Chrome extension integration just works out of the box.",
    tag: "Top Recommended Tool",
  },
];