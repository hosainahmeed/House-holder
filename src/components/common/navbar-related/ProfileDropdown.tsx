'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseBusiness, Calendar, LogOut, MessageCircle, Star } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';
import { GrFavorite } from 'react-icons/gr';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { useTranslations } from 'next-intl';


export const ProfileDropdown = ({ user, isOpen, profile, onClose, onLogout }: any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const t = useTranslations("menu");

    const handleNavigate = (path: string) => {
        router.push(path);
        onClose();
    };

    const getMenuItems = () => {
        if (user?.role === 'host') {
            return [
                {
                    label: t("host.my_properties"),
                    icons: <Calendar size={20} />,
                    onPointerDown: () => handleNavigate('/my-shortlisted-events')
                },
                {
                    label: t("host.messages"),
                    icons: <MessageCircle size={20} />,
                    onPointerDown: () => handleNavigate('/chat')
                },
                {
                    label: t("host.profile_settings"),
                    icons: <CgProfile size={20} />,
                    onPointerDown: () => handleNavigate('/my-profile-setting')
                },
                {
                    label: t("host.favorite_cleaner"),
                    icons: <GrFavorite size={20} />,
                    onPointerDown: () => handleNavigate('/favorite-cleaner')
                },
                {
                    label: t("host.transactions"),
                    icons: <LuChartNoAxesCombined size={20} />,
                    onPointerDown: () => handleNavigate('/transaction')
                },
            ];
        }

        if (user?.role === 'cleaner') {
            return [
                {
                    label: t("cleaner.my_jobs"),
                    icons: <BriefcaseBusiness />,
                    onPointerDown: () => handleNavigate('/jobs')
                },
                {
                    label: t("cleaner.messages"),
                    icons: <MessageCircle size={20} />,
                    onPointerDown: () => handleNavigate('/chat')
                },
                {
                    label: t("cleaner.profile_settings"),
                    icons: <CgProfile size={20} />,
                    onPointerDown: () => handleNavigate('/my-profile-setting')
                },
                {
                    label: t("cleaner.rating_review"),
                    icons: <Star size={20} />,
                    onPointerDown: () => handleNavigate('/all-review')
                },
                {
                    label: t("cleaner.my_income"),
                    icons: <LuChartNoAxesCombined size={20} />,
                    onPointerDown: () => handleNavigate('/my-income')
                },
            ];
        }

        return [];
    };

    const menuItems = getMenuItems()
    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute hidden lg:block right-0 top-full mt-2 w-80 bg-white  rounded-lg shadow-lg border border-gray-200 z-50"
                    >
                        {/* User Info Section */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                    {profile?.profile_image ? (
                                        <Image
                                            src={profile?.profile_image}
                                            alt={profile?.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        profile?.name?.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate">
                                        {profile?.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">{profile?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                            {menuItems?.map((item: any, index: number) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onPointerDown={item.onPointerDown}
                                    className="w-full flex cursor-pointer items-center gap-2 text-left py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                >
                                    {item?.icons}  {item.label}
                                </motion.button>
                            ))}
                        </div>

                        {/* Sign Out Section */}
                        <div
                            onClick={() => {
                                router.push("/login");
                            }}
                            className="p-2 border-t border-gray-100">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                onPointerDown={onLogout}
                                className="w-full flex items-center gap-2 text-left  py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
                            >
                                <LogOut className="w-5 h-5" />   Sign Out
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="lg:hidden ">
                <div className="pb-12">
                    {menuItems.map((item: any, index: number) => (
                        <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onPointerDown={item.onPointerDown}
                            className="w-full flex cursor-pointer items-center gap-2 text-left  py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                            {item.icons && item.icons}  {item.label}
                        </motion.button>
                    ))}
                </div>
                <div onClick={() => {
                    router.push("/login");
                }} className="border-t border-gray-100">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onPointerDown={onLogout}
                        className="w-full flex items-center gap-2 text-left  py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
                    >
                        <LogOut className="w-5 h-5" />   Sign Out
                    </motion.button>
                </div>
            </div>
        </div>
    );
};