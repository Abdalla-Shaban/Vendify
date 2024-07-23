import Image from "next/image";
import Link from "next/link";
import imgSrc from "../../public/images/bg-herosection.svg";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("HeroSection");
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-32 font-semibold">Vendify</h2>
        <p className="text-28 font-bold w-9/12 mt-2 mb-3">{t("title")}</p>
        <Link
          href="/"
          className="border-none w-fit bg-green-950 text-white font-semibold py-2 px-9 rounded-md"
        >
          {t("link")}
        </Link>
      </div>
      <Image src={imgSrc} alt="hero section background" className="h-96" />
    </section>
  );
};
export default Hero;
