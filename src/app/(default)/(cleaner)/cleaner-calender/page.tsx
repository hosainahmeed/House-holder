'use client'

import React, { useMemo, useState } from 'react'
import { Empty } from 'antd'
import WorkDetails from '@/components/cleaner-related/WorkDetails'
import MonthSelector from '@/components/cleaner-related/MonthSelector'
import { cn } from '@/app/lib/utils'
import BackButton from '@/components/ui/BackButton'

export type Work = {
    date: string
    location: string
    img: string
}

export type MonthData = {
    month: string
    numberOfWork: number
    workDetails: Work[]
}

const data: MonthData[] = [
    {
        month: 'January',
        numberOfWork: 3,
        workDetails: [
            {
                date: '2024-01-01',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },
            {
                date: '2024-01-02',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },
            {
                date: '2024-01-03',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },

        ]
    },
    {
        month: 'February',
        numberOfWork: 2,
        workDetails: [
            {
                date: '2024-02-01',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },
            {
                date: '2024-02-02',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },

        ]
    },
    {
        month: 'March',
        numberOfWork: 0,
        workDetails: []
    },
    {
        month: 'April',
        numberOfWork: 2,
        workDetails: [
            {
                date: '2024-04-01',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },
            {
                date: '2024-04-02',
                location: 'Dhaka',
                img: 'https://placehold.co/600x400',
            },

        ]
    },
    {
        month: 'May',
        numberOfWork: 0,
        workDetails: []
    },
    {
        month: 'June',
        numberOfWork: 2,
        workDetails: [
            { date: '2024-06-10', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-06-15', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'July',
        numberOfWork: 3,
        workDetails: [
            { date: '2024-07-05', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-07-12', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-07-20', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'August',
        numberOfWork: 2,
        workDetails: [
            { date: '2024-08-08', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-08-25', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'September',
        numberOfWork: 4,
        workDetails: [
            { date: '2024-09-02', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-09-10', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-09-18', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-09-28', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'October',
        numberOfWork: 3,
        workDetails: [
            { date: '2024-10-05', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-10-15', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-10-25', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'November',
        numberOfWork: 2,
        workDetails: [
            { date: '2024-11-11', location: 'Dhaka', img: 'https://placehold.co/600x400' },
            { date: '2024-11-20', location: 'Dhaka', img: 'https://placehold.co/600x400' },
        ]
    },
    {
        month: 'December',
        numberOfWork: 0,
        workDetails: []
    }
]

export default function Page() {
    const [selectedMonth, setSelectedMonth] = useState<MonthData | null>(data[0])
    const [selectedWork, setSelectedWork] = useState<Work | null>(null)

    const worksByMonth = useMemo(() => selectedMonth?.workDetails ?? [], [selectedMonth])

    return (
        <div className="container min-h-screen mx-auto py-10 space-y-10">
            <BackButton title="Cleaner Calendar" className='mb-4 text-[#2DBEFF]' />
            {/* MONTH SELECTOR */}
            <MonthSelector
                data={data}
                selectedMonth={selectedMonth}
                onSelect={(month) => {
                    setSelectedMonth(month)
                    setSelectedWork(null)
                }}
            />

            {/* CONTENT AREA */}
            <div className="grid grid-cols-12 gap-6">
                {/* DATE LIST */}
                {/* you can add this max-h-[calc(100vh-25rem)] overflow-y-auto */}
                <div className="col-span-12 overflow-hidden md:col-span-4  bg-white rounded-xl border border-gray-200 ">
                    <h2 className="font-semibold text-lg sticky top-0 p-4 z-10 bg-gray-100">Work Dates <small className="text-gray-500">({worksByMonth.length ? "please select a date" : "No works date found"})</small> </h2>
                    <div>
                        {worksByMonth.length ? (
                            <ul className="divide-y divide-gray-200">
                                {worksByMonth.map((work) => (
                                    <li
                                        key={work.date}
                                        onClick={() => {
                                            setSelectedWork(work)
                                            document.getElementById('work-details')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                        }}
                                        className={cn("px-4 py-2 cursor-pointer transition",
                                            selectedWork?.date === work.date ?
                                                'bg-[#2DBEFF] text-white' : 'hover:bg-gray-100')}
                                    >
                                        <p className="font-medium">{work.date}</p>
                                        <p className="text-sm opacity-80">{work.location}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Empty description="No works found" />
                        )}
                    </div>
                </div>

                {/* WORK DETAILS */}
                <div id="work-details" className="col-span-12 md:col-span-8 bg-white rounded-xl border border-gray-200 p-6">
                    {selectedWork ? (
                        <WorkDetails work={selectedWork} />
                    ) : (
                        <Empty description="Select a date to see details" />
                    )}
                </div>
            </div>
        </div>
    )
}
