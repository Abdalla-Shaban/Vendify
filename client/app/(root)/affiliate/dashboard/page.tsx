import Statistics from "@/components/sections/Statistics";
import { Locale } from "@/config";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("dashboard"),
  };
}

const DashboardPage = () => {
  return (
    <div className="flex-1 mb-8">
      <Statistics showLink={false} />
    </div>
  );
};

export default DashboardPage;
