// Membership Page - HERITAGE ALIGNED
// Design: Dynamic membership application form with fee calculation
'use client';

import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import styles from './MembershipPage.module.scss';
import {
    CheckCircle, Users, Heart, Award, Calendar as CalendarIcon, Vote, Gift, MessageCircle,
    UserPlus, Trash2, Upload, FileText, DollarSign
} from 'lucide-react';
import {
    MEMBERSHIP_FEE,
    FREE_AGE_THRESHOLD,
    MEMBERSHIP_TYPES,
    calculateAge,
    calculateMembershipFee,
    isFreeMember,
    type MembershipType
} from '@/lib/membership-config';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Membership Benefits
const benefits = [
    {
        icon: Vote,
        title: 'Voting Rights',
        description: 'Participate in community elections and shape the future leadership of our masjid.'
    },
    {
        icon: CalendarIcon,
        title: 'Event Discounts',
        description: 'Receive discounts on facility rentals, banquets, and ticketed community events.'
    },
    {
        icon: Award,
        title: 'Program Priority',
        description: 'Priority registration for popular classes, camps, and limited-enrollment programs.'
    },
    {
        icon: MessageCircle,
        title: 'Direct Communication',
        description: 'Access to member-only announcements, town halls, and feedback channels.'
    },
    {
        icon: Gift,
        title: 'Family Benefits',
        description: 'Family memberships cover all household members for education and youth programs.'
    },
    {
        icon: Heart,
        title: 'Community Support',
        description: 'Your dues directly support masjid operations, programs, and community services.'
    }
];

// FAQ
const faqs = [
    {
        question: 'Who can become a member?',
        answer: 'Any Muslim who agrees to our masjid bylaws and wishes to contribute to our community can apply for membership. We welcome all backgrounds and walks of life.'
    },
    {
        question: 'What documents do I need?',
        answer: 'Each member will need a valid government-issued ID (driver\'s license, passport, or state ID) and proof of residence (utility bill, bank statement, or lease agreement).'
    },
    {
        question: 'Is there a fee for youth members?',
        answer: `Members under ${FREE_AGE_THRESHOLD} years old are free. Adult members pay a one-time annual fee of $${MEMBERSHIP_FEE}.`
    },
    {
        question: 'What if I cannot afford the membership fee?',
        answer: 'We never want finances to be a barrier. Please contact our office confidentially to discuss scholarship options.'
    }
];

// Types
interface FamilyMember {
    id: string;
    fullName: string;
    dateOfBirth: Date | undefined;
    idDocument: File | null;
    residenceProof: File | null;
}

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date | undefined;
    membershipType: MembershipType;
    familyMembers: FamilyMember[];
    idDocument: File | null;
    residenceProof: File | null;
}

// DatePicker Component
function DatePicker({
    date,
    onSelect,
    placeholder = "Select date"
}: {
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    placeholder?: string;
}) {
    const [open, setOpen] = useState(false);

    const handleSelect = (selectedDate: Date | undefined) => {
        onSelect(selectedDate);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className={`${styles.datePickerTrigger} ${!date ? styles.placeholder : ''}`}
                >
                    <CalendarIcon size={18} />
                    <span>{date ? format(date, "MMMM d, yyyy") : placeholder}</span>
                </button>
            </PopoverTrigger>
            <PopoverContent className={styles.calendarPopover} align="start" sideOffset={8}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    defaultMonth={date || new Date(2000, 0)}
                    captionLayout="dropdown"
                    fromYear={1920}
                    toYear={new Date().getFullYear()}
                    className={styles.heritageCalendar}
                />
            </PopoverContent>
        </Popover>
    );
}

export default function MembershipPage() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: undefined,
        membershipType: MEMBERSHIP_TYPES.INDIVIDUAL,
        familyMembers: [],
        idDocument: null,
        residenceProof: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Calculate fee based on primary member and family members
    const feeBreakdown = useMemo(() => {
        const primaryDob = formData.dateOfBirth || null;
        const primaryAge = primaryDob ? calculateAge(primaryDob) : null;
        const primaryFee = calculateMembershipFee(primaryDob);
        const primaryIsFree = isFreeMember(primaryDob);

        let familyFees: { name: string; age: number | null; fee: number; isFree: boolean }[] = [];

        if (formData.membershipType === MEMBERSHIP_TYPES.FAMILY) {
            familyFees = formData.familyMembers.map(member => {
                const dob = member.dateOfBirth || null;
                const age = dob ? calculateAge(dob) : null;
                const fee = calculateMembershipFee(dob);
                const isFree = isFreeMember(dob);
                return { name: member.fullName || 'Family Member', age, fee, isFree };
            });
        }

        const totalFamilyFees = familyFees.reduce((sum, m) => sum + m.fee, 0);
        const totalFee = primaryFee + totalFamilyFees;

        return {
            primary: { age: primaryAge, fee: primaryFee, isFree: primaryIsFree },
            family: familyFees,
            total: totalFee
        };
    }, [formData.dateOfBirth, formData.membershipType, formData.familyMembers]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date: Date | undefined) => {
        setFormData(prev => ({ ...prev, dateOfBirth: date }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'idDocument' | 'residenceProof') => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, [field]: file }));
    };

    const handleFamilyFileChange = (memberId: string, field: 'idDocument' | 'residenceProof', file: File | null) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.map(m =>
                m.id === memberId ? { ...m, [field]: file } : m
            )
        }));
    };

    const addFamilyMember = () => {
        const newMember: FamilyMember = {
            id: crypto.randomUUID(),
            fullName: '',
            dateOfBirth: undefined,
            idDocument: null,
            residenceProof: null
        };
        setFormData(prev => ({
            ...prev,
            familyMembers: [...prev.familyMembers, newMember]
        }));
    };

    const removeFamilyMember = (id: string) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.filter(m => m.id !== id)
        }));
    };

    const updateFamilyMember = (id: string, field: keyof FamilyMember, value: string | Date | undefined) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.map(m =>
                m.id === id ? { ...m, [field]: value } : m
            )
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);
    };

    return (
        <main className={styles.membershipPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Join Our Family</span>
                    <h1 className={styles.heroTitle}>Become a Member</h1>
                    <p className={styles.heroSubtitle}>
                        Support your masjid and become an active part of our growing community
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Membership Benefits</h2>
                    <p className={styles.sectionSubtitle}>More than just a card — a lifelong connection</p>
                </div>

                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, idx) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={idx} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Application Form Section */}
            <section className={styles.applicationSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Apply for Membership</h2>
                    <p className={styles.sectionSubtitle}>
                        Complete the form below to join our community
                    </p>
                </div>

                {submitSuccess ? (
                    <div className={styles.successMessage}>
                        <CheckCircle size={48} />
                        <h3>Application Submitted!</h3>
                        <p>
                            Thank you for applying. Our team will review your application
                            and contact you within 3-5 business days.
                        </p>
                    </div>
                ) : (
                    <form className={styles.applicationForm} onSubmit={handleSubmit}>
                        {/* Primary Member Information */}
                        <div className={styles.formCard}>
                            <h3 className={styles.formCardTitle}>
                                <Users size={20} />
                                Primary Member Information
                            </h3>

                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel} htmlFor="fullName">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className={styles.formInput}
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your full legal name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel} htmlFor="email">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.formInput}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel} htmlFor="phone">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className={styles.formInput}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        Date of Birth *
                                    </label>
                                    <DatePicker
                                        date={formData.dateOfBirth}
                                        onSelect={handleDateChange}
                                        placeholder="Select your birth date"
                                    />
                                    {formData.dateOfBirth && (
                                        <span className={`${styles.ageNote} ${feeBreakdown.primary.isFree ? styles.free : ''}`}>
                                            Age: {feeBreakdown.primary.age} years
                                            {feeBreakdown.primary.isFree && ' (Free membership)'}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Primary Member Documents */}
                            <div className={styles.memberDocuments}>
                                <h4 className={styles.documentsTitle}>
                                    <FileText size={16} />
                                    Required Documents
                                </h4>
                                <div className={styles.uploadGrid}>
                                    <div className={styles.uploadGroup}>
                                        <label className={styles.formLabel}>
                                            Government-Issued ID *
                                        </label>
                                        <label className={styles.uploadBox}>
                                            <input
                                                type="file"
                                                accept="image/*,.pdf"
                                                onChange={(e) => handleFileChange(e, 'idDocument')}
                                                required
                                            />
                                            {formData.idDocument ? (
                                                <span className={styles.fileName}>
                                                    <CheckCircle size={16} />
                                                    {formData.idDocument.name}
                                                </span>
                                            ) : (
                                                <span className={styles.uploadPrompt}>
                                                    <Upload size={20} />
                                                    Upload ID
                                                </span>
                                            )}
                                        </label>
                                    </div>

                                    <div className={styles.uploadGroup}>
                                        <label className={styles.formLabel}>
                                            Proof of Residence *
                                        </label>
                                        <label className={styles.uploadBox}>
                                            <input
                                                type="file"
                                                accept="image/*,.pdf"
                                                onChange={(e) => handleFileChange(e, 'residenceProof')}
                                                required
                                            />
                                            {formData.residenceProof ? (
                                                <span className={styles.fileName}>
                                                    <CheckCircle size={16} />
                                                    {formData.residenceProof.name}
                                                </span>
                                            ) : (
                                                <span className={styles.uploadPrompt}>
                                                    <Upload size={20} />
                                                    Upload Proof
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Membership Type */}
                        <div className={styles.formCard}>
                            <h3 className={styles.formCardTitle}>
                                <Heart size={20} />
                                Membership Type
                            </h3>

                            <div className={styles.typeSelector}>
                                <label className={`${styles.typeOption} ${formData.membershipType === MEMBERSHIP_TYPES.INDIVIDUAL ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="membershipType"
                                        value={MEMBERSHIP_TYPES.INDIVIDUAL}
                                        checked={formData.membershipType === MEMBERSHIP_TYPES.INDIVIDUAL}
                                        onChange={handleInputChange}
                                    />
                                    <div className={styles.typeContent}>
                                        <span className={styles.typeName}>Individual</span>
                                        <span className={styles.typeDesc}>Single adult member</span>
                                    </div>
                                </label>

                                <label className={`${styles.typeOption} ${formData.membershipType === MEMBERSHIP_TYPES.FAMILY ? styles.selected : ''}`}>
                                    <input
                                        type="radio"
                                        name="membershipType"
                                        value={MEMBERSHIP_TYPES.FAMILY}
                                        checked={formData.membershipType === MEMBERSHIP_TYPES.FAMILY}
                                        onChange={handleInputChange}
                                    />
                                    <div className={styles.typeContent}>
                                        <span className={styles.typeName}>Family</span>
                                        <span className={styles.typeDesc}>Include household members</span>
                                    </div>
                                </label>
                            </div>

                            {/* Family Members */}
                            {formData.membershipType === MEMBERSHIP_TYPES.FAMILY && (
                                <div className={styles.familySection}>
                                    <div className={styles.familyHeader}>
                                        <h4>Family Members</h4>
                                        <button
                                            type="button"
                                            className={styles.addMemberBtn}
                                            onClick={addFamilyMember}
                                        >
                                            <UserPlus size={16} />
                                            Add Family Member
                                        </button>
                                    </div>

                                    {formData.familyMembers.length === 0 ? (
                                        <p className={styles.noMembers}>
                                            No family members added yet. Click the button above to add.
                                        </p>
                                    ) : (
                                        <div className={styles.familyList}>
                                            {formData.familyMembers.map((member, idx) => (
                                                <div key={member.id} className={styles.familyMemberCard}>
                                                    <div className={styles.memberHeader}>
                                                        <span>Family Member {idx + 1}</span>
                                                        <button
                                                            type="button"
                                                            className={styles.removeMemberBtn}
                                                            onClick={() => removeFamilyMember(member.id)}
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>

                                                    {/* Member Info Fields */}
                                                    <div className={styles.memberFields}>
                                                        <div className={styles.formGroup}>
                                                            <label className={styles.formLabel}>Full Name *</label>
                                                            <input
                                                                type="text"
                                                                className={styles.formInput}
                                                                placeholder="Full Name"
                                                                value={member.fullName}
                                                                onChange={(e) => updateFamilyMember(member.id, 'fullName', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={styles.formGroup}>
                                                            <label className={styles.formLabel}>Date of Birth *</label>
                                                            <DatePicker
                                                                date={member.dateOfBirth}
                                                                onSelect={(date) => updateFamilyMember(member.id, 'dateOfBirth', date)}
                                                                placeholder="Select birth date"
                                                            />
                                                        </div>
                                                    </div>

                                                    {member.dateOfBirth && (
                                                        <span className={`${styles.ageNote} ${feeBreakdown.family[idx]?.isFree ? styles.free : ''}`}>
                                                            Age: {feeBreakdown.family[idx]?.age} years
                                                            {feeBreakdown.family[idx]?.isFree && ' (Free)'}
                                                            {!feeBreakdown.family[idx]?.isFree && ` ($${MEMBERSHIP_FEE})`}
                                                        </span>
                                                    )}

                                                    {/* Member Documents */}
                                                    <div className={styles.memberDocuments}>
                                                        <h5 className={styles.documentsTitle}>
                                                            <FileText size={14} />
                                                            Required Documents
                                                        </h5>
                                                        <div className={styles.uploadGrid}>
                                                            <div className={styles.uploadGroup}>
                                                                <label className={styles.formLabel}>ID Document *</label>
                                                                <label className={styles.uploadBoxSmall}>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*,.pdf"
                                                                        onChange={(e) => handleFamilyFileChange(member.id, 'idDocument', e.target.files?.[0] || null)}
                                                                        required
                                                                    />
                                                                    {member.idDocument ? (
                                                                        <span className={styles.fileName}>
                                                                            <CheckCircle size={14} />
                                                                            {member.idDocument.name}
                                                                        </span>
                                                                    ) : (
                                                                        <span className={styles.uploadPrompt}>
                                                                            <Upload size={16} />
                                                                            Upload ID
                                                                        </span>
                                                                    )}
                                                                </label>
                                                            </div>

                                                            <div className={styles.uploadGroup}>
                                                                <label className={styles.formLabel}>Residence Proof *</label>
                                                                <label className={styles.uploadBoxSmall}>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*,.pdf"
                                                                        onChange={(e) => handleFamilyFileChange(member.id, 'residenceProof', e.target.files?.[0] || null)}
                                                                        required
                                                                    />
                                                                    {member.residenceProof ? (
                                                                        <span className={styles.fileName}>
                                                                            <CheckCircle size={14} />
                                                                            {member.residenceProof.name}
                                                                        </span>
                                                                    ) : (
                                                                        <span className={styles.uploadPrompt}>
                                                                            <Upload size={16} />
                                                                            Upload Proof
                                                                        </span>
                                                                    )}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Fee Summary */}
                        <div className={styles.feeSummary}>
                            <h3 className={styles.feeTitle}>
                                <DollarSign size={20} />
                                Membership Fee
                            </h3>

                            <div className={styles.feeBreakdown}>
                                <div className={styles.feeRow}>
                                    <span>Primary Member ({formData.fullName || 'You'})</span>
                                    <span className={feeBreakdown.primary.isFree ? styles.freeAmount : ''}>
                                        {feeBreakdown.primary.isFree ? 'FREE' : `$${feeBreakdown.primary.fee}`}
                                    </span>
                                </div>

                                {formData.membershipType === MEMBERSHIP_TYPES.FAMILY && feeBreakdown.family.map((member, idx) => (
                                    <div key={idx} className={styles.feeRow}>
                                        <span>{member.name}</span>
                                        <span className={member.isFree ? styles.freeAmount : ''}>
                                            {member.isFree ? 'FREE' : `$${member.fee}`}
                                        </span>
                                    </div>
                                ))}

                                <div className={`${styles.feeRow} ${styles.totalRow}`}>
                                    <span>Total Due</span>
                                    <span className={styles.totalAmount}>
                                        ${feeBreakdown.total}
                                    </span>
                                </div>
                            </div>

                            <p className={styles.feeNote}>
                                Members under {FREE_AGE_THRESHOLD} years old qualify for free membership.
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>
                )}
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>{faq.question}</h4>
                            <p className={styles.faqAnswer}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
