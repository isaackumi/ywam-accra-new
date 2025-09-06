'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ywamteal-50 to-ywamteal-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Go for God.
            <br />
            <span className="text-ywamteal-600">YWAM Accra</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a global movement of young people driven by a passion to know God and make Him known in Accra.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ywamteal-600 text-white font-semibold rounded-lg hover:bg-ywamteal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-ywamteal-600 font-semibold rounded-lg border-2 border-ywamteal-600 hover:bg-ywamteal-600 hover:text-white transition-colors duration-200"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
      
      {/* Simple decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-ywamteal-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-ywamteal-300 rounded-full opacity-30"></div>
    </section>
  )
}