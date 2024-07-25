"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { NavbarLinks } from "@/constants";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="flex items-center justify-between border-b-2">
      <h1 className="text-28 font-bold text-green-950">
        <Link href="/">Vendify</Link>
      </h1>
      <div className="hidden md:flex items-center space-x-1 text-16">
        <div className="duration-300 hover:text-green-600 border-b-2 border-b-transparent hover:border-green-600 p-4">
          <LocaleSwitcher />
        </div>
        {NavbarLinks.map(({ title, href }) => (
          <Link
            key={href}
            className="duration-300 hover:text-green-600 border-b-2 border-b-transparent hover:border-green-600 p-4"
            href={href}
          >
            {t(title)}
          </Link>
        ))}
      </div>
      <div className="flex items-center my-3 gap-5">
        <div className="flex items-center justify-center min-w-10 h-10 border py-1 px-2 rounded-xl bg-green-950 text-white">
          <LocaleSwitcher />
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-green-950 text-white md:hidden" isIconOnly>
              <Menu />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="menu links" items={NavbarLinks}>
            {({ title, href }) => (
              <DropdownItem
                key={href}
                textValue={title}
                href={href}
                className="p-4"
              >
                {t(title)}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
