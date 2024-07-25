import { useTranslations } from "next-intl";
const About = () => {
  const t = useTranslations("AboutSection");
  return (
    <section className="px-0 md:px-8">
      <h2 className="text-28 md:text-32 font-semibold">{t("title")}</h2>
      <p className="text-18 md:w-[95%]">{t("content")}</p>
    </section>
  );
};

export default About;
