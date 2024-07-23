import { useTranslations } from "next-intl";
const About = () => {
  const t = useTranslations("AboutSection");
  return (
    <section className="px-8">
      <h2 className="text-32 font-semibold">{t("title")}</h2>
      <p className="text-18 w-[95%]">{t("content")}</p>
    </section>
  );
};

export default About;
