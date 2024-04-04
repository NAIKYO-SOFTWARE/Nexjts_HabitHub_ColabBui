"use client";
import { useAppDispatch } from "@/lib/hooks";
import { changeChecked } from "@/lib/features/actives/activesSlice";

interface IProps {
  id: number;
  title: string;
  isChecked: boolean;
  bgColor: string;
}

export default function Active({
  title,
  isChecked,
  bgColor,
  id,
}: Readonly<IProps>) {
  const ditpatch = useAppDispatch();
  const handleOnchageChecked = () => {
    ditpatch(changeChecked({ checked: !isChecked, id }));
  };

  return (
    <div
      className={`flex w-100 active py-3 justify-between relative rounded-xl ${bgColor}`}
    >
      <p className="ps-3 m-0">{title}</p>
      <input
        type="radio"
        checked={isChecked}
        className="min-h-7 min-w-7"
        onChange={handleOnchageChecked}
      />
      {isChecked && (
        <div className="w-[100%] h-[100%] absolute top-0 flex justify-center items-center">
          <div className="h-[1px] w-[90%] bg-black top-[50%]"></div>
        </div>
      )}
    </div>
  );
}
