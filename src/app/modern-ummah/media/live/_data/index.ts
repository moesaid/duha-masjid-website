
export const currentStream = {
    isLive: false, // Default to offline for initial state
    title: 'Isha Prayer & Khatira',
    speaker: 'Sh. Abdullah Smith',
    viewers: 1247,
    youtubeId: 'oOEhCAvIl5I'
};

export const nextBroadcast = {
    title: 'Friday Khutbah',
    time: 'Tomorrow 1:00 PM',
    countdown: { hours: 14, minutes: 30, seconds: 0 }
};

export const schedule = [
    { id: 1, time: '1:00 PM', title: 'Jumu\'ah Khutbah', day: 'Tomorrow', upcoming: true },
    { id: 2, time: '6:15 PM', title: 'Maghrib Prayer', day: 'Tomorrow', upcoming: false },
    { id: 3, time: '7:30 PM', title: 'Isha & Khatira', day: 'Tomorrow', upcoming: false },
    { id: 4, time: '8:00 PM', title: 'Sisters Halaqa', day: 'Thursday', upcoming: false }
];
