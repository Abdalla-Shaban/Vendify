"use client";

import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "../services/locale";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const handleClick = () => {
    if (locale === "en") {
      setUserLocale("ar");
    } else setUserLocale("en");
  };
  return <button onClick={handleClick}>{t("lang")}</button>;
};

export default LocaleSwitcher;
