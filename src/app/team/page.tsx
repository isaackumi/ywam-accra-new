import { siteContent } from '@/data/content';

export default function TeamPage() {
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        Our Team
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated team of spiritual leaders and ministry coordinators.
                    </p>
                </div>
                
                {/* Senior Pastor */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Senior Leadership</h3>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative h-80">
                                <img
                                    src="/images/team/senior-pastor.jpg"
                                    alt={siteContent.team.seniorPastor.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{siteContent.team.seniorPastor.name}</h3>
                                <p className="text-primary-600 font-medium mb-3">{siteContent.team.seniorPastor.title}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{siteContent.team.seniorPastor.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.team.leadership.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                                    <div className="text-6xl text-primary-600">👨‍💼</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-primary-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coordinators */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ministry Coordinators</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.team.coordinators.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                                    <div className="text-6xl text-secondary-600">👩‍💼</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-secondary-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Volunteers */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Volunteers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.team.volunteers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                                    <div className="text-6xl text-accent-600">🙋‍♀️</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-accent-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}