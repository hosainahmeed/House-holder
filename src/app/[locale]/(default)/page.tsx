import React from 'react'
import Banner from '@/components/pages/index-page/Banner'
import WhyChoose from '@/components/pages/index-page/WhyChoose'
import TestimonialCarousel from '@/components/pages/index-page/TestimonialCarousel'
import DownloadSection from '@/components/pages/index-page/DownloadSection'
import JoinSection from '@/components/pages/index-page/JoinSection'
import CleanersInNumbers from '@/components/pages/index-page/CleanersInNumbers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "Our mission is to simplify job management, ensure secure payments, and help independent cleaners grow their business with confidence.",
};

import ClientWord from '@/components/testomonials/ClientWord';
import Supplement from '@/components/pages/index-page/Supplement'

function page() {
  return (
    <div className="flex flex-col gap-24">
      <Banner />
      <Supplement />
      <WhyChoose />
      <JoinSection />
      <CleanersInNumbers />
      <DownloadSection />
      <TestimonialCarousel />
    </div>
  )
}

export default page