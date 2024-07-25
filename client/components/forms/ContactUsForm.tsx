"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button, Input, Textarea } from "@nextui-org/react";
import ErrorMessage from "./components/ErrorMessage";
import RequiredStar from "./components/RequiredStar";
const formShcema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});
const ContactUsForm = () => {
  const t = useTranslations("ContactUsPage");
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
              {t(`name`)} <RequiredStar />
            </>
          }
          type="text"
          {...register("name")}
        />
        {errors.name?.message && (
          <ErrorMessage message={errors.name?.message} />
        )}
      </fieldset>
      <fieldset className="flex flex-col">
        <Input
          variant="bordered"
          label={
            <>
              {t(`email`)} <RequiredStar />
            </>
          }
          type="email"
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
              {t(`subject`)} <RequiredStar />
            </>
          }
          type="text"
          {...register("subject")}
        />
        {errors.subject?.message && (
          <ErrorMessage message={errors.subject?.message} />
        )}
      </fieldset>
      <fieldset className="flex flex-col">
        <Textarea
          variant="bordered"
          label={
            <>
              {t(`message`)} <RequiredStar />
            </>
          }
          placeholder={t("message")}
          {...register("message")}
        />
        {errors.message?.message && (
          <ErrorMessage message={errors.message?.message} />
        )}
      </fieldset>
      <Button
        type="submit"
        variant="bordered"
        className="bg-green-950 text-white uppercase"
      >
        {t("send")}
      </Button>
    </form>
  );
};

export default ContactUsForm;
