import { CheckCircle } from 'lucide-react';
import { guidanceServices } from '../_data';

export function ServicesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Areas of Support</h2>
                    <p className="text-slate-600">
                        We offer specialized guidance tailored to your unique situation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {guidanceServices.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-lg hover:shadow-emerald-900/5">
                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle className="shrink-0 w-4 h-4 text-emerald-600 mt-1" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
