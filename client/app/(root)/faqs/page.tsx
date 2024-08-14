import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("faqs"),
  };
}
export default function FaqsPage() {
  const t = useTranslations("FaqsPage");
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-32 font-extrabold">{t("title")}</h1>
    </div>
  );
}
