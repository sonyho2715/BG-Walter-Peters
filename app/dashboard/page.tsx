import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import ClientDashboard from '@/components/ClientDashboard';
import DashboardHeader from '@/components/DashboardHeader';

export default async function DashboardPage() {
  const session = await getSession();

  if (!session.isLoggedIn || !session.userId) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader userName={session.fullName} userEmail={session.email} />
      <ClientDashboard />
    </div>
  );
}
