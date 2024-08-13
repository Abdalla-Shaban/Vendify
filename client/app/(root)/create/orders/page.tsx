import CreateOrderForm from "@/components/forms/CreateOrderForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("createOrder"),
  };
}

export default function AffiliteRegisterPage() {
  const t = useTranslations("CreateOrderPage");
  return (
    <div className="overflow-hidden flex-1 p-2 md:p-8">
      <h1 className="text-28 md:text-32 font-bold mb-3 md:mb-5">
        {t("title")}
      </h1>
      <div className="md:p-5 rounded md:drop-shadow-xl md:shadow-2xl">
        <CreateOrderForm />
      </div>
    </div>
  );
}
