import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import Image from 'next/image';
import Link from 'next/link';

export const apartments = [
  {
    id: 1,
    name: 'Private room in San Francisco',
    location: 'Los Angeles, CA',
    country: 'USA',
    image: 'https://placehold.co/200x200',
    description: "I'm after 2 palettes that are sold out online but available from 2 specific stores. They need to be sent out to you in the US and then forwarded to me in Sydney...",
    host: {
      name: 'Marvin Fey',
      status: 'Chat Now',
      image: 'https://placehold.co/200x200',
    },
    schedule: {
      day: 'Sunday',
      time: '10:00 - 16:00'
    },
    specs: {
      size: '150 m²',
      bedrooms: 2,
      beds: 2
    },
    price: 150.23,
    currency: '€',
    amenities: ['Kitchen', 'Washer Provided', 'Supplies Provided'],
    logistics: {
      keyHandover: 'In-person key handover',
      specialTask: 'Change the bed: Bed sheets and pillows are used from inside the property'
    }
  },
  {
    id: 2,
    name: 'Flower Apartment',
    location: 'De Lys',
    country: 'France',
    image: 'https://placehold.co/200x200',
    description: 'Beautiful garden view apartment...',
    host: { name: 'Sophie L.', status: 'Away' },
    schedule: { day: 'Monday', time: '09:00 - 18:00' },
    specs: { size: '85 m²', bedrooms: 1, beds: 1 },
    price: 95.00,
    currency: '€',
    amenities: ['Kitchen', 'Wifi'],
    logistics: {
      keyHandover: 'Lockbox',
      specialTask: 'Water the plants'
    }
  }
  // ... you can repeat this structure for IDs 3 and 4
];

function Page() {
  // Example dynamic data array


  return (
    <div className="container mx-auto py-4 space-y-4">
      <h1 className="text-3xl font-semibold text-black">Calendar</h1>
      {apartments.map((apt) => (
        <div
          key={apt.id}
          className="flex items-center justify-between gap-4 border rounded-md p-4  border-gray-300 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <Image
              className="w-32 h-32 rounded-md object-cover"
              src={apt.image}
              width={150}
              height={150}
              alt={apt.name}
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-black">{apt.name}</h1>
              <h4 className="text-gray-500">{apt.location}</h4>
              <h4 className="text-gray-500">{apt.country}</h4>
              <Link href={`/calendar/details/${apt.id}`}>
                <button className="mt-2 cursor-pointer px-4 py-2 bg-[#2DBEFF] text-white rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Link href={`/calendar/${apt.id}`}>
              <Image
                src={IMAGE_CONSTANTS.calenderBigIcon}
                width={100}
                height={100}
                alt="calendar"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
