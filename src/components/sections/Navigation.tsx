'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-2xl border-b border-gray-700' : 'bg-transparent'
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
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="px-4 py-2 text-white font-medium hover:text-blue-400 transition-colors duration-200"
                        >
                            Login →
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                        >
                            Try for Free →
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
                            <div className="pt-4 space-y-2">
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login →
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Try for Free →
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}