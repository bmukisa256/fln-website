'use client';

import { Button, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Clock, Gift, GraduationCap, Loader2, Mail, Network, Phone, Sparkles, Star, User, Users, Zap } from "lucide-react";
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

const benefits = [
  { icon: Network, title: "Exclusive Networking", description: "Connect with fellow legal professionals across Africa at exclusive events and meetups." },
  { icon: GraduationCap, title: "Professional Development", description: "Access workshops, seminars, and training programs to advance your career." },
  { icon: Users, title: "Mentorship Programs", description: "Get paired with experienced lawyers who guide your professional journey." },
  { icon: Zap, title: "Advocacy Support", description: "Join our initiatives promoting gender equality in the legal profession." },
  { icon: Mail, title: "Industry Insights", description: "Receive monthly newsletters with the latest legal industry updates and opportunities." },
  { icon: Gift, title: "Member Discounts", description: "Enjoy discounted rates for our annual conference and special events." },
];

const membershipTiers = [
  {
    name: "Student",
    price: "50",
    period: "year",
    description: "For law students beginning their journey",
    features: ["Access to networking events", "Monthly newsletter", "Online resources", "Student mentorship program"],
    color: "navy",
    popular: false,
  },
  {
    name: "Associate",
    price: "100",
    period: "year",
    description: "For early-career legal professionals",
    features: ["All Student benefits", "Professional workshops", "Career guidance sessions", "Event discounts (10%)"],
    color: "purple",
    popular: true,
  },
  {
    name: "Full Member",
    price: "200",
    period: "year",
    description: "For established legal practitioners",
    features: ["All Associate benefits", "VIP event access", "Leadership programs", "Event discounts (25%)", "Exclusive resources"],
    color: "gold",
    popular: false,
  },
];

const faqs = [
  {
    question: "What are the membership fees?",
    answer: "Membership fees vary depending on the type of membership. Student memberships start at $50 per year, associate memberships at $100 per year, and full memberships at $200 per year."
  },
  {
    question: "How often do you host events?",
    answer: "We host various events throughout the year, including monthly networking sessions, quarterly workshops, and an annual conference."
  },
  {
    question: "Can men join the network?",
    answer: "While our primary focus is on supporting women in law, we welcome allies of all genders who are committed to our mission of promoting gender equality in the legal profession."
  },
  {
    question: "How do I renew my membership?",
    answer: "Memberships can be renewed online through your member dashboard or by contacting our secretariat. You'll receive a reminder email before your membership expires."
  },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState("Associate");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Membership" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
                Join Our Network
              </Chip>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Become a{" "}
                <span className="text-gold">Member</span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                Join a vibrant community of female lawyers dedicated to professional excellence, mentorship, and advancing gender equality in the legal profession.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white font-medium">500+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white font-medium">50+ Events/Year</span>
                </div>
              </div>

              <Button
                as="a"
                href="#apply"
                size="lg"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Apply Now
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src="/imgs/FLN logo-full color.png"
                    alt="FLN Membership"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/30 rounded-3xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple/30 rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BENEFITS SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">Why Join Us</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock exclusive opportunities and resources to accelerate your legal career
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-slate-50 rounded-3xl p-8 h-full hover:bg-navy transition-colors duration-500">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500 shadow-sm">
                    <benefit.icon className="w-7 h-7 text-purple group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-white transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-500">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRICING TIERS */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">Pricing</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select the plan that best fits your career stage and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-purple text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </div>
                  </div>
                )}
                <div className={`bg-white rounded-3xl p-8 h-full ${
                  tier.popular ? 'ring-2 ring-purple shadow-xl' : 'shadow-sm'
                }`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    tier.color === 'navy' ? 'bg-navy' : tier.color === 'purple' ? 'bg-purple' : 'bg-gold'
                  }`}>
                    {tier.color === 'navy' ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : tier.color === 'purple' ? (
                      <Users className="w-6 h-6 text-white" />
                    ) : (
                      <Star className="w-6 h-6 text-navy" />
                    )}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-navy mb-2">{tier.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-heading font-bold text-navy">${tier.price}</span>
                    <span className="text-slate-500">/{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${
                          tier.color === 'navy' ? 'text-navy' : tier.color === 'purple' ? 'text-purple' : 'text-gold'
                        }`} />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href="#apply"
                    onClick={() => setSelectedTier(tier.name)}
                    className={`w-full font-medium h-12 rounded-full ${
                      tier.popular
                        ? 'bg-purple text-white hover:bg-navy'
                        : 'bg-slate-100 text-navy hover:bg-navy hover:text-white'
                    } transition-colors`}
                  >
                    Select {tier.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* APPLICATION FORM */}
      {/* ================================================================== */}
      <section id="apply" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">Apply Today</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-6">
                Start Your Membership Journey
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Complete the form to begin your application. Our team will review your details and get back to you within 48 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Quick 2-minute application" },
                  { icon: Check, text: "Response within 48 hours" },
                  { icon: Users, text: "Join 500+ members" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 rounded-3xl p-8 lg:p-10 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">Application Submitted!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for applying. We'll review your application and contact you within 48 hours.
                    </p>
                    <Button
                      as={Link}
                      href="/"
                      className="bg-navy text-white font-medium px-6 h-11 rounded-full"
                    >
                      Back to Home
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-slate-50 rounded-3xl p-8 lg:p-10"
                  >
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Membership Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={selectedTier}
                          onChange={(e) => setSelectedTier(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select Membership Type</option>
                          <option value="Student">Student - $50/year</option>
                          <option value="Associate">Associate - $100/year</option>
                          <option value="Full Member">Full Member - $200/year</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-navy text-white font-bold h-14 rounded-full hover:bg-purple transition-colors mt-4"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>Submit Application</>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ SECTION */}
      {/* ================================================================== */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">Got Questions?</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white rounded-2xl p-6 text-left hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-navy pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-purple shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 mt-4 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
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
              Ready to Transform Your Legal Career?
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Join our community today and connect with hundreds of ambitious female lawyers across Africa.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="#apply"
                size="lg"
                className="bg-white text-purple font-bold px-8 h-14 rounded-full hover:bg-gold hover:text-navy transition-colors"
                endContent={<ArrowRight className="w-5 h-5" />}
              >
                Apply Now
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
