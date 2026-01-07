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
  // University Launches & Events
  { src: "/imgs/nk7.jpg", title: "Nkumba University", description: "FLN club launch at Nkumba University", category: "events" },
  { src: "/imgs/bs2.jpg", title: "Bishop Stuart University", description: "FLN club launch in Mbarara", category: "events" },
  { src: "/imgs/kc2.jpg", title: "King Ceasor University", description: "FLN club launch in Gaba", category: "events" },
  { src: "/imgs/iuiu.jpg", title: "Islamic University in Uganda", description: "Law School Dinner & Handover Ceremony", category: "events" },
  { src: "/imgs/gl.jpg", title: "FLN Grand Launch", description: "5-year Strategic Plan launch at Hotel Africana", category: "events" },
  { src: "/imgs/dn1.jpg", title: "FLN Distinguished Dinner", description: "Annual distinguished dinner event", category: "events" },
  { src: "/imgs/nm.jpg", title: "National Market Women Symposium", description: "5th Annual National Market Women Entrepreneurs Symposium", category: "events" },
  { src: "/imgs/csr.jpg", title: "Corporate Social Responsibility", description: "CSR at Katalemwa Cheshire", category: "events" },
  { src: "/imgs/tj.jpg", title: "The Judiciary", description: "Courtesy calls to streamline collaboration", category: "events" },

  // Conferences & Partnerships
  { src: "/imgs/ist.jpg", title: "Institute for Social Transformation", description: "Meeting with IST Executive Director", category: "conferences" },
  { src: "/imgs/dfcu.jpg", title: "DFCU Bank Women in Business", description: "Meeting with DFCU Women in Business Manager", category: "conferences" },
  { src: "/imgs/aah.jpg", title: "Action Against Hunger", description: "Collaboration with Country Director", category: "conferences" },
  { src: "/imgs/iwj.jpg", title: "International Association of Women Judges", description: "Courtesy call to IAWJ president", category: "conferences" },
  { src: "/imgs/eals.jpg", title: "East African Law Society", description: "Multi-stakeholder meeting", category: "conferences" },
  { src: "/imgs/JM.jpg", title: "Jural Media", description: "Collaboration with virtual media house", category: "conferences" },
  { src: "/imgs/FLN online symposium.jpg", title: "Online Symposium", description: "Women and Children with Disabilities", category: "conferences" },
  { src: "/imgs/FLN advancing gender equality.jpg", title: "Gender Equality Conference", description: "Advancing Gender Equality", category: "conferences" },
  { src: "/imgs/FLN end women violence.jpg", title: "End Violence Summit", description: "End Violence Against Women", category: "conferences" },

  // Workshops & Training
  { src: "/imgs/pds.jpg", title: "Personal Development Seminar", description: "Mandela Group workshop", category: "workshops" },
  { src: "/imgs/ulsr.jpg", title: "Uganda Law Society Boot Camp", description: "Rule of Law Boot Camp at Makerere", category: "workshops" },
  { src: "/imgs/IMG-20250416-WA0028.jpg", title: "Climate Justice 2025", description: "Climate justice at Busukuma", category: "workshops" },
  { src: "/imgs/IMG-20250416-WA0021.jpg", title: "Tree Planting Initiative", description: "Handing over trees to locals at Busukuma", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0018.jpg", title: "Kajjansi Market Sensitization", description: "Climate Change sensitization drive", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0021.jpg", title: "Kajjansi Market", description: "Community engagement", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0023.jpg", title: "Community Outreach", description: "Locals welcoming the drive", category: "workshops" },
  { src: "/imgs/IMG-20250501-WA0026.jpg", title: "Climate Awareness", description: "Community climate awareness", category: "workshops" },

  // Climate Justice Events 2025
  { src: "/imgs/IMG-20250616-WA0064.jpg", title: "Blessed Parents School", description: "FLN empowers young girls in climate justice", category: "events" },
  { src: "/imgs/IMG-20250616-WA0061.jpg", title: "School Outreach", description: "Climate education program", category: "events" },
  { src: "/imgs/IMG-20250616-WA0063.jpg", title: "Youth Engagement", description: "Engaging youth on climate", category: "events" },
  { src: "/imgs/IMG-20250616-WA0068.jpg", title: "Climate Justice Education", description: "Protecting women and girls from climate crises", category: "events" },
  { src: "/imgs/IMG-20250619-WA0027.jpg", title: "International Biometrics Conference", description: "Conference at Global Hotel", category: "conferences" },
  { src: "/imgs/IMG-20250619-WA0026.jpg", title: "Women & Climate Change", description: "Addressing gender-climate intersections", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0045.jpg", title: "FLN President Mentors Women", description: "Climate Justice mentorship", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0041.jpg", title: "Conference Session", description: "Panel discussion", category: "conferences" },
  { src: "/imgs/IMG-20250618-WA0042.jpg", title: "Networking Event", description: "Professional networking", category: "conferences" },
  { src: "/imgs/IMG-20250619-WA0022.jpg", title: "Leadership Forum", description: "Women in leadership", category: "conferences" },

  // School Programs
  { src: "/imgs/IMG-20250620-WA0004.jpg", title: "Victory Senior Secondary School", description: "Girls as agents of change", category: "events" },
  { src: "/imgs/IMG-20250619-WA0070.jpg", title: "Youth Empowerment", description: "Empowering future solutions", category: "events" },
  { src: "/imgs/IMG-20250619-WA0071.jpg", title: "Girl Empowerment", description: "Building resilient leaders", category: "events" },
  { src: "/imgs/IMG-20250619-WA0062.jpg", title: "Sustainable World", description: "Empowered girls for a just world", category: "events" },
  { src: "/imgs/IMG-20250620-WA0005.jpg", title: "School Visit", description: "Educational outreach", category: "events" },
  { src: "/imgs/IMG-20250620-WA0010.jpg", title: "Time to Act", description: "Climate action now", category: "events" },
  { src: "/imgs/IMG-20250620-WA0018.jpg", title: "Buganda Road Primary School", description: "Climate literacy and green skills", category: "events" },
  { src: "/imgs/IMG-20250620-WA0023.jpg", title: "Student Engagement", description: "Interactive session", category: "events" },
  { src: "/imgs/IMG-20250620-WA0019.jpg", title: "Inclusive Policies", description: "Gender-climate connection", category: "events" },
  { src: "/imgs/IMG-20250620-WA0021.jpg", title: "Leadership Opportunities", description: "Safe platforms for girls", category: "events" },
  { src: "/imgs/IMG-20250620-WA0024.jpg", title: "Decision Making", description: "Girls in decision-making", category: "events" },
  { src: "/imgs/IMG-20250620-WA0025.jpg", title: "Protection Initiative", description: "Protecting girls from GBV", category: "events" },
  { src: "/imgs/IMG-20250620-WA0035.jpg", title: "Community Program", description: "Community engagement", category: "events" },
  { src: "/imgs/IMG-20250620-WA0038.jpg", title: "Outreach Program", description: "School outreach", category: "events" },

  // Community Programs
  { src: "/imgs/IMG-20250621-WA0002.jpg", title: "Mpererewe Local Communities", description: "Building climate resilience in schools", category: "community" },
  { src: "/imgs/IMG-20250621-WA0005.jpg", title: "Community Meeting", description: "Local engagement", category: "community" },
  { src: "/imgs/IMG-20250621-WA0004.jpg", title: "Team Activity", description: "Community service", category: "community" },
  { src: "/imgs/IMG-20250621-WA0007.jpg", title: "Local Outreach", description: "Community program", category: "community" },
  { src: "/imgs/IMG-20250621-WA0008.jpg", title: "Support Initiative", description: "Community support", category: "community" },
  { src: "/imgs/IMG-20250621-WA0012.jpg", title: "Group Photo", description: "FLN community", category: "community" },
  { src: "/imgs/IMG-20250621-WA0006.jpg", title: "Volunteer Program", description: "Community volunteers", category: "community" },
  { src: "/imgs/IMG-20250621-WA0001.jpg", title: "Team Building", description: "FLN team", category: "community" },

  // Market Women Programs
  { src: "/imgs/IMG-20250624-WA0024.jpg", title: "Women Mentorship", description: "Mentoring for climate justice", category: "community" },
  { src: "/imgs/IMG-20250624-WA0019.jpg", title: "Leadership Development", description: "Building sustainable future", category: "community" },
  { src: "/imgs/IMG-20250624-WA0021.jpg", title: "Transformative Change", description: "Unlocking potential", category: "community" },
  { src: "/imgs/IMG-20250624-WA0028.jpg", title: "Community Gathering", description: "Local women meeting", category: "community" },
  { src: "/imgs/IMG-20250624-WA0027.jpg", title: "Market Women", description: "Empowering market women", category: "community" },
  { src: "/imgs/IMG-20250624-WA0026.jpg", title: "Climate Action", description: "Women-led initiatives", category: "community" },
  { src: "/imgs/IMG-20250624-WA0020.jpg", title: "Local Leadership", description: "Women leaders", category: "community" },
  { src: "/imgs/IMG-20250628-WA0032.jpg", title: "Tree Planting", description: "Women leading tree planting", category: "community" },
  { src: "/imgs/IMG-20250628-WA0034.jpg", title: "Climate Training", description: "Supporting women-led initiatives", category: "community" },
  { src: "/imgs/IMG-20250628-WA0025.jpg", title: "Inclusive Solutions", description: "Gender equality in climate policy", category: "community" },
  { src: "/imgs/IMG-20250628-WA0022.jpg", title: "Indigenous Knowledge", description: "Valuing traditional conservation", category: "community" },
  { src: "/imgs/IMG-20250628-WA0024.jpg", title: "Community Action", description: "Local initiatives", category: "community" },
  { src: "/imgs/IMG-20250628-WA0029.jpg", title: "Women Farmers", description: "Agricultural support", category: "community" },
  { src: "/imgs/IMG-20250628-WA0035.jpg", title: "Group Activity", description: "Community program", category: "community" },

  // CSR & Special Events
  { src: "/imgs/IMG-20250725-WA0024.jpg", title: "Annual CSR", description: "Visit to disabled children in Mukono", category: "events" },
  { src: "/imgs/IMG-20250725-WA0026.jpg", title: "Elizabeth Home Mukono", description: "Sharing love and happiness", category: "events" },
  { src: "/imgs/IMG-20250725-WA0029.jpg", title: "Children Support", description: "Supporting disabled children", category: "events" },
  { src: "/imgs/IMG-20250725-WA0031.jpg", title: "Care Program", description: "Community care", category: "events" },
  { src: "/imgs/IMG-20250725-WA0032.jpg", title: "Volunteer Visit", description: "Volunteer activities", category: "events" },
  { src: "/imgs/IMG-20250725-WA0048.jpg", title: "Group Photo", description: "CSR team photo", category: "events" },
  { src: "/imgs/IMG-20250725-WA0011.jpg", title: "Team Activity", description: "Team engagement", category: "events" },

  // MTN Women at Work Event
  { src: "/imgs/IMG-20250806-WA0014.jpg", title: "MTN Women at Work", description: "FLN at MTN event", category: "events" },
  { src: "/imgs/IMG-20250806-WA0015.jpg", title: "MTN Event", description: "Women empowerment", category: "events" },
  { src: "/imgs/IMG-20250806-WA0019.jpg", title: "Networking", description: "Professional networking", category: "events" },
  { src: "/imgs/IMG-20250806-WA0021.jpg", title: "Panel Session", description: "Expert panel", category: "events" },
  { src: "/imgs/IMG-20250806-WA0020.jpg", title: "Award Ceremony", description: "Recognition awards", category: "events" },
  { src: "/imgs/fln_president_awarded.jpg", title: "FLN President Awarded", description: "Award from MTN CEO Sylvia Mulinge", category: "events" },
  { src: "/imgs/IMG-20250806-WA0023.jpg", title: "Celebration", description: "Award celebration", category: "events" },
  { src: "/imgs/IMG-20250806-WA0024.jpg", title: "Group Photo", description: "Event attendees", category: "events" },
  { src: "/imgs/IMG-20250806-WA0025.jpg", title: "Closing Session", description: "Event conclusion", category: "events" },

  // Young Lawyers Mentorship
  { src: "/imgs/IMG-20250806-WA0043.jpg", title: "Young Lawyers Network", description: "FLN President mentoring session", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0045.jpg", title: "Mentorship Session", description: "Career guidance", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0044.jpg", title: "Professional Development", description: "Skills building", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0047.jpg", title: "Q&A Session", description: "Interactive discussion", category: "workshops" },

  // High School Climate Training
  { src: "/imgs/IMG-20250806-WA0088.jpg", title: "Stafford High School", description: "Climate change training at Kiteezi", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0089.jpg", title: "Student Training", description: "Climate education", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0096.jpg", title: "Interactive Session", description: "Student engagement", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0093.jpg", title: "Group Discussion", description: "Climate topics", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0092.jpg", title: "Presentation", description: "Climate presentation", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0090.jpg", title: "School Assembly", description: "School program", category: "workshops" },

  // Corporate Mentorship - Deed Microfinance
  { src: "/imgs/IMG-20250806-WA0113.jpg", title: "Deed Microfinance Ltd", description: "Corporate mentorship at Ntinda", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0107.jpg", title: "Corporate Training", description: "Professional development", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0112.jpg", title: "Team Session", description: "Staff training", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0103.jpg", title: "Leadership Talk", description: "Leadership session", category: "workshops" },

  // Corporate Mentorship - Muwema Advocates
  { src: "/imgs/IMG-20250806-WA0140.jpg", title: "MS Muwema & Co Advocates", description: "Corporate mentorship series", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0137.jpg", title: "Legal Mentorship", description: "Law firm training", category: "workshops" },
  { src: "/imgs/IMG-20250806-WA0121.jpg", title: "Professional Session", description: "Advocates training", category: "workshops" },

  // Busega Market Program
  { src: "/imgs/IMG-20250806-WA0154.jpg", title: "St. Balikudembe Market Busega", description: "Climate activity at Mount Camel Church", category: "community" },
  { src: "/imgs/IMG-20250806-WA0150.jpg", title: "Market Women Program", description: "Local market engagement", category: "community" },
  { src: "/imgs/IMG-20250806-WA0182.jpg", title: "Community Gathering", description: "Women gathering", category: "community" },
  { src: "/imgs/IMG-20250806-WA0172.jpg", title: "Climate Awareness", description: "Environmental education", category: "community" },
  { src: "/imgs/IMG-20250806-WA0171.jpg", title: "Group Session", description: "Interactive session", category: "community" },

  // Owino Market Climate Session
  { src: "/imgs/IMG-20250917-WA0105.jpg", title: "Owino Market Kampala", description: "Climate Change Session", category: "community" },
  { src: "/imgs/IMG-20250917-WA0104.jpg", title: "Market Outreach", description: "Community engagement", category: "community" },
  { src: "/imgs/IMG-20250917-WA0103.jpg", title: "Women Traders", description: "Market women program", category: "community" },
  { src: "/imgs/IMG-20250917-WA0115.jpg", title: "Climate Education", description: "Environmental awareness", category: "community" },
  { src: "/imgs/IMG-20250917-WA0111.jpg", title: "Group Discussion", description: "Interactive session", category: "community" },

  // Women in Electoral Governance Symposium
  { src: "/imgs/IMG-20250812-WA0004.jpg", title: "FLN Symposium", description: "Women in Electoral Governance at Hotel Africana", category: "conferences" },
  { src: "/imgs/IMG-20250813-WA0003.jpg", title: "Symposium Details", description: "Event information", category: "conferences" },
  { src: "/imgs/IMG-20250917-WA0092.jpg", title: "Conference Hall", description: "Symposium venue", category: "conferences" },
  { src: "/imgs/IMG-20250917-WA0094.jpg", title: "Panel Discussion", description: "Expert panel", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0025.jpg", title: "Keynote Address", description: "Main speaker", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0016.jpg", title: "Conference Session", description: "Symposium session", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0019.jpg", title: "Attendees", description: "Conference participants", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0021.jpg", title: "Networking", description: "Professional networking", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0022.jpg", title: "Group Photo", description: "Conference photo", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0023.jpg", title: "Closing Ceremony", description: "Event conclusion", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0034.jpg", title: "Award Session", description: "Recognition", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0028.jpg", title: "Panel Members", description: "Expert panelists", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0033.jpg", title: "Discussion", description: "Panel discussion", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0031.jpg", title: "Q&A Session", description: "Audience questions", category: "conferences" },
  { src: "/imgs/IMG-20250921-WA0027.jpg", title: "Presentation", description: "Conference presentation", category: "conferences" },
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
              { number: "60+", label: "Events Captured" },
              { number: "150+", label: "Photos Archived" },
              { number: "25+", label: "Conferences" },
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
