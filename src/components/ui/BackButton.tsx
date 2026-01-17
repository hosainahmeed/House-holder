'use client'
import { cn } from '@/lib/utils'
import { ICONS } from '@/assets/icons/index.icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = ({ title, className }: { title: string , className?: string}) => {
    const router = useRouter()
    return (
        <div
            onClick={() => router.back()}
            className={cn('flex items-center mt-2 gap-2 w-fit hover:underline cursor-pointer', className)}>
            <Image src={ICONS.backIcons.src} alt='back' width={32} height={32} />
            <span className='text-xl sm:text-2xl md:text-3xl font-bold'>{title}</span>
        </div>
    )
}

export default BackButton