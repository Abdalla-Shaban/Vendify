"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button, Input } from "@nextui-org/react";
import ErrorMessage from "./components/ErrorMessage";
import RequiredStar from "./components/RequiredStar";

const formShcema = z.object({
  email: z.string(),
});

const ResetPasswordForm = () => {
  const t = useTranslations("ResetPasswordPage");
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
      <Button
        type="submit"
        variant="bordered"
        className="bg-green-950 text-white"
      >
        {t("reset")}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
