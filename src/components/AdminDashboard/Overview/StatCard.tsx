'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    label: string;
    value: number;
    prefix?: string;
    icon: LucideIcon;
    change: string;
    positive: boolean;
}

export default function StatCard({
    label,
    value,
    prefix = '',
    icon: Icon,
    change,
    positive,
}: StatCardProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 1.5,
            ease: 'easeOut',
        });
        return controls.stop;
    }, [value, count]);

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}
            className="border border-(--color-border) bg-(--bg-surface) p-6 group cursor-default"
        >
            <div className="flex items-center justify-between">
                <span className="font-(--font-ui) text-xs text-(--color-grey-muted) tracking-wider uppercase">
                    {label}
                </span>
                <Icon className="h-5 w-5 text-black group-hover:text-[#D4AF37] transition-colors" />
            </div>

            <div className="mt-2 flex items-baseline gap-1">
                <span className="font-(--font-display) text-3xl text-black">
                    {prefix}
                </span>
                <motion.span className="font-(--font-display) text-3xl text-black tabular-nums">
                    {rounded}
                </motion.span>
            </div>

            <p
                className={`mt-2 font-(--font-ui) text-xs ${positive ? 'text-green-700' : 'text-red-600'
                    }`}
            >
                {change}
                <span className="text-(--color-grey-muted) ml-1">vs last month</span>
            </p>
        </motion.div>
    );
}