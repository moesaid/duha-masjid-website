import Image from 'next/image';
import Link from 'next/link';
import styles from './FuneralPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    Phone,
    FileDown,
    Clock,
    MessageCircle,
    Droplets,
    Users,
    MapPin,
    Landmark,
    Heart,
    HandHeart,
    Calendar,
    ArrowRight,
    AlertCircle,
    DollarSign,
    Truck,
    BookOpen
} from 'lucide-react';

// Janazah Process Steps
const janazahSteps = [
    {
        number: 1,
        title: 'Notification',
        subtitle: 'Contacting the Masjid',
        description: 'Call our 24/7 funeral hotline immediately. Our funeral director will guide you through the process and begin arrangements.',
        icon: MessageCircle,
    },
    {
        number: 2,
        title: 'Transportation',
        subtitle: 'Moving the Deceased',
        description: 'We coordinate transport from the hospital, home, or medical examiner to our Ghusl facility. We work with licensed funeral homes.',
        icon: Truck,
    },
    {
        number: 3,
        title: 'Ghusl & Kafan',
        subtitle: 'Washing & Shrouding',
        description: 'The deceased is ritually washed and shrouded in white cloth by trained volunteers. Separate facilities for men and women. Kafan is provided.',
        icon: Droplets,
    },
    {
        number: 4,
        title: 'Janazah Prayer',
        subtitle: 'The Funeral Prayer',
        description: 'The Janazah prayer is typically held after Dhuhr prayer at the masjid. Community members are encouraged to attend.',
        icon: Users,
    },
    {
        number: 5,
        title: 'Burial',
        subtitle: 'The Final Journey',
        description: 'The burial takes place at the Muslim section of the local cemetery. Family and community accompany the deceased to the grave.',
        icon: Landmark,
    },
];

// Pricing Data
const pricingItems = [
    { item: 'Grave Plot', price: '$2,500', note: 'One-time purchase' },
    { item: 'Opening & Closing', price: '$850', note: 'Per burial' },
    { item: 'Ghusl Services', price: 'No charge', note: 'Community service' },
    { item: 'Kafan (Shroud)', price: 'No charge', note: 'Provided by masjid' },
    { item: 'Headstone', price: '$400 - $1,200', note: 'Optional, various styles' },
];

// Community Guidelines
const communityGuidelines = [
    {
        title: 'Food for the Family',
        description: 'Sign up to provide meals for the bereaved family during the first week.',
        icon: Heart,
    },
    {
        title: 'Visiting Hours',
        description: 'Respect the family\'s need for rest. Brief condolence visits are appreciated.',
        icon: Clock,
    },
    {
        title: 'Janazah Attendance',
        description: 'Attend the Janazah prayer if possible. Silence phones and maintain dignity.',
        icon: Users,
    },
    {
        title: 'Make Dua',
        description: 'The Prophet ﷺ said: "When you pray over the deceased, make sincere dua for them."',
        icon: BookOpen,
    },
];

export default function FuneralPage() {
    return (
        <div className={templateStyles.template}>
            {/* 1. The Solace Hero */}
            <section className={styles.solaceHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/night-sky.jpg"
                        alt="Abstract night sky"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    {/* Arabic Calligraphy */}
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicVerse}>إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        <span className={styles.transliteration}>
                            Inna lillahi wa inna ilayhi raji&apos;un
                        </span>
                    </div>

                    <h1 className={styles.heroTitle}>Janazah Services</h1>
                    <p className={styles.heroTagline}>
                        Supporting you and your loved ones through the final journey
                    </p>
                </div>
            </section>

            {/* 2. Emergency Action Bar */}
            <section className={styles.emergencyBar}>
                <div className={styles.emergencyContent}>
                    <div className={styles.emergencyText}>
                        <AlertCircle size={24} />
                        <span className={styles.emergencyQuestion}>Has a death occurred?</span>
                    </div>

                    <div className={styles.emergencyActions}>
                        <a href="tel:+15551234567" className={styles.phoneButton}>
                            <Phone size={20} />
                            <span className={styles.phoneText}>
                                <span className={styles.phoneLabel}>Call Funeral Director (24/7)</span>
                                <span className={styles.phoneNumber}>(555) 123-4567</span>
                            </span>
                        </a>

                        <a href="/documents/immediate-steps-checklist.pdf" className={styles.downloadLink}>
                            <FileDown size={18} />
                            Download Immediate Steps Checklist
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. The Janazah Process */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Guide</span>
                    <h2 className={styles.sectionTitle}>The Janazah Process</h2>
                    <p className={styles.sectionSubtitle}>
                        Understanding and fulfilling the rights of the deceased
                    </p>
                </div>

                <div className={styles.processTimeline}>
                    {janazahSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className={styles.processStep}>
                                {/* Timeline connector */}
                                {index < janazahSteps.length - 1 && (
                                    <div className={styles.timelineConnector} />
                                )}

                                <div className={styles.stepMarker}>
                                    <Icon size={20} />
                                </div>

                                <div className={styles.stepContent}>
                                    <div className={styles.stepHeader}>
                                        <span className={styles.stepNumber}>Step {step.number}</span>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <span className={styles.stepSubtitle}>{step.subtitle}</span>
                                    </div>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. Cemetery & Burial Plots */}
            <section className={styles.cemeterySection}>
                <div className={styles.cemeteryGrid}>
                    {/* Left: Cemetery Info */}
                    <div className={styles.cemeteryInfo}>
                        <h2 className={styles.cemeteryTitle}>Muslim Cemetery</h2>

                        <div className={styles.cemeteryDetails}>
                            <div className={styles.detailRow}>
                                <MapPin size={18} />
                                <div>
                                    <strong>Al-Noor Memorial Gardens</strong>
                                    <span>2500 Memorial Drive, Springfield, IL 62704</span>
                                </div>
                            </div>

                            <div className={styles.detailRow}>
                                <Clock size={18} />
                                <div>
                                    <strong>Visiting Hours</strong>
                                    <span>Daily: Sunrise to Sunset</span>
                                </div>
                            </div>

                            <div className={styles.detailRow}>
                                <Landmark size={18} />
                                <div>
                                    <strong>Qibla-Facing Plots</strong>
                                    <span>All graves face towards Mecca</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapLink}
                        >
                            <MapPin size={16} />
                            Get Directions
                        </a>
                    </div>

                    {/* Right: Pricing Table */}
                    <div className={styles.pricingBlock}>
                        <h3 className={styles.pricingTitle}>Burial Costs</h3>

                        <table className={styles.pricingTable}>
                            <tbody>
                                {pricingItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className={styles.itemName}>{item.item}</td>
                                        <td className={styles.itemPrice}>{item.price}</td>
                                        <td className={styles.itemNote}>{item.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles.assistanceNote}>
                            <HandHeart size={18} />
                            <p>
                                We offer financial assistance for families unable to afford burial costs.
                                No Muslim should go unburied due to financial hardship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Condolences & Community Etiquette */}
            <section className={styles.condolencesSection}>
                <div className={styles.condolencesCard}>
                    <div className={styles.condolencesHeader}>
                        <HandHeart size={32} />
                        <h2>Comforting the Family</h2>
                        <p>How our community supports one another in times of loss</p>
                    </div>

                    <div className={styles.guidelinesGrid}>
                        {communityGuidelines.map((guideline, index) => {
                            const Icon = guideline.icon;
                            return (
                                <div key={index} className={styles.guidelineItem}>
                                    <Icon size={20} />
                                    <h4>{guideline.title}</h4>
                                    <p>{guideline.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.duaBlock}>
                        <span className={styles.duaArabic}>اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ</span>
                        <span className={styles.duaTranslation}>
                            &ldquo;O Allah, forgive them and have mercy on them.&rdquo;
                        </span>
                    </div>
                </div>
            </section>

            {/* 6. Donate to Janazah Fund */}
            <section className={styles.donateSection}>
                <div className={styles.donateCard}>
                    <div className={styles.donateContent}>
                        <DollarSign size={24} />
                        <div>
                            <h3>Janazah Sadaqah Fund</h3>
                            <p>
                                Help us cover burial costs for the needy in our community.
                                Your donation ensures every Muslim receives a proper burial.
                            </p>
                        </div>
                    </div>
                    <Link href="/heritage/join/donate?fund=janazah" className={styles.donateButton}>
                        Donate to Sadaqah Fund
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
