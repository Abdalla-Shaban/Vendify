import { useTranslations } from "next-intl";
import Link from "next/link";

const NewOrder = () => {
  const t = useTranslations("NewOrderSection");
  return (
    <section className="flex flex-col items-center justify-center gap-2 mt-10">
      <h3 className="text-28 md:text-32 font-semibold">{t("title")}</h3>
      <Link
        href="/create/orders"
        className="px-3 py-2 text-white bg-green-950 rounded-xl"
      >
        {t("addOrder")}
      </Link>
    </section>
  );
};

export default NewOrder;
