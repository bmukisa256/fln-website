'use client';

import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, MapPin, Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ============================================================================
// DATA
// ============================================================================

const featuredEvent = {
  image: "/imgs/virtaul_session2.jpeg",
  date: "27th JULY 2024",
  time: "4:00 PM",
  speaker: "Leah Nasasira",
  title: "Leadership in Modern Legal Practice",
  description: "Join us for an insightful session on navigating leadership challenges in today's evolving legal landscape.",
  location: "Virtual (Zoom)",
};

const upcomingEvents = [
  { image: "/imgs/virtaul_session1.jpeg", date: "25th AUG", year: "2024", time: "8:00 AM", speaker: "Daisy Mulamuzi", title: "Women in Corporate Law" },
  { image: "/imgs/virtaul_session3.jpeg", date: "12th SEP", year: "2024", time: "8:00 AM", speaker: "Sandra Nantaba", title: "Building Your Legal Network" },
];

const pastEventsByYear = {
  "2023": [
    { image: "/imgs/corporatewomen.jpg", date: "1st JUN", speaker: "Hilder Bahati Sabiti", title: "Corporate Women Summit" },
    { image: "/imgs/essential.png", date: "16th JUN", speaker: "Ivan Baguma", title: "Essential Legal Skills" },
    { image: "/imgs/personal fina.jpg", date: "7th JUL", speaker: "Angelina Ofwono", title: "Personal Finance for Lawyers" },
    { image: "/imgs/pp.jpg", date: "21st JUL", speaker: "Dr. Joyce Birimumaaso", title: "Professional Development" },
    { image: "/imgs/journey.jpg", date: "22nd SEP", speaker: "Penelope Sanyu", title: "The Legal Journey" },
    { image: "/imgs/century female.jpg", date: "13th OCT", speaker: "Daisy Mulamuzi Kasujja", title: "21st Century Female Lawyer" },
    { image: "/imgs/dynamic.jpg", date: "27th OCT", speaker: "Fatuma Omar", title: "Dynamic Leadership" },
    { image: "/imgs/goodcommun.jpg", date: "3rd NOV", speaker: "Norah Matovu Muwanga", title: "Communication Excellence" },
    { image: "/imgs/stragtegicnetw.jpg", date: "6th OCT", speaker: "Dr. Joyce Birimumaaso", title: "Strategic Networking" },
    { image: "/imgs/personal dev.jpg", date: "26th AUG", speaker: "Mr. Venkatesh Kumar", title: "Personal Development" },
  ],
  "2022": [
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.42.jpeg", date: "7th SEP", speaker: "Hope Atuhairwe", title: "Legal Excellence" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.43 (1).jpeg", date: "7th SEP", speaker: "Mariam Mbabaali", title: "Advocacy Skills" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.43.jpeg", date: "7th SEP", speaker: "Dr. Joyce Nalunga Birimumaaso", title: "Leadership Forum" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.44 (1).jpeg", date: "7th SEP", speaker: "Dr. Zahara Nampewo", title: "Legal Research" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.44.jpeg", date: "7th SEP", speaker: "Angelina Namakula Ofwono", title: "Corporate Law" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.45 (1).jpeg", date: "7th SEP", speaker: "Hon. Lady Justice Jane Frances Abodo", title: "Justice & Integrity" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.48.jpeg", date: "7th OCT", speaker: "Hon. Lady Justice Lillian T. Ekirukubinza", title: "Judicial Excellence" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.50.jpeg", date: "4th NOV", speaker: "Hon. Lady Justice Julia Sebutinde", title: "International Law" },
    { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.52.jpeg", date: "25th NOV", speaker: "Patience T. Rubagumya", title: "Legal Practice" },
  ],
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function EventsPage() {
  const [activeYear, setActiveYear] = useState<string>("2023");
  const years = Object.keys(pastEventsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Events" />

      {/* ================================================================== */}
      {/* FEATURED EVENT HERO */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
                Featured Event
              </Chip>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                {featuredEvent.title}
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {featuredEvent.description}
              </p>

              {/* Event Details */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-white text-sm">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-white text-sm">{featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-white text-sm">{featuredEvent.location}</span>
                </div>
              </div>

              {/* Speaker */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-purple/30 flex items-center justify-center">
                  <span className="text-white font-bold">{featuredEvent.speaker.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{featuredEvent.speaker}</p>
                  <p className="text-slate-400 text-sm">Speaker</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Register Now
              </Button>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-navy ml-1" fill="currentColor" />
                  </motion.button>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/30 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* UPCOMING EVENTS */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">Coming Soon</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
                More Upcoming Events
              </h2>
            </div>
            <Link href="#" className="flex items-center gap-2 text-purple font-medium hover:gap-3 transition-all">
              View Calendar <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="flex bg-slate-50 rounded-2xl overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Date Block */}
                  <div className="w-28 shrink-0 bg-navy flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-2xl font-bold text-white">{event.date.split(' ')[0]}</span>
                    <span className="text-sm text-gold font-medium">{event.date.split(' ')[1]}</span>
                    <span className="text-xs text-slate-400 mt-1">{event.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-heading font-bold text-navy mb-1 group-hover:text-purple transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">by {event.speaker}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-32 shrink-0 relative hidden sm:block">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PAST EVENTS */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">Our History</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-8">
              Past Events
            </h2>

            {/* Year Tabs */}
            <div className="flex justify-center gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeYear === year
                      ? 'bg-navy text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
          >
            {pastEventsByYear[activeYear as keyof typeof pastEventsByYear].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={event.image}
                    alt={event.speaker}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Date badge */}
                  <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-xs font-bold text-navy">{event.date}</span>
                  </div>

                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm line-clamp-2">{event.title}</p>
                  </div>
                </div>
                <h3 className="font-medium text-navy text-sm line-clamp-1 group-hover:text-purple transition-colors">
                  {event.speaker}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATS SECTION */}
      {/* ================================================================== */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Events Hosted" },
              { number: "2K+", label: "Attendees" },
              { number: "30+", label: "Expert Speakers" },
              { number: "2", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Never Miss an Event
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Join our network and get exclusive access to all upcoming events, workshops, and networking sessions.
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
                href="/contact"
                size="lg"
                variant="bordered"
                className="font-medium px-8 h-14 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
