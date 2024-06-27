import { Progress } from "@/components/ui/progress";

export default function LoadingPage() {
  return (
    <div className="border border-slate-600 rounded-sm flex flex-col w-full justify-center items-center p-10 gap-2">
      <span className="font-semibold">Loading...</span>
      <div className="w-32">
        <Progress value={70}></Progress>
      </div>
    </div>
  );
}
