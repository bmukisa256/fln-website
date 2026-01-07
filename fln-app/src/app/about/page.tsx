'use client';

import { Button, Chip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Globe, Heart, Lightbulb, Mail, MapPin, Menu, Phone, Scale, Shield, Twitter, Linkedin, Instagram, Users, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ============================================================================
// DATA
// ============================================================================

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding honesty and strong moral principles in all our endeavors.",
    color: "navy"
  },
  {
    icon: Scale,
    title: "Excellence",
    description: "Striving for the highest standards in our services and initiatives.",
    color: "purple"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with partners and members to achieve common goals.",
    color: "gold"
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Creating an environment where every woman feels valued and supported.",
    color: "navy"
  }
];

const leadershipTeam = [
  {
    image: "/imgs/WhatsApp Image 2023-02-16 at 16.39.39.jpg",
    name: "Leah Nasasira",
    position: "Chief Executive Officer",
    description: "Leah has been at the forefront of FLN since its inception, driving initiatives that promote gender equality in law.",
    accent: "gold"
  },
  {
    image: "/imgs/WhatsApp Image 2023-04-04 at 11.08.26 (1).jpg",
    name: "Sandra Nantaba",
    position: "Executive Coordinator",
    description: "Sandra oversees FLN's day-to-day operations, ensuring our programs are executed effectively and efficiently.",
    accent: "purple"
  },
  {
    image: "/imgs/daisy.jpg",
    name: "Daisy Mulamuzi Kasujja",
    position: "Strategic Advisor",
    description: "Daisy provides strategic guidance to FLN, helping to shape our long-term goals and initiatives.",
    accent: "navy"
  }
];

const navLinks = ['Home', 'About', 'Events', 'Membership'];

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
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  accent?: "gold" | "purple" | "navy";
}) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
    "2xl": "w-48 h-48"
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

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">

      {/* ================================================================== */}
      {/* NAVBAR */}
      {/* ================================================================== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-xl overflow-hidden">
                <Image src="/imgs/FLN logo-full color.png" alt="FLN" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-xl text-navy">FLN</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    item === 'About'
                      ? 'text-navy bg-slate-100'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                as={Link}
                href="/membership"
                className="hidden sm:flex bg-navy text-white font-medium px-6 h-11 rounded-full hover:bg-purple transition-colors"
              >
                Join Network
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className={`block py-3 px-4 text-lg font-medium rounded-xl transition-colors ${
                        item === 'About' ? 'text-navy bg-slate-50' : 'text-navy hover:bg-slate-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <Button as={Link} href="/membership" className="w-full mt-4 bg-navy text-white font-medium h-12 rounded-full">
                    Join Network
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ================================================================== */}
      {/* PAGE HEADER */}
      {/* ================================================================== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <Chip size="sm" className="bg-white/10 text-white font-medium mb-6">
              About FLN
            </Chip>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              About Us
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Empowering Women in Law for a Brighter Tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-slate-200">
                  <Image
                    src="/imgs/FLN logo-full color.png"
                    alt="FLN Mission"
                    fill
                    className="object-contain p-12"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple/10 rounded-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-3xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-purple" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
                  Our Mission & Values
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                The Female Lawyers Network (FLN) is dedicated to empowering women in the legal profession,
                fostering professional growth, and advocating for gender equality in the legal field. Our core
                values guide everything we do.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-cream transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      value.color === 'navy' ? 'bg-navy' : value.color === 'purple' ? 'bg-purple' : 'bg-gold'
                    }`}>
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">{value.title}</h3>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the dedicated team driving our mission forward
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 text-center h-full hover:shadow-xl transition-shadow duration-500">
                  {/* Image */}
                  <div className="mb-6 flex justify-center">
                    <ProfileImage
                      src={leader.image}
                      alt={leader.name}
                      size="2xl"
                      accent={leader.accent as "gold" | "purple" | "navy"}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-navy mb-2 group-hover:text-purple transition-colors">
                    {leader.name}
                  </h3>

                  <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                    leader.accent === 'gold'
                      ? 'bg-gold/10 text-gold'
                      : leader.accent === 'purple'
                        ? 'bg-purple/10 text-purple'
                        : 'bg-navy/10 text-navy'
                  }`}>
                    {leader.position}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-purple">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Join Our Network?
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Become part of a community dedicated to empowering female lawyers across Africa.
              Together, we can make a difference.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as={Link}
                href="/membership"
                size="lg"
                className="bg-white text-purple font-bold px-8 h-14 rounded-full hover:bg-gold hover:text-navy transition-colors"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Become a Member
              </Button>
              <Button
                as={Link}
                href="/events"
                size="lg"
                variant="bordered"
                className="font-medium px-8 h-14 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                View Our Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-16 lg:py-20 bg-navy text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 relative rounded-xl overflow-hidden bg-white">
                  <Image src="/imgs/FLN logo-full color.png" alt="FLN" fill className="object-cover" />
                </div>
                <span className="font-heading font-bold text-xl">FLN</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 max-w-xs">
                Empowering female lawyers to lead, advocate, and transform the legal profession across Africa.
              </p>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {['About Us', 'Membership', 'Events', 'Resources', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-gold transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Plot 567 Nankulabye, Kampala, Uganda</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>info@flnuganda.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>+256 XXX XXX XXX</span>
                </li>
              </ul>
            </div>

            {/* Chapters */}
            <div>
              <h4 className="font-bold mb-5">Chapters</h4>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-medium text-sm">Kampala HQ</p>
                  <p className="text-xs text-slate-400">Uganda</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-medium text-sm">Arusha</p>
                  <p className="text-xs text-slate-400">Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2024 Female Lawyers Network. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
