"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button, Input } from "@nextui-org/react";
import ErrorMessage from "./components/ErrorMessage";
import RequiredStar from "./components/RequiredStar";
const formShcema = z.object({
  email: z.string().email(),
  password: z.string(),
});
const LoginForm = () => {
  const t = useTranslations("LoginPage");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formShcema>>();
  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
      <fieldset className="flex flex-col">
        <Input
          variant="bordered"
          label={
            <>
              {t(`email`)} <RequiredStar />
            </>
          }
          type="text"
          {...register("email")}
        />
        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}
      </fieldset>
      <fieldset className="flex flex-col">
        <Input
          variant="bordered"
          label={
            <>
              {t(`password`)} <RequiredStar />
            </>
          }
          type="password"
          {...register("password")}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </fieldset>
      <Link
        href="/password/reset"
        className="px-1.5 text-14 font-bold text-green-950 duration-150 hover:underline hover:opacity-50"
      >
        {t("forgetPassword")}
      </Link>
      <Button
        type="submit"
        variant="bordered"
        className="bg-green-950 text-white"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
