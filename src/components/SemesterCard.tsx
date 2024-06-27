"use client";
import { Button } from "./ui/button";

export default function SemesterCard({
  semester,
  onClick,
}: {
  semester: string;
  onClick: (semester: string) => void;
}) {
  return (
    <Button
      variant={"outline"}
      className="border border-slate-700 text-md flex justify-center items-center hover:ring hover:ring-gray-300 active:ring-blue-400 active:scale-95 transition delay-25 w-full sm:w-32 h-24 md:h-36 lg:h-36 md:w-full lg:w-full"
      onClick={() => onClick(semester)}
    >
      Semester: {semester}
    </Button>
  );
}
