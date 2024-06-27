"use client";
import { Button } from "./ui/button";

export default function DownloadComponentCard({
  courseName,
  downloadLink,
}: {
  courseName: string;
  downloadLink: { midsem: string; endsem: string };
}) {
  function handleClick() {
    console.log("button clicked");
  }

  return (
    <div className="flex flex-col sm:flex-row justify-around p-2 gap-2">
      <Button
        variant={"outline"}
        className="w-full sm:w-4/5 hover:bg-transparent border-slate-700 text-xs sm:text-sm md:text-base"
      >
        {courseName}

        {/* midsem link */}
      </Button>
      <div className="flex gap-4">
        <a href={downloadLink.midsem} className="w-full sm:w-auto">
          <Button
            variant={"outline"}
            className="w-full sm:w-auto ring-2 ring-blue-400 hover:ring-2 active:scale-95 transition delay-15"
            onClick={handleClick}
          >
            Mid Sem
          </Button>
        </a>

        {/* endsem link */}
        <a href={downloadLink.endsem} className="w-full sm:w-auto">
          <Button
            variant={"outline"}
            className="w-full sm:w-auto ring-2 ring-purple-400 hover:ring-2 active:scale-95 transition delay-15"
            onClick={handleClick}
          >
            End Sem
          </Button>
        </a>
      </div>
    </div>
  );
}
