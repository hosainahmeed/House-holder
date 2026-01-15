interface PriceCardProps {
  price: string;
}

export default function PriceCard({ price }: PriceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm flex justify-between items-center">
      <h2 className="text-3xl font-bold text-[#2DBEFF]">{price}</h2>
    </div>
  );
}
