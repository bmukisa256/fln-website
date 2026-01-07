'use client';

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Membership', href: '/membership' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 bg-navy text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative rounded-xl overflow-hidden bg-white">
                <Image src="/imgs/FLN logo-full color.png" alt="FLN" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-xl">FLN</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Empowering female lawyers to lead, advocate, and transform the legal profession across Africa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
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
          <p>&copy; {new Date().getFullYear()} Female Lawyers Network. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
