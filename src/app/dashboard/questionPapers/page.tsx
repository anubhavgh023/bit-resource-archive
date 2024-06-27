"use client";
import QuestionPaperDisplay from "@/components/QuestionPaperDisplay";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function QuestionPaperPage() {
  const [questionPaperData, setQuestionPaperData] = useState<
    { course: string; downloadLink: { midsem: string; endsem: string } }[]
  >([]);

  // get query parameters
  const searchParams = useSearchParams();
  const course = searchParams.get("course");
  const year = searchParams.get("year");
  const semester = searchParams.get("semester");

  // fetch questionPaper json data on initial load
  useEffect(() => {
    new Promise(r => setTimeout(r, 2000));
    const fetchData = async () => {
      try {
        if (course && year && semester) {
          // import the required json file dynamically
          const data = await import(
            `@/questionPaperData/${course}/${year}/sem${semester}_ques.json`
          );
          setQuestionPaperData(data.default[`semester_${semester}`]);
        }
      } catch (error) {
        console.error("Error fetching questionPaper data", error);
      }
    };
    // call fetchData fn
    fetchData();
  }, [course,year,semester]);

  return (
    <div className="border border-slate-600 rounded-sm p-10 w-full">
      <div className="flex flex-col gap-5">
        <QuestionPaperDisplay data={questionPaperData}></QuestionPaperDisplay>
      </div>
    </div>
  );
}
