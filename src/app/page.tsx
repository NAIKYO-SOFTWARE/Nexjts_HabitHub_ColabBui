"use client";
import Link from "next/link";
import Image from "next/image";
import screenUrl from "@/lib/constants/screenUrl";
import Ellipse1195 from "../../public/Ellipse1195.png";
import Ellipse1196 from "../../public/Ellipse1196.png";
import Ellipse1198 from "../../public/Ellipse1198.png";
import FacebookIcon from "../../public/facebook.png";
import GoogleIcon from "../../public/google.png";
import AppleIcon from "../../public/apple.png";
import Icon from "@/components/Icon";
import ButtonComponent from "@/components/Button";

export default function FirstScreen() {
  return (
    <div className="relative overflow-hidden h-[100vh] w-[100vw]">
      <div className="relative h-[100%] w-[100%]">
        <Image src={Ellipse1196} alt="" className="absolute -top-4 -left-10 z-20" />
        <Image src={Ellipse1195} alt="" className="absolute -top-4 z-10" />
        <Image src={Ellipse1198} alt="" className="absolute right-0 top-0 z-30" />
      </div>
      <div className="z-30 px-5 absolute top-0 w-[100%] h-[100%]">
        <h1 className="mt-24 text-7xl max-w-lg font-medium">Do your tasks quickly and easy</h1>
        <h2 className="font-light text-xl mt-3">Your tasks, your rules, our support.</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col mt-20 items-center">
            <Link href={screenUrl.LOGIN}>
              <ButtonComponent title="Login" />
            </Link>
            <Link href={"#"} className="underline mt-2 text-black">
              Create an account
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 mt-4 w-100">
          <div className="w-[100%] bg-mistyGray h-[2px]"></div>
          <span className="font-bold text-black">OR</span>
          <div className="w-[100%] bg-mistyGray h-[2px]"></div>
        </div>
        <div className="flex justify-center mt-4 gap-7">
          <Link href={"#"} className="flex items-end">
            <Icon urlIcon={FacebookIcon} />
          </Link>
          <Link href={"#"} className="flex items-end">
            <Icon urlIcon={GoogleIcon} />
          </Link>
          <Link href={"#"} className="flex items-end">
            <Icon urlIcon={AppleIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}
