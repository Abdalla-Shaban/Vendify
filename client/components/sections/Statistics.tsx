import {
  BookCheck,
  BookMarked,
  CircleDollarSign,
  Coins,
  FileCheck2,
  HandCoins,
  Loader,
  NotebookText,
  Undo2,
} from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import StatisticCard from "../StatisticCard";

type TStatistics = {
  showLink: boolean;
};

const Statistics = ({ showLink }: TStatistics) => {
  const StatisticsCardContent = [
    {
      title: "totalOrders",
      Icon: NotebookText,
      customStyle: "text-blue-700",
    },
    {
      title: "returnedOrders",
      Icon: Undo2,
      customStyle: "text-red-700",
    },
    {
      title: "finishedOrders",
      Icon: BookCheck,
      customStyle: "text-green-600",
    },
    {
      title: "commissionPayable",
      Icon: HandCoins,
      customStyle: "text-yellow-500",
    },
    {
      title: "commissionPaid",
      Icon: CircleDollarSign,
      customStyle: "text-green-700",
    },
    {
      title: "piecesDelivered",
      Icon: FileCheck2,
      customStyle: "text-green-700",
    },
    {
      title: "totalNumberOfRegisterdPieces",
      Icon: BookMarked,
      customStyle: "text-indigo-400",
    },
    {
      title: "commissionUnderCollection",
      Icon: Loader,
      customStyle: "text-blue-400",
    },
    {
      title: "printedAndShippedOrdersCommission",
      Icon: Coins,
      customStyle: "text-red-800",
    },
  ];
  const t = useTranslations("StatisticsSection");
  return (
    <section className="flex flex-col gap-5 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center  gap-5">
        {StatisticsCardContent.map((cardContent) => (
          <StatisticCard key={cardContent.title} {...cardContent} />
        ))}
      </div>
      {showLink && (
        <Link
          className="text-white px-3 py-2 rounded-full text-14 bg-green-950 mx-auto"
          href="/dashboard/affilites"
        >
          {t("allStatistics")}
        </Link>
      )}
    </section>
  );
};

export default Statistics;
