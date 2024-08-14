import { getTranslations } from "next-intl/server";
import type { Locale } from "@/config";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import "./globals.css";
import { Providers } from "@/Providers";
const cairo = Cairo({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Locale }) {
  const t = await getTranslations({ params, namespace: "Metadata" });
  return {
    title: {
      default: `Vendify | ${t("home")}`,
      template: "%s | Vendify",
    },
    description:
      "Vendify is an e-commerce platform that helps our clients to earn a lot of money",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cairo.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
