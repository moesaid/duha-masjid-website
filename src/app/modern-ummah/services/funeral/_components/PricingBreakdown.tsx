import Link from 'next/link';
import { Button } from '../../../_components';
import { MapPin, Clock, Landmark, HandHeart, ExternalLink } from 'lucide-react';
import { pricingItems, cemeteryInfo } from '../_data';

export function PricingBreakdown() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Cemetery Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Muslim Cemetery</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                We work closely with the local Muslim cemetery to ensure burials are conducted in accordance with Sharia.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Location</h3>
                                    <p className="text-slate-600 mt-1">{cemeteryInfo.name}</p>
                                    <p className="text-slate-500 text-sm">{cemeteryInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Visiting Hours</h3>
                                    <p className="text-slate-600 mt-1">{cemeteryInfo.hours}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                    <Landmark size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Burial Information</h3>
                                    <p className="text-slate-600 mt-1">{cemeteryInfo.note}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <Button href={cemeteryInfo.mapLink} variant="outline" className="w-full justify-center border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                                    Get Directions
                                    <ExternalLink size={16} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pricing */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Service Costs</h2>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-slate-100">
                                    {pricingItems.map((item, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="block font-medium text-slate-900">{item.item}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="block font-bold text-slate-900">{item.price}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right hidden sm:table-cell">
                                                <span className="text-sm text-slate-500">{item.note}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 flex gap-4 p-6 bg-slate-100 rounded-xl border border-slate-200">
                            <HandHeart size={24} className="shrink-0 text-slate-500" />
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We offer financial assistance for families unable to afford burial costs.
                                <strong className="text-slate-900 block mt-1">No Muslim should go unburied due to financial hardship.</strong>
                                Please speak to our funeral director for support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
