import React, { useState } from 'react';
import { Modal, Rate, Button, Form, Input, message } from 'antd';

interface ReviewModalProps {
    visible: boolean;
    onCancel: () => void;
    onSubmit: (rating: number, review: string) => void;
    loading?: boolean;
}

const { TextArea } = Input;

const ReviewModal: React.FC<ReviewModalProps> = ({ visible, onCancel, onSubmit, loading }) => {
    const [form] = Form.useForm();
    const [rating, setRating] = useState<number>(0);

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(rating || 0, values.review);
            form.resetFields();
            setRating(0);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    return (
        <Modal
            title="Leave a Review"
            open={visible}
            maskClosable={false}
            closable={false}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={() => {
                    form.resetFields();
                    setRating(0);
                    onCancel()
                }} style={{ color: 'white', backgroundColor: '#2DBEFF' }}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    onClick={handleSubmit}
                    loading={loading}
                    disabled={!rating}
                    style={{ color: 'white', backgroundColor: '#2DBEFF' }}
                >
                    Submit Review
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="rating"
                    rules={[{ required: true, message: 'Please provide a rating' }]}
                >
                    <Rate
                        value={rating}
                        onChange={(value) => setRating(value)}
                        style={{ fontSize: 24 }}
                    />
                </Form.Item>

                <Form.Item
                    label="How do you feel about this service?"
                    name="review"
                    rules={[
                        { required: true, message: 'Please write your review' },
                        { min: 10, message: 'Review must be at least 10 characters' },
                    ]}
                >
                    <TextArea style={{ backgroundColor: '#fff', color: 'black' }} rows={4} placeholder="Share your experience..." />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ReviewModal;
