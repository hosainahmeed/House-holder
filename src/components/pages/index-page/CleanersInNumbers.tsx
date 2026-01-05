'use client'
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CleanersInNumbers() {
    const stats = [
        {
            value: "350+",
            label: "Verified Cleaners",
            description: "Professional cleaners verified with ID and business documents, ready to accept jobs.",
            color: "text-[#22C55E]"
        },
        {
            value: "1,200+",
            label: "Cleaning Jobs Completed",
            description: "Successfully completed cleaning missions with photo validation and host approval.",
            color: "text-[#EF4444]"
        },
        {
            value: "4.8 / 5",
            label: "Average Cleaner Rating",
            description: "High satisfaction score based on real reviews from verified hosts.",
            color: "text-[#3B82F6]"
        },
        {
            value: "100%",
            label: "Secure Payments",
            description: "All payments are processed securely and released only after job validation.",
            color: "text-[#A855F7]"
        }
    ];

    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Cleaners In <span className="text-[#2DBEFF]">Numbers</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We take pride in our network of professional cleaners who deliver exceptional service to our valued customers. Our commitment to quality and reliability is reflected in our growing community and the trust we've built.
                        </p>
                        <Button className="bg-[#2DBEFF] hover:bg-[#1A8CD8] text-white">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    {/* Right side - Stats grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                                transition={{ duration: 0.2 }}
                            >
                                <h3 className={cn("text-3xl font-bold mb-2", stat.color)}>{stat.value}</h3>
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h4>
                                <p className="text-gray-500 text-sm">{stat.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
