import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-full flex sm:flex-row flex-col justify-center bg-transparent py-5 px-10 border-t-2 sm:justify-between sm:gap-0 gap-4 ">
      <div className="flex items-center flex-col">
        <span className="font-bold">Contributers</span>
        <span className="flex items-center flex-col">
          <Link
            href={"https://github.com/anubhavgh023/"}
            target="blank"
            className="hover:underline"
          >
            Anubhav Samanta
          </Link>
          <Link
            href={"https://github.com/theakash04/"}
            target="blank"
            className="hover:underline"
          >
            Akash Kumar
          </Link>
        </span>
      </div>
      <div className="flex flex-col px-3 items-center text-center">
        Want to make a difference?
        <span>
          Join us and help{" "}
          <Link href={"https://github.com/anubhavgh023/bit-resource-archive/"} target="blank" className="hover:text-blue-400 underline sm:inline block">shape this project!</Link>
        </span>
      </div>
    </div>
  );
}
