import Image from "next/image";
import shirt from "../public/images/shirt.jpg";
import { useTranslations } from "next-intl";

const ProductCard = () => {
  const t = useTranslations("ProductCard");
  return (
    <div className="overflow-hidden rounded-xl border shadow-md">
      <div>
        <Image
          src={shirt}
          alt="hero section background"
          className="aspect-square h-fit w-full rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-2 gap-1 text-14">
        <h5>
          تيشرت Calvin Klein بوليفار أوفر سايز (مخزن <span>302</span>)
        </h5>
        <div className="flex items-center justify-between font-bold">
          <div>
            {t("priceCommission")}: <span className="font-normal">299</span>
          </div>
          <div>
            {t("quantity")}: <span className="font-normal">1365</span>
          </div>
        </div>
        <div className=" font-bold">
          {t("commission")}: <span className="font-normal">LE 50</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
