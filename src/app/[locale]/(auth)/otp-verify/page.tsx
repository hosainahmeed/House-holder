'use client';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { Typography } from '@/components/typography/typoGraphy';
import { Button } from 'antd';
import OTP from 'antd/es/input/OTP';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { MdCancel } from 'react-icons/md';

interface OtpData {
  otp: string;
}

function VerifyOtp() {
  const t = useTranslations("Auth.login");
  const router = useRouter();
  const [formData, setFormData] = useState<OtpData>({
    otp: ''
  });
  const [errors, setErrors] = useState<Partial<OtpData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<OtpData> = {};

    if (!formData.otp || formData.otp.length !== 6) {
      newErrors.otp = 'Please enter a valid 6-digit OTP!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOtpChange = (value: string) => {
    setFormData(prev => ({ ...prev, otp: value }));
    // Clear error when user starts typing
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call for OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any 6-digit OTP
      if (formData.otp.length === 6) {
        alert("OTP verified successfully!");
        // Redirect to reset password page or dashboard based on flow
        router.push("/reset-password"); // or wherever you want to redirect
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      setErrors({ otp: 'Invalid OTP. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      // Simulate API call for resending OTP
      await new Promise(resolve => setTimeout(resolve, 500));
      alert("OTP has been resent to your email!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="relative w-full flex items-center justify-center min-h-screen bg-gray-50">
      {/* Background decoration for mobile */}
      <div className="absolute inset-0 lg:hidden" />

      <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-none lg:rounded-2xl border border-[#EFF6FF] shadow-xl overflow-hidden bg-white min-h-[85vh] lg:min-h-[75vh]">

          {/* Left Column - Login Form */}
          <div className="flex flex-col bg-white items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 order-2 lg:order-1 relative">
            {/* Mobile back button */}
            <div className="absolute top-4 left-4 lg:hidden z-10">
              <button
                onClick={() => router.replace('/')}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all"
              >
                <MdCancel className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md mx-auto mt-8 lg:mt-0">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
                {/* Title */}
                <div className="text-center">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
                  <p className="text-gray-600 text-sm sm:text-base">Enter the 6-digit code sent to your email</p>
                </div>

                {/* OTP Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm sm:text-base text-center">
                      Enter OTP Code
                    </label>
                    <div className="flex justify-center">
                      <OTP
                        value={formData.otp}
                        onChange={handleOtpChange}
                        length={6}
                        size="large"
                        className="scale-90 sm:scale-100"
                      />
                    </div>
                    {errors.otp && (
                      <span className="text-red-500 text-xs sm:text-sm text-center">{errors.otp}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    className="w-full bg-[#0072C3] hover:bg-[#0056b3] text-white font-semibold py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 h-auto"
                  >
                    {isSubmitting ? 'Verifying...' : t("verify")}
                  </Button>
                </form>

                {/* Resend OTP */}
                <div className="text-center">
                  <Typography variant='caption' className="text-sm sm:text-base text-gray-600">
                    Didn&apos;t receive the code?{' '}
                    <button
                      onClick={handleResendOtp}
                      className="text-[#0072C3] hover:text-blue-700 font-semibold hover:underline transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Resend OTP
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div
            style={{
              backgroundImage: `url(${IMAGE_CONSTANTS.otp.src})`,
            }}
            className="relative bg-white lg:flex hidden flex-col bg-center bg-contain bg-no-repeat items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white order-1 lg:order-2 min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-auto"
          >
            {/* Desktop back button */}
            <div className="absolute top-4 right-4 hidden lg:block">
              <button
                onClick={() => router.back()}
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <MdCancel className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* You can add additional content here if needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default VerifyOtp