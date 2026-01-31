'use client';

import { motion } from 'framer-motion';
import {
    Car,
    Footprints,
    Baby,
    Droplets,
    Accessibility,
    MapPin
} from 'lucide-react';

const facilities = [
    {
        id: 'parking',
        title: 'Ample Parking',
        description: 'Over 200 spaces available with dedicated spots for seniors and expectant mothers close to the entrance.',
        icon: <Car className="w-6 h-6 text-emerald-600" />,
        color: 'bg-emerald-50'
    },
    {
        id: 'wudu',
        title: 'Wudu Areas',
        description: 'Clean, modern ablution facilities located on both floors with towel service and seated stations.',
        icon: <Droplets className="w-6 h-6 text-blue-600" />,
        color: 'bg-blue-50'
    },
    {
        id: 'shoes',
        title: 'Shoe Storage',
        description: 'Number-coded shoe racks at every entrance. Please remember your number for easy retrieval.',
        icon: <Footprints className="w-6 h-6 text-amber-600" />,
        color: 'bg-amber-50'
    },
    {
        id: 'accessibility',
        title: 'Accessibility',
        description: 'Fully wheelchair accessible with elevator access to all prayer halls and classrooms.',
        icon: <Accessibility className="w-6 h-6 text-purple-600" />,
        color: 'bg-purple-50'
    },
    {
        id: 'children',
        title: 'Mother & Baby',
        description: 'Private nursing room and sound-proof cry room available in the sisters section.',
        icon: <Baby className="w-6 h-6 text-rose-600" />,
        color: 'bg-rose-50'
    },
    {
        id: 'entrance',
        title: 'Entrances',
        description: 'Brothers entrance via Main Gate A. Sisters entrance via Gate B with direct elevator access.',
        icon: <MapPin className="w-6 h-6 text-slate-600" />,
        color: 'bg-slate-50'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function FacilitiesSection() {
    return (
        <section className="container py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
                    Our Amenities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
                    Facility Highlights
                </h2>
                <p className="text-slate-600 text-lg">
                    Designed for your comfort, spiritual focus, and peace of mind.
                </p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {facilities.map((feature) => (
                    <motion.div
                        key={feature.id}
                        variants={item}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                    >
                        <div className={`w-14 h-14 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
