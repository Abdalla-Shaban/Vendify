import ModeratorForm from "@/components/forms/ModeratorForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("moderator"),
  };
}

export default function ModeratorPage() {
  const t = useTranslations("ModeratorPage");
  return (
    <div className="flex-1 my-8 shadow-xl rounded-lg">
      <ModeratorForm />
    </div>
  );
}
