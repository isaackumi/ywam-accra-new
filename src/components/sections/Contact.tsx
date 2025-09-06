'use client';

import { siteContent } from '@/data/content';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "info@seffcomconsult.com",
            link: "mailto:info@seffcomconsult.com"
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
        <section id="contact" className="min-h-screen flex items-center bg-background text-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-4">Get In Touch</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h2>
                        <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                            Get in touch with us for any inquiries or to schedule a consultation. We're here to help you on your spiritual journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-background border border-white/10 rounded-2xl shadow-xl p-10">
                            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-white/10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-background text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-white/10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-background text-white"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-white/10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-background text-white"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-4 rounded-xl border border-white/10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-background text-white"
                                        placeholder="Type your message here..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary bg-ywamteal hover:bg-ywamint text-background font-bold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="bg-background border border-white/10 rounded-2xl shadow-xl p-10">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <ul className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <li key={info.title} className="flex items-center gap-4">
                                        <span className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                            <info.icon className="w-5 h-5" />
                                        </span>
                                        <div>
                                            <div className="font-semibold text-white">{info.title}</div>
                                            {info.link ? (
                                                <a href={info.link} className="text-primary-400 hover:underline">{info.value}</a>
                                            ) : (
                                                <div className="text-white">{info.value}</div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 