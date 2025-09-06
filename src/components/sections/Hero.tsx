'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Play, Star, Sparkles, Heart,
  Users, Award, Calendar, ChevronDown,
  Zap, Target, BookOpen, Globe, ChevronLeft, ChevronRight
} from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const words = ['Faith', 'Fellowship', 'Growth', 'Leadership', 'Community']

  const heroImages = [
    {
      src: "/images/img/gem/ladies_mixed.jpg",
      alt: "CampusGem Ladies Fellowship",
      title: "Ladies Fellowship"
    },
    {
      src: "/images/img/gem/mixed_colors.jpg",
      alt: "CampusGem Mixed Group",
      title: "Mixed Fellowship"
    },
    {
      src: "/images/img/gem/two.jpg",
      alt: "CampusGem Community",
      title: "Community Bonding"
    },
    {
      src: "/images/img/gem/senior-pastor.jpg",
      alt: "Senior Pastor",
      title: "Spiritual Leadership"
    }
  ]

  const heroImage = {
    src: "/images/img/bg-img/amenuvor_at_winneba.jpg",
    alt: "YWAM Accra Hero",
    title: "YWAM Accra Community"
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const floatingElements = [
    { icon: <Star className="w-6 h-6" />, delay: 0, duration: 3 },
    { icon: <Heart className="w-5 h-5" />, delay: 1, duration: 4 },
    { icon: <Sparkles className="w-4 h-4" />, delay: 2, duration: 3.5 },
    { icon: <Zap className="w-5 h-5" />, delay: 0.5, duration: 4.5 },
    { icon: <Target className="w-4 h-4" />, delay: 1.5, duration: 3 },
  ]

  const stats = [
    { number: '500+', label: 'Active Members', icon: <Users className="w-5 h-5" /> },
    { number: '15+', label: 'Years of Impact', icon: <Award className="w-5 h-5" /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <Star className="w-5 h-5" /> },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Go for God.<br />YWAM Accra</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
              Join a global movement, full of young people driven by a passion to know God and make Him known in Accra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#about"
                className="btn-primary bg-ywamteal hover:bg-ywamint text-background font-bold"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white/10">
              <img src={heroImage.src} alt={heroImage.alt} className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

