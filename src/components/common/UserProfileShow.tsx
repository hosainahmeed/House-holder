import { ICONS } from '@/assets/icons/index.icons'
import Image from 'next/image'
import React from 'react'

function UserProfileShow({ name, profile_image, address }: { name: string, profile_image: string, address: string }) {

    return (
        <div className='flex items-center gap-2'>
            <div className="relative w-12 h-12">
                <Image src={profile_image} alt={name} width={50} height={50} className='w-full h-full border-2 border-gray-400 shadow-sm overflow-hidden rounded-full' />
                <div className="absolute bottom-0 w-4 h-4 right-0">
                    <Image src={ICONS.valid} alt={name} width={20} height={20} className='w-full h-full' />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h2 className='text-sm font-medium'>{name}</h2>
                <p className='text-xs text-gray-500'>{address}</p>
            </div>
        </div>
    )
}

export default UserProfileShow