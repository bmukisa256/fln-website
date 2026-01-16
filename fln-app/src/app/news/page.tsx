'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronRight, LayoutGrid, Newspaper, Search, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// ============================================================================
// DATA
// ============================================================================

const categories = [
  { value: "all", label: "All News" },
  { value: "climate", label: "Climate Justice" },
  { value: "gender", label: "Gender Equality" },
  { value: "partnerships", label: "Partnerships" },
  { value: "events", label: "Events" },
];

const newsItems = [
  { date: "2025", title: "Markets Drive", image: "/imgs/IMG-20250921-WA0024.jpg", category: "events", featured: true },
  { date: "2025", title: "Planting Trees Initiative", image: "/imgs/planting_trees.jpg", category: "climate", featured: true },
  { date: "2025", title: "FLN and Empathy Whale Partnership", image: "/imgs/tree-assn2.jpg", category: "partnerships", featured: false },
  { date: "2025", title: "Strategic Partnership Announcement", image: "/imgs/tree-assn.jpg", category: "partnerships", featured: false },
  { date: "2025", title: "Vulnerable Communities Support", image: "/imgs/IMG-20250409-WA0018.jpg", category: "climate", featured: false },
  { date: "2025", title: "Green Economy Initiative", image: "/imgs/IMG-20250409-WA0017.jpg", category: "climate", featured: false },
  { date: "2025", title: "Intergenerational Equity", image: "/imgs/IMG-20250409-WA0016.jpg", category: "climate", featured: false },
  { date: "2025", title: "Developed Countries Collaboration", image: "/imgs/IMG-20250409-WA0015.jpg", category: "partnerships", featured: false },
  { date: "2025", title: "Climate Justice Action", image: "/imgs/IMG-20250409-WA0014.jpg", category: "climate", featured: false },
  { date: "2025", title: "Global Fund for Women", image: "/imgs/IMG-20250409-WA0013.jpg", category: "gender", featured: false },
  { date: "2024", title: "Online Symposium on Women and Children with Disabilities", image: "/imgs/FLN-online-symposium.jpg", category: "gender", featured: false },
  { date: "2024", title: "Advancing Gender Equality for Women and Children with Disabilities", image: "/imgs/FLN-advancing-gender-equality.jpg", category: "gender", featured: false },
  { date: "2024", title: "End Violence Against Women and Children with Disabilities", image: "/imgs/FLN-end-women-violence.jpg", category: "gender", featured: false },
  { date: "2024", title: "Effects of Climate Justice Change and Its Negative Impact on Society", image: "/imgs/news (5).jpeg", category: "climate", featured: false },
  { date: "2024", title: "The Role of Women in Climate Justice Action", image: "/imgs/news (4).jpeg", category: "climate", featured: false },
  { date: "2024", title: "Sensitization & Awareness on Climate Change", image: "/imgs/news (3).jpeg", category: "climate", featured: false },
  { date: "2024", title: "Climate Justice Education & Public Awareness", image: "/imgs/news (2).jpeg", category: "climate", featured: false },
  { date: "2024", title: "Climate Justice Legal Framework", image: "/imgs/news (1).jpeg", category: "climate", featured: false },
  { date: "2024", title: "Sensitization and Awareness on Climate Change", image: "/imgs/climate_change.jpeg", category: "climate", featured: false },
  { date: "2024", title: "FLN Distinguished Dinner Sponsors", image: "/imgs/dinnersponsors.jpg", category: "events", featured: false },
  { date: "2024", title: "Founder/President Bio", image: "/imgs/PHOTO-2023-12-29-20-28-10.jpg", category: "events", featured: false },
  { date: "2024", title: "Our Socials", image: "/imgs/WA-20230104-140156.jpeg", category: "events", featured: false },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="News" />

      <PageHero
        centered
        badge="Stay Informed"
        title="News & Updates"
        description="Explore the latest news, initiatives, and updates from the Female Lawyers Network"
      >
        <div className="max-w-xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-gold transition-colors" />
            <input
              type="text"
              placeholder="Search news by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-slate-400 focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${showFilters ? "bg-gold text-navy" : "bg-white/5 text-white hover:bg-white/10"
                }`}
            >
              <LayoutGrid className="w-4 h-4" />
              {showFilters ? "Hide Categories" : "Show Categories"}
            </button>
          </div>
        </div>
      </PageHero>

      {/* ================================================================== */}
      {/* FEATURED NEWS */}
      {/* ================================================================== */}
      {!searchQuery && selectedCategory === "all" && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <p className="text-sm font-medium text-purple uppercase tracking-wider mb-1">Highlights</p>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-navy">
                  Featured Stories
                </h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                        <span className="text-white/80 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-heading font-bold text-white group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* FILTERS & NEWS GRID */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-navy">
                {searchQuery ? `Search Results` : "All News"}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {filteredNews.length} {filteredNews.length === 1 ? "article" : "articles"} found
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value
                    ? "bg-navy text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* News Grid */}
          <AnimatePresence mode="wait">
            {filteredNews.length > 0 ? (
              <motion.div
                key={selectedCategory + searchQuery}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {(searchQuery || selectedCategory !== "all" ? filteredNews : regularNews).map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`text-xs font-bold px-2 py-1 rounded-lg ${item.category === "climate"
                            ? "bg-green-100 text-green-700"
                            : item.category === "gender"
                              ? "bg-purple/10 text-purple"
                              : item.category === "partnerships"
                                ? "bg-gold/20 text-gold"
                                : "bg-navy/10 text-navy"
                            }`}>
                            {categories.find(c => c.value === item.category)?.label || item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-purple transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-purple opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">No articles found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="bg-navy text-white font-medium px-6 h-11 rounded-full"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NEWSLETTER CTA */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Stay Updated
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Subscribe to our newsletter and never miss important news, events, and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-purple-300 focus:outline-none focus:border-white transition-colors"
              />
              <Button
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
