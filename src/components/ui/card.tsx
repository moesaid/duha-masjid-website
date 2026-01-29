import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
    "rounded-3xl transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-white border border-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                glass: "bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                "glass-gold": "bg-white/70 backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                gold: "bg-white border border-[#D4AF37]/40 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                emerald: "bg-white border border-[#064E3B]/20 shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                ghost: "bg-transparent",
            },
            hover: {
                none: "",
                lift: "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
                glow: "hover:shadow-[0_0_30px_rgba(6,78,59,0.15)]",
                "glow-gold": "hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
            },
            padding: {
                none: "",
                sm: "p-4",
                default: "p-6",
                lg: "p-8",
                xl: "p-10",
            }
        },
        defaultVariants: {
            variant: "default",
            hover: "none",
            padding: "default",
        },
    }
)

interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, hover, padding, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({ variant, hover, padding }), className)}
            {...props}
        />
    )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "text-xl font-semibold tracking-tight text-[#1A1A1A]",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-[#737373]", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center pt-4", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
