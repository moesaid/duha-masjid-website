'use client';

import { CheckCircle, Users, Heart, UserPlus, Trash2, Upload, FileText, DollarSign } from 'lucide-react';
import { MEMBERSHIP_FEE, FREE_AGE_THRESHOLD, MEMBERSHIP_TYPES } from '@/lib/membership-config';
import { UseMembershipFormReturn } from '../../_hooks';
import { DatePicker } from './DatePicker';
import styles from './ApplicationForm.module.scss';

interface ApplicationFormProps {
    form: UseMembershipFormReturn;
}

export function ApplicationForm({ form }: ApplicationFormProps) {
    const { formData, isSubmitting, submitSuccess, feeBreakdown } = form;

    if (submitSuccess) {
        return (
            <section className={styles.applicationSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Apply for Membership</h2>
                    <p className={styles.sectionSubtitle}>Complete the form below to join our community</p>
                </div>
                <div className={styles.successMessage}>
                    <CheckCircle size={48} />
                    <h3>Application Submitted!</h3>
                    <p>Thank you for applying. Our team will review your application and contact you within 3-5 business days.</p>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.applicationSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Apply for Membership</h2>
                <p className={styles.sectionSubtitle}>Complete the form below to join our community</p>
            </div>

            <form className={styles.applicationForm} onSubmit={form.handleSubmit}>
                {/* Primary Member Information */}
                <div className={styles.formCard}>
                    <h3 className={styles.formCardTitle}>
                        <Users size={20} />
                        Primary Member Information
                    </h3>

                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="fullName">Full Name *</label>
                            <input type="text" id="fullName" name="fullName" className={styles.formInput}
                                value={formData.fullName} onChange={form.handleInputChange}
                                required placeholder="Enter your full legal name" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" className={styles.formInput}
                                value={formData.email} onChange={form.handleInputChange}
                                required placeholder="your.email@example.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" className={styles.formInput}
                                value={formData.phone} onChange={form.handleInputChange}
                                required placeholder="(555) 123-4567" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Date of Birth *</label>
                            <DatePicker date={formData.dateOfBirth} onSelect={form.handleDateChange}
                                placeholder="Select your birth date" />
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
                        <h4 className={styles.documentsTitle}><FileText size={16} /> Required Documents</h4>
                        <div className={styles.uploadGrid}>
                            <div className={styles.uploadGroup}>
                                <label className={styles.formLabel}>Government-Issued ID *</label>
                                <label className={styles.uploadBox}>
                                    <input type="file" accept="image/*,.pdf"
                                        onChange={(e) => form.handleFileChange(e, 'idDocument')} required />
                                    {formData.idDocument ? (
                                        <span className={styles.fileName}><CheckCircle size={16} /> {formData.idDocument.name}</span>
                                    ) : (<span className={styles.uploadPrompt}><Upload size={20} /> Upload ID</span>)}
                                </label>
                            </div>

                            <div className={styles.uploadGroup}>
                                <label className={styles.formLabel}>Proof of Residence *</label>
                                <label className={styles.uploadBox}>
                                    <input type="file" accept="image/*,.pdf"
                                        onChange={(e) => form.handleFileChange(e, 'residenceProof')} required />
                                    {formData.residenceProof ? (
                                        <span className={styles.fileName}><CheckCircle size={16} /> {formData.residenceProof.name}</span>
                                    ) : (<span className={styles.uploadPrompt}><Upload size={20} /> Upload Proof</span>)}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Membership Type */}
                <div className={styles.formCard}>
                    <h3 className={styles.formCardTitle}><Heart size={20} /> Membership Type</h3>

                    <div className={styles.typeSelector}>
                        <label className={`${styles.typeOption} ${formData.membershipType === MEMBERSHIP_TYPES.INDIVIDUAL ? styles.selected : ''}`}>
                            <input type="radio" name="membershipType" value={MEMBERSHIP_TYPES.INDIVIDUAL}
                                checked={formData.membershipType === MEMBERSHIP_TYPES.INDIVIDUAL}
                                onChange={form.handleInputChange} />
                            <div className={styles.typeContent}>
                                <span className={styles.typeName}>Individual</span>
                                <span className={styles.typeDesc}>Single adult member</span>
                            </div>
                        </label>

                        <label className={`${styles.typeOption} ${formData.membershipType === MEMBERSHIP_TYPES.FAMILY ? styles.selected : ''}`}>
                            <input type="radio" name="membershipType" value={MEMBERSHIP_TYPES.FAMILY}
                                checked={formData.membershipType === MEMBERSHIP_TYPES.FAMILY}
                                onChange={form.handleInputChange} />
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
                                <button type="button" className={styles.addMemberBtn} onClick={form.addFamilyMember}>
                                    <UserPlus size={16} /> Add Family Member
                                </button>
                            </div>

                            {formData.familyMembers.length === 0 ? (
                                <p className={styles.noMembers}>No family members added yet. Click the button above to add.</p>
                            ) : (
                                <div className={styles.familyList}>
                                    {formData.familyMembers.map((member, idx) => (
                                        <div key={member.id} className={styles.familyMemberCard}>
                                            <div className={styles.memberHeader}>
                                                <span>Family Member {idx + 1}</span>
                                                <button type="button" className={styles.removeMemberBtn}
                                                    onClick={() => form.removeFamilyMember(member.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>

                                            <div className={styles.memberFields}>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.formLabel}>Full Name *</label>
                                                    <input type="text" className={styles.formInput} placeholder="Full Name"
                                                        value={member.fullName}
                                                        onChange={(e) => form.updateFamilyMember(member.id, 'fullName', e.target.value)}
                                                        required />
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.formLabel}>Date of Birth *</label>
                                                    <DatePicker date={member.dateOfBirth}
                                                        onSelect={(date) => form.updateFamilyMember(member.id, 'dateOfBirth', date)}
                                                        placeholder="Select birth date" />
                                                </div>
                                            </div>

                                            {member.dateOfBirth && (
                                                <span className={`${styles.ageNote} ${feeBreakdown.family[idx]?.isFree ? styles.free : ''}`}>
                                                    Age: {feeBreakdown.family[idx]?.age} years
                                                    {feeBreakdown.family[idx]?.isFree && ' (Free)'}
                                                    {!feeBreakdown.family[idx]?.isFree && ` ($${MEMBERSHIP_FEE})`}
                                                </span>
                                            )}

                                            <div className={styles.memberDocuments}>
                                                <h5 className={styles.documentsTitle}><FileText size={14} /> Required Documents</h5>
                                                <div className={styles.uploadGrid}>
                                                    <div className={styles.uploadGroup}>
                                                        <label className={styles.formLabel}>ID Document *</label>
                                                        <label className={styles.uploadBoxSmall}>
                                                            <input type="file" accept="image/*,.pdf"
                                                                onChange={(e) => form.handleFamilyFileChange(member.id, 'idDocument', e.target.files?.[0] || null)}
                                                                required />
                                                            {member.idDocument ? (
                                                                <span className={styles.fileName}><CheckCircle size={14} /> {member.idDocument.name}</span>
                                                            ) : (<span className={styles.uploadPrompt}><Upload size={16} /> Upload ID</span>)}
                                                        </label>
                                                    </div>

                                                    <div className={styles.uploadGroup}>
                                                        <label className={styles.formLabel}>Residence Proof *</label>
                                                        <label className={styles.uploadBoxSmall}>
                                                            <input type="file" accept="image/*,.pdf"
                                                                onChange={(e) => form.handleFamilyFileChange(member.id, 'residenceProof', e.target.files?.[0] || null)}
                                                                required />
                                                            {member.residenceProof ? (
                                                                <span className={styles.fileName}><CheckCircle size={14} /> {member.residenceProof.name}</span>
                                                            ) : (<span className={styles.uploadPrompt}><Upload size={16} /> Upload Proof</span>)}
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
                    <h3 className={styles.feeTitle}><DollarSign size={20} /> Membership Fee</h3>

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
                            <span className={styles.totalAmount}>${feeBreakdown.total}</span>
                        </div>
                    </div>

                    <p className={styles.feeNote}>Members under {FREE_AGE_THRESHOLD} years old qualify for free membership.</p>
                </div>

                {/* Submit */}
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </section>
    );
}
