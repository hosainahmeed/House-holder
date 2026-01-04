'use client';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { Typography } from '@/components/typography/typoGraphy';
import { Button, Input, Form, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdCancel } from 'react-icons/md';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = async (value: LoginData) => {
    console.log(value);
  };

  return (
 <main className="relative w-full  flex items-center justify-center ">
        {/* Background decoration for mobile */}
        <div className="absolute inset-0  lg:hidden" />
        <div className="relative w-full max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-2 rounded-none lg:rounded-2xl shadow-none lg:shadow-xl overflow-hidden min-h-[85vh] lg:min-h-[75vh]">

            {/* Left Column - Login Form */}
            <div className="flex flex-col bg-white items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 order-2 lg:order-1">
              {/* Mobile back button */}
              <div className="absolute top-4 left-4 lg:hidden">
                <Button
                  onClick={() => router.back()}
                  icon={<MdCancel />}
                  size="middle"
                  type="text"
                  className="text-gray-500 hover:text-gray-700"
                />
              </div>

              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md mx-auto mt-8 lg:mt-0">
                <Space
                  orientation="vertical"
                  size="middle"
                  className="w-full"
                  style={{ width: '100%' }}
                >
                  {/* Header */}
                  <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <Typography
                      variant="h2"
                      className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl"
                      align="center"
                    >
                      Welcome Back!
                    </Typography>
                    <Typography
                      variant="subtitle"
                      className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg"
                      align="center"
                    >
                      Please enter your information to sign in to your account
                    </Typography>
                  </div>

                  {/* Login Form */}
                  <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout="vertical"
                    className="w-full"
                    size="middle"
                  >
                    {/* Email Input */}
                    <Form.Item
                      label={
                        <Typography
                          variant="subtitle"
                          className="text-gray-600 text-sm sm:text-base"
                        >
                          Email
                        </Typography>
                      }
                      className="mb-3 sm:mb-4 md:mb-5"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your email address!'
                        },
                        {
                          type: 'email',
                          message: 'Please enter a valid email address!',
                        }
                      ]}
                    >
                      <Input
                        placeholder="Enter your email address"
                        size="large"
                      />
                    </Form.Item>

                    {/* Password Input */}
                    <Form.Item
                      label={
                        <Typography
                          variant="subtitle"
                          className="text-gray-600 text-sm sm:text-base"
                        >
                          Password
                        </Typography>
                      }
                      className="mb-2 sm:mb-3"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your password!'
                        },
                        {
                          min: 6,
                          message: 'Password must be at least 6 characters!',
                        }
                      ]}
                    >
                      <Input.Password
                        placeholder="Enter your password"
                        size="large"
                      />
                    </Form.Item>

                    {/* Forgot Password Link */}
                    <div className="text-right mb-4 sm:mb-6 md:mb-8">
                      <Link
                        href="/auth/sign-in/forget-pass-email"
                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm md:text-base transition-colors duration-200"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <Form.Item className="mb-4 sm:mb-6">
                      <Button
                        htmlType="submit"
                        size="large"
                        style={{ backgroundColor: '#0072C3', color: 'white' }}
                        block
                        className="h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 border-blue-600 hover:border-blue-700 transition-all duration-300"
                      >
                        Sign In
                      </Button>
                    </Form.Item>

                    {/* Sign Up Link */}
                    <div style={{ textAlign: 'center', marginTop: 24 }}>
                      <Typography variant='h3' style={{ fontSize: '14px' }}>
                        New here?{' '}<Link href="/register" style={{ color: '#0072C3' }}>Create a new account</Link>
                      </Typography>
                    </div>
                  </Form>
                </Space>
              </div>
            </div>

            {/* Right Column - Image Section */}
            <div
              style={{
                backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
              }}

              className="relative bg-[#0f172a] lg:flex hidden  flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white order-1 lg:order-2 min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-auto">
              {/* Desktop back button */}
              <div className="absolute top-4 right-4 hidden lg:block">
                <Button
                  onClick={() => router.back()}
                  icon={<MdCancel />}
                  size="middle"
                  shape="circle"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
                />
              </div>

              {/* Image Container */}
              <div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <Image
                  src={IMAGE_CONSTANTS.signInImage}
                  alt="Decorative illustration for login"
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] mx-auto"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}