import DownloadComponentCard from "@/components/DownloadComponent";

export default function QuestionPaperDisplay({
  data,
}: {
  data: { course: string; downloadLink: string }[];
}) {
  return (
    <>
      {data.map((paper, index) => (
        <DownloadComponentCard
          key={index}
          courseName={paper.course}
          downloadLink={paper.downloadLink}
        />
      ))}
    </>
  );
}
