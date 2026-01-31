'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const guidelines = [
    {
        id: 1,
        title: "Dress Code",
        text: "Please dress modestly. For men, pants covering knees. For women, loose fitting clothing and headscarf.",
        type: "standard"
    },
    {
        id: 2,
        title: "Silence Phones",
        text: "Keep mobile phones on silent or vibrate mode to maintain the sanctity of the prayer space.",
        type: "standard"
    },
    {
        id: 3,
        title: "Parking Rules",
        text: "Park only in designated spots. Do not block neighbors' driveways or double park.",
        type: "important"
    },
    {
        id: 4,
        title: "Children Supervision",
        text: "We love having children at the masjid! Please keep them close to you during prayer times.",
        type: "standard"
    },
    {
        id: 5,
        title: "Scent-Free Zone",
        text: "Please avoid strong perfumes or scents out of consideration for those with sensitivities.",
        type: "standard"
    },
    {
        id: 6,
        title: "Right Foot First",
        text: "It is sunnah to enter the prayer hall with your right foot and exit with your left.",
        type: "standard"
    }
];

export function EtiquetteSection() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="container">
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Header Column */}
                        <div className="md:w-1/3 sticky top-24">
                            <span className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Masjid Etiquette
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                                Honoring the House of Allah
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                A few simple guidelines help us maintain a space of peace, reflection, and spiritual growth for everyone.
                            </p>
                        </div>

                        {/* Guidelines Grid */}
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {guidelines.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`
                                        p-6 rounded-2xl border transition-colors
                                        ${item.type === 'important'
                                            ? 'bg-amber-50/50 border-amber-100'
                                            : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        {item.type === 'important' ? (
                                            <AlertCircle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                                        ) : (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                        )}
                                        <h3 className={`font-bold text-lg ${item.type === 'important' ? 'text-amber-900' : 'text-slate-900'}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-8">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
