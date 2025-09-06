"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import { Share2, Download, Heart, Quote, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function DailyConfessionPage() {
    const groupImage = '/images/img/gem/yellow-grp.jpg'

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white hover:text-white font-medium transition-colors duration-200 mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Home
                    </Link>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Confession Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                {/* Card Background */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full translate-y-12 -translate-x-12"></div>
                                    
                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                                                <Sparkles className="w-4 h-4" />
                                                Daily Confession
                                            </div>
                                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                                Our Daily
                                                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                    Confession
                                                </span>
                                            </h1>
                                            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
                                            <p className="text-white text-lg max-w-md mx-auto">
                                                Speak life, live in victory, and transform your reality through the power of confession.
                                            </p>
                                        </div>

                                        {/* Confession Text */}
                                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
                                            <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-300/50" />
                                            <Quote className="absolute bottom-4 right-4 w-8 h-8 text-purple-300/50 transform rotate-180" />
                                            
                                            <div className="space-y-4 text-left">
                                                {siteContent.dailyConfession.mainConfession.map((line, index) => (
                                                    <motion.p
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                                        className="text-lg sm:text-xl text-white leading-relaxed font-medium hover:text-white transition-colors duration-300 cursor-pointer group"
                                                    >
                                                        <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                                                            {line}
                                                        </span>
                                                    </motion.p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                                <Share2 className="w-5 h-5" />
                                                Share Confession
                                            </button>
                                            <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                                                <Download className="w-5 h-5" />
                                                Download PDF
                                            </button>
                                        </div>

                                        {/* Back Link */}
                                        <div className="mt-8 text-center">
                                            <Link 
                                                href="/activities" 
                                                className="inline-flex items-center gap-2 text-white hover:text-white font-medium transition-colors duration-200 group"
                                            >
                                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                                                Back to Activities
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="relative">
                                    {/* Image Container */}
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={groupImage}
                                            alt="CampusGem Community"
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Heart className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Decorative Border */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none"></div>
                                </div>

                                {/* Image Caption */}
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-semibold text-white mb-2">CampusGem Community</h3>
                                    <p className="text-white">United in faith, growing in grace, transforming lives together.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
} 