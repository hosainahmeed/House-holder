'use client'
import { ICONS } from '@/assets/icons/index.icons'
import UpdateProfileForm from '@/components/form/UpdateProfileForm'
import BackButton from '@/components/ui/BackButton'
import { Button } from '@/components/ui/button'
import { Divider, Modal } from 'antd'
import Image from 'next/image'
import { useState } from 'react'

function page() {
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] = useState(false)

  const data = [
    {
      title: 'Full Name',
      value: 'Hridoy hosaain'
    },
    {
      title: 'Email address',
      value: 'esteban_schiller@gmail.com'
    },
    {
      title: 'Age',
      value: '20'
    },
    {
      title: 'Address',
      value: 'Street, house number'
    },
    {
      title: 'city',
      value: 'Berlin'
    },
    {
      title: 'country',
      value: 'France'
    },
    {
      title: 'Verification Your SIRET Number',
      value: '5251521326'
    }
  ]
  return (
    <div className='container mx-auto'>
      <BackButton title='Profile Info' className='mb-3 text-[#2DBEFF]' />
      <div className="relative w-24 h-24">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image src='https://placehold.co/400' alt='placeholder' width={150} height={150} className='w-full h-full object-cover' />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center">
          <Image src={ICONS.valid} alt='placeholder' width={150} height={150} className='w-full h-full object-cover' />
        </div>
      </div>
      <Divider />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {data.map((item: any, index: number) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>
      <Button
        onClick={() => setIsUpdateProfileModalOpen(true)}
        className='mt-4 cursor-pointer'>

        Update Profile
      </Button>
      <Modal width={800} centered footer={null} maskClosable={false} destroyOnHidden open={isUpdateProfileModalOpen} onCancel={() => setIsUpdateProfileModalOpen(false)}>
        <UpdateProfileForm />
      </Modal>
    </div>
  )
}

export default page

const Card = ({ title, value }: any) => {
  return (
    <div className="shadow rounded-2xl p-4 border border-gray-300 hover:border-gray-400 transition-colors duration-200">
      <div>
        <h1 className='font-medium text-lg'>{title}</h1>
        <p className='text-gray-500'>{value}</p>
      </div>
    </div>
  )
}