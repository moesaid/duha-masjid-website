'use client';

import { useState } from 'react';

export interface UseBoardStateReturn {
    openCommittee: string | null;
    toggleCommittee: (name: string) => void;
}

export function useBoardState(): UseBoardStateReturn {
    const [openCommittee, setOpenCommittee] = useState<string | null>(null);

    const toggleCommittee = (name: string) => {
        setOpenCommittee(openCommittee === name ? null : name);
    };

    return {
        openCommittee,
        toggleCommittee
    };
}
