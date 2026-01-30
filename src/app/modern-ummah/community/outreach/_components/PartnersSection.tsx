'use client';

import { motion } from 'framer-motion';

const partners = [
    'Springfield Interfaith Council',
    'Local Schools District',
    'Springfield Police Dept.',
    'Chamber of Commerce',
    "St. Mary's Church",
    'Temple Beth Israel',
];

export function PartnersSection() {
    return (
        <section className="py-20 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Our Partners.
                    </h2>
                    <p className="text-slate-600">
                        Building bridges together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner}
                            className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                        >
                            <p className="text-slate-700 font-medium">{partner}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
