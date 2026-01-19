'use client';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { Typography } from '@/components/typography/typoGraphy';
import { Button, Input, Form, Layout, Space, Upload, message } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

const { Content } = Layout;

interface LoginData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage?: UploadFile;
}

export default function RegisterPage() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const role = useSearchParams();

  const t = useTranslations("Auth.register")
  const loginT = useTranslations("Auth.login")

  const handleSubmit = async (values: LoginData) => {
    if (!profileFile) {
      alert('Profile image is required');
      return;
    }

    if (!role.get('role')) {
      alert('Role is required');
      return;
    }

    // const formData = new FormData();
    // formData.append('name', values.name);
    // formData.append('email', values.email);
    // formData.append('password', values.password);
    // formData.append('confirm_password', values.confirmPassword);
    // formData.append('profile_img', profileFile);

    const submitData = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirm_password: values.confirmPassword,
      profile_img: profileFile,
      role: role.get('role'),
    };

    console.log(submitData);
  };


  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!isJpgOrPng) {
      alert('You can only upload JPG/PNG file!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('Image must be smaller than 2MB!');
      return false;
    }
    return false;
  };

  const handleChange: UploadProps['onChange'] = (info) => {
    const file = info?.fileList[0]?.originFileObj as File | undefined;
    if (!file) return;
    setProfileFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };


  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Photo</div>
    </button>
  );

  return (
    <main className="px-4 absolute md:pt-0 pt-28 flex flex-col gap-4 max-w-[1040px] w-full mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Content className="grid lg:grid-cols-2 bg-white md:rounded-2xl w-full md:shadow overflow-hidden">
        <div className="relative hidden lg:flex flex-col items-center justify-center bg-[#DBEBF7] text-white">
          <div className="absolute top-4 left-4 hidden lg:block">
            <Button
              onClick={() => router.replace('/')}
              icon={<MdCancel />}
              size="middle"
              shape="circle"
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            />
          </div>

          <div className="max-w-md mx-auto text-center">
            <Image
              src={IMAGE_CONSTANTS.signUpImage}
              alt="Decorative bird illustration"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-full">
            <Space orientation="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Typography variant='h3' className='text-gray-800'>{t("title")}</Typography>
                <Typography variant='caption' className='text-gray-400'>{t("description")}</Typography>
              </div>

              <Form
                onFinish={handleSubmit}
                layout="vertical"
                style={{ width: '100%' }}
              >
                {/* Profile Image Upload */}
                <Form.Item
                  style={{ marginBottom: 16 }}
                  name="profileImage"
                  rules={[{ required: true, message: <span className='text-center flex items-center justify-center'>Profile image is required</span> }]}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <Upload
                      name="avatar"
                      listType="picture-circle"
                      className="avatar-uploader"
                      showUploadList={false}
                      accept="image/jpeg,image/jpg,image/png"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                      maxCount={1}
                    >
                      {imageUrl ? (
                        <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </div>
                </Form.Item>

                <Form.Item
                  label={t("name")}
                  style={{ marginBottom: 16 }}
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input
                    placeholder={t("name_placeholder")}
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label={loginT("email")}
                  style={{ marginBottom: 16 }}
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email address!' },
                    { type: 'email', message: 'Please enter a valid email address!' }
                  ]}
                >
                  <Input
                    placeholder={loginT("email_placeholder")}
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label={loginT("password")}
                  style={{ marginBottom: 8 }}
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                    { min: 6, message: "Password must be at least 6 characters!" }
                  ]}
                >
                  <Input.Password
                    placeholder={loginT("password_placeholder")}
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label={t("confirmPassword")}
                  style={{ marginBottom: 8 }}
                  name="confirmPassword"
                  rules={[
                    { required: true, message: "Please confirm your password!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder={t("confirm_password_placeholder")}
                    size="large"
                  />
                </Form.Item>
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <Typography variant='h3' style={{ fontSize: '14px' }}>
                    {t("haveAccount")} <Link href="/login" style={{ color: '#0072C3' }}>{loginT("signIn")}</Link>
                  </Typography>
                </div>
                <Button
                  htmlType="submit"
                  size="large"
                  block
                  style={{ backgroundColor: '#0072C3', color: 'white' }}
                >
                  {t("signUp")}
                </Button>

              </Form>
            </Space>
          </div>
        </div>
      </Content>
    </main>
  );
}