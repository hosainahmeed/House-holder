'use client'

import BackButton from '@/components/ui/BackButton'
import { Radio, message, Space } from 'antd'
import { useTransition } from 'react'
import { CheckCircleFilled, GlobalOutlined } from '@ant-design/icons'
import { useParams } from 'next/navigation'
import { Locale } from '@/i18n/config'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const LANGUAGES = [
    {
        value: 'en',
        label: 'English',
        nativeLabel: 'English',
        flag: '🇬🇧',
    },
    {
        value: 'fr',
        label: 'French',
        nativeLabel: 'Français',
        flag: '🇫🇷',
    },
]

function Page() {
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const t = useTranslations('LanguageSettings')

    const [isPending, startTransition] = useTransition()

    const currentLocale = params.locale as Locale

    const handleLanguageChange = (e: any) => {
        const nextLocale = e.target.value as Locale

        startTransition(() => {
            const dynamicParams = { ...params }
            delete dynamicParams.locale

            router.replace(
                {
                    pathname,
                    // @ts-expect-error — params are valid for current route
                    params: dynamicParams,
                },
                { locale: nextLocale }
            )

            const languageName = LANGUAGES.find(
                (lang) => lang.value === nextLocale
            )?.label
            message.destroy()
            message.success(`Language changed to ${languageName}`)
        })
    }

    return (
        <div className="container mx-auto">
            <BackButton title="Language Settings" className="mb-6" />

            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <GlobalOutlined className="text-2xl text-blue-600" />
                    <h1 className="text-2xl font-semibold">{t("title")}</h1>
                </div>
                <p className="text-gray-500 text-sm">
                    {t("languageDescription")}
                </p>
            </div>

            {/* Language Card */}
            <div className="rounded-2xl p-6 border border-gray-200 bg-white">
                <Radio.Group
                    onChange={handleLanguageChange}
                    value={currentLocale}
                    disabled={isPending}
                    className="w-full"
                >
                    <Space orientation="vertical" className="w-full" size={12}>
                        {LANGUAGES.map((language) => (
                            <div
                                key={language.value}
                                className={`
                  relative rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer
                  ${currentLocale === language.value
                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                    }
                `}
                            >
                                <Radio value={language.value} className="w-full">
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{language.flag}</span>
                                            <div>
                                                <div className="font-medium text-base text-gray-900">
                                                    {language.label}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {language.nativeLabel}
                                                </div>
                                            </div>
                                        </div>

                                        {currentLocale === language.value && (
                                            <CheckCircleFilled className="text-blue-600 text-xl" />
                                        )}
                                    </div>
                                </Radio>
                            </div>
                        ))}
                    </Space>
                </Radio.Group>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800">
                    <strong>Note:</strong> {t("note")}
                </p>
            </div>
        </div>
    )
}

export default Page
