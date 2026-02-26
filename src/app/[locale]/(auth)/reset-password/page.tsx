'use client';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { MdCancel } from 'react-icons/md';

interface ResetPasswordData {
  password: string;
  confirmPassword: string;
}

function ResetPassword() {
  const router = useRouter();
  const [formData, setFormData] = useState<ResetPasswordData>({
    password: '',
    confirmPassword: ''
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [errors, setErrors] = useState<Partial<ResetPasswordData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ResetPasswordData> = {};

    if (!formData.password) {
      newErrors.password = 'Please enter your new password!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password!';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ResetPasswordData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Password reset successful!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      setErrors({ password: 'Failed to reset password. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative w-full flex items-center justify-center min-h-screen bg-gray-50">
      {/* Background decoration for mobile */}
      <div className="absolute inset-0 lg:hidden" />

      <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-none lg:rounded-2xl border border-[#EFF6FF] shadow-xl overflow-hidden bg-white min-h-[85vh] lg:min-h-[75vh]">

          {/* Left Column - Reset Password Form */}
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
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                  <p className="text-gray-600 text-sm sm:text-base">Create your new password</p>
                </div>

                {/* Reset Password Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 sm:gap-5">

                  {/* New Password Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                      New Password
                    </label>
                    <input
                      type={!showPass ? "password" : "text"}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder="Enter new password"
                      className={`w-full px-4 py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                        }`}
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="text-xs cursor-pointer hover:underline text-gray-500"
                      >
                        {showPass ? "Hide" : "Show"}
                      </button>
                    </div>
                    {errors.password && (
                      <span className="text-red-500 text-xs sm:text-sm">{errors.password}</span>
                    )}
                  </div>

                  {/* Confirm Password Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                      Confirm Password
                    </label>
                    <input
                      type={!showConfirmPass ? "password" : "text"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                      placeholder="Confirm new password"
                      className={`w-full px-4 py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                        }`}
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setShowConfirmPass(!showConfirmPass)}
                        className="text-xs cursor-pointer hover:underline text-gray-500"
                      >
                        {showConfirmPass ? "Hide" : "Show"}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <span className="text-red-500 text-xs sm:text-sm">{errors.confirmPassword}</span>
                    )}
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
                        Resetting...
                      </span>
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </form>

                {/* Back to Login */}
                <div className="text-center mt-2">
                  <span className="text-sm sm:text-base text-gray-600">
                    Remember your password?{' '}
                    <button
                      onClick={() => router.push('/login')}
                      className="text-[#0072C3] hover:text-blue-700 font-semibold hover:underline transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Sign In
                    </button>
                  </span>
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

export default ResetPassword;