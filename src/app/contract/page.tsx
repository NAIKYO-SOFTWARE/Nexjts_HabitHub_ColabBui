"use client";

import DoingRow from "./components/DoingRow";
import ButtomCompnent from "@/components/Button";
import Link from "next/link";
import screenUrl from "@/lib/constants/screenUrl";
import Footer from "@/components/layout/Footer";

const data = [
  {
    text: "☀️ Plan tasks.",
  },
  {
    text: "🎯 Set goals.",
  },
  {
    text: "🚶‍♂️ Take breaks.",
  },
  {
    text: "💪 Move and refresh.",
  },

  {
    text: "📝 Prioritize.",
  },
  {
    text: "🔍 Break tasks down.",
  },
  {
    text: "🚫 No multitasking.",
  },
  {
    text: "📵 Minimize distractions.",
  },
  {
    text: "⏰ Limit social media.",
  },
];

export default function Contract() {
  return (
    <div className="p-3 contract">
      <h1 className="mt-14 font-bold text-3xl">Let’s make a contract </h1>
      <h2 className="mt-8 font-bold text-2xl">I will</h2>
      <ul className="flex flex-col gap-2">
        {data.map((doing, index) => {
          return <DoingRow key={index} text={doing.text} />;
        })}
      </ul>
      <div className="flex justify-center mt-8">
        <Link href={screenUrl.TRANSITION}>
          <ButtomCompnent title="I AGREE" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
