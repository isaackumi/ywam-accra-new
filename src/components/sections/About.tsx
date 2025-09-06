'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Target, Heart, Star, Sparkles } from 'lucide-react'

export default function About() {
    const features = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Community Building",
            description: "Creating strong bonds and lasting friendships through shared faith experiences."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Spiritual Growth",
            description: "Nurturing personal faith development and biblical understanding."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Service & Outreach",
            description: "Engaging in meaningful community service and evangelism."
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Leadership Development",
            description: "Equipping young leaders with skills for ministry and life."
        }
    ]

    return (
        <section id="about" className="relative py-20 lg:py-32 bg-background text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="text-sm font-semibold uppercase tracking-widest text-ywamteal mb-4">About YWAM Accra</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Igniting Christ-Centered Transformation</h2>
                        <p className="text-lg text-white leading-relaxed mb-6">
                            YWAM Accra is more than just a ministry—it's a transformational movement that instills Christ-centered values in young minds and future generations. We believe that what we feed our hearts and minds shapes who we become.
                        </p>
                        <div className="bg-background border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                Our Mission
                            </h3>
                            <p className="text-white leading-relaxed">
                                To create a vibrant community where young people can grow spiritually, develop leadership skills, and build meaningful relationships that last a lifetime.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={feature.title} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-white text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/10">
                            <img src="/images/img/bg-img/amenuvor_at_winneba.jpg" alt="YWAM Accra Community" className="w-full h-96 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 