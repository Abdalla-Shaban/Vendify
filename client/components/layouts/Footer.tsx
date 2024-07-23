import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex items-center justify-between py-5 border-t-2">
      <div className="flex items-center gap-4">
        <h2 className="text-24 font-bold">Vendify</h2>
        <div className="flex items-center gap-4 text-14">
          <Link href="">{t("contact-us")}</Link>
          <Link href="">{t("privacy-policy")}</Link>
          <Link href="">{t("terms-of-use")}</Link>
          <Link href="">{t("refund-cancellation-policy")}</Link>
        </div>
      </div>
      <div>Copyright &copy; 2024 Vendify Program. All rights reserved</div>
    </footer>
  );
};

export default Footer;
