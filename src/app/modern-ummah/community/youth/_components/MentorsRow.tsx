'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const mentors = [
    { id: 1, name: 'Br. Ahmed', image: '/images/shykh.jpg' },
    { id: 2, name: 'Sr. Fatima', image: '/images/arab-women-1.jpg' },
    { id: 3, name: 'Br. Yusuf', image: '/images/arab-men-1.jpg' },
];

const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1 + i * 0.1,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        },
    }),
};

export function MentorsRow() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
                        Led by our Youth Directors.
                    </h2>

                    <div className="flex items-center justify-center gap-8 md:gap-12">
                        {mentors.map((mentor, i) => (
                            <motion.div
                                key={mentor.id}
                                className="flex flex-col items-center"
                                custom={i}
                                variants={avatarVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 ring-4 ring-white shadow-md">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-slate-700">
                                    {mentor.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
