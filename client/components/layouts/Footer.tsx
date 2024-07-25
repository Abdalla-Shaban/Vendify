import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col xl:flex-row md:items-center justify-center md:justify-between py-5 border-t-2">
      <div className="flex flex-col xl:flex-row items-center gap-4">
        <h2 className="text-24 font-bold">Vendify</h2>
        <div className="flex flex-col xl:flex-row items-center gap-4 text-14">
          <Link
            href="/contact-us"
            className="hover:underline hover:text-green-600"
          >
            {t("contact-us")}
          </Link>
          <div>{t("privacy-policy")}</div>
          <div>{t("terms-of-use")}</div>
          <div>{t("refund-cancellation-policy")}</div>
        </div>
      </div>
      <div className="text-center mt-3 xl:mt-0">
        Copyright &copy; 2024 Vendify Program. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
