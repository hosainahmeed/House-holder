import PageTopBanner from '@/components/common/PageTopBanner';
import AxpendFaq from '@/components/pages/faq/AxpendFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our services and how we can help your business grow.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <PageTopBanner
        title="Frequently asked questions"
        description="Find answers to common questions about our services and how we work"
      />
      <AxpendFaq />
    </div>
  );
}