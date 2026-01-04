import { ICONS } from "@/assets/icons/index.icons"
import TypographyDescription from "@/components/common/Typography"
import { Typography } from "@/components/typography/typoGraphy"
import { Card } from "antd"
import Image from "next/image"

function WhyChoose() {
  const data = [
    {
      icon: ICONS.one.src,
      title: "Find Nearby Cleaning Jobs",
      description: "Browse available cleaning missions near your location and choose the ones that fit your schedule and preferences."
    },
    {
      icon: ICONS.two.src,
      title: "Professional Weekly Schedule",
      description: "Manage your availability with a clear weekly calendar designed specifically for cleaners — no overlap, no confusion."
    },
    {
      icon: ICONS.three.src,
      title: "Secure & Automatic Payments",
      description: "Get paid safely through our secure payment system once your job is completed and approved — no cash, no delays."
    },
    {
      icon: ICONS.four.src,
      title: "Easy Job Validation",
      description: "Upload photos and complete a simple checklist to validate your work and release your payment quickly."
    },
    {
      icon: ICONS.five.src,
      title: "Build Your Reputation",
      description: "Receive ratings and reviews from hosts after each completed job and grow your profile with every successful mission."
    },
    {
      icon: ICONS.six.src,
      title: "Direct Host Communication",
      description: "Chat securely with hosts for confirmed jobs to clarify details, share updates, and avoid misunderstandings."
    },
  ]
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <TypographyDescription text="Why Choose Our Platform as a Cleaner?" target="Platform as a Cleaner?" className="text-black max-w-5xl text-center font-semibold text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl" />
        <Typography variant="body" className="text-gray-500 md:text-base max-w-6xl text-center">From class scheduling to student communication, Our CR gives Class Representatives the power to manage everything effortlessly — all from one simple, intuitive dashboard. Stay organized, stay connected, and focus on what matters most: your class.</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data?.map((item) => (
            <Card key={item.title}>
              <Image className="mb-4" src={item?.icon} alt="icon" width={48} height={48} />
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="caption" className="text-gray-500">{item.description}</Typography>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default WhyChoose