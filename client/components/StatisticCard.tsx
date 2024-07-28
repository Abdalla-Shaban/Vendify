import { LucideProps } from "lucide-react";
import { useTranslations } from "next-intl";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface IStatisticsCard {
  title: string;
  customStyle: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const StatisticCard = ({ title, customStyle, Icon }: IStatisticsCard) => {
  const t = useTranslations("StatisticsSection");
  return (
    <div className="flex items-center justify-between bg-slate-100 rounded-lg p-5 overflow-hidden">
      <div className="flex flex-col gap-1">
        <p className="font-semibold opacity-70">{t(title)}</p>
        <span className="font-bold text-16">{0}</span>
      </div>
      <div
        className={`flex items-center justify-center min-w-14 min-h-14 size-14 border-2 rounded-full bg-white ${customStyle}`}
      >
        <Icon size={28} />
      </div>
    </div>
  );
};

export default StatisticCard;
