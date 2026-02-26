'use client'
import CardSkeleton from '@/components/cards/CardSkeleton';
import PropertyCard from '@/components/cards/PropertyCard';
import { Button, ConfigProvider, Segmented } from 'antd';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {
    const t = useTranslations("Common")
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 500);
    }, [])

    const propertyData = [{
        id: "1",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        date: "Vendredi 15th December",
        title: "Francisco",
        area: "20-500",
        beds: "2",
        bedrooms: "2",
        bathrooms: "2",
        time: "10:00-16:00",
        visitDate: "Vendredi 15th December",
        location: "e.g. B. Berlin or Peak Fit...",
        price: "50,25 €"
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        date: "Vendredi 15th December",
        title: "Francisco",
        area: "20-500",
        beds: "2",
        bedrooms: "2",
        bathrooms: "2",
        time: "10:00-16:00",
        visitDate: "Vendredi 15th December",
        location: "e.g. B. Berlin or Peak Fit...",
        price: "50,25 €"
    }
    ];

    return (
        <div className="min-h-screen container mx-auto px-1">
            <div className="flex justify-between mb-6 flex-col md:flex-row items-start md:items-center">
                <h1 className='text-2xl font-bold text-[#2DBEFF]'>{t("my_propertie")}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    !loading ? Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    )) : propertyData.map((property, index) => (
                        <PropertyCard key={index} {...property} onclick={() => console.log("Property clicked")} />
                    ))
                }
            </div>
        </div>
    );
}

export default page