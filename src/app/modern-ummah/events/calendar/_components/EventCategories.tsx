'use client';

import {
    Moon,
    BookOpen,
    Users,
    Heart,
    LayoutGrid
} from 'lucide-react';

interface EventCategoriesProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    { id: 'all', label: 'All Events', icon: LayoutGrid, color: 'bg-slate-900 text-white' },
    { id: 'religious', label: 'Religious', icon: Moon, color: 'bg-emerald-700 text-white' },
    { id: 'education', label: 'Education', icon: BookOpen, color: 'bg-blue-900 text-white' },
    { id: 'social', label: 'Social', icon: Users, color: 'bg-amber-600 text-white' },
    { id: 'youth', label: 'Youth', icon: Heart, color: 'bg-rose-600 text-white' }
];

export function EventCategories({ activeCategory, onCategoryChange }: EventCategoriesProps) {
    return (
        <section className="bg-white border-y border-slate-100 sticky top-0 z-30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex overflow-x-auto py-4 gap-2 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => onCategoryChange(cat.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                                ${activeCategory === cat.id
                                    ? `${cat.color} shadow-md`
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            <cat.icon size={16} />
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
