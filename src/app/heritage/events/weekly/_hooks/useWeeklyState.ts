'use client';
import { useState } from 'react';

export function useWeeklyState() {
    const [activeDay, setActiveDay] = useState<string | null>(null);
    return { activeDay, setActiveDay };
}
