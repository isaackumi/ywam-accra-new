'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, BookOpen, Users, Heart, Target, Star } from 'lucide-react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isCoursesOpen, setIsCoursesOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Activities', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]

    const courses = [
        {
            title: "Discipleship Training School (DTS)",
            description: "6-month intensive program combining classroom learning with practical outreach",
            icon: <BookOpen className="w-6 h-6" />,
            duration: "6 Months",
            href: "#dts"
        },
        {
            title: "School of Biblical Studies (SBS)",
            description: "Deep dive into God's Word with inductive Bible study methods",
            icon: <BookOpen className="w-6 h-6" />,
            duration: "9 Months",
            href: "#sbs"
        },
        {
            title: "School of Worship (SOW)",
            description: "Develop your musical gifts and learn to lead others in worship",
            icon: <Star className="w-6 h-6" />,
            duration: "3 Months",
            href: "#sow"
        },
        {
            title: "School of Ministry Development (SOMD)",
            description: "Leadership training for those called to ministry and missions",
            icon: <Users className="w-6 h-6" />,
            duration: "6 Months",
            href: "#somd"
        },
        {
            title: "School of Evangelism (SOE)",
            description: "Learn effective evangelism methods and share the Gospel boldly",
            icon: <Target className="w-6 h-6" />,
            duration: "3 Months",
            href: "#soe"
        },
        {
            title: "School of Counseling (SOC)",
            description: "Biblical counseling training to help others find healing and hope",
            icon: <Heart className="w-6 h-6" />,
            duration: "6 Months",
            href: "#soc"
        }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-2xl border-b border-gray-700' : 'bg-gray-800/90 backdrop-blur-sm'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-bold text-white font-space-grotesk">
                            YWAM <span className="text-blue-400">Accra</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                            
                            {/* Courses Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setIsCoursesOpen(true)}
                                onMouseLeave={() => setIsCoursesOpen(false)}
                            >
                                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1">
                                    Courses
                                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-90' : ''}`} />
                                </button>
                                
                                {/* Dropdown Menu */}
                                {isCoursesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-500">
                                        <h3 className="text-lg font-semibold text-white mb-4 font-space-grotesk">Our Bible School Programs</h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {courses.map((course, index) => (
                                                <a
                                                    key={course.title}
                                                    href={course.href}
                                                    className="group p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-200 border border-gray-600/30 hover:border-blue-500/50"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-200">
                                                            {course.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                                                                {course.description}
                                                            </p>
                                                            <div className="flex items-center justify-between mt-2">
                                                                <span className="text-xs text-blue-400 font-medium">{course.duration}</span>
                                                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="px-4 py-2 text-white font-medium hover:text-blue-400 transition-colors duration-200"
                        >
                            Apply →
                        </a>
                        <a
                            href="/donate"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                        >
                            Donate →
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-md shadow-2xl rounded-lg mt-2 border border-gray-700">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            
                            {/* Mobile Courses */}
                            <div className="px-3 py-2">
                                <div className="text-base font-medium text-white mb-2">Courses</div>
                                <div className="space-y-2 ml-4">
                                    {courses.slice(0, 3).map((course) => (
                                        <a
                                            key={course.title}
                                            href={course.href}
                                            className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {course.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="pt-4 space-y-2">
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Apply →
                                </a>
                                <a
                                    href="/donate"
                                    className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Donate →
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}