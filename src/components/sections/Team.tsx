import { siteContent } from '@/data/content';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

export default function Team() {
    return (
        <section id="team" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        Our Team
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated team of language and communication experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteContent.team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative h-80">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-display font-semibold text-dark-500 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-500 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex space-x-4">
                                    {member.social.linkedin && (
                                        <a
                                            href={member.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                        >
                                            <Linkedin className="h-6 w-6" />
                                        </a>
                                    )}
                                    {member.social.twitter && (
                                        <a
                                            href={member.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                        >
                                            <Twitter className="h-6 w-6" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 