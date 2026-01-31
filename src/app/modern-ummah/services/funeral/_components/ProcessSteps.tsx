import { janazahSteps } from '../_data';

export function ProcessSteps() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-slate-500 text-sm font-semibold tracking-widest uppercase">The Guide</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">The Janazah Process</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Understanding the steps and fulfilling the rights of the deceased according to the Sunnah.
                    </p>
                </div>

                <div className="space-y-6">
                    {janazahSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                                {/* Icon Marker */}
                                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm">
                                    <Icon size={24} />
                                </div>

                                {/* Content */}
                                <div className="space-y-2 pt-1">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">Step 0{step.number}</span>
                                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                                    </div>
                                    <span className="block text-sm font-amiri text-slate-500 dir-rtl">{step.subtitle}</span>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
