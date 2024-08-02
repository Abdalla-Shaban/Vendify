"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import VodafoneCashTab from "./tabs/VodafoneCashTab";
import BankTransferTab from "./tabs/BankTransferTab";
import PostalTransferTab from "./tabs/PostalTransferTab";
import PaymentTransferTab from "./tabs/PaymentTransferTab";
import CommissionsPayableTab from "./tabs/CommissionsPayableTab";

const PaymentsTabs = () => {
  const t = useTranslations("PaymentsPage");
  return (
    <Tabs aria-label="Payments Options">
      <Tab
        key={"methode"}
        title={t("paymentMethode")}
        className="text-16 capitalize"
      >
        <Tabs aria-label="Payment Methodes">
          <Tab
            key={"vodafone"}
            title={t("vodafoneCash")}
            className="text-16 capitalize"
          >
            <VodafoneCashTab />
          </Tab>
          <Tab
            key={"bank"}
            title={t("bankTransfer")}
            className="text-16 capitalize"
          >
            <BankTransferTab />
          </Tab>
          <Tab
            key={"postal"}
            title={t("postalTransfer")}
            className="text-16 capitalize"
          >
            <PostalTransferTab />
          </Tab>
        </Tabs>
      </Tab>
      <Tab
        key={"transfer"}
        title={t("paymentTransfer")}
        className="text-16 capitalize"
      >
        <PaymentTransferTab />
      </Tab>
      <Tab
        key={"commissions"}
        title={t("commissionsPayable")}
        className="text-16 capitalize"
      >
        <CommissionsPayableTab />
      </Tab>
    </Tabs>
  );
};

export default PaymentsTabs;
