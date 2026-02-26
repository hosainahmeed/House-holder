'use client'
import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import PropertyCard from '@/components/cards/PropertyCard';
import { useRouter } from 'next/navigation';

const onChange = (key: string) => {
  console.log(key);
};


const RenderJobsPage = ({ value }: { value: string }) => {
  const router = useRouter()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <PropertyCard status={value} onclick={(id) => router.push(`/jobs/${id}`)} />
    </div>
  )
}

const items: TabsProps['items'] = [
  { key: 'all', label: 'All Jobs', children: <RenderJobsPage value="all" /> },
  { key: 'pending', label: 'Pending', children: <RenderJobsPage value="pending" /> },
  { key: 'in-progress', label: 'In Progress', children: <RenderJobsPage value="in-progress" /> },
  { key: 'completed', label: 'Completed', children: <RenderJobsPage value="completed" /> },
];

const Page: React.FC = () => {
  return (
    <div className='container py-12 mx-auto'>
      <ConfigProvider theme={{ token: { colorPrimary: '#fff', colorBgContainer: '#2DBEFF' } }}>
        <Tabs
          defaultActiveKey="all"
          items={items}
          type="card"
          onChange={onChange}
          indicator={{ size: (origin) => origin - 20, align: 'center' }}
        />
      </ConfigProvider>
    </div>
  );
};

export default Page;

