import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

const PostalTransferTab = () => {
  const t = useTranslations("PaymentsPage");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-5 p-3" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <Input
          isClearable
          variant="bordered"
          size="lg"
          label={t("fullNameInputLabel")}
          labelPlacement="outside"
          placeholder="Abdullah Madkour"
          className="w-full lg:max-w-sm"
        />
        <Input
          isClearable
          variant="bordered"
          size="lg"
          label={t("phoneInputLabel")}
          labelPlacement="outside"
          placeholder="01000000000"
          className="w-full lg:max-w-sm"
        />
      </div>
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

export default PostalTransferTab;
