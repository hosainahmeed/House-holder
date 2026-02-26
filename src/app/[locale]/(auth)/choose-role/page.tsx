'use client'
import { Button } from "antd";
import Image from "next/image";

import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
import { Typography } from "@/components/typography/typoGraphy";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowBigLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ChooseRolePage() {
    const router = useRouter()
    const [selectedRole, setSelectedRole] = useState<string | null>(null)
    const chooseRoleDetails = [
        {
            role: "host",
            image: IMAGE_CONSTANTS.hostImage,
            title: 'For Hosts',
            description: 'Create and organize student lists, add class schedules, post announcements, and track student issues — all in one simple dashboard.',
            buttonText: 'Join as host',
            href: '/register?role=host'
        },
        {
            role: "cleaner",
            image: IMAGE_CONSTANTS.cleanerImage,
            title: 'For Cleaners',
            description: 'For coaches, clubs, and organizers who want to create and publish events — completely FREE to register and list events.',
            buttonText: 'Join as cleaner',
            href: '/register?role=cleaner'
        }
    ]
    return (
        <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-6xl flex flex-col gap-4 sm:gap-6">
                <button
                    onClick={() => router.back()}
                    className="p-2 rounded-full bg-[#EFF6FF] w-fit shadow cursor-pointer border border-[#EFF6FF]"
                >
                    <ArrowBigLeft />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {chooseRoleDetails.map((detail, index) => (
                        <div
                            onClick={() => setSelectedRole(detail.role)}
                            className={cn(
                                "p-4 sm:p-5 lg:p-6 bg-[#EFF6FF] border border-[#EFF6FF] rounded-lg cursor-pointer transition-all hover:shadow-lg",
                                selectedRole === detail.role && "border-[#2563EB]"
                            )}
                            key={index}
                        >
                            <div className="flex flex-col items-center gap-3 sm:gap-4">
                                <div className="w-full bg-white p-0 m-0 rounded-lg overflow-hidden" style={{ height: 'auto', maxHeight: '300px' }}>
                                    <Image
                                        className="w-full border border-[#2f7de2a9] rounded-lg h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-contain"
                                        src={detail.image}
                                        alt={detail.role}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <Typography variant="h1" className="text-lg sm:text-xl lg:text-2xl">
                                        {detail.title}
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        className="my-2 sm:my-3 font-light text-xs sm:text-sm leading-relaxed"
                                    >
                                        {detail.description}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    disabled={!selectedRole}
                    className={cn(
                        "w-full sm:w-fit sm:self-end bg-[#2563EB] text-white cursor-pointer rounded px-6 py-2 sm:py-2.5 text-sm sm:text-base transition-all",
                        !selectedRole && "opacity-50 cursor-not-allowed"
                    )}
                    type="button"
                    onClick={() => router.push(selectedRole === "host" ? "/register?role=host" : "/register?role=cleaner")}
                >
                    Next
                </button>
            </div>
        </main>
    )
}