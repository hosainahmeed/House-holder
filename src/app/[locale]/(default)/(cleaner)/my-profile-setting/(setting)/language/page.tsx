'use client'
import BackButton from '@/components/ui/BackButton'
import { Radio, message, Space } from 'antd'
import { useState } from 'react'
import { CheckCircleFilled, GlobalOutlined } from '@ant-design/icons'

const LANGUAGES = [
    {
        value: 'en',
        label: 'English',
        nativeLabel: 'English',
        flag: '🇬🇧'
    }, 
    {
        value: 'fr',
        label: 'French',
        nativeLabel: 'Français',
        flag: '🇫🇷'
    },
]

function Page() {
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    const [isChanging, setIsChanging] = useState(false)

    const handleLanguageChange = (e: any) => {
        const newLanguage = e.target.value
        setIsChanging(true)

        // Simulate language change with API call
        setTimeout(() => {
            setSelectedLanguage(newLanguage)
            const languageName = LANGUAGES.find(lang => lang.value === newLanguage)?.label
            message.success(`Language changed to ${languageName}`)
            setIsChanging(false)
        }, 500)
    }

    return (
        <div className='container mx-auto'>
            <BackButton title='Language Settings' className='mb-6' />

            {/* Header Section */}
            <div className='mb-6'>
                <div className='flex items-center gap-3 mb-2'>
                    <GlobalOutlined className='text-2xl text-blue-600' />
                    <h1 className='text-2xl font-semibold'>Choose Your Language</h1>
                </div>
                <p className='text-gray-500 text-sm'>
                    Select your preferred language for the application interface
                </p>
            </div>

            {/* Language Selection Card */}
            <div className="rounded-2xl p-6 border border-gray-200 bg-white">
                <Radio.Group
                    onChange={handleLanguageChange}
                    value={selectedLanguage}
                    disabled={isChanging}
                    className='w-full'
                >
                    <Space direction="vertical" className='w-full' size={12}>
                        {LANGUAGES.map((language) => (
                            <div
                                key={language.value}
                                className={`
                  relative rounded-xl p-4 border-2 transition-all duration-200 cursor-pointer
                  ${selectedLanguage === language.value
                                        ? 'border-blue-500 bg-blue-50 shadow-md'
                                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                    }
                `}
                            >
                                <Radio value={language.value} className='w-full'>
                                    <div className='flex items-center justify-between w-full ml-2'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-3xl'>{language.flag}</span>
                                            <div>
                                                <div className='font-medium text-base text-gray-900'>
                                                    {language.label}
                                                </div>
                                                <div className='text-sm text-gray-500'>
                                                    {language.nativeLabel}
                                                </div>
                                            </div>
                                        </div>
                                        {selectedLanguage === language.value && (
                                            <CheckCircleFilled className='text-blue-600 text-xl' />
                                        )}
                                    </div>
                                </Radio>
                            </div>
                        ))}
                    </Space>
                </Radio.Group>
            </div>

            {/* Info Section */}
            <div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl'>
                <p className='text-sm text-blue-800'>
                    <strong>Note:</strong> Changing the language will update all text throughout the application.
                    Some content may require a page refresh to display in the selected language.
                </p>
            </div>
        </div>
    )
}

export default Page