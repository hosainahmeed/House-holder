import { Typography } from '@/components/typography/typoGraphy'
import { Button } from 'antd'
import { useTranslations } from 'next-intl'

function JoinSection() {
    const t = useTranslations("join-section")
    return (
        <div className="flex flex-col container mx-auto px-4 py-16 md:py-20 lg:py-28 rounded-2xl bg-linear-to-br from-[#2DBEFF] to-[#1B7299] items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <Typography variant="h2" className='text-white text-center'>{t("title")}</Typography>
                <Typography variant="body" className='text-white max-w-5xl md:px-12 text-center'>{t("subtitle")}</Typography>
            </div>
            <div className="flex gap-4">
                <Button size='large' style={{ backgroundColor: '#fff' }}>Join as a host</Button>
                <Button type="default" size='large' style={{ backgroundColor: 'transparent', color: '#fff' }}>Join as a Cleaner</Button>
            </div>
        </div>
    )
}

export default JoinSection