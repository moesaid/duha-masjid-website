'use client';

import { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../_components';
import styles from './ResourceLibrary.module.css';
import { resources, interestOptions } from '../_data';

export function ResourceLibrary() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="connect" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Knowledge & Resources</h2>
                    <p>Helpful guides to start your journey</p>
                </div>

                <div className={styles.grid}>
                    {resources.map((res) => {
                        const Icon = res.icon;
                        return (
                            <div key={res.id} className={styles.resourceCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>
                                        <Icon size={20} />
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.resourceTitle}>{res.title}</h3>
                                        <span className={styles.resourceSub}>{res.subtitle}</span>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className={styles.downloadBtn}>
                                    {res.type.includes('PDF') ? <Download size={16} /> : <ExternalLink size={16} />}
                                    {res.type}
                                </Button>
                                {/* Removed styles.downloadBtn usage in favor of className prop if needed for specific layout overrides, 
                                    but Button handles the visual style. Keeping className for layout consistency if defined in CSS. 
                                    Actually, reusing styles.downloadBtn but mapped to Button props might conflict. 
                                    Let's rely on Button props and only use CSS for positioning if needed.
                                    The existing CSS .downloadBtn has flex/align properties which are useful.
                                    Button component wraps content, so we pass className for that.
                                */}
                            </div>
                        );
                    })}
                </div>

                <div className={styles.connectWrapper}>
                    <h3 className={styles.connectTitle}>We Are Here for You</h3>
                    <p className={styles.connectText}>
                        Whether you're ready to embrace Islam or simply curious, we'd love to hear from you.
                    </p>

                    {!submitted ? (
                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                            <Input type="text" placeholder="Your Name" required />
                            <Input type="email" placeholder="Email Address" required />
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="I am interested in..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {interestOptions.map(opt => (
                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button type="submit" variant="primary" className={styles.submitBtn}>Send Message</Button>
                        </form>
                    ) : (
                        <div style={{ padding: '2rem', background: '#ecfdf5', color: '#065f46', borderRadius: '0.5rem' }}>
                            <strong>Thank You!</strong> We have received your message and will be in touch soon.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
