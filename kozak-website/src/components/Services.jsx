import React, { useState } from 'react';

const Services = ({ t }) => {
    const [activeImageIndex, setActiveImageIndex] = useState({});

    // Map of package indices to their image folders and image counts
    const packageImages = {
        0: { folder: '01-first-package', count: 2 },
        1: { folder: '02-second-package', count: 2 },
        2: { folder: '03-third-package', count: 5 },
        3: { folder: '04-fourth-package', count: 3 },
        4: { folder: '05-fifth-package', count: 3 },
        5: { folder: '06-sixth-package', count: 6 },
        6: { folder: '07-seventh-package', count: 6 },
        7: { folder: '08-eighth-package', count: 8 },
        8: { folder: '09-ninth-package', count: 4 },
        9: { folder: '10-tenth-package', count: 6 },
        10: { folder: '11-eleventh-package', count: 6 },
        11: { folder: '12-twelfth-package', count: 9 },
        12: { folder: '13-thirteenth-package', count: 4 },
        13: { folder: '14-fourteenth-package', count: 5 },
        14: { folder: '15-fifteenth-package', count: 1 },
        15: { folder: '16-sixteenth-package', count: 10 },
        16: { folder: '17-seventeenth-package', count: 19 },
    };

    const getImagePath = (packageIndex, imageNum) => {
        const pkgInfo = packageImages[packageIndex];
        if (!pkgInfo) return null;
        return `/assets/images/packages/${pkgInfo.folder}/IMG-${imageNum}.jpg`;
    };

    const handlePrevImage = (packageIndex) => {
        const pkgInfo = packageImages[packageIndex];
        if (!pkgInfo) return;
        setActiveImageIndex(prev => ({
            ...prev,
            [packageIndex]: (prev[packageIndex] || 0) === 0 ? pkgInfo.count - 1 : (prev[packageIndex] || 0) - 1
        }));
    };

    const handleNextImage = (packageIndex) => {
        const pkgInfo = packageImages[packageIndex];
        if (!pkgInfo) return;
        setActiveImageIndex(prev => ({
            ...prev,
            [packageIndex]: ((prev[packageIndex] || 0) + 1) % pkgInfo.count
        }));
    };

    return (
        <section id="services" className="py-16 section-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.services}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.packages.map((pkg, index) => {
                        const pkgInfo = packageImages[index];
                        const currentImageIdx = activeImageIndex[index] || 0;
                        
                        return (
                            <div key={index} className="package-card bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Carousel Container */}
                                {pkgInfo && pkgInfo.count > 0 ? (
                                    <div className="relative">
                                        {/* Image */}
                                        <img 
                                            src={getImagePath(index, currentImageIdx + 1)} 
                                            alt={`${pkg.alt} ${currentImageIdx + 1}`} 
                                            className="w-full h-48 object-cover" 
                                            onError={(e) => { 
                                                e.target.src = 'https://placehold.co/600x400/png?text=Image+Not+Loaded'; 
                                            }} 
                                        />
                                        
                                        {/* Navigation Arrows */}
                                        {pkgInfo.count > 1 && (
                                            <>
                                                <button 
                                                    onClick={() => handlePrevImage(index)}
                                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition"
                                                >
                                                    ◀
                                                </button>
                                                <button 
                                                    onClick={() => handleNextImage(index)}
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition"
                                                >
                                                    ▶
                                                </button>
                                            </>
                                        )}
                                        
                                        {/* Image Counter */}
                                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                                            {currentImageIdx + 1}/{pkgInfo.count}
                                        </div>
                                    </div>
                                ) : (
                                    <img 
                                        src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt={pkg.alt} 
                                        className="w-full h-48 object-cover" 
                                        onError={(e) => { 
                                            e.target.src = 'https://placehold.co/600x400/png?text=Image+Not+Loaded'; 
                                        }} 
                                    />
                                )}
                                
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold font-playfair mb-4">{pkg.title}</h3>
                                    <ul className="text-gray-600 mb-4 text-sm">
                                        {pkg.desc.map((item, i) => (
                                            <li key={i} className="mb-2">• {item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-lg font-bold text-pink-600 mb-4">{pkg.price}</p>
                                    <a href="#" className="text-blue-600 hover:underline">See Details</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;