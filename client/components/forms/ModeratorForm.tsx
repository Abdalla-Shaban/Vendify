"use client";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

const ModeratorForm = () => {
  const t = useTranslations("ModeratorPage");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-5">
      <h2 className="text-24 font-bold">{t("title")}</h2>
      <Input
        name="email"
        type="email"
        variant="bordered"
        label={t(`emailInputLabel`)}
        labelPlacement="outside"
        placeholder={t(`emailInputPlaceHolder`)}
        size="lg"
        className="md:max-w-md"
      />
      <Button
        variant="bordered"
        size="lg"
        type="submit"
        className="bg-green-950 text-white md:max-w-xs"
      >
        {t("addButton")}
      </Button>
    </form>
  );
};

export default ModeratorForm;
