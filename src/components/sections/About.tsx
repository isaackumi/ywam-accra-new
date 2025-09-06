'use client';

import React from 'react'
import { Users, Target, Heart, Star, BookOpen, Globe } from 'lucide-react'

export default function About() {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Biblical Foundation",
            description: "Deep study of God's Word through comprehensive Bible school programs and theological training."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Building",
            description: "Creating strong bonds and lasting friendships through shared faith experiences and fellowship."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Spiritual Growth",
            description: "Nurturing personal faith development and biblical understanding through discipleship."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Impact",
            description: "Training students to serve in missions and ministry both locally and internationally."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Service & Outreach",
            description: "Engaging in meaningful community service, evangelism, and social transformation."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Leadership Development",
            description: "Equipping young leaders with practical skills for ministry, missions, and life."
        }
    ]

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                            About YWAM Accra
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                            YWAM Accra is a transformational Bible school that instills Christ-centered values in young minds and future generations. 
                            We believe that what we feed our hearts and minds shapes who we become, and we're committed to nurturing spiritual growth 
                            through comprehensive biblical education and practical ministry training.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-10 mb-16 border-2 border-gray-600/50 shadow-2xl">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white mb-6 font-space-grotesk">Our Mission</h3>
                            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
                                To create a vibrant Bible school community where young people can grow spiritually, develop leadership skills, 
                                and build meaningful relationships that last a lifetime. We are committed to training disciples who will impact 
                                the world for Christ through biblical education, practical ministry experience, and global mission opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Vision Statement */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-10 mb-16 border-2 border-blue-500/50 shadow-2xl">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white mb-6 font-space-grotesk">Our Vision</h3>
                            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
                                To be a leading Bible school in West Africa, raising up a generation of young people who are deeply rooted in 
                                God's Word, passionate about His mission, and equipped to transform their communities and nations for Christ.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={feature.title} className="bg-gray-800/70 backdrop-blur-sm rounded-xl border-2 border-gray-600/50 p-8 hover:bg-gray-800/90 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center text-blue-400 mx-auto mb-6 border-2 border-blue-500/50">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-4 font-space-grotesk">{feature.title}</h4>
                                    <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-600/40">
                            <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">Ready to Begin Your Journey?</h3>
                            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                                Join our Bible school community and discover your calling in God's kingdom. 
                                Whether you're called to ministry, missions, or marketplace leadership, we're here to equip you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                                >
                                    Explore Programs
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-blue-400 font-semibold rounded-lg border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}