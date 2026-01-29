"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const progressVariants = cva(
    "relative w-full overflow-hidden rounded-full",
    {
        variants: {
            variant: {
                default: "bg-neutral-100",
                gold: "bg-[#D4AF37]/10",
                emerald: "bg-[#064E3B]/10",
            },
            size: {
                sm: "h-2",
                default: "h-3",
                lg: "h-4",
                xl: "h-6",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const indicatorVariants = cva(
    "h-full rounded-full transition-all duration-500 ease-out",
    {
        variants: {
            variant: {
                default: "bg-[#064E3B]",
                gold: "bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] bg-[length:200%_auto] animate-[liquid-shimmer_3s_ease-in-out_infinite]",
                emerald: "bg-gradient-to-r from-[#064E3B] via-[#065F46] to-[#064E3B]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface ProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
    value?: number
    max?: number
    showLabel?: boolean
    labelPosition?: "inside" | "outside"
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, variant, size, showLabel, labelPosition = "outside", ...props }, ref) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

        return (
            <div className={cn("flex flex-col gap-2", className)}>
                {showLabel && labelPosition === "outside" && (
                    <div className="flex justify-between text-sm">
                        <span className="text-[#525252]">{value.toLocaleString()}</span>
                        <span className="text-[#737373]">{max.toLocaleString()}</span>
                    </div>
                )}
                <div
                    ref={ref}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    className={cn(progressVariants({ variant, size }))}
                    {...props}
                >
                    <div
                        className={cn(indicatorVariants({ variant }))}
                        style={{ width: `${percentage}%` }}
                    >
                        {showLabel && labelPosition === "inside" && size === "xl" && (
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                                {Math.round(percentage)}%
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress, progressVariants }
