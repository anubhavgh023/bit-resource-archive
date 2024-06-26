import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";

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
            <SelectItem value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
