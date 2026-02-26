'use client'
import React from 'react'
import { Collapse, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Minus, Plus } from 'lucide-react';


const { Panel } = Collapse;
const { Title } = Typography;

// Dummy FAQ data
const faqData = [
    {
        id: '1',
        question: 'What services do you offer?',
        answer: 'We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.'
    },
    {
        id: '2',
        question: 'How can I get started with a project?',
        answer: 'Getting started is easy! Simply contact us through our contact form or email, and our team will schedule a consultation to discuss your project requirements in detail.'
    },
    {
        id: '3',
        question: 'What is your pricing structure?',
        answer: 'Our pricing varies depending on the scope and complexity of the project. We provide custom quotes after understanding your specific requirements and goals.'
    },
    {
        id: '4',
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on the scope. A simple website might take 4-6 weeks, while more complex applications could take several months. We provide a detailed timeline during our initial consultation.'
    },
    {
        id: '5',
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch.'
    }
];
function AxpendFaq() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Title level={2} className="text-[#022C22] mb-8">Frequently Asked Questions</Title>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => !isActive ? <Plus /> : <Minus />}
                expandIconPlacement="end"
                className="bg-white"
            >
                {faqData.map((item) => (
                    <Panel
                        header={item.question}
                        key={item.id}
                        className="text-lg font-medium mb-2 bg-gray-50 rounded-md"
                    >
                        <p className="text-gray-600 pl-6">{item.answer}</p>
                    </Panel>
                ))}
            </Collapse>
        </div>
    )
}

export default AxpendFaq