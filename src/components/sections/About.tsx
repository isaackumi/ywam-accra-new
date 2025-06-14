'use client';

import { siteContent } from '@/data/content';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Building, Target, ChevronRight, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function About() {
    const [expandedContent, setExpandedContent] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleReadMore = async (content: string) => {
        setIsLoading(true);
        // Simulate loading for better UX
        await new Promise(resolve => setTimeout(resolve, 300));
        setExpandedContent(content);
        setIsLoading(false);
    };

    const handleCloseModal = () => {
        setExpandedContent(null);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        {siteContent.about.title}
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.about.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
                    >
                        <Image
                            src={siteContent.about.image}
                            alt="About LANGUAGE WATCH Foundation (LWF)"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-display font-semibold text-dark-500 mb-4">
                                {siteContent.about.tabs.mission.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {siteContent.about.tabs.mission.content}
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-display font-semibold text-dark-500 mb-4">
                                {siteContent.about.tabs.objectives.title}
                            </h3>
                            <ul className="space-y-4">
                                {siteContent.about.tabs.objectives.content.map((objective: string, index: number) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start group"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{objective}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-display font-semibold text-dark-500 text-center mb-12">
                        Our Programs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Language Training", content: siteContent.about.programs },
                            { icon: Building, title: "Our Center", content: siteContent.about.center },
                            { icon: Target, title: "Vision", content: siteContent.about.tabs.vision.content }
                        ].map((program, index) => (
                            <motion.div
                                key={program.title}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-4 bg-primary-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                                    <program.icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-display font-semibold text-dark-500 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                                    {program.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed line-clamp-3">
                                    {program.content}
                                </p>
                                <button
                                    onClick={() => handleReadMore(program.content)}
                                    className="mt-4 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group-hover:text-primary-600 transition-colors duration-300"
                                >
                                    Read More
                                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {expandedContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-display font-semibold text-dark-500">Program Details</h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{expandedContent}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-2xl flex items-center space-x-4">
                        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                        <span className="text-gray-600">Loading...</span>
                    </div>
                </div>
            )}
        </section>
    );
} 