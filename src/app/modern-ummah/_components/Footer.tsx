'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
    siteName?: string;
    templateId: string;
}

export function Footer({ siteName = 'Ummah Center', templateId }: FooterProps) {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Prayer Times', href: `/${templateId}/prayer-times` },
        { label: 'Events Calendar', href: `/${templateId}/events/calendar` },
        { label: 'Donate', href: `/${templateId}/donate` },
        { label: 'Volunteer', href: `/${templateId}/community/volunteers` },
    ];

    const resourceLinks = [
        { label: 'New Muslims', href: `/${templateId}/services/new-muslims` },
        { label: 'Weekend School', href: `/${templateId}/education/weekend-school` },
        { label: 'Quran Academy', href: `/${templateId}/education/quran-academy` },
        { label: 'Khutbahs', href: `/${templateId}/media/khutbahs` },
    ];

    const communityLinks = [
        { label: 'Sisters Circle', href: `/${templateId}/community/sisters` },
        { label: 'Youth Programs', href: `/${templateId}/community/youth` },
        { label: 'Food Pantry', href: `/${templateId}/community/food-pantry` },
        { label: 'Outreach', href: `/${templateId}/community/outreach` },
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat"
                style={{ backgroundSize: '100px 100px' }}
            />

            {/* Newsletter Section */}
            <div className="border-b border-slate-800 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-serif font-bold mb-2">Stay Connected</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Get weekly updates on events, programs, and community news delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 min-w-0 px-5 py-3.5 bg-slate-800 border border-slate-700 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            />
                            <button className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                Subscribe <Mail size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href={`/${templateId}`} className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold text-white">{siteName}</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                            Building a welcoming community for Muslims of all backgrounds.
                            Join us for prayers, programs, and fellowship.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm group">
                                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                                    <Phone size={16} className="text-emerald-500" />
                                </div>
                                (555) 123-4567
                            </a>
                            <a href="mailto:info@ummahcenter.org" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm group">
                                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors">
                                    <Mail size={16} className="text-emerald-500" />
                                </div>
                                info@ummahcenter.org
                            </a>
                            <div className="flex items-start gap-3 text-slate-400 text-sm">
                                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin size={16} className="text-emerald-500" />
                                </div>
                                <span>123 Community Drive<br />City, State 12345</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                aria-label="Twitter/X"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Resources</h4>
                        <ul className="space-y-3">
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Community</h4>
                        <ul className="space-y-3">
                            {communityLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {currentYear} {siteName}. All rights reserved.
                        </p>
                        <div className="flex items-center justify-center md:justify-end gap-6">
                            <Link
                                href={`/${templateId}/about/policies`}
                                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href={`/${templateId}/about/policies`}
                                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <span className="text-slate-600 text-sm flex items-center gap-1.5">
                                Made with <Heart size={12} className="text-red-500 fill-red-500" /> for the Ummah
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Powered by Duha */}
            <div className="border-t border-slate-800/50 relative z-10">
                <div className="py-4 text-center">
                    <span className="text-slate-600 text-md">
                        Powered by{' '}
                        <a
                            href="https://duha.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-500 font-semibold hover:text-emerald-400 transition-colors"
                        >
                            Duha
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
