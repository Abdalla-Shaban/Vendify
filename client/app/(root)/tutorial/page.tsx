import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("tutorial"),
  };
}

export default function TutorialPage() {
  const t = useTranslations("TutorialsPage");
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-32 font-extrabold">{t("title")}</h1>
    </div>
  );
}
