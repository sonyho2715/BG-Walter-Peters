import { redirect } from 'next/navigation';
import { getRecruitAuth } from '@/app/actions/recruit';
import RecruitEditDashboard from '@/components/RecruitEditDashboard';

export default async function RecruitEditPage() {
  const { isLoggedIn, recruit } = await getRecruitAuth();

  if (!isLoggedIn || !recruit) {
    redirect('/recruit/login');
  }

  return <RecruitEditDashboard recruit={recruit} />;
}
