'use client';

import { useState } from 'react';
import {
    WelcomeHero,
    ShahadaGuide,
    MentorshipProgram,
    ResourceLibrary,
    ShahadaModal,
    GiftBoxModal
} from './_components';

export default function NewMuslimsPage() {
    const [isShahadaOpen, setShahadaOpen] = useState(false);
    const [isGiftBoxOpen, setGiftBoxOpen] = useState(false);

    return (
        <main>
            <WelcomeHero onOpenShahada={() => setShahadaOpen(true)} />
            <ShahadaGuide onOpenShahada={() => setShahadaOpen(true)} />
            <MentorshipProgram onOpenGiftBox={() => setGiftBoxOpen(true)} />
            <ResourceLibrary />

            <ShahadaModal open={isShahadaOpen} onOpenChange={setShahadaOpen} />
            <GiftBoxModal open={isGiftBoxOpen} onOpenChange={setGiftBoxOpen} />
        </main>
    );
}
