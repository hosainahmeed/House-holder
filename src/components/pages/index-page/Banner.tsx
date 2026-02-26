import { IMAGE_CONSTANTS } from "@/assets/images/image.index"
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Main Banner Content */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div 
          style={{ backgroundImage: `url(${IMAGE_CONSTANTS.bannerBack.src})` }}
          className="absolute inset-0 bg-cover bg-center hidden md:opacity-50 lg:block bg-no-repeat"
        />
        
        {/* Gradient Overlay */}
        <div
          style={{
            background: "linear-gradient(178deg, rgba(45, 190, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.95) 100%)",
          }}
          className="absolute inset-0 z-1"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Image Section */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[450px] lg:max-w-[550px]">
                <Image 
                  src={IMAGE_CONSTANTS.bannerBack.src} 
                  alt="Housekeeping Services" 
                  width={550} 
                  height={400}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Housekeepers,{" "}
                <span className="block mt-2 bg-linear-to-r from-[#40C4FF] to-[#40C4FF] bg-clip-text text-transparent">
                  grow your business
                </span>{" "}
                <span className="block mt-2">with AirMenage!</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Create an account
                </button>
              </div>
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
    <div className="relative overflow-hidden">
      {/* Wave Background */}
      <div 
        style={{ backgroundImage: `url(${IMAGE_CONSTANTS.wave.src})` }}
        className="absolute inset-0 bg-no-repeat bg-top bg-cover opacity-30 mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="#" 
              className="group transform transition-all duration-300"
            >
              <div className="relative">
                <Image 
                  src={IMAGE_CONSTANTS.appleD} 
                  alt="Download on App Store" 
                  width={200} 
                  height={60} 
                  className="h-14 sm:h-16 w-auto drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
                />
              </div>
            </Link>
            <Link 
              href="#" 
              className="group transform transition-all duration-300"
            >
              <div className="relative">
                <Image 
                  src={IMAGE_CONSTANTS.googleD} 
                  alt="Get it on Google Play" 
                  width={200} 
                  height={60} 
                  className="h-14 sm:h-16 w-auto drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
                />
              </div>
            </Link>
          </div>

          {/* Additional Info (Optional) */}
          <div className="pt-4">
            <p className="text-sm text-gray-400">
              Available for iOS 12.0+ and Android 6.0+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;