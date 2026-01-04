'use client';
import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';


function ContactForm() {
    const [form] = Form.useForm();
    // const [submitContact, { isLoading }] = useContactSubmitMutation()
    const handleSubmit = async (values: any) => {
        try {
            const data = {
                name: values?.fullName,
                email: values?.email,
                message: values?.description
            }
            console.log(data)
            // const response = await submitContact(data).unwrap()
            // if (!response?.success) {
            //     throw new Error(response?.message || '')
            // }
            // toast.success(response?.message)
            // form.resetFields()
        } catch (error: any) {
            // toast.error(error?.data?.message || error?.message || 'Something went wrong!')
            form.resetFields()
        }
    };
    return (
        <div>
            <div className="grid gap-4">
                <Form requiredMark={false} layout='vertical' onFinish={handleSubmit} form={form}>
                    <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Full Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Email"
                        />
                    </Form.Item>
                    {/* <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Phone"
                        />
                    </Form.Item> */}
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <TextArea
                            size='large'
                            placeholder="Description"
                            rows={4}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
}

export default ContactForm;