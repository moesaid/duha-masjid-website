'use client';

import { useState } from 'react';

export interface UseCommitteesStateReturn {
    selectedCommittee: string | null;
    setSelectedCommittee: (id: string | null) => void;
}

export function useCommitteesState(): UseCommitteesStateReturn {
    const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);

    return {
        selectedCommittee,
        setSelectedCommittee
    };
}
