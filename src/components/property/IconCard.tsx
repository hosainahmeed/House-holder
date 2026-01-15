import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  title: string;
  icon: LucideIcon | any;
}

export default function IconCard({ title, icon: Icon }: IconCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-300 shadow-sm flex flex-col items-center gap-2">
      <Icon className="w-7 h-7 text-[#2DBEFF]" />
      <p className="font-semibold text-gray-700 text-center">{title}</p>
    </div>
  );
}
