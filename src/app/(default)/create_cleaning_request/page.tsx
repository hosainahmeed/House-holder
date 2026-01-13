'use client'
import { Button, DatePicker, Form, Input, TimePicker } from 'antd'
import React from 'react'

function page() {
    const handleSubmit = (values: any) => {
        console.log('submit', values)
    }
    return (
        <div className='container mx-auto'>
            <Form
                onFinish={handleSubmit}
                layout='vertical'
            >
                <Form.Item name='date' label="Date" >
                    <DatePicker  />
                </Form.Item>
                <Form.Item name='start_time' label='Start Time'>
                    <TimePicker />
                </Form.Item>
                <Form.Item name='end_time' label='End Time'>
                    <TimePicker />
                </Form.Item>
                
                <Form.Item name='end_time' label='How wolud like the bed linens be handled ?'>
                    
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