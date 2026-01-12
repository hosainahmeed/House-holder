import Image from 'next/image'
import React from 'react'

function CardSkeleton() {
  return (
    <div>
        <Image src="https://placehold.co/600x400?text=Property+Image" alt="Property+Image" width={800} height={600} className='w-full h-auto animate-pulse object-cover'  />
        <div className=''>
            <div className='w-full h-6 mt-3 bg-gray-300 rounded animate-pulse' />
            <div className='w-full h-6 mt-3 bg-gray-300 rounded animate-pulse' />
            <div className=" mt-3 flex gap-2">
                <div className='w-full h-6 bg-gray-300 rounded animate-pulse' />
                <div className='w-full h-6 bg-gray-300 rounded animate-pulse' />
                <div className='w-full h-6 bg-gray-300 rounded animate-pulse' />
            </div>
        </div>
    </div>
  )
}

export default CardSkeleton