'use client';

import { siteContent } from '@/data/content';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "info@ywamaccra.org",
            link: "mailto:info@ywamaccra.org"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+233 20 123 4567",
            link: "tel:+233201234567"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Accra, Ghana",
            link: "https://maps.google.com/?q=Accra,Ghana"
        },
        {
            icon: Clock,
            title: "Working Hours",
            value: "Mon - Fri: 9:00 AM - 5:00 PM",
            link: null
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
                            Contact Us
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Get in touch with us for any inquiries about our Bible school programs or to learn more about our ministry. We're here to help you on your spiritual journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-700/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/40 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 font-space-grotesk">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                        placeholder="Type your message here..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-500 transition-all duration-200 disabled:opacity-50 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <Send className="w-6 h-6" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gray-700/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/40 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8 font-space-grotesk">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <div key={info.title} className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center border border-blue-500/40">
                                            <info.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{info.title}</div>
                                            {info.link ? (
                                                <a href={info.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-gray-200">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}