'use client'

import React, { useState } from 'react'
import { Button, Input, Select, Upload, message, Switch, InputNumber, Tooltip } from 'antd'
import { UploadOutlined, ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
import Image from 'next/image'
import { ICONS } from '@/assets/icons/index.icons'
import { cn } from '@/lib/utils'
import PlacePicker from '@/components/PlacePicker'

const { TextArea } = Input
const { Option } = Select

interface PropertyData {
  propertyTitle: string
  propertyImage: UploadFile[]
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
}

export default function AddPropertyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<PropertyData>({
    propertyTitle: '',
    propertyImage: [],
    propertyType: 'apartment',
    floor: 1,
    apartmentNumber: '',
    location: '',
    propertySize: 0,
    bedroomQuantity: 0,
    bathroomQuantity: 0,
    kitchenQuantity: 0,
    elevator: false,
    inPersonKeyHandover: false,
    keyboxLocation: '',
    lockboxCode: '',
    description: ''
  })

  const steps = [
    'Property Information',
    'Location & Size',
    'Room Details',
    'Elevator & Handover',
    'Property Description'
  ]

  const updateFormData = (field: keyof PropertyData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
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
    console.log('Form submitted:', formData)
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
                fileList={formData.propertyImage}
                beforeUpload={() => false}
                onChange={({ fileList }) => updateFormData('propertyImage', fileList)}
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
              <label className="block text-sm font-medium mb-2">Providable</label>
              <div className="w-fit grid grid-cols-2 gap-2">
                <Tooltip placement='bottomLeft' title="Vacuum Provided">
                  <div
                    onClick={() => updateFormData('propertyType', 'apartment')}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.propertyType === 'apartment' && 'border-blue-500'
                    )}>
                    <Image src={ICONS.supplies} className='w-full h-full' alt="Apartment" width={50} height={50} />
                  </div>
                </Tooltip>
                <Tooltip placement='bottomLeft' title="Supplies Provided">
                  <div
                    onClick={() => updateFormData('propertyType', 'apartment')}
                    className={cn("p-2 w-34 h-34 cursor-pointer hover:bg-gray-100 border rounded border-gray-300",
                      formData.propertyType === 'apartment' && 'border-blue-500'
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
            <div>
              <label className="block text-sm font-medium mb-2">Bedroom Quantity</label>
              <InputNumber
                value={formData.bedroomQuantity}
                onChange={(value) => updateFormData('bedroomQuantity', value || 0)}
                placeholder="Enter bedroom quantity"
                className="w-full"
                min={0}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bathroom Quantity</label>
              <InputNumber
                value={formData.bathroomQuantity}
                onChange={(value) => updateFormData('bathroomQuantity', value || 0)}
                placeholder="Enter bathroom quantity"
                className="w-full"
                min={0}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Kitchen Quantity</label>
              <InputNumber
                value={formData.kitchenQuantity}
                onChange={(value) => updateFormData('kitchenQuantity', value || 0)}
                placeholder="Enter kitchen quantity"
                className="w-full"
                min={0}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Elevator</label>
              <Switch
                checked={formData.elevator}
                onChange={(checked) => updateFormData('elevator', checked)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">In-person Key Handover</label>
              <Switch
                checked={formData.inPersonKeyHandover}
                onChange={(checked) => updateFormData('inPersonKeyHandover', checked)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Lockbox Details</label>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Keybox Location</label>
                  <Input
                    size='large' value={formData.keyboxLocation}
                    onChange={(e) => updateFormData('keyboxLocation', e.target.value)}
                    placeholder="Enter keybox location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Lockbox Code</label>
                  <Input
                    size='large' value={formData.lockboxCode}
                    onChange={(e) => updateFormData('lockboxCode', e.target.value)}
                    placeholder="Enter lockbox code"
                  />
                </div>
              </div>
            </div>
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