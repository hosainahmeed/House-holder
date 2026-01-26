'use client'

import React, { useState } from 'react'
import { Button, Input, Select, Upload, message, Switch, InputNumber, Tooltip, Checkbox } from 'antd'
import { UploadOutlined, ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
import Image from 'next/image'
import { ICONS } from '@/assets/icons/index.icons'
import { cn } from '@/lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/rtk/query/Store'
import { setPropertyData } from '@/rtk/slices/PropertySlice'
import { Key, Lock } from 'lucide-react'

const { TextArea } = Input
const { Option } = Select

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

export default function AddPropertyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const dispatch = useDispatch()
  const propertyData = useSelector((state: RootState) => state.property)
  console.log(propertyData)
  const [formData, setFormData] = useState<PropertyData>({
    propertyTitle: propertyData.propertyTitle,
    propertyImages: propertyData.propertyImages,
    propertyType: propertyData.propertyType,
    floor: propertyData.floor,
    apartmentNumber: propertyData.apartmentNumber,
    location: propertyData.location,
    propertySize: propertyData.propertySize,
    bedroomQuantity: propertyData.bedroomQuantity,
    bathroomQuantity: propertyData.bathroomQuantity,
    kitchenQuantity: propertyData.kitchenQuantity,
    elevator: propertyData.elevator,
    inPersonKeyHandover: propertyData.inPersonKeyHandover,
    keyboxLocation: propertyData.keyboxLocation,
    lockboxCode: propertyData.lockboxCode,
    description: propertyData.description,
    providable: propertyData.providable,
  })

  const steps = [
    'Property Information',
    'Location & Size',
    'Room Details',
    'Elevator & Handover',
    'Property Description'
  ]

  const updateFormData = (field: keyof PropertyData, value: PropertyData[keyof PropertyData]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    dispatch(setPropertyData({ field, value }))
  }

  const validateStep = (step: number): { isValid: boolean; missingFields: string[] } => {
    const missingFields: string[] = []

    switch (step) {
      case 0:
        if (!propertyData.propertyTitle) missingFields.push('Property Title')
        if (!propertyData.propertyType) missingFields.push('Property Type')
        if (!propertyData.apartmentNumber) missingFields.push('Apartment Number')
        if (propertyData.propertyImages.length === 0) missingFields.push('Property Images')
        break
      case 1:
        if (!propertyData.location) missingFields.push('Location')
        if (!propertyData.propertySize || propertyData.propertySize <= 0) missingFields.push('Property Size')
        break
      case 2:
        if (propertyData.bedroomQuantity < 0) missingFields.push('Bedroom Quantity')
        if (propertyData.bathroomQuantity < 0) missingFields.push('Bathroom Quantity')
        if (propertyData.kitchenQuantity < 0) missingFields.push('Kitchen Quantity')
        break
      case 3:
        if (!formData.inPersonKeyHandover) {
          if (!formData.keyboxLocation) missingFields.push('Keybox Location')
          if (!formData.lockboxCode) missingFields.push('Lockbox Code')
        }
        break
      case 4:
        if (!propertyData.description) missingFields.push('Property Description')
        break
    }

    return {
      isValid: missingFields.length === 0,
      missingFields
    }
  }

  const nextStep = () => {
    const { isValid, missingFields } = validateStep(currentStep)
    if (!isValid) {
      message.error(`Please fill in all required fields before proceeding: ${missingFields.join(', ')}`)
      return
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    const { isValid, missingFields } = validateStep(currentStep)
    if (!isValid) {
      message.error(`Please fill in all required fields before submitting: ${missingFields.map(field => `* ${field}`).join('\n')}`)
      return
    }
    console.log('Form submitted:', propertyData)
    message.success('Property added successfully!')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Image</label>
              <Upload
                listType="picture-card"
                fileList={formData.propertyImages}
                multiple
                beforeUpload={(file) => {
                  // Validate file type
                  const isImage = file.type.startsWith('image/')
                  if (!isImage) {
                    message.error('You can only upload image files!')
                    return false
                  }
                  // Validate file size (5MB)
                  const isLt5M = file.size / 1024 / 1024 < 5
                  if (!isLt5M) {
                    message.error('Image must be smaller than 5MB!')
                    return false
                  }
                  return false // Prevent auto upload
                }}
                onChange={({ fileList }) => {
                  const processedFiles = fileList.map(file => {
                    if (file.originFileObj && !file.url) {
                      // Create object URL for preview
                      const preview = URL.createObjectURL(file.originFileObj)
                      return {
                        ...file,
                        url: preview,
                        thumbUrl: preview
                      }
                    }
                    return file
                  })
                  updateFormData('propertyImages', processedFiles)
                }}
                onPreview={async (file) => {
                  if (file.originFileObj) {
                    const src = URL.createObjectURL(file.originFileObj)
                    const img = document.createElement('img')
                    img.src = src
                    img.style.maxWidth = '100%'
                    img.style.maxHeight = '100%'
                    const newWindow = window.open()
                    if (newWindow) {
                      newWindow.document.body.appendChild(img)
                    }
                  }
                }}
              >
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <div className="w-fit grid grid-cols-2 gap-2">
                <Tooltip placement='bottomLeft' title="Apartment">
                  <div
                    onClick={() => updateFormData('propertyType', 'apartment')}
                    className={cn("p-2 w-24 h-24 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.propertyType === 'apartment' && 'border-blue-500'
                    )}>
                    <Image src={ICONS.apartment} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
                <Tooltip placement='bottomLeft' title="Home">
                  <div
                    onClick={() => updateFormData('propertyType', 'home')}
                    className={cn("p-2 w-24 h-24 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.propertyType === 'home' && 'border-blue-500'
                    )}>
                    <Image src={ICONS.mansion} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Property Title</label>
              <Input
                size='large' value={formData.propertyTitle}
                onChange={(e) => updateFormData('propertyTitle', e.target.value)}
                placeholder="Enter property title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Floor</label>
              <Select
                size='large'
                value={formData.floor}
                onChange={(value) => updateFormData('floor', value)}
                className="w-full"
              >
                {Array.from({ length: 50 }).map((_, floor) => (
                  <Option key={floor} value={floor}>{floor}</Option>
                ))}
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Apartment Number</label>
              <Input
                size='large' value={formData.apartmentNumber}
                onChange={(e) => updateFormData('apartmentNumber', e.target.value)}
                placeholder="Enter apartment number"
              />
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                size='large' value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                placeholder="Enter property location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Providable (<small>Host can provide</small>) </label>
              <div className="w-fit grid grid-cols-2 gap-2">
                <Tooltip placement='bottomLeft' title="Vacuum Provided">
                  <div
                    onClick={() => updateFormData('providable', 'vacuum')}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.providable === 'vacuum' && 'border-blue-500'
                    )}>
                    <Image src={ICONS.supplies} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
                <Tooltip placement='bottomLeft' title="Supplies Provided">
                  <div
                    onClick={() => updateFormData('providable', 'supplies')}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.providable === 'supplies' && 'border-blue-500'
                    )}>
                    <Image src={ICONS.vaccume} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Property Size (sq meters)</label>
              <InputNumber
                size='large'
                value={formData.propertySize}
                onChange={(value) => updateFormData('propertySize', value || 0)}
                placeholder="Enter property size"
                className="w-full!"
                min={0}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Room Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bedroom Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow duration-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <Image src={ICONS.bed} className='w-10 h-10' alt="Bedroom" width={40} height={40} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">Bedrooms</h4>
                    <p className="text-sm text-gray-500 mb-3">Number of bedrooms</p>
                  </div>
                  <div className="w-full">
                    <InputNumber
                      value={formData.bedroomQuantity}
                      onChange={(value) => updateFormData('bedroomQuantity', value || 0)}
                      placeholder="0"
                      className="w-full! text-center"
                      size="large"
                      min={0}
                     
                    />
                  </div>
                 
                </div>
              </div>

              {/* Bathroom Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow duration-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center">
                    <Image src={ICONS.sink} className='w-10 h-10' alt="Bathroom" width={40} height={40} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">Bathrooms</h4>
                    <p className="text-sm text-gray-500 mb-3">Number of bathrooms</p>
                  </div>
                  <div className="w-full">
                    <InputNumber
                      value={formData.bathroomQuantity}
                      onChange={(value) => updateFormData('bathroomQuantity', value || 0)}
                      placeholder="0"
                      className="w-full! text-center"
                      size="large"
                      min={0}
                      
                    />
                  </div>
                 
                </div>
              </div>

              {/* Kitchen Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow duration-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <Image src={ICONS.kitchen} className='w-10 h-10' alt="Kitchen" width={40} height={40} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">Kitchens</h4>
                    <p className="text-sm text-gray-500 mb-3">Number of kitchens</p>
                  </div>
                  <div className="w-full">
                    <InputNumber
                      value={formData.kitchenQuantity}
                      onChange={(value) => updateFormData('kitchenQuantity', value || 0)}
                      placeholder="0"
                      className="w-full! text-center"
                      size="large"
                      min={0}
                    />
                  </div>  
                
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Elevator (<small>elevator is available or not</small>)</label>
              <div className="grid grid-cols-2 w-fit gap-2">
                <Tooltip placement='bottomLeft' title="Elevator Available">
                  <div
                    onClick={() => updateFormData('elevator', true)}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.elevator && 'border-blue-500'
                    )}>
                    <Image src={ICONS.elevator} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
                <Tooltip placement='bottomLeft' title="Elevator Not Available">
                  <div
                    onClick={() => updateFormData('elevator', false)}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.elevator === false && 'border-blue-500'
                    )}>
                    <Image src={ICONS.noElevator} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
              </div>
            </div>
            {/* Key Handover */}
            <div
              onClick={() => updateFormData('inPersonKeyHandover', true)}
              className={cn("border cursor-pointer border-gray-300 flex items-center gap-4 p-4 rounded-md",
                formData.inPersonKeyHandover && 'border-blue-500'
              )}>
              <div className=" border border-gray-300 p-4 rounded bg-gray-200">
                <Key />
              </div>
              <div className="flex items-start flex-col gap-2">
                <h1>In-person key handover</h1>
                <small>Meet the cleaner to give keys</small>
              </div>
            </div>
            <div
              onClick={() => updateFormData('inPersonKeyHandover', false)}
              className={cn("border cursor-pointer border-gray-300 flex items-center gap-4 p-4 rounded-md",
                !formData.inPersonKeyHandover && 'border-blue-500'
              )}>
              <div className=" border border-gray-300 p-4 rounded bg-gray-200">
                <Lock />
              </div>
              <div className="flex items-start flex-col gap-2">
                <h1>Lockbox</h1>
                <small>Lockbox Code Released 24 Hours Before Mission</small>
              </div>
            </div>

            {
              !formData.inPersonKeyHandover && (
                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-5 h-5 text-orange-500" />
                    <h3 className="text-lg font-semibold text-gray-800">Lockbox Details</h3>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Required</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Keybox Location <span className="text-red-500">*</span>
                      </label>
                      <Input
                        size='large'
                        value={formData.keyboxLocation}
                        onChange={(e) => updateFormData('keyboxLocation', e.target.value)}
                        placeholder="e.g., Behind the potted plant near entrance"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        prefix={<Lock className="w-4 h-4 text-gray-400" />}
                      />
                      {formData.keyboxLocation && (
                        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          ✓ Location provided
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lockbox Code <span className="text-red-500">*</span>
                      </label>
                      <Input.Password
                        size='large'
                        value={formData.lockboxCode}
                        onChange={(e) => updateFormData('lockboxCode', e.target.value)}
                        placeholder="Enter 4-6 digit code"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        visibilityToggle
                      />
                      {formData.lockboxCode && (
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-green-600 flex items-center gap-1">
                            ✓ Code provided
                          </p>
                          <p className="text-xs text-gray-500">
                            Code will be released 24 hours before mission
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                      <p className="text-xs text-blue-700">
                        <strong>Security Note:</strong> Ensure the lockbox is in a secure, accessible location.
                        The cleaner will receive the code automatically 24 hours before the scheduled cleaning.
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Description</label>
              <TextArea
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                placeholder="Enter property description"
                rows={6}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-8">Add New Property</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {renderStepContent()}
      </div>

      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          icon={<ArrowLeftOutlined />}
        >
          Previous
        </Button>

        {currentStep === steps.length - 1 ? (
          <Button
            type="primary"
            onClick={handleSubmit}
            icon={<CheckOutlined />}
          >
            Submit
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={nextStep}
            icon={<ArrowRightOutlined />}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}