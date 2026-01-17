'use client'

import React, { useMemo } from 'react'
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
  Divider,
  Badge,
  Tag,
  Row,
  Col,
  InputNumber,
  Switch,
  message,
  Collapse
} from 'antd'
import {
  Bed,
  Maximize2,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Sparkles,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import dayjs from 'dayjs'
import { Property } from '@/types/property.types'
import { CLEANING_OPTIONS, SAMPLE_PROPERTIES } from '@/constant/property.create'
import { useFormHandlers } from '@/hooks/useFormHandlers'
import { PriceTable } from '@/components/create-cleaning-request/PriceTable'
import CleaningOptionCard from '@/components/create-cleaning-request/CleaningOptionCard'
import BackButton from '@/components/ui/BackButton'

const { Title, Text } = Typography
const { Panel } = Collapse

// Property Option Component
const PropertyOption: React.FC<{ property: Property }> = ({ property }) => (
  <div className="flex items-center gap-3 p-2">
    <img
      src={property.image}
      alt={property.name}
      className="w-12 h-12 rounded-lg object-cover"
    />
    <div className="flex-1">
      <div className="font-medium text-gray-900">{property.name}</div>
      <Space size="small" className="text-xs text-gray-500 mt-1">
        <span className="flex items-center gap-1">
          <Bed className="w-3 h-3" />
          {property.bed} beds
        </span>
        <span className="flex items-center gap-1">
          <Maximize2 className="w-3 h-3" />
          {property.area}
        </span>
      </Space>
    </div>
  </div>
)


// Rate Adjuster Component
const RateAdjuster: React.FC<{
  rate: number
  onChange: (value: number) => void
}> = ({ rate, onChange }) => (
  <div className='rounded-md border border-blue-200 shadow p-4'>
    <div className="flex items-center justify-center gap-4">
      <Button
        shape="circle"
        size="large"
        icon={<ChevronDown className="w-5 h-5" />}
        onClick={() => onChange(Math.max(0, rate - 1))}
        disabled={rate <= 0}
      />
      <div className="min-w-[120px] text-center">
        <Title level={2} style={{ margin: 0 }}>€ {rate}</Title>
      </div>
      <Button
        shape="circle"
        size="large"
        icon={<ChevronUp className="w-5 h-5" />}
        onClick={() => onChange(rate + 1)}
      />
    </div>
  </div>
)


export default function CleaningServiceBooking() {
  const { form, rate, sendToFavorites, isSubmitting, handlers } = useFormHandlers()

  const propertyOptions = useMemo(() => (
    SAMPLE_PROPERTIES.map((property) => ({
      value: property._id.toString(),
      label: <PropertyOption property={property} />
    }))
  ), [])

  return (
    <div className='min-h-screen px-2 py-12'>
      <div className='container mx-auto'>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          {/* Header */}
          <div>
            <BackButton title="Create a Cleaning Request" className='text-[#2DBEFF]' />
          </div>

          {/* Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={handlers.handleSubmit}
            initialValues={{ sendToFavorites: true }}
          >
            {/* Property Selection */}
            <Form.Item
              name="property"
              label={<Text strong>Select Property</Text>}
              rules={[{ required: true, message: 'Please select a property' }]}
            >
              <Select
                size="large"
                placeholder="Choose a property..."
                options={propertyOptions}
                optionLabelProp="label"
              />
            </Form.Item>

            {/* Date and Time */}
            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item
                  name="date"
                  label={
                    <Space>
                      <Calendar className="w-4 h-4" />
                      <Text strong>Date</Text>
                    </Space>
                  }
                  rules={[{ required: true, message: 'Please select a date' }]}
                >
                  <DatePicker
                    size="large"
                    style={{ width: '100%' }}
                    disabledDate={(current) => current && current < dayjs().startOf('day')}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  name="startTime"
                  label={
                    <Space>
                      <Clock className="w-4 h-4" />
                      <Text strong>Start Time</Text>
                    </Space>
                  }
                  rules={[{ required: true, message: 'Please select start time' }]}
                >
                  <DatePicker.TimePicker size="large" style={{ width: '100%' }} format="HH:mm" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  name="endTime"
                  label={
                    <Space>
                      <Clock className="w-4 h-4" />
                      <Text strong>End Time</Text>
                    </Space>
                  }
                  rules={[{ required: true, message: 'Please select end time' }]}
                >
                  <DatePicker.TimePicker size="large" style={{ width: '100%' }} format="HH:mm" />
                </Form.Item>
              </Col>
            </Row>

            {/* Cleaning Options */}
            <Form.Item
              name="bedLinens"
              label={<Text strong>How would you like the bed linens be handled?</Text>}
              rules={[{ required: true, message: 'Please select linen handling option' }]}
            >
              <div>
                <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
                  {CLEANING_OPTIONS.map((option) => (
                    <CleaningOptionCard
                      key={option.value}
                      option={option}
                      isSelected={form.getFieldValue('bedLinens') === option.value.toString()}
                      onSelect={(value) => {
                        form.setFieldValue('bedLinens', value);
                      }}
                    />
                  ))}
                </Space>
              </div>
            </Form.Item>

            {/* Drop-off Address */}
            <Form.Item
              name="dropOffAddress"
              label={
                <Space>
                  <MapPin className="w-4 h-4" />
                  <Text strong>Drop-off Address</Text>
                </Space>
              }
              rules={[{ required: true, message: 'Please enter drop-off address' }]}
            >
              <Input
                size="large"
                placeholder="Enter drop-off location"
                prefix={<MapPin className="w-4 h-4 text-gray-400" />}
              />
            </Form.Item>

            {/* Rate Adjuster */}
            <Form.Item rules={[{ required: true, message: 'Please select a rate' }]} label={<Text strong>Select a rate</Text>}>
              <RateAdjuster rate={rate} onChange={handlers.handleRateChange} />
            </Form.Item>

            {/* Price List Collapse */}
            <Collapse
              ghost
              expandIcon={({ isActive }) => isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            >
              <Panel
                header={
                  <Button
                    type="primary"
                    block
                    size="large"
                    style={{ backgroundColor: '#2DBEFF' }}
                  >
                    View Pricing Guide
                  </Button>
                }
                key="1"
                showArrow={false}
              >
                <Card style={{ marginTop: '16px' }}>
                  <PriceTable />
                </Card>
              </Panel>
            </Collapse>

            {/* Favorites Toggle */}
            <Card style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%)', marginTop: '16px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <Space>
                    <Sparkles className="w-5 h-5 text-green-600" />
                    <Text strong>Send to Favorite Cleaners</Text>
                  </Space>
                  <div style={{ marginTop: '4px' }}>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Priority access to your preferred cleaning professionals
                    </Text>
                  </div>
                </div>
                <Switch
                  checked={sendToFavorites}
                  onChange={handlers.handleFavoritesToggle}
                  size="default"
                />
              </div>
            </Card>

            {/* Submit Button */}
            <Form.Item style={{ marginTop: '24px', marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={isSubmitting}
                icon={<CheckCircle className="w-5 h-5" />}
                style={{
                  height: '56px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: '#2DBEFF'
                }}
              >
                {isSubmitting ? 'Processing...' : 'Create Now'}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  )
}