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

    const upcomingEvents = [
        {
            title: "Evening Prayer Meeting",
            date: "Every Wednesday",
            time: "6:00 PM",
            location: "Main Campus"
        },
        {
            title: "Bible Study Session",
            date: "Every Friday",
            time: "7:00 PM",
            location: "Fellowship Hall"
        },
        {
            title: "Youth Worship Night",
            date: "Every Saturday",
            time: "8:00 PM",
            location: "Auditorium"
        }
    ]

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Activities & Programs
                        </h2>
                        <div className="w-24 h-1 bg-ywamteal-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover our diverse range of programs designed to nurture spiritual growth, build community, and develop leadership skills.
                        </p>
                    </div>

                    {/* Upcoming Events */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {upcomingEvents.map((event, index) => (
                                <div key={event.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-ywamteal-100 rounded-lg flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-ywamteal-600" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div>{event.date}</div>
                                        <div>{event.time}</div>
                                        <div>{event.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={activity.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-ywamteal-100 rounded-lg flex items-center justify-center text-ywamteal-600">
                                        {activity.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">{activity.title}</h4>
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                                <div className="text-sm font-medium text-ywamteal-600">{activity.stats}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}