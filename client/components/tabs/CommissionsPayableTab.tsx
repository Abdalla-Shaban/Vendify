import { useTranslations } from "next-intl";

const CommissionsPayableTab = () => {
  const t = useTranslations("PaymentsPage");
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-32 font-bold">
        {t("commissionsPayableTitle")} 0 {t("LE")}
      </h2>
    </div>
  );
};

export default CommissionsPayableTab;
