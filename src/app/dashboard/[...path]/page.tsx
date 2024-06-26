"use client";
import { useState } from "react";
import SemesterCard from "@/components/SemesterCard";
import { usePathname,useRouter } from "next/navigation";
import axios from "axios";

export default function DashboardPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const semesterCount = ["1", "2", "3", "4", "5", "6"];

  const router = useRouter();

  const pathName = usePathname();

  const urlSegments = pathName.split('/');
  const course = urlSegments[2];
  const year = urlSegments[3];

  async function handleClick(semester: string) {
    setSelectedSemester(semester);

    const res = await axios.post(`/api/questionPapers/${course}/${year}/semester_${semester}`, {
      course,
      year,
      semester
    })
    console.log(JSON.stringify(res.data.data));

    router.push(`/questionPapers`);
  }


  return (
    <div className="border border-slate-600 rounded-sm grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-between items-center p-10">
      {semesterCount.map((semester) => {
        return (
          <SemesterCard
            key={semester}
            semester={semester}
            onClick={handleClick}
          ></SemesterCard>
        );
      })}
    </div>
  );
}
