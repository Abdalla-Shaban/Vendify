import Link from "next/link";
import ProductCard from "../ProductCard";
import { useTranslations } from "next-intl";

const Products = () => {
  const t = useTranslations("ProductsSection");
  return (
    <section className="px-8 mt-20 mb-5">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-24 font-bold">{t("title")}</h3>
        <Link className="text-20 font-bold" href="">
          {t("link")}
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 8 }, (_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="my-5">
        <button className="block text-18 mx-auto w-72 bg-green-950 text-white shadow-md py-2 rounded">
          {t("loadMoreButton")}
        </button>
      </div>
    </section>
  );
};

export default Products;
