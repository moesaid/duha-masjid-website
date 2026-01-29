import { LucideIcon, GraduationCap, BookOpen, Brain, Star, FileText, ClipboardCheck, MessageSquare, CheckCircle } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface AcademicLevel {
    id: string;
    title: string;
    subtitle: string;
    grades: string;
    color: string;
    icon: LucideIcon;
    description: string;
    highlights: string[];
}

export interface TuitionTier {
    name: string;
    first: number;
    second: number;
    third: number;
}

export interface TuitionProgram {
    title: string;
    grades: string;
    tiers: TuitionTier[];
    installment: boolean;
}

export interface AdditionalFee {
    name: string;
    amount: number;
    note: string;
    nonRefundable: boolean;
}

export interface AdmissionStep {
    step: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface FacultyMember {
    name: string;
    subject: string;
    degree: string;
    image: string;
}

// ============================================
// Static Data
// ============================================

export const academicLevels: AcademicLevel[] = [
    {
        id: 'preschool',
        title: 'Preschool',
        subtitle: 'Foundations',
        grades: 'Ages 3-5',
        color: '#4CAF50',
        icon: Star,
        description: 'Play-based learning in a nurturing Islamic environment. Flexible 2-day, 3-day, and 5-day programs available.',
        highlights: ['Quran Introduction', 'Arabic Letters', 'Social Development', 'Motor Skills']
    },
    {
        id: 'elementary',
        title: 'Elementary',
        subtitle: 'Core Growth',
        grades: 'Grades K-5',
        color: '#2196F3',
        icon: BookOpen,
        description: 'Building strong foundations in literacy, mathematics, and Quranic studies with state-aligned curriculum.',
        highlights: ['Core Academics', 'Quran & Tajweed', 'Arabic Language', 'Islamic Studies']
    },
    {
        id: 'secondary',
        title: 'Middle & High',
        subtitle: 'College Prep',
        grades: 'Grades 6-12',
        color: '#1A3A5C',
        icon: GraduationCap,
        description: 'Rigorous college-preparatory curriculum with dual-enrollment options through Mishkah University partnership.',
        highlights: ['AP/Honors Courses', 'PSEO Options', 'SAT Prep', 'College Counseling']
    },
    {
        id: 'hifz',
        title: 'Hifz Track',
        subtitle: 'Specialized Memorization',
        grades: 'All Ages',
        color: '#B8860B',
        icon: Brain,
        description: 'Integrated academic and Hifz schedule allowing students to complete memorization while maintaining academic excellence.',
        highlights: ['Full-Time Hifz', 'Academic Balance', 'Certified Huffaz', 'Ijazah Program']
    }
];

export const tuitionData: Record<string, TuitionProgram> = {
    preschool: {
        title: 'Preschool Programs',
        grades: 'Ages 3-5',
        tiers: [
            { name: '2-Day Program', first: 3495, second: 3145, third: 2795 },
            { name: '3-Day Program', first: 4995, second: 4495, third: 3995 },
            { name: '5-Day Program', first: 6995, second: 6295, third: 5595 }
        ],
        installment: true
    },
    elementary: {
        title: 'Elementary School',
        grades: 'Grades K-5',
        tiers: [
            { name: 'Standard Tuition', first: 7995, second: 7195, third: 6395 }
        ],
        installment: true
    },
    secondary: {
        title: 'Middle & High School',
        grades: 'Grades 6-12',
        tiers: [
            { name: 'Middle School (6-8)', first: 8495, second: 7645, third: 6795 },
            { name: 'High School (9-12)', first: 8995, second: 8095, third: 7195 }
        ],
        installment: true
    },
    hifz: {
        title: 'Hifz Program',
        grades: 'All Ages',
        tiers: [
            { name: 'Hifz Track', first: 9495, second: 8545, third: 7595 }
        ],
        installment: true
    }
};

export const additionalFees: AdditionalFee[] = [
    { name: 'Registration Fee', amount: 75, note: 'Annual, Non-Refundable', nonRefundable: true },
    { name: 'Technology Fee', amount: 255, note: 'Annual', nonRefundable: false },
    { name: 'Book Fee', amount: 228, note: 'Annual', nonRefundable: false },
    { name: 'New Family Entry', amount: 495, note: 'One-Time', nonRefundable: true },
    { name: 'Re-Enrollment Fee', amount: 300, note: 'Returning Students', nonRefundable: false },
    { name: 'High School Entry', amount: 2000, note: 'One-Time (9-12)', nonRefundable: true }
];

export const admissionSteps: AdmissionStep[] = [
    { step: 1, title: 'Application', description: 'Submit online application with $150 non-refundable fee', icon: FileText },
    { step: 2, title: 'Assessment', description: 'Entrance exam for Math & Reading proficiency', icon: ClipboardCheck },
    { step: 3, title: 'Interview', description: 'Parent & Student interview with Principal', icon: MessageSquare },
    { step: 4, title: 'Enrollment', description: 'Pay Entry Fee ($300-$2,000) and complete registration', icon: CheckCircle }
];

export const faculty: FacultyMember[] = [
    { name: 'Dr. Ahmad Hassan', subject: 'Principal / Islamic Studies', degree: 'Ph.D., Islamic Education', image: '/images/placeholder-teacher.jpg' },
    { name: 'Sarah Williams, M.Ed.', subject: 'Vice Principal / English', degree: 'M.Ed., Curriculum & Instruction', image: '/images/placeholder-teacher.jpg' },
    { name: 'Ustadh Yusuf Ali', subject: 'Quran & Arabic', degree: 'Ijazah, Al-Azhar University', image: '/images/placeholder-teacher.jpg' },
    { name: 'Dr. Emily Chen', subject: 'STEM Director', degree: 'Ph.D., Chemistry', image: '/images/placeholder-teacher.jpg' },
    { name: 'Michael Roberts, M.S.', subject: 'Mathematics', degree: 'M.S., Applied Mathematics', image: '/images/placeholder-teacher.jpg' }
];
