'use client';

import { Button, Chip } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

// ============================================================================
// DATA
// ============================================================================

const categories = [
  { value: "all", label: "All Photos" },
  { value: "events", label: "Events" },
  { value: "conferences", label: "Conferences" },
  { value: "workshops", label: "Workshops" },
  { value: "community", label: "Community" },
];

const galleryImages = [
  // Events
  { src: "/imgs/IMG-20250619-WA0022.jpg", title: "Annual Gala 2025", category: "events" },
  { src: "/imgs/IMG-20250619-WA0026.jpg", title: "Members Gathering", category: "events" },
  { src: "/imgs/IMG-20250619-WA0027.jpg", title: "Networking Session", category: "events" },
  { src: "/imgs/IMG-20250619-WA0029.jpg", title: "Award Ceremony", category: "events" },
  { src: "/imgs/IMG-20250619-WA0030.jpg", title: "Celebration Night", category: "events" },
  { src: "/imgs/IMG-20250619-WA0031.jpg", title: "Distinguished Guests", category: "events" },
  { src: "/imgs/IMG-20250619-WA0032.jpg", title: "Charity Event", category: "events" },
  { src: "/imgs/IMG-20250620-WA0004.jpg", title: "Annual Dinner", category: "events" },
  { src: "/imgs/IMG-20250620-WA0005.jpg", title: "Members Dinner", category: "events" },
  { src: "/imgs/IMG-20250620-WA0010.jpg", title: "FLN Celebration", category: "events" },

  // Conferences
  { src: "/imgs/FLN online symposium.jpg", title: "Online Symposium", category: "conferences" },
  { src: "/imgs/FLN advancing gender equality.jpg", title: "Gender Equality Conference", category: "conferences" },
  { src: "/imgs/FLN end women violence.jpg", title: "End Violence Summit", category: "conferences" },
  { src: "/imgs/IMG-20250616-WA0061.jpg", title: "Climate Justice Conference", category: "conferences" },
  { src: "/imgs/IMG-20250616-WA0063.jpg", title: "Women in Law Summit", category: "conferences" },
  { src: "/imgs/IMG-20250616-WA0064.jpg", title: "Annual Conference", category: "conferences" },
  { src: "/imgs/IMG-20250616-WA0068.jpg", title: "Legal Education Forum", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0041.jpg", title: "International Summit", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0042.jpg", title: "Panel Discussion", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0045.jpg", title: "Keynote Session", category: "conferences" },

  // Workshops
  { src: "/imgs/IMG-20250409-WA0018.jpg", title: "Community Training", category: "workshops" },
  { src: "/imgs/IMG-20250409-WA0017.jpg", title: "Legal Aid Workshop", category: "workshops" },
  { src: "/imgs/IMG-20250409-WA0016.jpg", title: "Skills Development", category: "workshops" },
  { src: "/imgs/IMG-20250409-WA0015.jpg", title: "Capacity Building", category: "workshops" },
  { src: "/imgs/IMG-20250416-WA0021.jpg", title: "Professional Training", category: "workshops" },
  { src: "/imgs/IMG-20250416-WA0028.jpg", title: "Leadership Workshop", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0018.jpg", title: "Mentorship Session", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0021.jpg", title: "Career Development", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0023.jpg", title: "Advocacy Training", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0026.jpg", title: "Rights Awareness", category: "workshops" },

  // Community
  { src: "/imgs/IMG-20250409-WA0014.jpg", title: "Community Service", category: "community" },
  { src: "/imgs/IMG-20250409-WA0013.jpg", title: "Youth Empowerment", category: "community" },
  { src: "/imgs/IMG-20250621-WA0001.jpg", title: "Member Spotlight", category: "community" },
  { src: "/imgs/IMG-20250621-WA0002.jpg", title: "Team Building", category: "community" },
  { src: "/imgs/IMG-20250621-WA0004.jpg", title: "Volunteer Day", category: "community" },
  { src: "/imgs/IMG-20250621-WA0005.jpg", title: "Partnership Launch", category: "community" },
  { src: "/imgs/IMG-20250621-WA0006.jpg", title: "Mentorship Program", category: "community" },
  { src: "/imgs/IMG-20250621-WA0007.jpg", title: "Community Outreach", category: "community" },
  { src: "/imgs/IMG-20250621-WA0008.jpg", title: "Support Initiative", category: "community" },
  { src: "/imgs/IMG-20250621-WA0012.jpg", title: "FLN Community", category: "community" },
];

// ============================================================================
// LIGHTBOX COMPONENT
// ============================================================================

interface LightboxProps {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl max-h-[85vh] mx-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-xl font-heading font-bold text-white mb-1">
            {currentImage.title}
          </h3>
          <p className="text-white/70 text-sm capitalize">
            {currentImage.category}
          </p>
        </div>
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  // Keyboard navigation
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!lightboxOpen) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrev();
        if (e.key === "ArrowRight") goToNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    });
  }

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Gallery" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 bg-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6"
            >
              <Camera className="w-10 h-10 text-gold" />
            </motion.div>

            <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
              Photo Gallery
            </Chip>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Moments
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Browse through our collection of memorable moments, events, and initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FILTERS & GALLERY */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? "bg-navy text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Toggle & Count */}
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">
                {filteredImages.length} photos
              </span>

              <div className="flex bg-white rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === "grid" ? "bg-navy text-white" : "text-slate-400 hover:text-navy"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === "masonry" ? "bg-navy text-white" : "text-slate-400 hover:text-navy"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
                  : "columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
              }
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  variants={scaleIn}
                  className={`group cursor-pointer ${viewMode === "masonry" ? "break-inside-avoid" : ""}`}
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${
                      viewMode === "grid" ? "aspect-square" : index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 lg:p-5">
                      <div>
                        <h3 className="text-white font-bold text-sm lg:text-base mb-1 line-clamp-2">
                          {image.title}
                        </h3>
                        <span className="text-white/70 text-xs capitalize">
                          {image.category}
                        </span>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">No photos found</h3>
              <p className="text-slate-500 mb-6">Try selecting a different category</p>
              <Button
                onClick={() => setSelectedCategory("all")}
                className="bg-navy text-white font-medium px-6 h-11 rounded-full"
              >
                View All Photos
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATS SECTION */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "Events Captured" },
              { number: "500+", label: "Photos Archived" },
              { number: "15+", label: "Conferences" },
              { number: "30+", label: "Workshops" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
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
              Be Part of Our Story
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Join the Female Lawyers Network and create memorable moments with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="/membership"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors text-base"
              >
                Join the Network
              </Button>
              <Button
                as="a"
                href="/events"
                className="bg-transparent border-2 border-white text-white font-bold px-8 h-14 rounded-full hover:bg-white hover:text-purple transition-colors text-base"
              >
                View Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
