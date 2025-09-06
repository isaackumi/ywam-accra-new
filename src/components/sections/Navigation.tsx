'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '@/data/content'
import { ChevronDown, Menu, X, Heart, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const aboutSubmenu = [
    { name: "Mission & Vision", href: "/about#mission" },
    { name: "Our Branches", href: "/about#branches" }
  ]

  const activitiesSubmenu = [
    { name: "Eagles Camp", href: "/activities#eagles-camp" },
    { name: "Love Feasts", href: "/activities#love-feasts" },
    { name: "Mentoring HUB", href: "/activities#mentoring-hub" },
    { name: "ICT Skill Training", href: "/activities#ict-training" },
    { name: "Fun Fair", href: "/activities#fun-fair" },
    { name: "CG Marriages", href: "/activities#cg-marriages" },
    { name: "Hall of Fame", href: "/activities#hall-of-fame" }
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-white/10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center">
                <img
                  src="/images/logo/logo.png"
                  alt="YWAM Accra Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              <span className="ml-2 text-ywamteal font-bold">YWAM Accra</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-white hover:text-primary-400 font-medium transition-all duration-300 rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-background text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mobile-menu bg-background border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full text-center px-4 py-4 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 mb-4"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

