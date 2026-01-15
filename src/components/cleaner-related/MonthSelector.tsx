import { MonthData } from "@/app/(default)/(cleaner)/cleaner-calender/page"
import { cn } from "@/app/lib/utils"
import { Tooltip } from "antd"

function MonthSelector({
    data,
    selectedMonth,
    onSelect,
}: {
    data: MonthData[]
    selectedMonth: MonthData | null
    onSelect: (month: MonthData) => void
}) {
    return (
        <div className="grid border border-gray-200 rounded-xl divide-x divide-y divide-gray-200 grid-cols-12  overflow-x-auto">
            {data.map((item) => {
                const isActive = selectedMonth?.month === item.month
                return (
                    <Tooltip
                        key={item.month}
                        placement="bottom"
                        title={`${item.numberOfWork} ${item.numberOfWork > 1 ? 'works' : 'work'}`}
                    >
                        <div
                            onClick={() => onSelect(item)}
                            className={cn(`col-span-3 sm:col-span-2 flex flex-col items-center p-3 cursor-pointer transition`, {
                                'bg-[#2DBEFF] text-white': isActive,
                                'hover:bg-gray-100': !isActive,
                            })}
                        >
                            <span className="text-xs font-medium">{item.month}</span>

                            <div className={cn(`w-9 h-9 mt-2 rounded-full flex items-center justify-center`, {
                                'bg-white text-[#2DBEFF]': isActive,
                                'bg-[#2DBEFF] text-white': !isActive,
                            })}>
                                {item.numberOfWork}
                            </div>

                            <div className="flex gap-1 mt-2">
                                {Array.from({ length: item.numberOfWork }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-black'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default MonthSelector