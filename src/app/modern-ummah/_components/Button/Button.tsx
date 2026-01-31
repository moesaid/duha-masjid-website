import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    className?: string;
    children: React.ReactNode;
    download?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    children,
    download,
    ...props
}: ButtonProps | AnchorProps) {
    const classes = `
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${className}
    `.trim();

    if (href) {
        // External link or Download
        if (
            download ||
            href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:')
        ) {
            return (
                <a href={href} className={classes} download={download} {...(props as AnchorProps)}>
                    {children}
                </a>
            );
        }
        // Internal link
        return (
            <Link href={href} className={classes} {...(props as AnchorProps)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...(props as ButtonProps)}>
            {children}
        </button>
    );
}
