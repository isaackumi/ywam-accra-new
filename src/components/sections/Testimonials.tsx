'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Heart, Users, Award, Sparkles, Calendar } from 'lucide-react'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Student Member",
            image: "/images/img/gem/ladies_mixed.jpg",
            content: "CampusGem has completely transformed my life! The spiritual growth I've experienced here is incredible. The community is so welcoming and supportive. I've made lifelong friends and found my purpose through the various programs.",
            rating: 5,
            highlight: "Life-changing experience",
            date: "2024"
        },
        {
            name: "Michael Chen",
            role: "Graduate Member",
            image: "/images/img/gem/two.jpg",
            content: "Being part of CampusGem for the past 3 years has been the best decision I've made in college. The leadership training I received has helped me in my career, and the spiritual foundation keeps me grounded.",
            rating: 5,
            highlight: "Leadership development",
            date: "2023"
        },
        {
            name: "Grace Osei",
            role: "Youth Coordinator",
            image: "/images/img/gem/saah.jpg",
            content: "As a coordinator, I've seen firsthand how CampusGem changes lives. The transformation in our members is remarkable. The programs are well-structured and the community spirit is truly inspiring.",
            rating: 5,
            highlight: "Remarkable transformation",
            date: "2024"
        },
        {
            name: "David Mensah",
            role: "Alumni Member",
            image: "/images/img/gem/senior-pastor.jpg",
            content: "Even after graduating, I still feel connected to the CampusGem family. The values and principles I learned here continue to guide me in my professional and personal life. This ministry is truly special.",
            rating: 5,
            highlight: "Lifelong impact",
            date: "2022"
        },
        {
            name: "Ama Kufuor",
            role: "Current Student",
            image: "/images/img/gem/mixed_colors.jpg",
            content: "The Eagles Camp was absolutely amazing! I learned so much about leadership and character building. The mentors are incredible and the fellowship is genuine. CampusGem feels like home.",
            rating: 5,
            highlight: "Amazing fellowship",
            date: "2024"
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const stats = [
        { number: "98%", label: "Satisfaction Rate", icon: <Heart className="w-5 h-5" /> },
        { number: "500+", label: "Happy Members", icon: <Users className="w-5 h-5" /> },
        { number: "15+", label: "Years of Impact", icon: <Award className="w-5 h-5" /> }
    ]

    return (
        <section id="testimonials" className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
            {/* Background Patterns - Subtle */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl"></div>
            </div>

            {/* Geometric Pattern - Small */}
            <div className="absolute inset-0 opacity-2">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Ccircle cx='25' cy='25' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
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
                        <Quote className="w-4 h-4" />
                        Testimonials
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                            What Our Members
                        </span>
                        <br />
                        <span className="text-gray-900">
                            Say About Us
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Hear from our community members about their transformative experiences
                        and the impact CampusGem has had on their lives.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
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
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 lg:p-12"
                            >
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Image */}
                                    <div className="relative">
                                        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-2 shadow-xl">
                                            <div className="bg-white rounded-2xl overflow-hidden">
                                                <img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-full h-64 object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Highlight Badge */}
                                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            {testimonials[currentIndex].highlight}
                                        </div>

                                        {/* Date Badge */}
                                        <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 border border-blue-200">
                                            <span className="text-sm font-medium text-blue-700">{testimonials[currentIndex].date}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-6">
                                        {/* Quote Icon */}
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                                            <Quote className="w-8 h-8 text-blue-600" />
                                        </div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                                            "{testimonials[currentIndex].content}"
                                        </blockquote>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>

                                        {/* Author */}
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-blue-600 font-medium">
                                                {testimonials[currentIndex].role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-blue-600 scale-125'
                                            : 'bg-blue-200 hover:bg-blue-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        {/* Background Pattern - Small */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Ready to Share Your Story?
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join our community and become part of the next generation of
                                life-changing testimonies. Your journey could inspire others.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    Join Our Community
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                                    Share Your Story
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 