'use client'
import { Button, DatePicker, Form, Input } from 'antd'
import React from 'react'

function page() {
    const handleSubmit = (values: any) => {
        console.log('submit', values)
    }
    return (
        <div className='container mx-auto'>
            <Form
                onFinish={handleSubmit}
            >
                <Form.Item name='date'>
                    <DatePicker />
                </Form.Item>

                <Form.Item name='property_name'>
                    <Input placeholder='property name' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>Submit</Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default page