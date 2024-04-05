"use client";
import { useAppSelector } from "@/lib/hooks";
import FormFilter from "./components/FormFilter";
import TimeBox from "./components/TImeBox";
import Active from "./components/Active";
import Empty from "../../../public/empty.png";
import screenUrl from "@/lib/constants/screenUrl";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const data = [
  {
    weekday: "Sun",
    day: 19,
  },
  {
    weekday: "Mon",
    day: 11,
  },
  {
    weekday: "Tue",
    day: 12,
  },
  {
    weekday: "Wed",
    day: 13,
  },
  {
    weekday: "Thu",
    day: 14,
  },
  {
    weekday: "Fri",
    day: 15,
  },
  {
    weekday: "Sat",
    day: 16,
  },
];

export default function HomePage() {
  const actives = useAppSelector((state) => state.actives.data);

  return (
    <div>
      <div className="bg-lavenderPink py-3">
        <h1 className="font-bold text-center">Today</h1>
        <div className="px-3 flex w-[100%] justify-between mt-3">
          {data.map((time, index) => {
            return <TimeBox key={index} day={time.day} weekday={time.weekday} />;
          })}
        </div>
      </div>
      <div className="flex items-center mt-3 flex-col">
        <FormFilter />
        {actives.length === 0 ? (
          <Image src={Empty} alt="" className="mt-32" height={300} />
        ) : (
          <div className="w-[100%] px-2 mt-4 flex flex-col gap-2 h-72 overflow-scroll">
            {actives.map((active, index) => {
              return (
                <Active
                  isChecked={active.isChecked}
                  title={active.title}
                  bgColor={active.bgColor}
                  id={active.id}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
      <Link href={screenUrl.SUGGESTIONS}>
        <button className="fixed text-3xl min-h-16 min-w-16 rounded-full bg-white text-black font-semibold shadow-sm shadow-black bottom-20 right-7">
          +
        </button>
      </Link>
      <Footer />
    </div>
  );
}
