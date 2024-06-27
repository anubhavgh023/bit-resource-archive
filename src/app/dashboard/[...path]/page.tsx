"use client";
import { useState } from "react";
import SemesterCard from "@/components/SemesterCard";
import { usePathname } from "next/navigation";
import axios from "axios";
import QuestionPaperDisplay from "@/components/QuestionPaperDisplay";
import getQuestionPapers from "@/lib/getQuestionPapers";

export default async function DashboardPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [questionPaperData, setQuestionPaperData] = useState<
    { course: string; downloadLink: string }[]
  >([]);

  const semesterCount = ["1", "2", "3", "4", "5", "6"];

  // get query details
  const pathName = usePathname();
  const urlSegments = pathName.split("/");
  const course = urlSegments[2];
  const year = urlSegments[3];

  // handle click with server actions
  async function handleClick(semester: string) {
    setSelectedSemester(semester);
    const data = await getQuestionPapers(course, year, semester);
    console.log(data);
    setQuestionPaperData(data);
  }

  // --- conditional rendering of dashboard ---
  return (
    <div className="border rounded-sm p-10 w-full">
      {questionPaperData.length > 0 ? (
        <div className="flex flex-col gap-5">
          <QuestionPaperDisplay data={questionPaperData}></QuestionPaperDisplay>
        </div>
      ) : (
        <div className="rounded-sm grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mx-auto">
          {semesterCount.map((semester) => (
            <SemesterCard
              key={semester}
              semester={semester}
              onClick={() => handleClick(semester)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
