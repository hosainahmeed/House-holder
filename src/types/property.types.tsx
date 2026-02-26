import dayjs from 'dayjs'
export interface Property {
    _id: number
    name: string
    bed: number
    area: string
    image: string
}

export interface CleaningOption {
    value: number
    title: string
    icon: string
    location?: string
}

export interface FormData {
    property: string
    date: dayjs.Dayjs
    startTime: dayjs.Dayjs
    endTime: dayjs.Dayjs
    bedLinens: number
    dropOffAddress: string
    rate: number
    sendToFavorites: boolean
}
