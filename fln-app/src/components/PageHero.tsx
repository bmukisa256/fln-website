'use client';

import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface PageHeroProps {
    badge: string;
    title: ReactNode;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    children?: ReactNode;
    gradientClass?: string;
    centered?: boolean;
}

export default function PageHero({
    badge,
    title,
    description,
    imageSrc,
    imageAlt,
    children,
    gradientClass = "from-purple/20 via-transparent to-transparent",
    centered = false
}: PageHeroProps) {
    return (
        <section className="pt-28 lg:pt-32 bg-navy relative overflow-hidden">
            <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${gradientClass}`} />

            <div className="container mx-auto px-6 lg:px-12 relative">
                {centered ? (
                    <div className="py-16 lg:py-24 text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Chip size="sm" className="bg-gold text-navy font-bold mb-6 uppercase tracking-wider">
                                {badge}
                            </Chip>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {title}
                            </h1>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {description}
                            </p>

                            {children}
                        </motion.div>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Chip size="sm" className="bg-gold text-navy font-bold mb-6 uppercase tracking-wider">
                                {badge}
                            </Chip>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {title}
                            </h1>

                            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                                {description}
                            </p>

                            {children}
                        </motion.div>

                        {/* Image */}
                        {imageSrc && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative aspect-square max-w-md mx-auto">
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <Image
                                            src={imageSrc}
                                            alt={imageAlt || "Hero Image"}
                                            fill
                                            className="object-contain p-8"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/30 rounded-3xl -z-10" />
                                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple/30 rounded-3xl -z-10" />
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
