'use client';

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
    title: string;
    description: string;
    primaryBtnText: string;
    primaryBtnHref: string;
    secondaryBtnText?: string;
    secondaryBtnHref?: string;
    bgClass?: string;
}

export default function CTASection({
    title,
    description,
    primaryBtnText,
    primaryBtnHref,
    secondaryBtnText,
    secondaryBtnHref,
    bgClass = "bg-purple"
}: CTASectionProps) {
    return (
        <section className={`py-24 lg:py-32 ${bgClass} relative overflow-hidden`}>
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
                        {title}
                    </h2>

                    <p className="text-xl text-white/80 mb-10 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            as={primaryBtnHref.startsWith('#') ? "a" : Link}
                            href={primaryBtnHref}
                            size="lg"
                            className="bg-white text-navy font-bold px-8 h-14 rounded-full hover:bg-gold transition-colors"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            {primaryBtnText}
                        </Button>

                        {secondaryBtnText && secondaryBtnHref && (
                            <Button
                                as={Link}
                                href={secondaryBtnHref}
                                size="lg"
                                variant="bordered"
                                className="font-medium px-8 h-14 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                            >
                                {secondaryBtnText}
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
