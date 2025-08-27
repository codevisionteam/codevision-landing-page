import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientTextProps {
    children: React.ReactNode
    className?: string
    colors?: string[]
    animated?: boolean
}

export function GradientText({
    children,
    className,
    colors = ['from-primary', 'via-secondary', 'to-accent'],
    animated = true
}: GradientTextProps) {
    const gradientClass = `bg-gradient-to-r ${colors.join(' ')} bg-clip-text text-transparent`

    if (animated) {
        return (
            <motion.span
                className={cn(gradientClass, 'bg-[length:200%_200%]', className)}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    backgroundImage: `linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary))`,
                }}
            >
                {children}
            </motion.span>
        )
    }

    return <span className={cn(gradientClass, className)}>{children}</span>
}

interface ShimmerEffectProps {
    children: React.ReactNode
    className?: string
    shimmerColor?: string
}

export function ShimmerEffect({
    children,
    className,
    shimmerColor = 'rgba(255,255,255,0.1)'
}: ShimmerEffectProps) {
    return (
        <div className={cn('relative overflow-hidden', className)}>
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer" />
            {children}
        </div>
    )
}
