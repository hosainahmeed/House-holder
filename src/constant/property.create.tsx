import { IMAGE_CONSTANTS } from "@/assets/images/image.index"
import { CleaningOption, Property } from "@/types/property.types"

export const CLEANING_OPTIONS: CleaningOption[] = [
    {
        value: 1,
        title: "Change the bed linens and place the used linens inside the property",
        icon: IMAGE_CONSTANTS.bedLinens.src,
    },
    {
        value: 2,
        title: "Collect dirty linens and delivery them to a specified location",
        icon: IMAGE_CONSTANTS.bedLinens.src,
    },
    {
        value: 3,
        title: "Wash and dry linens off-site, then return them cleaner",
        icon: IMAGE_CONSTANTS.bedLinens.src,
    }
]

export const SAMPLE_PROPERTIES: Property[] = [
    {
        _id: 1,
        name: "Luxury Downtown Loft",
        bed: 2,
        area: "45 m2",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
    },
    {
        _id: 2,
        name: "Modern Studio Apartment",
        bed: 1,
        area: "28 m2",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    },
    {
        _id: 3,
        name: "City View Penthouse",
        bed: 3,
        area: "68 m2",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
    }
]

export const PRICE_TABLE_DATA = [
    { key: '1', propertyType: 'Studio', surface: '12-25 m2', price: '€25-35' },
    { key: '2', propertyType: 'Studio1', surface: '25-35 m2', price: '€35-50' },
    { key: '3', propertyType: 'Studio2', surface: '35-50 m2', price: '€50-75' },
    { key: '4', propertyType: 'Studio3', surface: '50-75 m2', price: '€75-100' },
]
