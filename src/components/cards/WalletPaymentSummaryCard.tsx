import { IWalletPaymentSummaryCardProps } from '@/app/[locale]/(default)/(cleaner)/wallet_payment_summary/page'
import { cn } from '@/lib/utils'
import React from 'react'

const statusStyles: Record<string, string> = {
  succeed: 'bg-emerald-500 text-white',
  pending: 'bg-yellow-400 text-white',
  failed: 'bg-red-500 text-white',
}

const WalletPaymentSummaryCard: React.FC<IWalletPaymentSummaryCardProps> = ({
  name,
  status,
  img,
  price,
  transactionId,
  date,
  apartment,
  rating,
}) => {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Status badge */}
      <span
        className={cn(
          'absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold capitalize',
          statusStyles[status] || 'bg-gray-300 text-gray-800'
        )}
      >
        {status}
      </span>

      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-100"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{apartment}</p>
          <p className="text-xs text-gray-400">{date}</p>

          {/* Rating */}
          <div className="mt-1 flex w-fit items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5">
            <span className="text-xs font-medium text-gray-700">{rating}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.86382 0.722089L6.74372 2.49644C6.86371 2.74343 7.18367 2.98035 7.45364 3.02572L9.04847 3.29288C10.0684 3.46426 10.3083 4.2103 9.57341 4.94625L8.33355 6.19636C8.12357 6.40807 8.00858 6.81637 8.07357 7.10874L8.42854 8.65625C8.7085 9.88116 8.06358 10.355 6.98869 9.71481L5.49386 8.82259C5.22389 8.66129 4.77894 8.66129 4.50397 8.82259L3.00913 9.71481C1.93925 10.355 1.28932 9.87611 1.56929 8.65625L1.92425 7.10874C1.98925 6.81637 1.87426 6.40807 1.66428 6.19636L0.424419 4.94625C-0.3055 4.2103 -0.0705258 3.46426 0.949362 3.29288L2.54419 3.02572C2.80916 2.98035 3.12912 2.74343 3.24911 2.49644L4.12901 0.722089C4.60896 -0.240696 5.38887 -0.240696 5.86382 0.722089Z"
                fill="#FDBA45"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px w-full bg-gray-100" />

      {/* Details */}
      <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
        <div>
          <p className="text-gray-400">Amount</p>
          <p className="font-medium text-gray-900">{price}</p>
        </div>
        <div>
          <p className="text-gray-400">Transaction ID</p>
          <p className="font-medium text-gray-900 truncate">{transactionId}</p>
        </div>
        <div>
          <p className="text-gray-400">Date</p>
          <p className="font-medium text-gray-900">{date}</p>
        </div>
        <div>
          <p className="text-gray-400">Apartment</p>
          <p className="font-medium text-gray-900">{apartment}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-end gap-3">
        <button className="rounded-lg cursor-pointer border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
        <button className="rounded-lg cursor-pointer bg-[#2DBEFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#1aa8e8]">
          View Details
        </button>
      </div>
    </div>
  )
}

export default WalletPaymentSummaryCard