"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
    const controls = useAnimation();
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll-driven transforms for decorative blobs
    const { scrollY } = useScroll();
    const blobY = useTransform(scrollY, [0, 300], [0, 150]);
    const blobOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = document.querySelector("#how-it-works");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 py-24 dark:from-slate-900 dark:to-slate-800">
            {/* Decorative background blobs */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-400/40 blur-3xl dark:bg-primary-500/30"
                style={{ y: blobY, opacity: blobOpacity }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/40 blur-3xl dark:bg-fuchsia-500/30"
                style={{ y: blobY, opacity: blobOpacity }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="container mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="mx-auto max-w-4xl text-center">
                    {/* Subtitle badge */}
                    <motion.div variants={itemVariants} className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/70 px-4 py-1 text-sm text-primary-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-primary-300">
                        Premium Web Agency
                    </motion.div>

                    {/* Headline with word-by-word animation */}
                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                        <motion.span
                            className="block"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                        KreativeKommit builds
                        </motion.span>
                        <motion.span
                            className="block text-primary-600"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                        >
                          fast, SEO-optimized
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
                        >
                           web experiences that drive real results.
                        </motion.span>
                    </h1>

                    {/* Description */}
                    <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        We build high-performance, SEO-optimized experiences that drive real results.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-x-4">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Button asChild size="lg" className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700">
                                <Link href="/contact">
                                    Start Your Project
                                    <motion.span
                                        className="inline-flex"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.span>
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button
  asChild
  size="lg"
  variant="outline"
  className="backdrop-blur-md bg-purple-500/20 text-white border-purple-500/30 hover:bg-purple-500/30 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/30 transition-colors"
>
  <Link href="#how-it-works" onClick={handleLearnMore}>
    Learn More
  </Link>
</Button>

                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
                <motion.div
                    className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-400/50 p-1 dark:border-slate-200/20"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div
                        className="h-2 w-1 rounded-full bg-slate-500 dark:bg-slate-300"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}


