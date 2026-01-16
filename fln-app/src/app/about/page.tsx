'use client';

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Globe, Heart, Lightbulb, Quote, Scale, Shield, Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    color: "purple"
  }
];

const milestones = [
  { year: "2022", title: "Foundation", description: "FLN was established in Kampala, Uganda with a vision to empower female lawyers." },
  { year: "2023", title: "Growth", description: "Expanded membership to 500+ lawyers and hosted 30+ professional development events." },
  { year: "2024", title: "Regional Expansion", description: "Opened our second chapter in Arusha, Tanzania, expanding our reach across East Africa." },
];

const leadershipTeam = [
  {
    image: "/imgs/WA-20230216-163939.jpg",
    name: "Leah Nasasira",
    position: "Chief Executive Officer",
    description: "Leah has been at the forefront of FLN since its inception, driving initiatives that promote gender equality in law.",
    accent: "gold"
  },
  {
    image: "/imgs/WA-20230404-110826-1.jpg",
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

const impactStats = [
  { number: "500+", label: "Active Members", icon: Users },
  { number: "50+", label: "Events Hosted", icon: Award },
  { number: "2", label: "Countries", icon: Globe },
  { number: "30+", label: "Expert Speakers", icon: BookOpen },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="About" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
                Est. 2022
              </Chip>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Empowering Women in{" "}
                <span className="text-gold">Law</span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                The Female Lawyers Network is a premier regional organization dedicated to fostering professional growth, advocating for gender equality, and building a supportive community for female lawyers across Africa.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  as={Link}
                  href="/membership"
                  size="lg"
                  className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors"
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Join Our Network
                </Button>
                <Button
                  as={Link}
                  href="/events"
                  size="lg"
                  variant="bordered"
                  className="font-medium px-8 h-14 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  View Events
                </Button>
              </div>
            </motion.div>

            {/* Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/imgs/IMG-20250616-WA0064.jpg"
                    alt="Female Lawyers Network"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-navy">500+</p>
                      <p className="text-sm text-slate-500">Members</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/30 rounded-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple/30 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION & VISION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-navy rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To empower women in the legal profession by providing resources, mentorship, and networking opportunities that foster professional excellence and personal growth. We are committed to breaking barriers and creating pathways for female lawyers to thrive.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-purple rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
                <p className="text-purple-200 leading-relaxed">
                  A world where female lawyers are equally represented at all levels of the legal profession, leading with integrity and shaping a just society. We envision a future where gender is no barrier to success in law.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CORE VALUES */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">What We Stand For</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide our actions and shape our community
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 h-full text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${value.color === 'navy'
                    ? 'bg-navy/10 group-hover:bg-navy'
                    : value.color === 'purple'
                      ? 'bg-purple/10 group-hover:bg-purple'
                      : 'bg-gold/10 group-hover:bg-gold'
                    }`}>
                    <value.icon className={`w-8 h-8 transition-colors duration-300 ${value.color === 'navy'
                      ? 'text-navy group-hover:text-white'
                      : value.color === 'purple'
                        ? 'text-purple group-hover:text-white'
                        : 'text-gold group-hover:text-navy'
                      }`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* JOURNEY/TIMELINE */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">Our Story</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              The FLN Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 ${index === 0 ? 'bg-navy text-white' : index === 1 ? 'bg-purple text-white' : 'bg-gold text-navy'
                      }`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>

                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-navy border-4 border-white shadow transform md:-translate-x-1/2" />

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* IMPACT STATS */}
      {/* ================================================================== */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">The Team</p>
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
                variants={fadeInUp}
                className="group"
              >
                <div className="relative">
                  {/* Image */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm leading-relaxed">{leader.description}</p>
                    </div>

                    {/* Role Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${leader.accent === 'gold'
                      ? 'bg-gold text-navy'
                      : leader.accent === 'purple'
                        ? 'bg-purple text-white'
                        : 'bg-navy text-white'
                      }`}>
                      {leader.position.split(' ')[0]}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-heading font-bold text-navy mb-1 group-hover:text-purple transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{leader.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* QUOTE SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-gold/30 mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-4xl font-heading text-navy leading-relaxed mb-8">
              "Every woman and girl deserves to live up to her full potential. Together, we are building a future where gender is no barrier to success in the legal profession."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/imgs/justice-lillian.jpg"
                  alt="Hon. Justice Lillian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-navy">Hon. Prof. Lady Justice Lillian Tibatemwa Ekirukubinza</p>
                <p className="text-sm text-purple">Chairperson, FLN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our Network?"
        description="Become part of a community dedicated to empowering female lawyers across Africa. Together, we can make a difference."
        primaryBtnText="Become a Member"
        primaryBtnHref="/membership"
        secondaryBtnText="View Our Events"
        secondaryBtnHref="/events"
      />

      <Footer />
    </div>
  );
}
