// lib/admin-data.ts

export interface DashboardStats {
    totalRevenue: number;
    ordersToday: number;
    activeTailors: number;
    newCustomers: number;
}

// Simulate a slight delay to mimic a real server fetch
export async function fetchDashboardStats(): Promise<DashboardStats> {
    // In development, you might return hardcoded data directly.
    // For a touch of realism, we can use a small delay.
    await new Promise((resolve) => setTimeout(resolve, 50));

    return {
        totalRevenue: 48720,
        ordersToday: 34,
        activeTailors: 128,
        newCustomers: 12,
    };
}