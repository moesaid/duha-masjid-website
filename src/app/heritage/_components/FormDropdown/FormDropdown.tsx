'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import styles from './FormDropdown.module.scss';

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface FormDropdownProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    options: DropdownOption[];
    required?: boolean;
    disabled?: boolean;
}

export function FormDropdown({
    value,
    defaultValue,
    onValueChange,
    label,
    placeholder = "Select an option",
    options,
    required = false,
    disabled = false,
}: FormDropdownProps) {
    return (
        <div className={styles.dropdownGroup}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <Select value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
                <SelectTrigger className={styles.selectTrigger}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            className={styles.selectItem}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
