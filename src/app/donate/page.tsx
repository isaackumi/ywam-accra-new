import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '@/data/content'
import {
    ArrowLeft,
    Heart,
    Gift,
    CreditCard,
    Smartphone,
    Building,
    Users,
    CheckCircle,
    Star,
    TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function DonatePage() {
    const [selectedOption, setSelectedOption] = useState('')
    const [customAmount, setCustomAmount] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)

    const handleDonation = (option: string) => {
        setSelectedOption(option)
        setIsProcessing(true)

        // Simulate processing
        setTimeout(() => {
            setIsProcessing(false)
            alert('Thank you for your generous donation! You will receive a confirmation email shortly.')
        }, 3000)
    }

    const impactStats = [
        {
            icon: Users,
            number: "500+",
            label: "Lives Transformed",
            description: "Young people impacted through our programs"
        },
        {
            icon: Building,
            number: "15+",
            label: "Communities Served",
            description: "Local communities reached through outreach"
        },
        {
            icon: TrendingUp,
            number: "95%",
            label: "Success Rate",
            description: "Participants report positive life changes"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    Back to Home
                </Link>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        Support Our Mission
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        {siteContent.donate.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.donate.subtitle}
                    </p>
                    <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                        {siteContent.donate.description}
                    </p>
                </motion.div>

                {/* Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-lg font-semibold text-blue-600 mb-2">{stat.label}</div>
                            <p className="text-gray-600">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Donation Options */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 sm:p-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                Choose Your Donation
                            </h2>

                            <div className="space-y-6">
                                {siteContent.donate.options.map((option, index) => (
                                    <motion.div
                                        key={option.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 cursor-pointer group"
                                        onClick={() => handleDonation(option.title)}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Gift className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                                                    <p className="text-gray-600">{option.description}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-blue-600">{option.amount}</div>
                                                <div className="text-sm text-gray-500">Suggested</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-green-600">
                                            <CheckCircle className="w-4 h-4" />
                                            <span className="text-sm font-medium">Tax deductible</span>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Custom Amount */}
                                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Custom Amount</h3>
                                            <p className="text-gray-600">Choose your own donation amount</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <input
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            placeholder="Enter amount"
                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                        <button
                                            onClick={() => handleDonation('Custom')}
                                            disabled={!customAmount || isProcessing}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isProcessing ? 'Processing...' : 'Donate'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Payment Methods & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Payment Methods */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Payment Methods
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                {siteContent.donate.paymentMethods.map((method, index) => (
                                    <motion.div
                                        key={method}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                                    >
                                        {method === 'Mobile Money' && <Smartphone className="w-5 h-5 text-blue-600" />}
                                        {method === 'Bank Transfer' && <Building className="w-5 h-5 text-blue-600" />}
                                        {method === 'Credit Card' && <CreditCard className="w-5 h-5 text-blue-600" />}
                                        {method === 'Cash' && <Gift className="w-5 h-5 text-blue-600" />}
                                        <span className="font-medium text-gray-700">{method}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Why Donate */}
                        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">
                                Why Your Donation Matters
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Transform Young Lives</h3>
                                        <p className="text-blue-100 text-sm">Your donation directly supports our programs that transform young minds through Christ-centered values.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Build Strong Communities</h3>
                                        <p className="text-blue-100 text-sm">Help us create Christ-centered communities that impact families and neighborhoods.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Sustainable Impact</h3>
                                        <p className="text-blue-100 text-sm">Your support ensures long-term sustainability of our ministry and programs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                What Our Supporters Say
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        "Supporting CampusGem has been one of the most rewarding experiences. Seeing young lives transformed through their programs is truly inspiring."
                                    </p>
                                    <div className="font-semibold text-gray-900">- Sarah M., Monthly Donor</div>
                                </div>

                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        "The impact CampusGem has on our community is incredible. Every donation goes directly to programs that make a real difference."
                                    </p>
                                    <div className="font-semibold text-gray-900">- John D., Supporter</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Join Us in Making a Difference
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Your generous donation helps us continue our mission of transforming young lives through Christ-centered values. Every contribution makes a difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/activities"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Learn About Our Programs
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 