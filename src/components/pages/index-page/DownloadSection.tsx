'use client';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { useTranslations } from 'next-intl';

function DownloadSection() {
  const t = useTranslations("app_download");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const phoneVariants: Variants = {
    hidden: { opacity: 0, x: 100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatAnimation: any = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const badgeHover: any = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="relative  overflow-hidden">
      <div className="absolute w-full h-full hidden md:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1921 555"
          fill="#F2F8FF"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M112.5 5.5C88.9 3.1 28 1.16667 0.5 0.5L0 529.5C15.5 529.167 52.1 528.7 74.5 529.5C102.5 530.5 167.5 537 179.5 538C191.5 539 269 547 284 548C299 549 368 553.5 387 553.5C406 553.5 496 554 512.5 553.5C529 553 610.5 549 618 548C625.5 547 706 540 720 538C734 536 793.5 532.5 819 530.5C839.4 528.9 897.5 528.167 924 528H993.5C1018.5 529.167 1070.8 531.7 1080 532.5C1091.5 533.5 1173.5 541.5 1180.5 542.5C1187.5 543.5 1277.5 550 1284 550.5C1290.5 551 1361.5 554.5 1366.5 554.5H1449C1454.5 554.5 1524.5 551.5 1529 551.5C1532.6 551.5 1581.5 547.5 1605.5 545.5L1667 540C1681.17 538.833 1719.5 535.7 1759.5 532.5C1799.5 529.3 1883.5 528.833 1920.5 529V0C1880.83 0.666667 1800.2 2 1795 2C1788.5 2 1689 10.5 1684 11C1680 11.4 1640 15.5 1620.5 17.5C1602.83 19.1667 1565.8 22.7 1559 23.5C1552.2 24.3 1516.5 26.1667 1499.5 27L1421.5 28C1384.67 27.3333 1309.5 26 1303.5 26C1296 26 1223.5 20 1222 20C1220.5 20 1150 12.5 1144 12C1138 11.5 1080.5 6 1077 6C1073.5 6 1019 2.5 1003.5 2C988 1.5 945.5 1 935.5 1H877.5C868.3 1 827 3.33333 807.5 4.5L743 9.5L681 15.5L605 22L515.5 26.5C494.333 26.6667 448.2 27.2 433 28C417.8 28.8 369.667 27 347.5 26L225 16C197.333 13.5 136.1 7.9 112.5 5.5Z" fill="#F2F8FF" />
        </svg>
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-3xl"
            variants={itemVariants}
          >
            <motion.h1
              className="font-bold mb-4 text-black text-2xl md:text-4xl leading-none tracking-normal"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              className="text-[#64748B]  text-sm md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              className="flex  items-center md:items-start gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={badgeHover}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => alert('coming soon')}
              >
                <Image
                  src={IMAGE_CONSTANTS?.google}
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="w-auto h-8 md:h-10 lg:h-12"
                  priority
                />
              </motion.div>
              <Link
                href="https://apps.apple.com/us/app/betwisepicks/id6747808426"
                target="_blank"
              >
                <motion.div
                  whileHover={badgeHover}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <Image
                    src={IMAGE_CONSTANTS?.apple}
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="w-auto h-8 md:h-10 lg:h-12"
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            variants={phoneVariants}
          >
            <div className="relative">
              {/* Dotted pattern overlay */}
              <motion.div
                className="absolute top-4 right-4 w-32 h-32 opacity-30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="grid grid-cols-8 gap-1">
                  {[...Array(64)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-green-300 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.01, duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Phone mockup */}
              <motion.div animate={floatAnimation} className="relative z-10">
                <Image
                  src={IMAGE_CONSTANTS?.dowloadMobile}
                  alt="BetWise Mobile App"
                  width={400}
                  height={500}
                  className="w-full h-full drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{
                  y: [-5, 5, -5],
                  x: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full opacity-80"
                animate={{
                  y: [5, -5, 5],
                  x: [2, -2, 2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default DownloadSection;
