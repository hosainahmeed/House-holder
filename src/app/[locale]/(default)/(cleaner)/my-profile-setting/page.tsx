import BackButton from '@/components/ui/BackButton'
import { Delete, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { MdPermIdentity } from 'react-icons/md'

function page() {
  const data = [
    {
      title: 'Profile Info',
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/info'
    },
    {
      title: 'Identity Verification',
      icon: <MdPermIdentity size={20} />,
      path: '/my-profile-setting/identity-verification'
    },
    {
      title: 'Legal Notices',
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/legal-notices'
    },
    {
      title: 'Language ',
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/language'
    },
    {
      title: 'Change Password ',
      icon: <CgProfile size={20} />,
      path: '/my-profile-setting/change-password'
    },
    {
      title: 'Delete Account',
      icon: <Trash2 size={20} />,
      path: '/my-profile-setting/delete-account'
    },

  ]
  return (
    <div className='container mx-auto'>
      <BackButton title='Profile & Account Settings' className='text-[#2DBEFF]' />
      <div className='grid grid-cols-1 gap-4 mt-4'>
        {data.map((item: any, index: number) => (
          <Card key={index} title={item.title} icon={item.icon} path={item.path} />
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