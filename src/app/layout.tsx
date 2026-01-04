import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider, ThemeConfig } from "antd";
// import ClickjackingFixed from "@/utils/ClickjackingFixed";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AirHousehold",
    template: "%s | AirHousehold"
  },
  description: "Join a trusted platform that connects professional cleaners with verified hosts. Choose jobs near you, manage your schedule, and receive secure payments after every completed mission.",
  keywords: "cleaning, laundry, domestic help, housekeeping, AirMénage, services, professional, reliable, trustworthy, domestic services, home cleaning, maid service, cleaning services, house cleaning, residential cleaning, cleaning company, cleaning service, domestic assistance, household help, cleaning contractor, cleaning professionals, housekeeping services, cleaning crew, professional cleaning service, cleaning business, domestic cleaning, house cleaning service, cleaning solutions, residential cleaning services, professional housekeepers, cleaning experts, reliable cleaning service, trustworthy cleaners, professional domestic help, cleaning near me, local cleaners, house cleaning near me, domestic help near me, house cleaning services, domestic help services, cleaning agency, housekeeping company, domestic helper, cleaning workforce, professional cleaning crew",
  metadataBase: new URL("https://www.airmenage.com"),
};


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
      optionSelectedColor: "rgba(255,255,255,0.88)",
      fontSizeLG: 16
    },
    Input: {
      fontSizeLG: 20,
    },
    Form: {
      labelFontSize: 18,
      labelHeight: 32
    }
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider theme={themeConfig}>
          {/* <ClickjackingFixed> */}
            {children}
          {/* </ClickjackingFix/ed> */}
        </ConfigProvider>
      </body>
    </html>
  );
}
