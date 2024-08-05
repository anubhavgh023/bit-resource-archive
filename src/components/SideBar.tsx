"use client";
import SelectButton from "./SelectButton";
import SearchButton from "./SearchButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const courseOptions = ["BCA"];
  const yearOptions = ["2023-24", "2022-23"];

  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  // for navigation
  const router = useRouter();

  // set the selected course
  async function handleCourseChange(value: string) {
    setSelectedCourse(value);
  }

  //set the selected year
  async function handleYearChange(value: string) {
    setSelectedYear(value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (selectedCourse !== "" && selectedYear !== "") {
      router.push(`/dashboard?course=${selectedCourse.toLowerCase()}&year=${selectedYear}`);
    }
  }

  return (
    <div className="border dark:border-slate-600 rounded-sm p-10 flex flex-col items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center"
      >
        <div className="flex flex-col gap-4">
          <SelectButton
            onValueChange={handleCourseChange}
            title="Course ?"
            values={courseOptions}
          ></SelectButton>
          <SelectButton
            onValueChange={handleYearChange}
            title="Year ?"
            values={yearOptions}
          ></SelectButton>
        </div>
        <div>
          <SearchButton></SearchButton>
        </div>
      </form>
    </div>
  );
}
