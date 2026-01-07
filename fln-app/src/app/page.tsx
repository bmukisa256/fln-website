'use client';

import { Button, Chip, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden font-body">

      {/* Floating Modern Navbar */}
      <Navbar
        maxWidth="2xl"
        className="bg-white/50 backdrop-blur-xl border-b border-white/20 fixed top-0 w-full z-50 h-20"
        classNames={{
          wrapper: "px-6 sm:px-12"
        }}
      >
        <NavbarBrand>
          <Image src="/imgs/FLN logo-full color.png" alt="FLN Logo" width={40} height={40} className="rounded-xl mr-3" />
          <p className="font-heading font-bold text-xl tracking-tight text-navy">FLN</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {['Home', 'About Us', 'Events', 'Membership'].map((item) => (
            <NavbarItem key={item}>
              <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-base text-slate-500 hover:text-navy font-medium transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/membership"
            className="bg-navy text-white font-medium px-8 py-6 rounded-full shadow-xl shadow-[#0F172A]/10 hover:shadow-[#0F172A]/20 transition-all hover:scale-105"
          >
            Join Network
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Asymmetric Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-slate-100/50 -skew-x-12 origin-top translate-x-32" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl opacity-60" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Typography Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Chip size="sm" variant="flat" color="warning" className="bg-amber-100 text-amber-800 font-semibold px-2">FLN • EST 2022</Chip>
                <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Redefining Excellence</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-heading font-bold leading-[1.1] mb-8 text-navy">
                The Future <br />
                of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 italic pr-2">Justice</span>
                is Female.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
                We are a powerful collective of female legal professionals dedicated to leadership, stewardship, and gender equity.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-navy text-white font-medium px-10 py-7 text-lg rounded-2xl">
                  Become a Member <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex -space-x-4 pl-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-bold shadow-sm">
                    500+
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual / Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[700px] hidden lg:block"
            >
              <div className="relative w-full h-full">
                <motion.div style={{ y }} className="absolute right-0 top-10 w-4/5 h-[85%] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20">
                  <Image
                    removeWrapper
                    src="/imgs/IMG-20250616-WA0064.jpg"
                    alt="Female Lawyers Network"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-heading font-bold text-3xl">Empower.</p>
                    <p className="font-light">Elevate your legal career.</p>
                  </div>
                </motion.div>

                {/* Floating Card - President Preview */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute bottom-32 -left-6 bg-white p-4 rounded-2xl shadow-xl max-w-xs border border-slate-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                    <Image src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg" alt="President" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Hon. Dr. Joyce</p>
                    <p className="text-xs text-gold font-semibold">PRESIDENT</p>
                  </div>
                </motion.div>

                {/* Floating Card - Chairperson Preview */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="absolute top-32 -left-4 bg-white p-4 rounded-2xl shadow-xl max-w-xs border border-slate-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-900">
                    <Image src="/imgs/justice lillian.jfif" alt="Chairperson" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Hon. Justice Lillian</p>
                    <p className="text-xs text-blue-900 font-semibold">CHAIRPERSON</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">Our Pillars of <br /> <span className="italic text-slate-400">Impact.</span></h2>
            </div>
            <p className="max-w-md text-slate-600 text-lg">We structure our impact through three core pillars designed to transform the legal landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px] w-full">

            {/* Large Card (Left) */}
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 bg-[#F8F9FA] rounded-[2.5rem] p-10 relative overflow-hidden group border border-slate-100"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <Globe className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-navy mb-3">Global Advocacy</h3>
                  <p className="text-lg text-slate-600 max-w-sm">We take our mission beyond borders, partnering with international organizations to fight for gender equality worldwide.</p>

                  <Button variant="light" className="mt-8 pl-0 text-lg font-medium hover:gap-4 transition-all" endContent={<ArrowUpRight />}>
                    Explore Initiatives
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-200/50 to-transparent transform translate-x-20 group-hover:translate-x-10 transition-transform duration-700" />
            </motion.div>

            {/* Top Right Card */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="bg-navy rounded-[2.5rem] p-8 text-white relative overflow-hidden md:col-span-1"
            >
              <Shield className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2">Integrity First</h3>
              <p className="text-slate-300 text-sm">Upholding the highest moral standards in every case.</p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="bg-amber-100 rounded-[2.5rem] p-8 relative overflow-hidden md:col-span-1 border border-amber-200"
            >
              <Users className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2 text-amber-900">Mentorship</h3>
              <p className="text-amber-800/80 text-sm">Connecting junior lawyers with industry giants.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Leadership Section - Redesigned for better image fit */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">Guided by Excellence</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">Voices of Authority</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Leader 1: President */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Image Frame - Smaller to hide low res */}
                <div className="relative shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-gold/30">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl relative z-10">
                      <Image
                        src="/imgs/WhatsApp Image 2023-01-05 at 13.31.00.jpeg"
                        alt="Hon. Dr. Joyce Nalunga Birimumaaso"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        removeWrapper
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-gold text-navy font-bold text-xs px-3 py-1 rounded-full shadow-lg transform translate-x-1/4 -translate-y-1/4">
                    PRESIDENT
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                    Hon. Dr. Joyce <br />
                    <span className="text-slate-400 text-xl font-light">Nalunga Birimumaaso</span>
                  </h3>
                  <div className="w-12 h-1 bg-gold my-4 mx-auto md:mx-0 rounded-full" />
                  <blockquote className="text-lg font-light leading-relaxed text-slate-300 italic">
                    "Our mission is to empower female lawyers to lead with integrity and advocate for gender equality in the legal profession."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Leader 2: Chairperson */}
            <div className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Image Frame */}
                <div className="relative shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-blue-400/30">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-2xl relative z-10">
                      <Image
                        src="/imgs/justice lillian.jfif"
                        alt="Hon. Prof. Lady Justice Lillian Tibatemwa Ekirukubinza"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        removeWrapper
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg transform translate-x-1/4 -translate-y-1/4">
                    CHAIRPERSON
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                    Hon. Prof. Lady Justice <br />
                    <span className="text-slate-400 text-xl font-light">Lillian Tibatemwa Ekirukubinza</span>
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 my-4 mx-auto md:mx-0 rounded-full" />
                  <blockquote className="text-lg font-light leading-relaxed text-slate-300 italic">
                    "To uphold women’s human rights is to ensure that every woman and girl lives up to her full potential."
                  </blockquote>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h4 className="font-heading font-bold text-2xl text-navy mb-2">Female Lawyers Network</h4>
              <p className="text-slate-500">Plot 567 Nankulabye, Kampala</p>
            </div>
            <div className="text-[100px] md:text-[150px] font-heading font-black text-slate-50 opacity-50 leading-none select-none pointer-events-none">
              FLN
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-slate-100/50 text-sm text-slate-400">
            <p>&copy; 2024 FLN. Crafted with intention.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#0F172A] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#0F172A] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#0F172A] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
