'use client';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import GoogleAuthButton from '@/components/googleAuthButton/GoogleAuthButton';
import { Typography } from '@/components/typography/typoGraphy';
import { Divider } from 'antd';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { MdCancel } from 'react-icons/md';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const t = useTranslations("Auth.login");
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [showPass,setShowPass] = useState(false)
  const [errors, setErrors] = useState<Partial<LoginData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginData> = {};

    if (!formData.email) {
      newErrors.email = 'Please enter your email address!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address!';
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if(formData.email !== "host@example.com" && formData.email !== "cleaner@example.com") {
        throw new Error('Invalid email');
      }
      if (formData.email === 'host@example.com' && formData.password === 'host123') {
        localStorage.setItem('role', 'host');
      } else if (formData.email === 'cleaner@example.com' && formData.password === 'cleaner123') {
        localStorage.setItem('role', 'cleaner');
      }
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Login successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof LoginData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
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
                <GoogleAuthButton loginForm={true} />
                {/* <div>
                  <div className="flex items-center justify-between gap-1 text-sm py-2 rounded-md cursor-pointer">
                    <div className="border hover:bg-[#F0F5FE] flex px-1 py-2 rounded-4xl w-full border-gray-200 items-start justify-start gap-1">
                      <div className="bg-amber-500 w-8 h-8 rounded-full overflow-hidden p-2">
                        <FaApple />
                      </div>
                      <span className="text-gray-600 text-center w-full">Continue with Apple</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-1   text-sm py-2 rounded-md cursor-pointer">
                    <div className="border hover:bg-[#F0F5FE] flex px-1 py-2 rounded-4xl w-full border-gray-200 items-start justify-start gap-1">
                      <div className="bg-amber-500 w-8 h-8 rounded-full overflow-hidden p-2">
                        <FaFacebook />
                      </div>
                      <span className="text-gray-600 text-center w-full">Continue with Facebook</span>
                    </div>
                  </div>
                </div> */}

                {/* Divider */}
                <Divider>Or Login with</Divider>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 sm:gap-5">

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder={t("email_placeholder")}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs sm:text-sm">{errors.email}</span>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                      {t("password")}
                    </label>
                    <input
                      type={!showPass ? "password" : "text"}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder={t("password_placeholder")}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                        }`}
                    />
                    <h1 className='flex justify-end text-xs cursor-pointer hover:underline text-gray-500' onClick={() => setShowPass(!showPass)}>{showPass ? t("hide") : t("show")}</h1>
                    {errors.password && (
                      <span className="text-red-500 text-xs sm:text-sm">{errors.password}</span>
                    )}
                  </div>

                  {/* Forgot Password Link */}
                  <div className="text-right -mt-1">
                    <Link
                      href="/forget-pass-email"
                      className="text-[#0072C3] hover:text-[#0072C3] text-xs sm:text-sm md:text-base transition-colors duration-200 font-medium hover:underline"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0072C3] text-white font-semibold py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      t("signIn")
                    )}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center mt-2">
                  <Typography variant='caption' className="text-sm sm:text-base text-gray-600">
                    {t("new_here")}{' '}
                    <Link href="/choose-role" className="text-[#0072C3] hover:text-blue-700 font-semibold hover:underline transition-colors">
                      {t("new_account")}
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div
            style={{
              backgroundImage: `url(${IMAGE_CONSTANTS.signInImage.src})`,
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