'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Globe, Loader2, Mail, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// ============================================================================
// DATA
// ============================================================================

const boardMembers = [
  { image: "/imgs/WA-20230105-133100.jpeg", name: "Hon Dr. Joyce Nalunga Birimumaaso", position: "President | Founder", description: "Member, Leadership Code Tribunal." },
  { image: "/imgs/justice-lillian.jfif", name: "Hon Prof. Lady Justice Lillian Tibatemwa Ekirukubinza", position: "Chairperson", description: "Justice of the Supreme Court." },
  { image: "/imgs/jane-abodo.png", name: "Hon. Lady Justice Jane Frances Abodo", position: "Vice Chairperson", description: "Director of Public Prosecutions." },
  { image: "/imgs/WA-20230105-142609.jpeg", name: "Ms. Angelina Namakula Ofwono", position: "Member", description: "Chief Legal, DFCU Bank." },
  { image: "/imgs/WA-20230106-084858.jpeg", name: "Bulya Lillian", position: "Secretary", description: "Managing Partner, L-Bulya & Co. Advocates." },
  { image: "/imgs/PHOTO-2022-06-27-16-56-26.jpg", name: "Hope Atuhairwe Kisitu", position: "Member", description: "Corporation Secretary, Uganda Development Corporation." },
  { image: "/imgs/WA-20230109-152347.jpeg", name: "Anne Abeja", position: "Member", description: "Company Secretary Housing Finance Bank." },
  { image: "/imgs/suz.jpg", name: "Suzan Batuuka", position: "Member", description: "Head Legal Uganda Airlines." },
  { image: "/imgs/joanita.jpg", name: "Joanita Bushara", position: "Member", description: "Managing Partner of Justitia Advocates Private Practice." }
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

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

const ProfileImage = ({
  src,
  alt,
  size = "md",
  accent = "gold"
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  accent?: "gold" | "purple" | "navy";
}) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40"
  };

  const accentColors = {
    gold: "bg-gold",
    purple: "bg-purple",
    navy: "bg-navy"
  };

  return (
    <div className="relative group">
      <div className={`${sizes[size]} relative rounded-2xl overflow-hidden bg-slate-200`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${accentColors[accent]} rounded-tl-xl rounded-br-lg`} />
    </div>
  );
};

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

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
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

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Home" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Content - Takes 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <Chip size="sm" className="bg-purple/10 text-purple font-medium mb-6">
                Est. 2022 — Kampala & Arusha
              </Chip>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 text-navy">
                The Future of{" "}
                <span className="text-purple">Justice</span>{" "}
                is Female
              </h1>

              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                A premier regional network empowering female lawyers across Africa to lead, advocate, and transform the legal profession.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  as={Link}
                  href="/membership"
                  size="lg"
                  className="bg-navy text-white font-medium px-8 h-14 rounded-full hover:bg-purple transition-colors"
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Become a Member
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  size="lg"
                  variant="bordered"
                  className="font-medium px-8 h-14 rounded-full border-2 border-slate-200 hover:border-navy transition-colors"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-10 lg:gap-12">
                <div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-navy">
                    <AnimatedCounter target={500} suffix="+" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Members</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-purple">
                    <AnimatedCounter target={2} />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Chapters</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-gold">
                    <AnimatedCounter target={50} suffix="+" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Events</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Composition - Takes 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
                  <Image
                    src="/imgs/IMG-20250616-WA0064.jpg"
                    alt="Female Lawyers Network"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gold rounded-2xl -z-10" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-purple/20 rounded-2xl -z-10" />

                {/* Floating Card - President */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 lg:-left-8 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden relative bg-slate-200">
                    <Image src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg" alt="President" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-xs">Hon. Dr. Joyce</p>
                    <p className="text-[10px] text-gold font-medium">President</p>
                  </div>
                </motion.div>

                {/* Floating Card - Chairperson */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-4 lg:-right-8 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden relative bg-slate-200">
                    <Image src="/imgs/justice-lillian.jfif" alt="Chairperson" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-xs">Justice Lillian</p>
                    <p className="text-[10px] text-purple font-medium">Chairperson</p>
                  </div>
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 bg-navy text-white p-4 rounded-2xl shadow-xl hidden sm:block"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gold">2+</p>
                    <p className="text-[10px] text-slate-300 uppercase tracking-wider">Years</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PILLARS SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Our Pillars of Impact
            </h2>
            <p className="text-lg text-slate-600">
              Three core pillars designed to transform the legal landscape for women across Africa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Pillar 1 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-slate-50 rounded-3xl p-8 h-full hover:bg-navy transition-colors duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                  <Globe className="w-7 h-7 text-navy group-hover:text-navy" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-white transition-colors duration-500">
                  Global Advocacy
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-500">
                  Taking our mission beyond borders, partnering with international organizations for gender equality.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors duration-500">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-purple rounded-3xl p-8 h-full">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Integrity First
                </h3>
                <p className="text-purple-200">
                  Upholding the highest moral and ethical standards in every case and interaction.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-slate-50 rounded-3xl p-8 h-full hover:bg-gold transition-colors duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-500">
                  <Users className="w-7 h-7 text-navy group-hover:text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-navy transition-colors duration-500">
                  Mentorship
                </h3>
                <p className="text-slate-600 group-hover:text-navy/70 transition-colors duration-500">
                  Connecting junior lawyers with experienced leaders to accelerate career growth.
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-navy transition-colors duration-500">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-3">Leadership</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy">
              Voices of Authority
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* President */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <ProfileImage
                  src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg"
                  alt="Hon. Dr. Joyce Nalunga Birimumaaso"
                  size="xl"
                  accent="gold"
                />
                <div>
                  <div className="inline-block bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                    President
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-1">
                    Hon. Dr. Joyce Nalunga
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">Birimumaaso</p>
                  <p className="text-slate-600 italic">
                    "Our mission is to empower female lawyers to lead with integrity."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chairperson */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <ProfileImage
                  src="/imgs/justice-lillian.jfif"
                  alt="Hon. Prof. Lady Justice Lillian"
                  size="xl"
                  accent="purple"
                />
                <div>
                  <div className="inline-block bg-purple/10 text-purple text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Chairperson
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-1">
                    Hon. Justice Lillian
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">Tibatemwa Ekirukubinza</p>
                  <p className="text-slate-600 italic">
                    "Every woman and girl deserves to live up to her full potential."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PATRON SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 relative rounded-3xl overflow-hidden bg-slate-700">
                    <Image src="/imgs/kadaga.jfif" alt="RT. HON. REBECCA ALITWALA KADAGA" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-xl" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple rounded-lg" />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-block bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                  Patron
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                  Rt. Hon. Rebecca Alitwala Kadaga
                </h3>
                <p className="text-gold font-medium mb-6">
                  First Deputy Prime Minister of Uganda
                </p>
                <blockquote className="text-xl text-slate-300 italic leading-relaxed mb-8">
                  "Empowering women in law is essential for achieving justice and equality in society."
                </blockquote>
                <Button className="bg-white text-navy font-medium px-6 h-11 rounded-full hover:bg-gold transition-colors">
                  Read Full Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BOARD MEMBERS */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Board Members
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Highly skilled and professional women leading our organization
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group text-center"
              >
                <div className="mb-4 flex justify-center">
                  <ProfileImage
                    src={member.image}
                    alt={member.name}
                    size="lg"
                    accent={index === 0 ? "gold" : index === 1 ? "purple" : "navy"}
                  />
                </div>
                <h3 className="font-bold text-navy text-sm lg:text-base mb-1 group-hover:text-purple transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-purple font-medium mb-1">{member.position}</p>
                <p className="text-xs text-slate-500 hidden sm:block">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECRETARIAT */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">The Team</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy">
              FLN Secretariat
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {secretariatMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                </div>
                <h3 className="font-bold text-navy text-sm lg:text-base">{member.name}</h3>
                <p className="text-xs text-slate-500">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ASSOCIATE MEMBERS */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-navy uppercase tracking-wider mb-3">Supporting Our Mission</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy">
              Associate Members
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {associateMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group text-center"
              >
                <div className="mb-3 flex justify-center">
                  <ProfileImage src={member.image} alt={member.name} size="md" accent="navy" />
                </div>
                <h3 className="font-bold text-navy text-sm mb-0.5">{member.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NEWSLETTER CTA */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-purple">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-white/80 text-sm font-medium">Stay Updated</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Join Our Newsletter
            </h2>

            <p className="text-purple-200 mb-10">
              Get updates on events, opportunities, and insights from leading female lawyers across Africa.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-purple-300 focus:outline-none focus:border-white transition-colors"
                  disabled={isSubmitting}
                />
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button
                type="submit"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe"}
              </Button>
            </form>

            <p className="text-purple-300/60 text-sm mt-6">
              Join 500+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
