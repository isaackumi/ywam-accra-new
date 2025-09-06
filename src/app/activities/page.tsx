"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import {
    Calendar,
    Heart,
    Star,
    Users,
    Laptop,
    Trophy,
    PartyPopper,
    ArrowLeft,
    Clock,
    MapPin,
    ExternalLink,
    ChevronRight
} from 'lucide-react'
import Link from 'next/link'

const iconMap = {
    heart: Heart,
    calendar: Calendar,
    star: Star,
    users: Users,
    laptop: Laptop,
    trophy: Trophy,
    'party-popper': PartyPopper
}

export default function ActivitiesPage() {
    const upcomingEvents = [
        {
            title: "Eagles Camp 2024",
            date: "December 15-20, 2024",
            time: "9:00 AM - 6:00 PM",
            location: "Accra Conference Center",
            description: "Join us for our annual spiritual retreat focused on renewal and transformation.",
            image: "/images/img/photos/camp_19.jpg",
            category: "Eagles Camp"
        },
        {
            title: "Love Feasts Monthly Meeting",
            date: "Every First Saturday",
            time: "2:00 PM - 5:00 PM",
            location: "Online & Physical Venues",
            description: "Monthly relationship seminars with global participation and fellowship.",
            image: "/images/img/photos/love-feast.jpeg",
            category: "Love Feasts"
        },
        {
            title: "ICT Skills Workshop",
            date: "Every Tuesday & Thursday",
            time: "6:00 PM - 8:00 PM",
            location: "CampusGem Training Center",
            description: "Learn essential digital skills for the modern workplace and entrepreneurship.",
            image: "/images/img/photos/ec_2024.jpeg",
            category: "ICT Training"
        }
    ]

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
                        <Calendar className="w-4 h-4" />
                        Our Activities
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        {siteContent.activities.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.activities.subtitle}
                    </p>
                    <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                        {siteContent.activities.description}
                    </p>
                </motion.div>

                {/* Upcoming Events */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        Upcoming Events
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <h3 className="font-bold text-gray-900 text-lg">{event.title}</h3>
                                            <p className="text-blue-600 text-sm font-medium">{event.category}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{event.date} • {event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {event.description}
                                    </p>

                                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                                        Register Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our Programs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.activities.programs.map((program, index) => {
                            const IconComponent = iconMap[program.icon as keyof typeof iconMap]

                            // Fallback to Heart if icon is not found
                            if (!IconComponent) {
                                console.warn(`Icon not found for: ${program.icon}`)
                            }

                            return (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {IconComponent ? (
                                            <IconComponent className="w-8 h-8 text-white" />
                                        ) : (
                                            <Heart className="w-8 h-8 text-white" />
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {program.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {program.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/activities#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
                                    >
                                        Learn More
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Detailed Program Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20"
                >
                    {siteContent.activities.programs.map((program, index) => {
                        const IconComponent = iconMap[program.icon as keyof typeof iconMap]

                        return (
                            <div
                                key={program.title}
                                id={program.title.toLowerCase().replace(/\s+/g, '-')}
                                className="mb-20 scroll-mt-20"
                            >
                                <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 sm:p-12 relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col lg:flex-row items-start gap-8">
                                            <div className="lg:w-1/3">
                                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6">
                                                    {IconComponent ? (
                                                        <IconComponent className="w-10 h-10 text-white" />
                                                    ) : (
                                                        <Heart className="w-10 h-10 text-white" />
                                                    )}
                                                </div>
                                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                                    {program.title}
                                                </h2>
                                                <p className="text-gray-600 leading-relaxed text-lg">
                                                    {program.description}
                                                </p>
                                            </div>

                                            <div className="lg:w-2/3">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {program.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                            <span className="text-gray-700 font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                                    <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                                                        Join This Program
                                                    </button>
                                                    <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300">
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Ready to Transform Your Life?
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Join our community and experience the power of Christ-centered transformation through our various programs and activities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 