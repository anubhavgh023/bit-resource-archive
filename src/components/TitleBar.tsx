import Link from "next/link";

export default function TitleBar() {
  return (
    <Link href="/">
      <div
        className="p-5 text-2xl border rounded-sm border-slate-700 flex items-center gap-5 justify-center flex-col sm:flex-row"
        title="Go to HomePage"
      >
        <img src="/collage-logo.png" alt="Collage_Logo" className="w-20 h-20" />
        <span className="text-center">
          Birla Institute Of Technology, Lalpur Extention
        </span>
      </div>
    </Link>
  );
}
