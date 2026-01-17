'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowBigLeftDashIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Types
interface User {
    id: string;
    name: string;
    email: string;
    image: string;
}

interface Achievement {
    date: string; // YYYY-MM-DD format
    user: User;
    isGuestReservation?: boolean;
}

// Sample data
const sampleAchievements: Achievement[] = [
    {
        date: '2026-01-11',
        user: {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
        }
    },
    {
        date: '2026-01-17',
        user: {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
        }
    },
    {
        date: '2026-02-11',
        user: {
            id: '3',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
        },
        isGuestReservation: true
    },
    {
        date: '2026-02-18',
        user: {
            id: '4',
            name: 'Sarah Williams',
            email: 'sarah@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
        },
        isGuestReservation: true
    },
    {
        date: '2026-03-01',
        user: {
            id: '5',
            name: 'Alex Brown',
            email: 'alex@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
        }
    },
    {
        date: '2026-03-18',
        user: {
            id: '6',
            name: 'Emily Davis',
            email: 'emily@example.com',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
        }
    }
];

// Utility functions
const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};

const formatDate = (year: number, month: number, day: number): string => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

const getMonthsWithAchievements = (achievements: Achievement[]): Set<number> => {
    const months = new Set<number>();
    achievements.forEach(achievement => {
        const date = new Date(achievement.date);
        months.add(date.getMonth());
    });
    return months;
};

// Components
interface TooltipProps {
    user: User;
    position: { x: number; y: number };
}

const UserTooltip: React.FC<TooltipProps> = ({ user, position }) => {
    return (
        <div
            className="absolute z-50 bg-white rounded-lg shadow-lg p-3 border border-gray-200 pointer-events-none"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -120%)',
                minWidth: '200px'
            }}
        >
            <div className="flex items-center gap-3">
                <img
                    src={user?.image}
                    alt={user?.name}
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">{user?.name}</p>
                    <p className="text-xs text-gray-600 truncate">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

interface DayCellProps {
    day: number | null;
    achievement: Achievement | null;
    onHover: (achievement: Achievement | null, element: HTMLElement | null) => void;
}

const DayCell: React.FC<DayCellProps> = ({ day, achievement, onHover }) => {
    console.log(achievement)
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (achievement) {
            onHover(achievement, e.currentTarget);
        }
    };

    const handleMouseLeave = () => {
        onHover(null, null);
    };

    if (day === null) {
        return <div className="h-24 rounded-xl border border-gray-200" />;
    }

    return (
        <div
            className={cn(
                'h-24 border border-gray-200 rounded-xl flex items-start justify-center p-1 relative',
                achievement ? 'cursor-pointer bg-[#3F3F3F] ' : ''
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cn('text-xs text-gray-600', achievement ? 'text-white' : '')}>{day}</div>
            {achievement && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center overflow-hidden">
                        {achievement.user?.image ? (
                            <img
                                src={achievement.user?.image}
                                alt={achievement.user?.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-white text-sm font-medium">
                                {achievement.user?.name?.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

interface CalendarMonthProps {
    year: number;
    month: number;
    achievements: Achievement[];
    onHover: (achievement: Achievement | null, element: HTMLElement | null) => void;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ year, month, achievements, onHover }) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['SA', 'SU', 'MO', 'TU', 'WE', 'TH', 'FRI'];

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const achievementMap = new Map<string, Achievement>();
    achievements.forEach(achievement => {
        achievementMap.set(achievement.date, achievement);
    });

    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    return (
        <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg text-[#3F3F3F] font-semibold mb-4">{monthNames[month]} {year}</h3>
            <div className="grid grid-cols-7 gap-1">
                {dayNames.map((day, index) => (
                    <div
                        key={index}
                        className="h-8 flex items-center justify-center text-xs font-medium text-gray-600"
                    >
                        {day}
                    </div>
                ))}
                {weeks.map((week, weekIndex) =>
                    week.map((day, dayIndex) => {
                        const dateStr = day ? formatDate(year, month, day) : null;
                        const achievement = dateStr ? achievementMap.get(dateStr) || null : null;
                        return (
                            <DayCell
                                key={`${weekIndex}-${dayIndex}`}
                                day={day}
                                achievement={achievement}
                                onHover={onHover}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

// Main Component
const CleaningCalendar: React.FC = () => {
    const [achievements] = useState<Achievement[]>(sampleAchievements);
    const [hoveredAchievement, setHoveredAchievement] = useState<Achievement | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const currentYear = 2026;
    const monthsWithAchievements = getMonthsWithAchievements(achievements);
    const router = useRouter();

    const handleHover = (achievement: Achievement | null, element: HTMLElement | null) => {
        if (achievement && element) {
            const rect = element.getBoundingClientRect();
            setTooltipPosition({
                x: rect.left + rect.width / 2,
                y: rect.top
            });
            setHoveredAchievement(achievement);
        } else {
            setHoveredAchievement(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div
                onClick={()=>router.back()}
                className="flex w-fit cursor-pointer items-center mb-8 gap-2">
                    <ArrowBigLeftDashIcon className='text-black' />
                    <h1 className="text-3xl font-semibold text-gray-900 underline">Archive Cleanings</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from(monthsWithAchievements)
                        .sort((a, b) => a - b)
                        .map(month => (
                            <CalendarMonth
                                key={month}
                                year={currentYear}
                                month={month}
                                achievements={achievements}
                                onHover={handleHover}
                            />
                        ))}
                </div>

                {monthsWithAchievements.size === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No cleaning achievements yet</p>
                    </div>
                )}

                {hoveredAchievement && (
                    <UserTooltip user={hoveredAchievement?.user} position={tooltipPosition} />
                )}
            </div>
        </div>
    );
};

export default CleaningCalendar;