"use client"
import Image from "next/image";
import fileSearchImage from "../../public/file-search.png";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="rounded-sm flex w-full justify-center items-start p-10 h-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={fileSearchImage}
          alt="file search image icon"
          width={72}
          height={72}
        ></Image>
        <span className="text-xl font-semibold text-slate-500">
          <Typewriter
            words={["Start Searching...","Previous Year Ques"]}
            loop={2.5}
            cursor
            cursorStyle="!"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          ></Typewriter>
        </span>
      </div>
    </div>
  );
}
