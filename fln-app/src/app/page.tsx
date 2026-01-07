'use client';

import { Button, Chip, Image } from "@nextui-org/react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Globe, Loader2, Mail, MapPin, Menu, Phone, Shield, Twitter, Linkedin, Instagram, Users, X } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

// ============================================================================
// DATA
// ============================================================================

const boardMembers = [
  { image: "/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg", name: "Hon Dr. Joyce Nalunga Birimumaaso", position: "PRESIDENT | FOUNDER", description: "Member, Leadership Code Tribunal." },
  { image: "/imgs/justice lillian.jfif", name: "Hon Prof. Lady Justice Lillian Tibatemwa Ekirukubinza", position: "CHAIRPERSON", description: "Justice of the Supreme Court." },
  { image: "/imgs/jane abodo.png", name: "Hon. Lady Justice Jane Frances Abodo", position: "VICE CHAIRPERSON", description: "Director of Public Prosecutions." },
  { image: "/imgs/WhatsApp Image 2023-01-05 at 14.26.09.jpeg", name: "Ms. Angelina Namakula Ofwono", position: "MEMBER", description: "Chief Legal, DFCU Bank." },
  { image: "/imgs/WhatsApp Image 2023-01-06 at 08.48.58.jpeg", name: "Bulya Lillian", position: "SECRETARY", description: "Managing Partner, L-Bulya & Co. Advocates." },
  { image: "/imgs/PHOTO-2022-06-27-16-56-26.jpg", name: "Hope Atuhairwe Kisitu", position: "MEMBER", description: "Corporation Secretary, Uganda Development Corporation." },
  { image: "/imgs/WhatsApp Image 2023-01-09 at 15.23.47.jpeg", name: "Anne Abeja", position: "MEMBER", description: "Company Secretary Housing Finance Bank." },
  { image: "/imgs/suz.jpg", name: "Suzan Batuuka", position: "MEMBER", description: "Head Legal Uganda Airlines." },
  { image: "/imgs/joanita.jpg", name: "Joanita Bushara", position: "MEMBER", description: "Managing Partner of Justitia Advocates Private Practice." }
];

const secretariatMembers = [
  { image: "/imgs/WhatsApp Image 2023-02-16 at 16.39.39.jpg", name: "Leah Nasasira", position: "Chief Executive Officer" },
  { image: "/imgs/WhatsApp Image 2023-04-04 at 11.08.26 (1).jpg", name: "Sandra Nantaba", position: "Executive Coordinator" },
  { image: "/imgs/daisy.jpg", name: "Daisy Mulamuzi Kasujja", position: "Strategic Advisor" },
  { image: "/imgs/fatta.jpg", name: "Muzafar Gweyawadde", position: "Social Media Officer" },
  { image: "/imgs/PHOTO-2024-01-03-19-42-44.jpg", name: "Mubiru Byron", position: "I.T" },
  { image: "/imgs/PHOTO-2024-01-03-19-42-54.jpg", name: "Jordanah Nandaula", position: "Coordinator" },
  { image: "/imgs/WhatsApp Image 2023-01-10 at 19.57.11.jpg", name: "Aphophia Komugambe", position: "Law University Coordinator" },
  { image: "/imgs/lavender.jpg", name: "Lavender Nassanga", position: "Volunteer" },
];

const associateMembers = [
  { image: "/imgs/asuman.png", name: "Hon. Asuman Kiyingi", position: "Deputy Chairperson, Leadership Code Tribunal." },
  { image: "/imgs/deo.jpg", name: "Kalikumutima Deo", position: "Managing Partner Kalikumutima & Co. Advocates." },
  { image: "/imgs/sp.jpg", name: "Musangala Simon Peter", position: "Managing Partner Musangala & Co. Advocates." },
  { image: "/imgs/sto.jpg", name: "Stanley Oketcho", position: "Partner Gem Advocates." },
  { image: "/imgs/robert.jpg", name: "Robert Mackay", position: "Managing Partner, R. Mackay & Co. Advocates." },
  { image: "/imgs/PHOTO-2023-12-29-21-35-17.jpg", name: "Otim Isaac", position: "Musangala Advocates." }
];

const navLinks = ['Home', 'About Us', 'Events', 'Membership'];

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Scroll Progress Bar
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #6A1B9A 0%, #C5A059 50%, #6A1B9A 100%)" }}
    />
  );
};

// Animated Counter
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
};

// Mesh Gradient Background
const MeshGradient = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full opacity-60"
      style={{ background: "radial-gradient(circle, rgba(106,27,154,0.4) 0%, transparent 70%)", filter: "blur(60px)", top: "-10%", left: "-5%" }}
      animate={{ x: [0, 100, 50, 0], y: [0, 50, 100, 0], scale: [1, 1.2, 0.9, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full opacity-50"
      style={{ background: "radial-gradient(circle, rgba(197,160,89,0.35) 0%, transparent 70%)", filter: "blur(80px)", top: "0%", right: "-10%" }}
      animate={{ x: [0, -80, -40, 0], y: [0, 80, 40, 0], scale: [1, 0.8, 1.1, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, rgba(27,54,93,0.3) 0%, transparent 70%)", filter: "blur(70px)", bottom: "10%", left: "30%" }}
      animate={{ x: [0, 60, -30, 0], y: [0, -60, -30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

// Tilt Card for 3D effect
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -10);
    setRotateY((x - 0.5) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Navbar scroll state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");
    setTimeout(() => setIsSuccess(false), 3000);
  };

  // Carousel state for Secretariat
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden font-body">
      <ScrollProgressBar />

      {/* ================================================================== */}
      {/* NAVBAR */}
      {/* ================================================================== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg h-16'
            : 'bg-white/50 backdrop-blur-xl h-20'
        } border-b border-white/20`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/imgs/FLN logo-full color.png" alt="FLN Logo" width={40} height={40} className="rounded-xl" />
            <span className="font-heading font-bold text-xl tracking-tight text-purple">FLN</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '')}`}
                className="text-base text-slate-500 hover:text-navy font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              as={Link}
              href="/membership"
              className="hidden sm:flex bg-purple text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-purple/20 hover:shadow-purple/40 hover:scale-105 transition-all"
            >
              Join Network
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '')}`}
                      className="block py-3 px-4 text-lg font-medium text-navy hover:bg-purple/5 hover:text-purple rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Button as={Link} href="/membership" className="w-full mt-2 bg-purple text-white font-medium py-3 rounded-full">
                    Join Network
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <MeshGradient />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <Chip size="sm" variant="flat" className="bg-amber-100 text-amber-800 font-semibold px-3">
                  FLN • EST 2022
                </Chip>
                <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Redefining Excellence</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[1.1] mb-8 text-purple" style={{ perspective: "1000px" }}>
                <motion.span variants={staggerContainer} initial="hidden" animate="visible" className="block">
                  {["The", "Future"].map((word, i) => (
                    <motion.span key={i} variants={textReveal} className="inline-block mr-4" style={{ transformStyle: "preserve-3d" }}>
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span variants={staggerContainer} initial="hidden" animate="visible" transition={{ delayChildren: 0.3 }} className="block">
                  <motion.span variants={textReveal} className="inline-block mr-4" style={{ transformStyle: "preserve-3d" }}>of</motion.span>
                  <motion.span variants={textReveal} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-500 italic" style={{ transformStyle: "preserve-3d" }}>
                    Justice
                  </motion.span>
                </motion.span>
                <motion.span variants={staggerContainer} initial="hidden" animate="visible" transition={{ delayChildren: 0.5 }} className="block">
                  <motion.span variants={textReveal} className="inline-block" style={{ transformStyle: "preserve-3d" }}>is Female.</motion.span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed"
              >
                A premier regional female lawyers network in Africa, empowering women in law to lead, advocate, and transform the legal profession.
                <span className="font-semibold text-purple block mt-2">Headquartered in Kampala, with a branch in Arusha, Tanzania.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Button
                  size="lg"
                  className="bg-purple text-white font-medium px-8 py-6 text-lg rounded-2xl hover:bg-navy transition-colors shadow-xl shadow-purple/20"
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Become a Member
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex gap-8 sm:gap-12 mt-12 pt-8 border-t border-slate-200"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-purple">
                    <AnimatedCounter target={500} suffix="+" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-gold">
                    <AnimatedCounter target={2} />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Chapters</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-navy">
                    <AnimatedCounter target={50} suffix="+" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Events Hosted</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] lg:h-[700px] hidden lg:block"
            >
              <motion.div style={{ y }} className="absolute right-0 top-10 w-4/5 h-[85%] rounded-[3rem] overflow-hidden shadow-2xl shadow-purple/20">
                <Image removeWrapper src="/imgs/IMG-20250616-WA0064.jpg" alt="Female Lawyers Network" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-heading font-bold text-3xl">Empower.</p>
                  <p className="font-light text-white/80">Elevate your legal career.</p>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-32 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                  <Image src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg" alt="President" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Hon. Dr. Joyce</p>
                  <p className="text-xs text-gold font-semibold">PRESIDENT</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple">
                  <Image src="/imgs/justice lillian.jfif" alt="Chairperson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Hon. Justice Lillian</p>
                  <p className="text-xs text-purple font-semibold">CHAIRPERSON</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FEATURES SECTION (BENTO GRID) */}
      {/* ================================================================== */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
                Our Pillars of <br /> <span className="italic text-purple">Impact.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="max-w-md text-slate-600 text-lg">
              We structure our impact through three core pillars designed to transform the legal landscape.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[600px]"
          >
            {/* Large Card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-2">
              <TiltCard className="h-full">
                <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-10 h-full relative overflow-hidden border border-slate-100 group card-interactive">
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6"
                    >
                      <Globe className="w-7 h-7 text-navy" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-purple mb-3">Global Advocacy</h3>
                      <p className="text-base sm:text-lg text-slate-600 max-w-sm">
                        We take our mission beyond borders, partnering with international organizations to fight for gender equality worldwide.
                      </p>
                      <Button variant="light" className="mt-8 pl-0 text-lg font-medium group/btn" endContent={<ArrowUpRight className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />}>
                        Explore Initiatives
                      </Button>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple/5 to-transparent transform translate-x-20 group-hover:translate-x-10 transition-transform duration-700" />
                </div>
              </TiltCard>
            </motion.div>

            {/* Top Right Card */}
            <motion.div variants={fadeInUp}>
              <TiltCard className="h-full min-h-[200px] md:min-h-0">
                <div className="bg-purple rounded-[2.5rem] p-8 text-white h-full relative overflow-hidden group card-interactive">
                  <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
                    <Shield className="w-8 h-8 text-gold mb-4" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">Integrity First</h3>
                  <p className="text-purple-200 text-sm">Upholding the highest moral standards in every case.</p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </div>
              </TiltCard>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div variants={fadeInUp}>
              <TiltCard className="h-full min-h-[200px] md:min-h-0">
                <div className="bg-amber-100 rounded-[2.5rem] p-8 h-full relative overflow-hidden border border-amber-200 group card-interactive">
                  <motion.div whileHover={{ scale: 1.1, rotate: -10 }} transition={{ duration: 0.3 }}>
                    <Users className="w-8 h-8 text-amber-700 mb-4" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 text-amber-900">Mentorship</h3>
                  <p className="text-amber-800/80 text-sm">Connecting junior lawyers with industry giants.</p>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP SECTION */}
      {/* ================================================================== */}
      <section className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm">Guided by Excellence</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">Voices of Authority</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* President */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="relative shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 to-purple/40 blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-gold/30 animate-rotate-slow" style={{ animationDuration: "30s" }}>
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl">
                      <Image src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg" alt="Hon. Dr. Joyce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" removeWrapper />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full shadow-lg">PRESIDENT</div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                    Hon. Dr. Joyce <br /><span className="text-slate-400 text-xl font-light">Nalunga Birimumaaso</span>
                  </h3>
                  <div className="w-12 h-1 bg-gold my-4 mx-auto md:mx-0 rounded-full" />
                  <blockquote className="text-lg font-light leading-relaxed text-slate-300 italic">
                    "Our mission is to empower female lawyers to lead with integrity and advocate for gender equality in the legal profession."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Chairperson */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="relative shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple/40 blur-2xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-blue-400/30 animate-rotate-slow" style={{ animationDuration: "35s", animationDirection: "reverse" }}>
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl">
                      <Image src="/imgs/justice lillian.jfif" alt="Hon. Justice Lillian" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" removeWrapper />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg">CHAIRPERSON</div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                    Hon. Prof. Lady Justice <br /><span className="text-slate-400 text-xl font-light">Lillian Tibatemwa Ekirukubinza</span>
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 my-4 mx-auto md:mx-0 rounded-full" />
                  <blockquote className="text-lg font-light leading-relaxed text-slate-300 italic">
                    "To uphold women's human rights is to ensure that every woman and girl lives up to her full potential."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PATRON SECTION */}
      {/* ================================================================== */}
      <section className="py-20 bg-cream relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-purple rounded-full blur-[100px] opacity-30"
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative z-10">
              <div className="relative shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 border-2 border-dashed border-gold relative">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <NextImage src="/imgs/kadaga.jfif" alt="RT. HON. REBECCA ALITWALA KADAGA" fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gold text-navy font-black text-xs px-4 py-1 rounded-full whitespace-nowrap">PATRON</div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-2">RT. HON. REBECCA ALITWALA KADAGA</h3>
                <p className="text-gold font-medium tracking-wide uppercase mb-6 text-sm sm:text-base">First Deputy Prime Minister of Uganda</p>
                <blockquote className="text-xl sm:text-2xl font-serif italic leading-relaxed text-purple-100 mb-8 max-w-2xl">
                  "Empowering women in law is essential for achieving justice and equality in society."
                </blockquote>
                <Button className="bg-white text-navy font-bold rounded-full px-8 py-3 hover:bg-gold hover:text-navy transition-colors">
                  Read Full Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECRETARIAT CAROUSEL */}
      {/* ================================================================== */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-navy text-center"
          >
            FLN Secretariat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 mt-4"
          >
            The dedicated team driving our mission forward
          </motion.p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8"
            animate={{ x: isPaused ? undefined : [0, -50 * secretariatMembers.length + '%'] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {[...secretariatMembers, ...secretariatMembers].map((member, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72 group">
                <div className="h-72 sm:h-80 w-full relative rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <NextImage src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-navy">{member.name}</h3>
                  <p className="text-sm font-medium text-purple uppercase tracking-wider">{member.position}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 italic">(Hover to pause)</p>
      </section>

      {/* ================================================================== */}
      {/* BOARD MEMBERS */}
      {/* ================================================================== */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">FLN Board Members</h2>
            <p className="text-purple-200">Our Board Comprises Highly Skilled and Professional Women</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold shrink-0 relative group-hover:border-white transition-colors">
                    <NextImage src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">{member.name}</h3>
                    <p className="text-xs font-semibold text-gold tracking-wide">{member.position}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ASSOCIATE MEMBERS */}
      {/* ================================================================== */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">Associate Members</h2>
            <div className="w-20 h-1 bg-purple mx-auto rounded-full" />
            <p className="text-slate-500 mt-4">Distinguished professionals supporting our mission</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {associateMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl transition-all"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 relative">
                  <NextImage src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-sm text-slate-600 mt-2">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NEWSLETTER CTA */}
      {/* ================================================================== */}
      <section className="py-24 bg-purple relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-gold font-medium tracking-widest uppercase text-xs">Stay Connected</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-6"
            >
              Join Our Network
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-purple-200 text-base sm:text-lg mb-10"
            >
              Subscribe to receive updates on events, opportunities, and insights from leading female lawyers across Africa.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-purple-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  disabled={isSubmitting}
                />
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button
                type="submit"
                className="bg-gold text-navy font-bold px-8 py-4 h-auto rounded-full hover:bg-amber-400 transition-colors disabled:opacity-50"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : isSuccess ? "Subscribed!" : "Subscribe"}
              </Button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-purple-300/60 text-sm mt-6"
            >
              Join 500+ members already subscribed. Unsubscribe anytime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/imgs/FLN logo-full color.png" alt="FLN" width={48} height={48} className="rounded-xl" />
                <span className="font-heading font-bold text-2xl">FLN</span>
              </div>
              <p className="text-slate-400 mb-6 text-sm sm:text-base">
                Empowering female lawyers to lead, advocate, and transform the legal profession across Africa.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Membership', 'Events', 'Resources', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-slate-400 hover:text-gold transition-colors flex items-center gap-2 group text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Plot 567 Nankulabye, Kampala, Uganda</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span>info@flnuganda.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>+256 XXX XXX XXX</span>
                </li>
              </ul>
            </div>

            {/* Chapters */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Our Chapters</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold">Kampala HQ</p>
                  <p className="text-sm text-slate-400">Uganda</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="font-semibold">Arusha Chapter</p>
                  <p className="text-sm text-slate-400">Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; 2024 Female Lawyers Network. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
