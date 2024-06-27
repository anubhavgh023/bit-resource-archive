"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SemesterCard from "@/components/SemesterCard";
import QuestionPaperDisplay from "@/components/QuestionPaperDisplay";
import getQuestionPapers from "@/lib/getQuestionPapers";

export default function DashboardPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [questionPaperData, setQuestionPaperData] = useState<
    { course: string; downloadLink: { midsem: string; endsem:string} }[]
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
    try {
      if (course && year && semester) {
        // import the required json file dynamically
        const data = await import(`@/questionPaperData/${course}/${year}/sem${semester}_ques.json`);

        setQuestionPaperData(data.default[`semester_${semester}`]);
      }
    } catch (error) {
      console.error("Error fetching questionPaper data", error);
    }
  }

  // --- conditional rendering of dashboard ---
  return (
    <div className="border rounded-sm p-10 w-full">
      {(questionPaperData.length > 0) ? (
        <div className="flex flex-col gap-5">
          <QuestionPaperDisplay data={questionPaperData}></QuestionPaperDisplay>
        </div>
      ) : (
        <div className="rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mx-auto">
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
