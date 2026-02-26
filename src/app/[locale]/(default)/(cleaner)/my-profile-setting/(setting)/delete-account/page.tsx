'use client'
import BackButton from '@/components/ui/BackButton'
import { Form, Input, Button, message, Modal, Checkbox } from 'antd'
import { useState } from 'react'
import {
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
  DeleteOutlined,
  WarningOutlined
} from '@ant-design/icons'

function Page() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [confirmationChecked, setConfirmationChecked] = useState(false)

  const handleSubmit = (values: any) => {
    setIsModalVisible(true)
  }

  const handleConfirmDelete = () => {
    setLoading(true)

    // Simulate API call for account deletion
    setTimeout(() => {
      message.success('Your account has been successfully deleted')
      setIsModalVisible(false)
      setLoading(false)
      form.resetFields()
      setConfirmationChecked(false)

      // In real app, redirect to login or home page
      // router.push('/login')
    }, 2000)
  }

  const handleCancelDelete = () => {
    setIsModalVisible(false)
    setConfirmationChecked(false)
  }

  return (
    <div className='container mx-auto'>
      <BackButton title='Delete Account' className='mb-6 text-[#2DBEFF]' />

      {/* Header Section */}
      <div className='mb-6'>
        <p className='text-gray-600 text-sm'>
          We're sorry to see you go. Please read the information below carefully.
        </p>
      </div>

      {/* Warning Card */}
      <div className='mb-6 p-5 bg-red-50 border-2 border-red-300 rounded-xl'>
        <div className='flex items-start gap-3'>
          <WarningOutlined className='text-red-600 text-xl mt-1' />
          <div>
            <h3 className='font-semibold text-red-900 mb-2'>
              Warning: This action is permanent and cannot be undone!
            </h3>
            <p className='text-sm text-red-800'>
              Once you delete your account, all your data will be permanently removed from our servers.
            </p>
          </div>
        </div>
      </div>

      {/* What Will Be Deleted Section */}
      <div className='mb-6 p-5 bg-gray-50 border border-gray-300 rounded-xl'>
        <h3 className='font-semibold text-gray-900 mb-3'>
          What will be deleted:
        </h3>
        <ul className='text-sm text-gray-700 space-y-2'>
          <li className='flex items-start gap-2'>
            <span className='text-red-600 mt-0.5'>✗</span>
            <span>Your profile information and personal data</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-red-600 mt-0.5'>✗</span>
            <span>All your saved preferences and settings</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-red-600 mt-0.5'>✗</span>
            <span>Your account history and activity</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-red-600 mt-0.5'>✗</span>
            <span>Access to all services associated with this account</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-red-600 mt-0.5'>✗</span>
            <span>Any uploaded files and documents</span>
          </li>
        </ul>
      </div>

      {/* Delete Account Form Card */}
      <div className="shadow-lg rounded-2xl p-8 border border-gray-200 bg-white">
        <div className='mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-2'>
            Confirm Account Deletion
          </h2>
          <p className='text-sm text-gray-600'>
            To proceed with deleting your account, please enter your current password below.
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          {/* Password Field */}
          <Form.Item
            label={<span className='font-medium text-base'>Current Password</span>}
            name="password"
            rules={[
              { required: true, message: 'Please enter your password to confirm deletion' },
              { min: 6, message: 'Password must be at least 6 characters' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='text-gray-400' />}
              placeholder="Enter your current password"
              size="large"
              className="rounded-lg"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          {/* Confirmation Checkbox */}
          <Form.Item
            name="confirmation"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('You must confirm to proceed')),
              },
            ]}
          >
            <Checkbox className='text-sm'>
              I understand that deleting my account is permanent and all my data will be lost forever
            </Checkbox>
          </Form.Item>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              danger
              type="primary"
              htmlType="submit"
              size="large"
              className="flex-1 rounded-lg h-12"
              icon={<DeleteOutlined />}
            >
              Delete Account
            </Button>
          </div>
        </Form>
      </div>

      {/* Alternative Options */}
      <div className='mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl'>
        <h3 className='font-semibold text-blue-900 mb-2'>
          Looking for alternatives?
        </h3>
        <p className='text-sm text-blue-800 mb-3'>
          Before you delete your account, consider these options:
        </p>
        <ul className='text-sm text-blue-800 space-y-1'>
          <li>• Temporarily deactivate your account instead</li>
          <li>• Update your privacy settings</li>
          <li>• Contact our support team if you're having issues</li>
        </ul>
      </div>

      {/* Confirmation Modal */}
      <Modal
        title={
          <div className='flex items-center gap-2 text-red-600'>
            <ExclamationCircleOutlined className='text-2xl' />
            <span className='text-xl font-semibold'>Final Confirmation</span>
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancelDelete}
        footer={null}
        centered
        closable={!loading}
        maskClosable={false}
      >
        <div className='py-4'>
          <p className='text-base text-gray-700 mb-4'>
            Are you absolutely sure you want to delete your account? This action cannot be reversed.
          </p>

          <div className='p-4 bg-red-50 border border-red-200 rounded-lg mb-6'>
            <p className='text-sm text-red-800 font-medium'>
              All your data will be permanently deleted and you will lose access to your account immediately.
            </p>
          </div>

          <Checkbox
            checked={confirmationChecked}
            onChange={(e) => setConfirmationChecked(e.target.checked)}
            className='mb-6'
          >
            <span className='text-sm font-medium'>
              Yes, I want to permanently delete my account and all associated data
            </span>
          </Checkbox>

          <div className='flex gap-3'>
            <Button
              size="large"
              className="flex-1 rounded-lg h-11"
              onClick={handleCancelDelete}
              disabled={loading}
            >
              Keep My Account
            </Button>
            <Button
              danger
              type="primary"
              size="large"
              className="flex-1 rounded-lg h-11"
              onClick={handleConfirmDelete}
              loading={loading}
              disabled={!confirmationChecked}
              icon={<DeleteOutlined />}
            >
              Delete Forever
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Page