import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("convertCommission"),
  };
}

function RequestCovertCommissionPage() {
  const t = useTranslations("ConvertCommissionPage");
  return (
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-32 font-bold">{t("title")}</h1>
    </div>
  );
}

export default RequestCovertCommissionPage;
