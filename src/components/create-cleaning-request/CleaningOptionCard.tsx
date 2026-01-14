import { cn } from '@/app/lib/utils'
import { CleaningOption } from '@/types/property.types'
import { Space, Typography } from 'antd'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const { Text } = Typography

interface CleaningOptionCardProps {
    option: CleaningOption
    isSelected: boolean
    onSelect: (value: string) => void
}

const CleaningOptionCard: React.FC<CleaningOptionCardProps> = ({ 
    option, 
    isSelected, 
    onSelect 
}) => {
    return (
        <div
            onClick={() => onSelect(option.value.toString())}
            className={cn(
                "cursor-pointer transition-all p-2 rounded-md border",
                isSelected ? "border-blue-500 bg-blue-50" : "border-blue-300"
            )}
        >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Space>
                    <Image src={option.icon} alt="icons" width={40} height={40} />
                    <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                        {option.title}
                    </h1>
                </Space>
                {option.location && (
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {option.location}
                    </Text>
                )}
            </Space>
        </div>
    )
}

export default CleaningOptionCard
