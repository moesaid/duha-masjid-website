import { User } from 'lucide-react';
import { counselors } from '../_data';

export function CounselorProfiles() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Counselors</h2>
                    <p className="text-slate-600">Meet our qualified team of spiritual guides</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {counselors.map((counselor) => (
                        <div key={counselor.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6 border-4 border-slate-50">
                                <User size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{counselor.name}</h3>
                            <span className="block text-emerald-700 font-medium text-sm mb-4">{counselor.title}</span>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {counselor.credentials.slice(0, 2).map((cred, idx) => (
                                    <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                        {cred}
                                    </span>
                                ))}
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                {counselor.specialties.join(' • ')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
