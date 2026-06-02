import { fetchDashboardStats } from '../../../lib/admindata'; // your data function
import OverviewPage from '../../../components/AdminDashboard/Overview/OverviewPage';

export default async function AdminDashboardPage() {
    // Replace with real server-side data fetching
    const stats = await fetchDashboardStats();
    return <OverviewPage stats={stats} />;
}