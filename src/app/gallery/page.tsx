"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { ArrowLeft, Filter, Image, Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedImage, setSelectedImage] = useState<any>(null)

    // Sample gallery images from the available photos
    const galleryImages = [
        {
            id: 1,
            src: "/images/img/photos/camp_19.jpg",
            alt: "Eagles Camp 2019",
            category: "Eagles Camp",
            title: "Eagles Camp 2019",
            date: "December 2019",
            location: "Accra Conference Center",
            participants: "150+ Attendees"
        },
        {
            id: 2,
            src: "/images/img/photos/love-feast.jpeg",
            alt: "Love Feasts Meeting",
            category: "Love Feasts",
            title: "Love Feasts Monthly Meeting",
            date: "January 2024",
            location: "Online & Physical Venues",
            participants: "200+ Participants"
        },
        {
            id: 3,
            src: "/images/img/photos/ec_2024.jpeg",
            alt: "Executive Council 2024",
            category: "General Events",
            title: "Executive Council Meeting 2024",
            date: "March 2024",
            location: "CampusGem Headquarters",
            participants: "25 Leaders"
        },
        {
            id: 4,
            src: "/images/img/photos/loyalty_camp.jpg",
            alt: "Loyalty Camp",
            category: "Eagles Camp",
            title: "Loyalty Camp Retreat",
            date: "June 2023",
            location: "Mountain Retreat Center",
            participants: "80+ Attendees"
        },
        {
            id: 5,
            src: "/images/img/photos/ntow.jpg",
            alt: "Community Outreach",
            category: "General Events",
            title: "Community Outreach Program",
            date: "August 2023",
            location: "Local Community",
            participants: "50+ Volunteers"
        },
        {
            id: 6,
            src: "/images/img/photos/sammy.jpg",
            alt: "Leadership Training",
            category: "Mentoring HUB",
            title: "Leadership Training Session",
            date: "October 2023",
            location: "Training Center",
            participants: "30 Leaders"
        }
    ]

    const categories = ['All', 'Eagles Camp', 'Love Feasts', 'Mentoring HUB', 'ICT Training', 'Fun Fair', 'CG Marriages', 'General Events']

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    Back to Home
                </Link>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Image className="w-4 h-4" />
                        Gallery
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        {siteContent.gallery.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.gallery.subtitle}
                    </p>
                    <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                        {siteContent.gallery.description}
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Filter className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 font-medium">Filter by Category:</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {image.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                                    <div className="flex items-center gap-4 text-white text-sm">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{image.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            <span>{image.participants}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{image.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{image.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="w-4 h-4" />
                                    <span className="text-sm">{image.participants}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Image Modal */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-96 object-cover"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{selectedImage.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{selectedImage.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>{selectedImage.participants}</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedImage.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Be Part of Our Story
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Join our community and create memories that will last a lifetime. Your journey with CampusGem starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/activities"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Join Our Activities
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 