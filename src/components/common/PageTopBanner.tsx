
import Image from 'next/image'
import React from 'react'
import TypographyDescription, { TypographyHeading } from './Typography';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';

function PageTopBanner({ title, description }: { title: string; description: string }) {
    return (
        <section className="bg-[#EEF5FE]">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between py-4 md:py-12 items-center gap-8">
                <div className="flex flex-col py-12 lg:py-0 justify-center md:text-left space-y-4">
                    <TypographyHeading text={title} className='text-[#1B7299]' />
                    <TypographyDescription text={description} className='text-[#64748B]' />
                </div>

                <div className="hidden lg:block">
                    <Image
                        src={IMAGE_CONSTANTS.bookImage}
                        alt="Page Top Banner"
                        priority
                        width={200}
                        height={200}
                        className="object-contain object-bottom"
                    />
                </div>
            </div>
        </section>
    )
}

export default PageTopBanner
