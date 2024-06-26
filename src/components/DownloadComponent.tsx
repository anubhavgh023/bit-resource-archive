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
    <div className="flex justify-around p-2">
      <Button variant={"outline"} className="w-3/5 hover:bg-transparent border-slate-700">
        {courseName}
      </Button>
      <a href={downloadLink}>
        <Button
          variant={"outline"}
          className="ring-1 ring-blue-400 hover:ring-2 active:scale-95 transition delay-15"
          onClick={handleClick}
        >
          Download
        </Button>
      </a>
    </div>
  );
}
