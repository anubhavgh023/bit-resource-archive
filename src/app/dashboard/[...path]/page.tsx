"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const semesterCount = ["1", "2", "3", "4", "5", "6"];



  return (
    <div className="border border-slate-600 rounded-sm grid grid-cols-3 gap-10 w-full justify-between p-10">
      {semesterCount.map((semester) => {
        return (
          // semester card
            <Button
              key={semester}
              variant={"outline"}
              className="border border-slate-700 h-36 text-md flex justify-center items-center hover:ring hover:ring-gray-300 active:ring-blue-400 active:scale-95 transition delay-25"
              onClick={() => {
                setSelectedSemester(semester);
                console.log(semester);
              }}
            >
              Semester: {semester}
            </Button>
        );
      })}
      <div>
      </div>
    </div>
  );
}
