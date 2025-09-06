'use client';

import React from 'react'
import { Target, Heart, Users, BookOpen, Star, Calendar } from 'lucide-react'

export default function Services() {
    const activities = [
        {
            title: "Eagles Camp",
            description: "Intensive spiritual retreats focused on leadership development and character building.",
            icon: <Target className="w-6 h-6" />,
            stats: "200+ Participants"
        },
        {
            title: "Love Feasts",
            description: "Community gatherings celebrating fellowship, worship, and shared meals.",
            icon: <Heart className="w-6 h-6" />,
            stats: "Monthly Events"
        },
        {
            title: "Mentoring HUB",
            description: "One-on-one and group mentoring programs for personal and spiritual growth.",
            icon: <Users className="w-6 h-6" />,
            stats: "50+ Mentors"
        },
        {
            title: "ICT Skill Training",
            description: "Technology workshops and training sessions for digital literacy and career development.",
            icon: <BookOpen className="w-6 h-6" />,
            stats: "Weekly Sessions"
        },
        {
            title: "Fun Fair",
            description: "Annual celebration with games, performances, and community bonding activities.",
            icon: <Star className="w-6 h-6" />,
            stats: "500+ Attendees"
        },
        {
            title: "CG Marriages",
            description: "Supporting and celebrating relationships within our community.",
            icon: <Heart className="w-6 h-6" />,
            stats: "Blessed Unions"
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
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover our diverse range of programs designed to nurture spiritual growth, build community, and develop leadership skills.
                        </p>
                    </div>

                    {/* Upcoming Events - DTS Only */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center font-space-grotesk">Upcoming Events</h3>
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white font-space-grotesk">Discipleship Training School (DTS)</h4>
                                </div>
                                <p className="text-gray-300 text-lg">
                                    A comprehensive program designed to equip young people with a solid foundation in Christian discipleship and ministry.
                                </p>
                                <div className="mt-4 text-blue-400 font-semibold">
                                    Date will be communicated soon
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={activity.title} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-800/70 hover:border-blue-500/30 transition-all duration-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/30">
                                        {activity.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white font-space-grotesk">{activity.title}</h4>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">{activity.description}</p>
                                <div className="text-sm font-medium text-blue-400">{activity.stats}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}