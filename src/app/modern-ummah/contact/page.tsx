import {
    HeroSection,
    ContactGrid,
    MessageForm,
    LocationMap,
    QuickLinks,
} from './_components';
import { contactInfo } from './_data';
import styles from './Contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <HeroSection />
            <ContactGrid contactInfo={contactInfo} />

            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formGrid}>
                        <MessageForm />
                        <LocationMap />
                    </div>
                </div>
            </section>

            <QuickLinks />
        </div>
    );
}
