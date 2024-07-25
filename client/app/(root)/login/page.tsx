import LoginForm from "@/components/forms/LoginForm";
import { useTranslations } from "next-intl";
import Link from "next/link";

const page = () => {
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
};

export default page;
