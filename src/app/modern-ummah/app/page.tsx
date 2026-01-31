'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Smartphone,
    Bell,
    Calendar,
    Clock,
    BookOpen,
    Heart,
    Users,
    ArrowRight,
    QrCode,
    CheckCircle2
} from 'lucide-react';
import { Button } from '../_components/Button/Button';

// --- Data ---
const FEATURES = [
    {
        icon: Clock,
        title: 'Precision Prayer Times',
        description: 'Auto-detected location times with customizable Adhan notifications for every Salah.',
        color: 'emerald'
    },
    {
        icon: Bell,
        title: 'Instant Announcements',
        description: 'Get real-time updates on moon sightings, events changes, and emergency alerts.',
        color: 'amber'
    },
    {
        icon: Calendar,
        title: 'Event Registration',
        description: 'One-tap RSVP for classes and community dinners. Manage your family\'s tickets.',
        color: 'blue'
    },
    {
        icon: Heart,
        title: 'Tap to Donate',
        description: 'Support the masjid in seconds. Securely save payment methods for Jummah giving.',
        color: 'rose'
    },
    {
        icon: BookOpen,
        title: 'Daily Inspirations',
        description: 'Curated Duas, Hadith of the Day, and Quranic verses to start your morning.',
        color: 'violet'
    },
    {
        icon: Users,
        title: 'Community Directory',
        description: 'Connect with reliable businesses and services within the Duha community.',
        color: 'teal'
    }
];

export default function AppPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-0 overflow-hidden bg-slate-900 border-b border-white/10">
                {/* Background & Texture */}
                <div className="absolute inset-0 bg-[url('/patterns/subtle-grain.png')] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">

                        {/* Text Content */}
                        <div className="text-center lg:text-left pt-8 lg:pb-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    v2.0 Now Available
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                                    Your Masjid,<br />
                                    <span className="text-emerald-400">In Your Pocket.</span>
                                </h1>
                                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                    Experience the Duha community anywhere. Prayer times, event registrations, and daily inspiration—all in one beautiful app.
                                </p>

                                {/* Store Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-slate-50 transition-all font-bold group shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]">
                                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.9-65.2-19.5-89.4-67-89.6-122.5zM124.7 68.6c6.2 9.1 29.6 38.3 27.6 74.6-34 1.7-67.4-23.3-77.9-57.8-5.8-19.6-1.5-47.7 22-68.6 15.6-14.3 35.5-17.3 49.6-17.3 12.5 0 25.4 3.1 36.8 6.4-15.6 12.8-35.8 24.3-58.1 42.7z" />
                                        </svg>
                                        <div className="text-left leading-tight">
                                            <span className="block text-[10px] font-medium text-slate-500 uppercase tracking-wide">Download on the</span>
                                            <span className="block text-base">App Store</span>
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-3 bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-700 transition-all font-bold group shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98]">
                                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L47 499z" />
                                        </svg>
                                        <div className="text-left leading-tight">
                                            <span className="block text-[10px] font-medium text-slate-400 uppercase tracking-wide">Get it on</span>
                                            <span className="block text-base">Google Play</span>
                                        </div>
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900" />
                                        ))}
                                    </div>
                                    <span>Used by 3,000+ community members</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Phone Mockup (Right Column) */}
                        <div className="relative h-[600px] lg:h-[800px] flex items-end justify-center lg:justify-end">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-[300px] sm:w-[350px] lg:w-[400px]"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-x-0 bottom-0 top-20 bg-emerald-500/20 blur-[100px] rounded-full" />

                                {/* Mockup Image Container */}
                                <div className="relative z-10 mx-auto">
                                    <Image
                                        src="/images/app-feature-prayer.png" // Placeholder - would refer to an actual asset if available, using generic for now to avoid broken images if possible. Assuming heritage had assets or using placeholder.
                                        alt="Mobile App Interface"
                                        width={400}
                                        height={800}
                                        className="drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Floating Widgets */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/4 -left-12 bg-white p-4 rounded-2xl shadow-xl hidden lg:block"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <Bell size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase">Alert</p>
                                                <p className="text-sm font-bold text-slate-900">Maghrib in 15 mins</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-lg text-slate-600">
                            Designed to be your spiritual companion. Simple, beautiful, and privacy-focused.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURES.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QR Code CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-emerald-900 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat" />

                        <div className="relative z-10 text-center lg:text-left max-w-xl">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
                                Ready to Upgrade Your Experience?
                            </h2>
                            <p className="text-emerald-100/80 text-lg mb-8">
                                Join thousands of community members who stay connected daily.
                                Download the Duha Masjid app today.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Button className="bg-white text-emerald-900 hover:bg-emerald-50">
                                    Download for iOS
                                </Button>
                                <Button variant="outline" className="border-emerald-500/30 text-emerald-100 hover:bg-emerald-800/50 hover:text-white">
                                    Download for Android
                                </Button>
                            </div>
                        </div>

                        {/* QR Code Card */}
                        <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl skew-x-0 lg:-skew-x-3 transition-transform hover:skew-x-0">
                            <div className="flex flex-col items-center gap-4 text-center skew-x-0 lg:skew-x-3 transition-transform hover:skew-x-0">
                                <div className="p-4 bg-slate-900 rounded-2xl">
                                    <QrCode size={120} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Scan to Download</p>
                                    <p className="text-xs text-slate-500">iOS & Android</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
