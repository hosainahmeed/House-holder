// 'use client'
// import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
// import { CleanIcon } from "@/components/svgs/cleanIcon";
// import { Typography } from "@/components/typography/typoGraphy";
// import { Button } from "antd";
// import { useTranslations } from "next-intl";

import { IMAGE_CONSTANTS } from "@/assets/images/image.index"
import { BsGooglePlay } from "react-icons/bs"
import { FaAppStore } from "react-icons/fa"

// export default function Banner() {
//   const t = useTranslations("banner")
//   const common = useTranslations("Common")
//   return (
//     <div style={{
//       backgroundImage: `url(${IMAGE_CONSTANTS.HERO_BG.src})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'top',
//       backgroundRepeat: 'no-repeat',
//       filter: 'brightness(0.8)'
//     }}
//       className="min-h-[calc(100vh-5rem)] px-2 relative flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <div
//         className="absolute top-0 -z-1 left-0 w-full h-full bg-linear-to-l from-transparent via-[#2dbcffc0] to-[#2DBEFF] via-50% pointer-events-none" />
//       <main className="container mx-auto flex flex-col gap-4 items-start justify-center h-full">
//         <div className="flex gap-2  items-center">
//           <CleanIcon width="44" height="44" fill="#111" />
//           <Typography className="text-[#323135] leading-none" variant="caption">{t("subtitle")}</Typography>
//         </div>
//         <Typography variant="h2" className="text-white max-w-3xl font-semibold">{t("title")}</Typography>
//         <Typography variant="body" className="text-[#323135] max-w-3xl font-semibold">{t("description")}</Typography>
//         <Button size="large" style={{ border: '1px solid white', backgroundColor: 'transparent', color: 'white' }} variant="outlined">
//           {common("explore")}
//         </Button>
//       </main>
//     </div>
//   );
// }
import React from 'react';
import { Play, Apple } from 'lucide-react';

function Banner() {
  return (
    <div className="relative w-full bg-white">
      {/* Main Banner Content */}
      <div
        style={{ backgroundImage: `url(${IMAGE_CONSTANTS.bannerBack.src})` }}
        className="relative min-h-[400px] bg-cover sm:min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[400px] lg:max-w-none">
                {/* TODO: Add banner image */}
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Housekeepers, grow your business with AirMenage!
              </h1>
              <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium">
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <AppDownload />
    </div>
  );
}

const AppDownload = () => {
  return (
    <div
      style={{ backgroundImage: `url(${IMAGE_CONSTANTS.wave.src})` }}
      className="relative bg-no-repeat bg-bottom bg-cover bg-[#374A61] md:bg-transparent  md:h-72 py-12">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full">
        <img src={IMAGE_CONSTANTS.wave.src} alt="Wave" className="w-full h-full object-cover" />
      </div> */}
      {/* Download Buttons Container */}
      <div className="max-w-4xl mx-auto relative z-2">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <button className="w-full sm:w-auto cursor-pointer border-2 border-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group min-w-[200px]">
            <Play className="w-5 h-5 fill-current" />
            <span className="font-medium">Google Play</span>
          </button>
          <button className="w-full sm:w-auto cursor-pointer border-2 border-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group min-w-[200px]">
            <Apple className="w-5 h-5" />
            <span className="font-medium">App Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;