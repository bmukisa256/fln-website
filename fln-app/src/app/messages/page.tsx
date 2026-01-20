'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function MessagesPage() {
    return (
        <div className="min-h-screen bg-cream text-navy overflow-x-hidden font-body">
            <Navbar activePage="About" />

            <PageHero
                centered
                badge="Leadership Voices"
                title="Messages from Our Leaders"
                description="Guidance, vision, and inspiration from the executives steering the Female Lawyers Network."
            >
                <div className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-10 h-10 text-gold" />
                </div>
            </PageHero>

            {/* President's Message */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/imgs/WA-20230105-133100.jpeg"
                                    alt="Hon. Dr. Joyce Nalunga Birimumaaso"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-2xl font-bold font-heading mb-1">Hon. Dr. Joyce Nalunga Birimumaaso</h3>
                                    <p className="text-gold font-medium">President & Founder</p>
                                </div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-gold/30 rounded-3xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-6">
                                <span className="text-sm font-bold text-purple uppercase tracking-wider">Message from the President</span>
                                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mt-2 mb-6">
                                    Empowering Women for a Just World
                                </h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p className="mb-4">
                                    "It is a delight to bring to you the good news from the Female Lawyers’ Network (FLN) of empowered female lawyers and the girl child in a gender-equal and just world.
                                </p>
                                <p className="mb-4">
                                    FLN is alive to the fact that gender equality is pivotal to sustainable development, not only in Uganda but globally. This is why we focus on core values such as:
                                </p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li><strong>Gender Equality</strong></li>
                                    <li><strong>Good Stewardship</strong></li>
                                    <li><strong>Empowerment</strong></li>
                                    <li><strong>Collaboration</strong></li>
                                </ul>
                                <p className="mb-4">
                                    These values benefit not only female lawyers but also the girl child in general. Once empowered, women can significantly contribute to decision-making processes, thereby eradicating gender inequalities and injustices."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chairperson's Message */}
            <section className="py-20 lg:py-24 bg-cream">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="mb-6">
                                <span className="text-sm font-bold text-purple uppercase tracking-wider">Message from the Chairperson</span>
                                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mt-2 mb-6">
                                    Innovation for Gender Equality
                                </h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p className="mb-4">
                                    "To uphold women’s human rights is to ensure that every woman and girl lives up to her full potential. This year, we celebrated International Women’s Day under the theme 'DigitALL: Innovation and technology for gender equality'.
                                </p>
                                <p className="mb-4">
                                    We aim to empower young girls who intend to influence the world through law so they are not left behind.
                                </p>
                                <p className="mb-4">
                                    I invite you to search within and ask how you can facilitate a young girl in achieving her dreams. Join us in our mission to eradicate gender injustices and promote women’s rights."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/imgs/justice-lillian.jpg"
                                    alt="Hon Prof. Lady Justice Lillian Tibatemwa Ekirukubinza"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-2xl font-bold font-heading mb-1">Hon. Prof. Lady Justice Lillian Tibatemwa</h3>
                                    <p className="text-gold font-medium">Chairperson</p>
                                </div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-purple/30 rounded-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Patron's Message (Placeholder/Quote based on availability) */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gold shadow-lg">
                            <Image
                                src="/imgs/kadaga.jpg"
                                alt="Rt. Hon. Rebecca Alitwala Kadaga"
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-navy mb-2">Rt. Hon. Rebecca Alitwala Kadaga</h2>
                        <p className="text-purple font-medium mb-8">Patron (FLN)</p>

                        <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
                        <blockquote className="text-2xl lg:text-3xl font-heading text-slate-700 leading-relaxed italic">
                            "Empowering women in law is essential for achieving justice and equality in society."
                        </blockquote>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
