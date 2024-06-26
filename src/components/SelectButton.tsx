import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectButton({
  title,
  values,
  onValueChange
}: {
  title: string;
  values: string[];
  onValueChange: (value:string) => void
}) {

  return (
    <div>
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => (
            <SelectItem key={`${title + value}`} value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
