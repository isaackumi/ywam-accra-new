'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    ArrowLeft, Star, Heart, Users, Award, BookOpen,
    Calendar, MapPin, Phone, Mail, MessageCircle,
    Sparkles, Target, Zap, Globe, ChevronRight
} from 'lucide-react'
import Link from 'next/link'

export default function SeniorPastorPage() {
    const pastorInfo = {
        name: "Rev. Dr. Samuel Mensah",
        title: "Senior Pastor & Founder",
        image: "/images/img/gem/senior-pastor.jpg",
        bio: "Rev. Dr. Samuel Mensah is a visionary leader, spiritual mentor, and the founding pastor of CampusGem Ministry. With over 20 years of experience in ministry and youth development, he has dedicated his life to empowering students and young adults through faith-based leadership and character development.",
        education: [
            "Doctorate in Theology - Trinity Theological Seminary",
            "Master's in Divinity - University of Ghana",
            "Bachelor's in Religious Studies - University of Cape Coast"
        ],
        experience: [
            "20+ years in pastoral ministry",
            "15+ years in youth ministry leadership",
            "Founder of CampusGem Ministry",
            "International speaker and conference leader",
            "Author of 'Faith in Action' and 'Youth Leadership Principles'"
        ],
        contact: {
            email: "pastor@campusgem.org",
            phone: "+233 XX XXX XXXX",
            office: "Main Campus, Fellowship Hall"
        }
    }

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Student Member",
            content: "Pastor Samuel's teachings have completely transformed my understanding of faith and leadership. His wisdom and guidance have been instrumental in my spiritual growth.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Graduate Member",
            content: "The leadership principles I learned from Pastor Samuel continue to guide me in my professional life. His mentorship has been invaluable.",
            rating: 5
        },
        {
            name: "Grace Osei",
            role: "Youth Coordinator",
            content: "Pastor Samuel's vision for CampusGem has created a community where young people can grow spiritually and develop their leadership potential.",
            rating: 5
        }
    ]

    const upcomingSermons = [
        {
            title: "Faith in Action",
            date: "Sunday, December 15",
            time: "9:00 AM",
            location: "Main Auditorium",
            description: "Exploring how faith translates into daily actions and decisions."
        },
        {
            title: "Leadership Principles",
            date: "Wednesday, December 18",
            time: "6:00 PM",
            location: "Fellowship Hall",
            description: "Biblical principles for effective leadership in today's world."
        },
        {
            title: "Youth Empowerment",
            date: "Friday, December 20",
            time: "7:00 PM",
            location: "Youth Center",
            description: "Empowering young people to discover their God-given potential."
        }
    ]

    const achievements = [
        { number: "500+", label: "Students Mentored", icon: <Users className="w-6 h-6" /> },
        { number: "20+", label: "Years of Ministry", icon: <Award className="w-6 h-6" /> },
        { number: "15+", label: "Books Published", icon: <BookOpen className="w-6 h-6" /> },
        { number: "50+", label: "Countries Visited", icon: <Globe className="w-6 h-6" /> }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-semibold">Back to Home</span>
                        </Link>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            CampusGem
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
                        <Sparkles className="w-4 h-4" />
                        Senior Pastor
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                            {pastorInfo.name}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {pastorInfo.title} • Visionary Leader • Spiritual Mentor
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Pastor Image & Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={pastorInfo.image}
                                    alt={pastorInfo.name}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{pastorInfo.name}</h2>
                                    <p className="text-blue-600 font-medium">{pastorInfo.title}</p>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {pastorInfo.bio}
                                </p>

                                {/* Contact Info */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <div className="text-sm text-gray-600">Email</div>
                                            <div className="font-medium text-gray-900">{pastorInfo.contact.email}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                                        <Phone className="w-5 h-5 text-green-600" />
                                        <div>
                                            <div className="text-sm text-gray-600">Phone</div>
                                            <div className="font-medium text-gray-900">{pastorInfo.contact.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <div className="text-sm text-gray-600">Office</div>
                                            <div className="font-medium text-gray-900">{pastorInfo.contact.office}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education & Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {/* Education */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    Education
                                </h3>
                                <ul className="space-y-3">
                                    {pastorInfo.education.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-indigo-600" />
                                    Experience
                                </h3>
                                <ul className="space-y-3">
                                    {pastorInfo.experience.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Testimonials */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <MessageCircle className="w-6 h-6 text-blue-600" />
                                What People Say
                            </h3>
                            <div className="grid gap-6">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-3 italic">"{testimonial.content}"</p>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-blue-600">{testimonial.role}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Target className="w-5 h-5 text-blue-600" />
                                Achievements
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                                            {achievement.icon}
                                        </div>
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                            {achievement.number}
                                        </div>
                                        <div className="text-sm text-gray-600">{achievement.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Upcoming Sermons */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-green-600" />
                                Upcoming Sermons
                            </h3>
                            <div className="space-y-4">
                                {upcomingSermons.map((sermon, index) => (
                                    <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                                        <h4 className="font-semibold text-gray-900 mb-2">{sermon.title}</h4>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-green-500" />
                                                <span>{sermon.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-blue-500" />
                                                <span>{sermon.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-red-500" />
                                                <span>{sermon.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2">{sermon.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-2xl p-6 text-white"
                        >
                            <h3 className="text-xl font-bold mb-4">Schedule a Meeting</h3>
                            <p className="text-blue-100 mb-6">
                                Would you like to meet with Pastor Samuel? Schedule a one-on-one session for spiritual guidance.
                            </p>
                            <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Schedule Meeting
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
} 