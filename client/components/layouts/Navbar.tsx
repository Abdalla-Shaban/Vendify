import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { NavbarLinks } from "@/constants";

const Navbar = () => {
  const t = useTranslations("Navbar");
  return (
    <nav className="flex items-center justify-between p-3 border-b-2">
      <h1 className="text-24 font-semibold">Vendify</h1>
      <ul className="flex items-center gap-5 text-16">
        <li className="duration-300 hover:text-green-950 hover:font-bold">
          <LocaleSwitcher />
        </li>
        {NavbarLinks.map(({ title, href }) => (
          <li
            key={href}
            className="duration-300 hover:text-green-950 hover:font-bold"
          >
            <Link href={href}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
