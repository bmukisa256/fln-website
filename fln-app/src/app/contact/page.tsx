'use client';

import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send, MessageSquare, User, AtSign, FileText, CheckCircle, Loader2 } from "lucide-react";
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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Plot 567, Nankulabye", "Kampala, Uganda"],
    color: "bg-purple/10 text-purple",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+256 755 999 544"],
    link: "tel:+256755999544",
    color: "bg-gold/20 text-gold",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["femalelawyersnetwork@gmail.com"],
    link: "mailto:femalelawyersnetwork@gmail.com",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    color: "bg-green-100 text-green-600",
  },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
      <Navbar activePage="Contact" />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 bg-navy relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

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
              <MessageSquare className="w-10 h-10 text-gold" />
            </motion.div>

            <Chip size="sm" className="bg-gold text-navy font-bold mb-6">
              Get In Touch
            </Chip>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT INFO CARDS */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-white relative">
        {/* Overlap effect */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-navy" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {item.title}
                  </h3>

                  {item.details.map((detail, i) => (
                    item.link ? (
                      <a
                        key={i}
                        href={item.link}
                        className="block text-slate-600 hover:text-purple transition-colors text-sm"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-slate-600 text-sm">
                        {detail}
                      </p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT FORM & MAP */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="mb-8">
                <p className="text-sm font-medium text-purple uppercase tracking-wider mb-2">
                  Send a Message
                </p>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-200 text-navy placeholder:text-slate-400 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-bold h-14 rounded-xl text-base transition-all ${
                    isSuccess
                      ? "bg-green-500 text-white"
                      : "bg-navy text-white hover:bg-purple"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7574459768847!2d32.55669131475395!3d0.3475799997476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0b0b0b0b0b%3A0x0!2sNankulabye%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FLN Office Location"
                />
              </div>

              {/* Quick Info Card */}
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Urgent Matters</p>
                      <a href="tel:+256755999544" className="font-medium hover:text-gold transition-colors">
                        +256 755 999 544
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">General Inquiries</p>
                      <a href="mailto:femalelawyersnetwork@gmail.com" className="font-medium hover:text-gold transition-colors text-sm">
                        femalelawyersnetwork@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-heading font-bold text-navy mb-4">
                  Connect With Us
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Follow us on social media for updates and news.
                </p>
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-navy hover:text-white transition-all"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ TEASER */}
      {/* ================================================================== */}
      <section className="py-20 lg:py-24 bg-purple relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Have More Questions?
            </h2>

            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Check out our membership page for frequently asked questions about joining the Female Lawyers Network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="/membership"
                className="bg-gold text-navy font-bold px-8 h-14 rounded-full hover:bg-white transition-colors text-base"
              >
                View Membership FAQ
              </Button>
              <Button
                as="a"
                href="/about"
                className="bg-transparent border-2 border-white text-white font-bold px-8 h-14 rounded-full hover:bg-white hover:text-purple transition-colors text-base"
              >
                Learn About FLN
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
