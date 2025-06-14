import { siteContent } from '@/data/content';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-500 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white">LANGUAGE WATCH Foundation (LWF)</h3>
                        <p className="text-gray-300">
                            Promoting decorous and polite language use for national peace, stability and cohesion.
                        </p>
                        <div className="flex space-x-4">
                            {siteContent.contact.social.facebook && (
                                <a
                                    href={siteContent.contact.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    <Facebook className="h-6 w-6" />
                                </a>
                            )}
                            {siteContent.contact.social.twitter && (
                                <a
                                    href={siteContent.contact.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                            )}
                            {siteContent.contact.social.instagram && (
                                <a
                                    href={siteContent.contact.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    <Instagram className="h-6 w-6" />
                                </a>
                            )}
                            {siteContent.contact.social.linkedin && (
                                <a
                                    href={siteContent.contact.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            )}
                            {siteContent.contact.social.youtube && (
                                <a
                                    href={siteContent.contact.social.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    <Youtube className="h-6 w-6" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-300">{siteContent.contact.address}</li>
                            <li className="text-gray-300">{siteContent.contact.phone}</li>
                            <li className="text-gray-300">{siteContent.contact.email}</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for updates and news.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-300 font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} LANGUAGE WATCH Foundation (LWF). All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 