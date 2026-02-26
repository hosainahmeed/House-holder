import React from 'react'
import PageTopBanner from '@/components/common/PageTopBanner'
import Image from 'next/image'
import { IMAGE_CONSTANTS } from '@/assets/images/image.index'
import { Metadata } from 'next';
import { Typography } from '@/components/typography/typoGraphy';
import { Card } from 'antd';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: "About Us",
    description: "Our mission is to simplify job management, ensure secure payments, and help independent cleaners grow their business with confidence."
};

function Page() {
    const t = useTranslations('AboutUs');

    const data = [
        {
            icon: IMAGE_CONSTANTS.target,
            title: t('missionTitle'),
            description: t('missionDescription')
        },
        {
            icon: IMAGE_CONSTANTS.eye,
            title: t('visionTitle'),
            description: t('visionDescription')
        },
        {
            icon: IMAGE_CONSTANTS.diamond,
            title: t('valuesTitle'),
            description: t('valuesDescription')
        }
    ]
    return (
        <div>
            <PageTopBanner title={t('title')} description={t('description')} />
            <section className="py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        <div className="flex-1 w-full">
                            <div className="relative max-w-lg mx-auto lg:max-w-none">
                                <Image
                                    src={IMAGE_CONSTANTS.aboutUsImage.src}
                                    alt="About IGNITE Foundation"
                                    width={IMAGE_CONSTANTS.aboutUsImage.width}
                                    height={IMAGE_CONSTANTS.aboutUsImage.height}
                                    priority
                                    className="w-full h-auto transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                />

                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block animate-pulse"></div>
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full -z-10 hidden md:block animate-pulse"></div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="max-w-lg mx-auto lg:max-w-none space-y-5 md:space-y-6">
                                <span className="inline-block text-black font-semibold text-sm md:text-base uppercase tracking-wide">
                                    {t('subtitle')}
                                </span>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    {t('heading')}
                                </h1>

                                <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                                    <p>
                                        {t('intro1')}
                                    </p>

                                    <p>
                                        {t('intro2')}
                                    </p>

                                    <div className="space-y-2">
                                        <p>
                                            {t('intro3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center gap-4">
                <Typography variant="h2" className='text-black text-center'>{t('sectionTitle')}</Typography>
                <Typography variant="body" className='text-black max-w-5xl md:px-12 mb-6 text-center'>{t('sectionDescription')}</Typography>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    data?.map((item) => (
                        <Card key={item.title}>
                            <div className="flex flex-col items-center gap-4">
                                <Image src={item.icon} alt="About_Us_Icons" width={50} height={50} />
                                <Typography variant="h3" className='text-black text-center font-semibold'>{item.title}</Typography>
                                <Typography variant="body" className='text-[#64748B] text-center'>{item.description}</Typography>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Page