'use client'
import { Form, message } from "antd"
import { useCallback, useState } from "react"

export const useFormHandlers = () => {
  const [form] = Form.useForm()
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [rate, setRate] = useState(50)
  const [sendToFavorites, setSendToFavorites] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCleaningOptionChange = useCallback((value: number) => {
    setSelectedOption(value)
    form.setFieldValue('bedLinens', value)
  }, [form])

  const handleRateChange = useCallback((value: number) => {
    setRate(value)
  }, [])

  const handleFavoritesToggle = useCallback((checked: boolean) => {
    setSendToFavorites(checked)
  }, [])

  const handleSubmit = useCallback(async (values: any) => {
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', { ...values, rate, sendToFavorites })
      message.success('Booking Confirmed! Your cleaning service has been scheduled successfully.')
      form.resetFields()
      setSelectedOption(null)
      setRate(50)
      setSendToFavorites(true)
    } catch (error) {
      console.error('Submission error:', error)
      message.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [rate, sendToFavorites, form])

  return {
    form,
    selectedOption,
    rate,
    sendToFavorites,
    isSubmitting,
    handlers: {
      handleCleaningOptionChange,
      handleRateChange,
      handleFavoritesToggle,
      handleSubmit
    }
  }
}