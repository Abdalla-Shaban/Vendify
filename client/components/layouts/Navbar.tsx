import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="flex items-center justify-between py-5 px-2 border-b-2 mb-8">
      <h1 className="text-24 font-semibold">Vendify</h1>
      <ul className="flex items-center gap-5">
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <Link href={""}>{t("about")}</Link>
        </li>
        <li>
          <Link href={""}>{t("faqs")}</Link>
        </li>
        <li>
          <Link href={""}>{t("tutorial")}</Link>
        </li>
        <li>
          <Link href={""}>{t("register")}</Link>
        </li>
        <li>
          <Link href={""}>{t("login")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
