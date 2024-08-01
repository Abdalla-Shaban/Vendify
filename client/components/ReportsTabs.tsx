"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import EarningsTab from "./tabs/EarningsTab";
import OrdersTab from "./tabs/OrdersTab";
import UnitsTab from "./tabs/UnitsTab";

const ReportsTabs = () => {
  const t = useTranslations("ReportsPage");
  return (
    <Tabs aria-label="Reports Options">
      <Tab
        key={"earnings"}
        title={t("earnings")}
        className="text-16 capitalize"
      >
        <EarningsTab />
      </Tab>
      <Tab key={"orders"} title={t("orders")} className="text-16 capitalize">
        <OrdersTab />
      </Tab>
      <Tab key={"units"} title={t("units")} className="text-16 capitalize">
        <UnitsTab />
      </Tab>
    </Tabs>
  );
};

export default ReportsTabs;
