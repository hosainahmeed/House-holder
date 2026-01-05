import { IMAGE_CONSTANTS } from "@/assets/images/image.index";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-linear-to-r mt-12 from-blue-900 to-black text-white py-12 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src={IMAGE_CONSTANTS.brandLogo} alt="Logo" width={80} height={80} className="rounded-lg" />
                        </div>
                        <p className="text-gray-300 text-sm">
                            Empowering parents, tutors, and students through a smart and transparent learning platform
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <FaFacebook size={20} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <span>111 Mohakhali, Dhaka, DH 1515, Bangladesh.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="mailto:bdcalling@gmail.com" className="hover:underline">bdcalling@gmail.com</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="tel:+88015888889999" className="hover:underline">+88015-88888-9999</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Account</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/my-account" className="hover:underline">My Account</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/login" className="hover:underline">Login / Register</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/about-us" className="hover:underline">About Us</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-black mr-2">▶</span>
                                <Link href="/faq" className="hover:underline">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
