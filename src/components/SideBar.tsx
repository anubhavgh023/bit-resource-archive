"use client";
import SelectButton from "./SelectButton";
import SearchButton from "./SearchButton";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function SideBar() {
  const courseOptions = ["BCA", "BBA"];
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

  // post the {course,year} 
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      if (selectedCourse !== '' && selectedYear !== '') {
        router.push(`/dashboard/${selectedCourse.toLowerCase()}/${selectedYear}`);
      } 

    } catch (error) {
      console.error("ERR: ", error);
    }


  }

  return (
    <div className="border dark:border-slate-600 rounded-sm p-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center"
      >
        <div className="flex flex-col gap-4">
          <SelectButton
            onValueChange={handleCourseChange}
            title="BCA / BBA ?"
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
        <div>
          path: {selectedCourse}/{selectedYear}
        </div>
      </form>
    </div>
  );
}
