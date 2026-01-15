'use client';

import {
  Bath,
  Bed,
  Calendar,
  Check,
  Home,
  Maximize2,
  SprayCanIcon,
  WatchIcon,
} from 'lucide-react';
import { GiVacuumCleaner } from 'react-icons/gi';

import BackButton from '@/components/ui/BackButton';
import SectionTitle from '@/components/property/SectionTitle';
import PropertyImage from '@/components/property/PropertyImage';
import IconCard from '@/components/property/IconCard';
import InfoRow from '@/components/property/InfoRow';
import PriceCard from '@/components/property/PriceCard';
import CleanerCard from '@/components/property/CleanerCard';
import { useState } from 'react';
import Image from 'next/image';
import { renderImage } from '@/components/property/renderImage';
import { MdCheckBox } from 'react-icons/md';

export default function PropertyOverview() {
  const [showAfterOverview, setShowAfterOverview] = useState(true)
  console.log(setShowAfterOverview)
  const supportItems = [
    { title: 'Maison', icon: Home },
    { title: 'Vacuum Provided', icon: GiVacuumCleaner },
    { title: 'Supplies Provided', icon: SprayCanIcon },
  ];

  const propertyDetails = [
    { icon: Calendar, label: 'Sunday' },
    { icon: Maximize2, label: 'Property size (50 m²)' },
    { icon: Bed, label: '2 Bedrooms' },
    { icon: Bath, label: '2 Bathrooms' },
    { icon: WatchIcon, label: '10:00-16:00' },
  ];

  const cleaners = [
    {
      _id: 1,
      name: 'John Doe',
      image: 'https://placehold.co/200x200',
      address: '123 Main St, San Francisco, CA',
    },
  ];

  const details_data = [
    {
      title: "General",
      work: [
        "Take out the trash",
        "Air out the accommodation",
        "Check for odors (fresh accommodation)",
      ],
    },
    {
      title: "Bedroom(s)",
      work: [
        "Make the bed with clean linens",
        "Change the sheets and pillowcases",
        "Dust furniture and surfaces",
      ]
    },
    {
      title: 'Bathroom / WC',
      work: [
        "Clean and disinfect the toilet",
        "Sweep the floor (broom + mop)",
        "Wipe the mirrors",
      ]
    },
    {
      title: 'Kitchen / Kitchen Area',
      work: [
        "Clean the stove",
        "Wash and put away dishes",
        "Sweep the floor",
      ]
    },
    {
      title: 'GeLiving Room / Living Areaneral',
      work: [
        "Dust furniture and shelves",
        "Clean the table and surfaces",
        "Vacuum / sweep",
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <BackButton title="Property Overview" className="text-[#2DBEFF] mb-4" />

        <PropertyImage src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200" />

        <div className="mt-8">
          <SectionTitle title="Description" />
          <p className="mt-3 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            perspiciatis temporibus placeat voluptas unde omnis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {supportItems.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1  gap-4 mt-6">
          {propertyDetails.map((detail) => (
            <InfoRow key={detail.label} {...detail} />
          ))}
        </div>

        <div className="mt-6">
          <PriceCard price="50,25 €" />
        </div>


        <div className="bg-white p-4 my-5 sm:p-5 lg:p-6 rounded-lg border border-gray-200 shadow-sm mb-4 sm:mb-5">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2DBEFF]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DBEFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1">
                In-person key handover
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Meet the cleaner to give keys
              </p>
            </div>
            <Check className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
          </div>
        </div>
        {showAfterOverview ?
          <div className="bg-white p-4 my-5 sm:p-5 lg:p-6 rounded-lg border border-gray-200 shadow-sm mb-4 sm:mb-5">
            <SectionTitle title="Assign Cleaner" className="mt-10 mb-4" />
            <div className="flex items-center gap-3">
              <Image
                src='https://placehold.co/200x200'
                alt='cleaner'
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium line-clamp-1">John Doe</p>
                <p className="text-sm text-gray-500 line-clamp-1">123 Main St, San Francisco, CA</p>
              </div>
            </div>
            <div className="my-4">
              <SectionTitle title="Checklist" className="mt-10 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <p className="font-medium my-2 underline">After cleaning</p>
                  {renderImage(['https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200'])}
                </div>
                <div>
                  <p className="font-medium my-2 underline">Before cleaning</p>
                  {renderImage(['https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200', 'https://placehold.co/200x200'])}
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                details_data.map((item)=>(
                  <div key={item.title} className="border border-gray-300 p-4 rounded-lg">
                    <p className="font-medium my-2 underline">{item.title}</p>
                    <div className="">
                      {item.work.map((work)=>(
                        <div key={work} className="my-2 flex gap-2 items-center">
                           <MdCheckBox />
                           <p>{work}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          :
          <>
            <SectionTitle title="All Cleaner Requests (50)" className="mt-10 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cleaners.map((cleaner) => (
                <CleanerCard key={cleaner._id} cleaner={cleaner} setShowAfterOverview={setShowAfterOverview} />
              ))}
            </div>
          </>
        }

      </div>
    </div>
  );
}
