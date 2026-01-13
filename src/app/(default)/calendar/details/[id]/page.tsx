'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { apartments } from '../../page'
import { Home, CheckCircle, Calendar, Clock, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  const pathname = usePathname()
  const [eventData, setEventData] = useState<any>(null)

  useEffect(() => {
    const id = pathname?.split('/').pop()
    const event = apartments.find((apartment) => apartment.id === parseInt(id || '0'))
    setEventData(event)
  }, [pathname])

  if (!eventData) return <div className="container mx-auto py-8 text-black">Loading...</div>

  return (
    <div className="container mx-auto bg-white min-h-screen p-4">
      {/* Main Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={eventData.image}
          alt={eventData.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Property Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{eventData.name}</h1>
      <p className="text-gray-500 text-sm mb-4">{eventData.location}, {eventData.country}</p>

      {/* Details Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-black mb-2">Details</h2>
        <p className="text-gray-700">{eventData.description}</p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-3 mb-6">
        {eventData.amenities.map((amenity: string, index: number) => (
          <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-black" />
            <span className="text-sm text-black">{amenity}</span>
          </div>
        ))}
      </div>

      {/* Posted By */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              {eventData.host.image ? (
                <Image
                  src={eventData.host.image}
                  alt={eventData.host.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-600 text-sm">
                    {eventData.host.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Posted by</h2>
              <h3 className="font-medium text-gray-500">{eventData.host.name}</h3>
            </div>
          </div>
          <Link href={`/chat`}>
            <button
              className="flex cursor-pointer items-center gap-2 bg-[#2DBEFF] text-white px-4 py-2 rounded-md">
              <MessageCircle className="w-4 h-4" />Chat Now
            </button>
          </Link>
        </div>
      </div>

      {/* Schedule and Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center border-y py-4 gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full shrink-0 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="text-gray-700">{eventData.schedule.day}</p>
            <p className="text-sm text-gray-500">{eventData.schedule.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full shrink-0 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="text-gray-700">{eventData.location}, {eventData.country}</p>
            <p className="text-sm text-gray-500">{eventData.specs.size} • {eventData.specs.bedrooms} Bedroom • {eventData.specs.beds} Beds</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-y py-4">
          <span className="text-black font-semibold">Price</span>
          <span className="text-lg font-semibold text-black">{eventData.currency} {eventData.price.toFixed(2)}</span>
        </div>
      </div>

      {/* Logistics */}
      <div className="space-y-4 mb-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-medium text-black ">Logistics</h3>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
          <p className="text-gray-700">{eventData.logistics.keyHandover}</p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
          <p className="text-gray-700">{eventData.logistics.specialTask}</p>
        </div>
      </div>

      {/* Validate Button */}
      <button className="w-fit px-6 bg-[#2DBEFF] text-white py-3 rounded-lg font-medium mt-4 mb-6 transition-colors">
        Validate
      </button>
    </div>
  )
}

export default Page
