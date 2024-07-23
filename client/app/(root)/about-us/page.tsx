import Featuers from "@/components/sections/Featuers";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("about"),
  };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-32 font-bold">{t("title")}</h1>
        <p className="text-20 md:w-4/5">{t("content")}</p>
        <Link
          href="/register/affilite"
          className="text-center text-white bg-green-950 w-28 py-2 rounded-md"
        >
          {t("link")}
        </Link>
      </div>
      <Featuers />
    </div>
  );
}
