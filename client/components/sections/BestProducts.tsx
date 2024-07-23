import { useTranslations } from "next-intl";
import ProductCard from "../ProductCard";

const BestProducts = () => {
  const t = useTranslations("BestProductsSection");
  return (
    <section className="px-8 mt-10 mb-5">
      <h3 className="text-24 font-bold mb-10">{t("title")}</h3>
      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 8 }, (_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
