import {
  Smartphone, Image, FileText, Briefcase, Star, Sparkles, Mail,
  ShoppingBag, Monitor, GraduationCap, Palette, Layers, Music,
  Heart, Gift, Globe, Camera, Brush, Zap
} from "lucide-react";

export const templatesMenu = [
  {
    heading: "Popular",
    items: [
      { label: "Social Media", icon: <Smartphone size={14} /> },
      { label: "Poster", icon: <Image size={14} /> },
      { label: "Flyer", icon: <FileText size={14} /> },
      { label: "Business Card", icon: <Briefcase size={14} /> },
    ],
  },
  {
    heading: "Occasions",
    items: [
      { label: "Eid Special", icon: <Star size={14} />, badge: "Hot" },
      { label: "Bangla New Year", icon: <Sparkles size={14} /> },
      { label: "Birthday", icon: <Star size={14} /> },
      { label: "Wedding", icon: <Mail size={14} /> },
    ],
  },
  {
    heading: "Business",
    items: [
      { label: "Restaurant Menu", icon: <ShoppingBag size={14} /> },
      { label: "Real Estate", icon: <Monitor size={14} /> },
      { label: "Education", icon: <GraduationCap size={14} /> },
      { label: "Fashion", icon: <Palette size={14} /> },
    ],
  },
];

export const categoriesMenu = [
  { label: "Templates", icon: <Layers size={14} />, count: "4,200+" },
  { label: "Posters", icon: <Image size={14} />, count: "2,800+" },
  { label: "Social Media", icon: <Smartphone size={14} />, count: "3,100+" },
  { label: "Business Cards", icon: <Briefcase size={14} />, count: "980+" },
  { label: "Invitations", icon: <Mail size={14} />, count: "750+" },
  { label: "Flyers", icon: <FileText size={14} />, count: "1,200+" },
  { label: "Banners", icon: <Monitor size={14} />, count: "640+" },
  { label: "Music & Events", icon: <Music size={14} />, count: "430+" },
];

export const aiImagesMenu = [
  { label: "Featured", badge: "New" },
  { label: "Landscapes" },
  { label: "Portraits" },
  { label: "Abstract" },
  { label: "Architecture" },
];

export const heroCards = [
  { bg: ["#0d2137", "#1a3a5c"], label: "ঈদ মোবারক", sub: "Eid Special Pack", emoji: "🌙" },
  { bg: ["#7b0a1a", "#c8102e"], label: "শুভ নববর্ষ ১৪৩১", sub: "Bangla New Year", emoji: "🎆" },
  { bg: ["#b83200", "#ff6b35"], label: "Burger Feast", sub: "Food Menu Design", emoji: "🍔" },
  { bg: ["#1a1a2e", "#2d1b69"], label: "FOR SALE $1,000,000", sub: "Real Estate Flyer", emoji: "🏠" },
  { bg: ["#4a0828", "#8b1a4a"], label: "FASHION SHOW 2024", sub: "Event Poster", emoji: "👗" },
];

export const allTemplates = [
  { id: "1",  title: "Animated Ramadan Post",   cat: "Eid",        dl: "1.2K", likes: "234", bg: ["#0a2e1a","#1a4a2a"], text: "رمضان كريم",   tags: ["eid","social"] },
  { id: "2",  title: "শুভ নববর্ষ ব্যানার",       cat: "New Year",   dl: "980",  likes: "187", bg: ["#1a0a2e","#2d1b69"], text: "শুভ নববর্ষ",   tags: ["newyear","bangla"] },
  { id: "3",  title: "নববর্ষ কার্ড ডিজাইন",     cat: "Festival",   dl: "870",  likes: "163", bg: ["#2e0a0a","#8b1a1a"], text: "নববর্ষ ১৪৩১", tags: ["festival","card"] },
  { id: "4",  title: "Eid Mubarak Poster",       cat: "Eid",        dl: "756",  likes: "145", bg: ["#0a2e28","#1a4a3a"], text: "عيد مبارك",   tags: ["eid","poster"] },
  { id: "5",  title: "Delicious Food Menu",       cat: "Food",       dl: "634",  likes: "121", bg: ["#2e1a0a","#8b4e1a"], text: "FOOD MENU",   tags: ["food","menu"] },
  { id: "6",  title: "Fashion Show Flyer",        cat: "Fashion",    dl: "521",  likes: "98",  bg: ["#0a0a2e","#1a1a5a"], text: "FASHION",     tags: ["fashion","flyer"] },
  { id: "7",  title: "Modern House Sale",         cat: "Real Estate",dl: "489",  likes: "92",  bg: ["#0a2e0a","#1a4a1a"], text: "FOR SALE",    tags: ["realestate","poster"] },
  { id: "8",  title: "Birthday Invitation Card",  cat: "Birthday",   dl: "445",  likes: "88",  bg: ["#2e0a2e","#6b1a6b"], text: "🎂 Birthday", tags: ["birthday","invitation"] },
  { id: "9",  title: "Wedding Invitation",        cat: "Wedding",    dl: "412",  likes: "81",  bg: ["#2e2010","#8b6030"], text: "Wedding ♥",   tags: ["wedding","invitation"] },
  { id: "10", title: "Business Visiting Card",    cat: "Business",   dl: "398",  likes: "76",  bg: ["#10202e","#204060"], text: "BUSINESS",    tags: ["business","card"] },
  { id: "11", title: "Qurbani Eid Poster",        cat: "Eid",        dl: "375",  likes: "72",  bg: ["#1a2e10","#3a6020"], text: "قربانی عید",  tags: ["eid","poster"] },
  { id: "12", title: "Instagram Story Template",  cat: "Social",     dl: "356",  likes: "68",  bg: ["#2e1020","#8b3060"], text: "STORY",       tags: ["social","instagram"] },
  { id: "13", title: "YouTube Thumbnail",         cat: "Social",     dl: "334",  likes: "64",  bg: ["#2e1a00","#cc4400"], text: "YOUTUBE",     tags: ["social","youtube"] },
  { id: "14", title: "পহেলা বৈশাখ ব্যানার",      cat: "Festival",   dl: "312",  likes: "60",  bg: ["#2e1000","#9b4000"], text: "পহেলা বৈশাখ",tags: ["festival","bangla"] },
  { id: "15", title: "Gym Fitness Poster",        cat: "Sports",     dl: "290",  likes: "55",  bg: ["#0a0a0a","#1a1a1a"], text: "FITNESS",     tags: ["sports","fitness"] },
  { id: "16", title: "Education Admission Flyer", cat: "Education",  dl: "278",  likes: "52",  bg: ["#102030","#204060"], text: "ADMIT NOW",   tags: ["education","flyer"] },
  { id: "17", title: "Music Concert Poster",      cat: "Music",      dl: "265",  likes: "49",  bg: ["#1a0a2e","#4a1a8b"], text: "CONCERT",     tags: ["music","poster"] },
  { id: "18", title: "Travel Package Flyer",      cat: "Travel",     dl: "251",  likes: "46",  bg: ["#001a2e","#0040a0"], text: "TRAVEL",      tags: ["travel","flyer"] },
];

export const templateCategories = [
  "All", "Eid", "New Year", "Festival", "Food", "Fashion",
  "Real Estate", "Birthday", "Wedding", "Business", "Social", "Education", "Music", "Travel", "Sports"
];

export const allCategories = [
  { name: "Templates",     color: "#ff6b6b", bg: "#fff0f0", emoji: "📐", count: "4,200+", desc: "All purpose design templates" },
  { name: "Poster",        color: "#6c5ce7", bg: "#f0eeff", emoji: "🖼️", count: "2,800+", desc: "Eye-catching poster designs" },
  { name: "Social Media",  color: "#00b894", bg: "#e6fff9", emoji: "📱", count: "3,100+", desc: "Posts, stories & covers" },
  { name: "Ethnic Dress",  color: "#e17055", bg: "#fff3f0", emoji: "👘", count: "890+",   desc: "Traditional fashion designs" },
  { name: "Facebook",      color: "#1877f2", bg: "#e8f0fe", emoji: "👍", count: "1,200+", desc: "Facebook covers & posts" },
  { name: "Instagram",     color: "#e1306c", bg: "#fce4ec", emoji: "📸", count: "2,400+", desc: "Reels, stories & posts" },
  { name: "Creative Card", color: "#00b894", bg: "#e6fff9", emoji: "🎨", count: "780+",   desc: "Unique card designs" },
  { name: "Business Card", color: "#fd9644", bg: "#fff3e0", emoji: "💼", count: "980+",   desc: "Professional business cards" },
  { name: "Invitation",    color: "#a29bfe", bg: "#f3f0ff", emoji: "✉️", count: "750+",   desc: "Event & party invitations" },
  { name: "Eid Special",   color: "#00cec9", bg: "#e0fffe", emoji: "🌙", count: "640+",   desc: "Eid Mubarak designs" },
  { name: "Birthday",      color: "#fd79a8", bg: "#fff0f6", emoji: "🎂", count: "520+",   desc: "Birthday cards & banners" },
  { name: "Wedding",       color: "#b8860b", bg: "#fffbe6", emoji: "💍", count: "430+",   desc: "Wedding invitation designs" },
  { name: "Education",     color: "#0984e3", bg: "#e6f4ff", emoji: "🎓", count: "390+",   desc: "School & university flyers" },
  { name: "Food & Menu",   color: "#e17055", bg: "#fff3f0", emoji: "🍔", count: "460+",   desc: "Restaurant & café menus" },
  { name: "Real Estate",   color: "#2d3436", bg: "#f0f1f3", emoji: "🏠", count: "310+",   desc: "Property sale banners" },
  { name: "Sports",        color: "#d63031", bg: "#fff0f0", emoji: "⚽", count: "280+",   desc: "Sports event designs" },
  { name: "Music",         color: "#6c5ce7", bg: "#f0eeff", emoji: "🎵", count: "240+",   desc: "Concert & album covers" },
  { name: "Travel",        color: "#0984e3", bg: "#e6f4ff", emoji: "✈️", count: "210+",   desc: "Travel & tourism flyers" },
];

export const aiImages = [
  { id: "1",  title: "Mountain Sunrise",         cat: "Landscape",    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
  { id: "2",  title: "Bengal Tiger Portrait",    cat: "Wildlife",     img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop" },
  { id: "3",  title: "Dhaka City Lights",        cat: "Architecture", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop" },
  { id: "4",  title: "Tropical Beach Sunset",    cat: "Landscape",    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: "5",  title: "Abstract Purple Flow",     cat: "Abstract",     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
  { id: "6",  title: "Mystic Forest Path",       cat: "Nature",       img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop" },
  { id: "7",  title: "Galaxy Nebula",            cat: "Space",        img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=400&h=300&fit=crop" },
  { id: "8",  title: "Modern Architecture",      cat: "Architecture", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop" },
  { id: "9",  title: "Cherry Blossom Garden",    cat: "Nature",       img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop" },
  { id: "10", title: "Desert Dunes at Dusk",     cat: "Landscape",    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop" },
  { id: "11", title: "Futuristic City",          cat: "Abstract",     img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop" },
  { id: "12", title: "Lotus Pond",               cat: "Nature",       img: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=300&fit=crop" },
  { id: "13", title: "Neon City Rain",           cat: "Architecture", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop" },
  { id: "14", title: "Ocean Wave Crash",         cat: "Nature",       img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=300&fit=crop" },
  { id: "15", title: "Autumn Forest",            cat: "Nature",       img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { id: "16", title: "Geometric Pattern",        cat: "Abstract",     img: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=400&h=300&fit=crop" },
];

export const aiCategories = ["All", "Landscape", "Nature", "Wildlife", "Abstract", "Architecture", "Space"];

export const blogPosts = [
  {
    id: "10-tips-social-media",
    title: "10 Tips for Creating Stunning Social Media Posts",
    cat: "Design Tips", date: "Jun 10, 2025", readTime: "5 min",
    excerpt: "Learn how to create scroll-stopping social media content using free Bangla templates from AmarCanvas.",
    img: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=600&h=360&fit=crop",
    author: "Design Master", authorImg: "https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=40&h=40&fit=crop",
    tags: ["social media", "design tips", "tutorial"],
  },
  {
    id: "best-free-tools-2025",
    title: "Best Free Tools for Graphic Designers in 2025",
    cat: "Resources", date: "Jun 8, 2025", readTime: "7 min",
    excerpt: "A curated list of the best free design tools every Bangladeshi graphic designer should know about.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=360&fit=crop",
    author: "Creative Art BD", authorImg: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=40&h=40&fit=crop",
    tags: ["tools", "resources", "free"],
  },
  {
    id: "bangla-design-trends",
    title: "Bangla Design Trends: Ideas & Inspiration",
    cat: "Trends", date: "Jun 5, 2025", readTime: "6 min",
    excerpt: "Explore the latest Bangla design trends dominating social media and print in 2025.",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=360&fit=crop",
    author: "Bangla Canvas", authorImg: "https://images.unsplash.com/photo-1539605480396-a61f99da1041?w=40&h=40&fit=crop",
    tags: ["trends", "inspiration", "bangla"],
  },
  {
    id: "professional-designer",
    title: "How to Be a Professional Designer on Canvas",
    cat: "Tutorial", date: "Jun 3, 2025", readTime: "8 min",
    excerpt: "Step-by-step guide to building a professional design portfolio using free Bangla templates.",
    img: "https://images.unsplash.com/photo-1643503640904-75c1a2093570?w=600&h=360&fit=crop",
    author: "Point Patcher", authorImg: "https://images.unsplash.com/photo-1759853899793-b2df1634d190?w=40&h=40&fit=crop",
    tags: ["career", "tutorial", "portfolio"],
  },
  {
    id: "eid-design-guide",
    title: "Complete Guide to Eid Design Templates",
    cat: "Guide", date: "May 28, 2025", readTime: "10 min",
    excerpt: "Everything you need to know about creating beautiful Eid Mubarak designs for social media and print.",
    img: "https://images.unsplash.com/photo-1555226377-94677d23e1f3?w=600&h=360&fit=crop",
    author: "Design Master", authorImg: "https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=40&h=40&fit=crop",
    tags: ["eid", "guide", "templates"],
  },
  {
    id: "color-theory-bangla",
    title: "Color Theory for Bangla Festival Designs",
    cat: "Design Tips", date: "May 20, 2025", readTime: "6 min",
    excerpt: "Master color combinations used in traditional Bangla festival poster designs.",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=360&fit=crop",
    author: "Creative Art BD", authorImg: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=40&h=40&fit=crop",
    tags: ["color", "design tips", "festival"],
  },
];

export const blogCategories = ["All", "Design Tips", "Resources", "Trends", "Tutorial", "Guide"];

export const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for personal projects",
    color: "#6c5ce7",
    features: [
      "500+ free templates",
      "Basic graphics library",
      "Standard image quality",
      "AmarCanvas watermark",
      "Community support",
      "5 downloads per day",
    ],
    missing: ["HD downloads", "No watermark", "Commercial use", "Priority support"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "per month",
    desc: "For freelancers & creators",
    color: "#6c5ce7",
    features: [
      "15,000+ premium templates",
      "Full graphics library",
      "HD & 4K downloads",
      "No watermark",
      "Commercial use license",
      "Unlimited downloads",
      "Priority support",
      "Early access to new templates",
    ],
    missing: [],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "₹499",
    period: "per month",
    desc: "For agencies & teams",
    color: "#2d3436",
    features: [
      "Everything in Pro",
      "Team collaboration (5 seats)",
      "Brand kit & custom fonts",
      "API access",
      "Custom template requests",
      "Dedicated account manager",
      "Invoice & billing management",
      "SLA guarantee",
    ],
    missing: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export const footerLinks = {
  Explore: ["Templates", "Graphics", "AI Images", "Fonts", "Colors"],
  Company: ["About Us", "Careers", "Blog", "Press", "Privacy Policy"],
  Support: ["Help Center", "Contact Us", "Community", "Affiliate", "Terms"],
};
