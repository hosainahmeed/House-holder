'use client'
import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import PropertyCard from '@/components/cards/PropertyCard';
import { useRouter } from 'next/navigation';
import WalletPaymentSummaryCard from '@/components/cards/WalletPaymentSummaryCard';

const onChange = (key: string) => {
  console.log(key);
};


const WalletPaymentSummary = ({ value }: { value: string }) => {
  const router = useRouter()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <WalletPaymentSummaryCard value={value} />
    </div>
  )
}

const items: TabsProps['items'] = [
  { key: 'all', label: 'My Payment', children: <WalletPaymentSummary value="all" /> },
  { key: 'pending', label: 'Pending', children: <WalletPaymentSummary value="pending" /> },
  { key: 'refound', label: 'Refound', children: <WalletPaymentSummary value="refound" /> },
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

