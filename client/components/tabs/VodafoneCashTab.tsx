import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

const VodafoneCashTab = () => {
  const t = useTranslations("PaymentsPage");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-5 p-3" onSubmit={handleSubmit}>
      <Input
        isClearable
        size="lg"
        variant="bordered"
        label={t("phoneInputLabel")}
        labelPlacement="outside"
        placeholder="01000000000"
        className="w-full lg:max-w-sm"
      />
      <Button
        variant="bordered"
        size="lg"
        className="w-full lg:max-w-xs bg-green-950 text-white"
      >
        {t("saveButton")}
      </Button>
    </form>
  );
};

export default VodafoneCashTab;
