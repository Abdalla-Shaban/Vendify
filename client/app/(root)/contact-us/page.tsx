import ContactUsForm from "@/components/forms/ContactUsForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("contactUs"),
  };
}

export default function ContactUsPage() {
  const t = useTranslations("ContactUsPage");
  return (
    <div className="w-full flex flex-col p-5">
      <h1 className="my-3 text-24 md:text-32 font-bold">{t("title")}</h1>
      <ContactUsForm />
    </div>
  );
}
