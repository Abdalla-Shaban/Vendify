import PaymentsTabs from "@/components/PaymentsTabs";
import { Locale } from "@/config";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("payments"),
  };
}
function PaymentsPage() {
  return (
    <div className="flex-1 my-4 w-[230px] overflow-x-auto shadow-lg p-3 rounded-xl">
      <PaymentsTabs />
    </div>
  );
}

export default PaymentsPage;
