import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
    children: React.ReactNode
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
    duration?: number
}

export function Reveal({
    children,
    className,
    direction = 'up',
    delay = 0,
    duration = 0.6
}: RevealProps) {
    const directionOffset = {
        up: { y: 75 },
        down: { y: -75 },
        left: { x: 75 },
        right: { x: -75 },
    }

    return (
        <motion.div
            className={cn(className)}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }}
        >
            {children}
        </motion.div>
    )
}

interface StaggerProps {
    children: React.ReactNode
    className?: string
    staggerDelay?: number
}

export function Stagger({ children, className, staggerDelay = 0.1 }: StaggerProps) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease: [0.25, 0.25, 0.25, 0.75]
                            }
                        },
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    )
}
