"use client";
import { useState } from "react";
import NavButton from "./NavButton";

const btns = [
  { id: 1, text: "All" },
  { id: 2, text: "Daily Routine" },
  { id: 3, text: "Study Routine" },
];

const FormFilter = () => {
  const [activeBtn, setActiveBtn] = useState(btns[0].id);

  const handleChangeActiveBtn = (id: number) => {
    setActiveBtn(id);
  };

  return (
    <div className="d-flex gap-2 form-filter items-center">
      {btns.map((btn, index) => {
        return (
          <NavButton
            key={index}
            name={btn.text}
            id={btn.id}
            handleChangeActiveBtn={handleChangeActiveBtn}
            activeBtn={activeBtn}
          />
        );
      })}
      <div className="size-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default FormFilter;
