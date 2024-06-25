import SelectButton from "./SelectButton";
import SearchButton from "./SearchButton";

export default function SideBar() {
  const courseOptions = ["BCA", "BBA"];
  const yearOptions = ["2023", "2022"];

  return (
    <div className="border dark:border-slate-600 p-10 ">
      <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-4">
        <SelectButton title="BCA / BBA ?" values={courseOptions}></SelectButton>
        <SelectButton title="Year ?" values={yearOptions}></SelectButton>
      </div>
      <div>
        <SearchButton></SearchButton>
      </div>
      </div>

    </div>
  );
}
