import { createSlice } from '@reduxjs/toolkit'
import type { UploadFile } from 'antd/es/upload/interface'

interface PropertyData {
  propertyTitle: string
  propertyImages: UploadFile[]
  propertyType: string
  floor: number
  apartmentNumber: string
  location: string
  propertySize: number
  bedroomQuantity: number
  bathroomQuantity: number
  kitchenQuantity: number
  elevator: boolean
  inPersonKeyHandover: boolean
  keyboxLocation: string
  lockboxCode: string
  description: string
  providable: string
}

const initialState: PropertyData = {
  propertyTitle: 'Property Title',
  propertyImages: [],
  propertyType: 'apartment',
  floor: 1,
  apartmentNumber: 'Apartment Number',
  location: 'Location',
  propertySize: 1230,
  bedroomQuantity: 2,
  bathroomQuantity: 2,
  kitchenQuantity: 1,
  elevator: false,
  inPersonKeyHandover: false,
  keyboxLocation: 'Keybox Location',
  lockboxCode: 'Lockbox Code',
  description: 'Description',
  providable: 'Providable',
}

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setPropertyData: (state, action) => {
      const { field, value } = action.payload as { field: keyof PropertyData; value: PropertyData[keyof PropertyData] }
      return { ...state, [field]: value }
    },
    updatePropertyData(state, action) {
      Object.assign(state, action.payload)
    },
    resetPropertyData() {
      return initialState
    }
  },
})

export const { setPropertyData, updatePropertyData, resetPropertyData } = propertySlice.actions
export default propertySlice.reducer