'use client';
import React from 'react';
import { Card, Button, Badge } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueDashboard: React.FC = () => {
    const chartData = [
        { month: 'Jan', revenue: 290 },
        { month: 'Feb', revenue: 140 },
        { month: 'Mar', revenue: 320 },
        { month: 'Apr', revenue: 200 },
        { month: 'May', revenue: 130 },
        { month: 'Jun', revenue: 280 },
        { month: 'Jul', revenue: 140 },
        { month: 'Aug', revenue: 180 },
        { month: 'Sep', revenue: 220 },
        { month: 'Oct', revenue: 360 },
        { month: 'Nov', revenue: 90 },
        { month: 'Dec', revenue: 270 }
    ];

    const transactionsToCome = [
        { date: 'December 21', program: 'Programme', amount: '€ 1,000' },
        { date: 'December 21', program: 'Programme', amount: '€ 1,000' },
        { date: 'December 23', program: 'Programme', amount: '€ 5,00' }
    ];

    const transactionsEffected = [
        { date: 'December 18', program: 'Programme', amount: '€ 1,000' },
        { date: 'December 16', program: 'Programme', amount: '€ 2,00' },
        { date: 'December 16', program: 'Programme', amount: '€ 5,00' }
    ];

    const revenueReports = [
        { year: '2025', month: 'November', amount: '€ 2,00' },
        { year: '2025', month: 'October', amount: '€ 2,00', isNew: true },
        { year: '2025', month: 'October', amount: '€ 2,00' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto space-y-6">
                {/* Revenue Chart Card */}
                <Card className="shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">
                            Revenue This Month:
                        </h2>
                        <div className="text-2xl sm:text-3xl font-bold text-[#2DBEFF]">
                            € 50.25
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            Coming Soon: <span className="text-gray-700">€ 50.25</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className=" min-w-[600px]">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="month"
                                        tick={{ fontSize: 12 }}
                                        stroke="#999"
                                    />
                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        stroke="#999"
                                        tickFormatter={(value) => `€ ${value}`}
                                    />
                                    <Tooltip
                                        formatter={(value) => [`€ ${value}`, 'Revenue']}
                                        contentStyle={{
                                            borderRadius: '8px',
                                            border: '1px solid #e5e7eb'
                                        }}
                                    />
                                    <Bar
                                        dataKey="revenue"
                                        fill="#2DBEFF"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </Card>

                {/* Transactions Grid */}
                <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Transactions To Come */}
                    <Card
                        title={<span className="text-sm sm:text-base">Transaction To Come</span>}
                        className="shadow-sm"
                    >
                        <div className="space-y-3">
                            {transactionsToCome.map((transaction, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                                >
                                    <div>
                                        <div className="font-medium text-sm sm:text-base text-gray-900">
                                            {transaction.date}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-500">
                                            {transaction.program}
                                        </div>
                                    </div>
                                    <div className="font-semibold text-sm sm:text-base text-gray-900">
                                        {transaction.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Transactions Effected */}
                    <Card
                        title={<span className="text-sm sm:text-base">Transaction Effected</span>}
                        className="shadow-sm"
                    >
                        <div className="space-y-3">
                            {transactionsEffected.map((transaction, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                                >
                                    <div>
                                        <div className="font-medium text-sm sm:text-base text-gray-900">
                                            {transaction.date}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-500">
                                            {transaction.program}
                                        </div>
                                    </div>
                                    <div className="font-semibold text-sm sm:text-base text-gray-900">
                                        {transaction.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Revenue Reports Card */}
                <Card
                    title={
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <span className="text-sm sm:text-base">Show All Transactions Effected</span>
                        </div>
                    }
                    className="shadow-sm"
                >
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">
                            Revenue Reports
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Button size="small" className="text-xs">2025</Button>
                            <Button size="small" type="primary" className="text-xs bg-cyan-400 border-cyan-400">
                                New
                            </Button>
                            <Button size="small" className="text-xs">2025</Button>
                            <Button size="small" className="text-xs">2025</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {revenueReports.map((report, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4 hover:border-cyan-400 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="text-xs text-gray-500">{report.year}</div>
                                    {report.isNew && (
                                        <Badge
                                            count="New"
                                            style={{
                                                backgroundColor: '#2DBEFF',
                                                fontSize: '10px',
                                                height: '18px',
                                                lineHeight: '18px'
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="font-medium text-sm sm:text-base text-gray-900 mb-1">
                                    {report.month}
                                </div>
                                <div className="font-semibold text-base sm:text-lg text-gray-900">
                                    {report.amount}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                backgroundColor: '#2DBEFF',
                                border: '1px solid #2DBEFF',
                                color: '#fff'
                            }}
                        >
                            View all reports
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RevenueDashboard;