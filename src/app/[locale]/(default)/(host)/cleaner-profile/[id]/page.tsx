
'use client'
import { ICONS } from '@/assets/icons/index.icons';
import BackButton from '@/components/ui/BackButton'
import { Divider, Rate } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const cleanerData = {
    _id: 1,
    name: 'Rushna',
    location: 'Amoey, France',
    avatar: 'https://i.pravatar.cc/150?img=33',
    verified: true,
    menages: 30,
    evaluation: 16,
    overallScore: 4.94,
    description: "I'm after 2 palettes that are sold out online but available from 2 specific stores. They need to be sent out to you in the US and then forwarded to me in Sydney in 1 package for convenience. For more information please direct message me! hadi!",
    feedbacks: [
        {
            id: 1,
            name: 'Grace Carey',
            avatar: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            comment: "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical SIM tray anymore, but couldn't have been easier! I bought an unlocked blact iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend! ❤️",
            date: '2023-06-15'
        },
        {
            id: 2,
            name: 'John Smith',
            avatar: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            comment: "Excellent service! Very professional and thorough. Would definitely recommend to anyone looking for quality cleaning services.",
            date: '2023-06-15'
        },
        {
            id: 3,
            name: 'Sarah Johnson',
            avatar: 'https://i.pravatar.cc/150?img=45',
            rating: 4,
            comment: "Great work overall. Very punctual and attentive to details. Will hire again!",
            date: '2023-06-15'
        }
    ]
};

function page() {
    const router = useRouter();

    return (
        <div className='container mx-auto'>
            <BackButton title='Cleaner Profile Details' className='mb-4 text-[#2DBEFF]' />
            <div className="mt-2 flex items-center gap-2">
                <div className="relative w-24 h-24">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image src='https://placehold.co/400' alt='placeholder' width={150} height={150} className='w-full h-full object-cover' />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center">
                        <Image src={ICONS.valid} alt='placeholder' width={150} height={150} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div>
                    <h1 className='font-medium text-lg'>{cleanerData.name}</h1>
                    <p className='text-gray-500'>{cleanerData.location}</p>
                </div>
            </div>
            {
                Object.keys(cleanerData).length > 0 && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                            <p className='text-gray-500'>Menages</p>
                            <h1 className='font-medium text-lg'>{cleanerData.menages}</h1>
                        </div>
                        <div className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                            <p className='text-gray-500'>Evaluation</p>
                            <h1>{cleanerData.evaluation}</h1>
                        </div>
                        <div className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                            <p className='text-gray-500'>Overall Score</p>
                            <h1>{cleanerData.overallScore}</h1>
                        </div>
                    </div>
                )
            }
            <Divider />
            <div className="mt-2">
                <h1 className='font-medium text-lg'>Description</h1>
                <p>{cleanerData.description}</p>
            </div>
            <div className="flex items-center gap-2 justify-end">
                <button
                    onClick={() =>alert('Are you sure you want to block this cleaner?')}
                    className='bg-[#2DBEFF] cursor-pointer text-white px-4 py-2 rounded-md'>Block</button>
                <button
                    onClick={() =>alert('Are you sure you want to delete this cleaner?')}
                    className='border-[#2DBEFF] border cursor-pointer text-[#2DBEFF] px-4 py-2 rounded-md'>Delete</button>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <h1 className='font-medium text-lg'>Feedback</h1>
                <button
                    onClick={() => router.push(`/cleaner-profile/${cleanerData._id}/feedback`)}
                    className='text-[#2DBEFF] underline cursor-pointer'>See all</button>
            </div>
            <Divider />
            <div className="space-y-3">
                {
                    cleanerData?.feedbacks?.slice(0, 1)?.map((item: any, index: number) => (
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

