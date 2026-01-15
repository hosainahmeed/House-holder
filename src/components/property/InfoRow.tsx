import { LucideIcon } from 'lucide-react';

interface InfoRowProps {
  icon: LucideIcon;
  label: string;
}

export default function InfoRow({ icon: Icon, label }: InfoRowProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm flex items-center gap-3">
      <Icon className="w-5 h-5 text-[#2DBEFF]" />
      <span className="font-medium text-gray-700">{label}</span>
    </div>
  );
}
