'use client'
import React, { useState } from 'react';
import { Card, Avatar, Rate, Button } from 'antd';
import {  UserOutlined } from '@ant-design/icons';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
}

const AllReviewsPage: React.FC = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Grace Carey',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      date: '1 Month Ago',
      review: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. If truly was in excellent condition. Highly recommend! 🖤"
    },
    {
      id: 2,
      name: 'Grace Carey',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 4,
      date: '1 Month Ago',
      review: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. If truly was in excellent condition. Highly recommend! 🖤"
    },
    {
      id: 3,
      name: 'Grace Carey',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      date: '1 Month Ago',
      review: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. If truly was in excellent condition. Highly recommend! 🖤"
    },
    {
      id: 4,
      name: 'Grace Carey',
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      date: '1 Month Ago',
      review: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. If truly was in excellent condition. Highly recommend! 🖤"
    },
    {
      id: 5,
      name: 'Grace Carey',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      date: '1 Month Ago',
      review: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. If truly was in excellent condition. Highly recommend! 🖤"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            All Review
          </h1>
        </div>

        {/* Reviews List */}
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-4 sm:p-6">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <Avatar 
                      size={48}
                      src={review.avatar}
                      icon={<UserOutlined />}
                      className="shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {review.name}
                      </h3>
                      <Rate 
                        disabled 
                        defaultValue={review.rating} 
                        className="text-sm sm:text-base"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="mt-3">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {review.review}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <Button 
            size="large"
            className="px-8 h-10 sm:h-12"
          >
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllReviewsPage;