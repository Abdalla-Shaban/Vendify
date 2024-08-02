import { useTranslations } from "next-intl";

const PaymentTransferTab = () => {
  const t = useTranslations("PaymentsPage");
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-32 font-bold">
        {t("paymentTranferTitle")} 0 {t("LE")}
      </h2>
    </div>
  );
};

export default PaymentTransferTab;
