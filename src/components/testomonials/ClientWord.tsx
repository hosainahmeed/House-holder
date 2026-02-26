'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Card } from 'antd';
import { Typography } from '../typography/typoGraphy';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const testimonials = [
  {
    id: 1,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 3,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
  {
    id: 4,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2123,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 3123423,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
  {
    id: 1122343,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2123123213,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 2342343,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
];

function ClientWord() {
  const t = useTranslations("clinet-word")
  return (
    <div className="max-w-[95%] md:max-w-[65%] px-2 mx-auto relative">
      <div className="flex flex-col items-center text-center">
        <Typography variant="overline" className="text-[#0072C3] text-center font-bold">
          {t("subtitle")}
        </Typography>
        <Typography variant="h2" className="text-[#0072C3] text-center font-bold">
          {t("title")}
        </Typography>
        <Typography variant="body" className="text-lg mb-8 text-center max-w-2xl mx-auto">
          {t("description")}
        </Typography>
      </div>
      <div className="gradient-ellipse"></div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={12}
        // slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        className="w-full swipe my-0"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card
              style={{
                backgroundImage: 'linear-gradient(180deg, #dbeafe 0%, #0072C3 100%)'
              }}
              className="bg-linear-to-r rounded-md  from-blue-50 to-[#0072C3] w-full p-4 backdrop-blur-2xl bg-white transition-shadow duration-300">
              <div className="flex flex-col gap-2 items-center text-center">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.05}
                />
                <div className="w-20 h-20 rounded-full bg-gray-300 mt-2">
                  <Image
                    src="https://placehold.co/80x80"
                    alt="User avatar"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-base text-gray-700">
                  {testimonial.content.slice(0, 200) || 0}
                </p>
                <p className="font-semibold text-gray-900 mt-1">
                  - {testimonial.author}
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientWord;
