import { LucideIcon, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string; // HTML content
    author: string;
    authorRole?: string;
    authorImage?: string;
    date: string;
    readTime: string;
    category: 'Community' | 'Spirituality' | 'Youth' | 'Khutbah' | 'Outreach' | 'Announcements';
    image: string;
    featured: boolean;
}

export const categories = ['All', 'Community', 'Spirituality', 'Youth', 'Khutbah', 'Outreach', 'Announcements'];

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'building-ummah-together',
        title: 'Building the Ummah Together: Reflections on Our Community Growth',
        excerpt: 'As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities that we must embrace together.',
        content: `
            <p class="lead text-xl text-slate-600 border-l-4 border-amber-400 pl-4 mb-8 italic">As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities that we must embrace together as one unified body.</p>

            <h2>The Foundation of Unity</h2>

            <p>Our masjid has always been more than just a place of worship. It is a <strong>sanctuary</strong> where hearts find peace, minds find clarity, and souls find connection. The Prophet Muhammad ﷺ said:</p>

            <blockquote class="quran bg-emerald-50/50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg text-center">
                <p class="font-amiri text-2xl mb-4 leading-loose" dir="rtl">إِنَّ ٱلْمُؤْمِنِينَ إِخْوَةٌ</p>
                <p class="text-lg italic text-slate-700">"Indeed, the believers are brothers."</p>
                <cite class="block mt-2 text-sm text-emerald-700 font-semibold not-italic">— Surah Al-Hujurat 49:10</cite>
            </blockquote>

            <p>This verse reminds us that our bond transcends cultural backgrounds, languages, and personal differences. We are united by our shared faith and our common purpose.</p>

            <h3>Community Demographics</h3>
            
            <p>Over the past year, our community has grown significantly. Here is a breakdown of our current attendance and programs:</p>

            <div class="overflow-x-auto my-8">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-emerald-900 text-white">
                            <th class="p-4 rounded-tl-lg">Program</th>
                            <th class="p-4">Day</th>
                            <th class="p-4">Avg. Attendance</th>
                            <th class="p-4 rounded-tr-lg">Growth (YoY)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-medium">Jummah Prayer</td>
                            <td class="p-4">Friday</td>
                            <td class="p-4">1,200+</td>
                            <td class="p-4 text-emerald-600 font-bold">+15%</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-medium">Community Dinner</td>
                            <td class="p-4">Last Saturday</td>
                            <td class="p-4">350</td>
                            <td class="p-4 text-emerald-600 font-bold">+25%</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-medium">Youth Halaqa</td>
                            <td class="p-4">Friday Night</td>
                            <td class="p-4">85</td>
                            <td class="p-4 text-emerald-600 font-bold">+40%</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-medium">Sister's Coffee</td>
                            <td class="p-4">Tuesday AM</td>
                            <td class="p-4">45</td>
                            <td class="p-4 text-emerald-600 font-bold">+10%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Welcoming New Members</h2>

            <p>We must ensure that every person who walks through our doors feels welcomed, valued, and included in our community fabric.</p>
            
            <div class="video-wrapper relative w-full pt-[56.25%] bg-slate-100 rounded-xl overflow-hidden shadow-lg my-8 group">
                <iframe 
                    class="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/FENhiXWF2mw" 
                    title="Welcome to Our Community"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            <p class="text-center text-sm text-slate-500 italic mt-2 mb-8">Watch highlights from our recent "Welcome Home" event.</p>

            <ul>
                <li><strong>Greet with warmth</strong> — A simple "As-salamu alaykum" with a genuine smile can make someone's day.</li>
                <li><strong>Introduction</strong> — Take the initiative to learn names and backgrounds.</li>
                <li><strong>Invite to events</strong> — Personal invitations are more meaningful than announcements.</li>
            </ul>
        `,
        author: 'Imam Muhammad Ali',
        authorRole: 'Resident Scholar',
        date: 'January 25, 2026',
        readTime: '5 min read',
        category: 'Community',
        image: '/images/mosque-community.jpg',
        featured: true
    },
    {
        id: '2',
        slug: 'ramadan-preparation',
        title: 'Preparing Hearts and Homes for Ramadan',
        excerpt: 'With just weeks until the blessed month, now is the time to begin our spiritual preparation. Here are practical steps to maximize your Ramadan experience.',
        content: `
            <p class="lead">Ramadan is rapidly approaching, and the wise believer begins preparation early. Just as a farmer prepares the soil before planting seeds, we must prepare our hearts before the month of harvest arrives.</p>
            
            <h2>Spiritual Detox</h2>
            <p>Begin by increasing your istighfar (seeking forgiveness). Clear the heart of grudges and ill-will towards others. A light heart travels faster to Allah.</p>
        `,
        author: 'Sr. Fatima Hassan',
        authorRole: 'Education Director',
        date: 'January 20, 2026',
        readTime: '8 min read',
        category: 'Spirituality',
        image: '/images/quran-book.jpg',
        featured: false
    },
    {
        id: '3',
        slug: 'youth-leadership-program',
        title: 'Announcing Our New Youth Leadership Program',
        excerpt: 'We are excited to announce a comprehensive leadership development program for young Muslims ages 16-25. Applications are now open for the Spring cohort.',
        content: `
            <p class="lead">The youth are not just the leaders of tomorrow; they are the partners of today. Our new Youth Leadership Program aims to equip the next generation with the tools they need to serve.</p>
        `,
        author: 'Br. Ahmad Malik',
        authorRole: 'Youth Coordinator',
        date: 'January 18, 2026',
        readTime: '3 min read',
        category: 'Youth',
        image: '/images/youth-learning.jpg',
        featured: false
    },
    {
        id: '4',
        slug: 'friday-reflections-patience',
        title: 'Friday Reflections: The Beauty of Patience',
        excerpt: 'In our fast-paced world, the virtue of sabr (patience) becomes ever more crucial. Let us explore what the Quran and Sunnah teach us about true patience.',
        author: 'Imam Muhammad Ali',
        authorRole: 'Resident Scholar',
        date: 'January 15, 2026',
        readTime: '6 min read',
        category: 'Khutbah',
        image: '/images/minbar-pulpit.jpg',
        featured: false
    },
    {
        id: '5',
        slug: 'interfaith-dialogue-success',
        title: 'Interfaith Dialogue Day: A Resounding Success',
        excerpt: 'Last Saturday, we hosted over 100 guests from different faith communities for our annual interfaith dialogue event. The conversations were rich and bridges were built.',
        author: 'Dr. Layla Ahmed',
        authorRole: 'Outreach Chair',
        date: 'January 12, 2026',
        readTime: '4 min read',
        category: 'Outreach',
        image: '/images/sunlight-archway.jpg',
        featured: false
    },
    {
        id: '6',
        slug: 'construction-update-january',
        title: 'Construction Update: Phase 2 Progress Report',
        excerpt: 'Alhamdulillah, the expansion project continues on schedule. This month we completed the foundation work for the new education wing and community hall.',
        author: 'Br. Khalid Mansour',
        authorRole: 'Project Manager',
        date: 'January 8, 2026',
        readTime: '2 min read',
        category: 'Announcements',
        image: '/images/geometric-gold.jpg',
        featured: false
    }
];
