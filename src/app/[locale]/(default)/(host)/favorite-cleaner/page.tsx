'use client'
import BackButton from '@/components/ui/BackButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

    const data = [
        {
            _id: 1,
            profile_img: 'https://placehold.co/600x400',
            name: 'John Doe',
            location: 'Dhaka',
            email: 'john@example.com',
            phone: '123-456-7890',

        },
        {
            _id: 2,
            profile_img: 'https://placehold.co/600x400',
            name: 'Jane Smith',
            location: 'Dhaka',
            email: 'jane@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 3,
            profile_img: 'https://placehold.co/600x400',
            name: 'Michael Johnson',
            location: 'Dhaka',
            email: 'michael@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 4,
            profile_img: 'https://placehold.co/600x400',
            name: 'Emma Williams',
            location: 'Dhaka',
            email: 'emma@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 5,
            profile_img: 'https://placehold.co/600x400',
            name: 'Olivia Davis',
            location: 'Dhaka',
            email: 'olivia@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 6,
            profile_img: 'https://placehold.co/600x400',
            name: 'Sophia Lee',
            location: 'Dhaka',
            email: 'sophia@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 7,
            profile_img: 'https://placehold.co/600x400',
            name: 'Mason Thompson',
            location: 'Dhaka',
            email: 'mason@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 8,
            profile_img: 'https://placehold.co/600x400',
            name: 'Ava Henderson',
            location: 'Dhaka',
            email: 'ava@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 9,
            profile_img: 'https://placehold.co/600x400',
            name: 'Noah Taylor',
            location: 'Dhaka',
            email: 'noah@example.com',
            phone: '123-456-7890',
        },
        {
            _id: 10,
            profile_img: 'https://placehold.co/600x400',
            name: 'Ethan Walker',
            location: 'Dhaka',
            email: 'ethan@example.com',
            phone: '123-456-7890',
        },

    ]
    return (
        <div className='container mx-auto'>
            <BackButton title='Favorite cleaner' className='mb-4 text-[#2DBEFF]' />
            <div className="grid grid-cols-1 gap-4">
                {
                    data?.map((item: any, index: number) => (
                        <Card key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default page

const Card = ({ item }: any) => {
    const router = useRouter();
    return (
        <div className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
            <div className='flex items-center justify-between gap-4'>
                <div className="flex items-center gap-2">
                    <Image src={item.profile_img} alt='placeholder' width={150} height={150} className='w-15 rounded-full h-15 object-cover' />
                    <div>
                        <h1 className='font-medium text-lg'>{item.name}</h1>
                        <p className='text-gray-500'>{item.location}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => router.push(`/cleaner-profile/${item._id}`)}
                        className='bg-[#2DBEFF] cursor-pointer text-white px-4 py-2 rounded-md'>View Profile</button>
                </div>
            </div>
        </div>
    )
}