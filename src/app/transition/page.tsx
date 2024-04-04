"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TransitionImg from "../../../public/transition.png";

export default function Transition() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  }, [router]);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Image src={TransitionImg} alt="" />
    </div>
  );
}
