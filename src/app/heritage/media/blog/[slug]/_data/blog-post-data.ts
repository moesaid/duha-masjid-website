// Blog Post Slug Page Data
import { LucideIcon, Calendar, Clock, User, Tag, Share2, ChevronLeft } from 'lucide-react';

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    excerpt: string;
    // Rich HTML content for full article display
    richContent: string;
}

// Sample blog post with FULL RICH TEXT example (in production this would come from CMS)
export const samplePost: BlogPost = {
    slug: 'building-ummah-together',
    title: 'Building the Ummah Together: Reflections on Our Community Growth',
    author: 'Imam Muhammad Ali',
    date: 'January 25, 2026',
    readTime: '10 min read',
    category: 'Community',
    image: '/images/mosque-community.jpg',
    excerpt: 'As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities that we must embrace together.',
    richContent: `
        <p class="lead">As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities that we must embrace together as one unified body.</p>

        <h2>The Foundation of Unity</h2>

        <p>Our masjid has always been more than just a place of worship. It is a <strong>sanctuary</strong> where hearts find peace, minds find clarity, and souls find connection. The Prophet Muhammad ﷺ said:</p>

        <blockquote class="quran">
            <p>إِنَّ ٱلْمُؤْمِنِينَ إِخْوَةٌ</p>
            <p>"Indeed, the believers are brothers."</p>
            <cite>— Surah Al-Hujurat 49:10</cite>
        </blockquote>

        <p>This verse reminds us that our bond transcends cultural backgrounds, languages, and personal differences. We are united by our shared faith and our common purpose.</p>

        <h2>Welcoming New Members</h2>

        <p>Over the past year, our community has grown by <em>40%</em>. This remarkable increase brings both joy and responsibility. Each new face represents:</p>

        <ul>
            <li>A new story of faith and journey to Islam</li>
            <li>Fresh perspectives and diverse experiences</li>
            <li>Additional hands ready to serve the community</li>
            <li>New friendships waiting to be formed</li>
        </ul>

        <p>We must ensure that every person who walks through our doors feels welcomed, valued, and included in our community fabric.</p>

        <h3>A Message from Last Friday's Khutbah</h3>

        <p>In case you missed it, here is a recording from our recent Friday sermon discussing community building:</p>

        <div class="videoWrapper">
            <iframe 
                src="https://www.youtube.com/embed/oOEhCAvIl5I" 
                title="Friday Khutbah - Building Community"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <p class="caption">Friday Khutbah: "The Rights of Neighbors in Islam"</p>

        <h3>Practical Steps for Integration</h3>

        <p>Here are some ways we can help new members feel at home:</p>

        <ol>
            <li><strong>Greet with warmth</strong> — A simple "As-salamu alaykum" with a genuine smile can make someone's day</li>
            <li><strong>Introduce yourself</strong> — Take the initiative to learn names and backgrounds</li>
            <li><strong>Invite to events</strong> — Personal invitations are more meaningful than announcements</li>
            <li><strong>Offer assistance</strong> — Help navigate our programs and services</li>
            <li><strong>Follow up</strong> — A phone call or message after someone's first visit shows we care</li>
        </ol>

        <figure>
            <img src="/images/halaqa-circle.jpg" alt="Community members gathering in a study circle" />
            <figcaption>Our weekly halaqa study circle brings community members together</figcaption>
        </figure>

        <h2>Building Programs for Growth</h2>

        <p>To support our growing community, we are expanding our programs in several key areas:</p>

        <table>
            <thead>
                <tr>
                    <th>Program</th>
                    <th>Current Capacity</th>
                    <th>Planned Expansion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Weekend School</td>
                    <td>150 students</td>
                    <td>250 students by Fall 2026</td>
                </tr>
                <tr>
                    <td>Quran Academy</td>
                    <td>80 students</td>
                    <td>120 students by Summer 2026</td>
                </tr>
                <tr>
                    <td>Youth Programs</td>
                    <td>60 members</td>
                    <td>100 members ongoing</td>
                </tr>
                <tr>
                    <td>Adult Classes</td>
                    <td>40 attendees</td>
                    <td>75 attendees by Spring 2026</td>
                </tr>
            </tbody>
        </table>

        <h2>A Call to Action</h2>

        <p>As your Imam, I invite each of you to reflect on how you can contribute to our community's growth. Whether through:</p>

        <ul>
            <li>Volunteering your time and skills</li>
            <li>Supporting our expansion financially</li>
            <li>Mentoring new Muslims and young members</li>
            <li>Simply being a welcoming presence</li>
        </ul>

        <blockquote>
            <p>"The best of people are those who are most beneficial to people."</p>
            <cite>— Prophet Muhammad ﷺ (Sahih al-Jami)</cite>
        </blockquote>

        <p>Let us strive to be among those who benefit others, who build rather than divide, and who leave our community stronger than we found it.</p>

        <h3>Looking Forward</h3>

        <p>The road ahead is bright. With your continued support, dedication, and <em>tawakkul</em> (trust in Allah), we will continue to grow not just in numbers, but in faith, knowledge, and service to humanity.</p>

        <p>May Allah bless our community and guide us all on the straight path. <strong>Ameen.</strong></p>
    `
};

export const relatedPosts = [
    { slug: 'ramadan-preparation', title: 'Preparing Hearts and Homes for Ramadan', category: 'Spirituality' },
    { slug: 'youth-leadership-program', title: 'Announcing Our New Youth Leadership Program', category: 'Youth' },
    { slug: 'interfaith-dialogue-success', title: 'Interfaith Dialogue Day: A Resounding Success', category: 'Outreach' }
];
