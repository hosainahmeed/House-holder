import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AirHousehold",
    template: "%s | AirHousehold"
  },
  description: "Join a trusted platform that connects professional cleaners with verified hosts. Choose jobs near you, manage your schedule, and receive secure payments after every completed mission.",
  keywords: "cleaning, laundry, domestic help, housekeeping, AirMénage, services, professional, reliable, trustworthy, domestic services, home cleaning, maid service, cleaning services, house cleaning, residential cleaning, cleaning company, cleaning service, domestic assistance, household help, cleaning contractor, cleaning professionals, housekeeping services, cleaning crew, professional cleaning service, cleaning business, domestic cleaning, house cleaning service, cleaning solutions, residential cleaning services, professional housekeepers, cleaning experts, reliable cleaning service, trustworthy cleaners, professional domestic help, cleaning near me, local cleaners, house cleaning near me, domestic help near me, house cleaning services, domestic help services, cleaning agency, housekeeping company, domestic helper, cleaning workforce, professional cleaning crew",
  metadataBase: new URL("https://www.airmenage.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}