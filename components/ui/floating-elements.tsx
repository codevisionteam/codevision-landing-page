import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementsProps {
    className?: string
    count?: number
    variant?: 'circles' | 'squares' | 'triangles'
}

interface ElementConfig {
    delay: number
    duration: number
    size: number
    left: number
    top: number
}

export function FloatingElements({ className, count = 6, variant = 'circles' }: FloatingElementsProps) {
    const [mounted, setMounted] = useState(false)
    const [elementConfigs, setElementConfigs] = useState<ElementConfig[]>([])

    useEffect(() => {
        setMounted(true)
        // Generate configs on client side to avoid hydration mismatch
        const configs = Array.from({ length: count }, (_, i) => ({
            delay: i * 0.5,
            duration: 8 + Math.random() * 4,
            size: Math.random() * 40 + 20,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }))
        setElementConfigs(configs)
    }, [count])

    if (!mounted) {
        return <div className={cn('absolute inset-0 overflow-hidden', className)} />
    }

    const elements = elementConfigs.map((config, i) => (
        <motion.div
            key={i}
            className={cn(
                'absolute opacity-20 pointer-events-none',
                variant === 'circles' && 'rounded-full bg-gradient-to-r from-primary/30 to-secondary/30',
                variant === 'squares' && 'bg-gradient-to-r from-primary/30 to-secondary/30',
                variant === 'triangles' && 'bg-gradient-to-r from-primary/30 to-secondary/30 transform rotate-45'
            )}
            style={{
                width: config.size,
                height: config.size,
                left: `${config.left}%`,
                top: `${config.top}%`,
            }}
            animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 360],
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                delay: config.delay,
                ease: 'easeInOut',
            }}
        />
    ))

    return <div className={cn('absolute inset-0 overflow-hidden', className)}>{elements}</div>
}

interface GlowEffectProps {
    children: React.ReactNode
    className?: string
    glowColor?: string
    intensity?: 'low' | 'medium' | 'high'
}

export function GlowEffect({
    children,
    className,
    glowColor = 'rgb(var(--primary))',
    intensity = 'medium'
}: GlowEffectProps) {
    const glowIntensity = {
        low: '0 0 20px',
        medium: '0 0 30px',
        high: '0 0 40px',
    }

    return (
        <motion.div
            className={cn('relative', className)}
            whileHover={{
                filter: `drop-shadow(${glowIntensity[intensity]} ${glowColor})`,
                transition: { duration: 0.3 }
            }}
        >
            {children}
        </motion.div>
    )
}
