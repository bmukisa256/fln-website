'use client';

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// ============================================================================
// DATA
// ============================================================================

const upcomingEvents = [
  { image: "/imgs/virtaul_session2.jpeg", date: "27th JULY 2024", time: "4:00 PM", name: "Leah Nasasira", title: "Virtual Session" },
  { image: "/imgs/virtaul_session1.jpeg", date: "25th AUGUST 2024", time: "8:00 AM", name: "Daisy Mulamuzi", title: "Virtual Session" },
  { image: "/imgs/virtaul_session3.jpeg", date: "12th SEPTEMBER 2024", time: "8:00 AM", name: "Sandra Nantaba", title: "Virtual Session" },
];

const pastEvents = [
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.42.jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Hope Atuhairwe" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.43 (1).jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Mariam Mbabaali" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.43.jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Dr. Joyce Nalunga Birimumaaso" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.44 (1).jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Dr. Zahara Nampewo" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.44.jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Angelina Namakula Ofwono" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.45 (1).jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Hon. Lady Justice Jane Frances Abodo" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.45.jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Dr. Sylivia Namubiru Mukasa" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.46.jpeg", date: "7th SEPTEMBER 2022", time: "4:00 PM", name: "Dr. Patricia Achan Okiria" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.50 (1).jpeg", date: "23rd SEPTEMBER 2022", time: "4:00 PM", name: "Alice Nakato Lwanga" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.47 (1).jpeg", date: "30th SEPTEMBER 2022", time: "4:00 PM", name: "Cecilia Namuddu Muhwezi" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.48.jpeg", date: "7th OCTOBER 2022", time: "4:00 PM", name: "Hon. Lady Justice Lillian T. Ekirukubinza" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.48 (1).jpeg", date: "14th OCTOBER 2022", time: "4:00 PM", name: "Dr. Sabrina Kitaka" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.49.jpeg", date: "21st OCTOBER 2022", time: "4:00 PM", name: "Dr. Justice Walusimbi-Ngobi" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.49 (1).jpeg", date: "28th OCTOBER 2022", time: "4:00 PM", name: "Sylivia Mbabazi" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.50.jpeg", date: "4th NOVEMBER 2022", time: "4:00 PM", name: "Hon. Lady Justice Julia Sebutinde" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.51 (1).jpeg", date: "18th NOVEMBER 2022", time: "4:00 PM", name: "Mercy Kainobwisho" },
  { image: "/imgs/WhatsApp Image 2023-01-04 at 21.47.52.jpeg", date: "25th NOVEMBER 2022", time: "4:00 PM", name: "Patience T. Rubagumya" },
  { image: "/imgs/corporatewomen.jpg", date: "1st JUNE 2023", time: "5:00 PM", name: "Hilder Bahati Sabiti" },
  { image: "/imgs/essential.png", date: "16th JUNE 2023", time: "4:00 PM", name: "Ivan Baguma" },
  { image: "/imgs/personal fina.jpg", date: "7th JULY 2023", time: "4:00 PM", name: "Angelina Ofwono" },
  { image: "/imgs/pp.jpg", date: "21st JULY 2023", time: "6:00 PM", name: "Dr. Joyce Birimumaaso" },
  { image: "/imgs/journey.jpg", date: "22nd SEPTEMBER 2023", time: "4:00 PM", name: "Penelope Sanyu" },
  { image: "/imgs/century female.jpg", date: "13th OCTOBER 2023", time: "4:00 PM", name: "Daisy Mulamuzi Kasujja" },
  { image: "/imgs/dynamic.jpg", date: "27th OCTOBER 2023", time: "4:00 PM", name: "Fatuma Omar" },
  { image: "/imgs/goodcommun.jpg", date: "3rd NOVEMBER 2023", time: "6:00 PM", name: "Norah Matovu Muwanga" },
  { image: "/imgs/stragtegicnetw.jpg", date: "6th OCTOBER 2023", time: "4:00 PM", name: "Dr. Joyce Birimumaaso" },
  { image: "/imgs/personal dev.jpg", date: "26th AUGUST 2023", time: "8:00 AM", name: "Mr. Venkatesh Kumar" },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Events" />

      {/* ================================================================== */}
      {/* PAGE HEADER */}
      {/* ================================================================== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Events
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Discover Our Upcoming and Past Events
            </p>
          </motion.div>
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
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join us at our upcoming sessions and networking opportunities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group"
              >
                <div className="bg-cream rounded-3xl overflow-hidden h-full hover:shadow-xl transition-shadow duration-500">
                  {/* Event Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-purple text-white px-4 py-2 rounded-xl text-sm font-bold">
                      Upcoming
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-navy mb-2 group-hover:text-purple transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-purple font-medium mb-4">{event.name}</p>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="bg-navy text-white font-medium px-6 rounded-full hover:bg-purple transition-colors"
                      endContent={<ArrowRight className="w-4 h-4" />}
                    >
                      Register Now
                    </Button>
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
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Past Events
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our history of impactful sessions and gatherings
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Event Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-navy text-sm mb-1 group-hover:text-purple transition-colors line-clamp-1">
                      {event.name}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3 h-3 text-gold" />
                      <span>{event.date}</span>
                    </div>
                  </div>
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
              Don't Miss Our Next Event
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Stay connected and be the first to know about upcoming sessions, workshops, and networking opportunities.
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
