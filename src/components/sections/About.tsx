'use client';

import React from 'react'
import { Users, Target, Heart, Star } from 'lucide-react'

export default function About() {
    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Building",
            description: "Creating strong bonds and lasting friendships through shared faith experiences."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Spiritual Growth",
            description: "Nurturing personal faith development and biblical understanding."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Service & Outreach",
            description: "Engaging in meaningful community service and evangelism."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Leadership Development",
            description: "Equipping young leaders with skills for ministry and life."
        }
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About YWAM Accra
                        </h2>
                        <div className="w-24 h-1 bg-ywamteal-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            YWAM Accra is a transformational movement that instills Christ-centered values in young minds and future generations. We believe that what we feed our hearts and minds shapes who we become.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                        <p className="text-lg text-gray-700 text-center leading-relaxed">
                            To create a vibrant community where young people can grow spiritually, develop leadership skills, and build meaningful relationships that last a lifetime.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={feature.title} className="text-center p-6">
                                <div className="w-16 h-16 bg-ywamteal-100 rounded-full flex items-center justify-center text-ywamteal-600 mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}