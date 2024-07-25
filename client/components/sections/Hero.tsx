import Image from "next/image";
import Link from "next/link";
import imgSrc from "../../public/images/bg-herosection.svg";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("HeroSection");
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mb-10 md:mb-0">
      <div className="flex flex-col">
        <h2 className="text-28 md:text-32 font-bold mt-5 md:mt-0">Vendify</h2>
        <p className="text-24 md:text-28 font-bold md:w-9/12 mb-3">
          {t("title")}
        </p>
        <Link
          href="/register/affilite"
          className="border-none md:w-fit text-center bg-green-950 text-white font-semibold py-2 min-w-52 rounded-md"
        >
          {t("link")}
        </Link>
      </div>
      <Image
        src={imgSrc}
        alt="hero section background"
        className="hidden md:block h-96"
      />
    </section>
  );
};
export default Hero;
