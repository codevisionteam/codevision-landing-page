import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticProps {
    children: React.ReactNode
    className?: string
    strength?: number
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * strength
        const deltaY = (e.clientY - centerY) * strength
        setPosition({ x: deltaX, y: deltaY })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            className={cn(className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
            {children}
        </motion.div>
    )
}

interface TiltCardProps {
    children: React.ReactNode
    className?: string
    tiltAngle?: number
}

export function TiltCard({ children, className, tiltAngle = 10 }: TiltCardProps) {
    return (
        <motion.div
            className={cn('transform-gpu', className)}
            whileHover={{
                rotateX: tiltAngle,
                rotateY: tiltAngle,
                scale: 1.05,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            {children}
        </motion.div>
    )
}
