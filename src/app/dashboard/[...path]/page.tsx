"use client";
import { useState } from "react";
import SemesterCard from "@/components/SemesterCard";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import QuestionPaperDisplay from "@/components/QuestionPaperDisplay";

export default function DashboardPage() {
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

  // handle click
  async function handleClick(semester: string) {
    setSelectedSemester(semester);

    try {
      const res = await axios.post(
        `/api/questionPapers/${course}/${year}/semester_${semester}`,
        {
          course,
          year,
          semester,
        }
      );

      console.log(res.data.data);

      // set the question paper data for rendering
      setQuestionPaperData(res.data.data[`semester_${semester}`]);
    } catch (error) {
      console.error("Error fetching question papers:", error);
    }
  }

  console.log(questionPaperData);

  // --- conditional rendering of dashboard ---
  return (
    // question papers 
    <div className="border border-slate-600 rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-between items-center p-10">
      {questionPaperData.length > 0 ? (
        <QuestionPaperDisplay data={questionPaperData} />
      ) : (
        // semester cards
        semesterCount.map((semester) => (
          <SemesterCard
            key={semester}
            semester={semester}
            onClick={() => handleClick(semester)}
          />
        ))
      )}
    </div>
  );
}
