import Link from 'next/link';
import { Button } from '../../../_components';
import { Phone, AlertCircle, FileDown, Moon } from 'lucide-react';
import { emergencyContact } from '../_data';

export function JanazahHero() {
    return (
        <section className="relative py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
            {/* Subtle Texture */}
            <div
                className="absolute inset-0 opacity-[0.05] bg-[url('/patterns/noun-islamic-geometric-patterns.svg')] bg-repeat"
                style={{ backgroundSize: '80px 80px' }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="mb-8 space-y-4">
                    <p className="font-amiri text-2xl md:text-3xl text-slate-300 dir-rtl leading-relaxed">
                        إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                    </p>
                    <p className="text-slate-400 font-serif italic text-lg">
                        "Indeed we belong to Allah, and indeed to Him we will return."
                    </p>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
                    Janazah Services
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Compassionate, dignified support for you and your loved ones during the final journey.
                    We are here to guide you through every step with care and adherence to the Sunnah.
                </p>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 text-slate-200 font-medium mb-6">
                        <AlertCircle size={20} className="text-slate-400" />
                        <span>Has a death occurred?</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            href={`tel:${emergencyContact.tel}`}
                            variant="primary"
                            className="bg-slate-100 text-slate-900 hover:bg-white border-transparent"
                        >
                            <Phone size={18} />
                            <span>Call Director: {emergencyContact.phone}</span>
                        </Button>

                        <Button
                            href="/documents/immediate-steps-checklist.pdf"
                            variant="outline"
                            className="text-slate-300 border-slate-600 hover:bg-slate-800 hover:text-white"
                        >
                            <FileDown size={18} />
                            Download Checklist
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
