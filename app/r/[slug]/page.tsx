import { notFound } from 'next/navigation';
import { getRecruitBySlug } from '@/app/actions/recruit';
import RecruitLandingPage from '@/components/RecruitLandingPage';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recruit = await getRecruitBySlug(slug);

  if (!recruit) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${recruit.name} - AI Trading Platform`,
    description: recruit.headline || 'Turn $500 into $1,000+ in 60 days with AI-powered trading signals',
    openGraph: {
      title: `${recruit.name} - AI Trading Platform`,
      description: recruit.headline || 'Turn $500 into $1,000+ in 60 days',
    },
  };
}

export default async function RecruitPage({ params }: PageProps) {
  const { slug } = await params;
  const recruit = await getRecruitBySlug(slug);

  if (!recruit) {
    notFound();
  }

  return <RecruitLandingPage recruit={recruit} />;
}
