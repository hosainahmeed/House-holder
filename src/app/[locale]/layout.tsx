import { ConfigProvider, ThemeConfig } from "antd";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeConfig: ThemeConfig = {
  token: {
    borderRadius: 4,
    fontSize: 16,
    colorPrimary: '#2563EB',
  },
  components: {
    Radio: {
      buttonSolidCheckedBg: 'rgb(136,148,166)',
      buttonSolidCheckedHoverBg: 'rgb(127,132,139)',
      borderRadius: 1,
    },
    Checkbox: {
      colorPrimary: "rgb(0,0,0)",
      colorPrimaryHover: "rgb(0,0,0)"
    },
    Select: {
      fontSizeLG: 16
    },
    Input: {
      fontSizeLG: 20,
    },
    Tabs: {
      itemHoverColor: "#2DBEFF"
    },
    Form: {
      labelFontSize: 18,
      labelHeight: 32
    }
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // Pass the locale explicitly to getMessages
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider theme={themeConfig}>
            {children}
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}