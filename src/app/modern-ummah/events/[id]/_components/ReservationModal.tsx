'use client';

import { Ticket, User, Users, X, Minus, Plus, ChevronRight, ArrowLeft, Mail, Phone, Check } from 'lucide-react';
import { UseReservationReturn } from '../_hooks/useReservation';
import { EventData } from '../_data';
import { Dialog, DialogContent, DialogTrigger } from '../../../_components/ui/Dialog';
import { Button } from '../../../_components/Button/Button';
import { Input } from '../../../_components/ui/Input';
import { motion, AnimatePresence } from 'framer-motion';

interface ReservationModalProps {
    event: EventData;
    reservation: UseReservationReturn;
}

export function ReservationModal({ event, reservation }: ReservationModalProps) {
    if (!reservation.isOpen) return null;

    const { pricing } = event;

    return (
        <Dialog open={reservation.isOpen} onOpenChange={(open) => !open && reservation.closeModal()}>
            <DialogContent className="max-w-xl p-0 overflow-hidden bg-white shadow-2xl rounded-3xl border-0">

                {/* Header */}
                <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-full">
                            <Ticket className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">Reserve Your Seats</h3>
                            <p className="text-emerald-100 text-xs opacity-90">{event.title}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {reservation.formStep === 'seats' ? (
                            <motion.div
                                key="seats"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    {/* Adult Ticket */}
                                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Adult (13+)</h4>
                                                <p className="text-emerald-600 font-semibold">${pricing.adult}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
                                            <button
                                                onClick={() => reservation.updateSeats('adults', -1)}
                                                disabled={reservation.seats.adults === 0}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 disabled:opacity-30 text-slate-600 transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-6 text-center font-bold text-slate-900">{reservation.seats.adults}</span>
                                            <button
                                                onClick={() => reservation.updateSeats('adults', 1)}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Child Ticket */}
                                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                                <Users size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Child (5-12)</h4>
                                                <p className="text-emerald-600 font-semibold">${pricing.child}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
                                            <button
                                                onClick={() => reservation.updateSeats('children', -1)}
                                                disabled={reservation.seats.children === 0}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 disabled:opacity-30 text-slate-600 transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-6 text-center font-bold text-slate-900">{reservation.seats.children}</span>
                                            <button
                                                onClick={() => reservation.updateSeats('children', 1)}
                                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-amber-50 text-amber-800 text-sm rounded-xl border border-amber-100">
                                    Children under 5 are free and do not require a ticket.
                                </div>

                                {/* Summary & Action */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div>
                                        <p className="text-slate-500 text-sm">{reservation.totalSeats} {reservation.totalSeats === 1 ? 'Seat' : 'SeatsSelected'}</p>
                                        <p className="text-2xl font-bold text-slate-900">${reservation.totalPrice}</p>
                                    </div>
                                    <Button
                                        variant="primary"
                                        onClick={reservation.goToDetails}
                                        disabled={!reservation.canProceed}
                                        className="rounded-full px-6"
                                    >
                                        Continue <ChevronRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="details"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                <button
                                    onClick={reservation.goToSeats}
                                    className="flex items-center text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                                >
                                    <ArrowLeft size={16} className="mr-1" /> Back to selection
                                </button>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Contact Information</h4>
                                        <p className="text-xs text-slate-500 mb-3">Required for ticket confirmation</p>
                                        <div className="space-y-3">
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                                <Input
                                                    type="email"
                                                    placeholder="Email address"
                                                    className="pl-9"
                                                    value={reservation.form.email}
                                                    onChange={e => reservation.updateEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                                <Input
                                                    type="tel"
                                                    placeholder="Phone number"
                                                    className="pl-9"
                                                    value={reservation.form.phone}
                                                    onChange={e => reservation.updatePhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Attendee Names</h4>
                                        <p className="text-xs text-slate-500 mb-3">Names will appear on tickets</p>
                                        <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                                            {reservation.form.attendees.map((attendee, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <span className="text-xs font-semibold uppercase text-slate-500 w-16 shrink-0">
                                                        {attendee.type} {idx + 1}
                                                    </span>
                                                    <Input
                                                        placeholder="Full name"
                                                        className="h-9 text-sm"
                                                        value={attendee.name}
                                                        onChange={e => reservation.updateAttendeeName(idx, e.target.value)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Summary & Action */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div>
                                        <p className="text-slate-500 text-sm">Total Due</p>
                                        <p className="text-2xl font-bold text-slate-900">${reservation.totalPrice}</p>
                                    </div>
                                    <Button
                                        variant="primary"
                                        onClick={reservation.submitReservation}
                                        className="rounded-full px-8 shadow-lg shadow-emerald-500/20"
                                    >
                                        Confirm Reservation <Check size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
}
