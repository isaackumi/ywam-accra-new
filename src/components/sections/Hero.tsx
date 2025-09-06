'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight font-space-grotesk">
            Go for God.
            <br />
            <span className="text-blue-400">YWAM Accra</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a global movement of young people driven by a passion to know God and make Him known in Accra.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-500 transition-all duration-200 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-semibold text-lg rounded-xl border-2 border-white hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"></div>
    </section>
  )
}