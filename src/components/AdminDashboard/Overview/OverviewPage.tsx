'use client';

import { motion } from 'framer-motion';
import StatCard from './StatCard';
import { DollarSign, ShoppingBag, Users, UserCheck } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function OverviewPage({
    stats,
}: {
    stats: {
        totalRevenue: number;
        ordersToday: number;
        activeTailors: number;
        newCustomers: number;
        // ... more
    };
}) {
    const statCards = [
        {
            label: 'Total Revenue',
            value: stats.totalRevenue,
            prefix: '$',
            icon: DollarSign,
            change: '+12.5%',
            positive: true,
        },
        {
            label: 'Orders Today',
            value: stats.ordersToday,
            icon: ShoppingBag,
            change: '+8.2%',
            positive: true,
        },
        {
            label: 'Active Tailors',
            value: stats.activeTailors,
            icon: UserCheck,
            change: '32 new',
            positive: true,
        },
        {
            label: 'New Customers',
            value: stats.newCustomers,
            icon: Users,
            change: '-3.1%',
            positive: false,
        },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            {/* Page heading */}
            <div>
                <h1 className="font-(--font-display) text-3xl tracking-tight text-black">
                    Atelier Dashboard
                </h1>
                <p className="font-(--font-ui) text-sm text-(--color-grey-muted) mt-1">
                    Welcome back, here’s your atelier in numbers.
                </p>
            </div>

            {/* Stat cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((card, i) => (
                    <motion.div key={i} variants={item}>
                        <StatCard {...card} />
                    </motion.div>
                ))}
            </div>

            {/* Placeholder for charts and recent activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div
                    variants={item}
                    className="lg:col-span-2 border border-(--color-border) bg-(--bg-surface) p-6"
                >
                    <h3 className="font-(--font-ui) text-sm mb-4">Revenue Over Time</h3>
                    <div className="h-64 flex items-center justify-center text-(--color-grey-muted)">
                        Chart placeholder (Recharts / Tremor)
                    </div>
                </motion.div>

                <motion.div
                    variants={item}
                    className="border border-(--color-border) bg-(--bg-surface) p-6"
                >
                    <h3 className="font-(--font-ui) text-sm mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        {[
                            'New order #1024 from Emily R.',
                            'Tailor Marco V. approved',
                            'Payout of $2,340 sent to Atelier Noir',
                            'Refund requested for #1021',
                        ].map((activity, i) => (
                            <li
                                key={i}
                                className="text-sm font-(--font-body) border-l-2 border-[#D4AF37] pl-3 text-black"
                            >
                                {activity}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}