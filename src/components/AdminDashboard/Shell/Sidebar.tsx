'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    ShoppingBag,
    CreditCard,
    Shirt,
    Megaphone,
    Star,
    HeadphonesIcon,
    BarChart3,
    Settings,
    ChevronLeft,
    Scissors,
} from 'lucide-react'; // or your custom icon set

const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/AdminDashboard' },
    { icon: Users, label: 'Users', href: '/AdminDashboard/users' },
    { icon: ShoppingBag, label: 'Orders', href: '/AdminDashboard/orders' },
    { icon: CreditCard, label: 'Finance', href: '/AdminDashboard/finance' },
    { icon: Shirt, label: 'Catalog', href: '/AdminDashboard/catalog' },
    { icon: Megaphone, label: 'Marketing', href: '/AdminDashboard/marketing' },
    { icon: Star, label: 'Reviews', href: '/AdminDashboard/reviews' },
    { icon: HeadphonesIcon, label: 'Support', href: '/AdminDashboard/support' },
    { icon: BarChart3, label: 'Analytics', href: '/AdminDashboard/analytics' },
    { icon: Settings, label: 'Settings', href: '/AdminDashboard/settings' },
];

export default function Sidebar({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
    const pathname = usePathname();

    return (
        <motion.aside
            animate={{ width: open ? 260 : 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="h-screen border-r border-(--color-border) bg-(--bg-surface) flex flex-col"
        >
            {/* Logo area */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-(--color-border-subtle)">
                {open && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-(--font-display) text-xl tracking-tight text-black"
                    >
                        ATELIER
                    </motion.span>
                )}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-none p-2 hover:bg-(--color-border-subtle) transition-colors"
                >
                    <ChevronLeft
                        className={`h-5 w-5 transition-transform ${open ? '' : 'rotate-180'
                            }`}
                    />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 space-y-1 px-2">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-none transition-colors group ${isActive
                                    ? 'bg-black text-white'
                                    : 'text-(--color-grey-muted) hover:bg-(--color-border-subtle) hover:text-black'
                                }`}
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <AnimatePresence>
                                {open && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="font-(--font-ui) text-sm tracking-wide truncate"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    );
                })}
            </nav>

            {/* Tailor-specific quick action */}
            <div className="border-t border-(--color-border-subtle) p-4">
                {open ? (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 w-full px-3 py-2 bg-[#D4AF37] text-black font-(--font-ui) text-sm hover:bg-opacity-90 transition-colors"
                    >
                        <Scissors className="h-4 w-4" />
                        Tailor Approval Queue
                    </motion.button>
                ) : (
                    <Scissors className="h-5 w-5 mx-auto text-[#D4AF37]" />
                )}
            </div>
        </motion.aside>
    );
}