'use client'

import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Activities', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
        { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
        { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> },
        { name: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" /> },
    ]

    const contactInfo = [
        {
            icon: <Mail className="w-4 h-4" />,
            title: "Email",
            value: "info@ywamaccra.org"
        },
        {
            icon: <Phone className="w-4 h-4" />,
            title: "Phone",
            value: "+233 20 123 4567"
        },
        {
            icon: <MapPin className="w-4 h-4" />,
            title: "Location",
            value: "Accra, Ghana"
        }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">YWAM Accra</h3>
                                <p className="text-gray-400">Igniting Christ-Centered Transformation</p>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Empowering students through faith, fellowship, and personal growth. Building leaders for tomorrow through transformative experiences.
                            </p>
                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-ywamteal-600 transition-colors duration-200"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((info, idx) => (
                                <li key={info.title} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center flex-shrink-0 mt-1">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">{info.title}</div>
                                        <div className="text-gray-300">{info.value}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for updates and events.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ywamteal-500"
                            />
                            <button className="px-4 py-2 bg-ywamteal-600 text-white rounded-r-lg hover:bg-ywamteal-700 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} YWAM Accra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}