// src/app/[locale]/AdminDashboard/layout.tsx
// This remains a Server Component – no 'use client'

import { AdminShellClient } from '@/components/AdminDashboard/Shell/AdminShellClient';

export default async function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Fetch notifications count or admin user data here later
    return <AdminShellClient>{children}</AdminShellClient>;
}