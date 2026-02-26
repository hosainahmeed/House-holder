'use client'
import { Divider, Rate } from 'antd'
import React from 'react'
import { cleanerData } from '../page'
import Image from 'next/image'
import BackButton from '@/components/ui/BackButton'

function page() {
  return (
    <div className='container mx-auto'>
      <BackButton title='All Feedback' className='mb-4 text-[#2DBEFF]' />
      <Divider />
      <div className="space-y-3">
        {
          cleanerData?.feedbacks?.map((item: any, index: number) => (
            <div key={index} className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
              <div className='flex justify-between'>
                <div className="flex items-center gap-2">
                  <Image src={item.avatar} alt='placeholder' width={150} height={150} className='w-15 rounded-full h-15 object-cover' />
                  <div className="flex items-start flex-col">
                    <h1 className='font-medium text-lg'>{item.name}</h1>
                    <Rate count={item?.rating} disabled style={{ color: 'gold' }} defaultValue={item?.rating} />
                  </div>
                </div>
                <div className="">
                  <p className='text-gray-500'>{item.date}</p>
                </div>
              </div>
              <p>{item.comment}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page