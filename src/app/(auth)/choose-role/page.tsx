import { Button, Card } from "antd";
import Image from "next/image";

import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
import { Typography } from "@/components/typography/typoGraphy";
import Link from "next/link";

export default function ChooseRolePage() {
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
        <main className="absolute max-w-6xl z-10 flex flex-col gap-4 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {chooseRoleDetails.map((detail, index) => (
                <Card style={{ backgroundColor: '#EFF6FF' }} key={index}>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Card variant="outlined" style={{ backgroundColor: '#FFFFFF', padding: '0', margin: '0' }}>
                            <Image className="w-full h-full" src={detail.image} alt={detail.role} width={200} height={200} />
                        </Card>
                        <div className="flex flex-col items-start">
                            <Typography variant="h1">{detail.title}</Typography>
                            <Typography variant="subtitle" className="font-light">{detail.description}</Typography>
                            <Link href={detail.href}><Button size="large" type="primary">{detail.buttonText}</Button></Link>
                        </div>
                    </div>
                </Card>
            ))}
        </main>
    )
}
