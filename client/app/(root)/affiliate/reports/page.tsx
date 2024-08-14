import ReportsTabs from "@/components/ReportsTabs";
import { Locale } from "@/config";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("reports"),
  };
}
export default function ReportsPage() {
  return (
    <div className="flex-1 my-8 w-[230px] overflow-x-auto">
      <ReportsTabs />
    </div>
  );
}
