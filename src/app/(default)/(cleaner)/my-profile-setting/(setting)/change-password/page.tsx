'use client'
import BackButton from '@/components/ui/BackButton'
import { Form, Input, Button, message } from 'antd'
import { useState } from 'react'
import { LockOutlined, EyeInvisibleOutlined, EyeTwoTone, SafetyOutlined } from '@ant-design/icons'

function Page() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values: any) => {
        setLoading(true)

        // Simulate API call
        setTimeout(() => {
            console.log('Password change values:', {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
            })
            message.success('Password changed successfully!')
            form.resetFields()
            setLoading(false)
        }, 1500)
    }

    const validatePassword = (_: any, value: string) => {
        if (!value) {
            return Promise.reject(new Error('Please enter a password'))
        }
        if (value.length < 8) {
            return Promise.reject(new Error('Password must be at least 8 characters'))
        }
        if (!/(?=.*[a-z])/.test(value)) {
            return Promise.reject(new Error('Password must contain at least one lowercase letter'))
        }
        if (!/(?=.*[A-Z])/.test(value)) {
            return Promise.reject(new Error('Password must contain at least one uppercase letter'))
        }
        if (!/(?=.*\d)/.test(value)) {
            return Promise.reject(new Error('Password must contain at least one number'))
        }
        return Promise.resolve()
    }

    return (
        <div className='container mx-auto'>
            <BackButton title='Update Your Password' className='mb-6 text-[#2DBEFF]' />

            {/* Header Section */}
            <div className='mb-6'>
                <p className='text-gray-500 text-sm'>
                    Please enter your current password and choose a new secure password
                </p>
            </div>

            {/* Password Change Form Card */}
            <div className="shadow-lg rounded-2xl p-8 border border-gray-200 bg-white">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                >
                    {/* Old Password */}
                    <Form.Item
                        label={<span className='font-medium text-base'>Current Password</span>}
                        name="oldPassword"
                        rules={[
                            { required: true, message: 'Please enter your current password' }
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

                    {/* New Password */}
                    <Form.Item
                        label={<span className='font-medium text-base'>New Password</span>}
                        name="newPassword"
                        rules={[
                            { validator: validatePassword }
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined className='text-gray-400' />}
                            placeholder="Enter your new password"
                            size="large"
                            className="rounded-lg"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>

                    {/* Confirm Password */}
                    <Form.Item
                        label={<span className='font-medium text-base'>Confirm New Password</span>}
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your new password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'))
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className='text-gray-400' />}
                            placeholder="Re-enter your new password"
                            size="large"
                            className="rounded-lg"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            className="flex-1 rounded-lg h-11 bg-[#2DBEFF]!"
                        >
                            Update Password
                        </Button>
                    </div>
                </Form>
            </div>

            {/* Password Requirements Info */}
            <div className='mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl'>
                <h3 className='font-semibold text-blue-900 mb-3 flex items-center gap-2'>
                    <SafetyOutlined /> Password Requirements
                </h3>
                <ul className='text-sm text-blue-800 space-y-2'>
                    <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-0.5'>•</span>
                        <span>At least 8 characters long</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-0.5'>•</span>
                        <span>Contains at least one uppercase letter (A-Z)</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-0.5'>•</span>
                        <span>Contains at least one lowercase letter (a-z)</span>
                    </li>
                    <li className='flex items-start gap-2'>
                        <span className='text-blue-600 mt-0.5'>•</span>
                        <span>Contains at least one number (0-9)</span>
                    </li>
                </ul>
            </div>

            {/* Security Tip */}
            <div className='mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl'>
                <p className='text-sm text-yellow-800'>
                    <strong>💡 Security Tip:</strong> Use a unique password that you don't use on any other website.
                    Consider using a password manager to generate and store strong passwords.
                </p>
            </div>
        </div>
    )
}

export default Page