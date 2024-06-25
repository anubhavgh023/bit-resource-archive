import DisplayContainer from "@/components/DisplayContainer";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex gap-10 justify-between p-10">
      <SideBar></SideBar>
      <DisplayContainer></DisplayContainer>
    </div>
  );
}
