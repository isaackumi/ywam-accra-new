'use client';

import React from 'react'
import { Heart, Calendar, Users, BookOpen } from 'lucide-react'

export default function Services() {
    const activities = [
        {
            title: "Love Feasts",
            description: "Community gatherings celebrating fellowship, worship, and shared meals.",
            icon: <Heart className="w-6 h-6" />,
            stats: "Monthly Events"
        }
    ]

    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                            Our Activities & Programs
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Discover our diverse range of programs designed to nurture spiritual growth, build community, and develop leadership skills.
                        </p>
                    </div>

                    {/* Upcoming Events - DTS Only */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center font-space-grotesk">Upcoming Events</h3>
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl p-8 border-2 border-blue-500/50 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-500/40 rounded-xl flex items-center justify-center border-2 border-blue-500/60">
                                        <Calendar className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white font-space-grotesk">Discipleship Training School (DTS)</h4>
                                </div>
                                <p className="text-gray-200 text-lg leading-relaxed">
                                    A comprehensive 6-month program designed to equip young people with a solid foundation in Christian discipleship and ministry. 
                                    This intensive training combines classroom learning with practical outreach experiences.
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="text-blue-400 font-semibold">
                                        Starts every August
                                    </div>
                                    <a 
                                        href="#contact" 
                                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={activity.title} className="bg-gray-800/70 backdrop-blur-sm rounded-xl border-2 border-gray-600/50 p-6 hover:bg-gray-800/90 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-500/50">
                                        {activity.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white font-space-grotesk">{activity.title}</h4>
                                </div>
                                <p className="text-gray-200 mb-4 leading-relaxed">{activity.description}</p>
                                <div className="text-sm font-medium text-blue-400">{activity.stats}</div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Programs Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center font-space-grotesk">Bible School Programs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-600/40 p-6 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-500/50">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white font-space-grotesk">School of Biblical Studies</h4>
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed">Deep dive into God's Word with inductive Bible study methods.</p>
                            </div>
                            
                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-600/40 p-6 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-500/50">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white font-space-grotesk">School of Ministry Development</h4>
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed">Leadership training for those called to ministry and missions.</p>
                            </div>
                            
                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-600/40 p-6 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-500/50">
                                        <Heart className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white font-space-grotesk">School of Counseling</h4>
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed">Biblical counseling training to help others find healing and hope.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}