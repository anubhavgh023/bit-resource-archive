"use client";
import SelectButton from "./SelectButton";
import SearchButton from "./SearchButton";
import { useState } from "react";
import axios from "axios";

export default function SideBar() {
  const courseOptions = ["BCA", "BBA"];
  const yearOptions = ["2023", "2022"];

  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  async function handleCourseChange(value: string) {
    setSelectedCourse(value);
  }

  async function handleYearChange(value: string) {
    setSelectedYear(value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      axios.post("/api/get-pdf-links", {
        course: selectedCourse,
        year: selectedYear,
      });
    } catch (error) {
      console.error("ERR: ", error);
    }
  }

  return (
    <div className="border dark:border-slate-600 p-10 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center">
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
      </form>
    </div>
  );
}
