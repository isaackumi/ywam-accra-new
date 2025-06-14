import { siteContent } from '@/data/content';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch with us for any inquiries about our services or programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-display font-semibold text-dark-500 mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 bg-primary-50 rounded-xl mr-4">
                                        <MapPin className="h-6 w-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark-500 mb-1">Address</h4>
                                        <p className="text-gray-600">{siteContent.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-primary-50 rounded-xl mr-4">
                                        <Phone className="h-6 w-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark-500 mb-1">Phone</h4>
                                        <p className="text-gray-600">{siteContent.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 bg-primary-50 rounded-xl mr-4">
                                        <Mail className="h-6 w-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-dark-500 mb-1">Email</h4>
                                        <p className="text-gray-600">{siteContent.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-display font-semibold text-dark-500 mb-6">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                {siteContent.contact.social.facebook && (
                                    <a
                                        href={siteContent.contact.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-50 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                )}
                                {siteContent.contact.social.twitter && (
                                    <a
                                        href={siteContent.contact.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-50 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Twitter className="h-6 w-6" />
                                    </a>
                                )}
                                {siteContent.contact.social.instagram && (
                                    <a
                                        href={siteContent.contact.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-50 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                )}
                                {siteContent.contact.social.linkedin && (
                                    <a
                                        href={siteContent.contact.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-50 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Linkedin className="h-6 w-6" />
                                    </a>
                                )}
                                {siteContent.contact.social.youtube && (
                                    <a
                                        href={siteContent.contact.social.youtube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-50 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Youtube className="h-6 w-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-display font-semibold text-dark-500 mb-6">
                            Send us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                                    placeholder="Your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-500 text-white px-8 py-4 rounded-full hover:bg-primary-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 