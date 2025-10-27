import React from 'react';

const Services = ({ t }) => {
    return (
        <section id="services" className="py-16 section-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">{t.services}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.packages.map((pkg, index) => (
                        <div key={index} className="package-card bg-white p-6 rounded-lg shadow-md">
                            <img 
                                src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                alt={pkg.alt} 
                                className="w-full h-48 object-cover rounded-t-lg mb-4" 
                                onError={(e) => { 
                                    e.target.src = 'https://placehold.co/600x400/png?text=Image+Not+Loaded'; 
                                }} 
                            />
                            <h3 className="text-xl font-semibold font-playfair mb-4">{pkg.title}</h3>
                            <ul className="text-gray-600 mb-4">
                                {pkg.desc.map((item, i) => (
                                    <li key={i} className="mb-2">• {item}</li>
                                ))}
                            </ul>
                            <p className="text-lg font-bold text-pink-600 mb-4">{pkg.price}</p>
                            <a href="#" className="text-blue-600 hover:underline">See Details</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;