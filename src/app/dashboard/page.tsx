"use client";
import { useSearchParams, useRouter } from "next/navigation";
import SemesterCard from "@/components/SemesterCard";

export default function DashboardPage() {
  const router = useRouter();

  const semesterCount = ["1", "2", "3", "4", "5", "6"];

  // get query parameters 
  const searchParams = useSearchParams();
  const course = searchParams.get("course");
  const year = searchParams.get("year");

  // Route to /questionPapers 
  async function handleClick(semester: string) {
    router.push(
      `/dashboard/questionPapers?course=${course}&year=${year}&semester=${semester}`
    );
  }

  return (
    <div className="border border-slate-600 rounded-sm p-10 w-full">
      <div className="rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mx-auto">
        {semesterCount.map((semester) => (
          <SemesterCard
            key={semester}
            semester={semester}
            onClick={() => handleClick(semester)}
          />
        ))}
      </div>
    </div>
  );
}
