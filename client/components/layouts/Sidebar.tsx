"use client";
import { SidebarLinks } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  const locale = useLocale();
  return (
    <div className="md:min-w-72 max-w-72 bg-green-50 shadow-xl md:my-3 md:rounded-xl overflow-hidden">
      <div className="flex flex-col">
        {SidebarLinks.map(({ title, href, Icon }) => {
          const isActive = pathname == href;
          return (
            <Tooltip
              className="select-none pointer-events-none md:hidden"
              content={t(title)}
              key={href}
              delay={1000}
              closeDelay={30}
            >
              <Link
                href={href}
                className={`flex items-center transition-all duration-300 justify-between p-3 md:p-4 rounded-md text-16 md:text-18 capitalize border border-x-0 border-y-transparent hover:bg-green-100 hover:border-y-slate-300 ${
                  isActive
                    ? "bg-green-900 text-white hover:bg-green-950"
                    : "bg-green-50 text-black"
                }`}
              >
                <div className="flex items-center justify-center md:gap-4">
                  <Icon />
                  <div className="hidden md:inline-flex">{t(title)}</div>
                </div>
                <div className="hidden md:inline-flex">
                  {locale == "ar" ? (
                    <ArrowLeft size={15} />
                  ) : (
                    <ArrowRight size={15} />
                  )}
                </div>
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
