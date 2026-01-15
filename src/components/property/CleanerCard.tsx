import Image from 'next/image';
import { Button } from 'antd';

interface Cleaner {
  _id: number;
  name: string;
  image: string;
  address: string;
}

interface CleanerCardProps {
  cleaner: Cleaner;
  setShowAfterOverview: (value: boolean) => void;
}

export default function CleanerCard({ cleaner, setShowAfterOverview }: CleanerCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-300 shadow-sm">
      <div className="flex items-center gap-3">
        <Image
          src={cleaner.image}
          alt={cleaner.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium line-clamp-1">{cleaner.name}</p>
          <p className="text-sm text-gray-500 line-clamp-1">{cleaner.address}</p>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={() => setShowAfterOverview(true)} type="primary">Accept</Button>
        <Button danger>Decline</Button>
      </div>
    </div>
  );
}
