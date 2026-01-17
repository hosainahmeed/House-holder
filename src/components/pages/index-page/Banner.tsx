'use client'
import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
import { CleanIcon } from "@/components/svgs/cleanIcon";
import { Typography } from "@/components/typography/typoGraphy";
import { Button } from "antd";

export default function Banner() {
  return (
    <div style={{
      backgroundImage: `url(${IMAGE_CONSTANTS.HERO_BG.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.8)'
    }}
      className="min-h-[calc(100vh-10rem)] px-2 relative flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div
        className="absolute top-0 -z-1 left-0 w-full h-full bg-linear-to-l from-transparent via-[#2dbcffc0] to-[#2DBEFF] via-50% pointer-events-none" />
      <main className="container mx-auto flex flex-col gap-4 items-start justify-center h-full">
        <div className="flex gap-2  items-center">
          <CleanIcon width="44" height="44" fill="#111" />
          <Typography className="text-[#323135] leading-none" variant="subtitle">Find Cleaning Jobs Near You. Get Paid Securely.</Typography>
        </div>
        <Typography variant="h1" className="text-white max-w-3xl font-semibold">TURN YOUR CLEANING SKILLS INTO RELIABLE INCOME</Typography>
        <Typography variant="subtitle" className="text-[#323135] max-w-3xl font-semibold">Join a trusted platform that connects professional cleaners with verified hosts. Choose jobs near you, manage your schedule, and receive secure payments after every completed mission.</Typography>
        <Button size="large" style={{border:'1px solid white', backgroundColor:'transparent' , color:'white'}} variant="outlined">
          Explore
        </Button>
      </main>
    </div>
  );
}
