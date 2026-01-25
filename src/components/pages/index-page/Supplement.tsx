
import { Bell, Sparkles, Star } from 'lucide-react';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';

function Supplement() {
  const steps = [
    {
      icon: Bell,
      title: "I am alerted in real time to requests posted around me.",
      number: 1
    },
    {
      icon: Sparkles,
      title: "I respond to requests and perform services.",
      number: 2
    },
    {
      icon: Star,
      title: "I am paid and evaluated.",
      number: 3
    }
  ];

  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #29a9e2 100%)",
      }}
      className="w-full relative px-4">
      <div className="container mx-auto max-w-6xl relative z-2">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          <span className="bg-[#29a9e2] text-white px-3 py-1 inline-block transform -rotate-1">
            Individuals,
          </span>
          <span className="text-gray-800 ml-2">
            Supplement your income with AlloVoisins!
          </span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-6">
                {/* Background blob */}
                <div className="absolute inset-0 bg-[#29a9e2] rounded-full blur-3xl opacity-50 scale-150"></div>

                {/* Phone mockup */}
                <div className="relative w-40 min-h-28">
                  {index === 0 && (
                    <img src={IMAGE_CONSTANTS.mobileNotificationImage.src} alt="Mobile Notification" />
                  )}

                  {index === 1 && (
                    <img src={IMAGE_CONSTANTS.cleaningIconsImage.src} alt="Mobile Cost" />
                  )}

                  {index === 2 && (
                    <img src={IMAGE_CONSTANTS.mobileCostImage.src} alt="Mobile Cost" />
                  )}
                </div>
              </div>

              {/* Step Description */}
              <p className="text-gray-800 font-medium text-sm md:text-base">
                <span className="font-bold">{step.number}.</span> {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-4">
          <button className="bg-[#29a9e2] hover:bg-[#29a9e2] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all transform cursor-pointer">
            I offer my services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supplement;
