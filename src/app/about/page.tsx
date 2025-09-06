'use client';

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Target, Heart, Star, Sparkles, Calendar, Award, BookOpen,
    ArrowRight, ChevronRight, Globe, Eye, Flag, MessageSquare,
    Volume2, GraduationCap, Users2, BookOpenCheck, MessageCircle,
    Briefcase, Lightbulb, BarChart3, Mic, Trophy, Shield, Zap
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    const objectives = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Spiritual Growth",
            description: "Foster deep spiritual development and biblical understanding",
            highlight: "Transformative"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Community Building",
            description: "Create strong bonds and lasting friendships through shared faith",
            highlight: "Unified"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Service & Outreach",
            description: "Engage in meaningful community service and evangelism",
            highlight: "Compassionate"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Leadership Development",
            description: "Equip young leaders with skills for ministry and life",
            highlight: "Empowering"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Biblical Education",
            description: "Provide comprehensive training in Christian principles",
            highlight: "Enlightening"
        }
    ]

    const activities = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Eagles Camp",
            subtitle: "Leadership & Character Building",
            description: "Intensive spiritual retreats focused on leadership development and character building through biblical principles.",
            features: ["Leadership Training", "Character Development", "Spiritual Retreats", "Team Building"],
            image: "/images/img/photos/ec_2024.jpeg"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Love Feasts",
            subtitle: "Community Fellowship",
            description: "Monthly community gatherings celebrating fellowship, worship, and shared meals in a spirit of unity.",
            features: ["Monthly Events", "Worship Sessions", "Shared Meals", "Fellowship"],
            image: "/images/img/photos/love-feast.jpeg"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Mentoring HUB",
            subtitle: "Personal Growth",
            description: "One-on-one and group mentoring programs for personal and spiritual growth with experienced leaders.",
            features: ["One-on-One Mentoring", "Group Sessions", "Personal Growth", "Spiritual Guidance"],
            image: "/images/img/photos/ntow.jpg"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "ICT Skill Training",
            subtitle: "Digital Literacy",
            description: "Technology workshops and training sessions for digital literacy and career development.",
            features: ["Weekly Sessions", "Digital Skills", "Career Development", "Technology Training"],
            image: "/images/img/photos/camp_19.jpg"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Fun Fair",
            subtitle: "Annual Celebration",
            description: "Annual celebration with games, performances, and community bonding activities for all ages.",
            features: ["Annual Event", "Games & Activities", "Performances", "Community Bonding"],
            image: "/images/img/photos/loyalty_camp.jpg"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "CG Marriages",
            subtitle: "Blessed Unions",
            description: "Supporting and celebrating relationships within our community through biblical principles.",
            features: ["Relationship Support", "Biblical Counseling", "Celebration", "Community Blessing"],
            image: "/images/img/photos/sammy.jpg"
        }
    ]

    const stats = [
        { number: "500+", label: "Active Members", icon: <Users className="w-5 h-5" /> },
        { number: "15+", label: "Years of Service", icon: <Award className="w-5 h-5" /> },
        { number: "50+", label: "Events Yearly", icon: <Calendar className="w-5 h-5" /> },
        { number: "7", label: "Core Programs", icon: <Star className="w-5 h-5" /> }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20"
                            >
                                <Sparkles className="w-4 h-4" />
                                About CampusGem
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            >
                                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                                    Igniting Christ-Centered
                                </span>
                                <br />
                                <span className="text-white">
                                    Transformation
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-blue-100 mb-8 leading-relaxed"
                            >
                                CampusGem is more than just a campus ministry—it's a
                                <span className="font-semibold text-white underline decoration-2 underline-offset-4"> transformational movement </span>
                                that instills Christ-centered values in young minds and future generations.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link
                                    href="#mission"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Our Mission</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="#activities"
                                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Our Activities</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Visual Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {/* Feature Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <Target className="w-8 h-8 text-blue-200 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Spiritual Growth</h3>
                                    <p className="text-blue-100">Deepen your faith journey</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <Users className="w-8 h-8 text-blue-200 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
                                    <p className="text-blue-100">Build lasting relationships</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <Heart className="w-8 h-8 text-blue-200 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Service</h3>
                                    <p className="text-blue-100">Serve with compassion</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <Star className="w-8 h-8 text-blue-200 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Leadership</h3>
                                    <p className="text-blue-100">Develop your potential</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-3 bg-white rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* Mission & Vision Section */}
                    <section id="mission" className="relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Flag className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                                        Our Mission
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        To create a vibrant community where students can grow spiritually,
                                        develop leadership skills, and build meaningful relationships that
                                        last a lifetime through Christ-centered values.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                                <Target className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Spiritual Development</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                <Users className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Community Building</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                                <Star className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Leadership Training</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                        Our Vision
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        To be the leading campus ministry that transforms lives through
                                        faith, fellowship, and service, creating a generation of
                                        Christ-centered leaders who impact their communities.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                <Trophy className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Excellence in Ministry</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                                <Globe className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Global Impact</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                                <Shield className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">Strong Foundation</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Objectives Section */}
                    <section className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
                                <Target className="w-4 h-4" />
                                Our Objectives
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                                    Core Goals
                                </span>
                                <br />
                                <span className="text-gray-900">
                                    & Objectives
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We are committed to achieving these fundamental objectives that guide our ministry and shape our community.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {objectives.map((objective, index) => (
                                <motion.div
                                    key={objective.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                                        {/* Highlight Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {objective.highlight}
                                        </div>

                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {objective.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                            {objective.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {objective.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Activities Section */}
                    <section id="activities" className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
                                <Calendar className="w-4 h-4" />
                                Our Activities
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                                    Transformative
                                </span>
                                <br />
                                <span className="text-gray-900">
                                    Programs & Activities
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Discover our diverse range of programs designed to nurture spiritual growth,
                                build community, and develop leadership skills.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {activities.map((activity, index) => (
                                <motion.div
                                    key={activity.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={activity.image}
                                                alt={activity.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>

                                            {/* Icon Badge */}
                                            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                                                {activity.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {activity.title}
                                            </h3>
                                            {activity.subtitle && (
                                                <p className="text-blue-600 font-semibold mb-4">
                                                    {activity.subtitle}
                                                </p>
                                            )}
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {activity.description}
                                            </p>

                                            {/* Features Grid */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {activity.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                                        <span className="font-medium">{feature}</span>
                                                    </div>
                                                ))}
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
                            className="text-center mt-16"
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
                                        Ready to Join Our Community?
                                    </h3>
                                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                        Experience the transformative power of faith, fellowship, and personal growth.
                                        Join us in creating lasting memories and meaningful connections.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/contact"
                                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        >
                                            <span>Get Started Today</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                        <Link
                                            href="/"
                                            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                                        >
                                            <span>Back to Home</span>
                                            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>
        </div>
    )
} 