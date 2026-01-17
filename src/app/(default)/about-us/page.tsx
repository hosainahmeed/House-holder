import React from 'react'
import PageTopBanner from '@/components/common/PageTopBanner'
import Image from 'next/image'
import { IMAGE_CONSTANTS } from '@/assets/images/image.index'
import { Metadata } from 'next';
import { Typography } from '@/components/typography/typoGraphy';
import { Card } from 'antd';

export const metadata: Metadata = {
    title: "About Us",
    description: "Our mission is to simplify job management, ensure secure payments, and help independent cleaners grow their business with confidence."
};


function page() {

    const data = [
        {
            icon: IMAGE_CONSTANTS.target,
            title: "Our Mission",
            description: "Our mission is to connect professional cleaners with verified hosts through a simple, secure, and transparent platform. We aim to make job management effortless, ensure fair payments, and build trust on every completed service."
        },
        {
            icon: IMAGE_CONSTANTS.eye,
            title: "Our Vision",
            description: "Our vision is to become a leading platform for on-demand cleaning services, empowering independent cleaners to grow their business while providing hosts with reliable, high-quality cleaning solutions worldwide."
        },
        {
            icon: IMAGE_CONSTANTS.diamond,
            title: "Our Values",
            description: "We believe in trust, transparency, and professionalism. We value fair work, secure payments, clear communication, and mutual respect between cleaners and hosts, ensuring a positive experience for everyone on our platform."
        }
    ]
    return (
        <div>
            <PageTopBanner title="About Us" description="Our mission is to simplify job management, ensure secure payments, and help independent cleaners grow their business with confidence." />
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
                                    Simplifying Classroom Management for Every CR
                                </span>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    When classes stay connected, learning becomes stronger.
                                </h1>

                                <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                                    <p>
                                        OUR CR is a smart, web-based platform built to make every Class Representative’s job easier.
                                        From managing student lists and class schedules to posting announcements, assignments, and handling student issues — OUR CR brings everything together in one simple dashboard.
                                    </p>

                                    <p>
                                        We started with one clear goal: to make communication between CRs and students fast, transparent, and organized.
                                        No more missing notices, confusing class times, or scattered updates — OUR CR keeps your academic world connected, one click at a time.
                                    </p>

                                    <div className="space-y-2">
                                        <p>
                                            OUR CR is a smart, web-based platform built to make every Class Representative’s job easier.
                                            From managing student lists and class schedules to posting announcements, assignments, and handling student issues — OUR CR brings everything together in one simple dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center gap-4">
                <Typography variant="h2" className='text-black text-center'>Mission, Vision & Values</Typography>
                <Typography variant="body" className='text-black max-w-5xl md:px-12 mb-6 text-center'>Our mission is to connect professional cleaners with verified hosts through a simple, secure, and transparent platform.</Typography>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    data?.map((item) => (
                        <Card>
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

export default page