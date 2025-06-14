import { siteContent } from '@/data/content';
import { Book, Mic, Languages, Radio, Users, Edit } from 'lucide-react';

const iconMap = {
    book: Book,
    mic: Mic,
    languages: Languages,
    radio: Radio,
    users: Users,
    edit: Edit,
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive language and communication services to help you excel in your professional and personal life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteContent.services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="p-4 bg-primary-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                                    <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-display font-semibold text-dark-500 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-gray-600"
                                        >
                                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 