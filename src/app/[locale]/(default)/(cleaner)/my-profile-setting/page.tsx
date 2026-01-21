'use client'
import { profile } from '@/components/common/NavigationMenuBar'
import BackButton from '@/components/ui/BackButton'
import { Delete, Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdPermIdentity } from 'react-icons/md'

function page() {
  const t = useTranslations('my-profile-setting')
  const [role, setRole] = useState('')
  useEffect(() => {
    const role = profile.role
    setRole(role)
  }, [])
  const data = [
    {
      title: t('profile_info'),
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/info'
    },
    {
      title: t('identity_verification'),
      icon: <MdPermIdentity size={20} />,
      path: '/my-profile-setting/identity-verification'
    },
    {
      title: t('legal_notices'),
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/legal-notices'
    },
    ...(role === 'cleaner' ? [{
      title: t('payment_and_translation'),
      icon: <CgProfile size={20} />,
      path: '/wallet_payment_summary'
    }] : []),
    {
      title: t('language'),
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/language'
    },
    {
      title: t('change_password'),
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/change-password'
    },
    {
      title: t('delete_account'),
      icon: <Trash2 size={20} />,
      path: '/my-profile-setting/delete-account'
    },
  ]
  return (
    <div className='container mx-auto'>
      <BackButton title={t('profile_and_account_settings')} className='text-[#2DBEFF]' />
      <div className='grid grid-cols-1 gap-4 mt-4'>
        {data.map((item: any, index: number) => (
          <Card key={index} title={item?.title} icon={item?.icon} path={item?.path} />
        ))}
      </div>
    </div>
  )
}

export default page

const Card = ({ title, icon, path }: any) => {
  return (
    <div className="shadow rounded-2xl p-4 cursor-pointer border border-gray-300 hover:border-gray-400 transition-colors duration-200">
      <Link href={path}>
        <div className='flex items-center gap-2'>
          {icon}
          <p>{title}</p>
        </div>
      </Link>
    </div>
  )
}