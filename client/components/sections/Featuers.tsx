import money from "../../public/icons/money-icon.svg";
import marketing from "../../public/icons/marketing-speaker.svg";
import community from "../../public/icons/commuinty.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Featuers = () => {
  const t = useTranslations("FeatuersSection");
  return (
    <section className="flex items-center justify-center md:justify-evenly gap-10 md:gap-0 flex-wrap mt-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-green-950 rounded-full size-28 flex items-center justify-center">
          <Image
            src={community}
            alt="hero section background"
            className="size-16"
          />
        </div>
        <h4 className="text-18">{t("join")}</h4>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-green-950 rounded-full size-28 flex items-center justify-center">
          <Image
            src={marketing}
            alt="hero section background"
            className="size-16"
          />
        </div>
        <h4 className="text-18">{t("advertise")}</h4>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-green-950 rounded-full size-28 flex items-center justify-center">
          <Image
            src={money}
            alt="hero section background"
            className="size-16"
          />
        </div>
        <h4 className="text-18">{t("earn")}</h4>
      </div>
    </section>
  );
};

export default Featuers;
