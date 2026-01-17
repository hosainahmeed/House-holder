import { PRICE_TABLE_DATA } from "@/constant/property.create"
import { Space, Typography } from "antd"
import { Sparkles } from "lucide-react"

const { Text } = Typography
export const PriceTable: React.FC = () => {
    const columns = [
        {
            title: (
                <Space>
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Property Type</span>
                </Space>
            ),
            dataIndex: 'propertyType',
            key: 'propertyType',
            render: (text: string) => <Text strong>{text}</Text>
        },
        {
            title: 'Surface Area',
            dataIndex: 'surface',
            key: 'surface',
        },
        {
            title: 'Price Range',
            dataIndex: 'price',
            key: 'price',
            render: (text: string) => <Text strong style={{ color: '#1890ff' }}>{text}</Text>
        }
    ]

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b-2 border-gray-200">
                        {columns.map((col) => (
                            <th key={col.key} className="text-left p-4 font-semibold">
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {PRICE_TABLE_DATA.map((row) => (
                        <tr key={row.key} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4">
                                <Text strong>{row.propertyType}</Text>
                            </td>
                            <td className="p-4">{row.surface}</td>
                            <td className="p-4">
                                <Text strong style={{ color: '#1890ff' }}>{row.price}</Text>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
