'use client'
import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
import { CleanIcon } from "@/components/svgs/cleanIcon";
import { Typography } from "@/components/typography/typoGraphy";
import { Button } from "antd";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("banner")
  const common = useTranslations("Common")
  return (
    <div style={{
      backgroundImage: `url(${IMAGE_CONSTANTS.HERO_BG.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.8)'
    }}
      className="min-h-[calc(100vh-5rem)] px-2 relative flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div
        className="absolute top-0 -z-1 left-0 w-full h-full bg-linear-to-l from-transparent via-[#2dbcffc0] to-[#2DBEFF] via-50% pointer-events-none" />
      <main className="container mx-auto flex flex-col gap-4 items-start justify-center h-full">
        <div className="flex gap-2  items-center">
          <CleanIcon width="44" height="44" fill="#111" />
          <Typography className="text-[#323135] leading-none" variant="caption">{t("subtitle")}</Typography>
        </div>
        <Typography variant="h2" className="text-white max-w-3xl font-semibold">{t("title")}</Typography>
        <Typography variant="body" className="text-[#323135] max-w-3xl font-semibold">{t("description")}</Typography>
        <Button size="large" style={{ border: '1px solid white', backgroundColor: 'transparent', color: 'white' }} variant="outlined">
          {common("explore")}
        </Button>
      </main>
    </div>
  );
}
