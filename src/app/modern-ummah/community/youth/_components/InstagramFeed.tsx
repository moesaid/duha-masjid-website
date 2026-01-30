'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
    { id: 1, image: '/images/halaqa-circle.jpg', alt: 'Youth halaqa gathering' },
    { id: 2, image: '/images/mosque-community.jpg', alt: 'Community iftar' },
    { id: 3, image: '/images/sisters-gathering.jpg', alt: 'Sisters gathering' },
];

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1 + i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        },
    }),
};

export function InstagramFeed() {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Follow the Journey.
                    </h2>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                    >
                        <Instagram size={18} />
                        @UmmahYouth
                    </Link>
                </motion.div>

                <div className="grid grid-cols-3 gap-4">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            className="aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-slate-200 shadow-sm"
                            custom={i}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src={post.image}
                                alt={post.alt}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
