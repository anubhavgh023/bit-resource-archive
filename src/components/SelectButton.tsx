import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectButton({
  onChange,
  title,
  values
}: {
  title: string;
  values: string[];
}) {

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => (
            <SelectItem value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
