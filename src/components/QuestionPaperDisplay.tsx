import DownloadComponentCard from "@/components/DownloadComponent";

export default function QuestionPaperDisplay({
  data,
}: {
  data: { course: string; downloadLink: string }[];
}) {
  return (
    <div className="border border-slate-600 rounded-sm w-full justify-between p-10">
      {data.map((paper, index) => (
        <DownloadComponentCard
          key={index}
          courseName={paper.course}
          downloadLink={paper.downloadLink}
        />
      ))}
    </div>
  );
}
