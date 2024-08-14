import { Locale } from "@/config";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: t("favourites"),
  };
}

function FavouritesPage() {
  const t = useTranslations("FavouritesPage");
  return (
    <div className="flex-1 my-8 p-5 shadow-xl rounded-lg">
      <h1 className="text-32 font-bold">{t("title")}</h1>
      <div className="flex items-start justify-center text-28 font-semibolb">
        <div className="mt-5">{t("emptyContent")}</div>
      </div>
    </div>
  );
}

export default FavouritesPage;
