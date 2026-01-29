'use client';

import { useEffect, useState, useCallback, useTransition } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Globe, Menu, X, Check } from 'lucide-react';
import { Radio, Space } from 'antd';

import Cookies from 'js-cookie';
import { cn } from '@/lib/utils';
import { IMAGE_CONSTANTS } from '@/assets/images/image.index';
import { NavigationItems } from './navbar-related/NavigationItems';
import { ProfileAvatar } from './navbar-related/ProfileAvatar';
import { ProfileDropdown } from './navbar-related/ProfileDropdown';
import { AuthButtons } from './navbar-related/AuthButtons';
import { useTranslations } from "next-intl";
import { message } from 'antd';

export interface MenuItem {
    label: string;
    href: string;
    onPointerDown?: () => void;
    icons?: string;
}

export const profile: any = {
    name: 'Tanjim',
    email: 'tanjim@gmail.com',
    profile_image: 'https://placehold.co/600x400',
    role: '',
    user: false
}

const LANGUAGES = [
    {
        value: 'en',
        label: 'English',
        nativeLabel: 'English',
        flag: '🇬🇧',
    },
    {
        value: 'fr',
        label: 'French',
        nativeLabel: 'Français',
        flag: '',
    },
];

export const NavigationMenuBar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params.locale as string || 'en';

    const t = useTranslations('Navigation')


    const NON_USER_MENU_ITEMS: MenuItem[] = [
        { label: t("home"), href: '/' },
        { label: t("aboutUs"), href: '/about-us' },
        { label: t("contactUs"), href: '/contact-us' },
        { label: t("faq"), href: '/faq' },
    ];

    const ORGANIZER_MENU_ITEMS: MenuItem[] = [
        { label: t("home"), href: '/' },
        { label: t("jobs"), href: '/jobs' },
        { label: t("calendar"), href: '/cleaner-calender' },
        { label: t("contactUs"), href: '/contact-us' },
    ];

    const HOST_USER_MENU_ITEMS: MenuItem[] = [
        { label: t("home"), href: '/' },
        { label: t("properties"), href: '/properties' },
        { label: t("calendar"), href: '/calendar' },
        { label: t("contactUs"), href: '/contact-us' },
    ];


    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const [isPending, startTransition] = useTransition()

    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

            const newPath = pathWithoutLocale === '/'
                ? `/${newLocale}`
                : `/${newLocale}${pathWithoutLocale}`;

            router.push(newPath);

            message.destroy();
            message.success(`Language changed to ${newLocale === 'en' ? 'English' : 'French'}`);
            setIsLanguageModalOpen(false);
        });
        Cookies.set("NEXT_LOCALE", newLocale, { expires: 7 });
    };
    const handleLogout = useCallback(() => {
        router.push("/login");
    }, [router]);

    const handleToggleDropdown = useCallback(() => {
        setIsDropdownOpen(!isDropdownOpen);
    }, [isDropdownOpen]);



    const getMenuItems = useCallback(() => {
        if (!profile) return NON_USER_MENU_ITEMS;

        switch (profile?.role) {
            case 'host':
                return HOST_USER_MENU_ITEMS;
            case 'cleaner':
                return ORGANIZER_MENU_ITEMS;
            default:
                return NON_USER_MENU_ITEMS;
        }
    }, [profile]);
    const menuItems = getMenuItems() || [];


    if (!profile?.user) {
        return (
            <header className="sticky bg-[#40C4FF] top-0 left-0 right-0 z-20 px-4 sm:px-8 lg:px-16 py-4 sm:py-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10">
                            {/* <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 5L15 15L25 20L20 35L30 20L20 15L25 5L20 5Z" fill="#10B981" />
                                <path d="M25 5L30 15L35 10L30 20L25 15L25 5Z" fill="#EC4899" />
                            </svg> */}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold">
                            <span className="text-white">AirMenage</span>
                        </div>
                    </div>
                    <div className="flex gap-2 sm:gap-4">

                        <button
                            onClick={() => setIsLanguageModalOpen(true)}
                            className="text-white hover:text-gray-200 text-sm sm:text-base p-2"
                        >
                            <Globe size={20} />
                        </button>
                        <button onClick={() => router.push("/register")} className="text-gray-700 hover:text-gray-900 text-sm sm:text-base">Register</button>
                        <button onClick={() => router.push("/login")} className="border border-gray-300 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base hover:bg-gray-50 flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Log in
                        </button>
                    </div>
                </div>
                <LanguageModal isLanguageModalOpen={isLanguageModalOpen} setIsLanguageModalOpen={setIsLanguageModalOpen} handleLanguageChange={handleLanguageChange} currentLocale={currentLocale} />
            </header>
        )
    }


    return (
        <header className="sticky top-0 z-40 h-20 backdrop-blur-md border-b border-gray-200 supports-backdrop-blur:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0"
                    >
                        <Link
                            href="/"
                            className="flex items-center text-xl font-bold text-gray-900"
                            aria-label="Home"
                        >
                            <Image
                                src={IMAGE_CONSTANTS.brandLogo}
                                alt="Brand Logo"
                                width={400}
                                height={400}
                                className="w-auto h-16 lg:h-20 object-contain"
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <NavigationItems items={menuItems} />
                    </nav>

                    {/* Desktop Auth Section */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* isLoading ? <div className="w-20 h-8 animate-pulse rounded-md bg-gray-300"></div> : <AuthButtons /> */}
                        {!profile?.user ? (
                            <AuthButtons />
                        ) : (
                            <div className="relative">
                                <ProfileAvatar
                                    user={profile}
                                    isDropdownOpen={isDropdownOpen}
                                    onToggleDropdown={() => handleToggleDropdown()}
                                />
                                <ProfileDropdown
                                    user={profile}
                                    profile={profile}
                                    isOpen={isDropdownOpen}
                                    onClose={() => handleToggleDropdown()}
                                    onLogout={handleLogout}
                                />
                            </div>
                        )}
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onPointerDown={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    <button
                        onClick={() => setIsLanguageModalOpen(true)}
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Language"
                    >
                        <Globe size={24} />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden absolute overflow-y-auto min-h-screen top-full left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg"
                    >
                        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex flex-col">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.onPointerDown ? (
                                            <button
                                                onPointerDown={() => {
                                                    item.onPointerDown?.();
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="w-full text-left flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 text-base"
                                            >
                                                {item.icons && item.icons} {item.label}
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className={cn(
                                                    "block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 text-base",
                                                    pathname === item.href && "text-blue-600 font-semibold"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsLanguageModalOpen(true);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 text-base"
                                >
                                    <Globe className="h-5 w-5" />
                                    Language
                                </button>
                                <div className="border-t  border-gray-200">
                                    {profile?.user ? (
                                        <div className="flex  flex-col space-y-3">
                                            <ProfileDropdown
                                                user={profile}
                                                isOpen={isDropdownOpen}
                                                onClose={() => handleToggleDropdown()}
                                                onLogout={() => handleLogout()}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col space-y-3">
                                            <AuthButtons />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const LanguageModal = ({ isLanguageModalOpen, setIsLanguageModalOpen, handleLanguageChange, currentLocale }
    :
    { isLanguageModalOpen: boolean, setIsLanguageModalOpen: (value: boolean) => void, handleLanguageChange: (language: string) => void, currentLocale: string }) => {
    return (
        <AnimatePresence>
            {isLanguageModalOpen && (
                <div
                    className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-999 p-4"
                    onClick={() => setIsLanguageModalOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Select Language</h3>
                            <button
                                onClick={() => setIsLanguageModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {LANGUAGES.map((language) => (
                                <div
                                    key={language.value}
                                    onClick={() => handleLanguageChange(language.value)}
                                    className={`
                                            flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                            ${currentLocale === language.value
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }
                                        `}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{language.flag}</span>
                                        <div>
                                            <div className="font-medium">{language.label}</div>
                                            <div className="text-sm text-gray-500">{language.nativeLabel}</div>
                                        </div>
                                    </div>
                                    {currentLocale === language.value && (
                                        <Check className="text-blue-500" size={20} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}