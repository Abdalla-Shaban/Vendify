import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("resetPassword"),
  };
}

export default function ResetPasswordPage() {
  const t = useTranslations("ResetPasswordPage");
  return (
    <div className="w-full max-w-xl flex flex-col justify-center items-center">
      <h1 className="text-28 md:text-32 font-bold mb-2">{t("title")}</h1>
      <h3 className="text-16 md:text-20 mb-3 md:mb-5">{t("subTitle")}</h3>
      <ResetPasswordForm />
    </div>
  );
}
