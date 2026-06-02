'use client';

import { Bell, Search } from 'lucide-react';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="flex h-16 items-center justify-between border-b border-(--color-border) bg-(--bg-surface) px-6">
            <div className="flex items-center gap-4">
                {/* Mobile menu trigger */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-(--color-border-subtle)"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Search bar */}
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-(--color-grey-muted)" />
                    <input
                        type="text"
                        placeholder="Search orders, customers, tailors..."
                        className="w-80 pl-10 pr-4 py-2 border border-(--color-border) bg-transparent font-(--font-ui) text-sm focus:outline-none focus:border-black transition-colors placeholder:text-(--color-grey-muted)"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Notification bell with golden dot */}
                <button className="relative p-2 hover:bg-(--color-border-subtle)">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#D4AF37] ring-2 ring-(--bg-surface)" />
                </button>

                {/* Admin avatar placeholder */}
                <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white font-(--font-ui) text-xs">
                    A
                </div>
            </div>
        </header>
    );
}