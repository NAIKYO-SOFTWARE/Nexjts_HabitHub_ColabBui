"use client";
import { useAppDispatch } from "@/lib/hooks";
import { addActive } from "@/lib/features/actives/activesSlice";
import AddButton from "./AddButton";

interface IProps {
  title: string;
  bgColor: string;
}

export default function Active({ title, bgColor }: Readonly<IProps>) {
  const dispatch = useAppDispatch();

  const handleOnlickAddBtn = () => {
    dispatch(addActive({ title, bgColor: bgColor }));
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-2xl py-5 w-[80%] ${bgColor}`}>
        <span className="px-4">{title}</span>
      </div>
      <AddButton handleOnlickAddBtn={handleOnlickAddBtn} />
    </div>
  );
}
