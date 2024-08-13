import OrdersContainer from "@/components/sections/Orders";
import { Locale } from "@/config";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(Locale: Locale) {
  const t = await getTranslations({ Locale, namespace: "Metadata" });
  return {
    title: t("orders"),
  };
}

const OrdersPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-5 my-8 w-[230px] overflow-x-auto">
      <OrdersContainer />
    </div>
  );
};

export default OrdersPage;
