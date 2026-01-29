'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
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
    /** Custom class for the container */
    className?: string;
    /** Custom class for the trigger button */
    triggerClassName?: string;
    /** Custom class for the dropdown content */
    contentClassName?: string;
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
    className,
    triggerClassName,
    contentClassName,
}: FormDropdownProps) {
    return (
        <div className={cn(styles.dropdownGroup, className)}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <Select value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
                <SelectTrigger className={cn(styles.selectTrigger, triggerClassName)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className={cn(styles.selectContent, contentClassName)}>
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
