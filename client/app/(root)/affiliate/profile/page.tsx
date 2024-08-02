import ProfileForm from "@/components/forms/ProfileForm";
import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("profile"),
  };
}

export default function ProfilePage() {
  const t = useTranslations("ProfilePage");
  return (
    <div className="flex-1 my-8 p-3 shadow-xl rounded-lg">
      <ProfileForm />
    </div>
  );
}
