'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../_components';
import styles from '../Contact.module.css';

const fadeIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const topics = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'matrimony', label: 'Matrimony Services' },
    { value: 'education', label: 'Education & Classes' },
    { value: 'donation', label: 'Donation & Zakat' },
    { value: 'events', label: 'Events & Hall Rental' },
    { value: 'counseling', label: 'Spiritual Counseling' },
];

export function MessageForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
    };

    return (
        <motion.div
            className={styles.formCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeIn}
        >
            <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send us a Message</h2>
                <p className={styles.formSubtitle}>
                    We typically respond within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                        Brother/Sister Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                        Email Address
                    </label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="topic" className={styles.formLabel}>
                        Topic <span style={{ color: 'var(--destructive)' }}>*</span>
                    </label>
                    <Select
                        value={formData.topic}
                        onValueChange={(value) => setFormData({ ...formData, topic: value })}
                        required
                    >
                        <SelectTrigger id="topic">
                            <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                            {topics.map((topic) => (
                                <SelectItem key={topic.value} value={topic.value}>
                                    {topic.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                        Your Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className={styles.formSubmit}
                >
                    <Send size={18} />
                    Send Message
                </Button>
            </form>
        </motion.div>
    );
}
