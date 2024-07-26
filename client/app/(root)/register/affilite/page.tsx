import RegisterForm from "@/components/forms/RegisterForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("register"),
  };
}

export default function AffiliteRegisterPage() {
  const t = useTranslations("RegisterForm");
  const keys = ["basicInfo", "businessSetup", "verify"];
  return (
    <div className="overflow-hidden flex flex-col md:flex-row flex-1 gap-10 bg-slate-50/50">
      <div className="order-2 md:order-1 flex flex-col md:basis-3/5 md:self-center md:px-3">
        <h1 className="text-28 md:text-32 font-bold mb-3 md:mb-5">
          {t("title.title")}
        </h1>
        <div className="bg-white p-2 md:p-5 rounded drop-shadow-xl shadow-xl">
          <RegisterForm />
        </div>
      </div>
      <div className="order-1 md:order-2 relative flex flex-col justify-evenly items-center  min-h-[70vh] md:h-auto flex-1 overflow-hidden">
        <div className="absolute size-full left-0 top-0 bg-cover bg-center bg-[url('../public/images/bg-deal.jpg')]" />
        <div className="absolute size-full left-0 top-0 bg-blue-600/15" />
        {keys.map((key, i) => (
          <div
            key={key}
            className="relative flex items-center gap-4 font-bold select-none pointer-events-none"
          >
            <div className="flex items-center justify-center size-14 rounded-full bg-white text-20">
              {i + 1}
            </div>
            <div className="p-4 text-20 min-w-52 uppercase bg-slate-100 rounded">
              {t(`${key}.title`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
