'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Star, Heart } from 'lucide-react'
import Link from 'next/link'

export default function TeamPreview() {
    const teamMembers = [
        {
            name: "Senior Pastor",
            role: "Spiritual Leader",
            image: '/images/img/gem/senior-pastor.jpg',
            description: "Leading our ministry with wisdom and grace"
        },
        {
            name: "Youth Coordinator",
            role: "Program Director",
            image: '/images/img/gem/saah.jpg',
            description: "Organizing transformative youth programs"
        },
        {
            name: "Worship Leader",
            role: "Music Ministry",
            image: '/images/img/gem/two.jpg',
            description: "Leading worship with passion and excellence"
        }
    ]

    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
                        <Users className="w-4 h-4" />
                        Our Leadership Team
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                            Meet Our
                        </span>
                        <br />
                        <span className="text-gray-900">
                            Dedicated Leaders
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our leadership team is committed to guiding and nurturing the spiritual growth
                        of our community with wisdom, compassion, and dedication.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>

                                    {/* Role Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                        <span className="text-sm font-semibold text-blue-700">{member.role}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {member.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span>5.0</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-4 h-4 text-red-400" />
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Join Our Leadership Team
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Discover opportunities to serve and lead within our ministry.
                                We're always looking for passionate individuals to join our team.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/team"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Meet Full Team</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Get Involved</span>
                                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 