"use client"
import { Button } from "./ui/button";

export default function DownloadComponentCard({
  courseName,
  downloadLink,
}: {
  courseName: string;
  downloadLink: string;
}) {
    function handleClick() {
        console.log("button clicked");
  }

  return (
    <div className="flex flex-col sm:flex-row justify-around p-2 gap-2">
      <Button
        variant={"outline"}
        className="w-full sm:w-3/5 hover:bg-transparent border-slate-700 text-xs sm:text-sm md:text-base">
        {courseName}
      </Button>
      <a href={downloadLink} className="w-full sm:w-auto">
        <Button
          variant={"outline"}
          className="w-full sm:w-auto ring-1 ring-blue-400 hover:ring-2 active:scale-95 transition delay-15"
          onClick={handleClick}
        >
          Download
        </Button>
      </a>
    </div>
  );
}
