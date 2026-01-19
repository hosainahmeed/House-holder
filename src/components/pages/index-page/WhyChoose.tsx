import { ICONS } from "@/assets/icons/index.icons"
import TypographyDescription from "@/components/common/Typography"
import { Typography } from "@/components/typography/typoGraphy"
import { Card } from "antd"
import { useTranslations } from "next-intl"
import Image from "next/image"

function WhyChoose() {
  const t = useTranslations("why-choose")
  const featuresTrans = useTranslations("features")
  
  const data = [
    {
      icon: ICONS.one.src,
      title: featuresTrans("nearby_jobs.title"),
      description: featuresTrans("nearby_jobs.description"),
    },
    {
      icon: ICONS.two.src,
      title: featuresTrans("weekly_schedule.title"),
      description: featuresTrans("weekly_schedule.description"),
    },
    {
      icon: ICONS.three.src,
      title: featuresTrans("secure_payments.title"),
      description: featuresTrans("secure_payments.description"),
    },
    {
      icon: ICONS.four.src,
      title: featuresTrans("job_validation.title"),
      description: featuresTrans("job_validation.description"),
    },
    {
      icon: ICONS.five.src,
      title: featuresTrans("reputation.title"),
      description: featuresTrans("reputation.description"),
    },
    {
      icon: ICONS.six.src,
      title: featuresTrans("communication.title"),
      description: featuresTrans("communication.description"),
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <TypographyDescription text={t("title")} target={t("target")} className="text-black max-w-5xl text-center font-semibold text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl" />
        <Typography variant="body" className="text-gray-500 md:text-base max-w-6xl text-center">{t("description")}</Typography>
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

