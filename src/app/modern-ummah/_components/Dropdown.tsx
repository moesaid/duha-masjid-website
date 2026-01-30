'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import styles from './Dropdown.module.css';

export interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
    id?: string;
}

export function Dropdown({
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    label,
    required = false,
    id,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on escape key
    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className={styles.dropdownWrapper} ref={dropdownRef}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}

            <button
                type="button"
                id={id}
                className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={selectedOption ? styles.selectedText : styles.placeholderText}>
                    {selectedOption?.label || placeholder}
                </span>
                <ChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className={styles.menu}
                        role="listbox"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        {options.map((option) => (
                            <li key={option.value} role="option" aria-selected={value === option.value}>
                                <button
                                    type="button"
                                    className={`${styles.option} ${value === option.value ? styles.selected : ''}`}
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                >
                                    <span>{option.label}</span>
                                    {value === option.value && <Check size={16} className={styles.checkIcon} />}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Hidden native select for form submission */}
            <select
                className={styles.hiddenSelect}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                aria-hidden="true"
                tabIndex={-1}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
