import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const UpdateProfileForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<any>([]);

  // Initial values matching your data
  const initialValues = {
    fullName: 'Hridoy hosaain',
    email: 'esteban_schiller@gmail.com',
    age: '20',
    address: 'Street, house number',
    city: 'Berlin',
    country: 'France',
    siretNumber: '5251521326'
  };

  const handleSubmit = (values: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Updated values:', values);
      message.success('Profile updated successfully!');
      setLoading(false);
    }, 1500);
  };

  const uploadProps = {
    fileList,
    beforeUpload: (file: any) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('You can only upload image files!');
        return false;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error('Image must be smaller than 5MB!');
        return false;
      }
      setFileList([file]);
      return false;
    },
    onRemove: () => {
      setFileList([]);
    },
    maxCount: 1
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Update Profile</h2>
      
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSubmit}
      >
        {/* Profile Picture Upload */}
        <Form.Item
          label="Profile Picture"
          className="mb-4"
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>

        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            { required: true, message: 'Please enter your full name' },
            { min: 2, message: 'Name must be at least 2 characters' }
          ]}
        >
          <Input 
            placeholder="Enter your full name" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* Age */}
        <Form.Item
          label="Age"
          name="age"
          rules={[
            { required: true, message: 'Please enter your age' },
            { pattern: /^[0-9]+$/, message: 'Age must be a number' }
          ]}
        >
          <Input 
            placeholder="Enter your age" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* Address */}
        <Form.Item
          label="Address"
          name="address"
          rules={[
            { required: true, message: 'Please enter your address' }
          ]}
        >
          <Input 
            placeholder="Street, house number" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* City */}
        <Form.Item
          label="City"
          name="city"
          rules={[
            { required: true, message: 'Please enter your city' }
          ]}
        >
          <Input 
            placeholder="Enter your city" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* Country */}
        <Form.Item
          label="Country"
          name="country"
          rules={[
            { required: true, message: 'Please enter your country' }
          ]}
        >
          <Input 
            placeholder="Enter your country" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* SIRET Number */}
        <Form.Item
          label="Verification Your SIRET Number"
          name="siretNumber"
          rules={[
            { required: true, message: 'Please enter your SIRET number' },
            { pattern: /^[0-9]{10,14}$/, message: 'SIRET number must be 10-14 digits' }
          ]}
        >
          <Input 
            placeholder="Enter your SIRET number" 
            className="rounded-lg"
            size="large"
          />
        </Form.Item>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <Button 
            type="primary" 
            htmlType="submit"
            size="large"
            loading={loading}
            className="flex-1 rounded-lg h-11 bg-[#2DBEFF]!"
          >
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfileForm;