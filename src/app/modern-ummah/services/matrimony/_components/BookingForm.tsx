
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, CheckCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, DatePicker } from '../../../_components';
import { servicePackages } from '../_data';

export function BookingForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        groomName: '',
        brideName: '',
        groomPhone: '',
        bridePhone: '',
        preferredDate: '',
        package: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setFormSubmitted(true);
            setFormData({
                groomName: '',
                brideName: '',
                groomPhone: '',
                bridePhone: '',
                preferredDate: '',
                package: '',
                message: ''
            });
            setTimeout(() => setFormSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section id="booking" className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase">Begin Your Journey</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Schedule Your Nikkah</h2>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12 relative">
                    <AnimatePresence mode="wait">
                        {formSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                                <p className="text-slate-600 max-w-md mx-auto">
                                    Jazakallah Khair! We have received your request and will contact you within 2 business days to confirm details.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8"
                                onSubmit={handleSubmit}
                            >
                                {/* Couple Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Groom's Full Name</label>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                required
                                                value={formData.groomName}
                                                onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                                                className="pl-10 pr-4 py-3 rounded-xl transition-all"
                                                placeholder="Full Name"
                                            />
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Bride's Full Name</label>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                required
                                                value={formData.brideName}
                                                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                                                className="pl-10 pr-4 py-3 rounded-xl transition-all"
                                                placeholder="Full Name"
                                            />
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Groom's Phone</label>
                                        <div className="relative">
                                            <Input
                                                type="tel"
                                                required
                                                value={formData.groomPhone}
                                                onChange={(e) => setFormData({ ...formData, groomPhone: e.target.value })}
                                                className="pl-10 pr-4 py-3 rounded-xl transition-all"
                                                placeholder="(555) 000-0000"
                                            />
                                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Bride's Phone</label>
                                        <div className="relative">
                                            <Input
                                                type="tel"
                                                required
                                                value={formData.bridePhone}
                                                onChange={(e) => setFormData({ ...formData, bridePhone: e.target.value })}
                                                className="pl-10 pr-4 py-3 rounded-xl transition-all"
                                                placeholder="(555) 000-0000"
                                            />
                                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                                        <div className="relative">
                                            <div className="relative">
                                                <DatePicker
                                                    date={formData.preferredDate ? new Date(formData.preferredDate) : undefined}
                                                    setDate={(date) => setFormData({ ...formData, preferredDate: date ? date.toISOString() : '' })}
                                                    minDate={new Date()}
                                                    className="pl-10 pr-4 py-3 rounded-xl transition-all w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Package Preference</label>
                                        <div className="relative">
                                            <Select
                                                required
                                                value={formData.package}
                                                onValueChange={(value) => setFormData({ ...formData, package: value })}
                                            >
                                                <SelectTrigger className="pl-4 pr-4 py-3 h-auto rounded-xl bg-white w-full">
                                                    <SelectValue placeholder="Select a package..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {servicePackages.map((pkg, idx) => (
                                                        <SelectItem key={idx} value={pkg.name}>
                                                            {pkg.name} ({pkg.price})
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Additional Notes</label>
                                    <div className="relative">
                                        <Textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="pl-10 pr-4 py-3 rounded-xl transition-all resize-none"
                                            placeholder="Any special requests or questions..."
                                        />
                                        <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full justify-center py-4 rounded-xl shadow-lg"
                                >
                                    Schedule Nikkah
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
