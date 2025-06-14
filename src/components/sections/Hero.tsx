'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/data/content'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteContent.hero.backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 via-dark-500/70 to-dark-500/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            {siteContent.hero.title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-400 mb-8"
          >
            {siteContent.hero.subtitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {siteContent.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#about"
              className="bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white hover:text-primary-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

