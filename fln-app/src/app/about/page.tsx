'use client';

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Scale, Shield, Users } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
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
  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="About" />

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

      <Footer />
    </div>
  );
}
