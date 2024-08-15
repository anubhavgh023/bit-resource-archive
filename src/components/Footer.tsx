import { GithubIcon, GoalIcon, Icon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-full flex sm:flex-row flex-col justify-center bg-transparent py-5 px-10 border-t-2 sm:justify-between sm:gap-0 gap-4 ">
      <div className="hidden items-center flex-col sm:flex">
        <span className="font-semibold">Contributers</span>
        <span className="flex items-center flex-col">
          <a
            href={"https://github.com/anubhavgh023/"}
            target="_blank"
            className="hover:underline text-xs"
            rel="noopener noreferrer"
          >
            Anubhav Samanta
          </a>
          <a
            href={"https://github.com/theakash04/"}
            target="_blank"
            className="hover:underline text-xs"
            rel="noopener noreferrer"
          >
            Akash Kumar
          </a>
        </span>
      </div>
      <div className="flex flex-col px-3 items-center text-center gap-4">
        <div>
          <span className="block">Want to make a difference? Join us!</span>
        </div>
        <div className="flex gap-3">
          <a
            href={"https://github.com/anubhavgh023/bit-resource-archive/"}
            target="_blank"
            title="Shape this Project?"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>

          <a
            href={"mailto:contact@anubhavsamanta.tech"}
            target="_blank"
            title="Contact Us"
            rel="noopener noreferrer"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
