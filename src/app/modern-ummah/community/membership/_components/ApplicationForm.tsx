'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Calendar, FileText, ArrowRight, Plus, Trash2, Upload } from 'lucide-react';
import { DatePicker } from '../../../_components';
import { Button } from '../../../_components/Button/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../_components/ui/Select';
import { Input } from '../../../_components/ui/Input';

interface FamilyMember {
    id: string;
    name: string;
    dob: Date | undefined;
    relation: string;
}

export function ApplicationForm() {
    const [dob, setDob] = useState<Date | undefined>();
    const [members, setMembers] = useState<FamilyMember[]>([]);

    // Fee Constants
    const BASE_FEE = 100;
    const ADULT_FEE = 50;

    const calculateAge = (birthDate: Date | undefined) => {
        if (!birthDate) return 0;
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const addMember = () => {
        setMembers([...members, { id: crypto.randomUUID(), name: '', dob: undefined, relation: 'Child' }]);
    };

    const removeMember = (id: string) => {
        setMembers(members.filter(m => m.id !== id));
    };

    const updateMember = (id: string, field: keyof FamilyMember, value: any) => {
        setMembers(members.map(m => m.id === id ? { ...m, [field]: value } : m));
    };

    const totalFee = useMemo(() => {
        let fee = BASE_FEE;
        members.forEach(member => {
            if (calculateAge(member.dob) >= 18) {
                fee += ADULT_FEE;
            }
        });
        return fee;
    }, [members]);

    return (
        <section className="py-20" id="apply">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Membership Application.
                    </h2>
                    <p className="text-slate-600">
                        Join our community.
                    </p>
                </motion.div>

                <motion.form
                    className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Primary Member */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <User className="w-5 h-5 text-emerald-600" />
                            Primary Member
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                                <Input required placeholder="Your full name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth *</label>
                                <DatePicker date={dob} setDate={setDob} showYearSelect={true} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                                <Input type="email" required placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                                <Input type="tel" required placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        {/* Primary Documents */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                            <h4 className="font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">Required Documents</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Government ID *</label>
                                    <Input type="file" required accept="image/*,.pdf" className="bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Proof of Residence *</label>
                                    <Input type="file" required accept="image/*,.pdf" className="bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Family Members */}
                    <div className="mt-12 space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-emerald-600" />
                                Family Members
                            </h3>
                            <Button type="button" variant="outline" onClick={addMember} size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Member
                            </Button>
                        </div>

                        <AnimatePresence>
                            {members.map((member, index) => {
                                const isAdult = calculateAge(member.dob) >= 18;
                                return (
                                    <motion.div
                                        key={member.id}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative group"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => removeMember(member.id)}
                                            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="md:col-span-1">
                                                <label className="text-xs font-semibold text-slate-500 uppercase">Relation</label>
                                                <Select value={member.relation} onValueChange={(v) => updateMember(member.id, 'relation', v)}>
                                                    <SelectTrigger className="bg-white mt-1">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Spouse">Spouse</SelectItem>
                                                        <SelectItem value="Child">Child</SelectItem>
                                                        <SelectItem value="Parent">Parent</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="text-xs font-semibold text-slate-500 uppercase">Full Name</label>
                                                <Input
                                                    className="bg-white mt-1"
                                                    value={member.name}
                                                    onChange={(e) => updateMember(member.id, 'name', e.target.value)}
                                                    placeholder="Member Name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-semibold text-slate-500 uppercase">Date of Birth</label>
                                                <div className="mt-1">
                                                    <DatePicker
                                                        date={member.dob}
                                                        setDate={(d) => updateMember(member.id, 'dob', d)}
                                                        showYearSelect={true}
                                                    />
                                                </div>
                                            </div>

                                            {isAdult && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                >
                                                    <label className="text-xs font-semibold text-emerald-600 uppercase flex items-center gap-1">
                                                        <Upload className="w-3 h-3" />
                                                        Govt ID Required (18+)
                                                    </label>
                                                    <Input type="file" required accept="image/*,.pdf" className="bg-white mt-1 border-emerald-200" />
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {members.length === 0 && (
                            <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
                                No additional family members added.
                            </div>
                        )}
                    </div>

                    {/* Fee Summary */}
                    <div className="mt-10 bg-emerald-900 text-white rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-emerald-400" />
                            Membership Summary
                        </h4>
                        <div className="space-y-2 text-sm text-emerald-100">
                            <div className="flex justify-between">
                                <span>Primary Member Base Fee</span>
                                <span>${BASE_FEE}</span>
                            </div>
                            {members.map((m) => {
                                const isAdult = calculateAge(m.dob) >= 18;
                                const fee = isAdult ? ADULT_FEE : 0;
                                return (
                                    <div key={m.id} className="flex justify-between opacity-80">
                                        <span>{m.name || 'Family Member'} ({m.relation}) {isAdult ? '(18+)' : ''}</span>
                                        <span>{fee > 0 ? `$${fee}` : 'Free'}</span>
                                    </div>
                                );
                            })}
                            <div className="border-t border-emerald-700/50 my-2 pt-2 flex justify-between font-bold text-white text-lg">
                                <span>Total Annual Fee</span>
                                <span>${totalFee}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button type="submit" variant="primary" className="w-full h-14 text-lg rounded-full shadow-lg shadow-emerald-900/20">
                            Submit Application & Pay ${totalFee}
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
