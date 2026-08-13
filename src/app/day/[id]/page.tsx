import { notFound } from "next/navigation";
import { curriculumData } from "@/data/curriculum";
import DayContent from "@/components/DayContent";

export function generateStaticParams() {
  return curriculumData.map((day) => ({
    id: day.id.toString(),
  }));
}

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const dayId = parseInt(resolvedParams.id, 10);
  const dayData = curriculumData.find((d) => d.id === dayId);

  if (!dayData) {
    notFound();
  }

  const prevDay = dayId > 1 ? dayId - 1 : null;
  const nextDay = dayId < curriculumData.length ? dayId + 1 : null;

  return <DayContent dayId={dayId} prevDay={prevDay} nextDay={nextDay} />;
}
