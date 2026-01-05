'use client';


import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const AuthButtons = () => {
    return (
        <div className="flex items-center space-x-4">
            <Link href="/sign-in">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#2DBEFF] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#1A8CD8] transition-colors"
                >
                    Login
                </motion.button>
            </Link>
            <Link href="/choose-role">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-[#2DBEFF] border cursor-pointer text-[#2DBEFF] px-4 py-2 rounded hover:bg-[#9A0826] transition-colors"
                >
                    Register
                </motion.button>
            </Link>
        </div>
    );
};