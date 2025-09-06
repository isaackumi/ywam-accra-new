'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Target, Star, Sparkles, Calendar, Award, BookOpen, Clock, MapPin } from 'lucide-react'

export default function Services() {
    const activities = [
        {
            title: "Eagles Camp",
            description: "Intensive spiritual retreats focused on leadership development and character building.",
            icon: <Target className="w-6 h-6" />,
            image: "/images/img/photos/ec_2024.jpeg",
            stats: "200+ Participants"
        },
        {
            title: "Love Feasts",
            description: "Community gatherings celebrating fellowship, worship, and shared meals.",
            icon: <Heart className="w-6 h-6" />,
            image: "/images/img/photos/love-feast.jpeg",
            stats: "Monthly Events"
        },
        {
            title: "Mentoring HUB",
            description: "One-on-one and group mentoring programs for personal and spiritual growth.",
            icon: <Users className="w-6 h-6" />,
            image: "/images/img/photos/ntow.jpg",
            stats: "50+ Mentors"
        },
        {
            title: "ICT Skill Training",
            description: "Technology workshops and training sessions for digital literacy and career development.",
            icon: <BookOpen className="w-6 h-6" />,
            image: "/images/img/photos/camp_19.jpg",
            stats: "Weekly Sessions"
        },
        {
            title: "Fun Fair",
            description: "Annual celebration with games, performances, and community bonding activities.",
            icon: <Star className="w-6 h-6" />,
            image: "/images/img/photos/loyalty_camp.jpg",
            stats: "500+ Attendees"
        },
        {
            title: "CG Marriages",
            description: "Supporting and celebrating relationships within our community.",
            icon: <Heart className="w-6 h-6" />,
            image: "/images/img/photos/sammy.jpg",
            stats: "Blessed Unions"
        }
    ]

    const upcomingEvents = [
        {
            title: "Evening Prayer Meeting",
            date: "Every Wednesday",
            time: "6:00 PM",
            location: "Main Campus",
            description: "Join us for powerful evening prayers and spiritual fellowship.",
            icon: <Heart className="w-5 h-5" />,
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Bible Study Session",
            date: "Every Friday",
            time: "7:00 PM",
            location: "Fellowship Hall",
            description: "Deep dive into God's word with interactive discussions.",
            icon: <BookOpen className="w-5 h-5" />,
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Youth Worship Night",
            date: "Every Saturday",
            time: "8:00 PM",
            location: "Auditorium",
            description: "Contemporary worship and praise with live music.",
            icon: <Star className="w-5 h-5" />,
            color: "from-purple-500 to-pink-500"
        }
    ]

    return (
        <section id="services" className="relative py-20 lg:py-32 bg-background text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="text-sm font-semibold uppercase tracking-widest text-ywamteal mb-4">Our Activities & Programs</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Transformative Programs & Activities</h2>
                    <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
                        Discover our diverse range of programs designed to nurture spiritual growth, build community, and develop leadership skills. Each activity is crafted to create meaningful experiences and lasting impact.
                    </p>
                </div>
                {/* Upcoming Events Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Upcoming Evening Events</h3>
                        <p className="text-white max-w-2xl mx-auto">Join us for our regular evening gatherings and spiritual activities</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {upcomingEvents.map((event, index) => (
                            <div key={event.title} className="bg-background border border-white/10 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                        {event.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white mb-2">{event.title}</h4>
                                        <div className="space-y-2 text-sm text-white">
                                            <div className="flex items-center gap-2">
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-white text-xs">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div key={activity.title} className="bg-background border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                            <img src={activity.image} alt={activity.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                        {activity.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{activity.title}</h4>
                                </div>
                                <p className="text-white mb-4">{activity.description}</p>
                                <div className="text-sm text-white">{activity.stats}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 