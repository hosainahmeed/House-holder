'use client'

import { Work } from "@/app/[locale]/(default)/(cleaner)/cleaner-calender/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

function WorkDetails({ work }: { work: Work }) {
    const router = useRouter()
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Work Details</h2>

      <div className="grid grid-cols-2 gap-4">
        <Info label="Date" value={work.date} />
        <Info label="Location" value={work.location} />
      </div>

      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={work.img}
          alt="Work Image"
          fill
          className="object-cover"
        />
      </div>
      <button className="bg-[#2DBEFF] cursor-pointer text-white px-4 py-2 rounded" onClick={() => router.push(`/cleaner/calender/${work.date}`)}>View Details</button>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

export default WorkDetails
