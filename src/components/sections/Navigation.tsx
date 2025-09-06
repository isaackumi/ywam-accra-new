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
            isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-bold text-gray-900">
                            YWAM <span className="text-ywamteal-600">Accra</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isScrolled 
                                            ? 'text-gray-700 hover:text-ywamteal-600' 
                                            : 'text-white hover:text-ywamteal-200'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-ywamteal-600 text-white font-semibold rounded-lg hover:bg-ywamteal-700 transition-colors duration-200"
                        >
                            Get Involved
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md transition-colors duration-200 ${
                                isScrolled 
                                    ? 'text-gray-700 hover:text-ywamteal-600' 
                                    : 'text-white hover:text-ywamteal-200'
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ywamteal-600 hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="block px-3 py-2 rounded-md text-base font-medium bg-ywamteal-600 text-white hover:bg-ywamteal-700 transition-colors duration-200 mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Involved
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}