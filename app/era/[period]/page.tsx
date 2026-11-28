import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EraView from '@/components/EraView';
import { ERA_PERIODS, eraPeriodById, isEraPeriodId } from '@/lib/eras';

interface PageProps {
  params: Promise<{ period: string }>;
}

export function generateStaticParams() {
  return ERA_PERIODS.map((period) => ({ period: period.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { period } = await params;
  const found = eraPeriodById(period);
  const episode = found?.episodes[0];
  if (!episode) return { title: found?.label ?? 'Era' };
  return {
    title: episode.title,
    description: episode.lines[0]?.summary,
  };
}

export default async function EraPeriodPage({ params }: PageProps) {
  const { period } = await params;
  if (!isEraPeriodId(period)) notFound();
  const found = eraPeriodById(period);
  if (!found) notFound();
  return <EraView period={found} />;
}
