"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { loginUser } from "@/lib/features/user/userSlice";
import screenUrl from "@/lib/constants/screenUrl";
import { useRouter } from "next/navigation";
import FacebookIcon from "../../../public/facebook.png";
import GoogleIcon from "../../../public/google.png";
import AppleIcon from "../../../public/apple.png";

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginSceen() {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.user.userId);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push(screenUrl.CONTRACT);
    }
  }, [router, userId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="mt-28 px-3 flex flex-col items-center">
      <h1 className="text-2xl text-mediumPurple font-bold">Log in to HabitHUB</h1>
      <p className="text-center mt-2 max-w-80">
        Welcome back! Sign in using your social account or email to continue us
      </p>
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
      <div className="d-flex items-center gap-2 px-3 mt-4 w-[100%]">
        <div className=" w-[100%] bg-mistyGray h-[2px]"></div>
        <span className="font-bold">OR</span>
        <div className=" w-[100%] bg-mistyGray h-[2px]"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-[100%]">
        <div className="mt-10">
          <div className="min-h-16">
            <input
              className="p-3 rounded-3xl border-mistyGray w-[100%] border-2"
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
          </div>
          <div className="max-h-14 mt-1">
            <input
              className="p-3 rounded-3xl border-mistyGray w-[100%] border-2"
              type="text"
              placeholder="Password"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Z])[A-Za-z\d@#$%^&*!]{6,20}$/,
                  message: "Invalid password",
                },
              })}
            />
            {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button title={isLoading ? "...Loading" : "Login"} />
        </div>
      </form>
    </div>
  );
}
