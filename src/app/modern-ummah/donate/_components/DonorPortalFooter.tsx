'use client';

import { LogIn } from 'lucide-react';
import { Button } from '../../_components/Button/Button';

export function DonorPortalFooter() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                    Already a donor?
                </h3>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Log in to our secure portal to view your donation history, manage recurring gifts, and download tax receipts.
                </p>
                <Button variant="outline" className="py-6 px-8 text-base border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700">
                    <LogIn size={20} className="mr-2" />
                    Access Donor Portal
                </Button>
            </div>
        </section>
    );
}
