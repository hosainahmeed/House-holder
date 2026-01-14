'use client'
import CardSkeleton from '@/components/cards/CardSkeleton';
import PropertyCard from '@/components/cards/PropertyCard';
import { Button } from 'antd';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 500);
    }, [])
    
    const propertyData = [{
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        date: "Vendredi 15th December",
        title: "Francisco",
        area: "20-500 m²",
        beds: "2 Bed",
        bedrooms: "2 Bedroom",
        bathrooms: "2 Bathroom",
        time: "10:00-16:00",
        visitDate: "Vendredi 15th December",
        location: "e.g. B. Berlin or Peak Fit...",
        price: "50,25 €"
    },
    {
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        date: "Vendredi 15th December",
        title: "Francisco",
        area: "20-500 m²",
        beds: "2 Bed",
        bedrooms: "2 Bedroom",
        bathrooms: "2 Bathroom",
        time: "10:00-16:00",
        visitDate: "Vendredi 15th December",
        location: "e.g. B. Berlin or Peak Fit...",
        price: "50,25 €"
    }
    ];

    return (
        <div className="min-h-screen container mx-auto">
            <h1 className='text-2xl font-bold text-[#2DBEFF]'>My Properties</h1>
            <div className="my-3 justify-end flex gap-2">
                <Link href='/create_cleaning_request'>
                    <Button type='default'>Create Cleaning Request</Button>
                </Link>
                <Link href='/properties/add-property'>
                    <Button type='primary' style={{ backgroundColor: '#2DBEFF' }} icon={<Plus size={16} />}>Add Properties</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    !loading ? Array.from({ length: 3 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    )) : propertyData.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))
                }
            </div>
        </div>
    );
}

export default page