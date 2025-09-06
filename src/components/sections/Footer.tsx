'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Facebook, Twitter, Instagram, Linkedin, Youtube,
    Mail, Phone, MapPin, Heart, ArrowUp,
    Calendar, Users, Award, Star, Sparkles,
    Download, Share2, MessageCircle, Bell
} from 'lucide-react'

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setTimeout(() => setIsSubscribed(false), 3000)
            setEmail('')
        }
    }

    const quickLinks = [
        { name: 'About Us', href: '#about', icon: <Users className="w-4 h-4" /> },
        { name: 'Our Activities', href: '#services', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Testimonials', href: '#testimonials', icon: <Star className="w-4 h-4" /> },
        { name: 'Our Team', href: '#team', icon: <Award className="w-4 h-4" /> },
        { name: 'Contact', href: '#contact', icon: <MessageCircle className="w-4 h-4" /> },
    ]

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" />, color: 'hover:text-blue-500' },
        { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-500' },
        { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
        { name: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
    ]

    const stats = [
        { number: '500+', label: 'Active Members', icon: <Users className="w-5 h-5" /> },
        { number: '15+', label: 'Years of Impact', icon: <Award className="w-5 h-5" /> },
        { number: '98%', label: 'Satisfaction Rate', icon: <Star className="w-5 h-5" /> },
    ]

    const contactInfo = [
        {
            icon: <Mail className="w-4 h-4 text-ywamteal" />,
            title: "Email",
            value: "info@ywamaccra.org",
            link: "mailto:info@ywamaccra.org"
        },
        {
            icon: <Phone className="w-4 h-4 text-ywamteal" />,
            title: "Phone",
            value: "+233 20 123 4567",
            link: "tel:+233201234567"
        },
        {
            icon: <MapPin className="w-4 h-4 text-ywamteal" />,
            title: "Location",
            value: "Accra, Ghana",
            link: "https://maps.google.com/?q=Accra,Ghana"
        },
        {
            icon: <Award className="w-4 h-4 text-ywamteal" />,
            title: "Working Hours",
            value: "Mon - Fri: 9:00 AM - 5:00 PM",
            link: null
        }
    ];

    return (
        <footer className="relative bg-background text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="space-y-6">
                                {/* Logo */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-background border border-white/10 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl font-bold text-primary-400">YWAM</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">YWAM Accra</h3>
                                        <p className="text-sm text-white">Ministry & Fellowship</p>
                                    </div>
                                </div>
                                <p className="text-white leading-relaxed">
                                    Empowering students through faith, fellowship, and personal growth. Building leaders for tomorrow through transformative experiences and meaningful connections.
                                </p>
                                {/* Social Links */}
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className={`w-10 h-10 bg-background border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-primary-400 transition-all duration-300 hover:bg-primary-600/10`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">Quick Links</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-3 text-white hover:text-primary-400 transition-all duration-300 group"
                                        >
                                            <span className="w-6 h-6 bg-background border border-white/10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {link.icon}
                                            </span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">Contact Info</h4>
                            <ul className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <li key={info.title} className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-background border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{info.title}</div>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="inline-flex items-center gap-2 text-ywamteal hover:text-ywamint transition-colors duration-200"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-white">{info.value}</div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 py-8 text-center text-white text-sm">
                    &copy; {new Date().getFullYear()} YWAM Accra. All rights reserved.
                </div>
            </div>
            <button className="btn-primary bg-ywamteal hover:bg-ywamint text-background font-bold">Contact Us</button>
        </footer>
    )
} 