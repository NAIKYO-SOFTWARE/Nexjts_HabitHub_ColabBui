"use client";

import ListTile from "./ListTitle";
import Active from "./Active";
import Button from "@/components/Button";

const data = [
  {
    id: 1,
    listTile: "🧠 Learn and study more",
    desc: "Stay hungry for knowledge",
    icon: "/brain.png",
    activeList: [
      {
        id: 10,
        title: "📖 Read",
        bgColor: "bg-peach",
      },
      {
        id: 11,
        title: "️✏️ Study",
        bgColor: "bg-magicMint",
      },
    ],
  },
  {
    id: 2,
    listTile: "🏋️‍♂️ Exercise",
    desc: "Become your best version",
    icon: "/brain.png",
    activeList: [
      {
        id: 21,
        title: "🏃‍️ Running",
        bgColor: "bg-lightSkyBlue",
      },
      {
        id: 22,
        title: "🚴‍ Cycling",
        bgColor: "bg-thistle",
      },
    ],
  },
  {
    id: 3,
    listTile: "🧹 Clean and Organize",
    desc: "Get you life togheter",
    icon: "/brain.png",
    activeList: [
      {
        id: 31,
        title: "🪣 Mop the house",
        bgColor: "bg-classicCream",
      },
      {
        id: 32,
        title: "🚽 Clean the bathroom",
        bgColor: "bg-thistle",
      },
    ],
  },
];

const SuggestionsPage = () => {
  return (
    <div className="px-3">
      <h1 className="text-center mt-3">Suggestions</h1>
      <div className="mt-3">
        <div className="mt-3">
          {data.map((data, index) => {
            return (
              <div key={index}>
                <ListTile key={data.id} desc={data.desc} title={data.listTile} />
                <div className="mt-2"></div>
                <div className="flex flex-col gap-2">
                  {data.activeList.map((active) => {
                    return <Active key={active.id} bgColor={active.bgColor} title={active.title} />;
                  })}
                </div>
                <div className="mt-3"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Button title="Add more" />
      </div>
    </div>
  );
};

export default SuggestionsPage;
