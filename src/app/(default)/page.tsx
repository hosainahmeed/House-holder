import React from 'react'
import Banner from '@/components/pages/index-page/Banner'
import WhyChoose from '@/components/pages/index-page/WhyChoose'
import TestimonialCarousel from '@/components/pages/index-page/TestimonialCarousel'
import DownloadSection from '@/components/pages/index-page/DownloadSection'
import JoinSection from '@/components/pages/index-page/JoinSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "Our mission is to simplify job management, ensure secure payments, and help independent cleaners grow their business with confidence.",
};

function page() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      <Banner />
      <WhyChoose />
      <JoinSection />
      <DownloadSection />
      <TestimonialCarousel />
    </div>
  )
}

export default page