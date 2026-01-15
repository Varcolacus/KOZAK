import React from 'react';
import { assetUrl } from '../utils/assetUrl';

const Locations = ({ t }) => {
    const locations = t.locationsList || [];

    return (
        <section id="locations" className="py-16 section-bg">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.locations}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={assetUrl(String(loc.image || '').replace(/^\//, ''))}
                                alt={loc.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold font-playfair mb-2">{loc.title}</h3>
                                <p className="text-gray-600">{loc.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
