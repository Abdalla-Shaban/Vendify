import LoginForm from "@/components/forms/LoginForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("login"),
  };
}
export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <div className="w-full max-w-xl flex flex-col justify-center items-center">
      <h1 className="text-32 font-bold mb-5">{t("title")}</h1>
      <LoginForm />
      <div className="mt-3 text-gray-500 text-14">
        {t("account")}
        <Link
          href="/register/affilite"
          className="px-1.5 text-14 font-bold text-green-950 duration-150 hover:underline hover:opacity-50"
        >
          {t("join")}
        </Link>
      </div>
      <div className="mt-5 text-12 text-center md:text-16">{t("privacy")}</div>
    </div>
  );
}
