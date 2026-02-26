import { IMAGE_CONSTANTS } from '@/assets/images/image.index';

function Supplement() {
  const steps = [
    {
      title: "I Am alerted In real time to request posted around me",
      number: 1
    },
    {
      title: "I respond to requests and perform services.",
      number: 2
    },
    {
      title: "I am paid and evaluated.",
      number: 3
    }
  ];

  return (
    <div className="w-full relative min-h-[555px] flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* SVG Background - Hidden on mobile, visible on larger screens */}
      <div className="absolute w-full h-full hidden md:block">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1921 555" 
          fill="#2DBEFF"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path d="M112.5 5.5C88.9 3.1 28 1.16667 0.5 0.5L0 529.5C15.5 529.167 52.1 528.7 74.5 529.5C102.5 530.5 167.5 537 179.5 538C191.5 539 269 547 284 548C299 549 368 553.5 387 553.5C406 553.5 496 554 512.5 553.5C529 553 610.5 549 618 548C625.5 547 706 540 720 538C734 536 793.5 532.5 819 530.5C839.4 528.9 897.5 528.167 924 528H993.5C1018.5 529.167 1070.8 531.7 1080 532.5C1091.5 533.5 1173.5 541.5 1180.5 542.5C1187.5 543.5 1277.5 550 1284 550.5C1290.5 551 1361.5 554.5 1366.5 554.5H1449C1454.5 554.5 1524.5 551.5 1529 551.5C1532.6 551.5 1581.5 547.5 1605.5 545.5L1667 540C1681.17 538.833 1719.5 535.7 1759.5 532.5C1799.5 529.3 1883.5 528.833 1920.5 529V0C1880.83 0.666667 1800.2 2 1795 2C1788.5 2 1689 10.5 1684 11C1680 11.4 1640 15.5 1620.5 17.5C1602.83 19.1667 1565.8 22.7 1559 23.5C1552.2 24.3 1516.5 26.1667 1499.5 27L1421.5 28C1384.67 27.3333 1309.5 26 1303.5 26C1296 26 1223.5 20 1222 20C1220.5 20 1150 12.5 1144 12C1138 11.5 1080.5 6 1077 6C1073.5 6 1019 2.5 1003.5 2C988 1.5 945.5 1 935.5 1H877.5C868.3 1 827 3.33333 807.5 4.5L743 9.5L681 15.5L605 22L515.5 26.5C494.333 26.6667 448.2 27.2 433 28C417.8 28.8 369.667 27 347.5 26L225 16C197.333 13.5 136.1 7.9 112.5 5.5Z" fill="#2dbeff5c" />
        </svg>
      </div>

      {/* Mobile background - Simple gradient instead of complex SVG */}
      <div className="absolute w-full h-full md:hidden bg-linear-to-b from-[#2dbeff0a] via-[#2dbeff1a] to-[#2dbeff0a]"></div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16">
          <span className="bg-[#323135] text-white px-2 sm:px-3 py-1 inline-block transform -rotate-2 sm:-rotate-3 md:-rotate-5 text-xl sm:text-2xl md:text-3xl">
            Individuals,
          </span>
          <span className="text-gray-800 ml-2 block sm:inline mt-2 sm:mt-0 text-xl sm:text-2xl md:text-3xl">
            Supplement your income with AlloVoisins!
          </span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center px-4"
            >
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6">
                {/* Background blob */}
                <div className="absolute inset-0 bg-[#29a9e2] rounded-full blur-2xl sm:blur-3xl opacity-40 sm:opacity-50 scale-125 sm:scale-150"></div>

                {/* Image Container */}
                <div className="relative w-32 sm:w-36 md:w-40 min-h-24 sm:min-h-28 flex items-center justify-center">
                  {index === 0 && (
                    <img 
                      src={IMAGE_CONSTANTS.mobileNotificaionSvg.src} 
                      alt="Mobile Notification"
                      className="w-full h-auto object-contain"
                    />
                  )}

                  {index === 1 && (
                    <img 
                      src={IMAGE_CONSTANTS.recycleSvg.src} 
                      alt="Service"
                      className="w-full h-auto object-contain"
                    />
                  )}

                  {index === 2 && (
                    <img 
                      src={IMAGE_CONSTANTS.cleanerSvg.src} 
                      alt="Payment"
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>
              </div>

              {/* Step Description */}
              <p className="text-gray-800 font-medium text-sm sm:text-base max-w-xs">
                <span className="font-bold text-base sm:text-lg">{step.number}.</span> {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center">
          <button className="bg-[#29a9e2] hover:bg-[#2398ca] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base">
            I offer my services
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Supplement;