import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Search, ShieldCheck, Award, Users, FileText, CheckCircle2,
  ChevronLeft, ChevronRight, Star, ExternalLink, Send, MessageSquare, X, ArrowRight,
  Download, Leaf, Building2, Globe, Truck, ThumbsUp, Filter, Sparkles, Check, Share2
} from 'lucide-react';

// Product Catalog Data
const PRODUCTS_DATA = [
  {
    id: 1,
    category: "Bio-Insecticides & Larvicides",
    badge: "Best Seller",
    name: "Neemasthra Neem-Based Bio-Insecticide",
    image:"/images/WhatsApp Image 2026-10-24 at 6.03.25 PM.jpeg",
    desc: "100% natural cold-pressed neem extraction fortified with Azadirachtin 10000 PPM for effective whitefly & bollworm control.",
    items: ["Neemasthra 10000 PPM", "Blast Top Larvicide", "Bio-Terminater Spreads"],
    packaging: "250ml / 500ml / 1 Liter HDPE Bottle",
    dosage: "2-3 ml per Liter of water"
  },
  {
    id: 2,
    category: "Bio-Fertilizers & Soil Health",
    badge: "Eco Certified",
    name: "Rhizobium & Azotobacter Bio-Fertilizer",
    image: "/images/WhatsApp Image 2026-10-24 at 6.03.26 PM (2).jpeg",
    desc: "Nitrogen fixing bacterial consortium that restores degraded soil microflora and improves root nodulation in leguminous crops.",
    items: ["Rhizobium Liquid", "Trichoderma Harzianum", "VAM Mycorrhiza Powder"],
    packaging: "1 Kg Packet / 5 Liter Can",
    dosage: "5 Kg per Acre for Soil Application"
  },
  {
    id: 3,
    category: "Plant Growth Boosters",
    badge: "High Yield",
    name: "Power Plant Organic Growth Promoter",
    image: "images/WhatsApp Image 2026-10-24 at 6.03.26 PM.jpeg",
    desc: "Enriched with Humic Acid 98%, Fulvic Acid, and Seaweed Amino Extracts to double tillering & flower retention.",
    items: ["Power Plant Special", "Paddy Yield Booster", "Humic Shiny Flakes"],
    packaging: "500 ml / 1 Kg Container",
    dosage: "1.5 to 2 ml per Liter"
  },
  {
    id: 4,
    category: "Bio-Fungicides & Bactericides",
    badge: "Organic Safe",
    name: "Pseudomonas Fluorescens Bio-Fungicide",
    image: "images/WhatsApp Image 2026-10-24 at 6.03.28 PM (2).jpeg",
    desc: "Controls Sheath Blight, Blast disease, Root Rot, and Downy Mildew safely without synthetic chemical residues.",
    items: ["Pseudomonas Liquid", "Trichoderma Bio-Defender", "Bactericide Shield"],
    packaging: "1 Liter Bottle / 200 Litre Drum",
    dosage: "5 ml per Liter of water"
  },
  {
    id: 5,
    category: "Sticking & Wetting Agents",
    badge: "High Spreader",
    name: "Super Spread Silicon Sticker & Penetrator",
    image: "images/WhatsApp Image 2026-10-24 at 6.03.30 PM (1).jpeg",
    desc: "Non-ionic organosilicone super-spreader that enhances rainfastness and leaf absorption for all organic sprays.",
    items: ["Silicon Spreader 80%", "Bio-Sticker Liquid", "Activator Wetting Agent"],
    packaging: "100ml / 250ml / 500ml",
    dosage: "0.5 ml per Liter"
  },
  {
    id: 6,
    category: "Special Paddy & Cereal Crop Care",
    badge: "Farmer Choice",
    name: "Organic Paddy Special Grain Enricher",
    image: "images/WhatsApp Image 2026-10-24 at 6.03.35 PM (1).jpeg",
    desc: "Formulated specifically for Basmati and Non-Basmati rice to increase grain weight, luster, and prevent lodging.",
    items: ["Paddy Special Foliar", "Cereal Grain Granules", "Zyme Crop Enhancer"],
    packaging: "10 Kg Bag / 1 Liter Pack",
    dosage: "10 Kg per Acre"
  }
];

// Banner Slider Slides
const HERO_SLIDES = [
  {
    title: "100% Herbal & Organic Formulations",
    subtitle: "Healthy Soil, Healthy Plants, Better Tomorrow",
    highlight: "Certified Bio-Pesticides & Bio-Fertilizers for Export Grade Farming",
    bg: "from-emerald-900 via-emerald-800 to-teal-900",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    product: "Neemasthra 10000 PPM"
  },
  {
    title: "Maximize Crop Yield Bio-Enrichment",
    subtitle: "Pioneer in Humic Acid & Seaweed Concentrates",
    highlight: "Proven 35% Higher Yield in Wheat, Paddy, Sugarcane & Vegetables",
    bg: "from-emerald-950 via-green-900 to-emerald-850",
    img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200",
    product: "Power Plant Growth Booster"
  },
  {
    title: "Eco-Friendly Pest & Disease Control",
    subtitle: "Zero Chemical Residue Solutions",
    highlight: "Government Approved Organic Inputs for Sustainable Agriculture",
    bg: "from-teal-950 via-emerald-900 to-green-950",
    img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200",
    product: "Trichoderma & Pseudomonas Shield"
  }
];

// User Reviews Data
const REVIEWS = [
  {
    name: "Rajesh Kumar Verma",
    location: "Meerut, Uttar Pradesh",
    rating: 5,
    date: "12 Oct 2026",
    comment: "Using Neemasthra & Power Plant on my 15-acre Basmati paddy fields. Outstanding results in tillering and complete control over yellow stem borer without using toxic pesticides!",
    tag: "Verified Farmer Buyer"
  },
  {
    name: "Gurpreet Singh Sandhu",
    location: "Ludhiana, Punjab",
    rating: 5,
    date: "04 Sep 2026",
    comment: "Bulk ordering Rhizobium and Super Spread sticker from R.K.A Organic for 3 seasons now. Excellent packaging, prompt supply chain and highly genuine products.",
    tag: "Agro Distributor"
  },
  {
    name: "Mahendra Patel",
    location: "Kheda, Gujarat",
    rating: 4.5,
    date: "28 Aug 2026",
    comment: "Best bio-fungicide results against root rot in cotton crops. The response time of their sales team is fast and technical support is top class.",
    tag: "Verified Crop Grower"
  }
];

export default function App() {
  // State variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ALL');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    productName: '',
    message: ''
  });

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Show Toast
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Open Inquiry Modal for specific product
  const handleOpenInquiry = (product = null) => {
    setSelectedProduct(product);
    setFormData(prev => ({
      ...prev,
      productName: product ? product.name : 'General Agro Inquiry',
      message: product ? `Hello, I am interested in getting a price quote and bulk details for ${product.name}. Please contact me.` : ''
    }));
    setInquiryModalOpen(true);
  };

  // Submit Inquiry Form
  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    if (!formData.mobile || formData.mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setInquiryModalOpen(false);
    triggerToast(`Thank you ${formData.name || 'Valued Partner'}! Your inquiry has been logged. Our specialist will call (+91 8958426666) shortly.`);
    setFormData({ name: '', mobile: '', city: '', productName: '', message: '' });
  };

  // Search filter matching
  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = activeTab === 'ALL' || prod.category.includes(activeTab);
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-700 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 border border-emerald-500 animate-bounce">
          <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
          <div>
            <p className="font-bold text-sm">Inquiry Submitted Successfully</p>
            <p className="text-xs text-emerald-100">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* 1. TOP UTILITY HEADER BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>India | Corporate Office: Uttar Pradesh</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1 text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Manufacturer & Exporter</span>
            </span>
            <span className="hidden lg:inline text-slate-400">GST Registration: 09AAACR7862Q1Z9</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+918958426666" className="flex items-center space-x-1 text-amber-400 font-bold hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>Toll Free Helpline: +91 8958426666</span>
            </a>
            <button 
              onClick={() => handleOpenInquiry()}
              className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold transition-all shadow-sm flex items-center space-x-1"
            >
              <Send className="w-3 h-3" />
              <span>Send Quick Inquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & BRAND LOGO BAR */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Emblem */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-white shadow-md border-2 border-emerald-200 overflow-hidden">
              <img 
                src="/images/WhatsApp Image 2026-10-24 at 6.03.37 PM (1).jpeg" 
                alt="R.K.A Organic India Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  R.K.A <span className="text-emerald-700">ORGANIC INDIA</span>
                </h1>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 py-0.5 rounded border border-amber-300">
                  PVT. LTD.
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide uppercase mt-0.5">
                Bio-Pesticides • Bio-Fertilizers • Plant Growth Boosters
              </p>
            </div>
          </div>

          {/* Live Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products, bio-insecticides, humic acid..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-inner"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-emerald-700 text-white p-1.5 rounded-full hover:bg-emerald-800 transition">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="hidden lg:flex items-center space-x-6 border-l border-slate-200 pl-6 text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <Award className="w-7 h-7 text-amber-600" />
              <div>
                <div className="font-bold text-slate-900">ISO 9001:2015</div>
                <div className="text-[10px]">Quality Certified</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-7 h-7 text-emerald-700" />
              <div>
                <div className="font-bold text-slate-900">100% In-House</div>
                <div className="text-[10px]">Manufacturing</div>
              </div>
            </div>
          </div>

        </div>

        {/* Primary Navigation Bar (Matching Reference Red / Dark Bar Style) */}
        <nav className="bg-red-850 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto whitespace-nowrap py-1">
            <div className="flex items-center space-x-1 text-sm font-semibold">
              <a href="#home" className="px-4 py-2 hover:bg-red-700/80 rounded transition flex items-center space-x-1 bg-red-950/40">
                <span>HOME</span>
              </a>
              <a href="#about" className="px-4 py-2 hover:bg-red-700/80 rounded transition">ABOUT US</a>
              <a href="#products" className="px-4 py-2 hover:bg-red-700/80 rounded transition">PRODUCTS CATALOG</a>
              <a href="#reviews" className="px-4 py-2 hover:bg-red-700/80 rounded transition">RATINGS & REVIEWS</a>
              <a href="#contact" className="px-4 py-2 hover:bg-red-700/80 rounded transition">CONTACT US</a>
            </div>
            <button 
              onClick={() => setCatalogModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1 rounded text-xs font-bold transition flex items-center space-x-1 my-1 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>BROCHURE</span>
            </button>
          </div>
        </nav>
      </header>

      {/* 3. HERO CAROUSEL SLIDER */}
      <section id="home" className="relative bg-slate-950 overflow-hidden text-white">
        <div className="relative h-[380px] sm:h-[450px] md:h-[480px] w-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-contain object-center brightness-[0.35]"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} opacity-80`} />
              
              <div className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 z-20">
                <div className="max-w-2xl space-y-3">
                  <span className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.subtitle}</span>
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base text-emerald-100 font-medium max-w-xl">
                    {slide.highlight}
                  </p>
                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleOpenInquiry({ name: slide.product })}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-lg text-sm transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center space-x-2"
                    >
                      <span>Inquire For {slide.product}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#products"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-lg text-sm font-bold backdrop-blur transition"
                    >
                      Explore All Products
                    </a>
                  </div>
                </div>

                {/* Right Hero Badge Box */}
                <div className="hidden md:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl max-w-xs text-center">
                  <div className="w-16 h-16 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xl shadow-lg">
                    100%
                  </div>
                  <h3 className="font-bold text-lg text-white">Organic Certified</h3>
                  <p className="text-xs text-slate-200 mt-1">Zero Chemical Residue • Non-Toxic Formula • Safe for Honeybees</p>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs font-semibold text-emerald-300">
                    Trusted by 50,000+ Indian Farmers
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur border border-white/20 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur border border-white/20 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. RED CORPORATE PROFILE & VERIFICATION BANNER (Exact Design Match to Reference) */}
      <section id="about" className="bg-gradient-to-br from-red-900 via-red-850 to-red-950 text-white py-10 px-4 sm:px-6 shadow-xl relative">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          
          <div className="inline-block bg-amber-400 text-slate-950 text-xs font-black uppercase px-4 py-1 rounded-full shadow-md">
            IndiaMART TrustSEAL & ISO Certified Manufacturer
          </div>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold max-w-5xl mx-auto leading-relaxed text-slate-100">
            Welcome to <span className="text-amber-300 font-extrabold">R.K.A ORGANIC INDIA PRIVATE LIMITED</span> – We have established ourselves as a premier manufacturer & exporter of Bio-Pesticides, Bio-Fertilizers, Plant Growth Boosters, Bio-Fungicides & Larvicides. Our target is top-tier quality at competitive wholesale prices.
          </h2>

          <div className="pt-2">
            <button 
              onClick={() => setCatalogModalOpen(true)}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 px-6 py-2 rounded font-bold text-sm transition"
            >
              + Read More About Us
            </button>
          </div>

          {/* Key Business Stats Grid (Matching 4-Column Layout in Reference Image) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-red-700/60 max-w-6xl mx-auto text-left">
            <div className="p-3 bg-red-950/40 rounded border border-red-800/60 flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-red-200">Nature of Business</div>
                <div className="text-sm font-bold text-white">Manufacturer & Exporter</div>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 rounded border border-red-800/60 flex items-center space-x-3">
              <Users className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-red-200">Total Employees</div>
                <div className="text-sm font-bold text-white">50 to 100 People</div>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 rounded border border-red-800/60 flex items-center space-x-3">
              <FileText className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-red-200">GST Registration</div>
                <div className="text-sm font-bold text-white">09AAACR7862Q1Z9</div>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 rounded border border-red-800/60 flex items-center space-x-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-red-200">Legal Status</div>
                <div className="text-sm font-bold text-white">Private Limited Firm</div>
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-sm text-red-100 font-medium">Get in touch with us for best distributor deals:</span>
            <button
              onClick={() => handleOpenInquiry()}
              className="bg-white text-red-900 hover:bg-amber-400 hover:text-slate-950 font-black px-6 py-2.5 rounded shadow-lg text-sm transition-all"
            >
              Contact Us Now
            </button>
          </div>

        </div>
      </section>

      {/* 5. CATEGORIZED PRODUCTS & SERVICES GRID (Matching reference 3-column / 6-card layout) */}
      <section id="products" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            Products & Services
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mt-2"></div>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
            High-potency organic agricultural inputs manufactured under strict quality standards.
          </p>

          {/* Category Quick Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['ALL', 'Bio-Insecticides', 'Bio-Fertilizers', 'Growth Boosters', 'Fungicides'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeTab === tab
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (Matching 3-Column Layout from Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden group"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-red-800 text-white text-[10px] font-black px-2.5 py-1 rounded shadow">
                  {product.badge}
                </span>
                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-medium px-2 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Bullet items list (matching screenshot) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {product.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-500">
                    <span className="font-semibold block">Pack Size:</span> {product.packaging}
                  </div>
                  <button
                    onClick={() => handleOpenInquiry(product)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded transition shadow flex items-center space-x-1 shrink-0"
                  >
                    <span>+ View All / Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Range Banner Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setCatalogModalOpen(true)}
            className="border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white font-bold px-8 py-3 rounded-md text-sm transition-all shadow-md inline-flex items-center space-x-2"
          >
            <span>View Complete Product Range</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. DUAL-COLUMN CONTACT & COMPANY INFO SECTION (Exact Match to Reference Split Screen) */}
      <section id="contact" className="bg-white py-12 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl rounded-xl overflow-hidden border border-slate-200">
          
          {/* Left Column: Corporate Office Info (Maroon / Red Theme matching Reference) */}
          <div className="bg-red-900 text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black border-b border-red-700 pb-3">
                R.K.A ORGANIC INDIA PRIVATE LIMITED
              </h3>

              <div className="mt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-950 rounded-lg text-amber-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-red-200 font-semibold tracking-wider">Contact Person</span>
                    <p className="font-bold text-base text-white">Managing Director / Sales Head</p>
                    <p className="text-xs text-red-200">Agro-Chemical Division</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-950 rounded-lg text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-red-200 font-semibold tracking-wider">Corporate Address</span>
                    <p className="font-bold text-sm text-white leading-relaxed">
                      R.K.A Organic India Pvt. Ltd.<br />
                      Industrial Development Area, Sector 5,<br />
                      Uttar Pradesh - 250002, India
                    </p>
                    <a href="#map" className="text-xs text-amber-300 hover:underline mt-1 inline-block">
                      Get Directions on Map →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-950 rounded-lg text-amber-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-red-200 font-semibold tracking-wider">24/7 Helpline Number</span>
                    <p className="font-extrabold text-lg text-amber-300">+91 8958426666</p>
                    <p className="text-xs text-red-200">WhatsApp Commercial Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Share Bar */}
            <div className="pt-6 border-t border-red-800 flex items-center justify-between text-xs">
              <span className="text-red-200 font-semibold">Share & Connect with Us:</span>
              <div className="flex space-x-3">
                <a href="#share" className="w-8 h-8 rounded-full bg-red-950 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#mail" className="w-8 h-8 rounded-full bg-red-950 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#globe" className="w-8 h-8 rounded-full bg-red-950 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form (Matching Reference Right Side) */}
          <div className="p-8 sm:p-10 bg-slate-50 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              CONTACT US / SEND DIRECT ENQUIRY
            </h3>

            <form onSubmit={handleSubmitInquiry} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Mobile Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-slate-200 text-slate-700 text-sm font-bold border border-r-0 border-slate-300 rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10 digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-r py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name / Firm Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Selected Product / Requirement Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your requirement in detail (e.g. Quantity needed, Crop type, Distributorship inquiry...)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-700 text-white font-extrabold py-3 rounded text-sm transition shadow-lg uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry Now</span>
              </button>
            </form>

            <p className="text-[11px] text-slate-500 text-center mt-3">
              🔒 Your contact information is kept confidential & secure.
            </p>
          </div>

        </div>
      </section>

      {/* 7. RATINGS & CUSTOMER REVIEWS SECTION (Matching Reference Screenshot) */}
      <section id="reviews" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase">
            Ratings & Reviews
          </h2>
          <div className="w-16 h-1 bg-red-700 mx-auto mt-2"></div>
        </div>

        {/* Rating Summary Box */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Score */}
          <div className="text-center md:border-r border-slate-200">
            <div className="text-4xl sm:text-5xl font-black text-slate-900">4.8 <span className="text-sm font-normal text-slate-500">/ 5</span></div>
            <div className="flex justify-center my-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">Reviewed by 500+ Verified Buyers & Dealers</p>
          </div>

          {/* User Satisfaction Metrics (Matching green progress bars in reference) */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="text-xs font-bold uppercase text-slate-700 flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4 text-emerald-600" />
              <span>User Satisfaction Matrix</span>
            </h4>
            
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Product Quality & Purity</span>
                <span className="text-emerald-700 font-bold">98%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Response & Sales Support</span>
                <span className="text-emerald-700 font-bold">95%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>On-Time Delivery</span>
                <span className="text-emerald-700 font-bold">92%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.location}</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                    {rev.tag}
                  </span>
                </div>
                <div className="flex my-2 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mt-2">
                  "{rev.comment}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between">
                <span>Verified Feedback</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOOTER SECTION */}
      <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Our Products</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition">Ratings & Certifications</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact Us</a></li>
              <li><a href="#sitemap" className="hover:text-amber-400 transition">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-amber-400 transition">Plant Growth Regulator</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Agriculture Insecticide</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Agriculture Biopesticides</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Sticking & Wetting Agent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">
              Organic Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-amber-400 transition">Bio-Larvicides</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Bio-Pesticide Neem Extract</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Agriculture Fungicide</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition">Paddy Yield Enhancer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">
              Reach Us Directly
            </h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              R.K.A ORGANIC INDIA PRIVATE LIMITED<br />
              Toll-Free Helpline: <span className="text-amber-400 font-bold">+91 8958426666</span>
            </p>
            <button
              onClick={() => handleOpenInquiry()}
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded text-xs transition w-full shadow"
            >
              Request Quick Callback
            </button>
          </div>

        </div>

        <div className="bg-slate-900 py-4 px-4 text-center text-slate-500 border-t border-slate-800">
          <p>© 2026 R.K.A ORGANIC INDIA PRIVATE LIMITED. All Rights Reserved. (Terms of Use & Privacy Policy)</p>
        </div>
      </footer>

      {/* MODAL 1: INQUIRY POPUP (Pre-filled for product) */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-emerald-800 font-black text-lg border-b border-slate-100 pb-3">
              <Send className="w-5 h-5 text-red-700" />
              <span>Send Product Inquiry</span>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Inquiring for: <strong className="text-slate-900">{formData.productName || 'General Bulk Purchase'}</strong>
            </p>

            <form onSubmit={handleSubmitInquiry} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City / State</label>
                <input
                  type="text"
                  placeholder="e.g. Karnal, Haryana"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Requirement Note</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-slate-300 rounded p-2 text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setInquiryModalOpen(false)}
                  className="w-1/2 border border-slate-300 text-slate-700 font-bold py-2 rounded text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-red-800 hover:bg-red-700 text-white font-bold py-2 rounded text-xs shadow"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: CATALOG & BROCHURE VIEWER */}
      {catalogModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCatalogModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
              <FileText className="w-7 h-7 text-emerald-700" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">R.K.A ORGANIC INDIA – Complete Product Catalog 2026</h3>
                <p className="text-xs text-slate-500">Government Certified Organic Bio-Inputs & Formulations</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-sm text-emerald-900">Download Official Specs PDF</h4>
                <p className="text-xs text-emerald-700 mt-1">Get complete dosage charts, composition analysis, and field trial reports.</p>
                <button
                  onClick={() => {
                    setCatalogModalOpen(false);
                    triggerToast("Corporate Brochure PDF downloaded successfully!");
                  }}
                  className="mt-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded text-xs shadow flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Product Brochure (PDF - 4.2 MB)</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <h4 className="font-bold text-slate-900 text-sm">Full Product Range Summary:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Neemasthra 10000 PPM:</strong> High concentration Azadirachtin organic pesticide.</li>
                  <li><strong>Rhizobium & Trichoderma Consortium:</strong> Nitrogen fixing & soil disease preventive spores.</li>
                  <li><strong>Power Plant Growth Booster:</strong> 98% Potassium Humate + Fulvic Acid + Amino acids.</li>
                  <li><strong>Super Spread Organosilicone:</strong> 80% active wetting agent for agricultural sprayers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}