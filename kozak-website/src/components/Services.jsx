import React, { useState } from 'react';
import { assetUrl } from '../utils/assetUrl';

const Services = ({ t }) => {
    const [activeImageIndex, setActiveImageIndex] = useState({});
    const [lightbox, setLightbox] = useState({ open: false, packageIndex: 0, imageIndex: 0 });

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
        return assetUrl(`assets/images/packages/${pkgInfo.folder}/IMG-${imageNum}.jpg`);
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

    const openLightbox = (packageIndex, imageIndex) => {
        setLightbox({ open: true, packageIndex, imageIndex });
    };

    const closeLightbox = () => {
        setLightbox((prev) => ({ ...prev, open: false }));
    };

    const lightboxPkgInfo = packageImages[lightbox.packageIndex];
    const lightboxCount = lightboxPkgInfo?.count || 0;
    const lightboxSrc = lightboxCount
        ? getImagePath(lightbox.packageIndex, lightbox.imageIndex + 1)
        : null;

    const lightboxPrev = () => {
        if (!lightboxCount) return;
        setLightbox((prev) => ({
            ...prev,
            imageIndex: (prev.imageIndex - 1 + lightboxCount) % lightboxCount,
        }));
    };

    const lightboxNext = () => {
        if (!lightboxCount) return;
        setLightbox((prev) => ({
            ...prev,
            imageIndex: (prev.imageIndex + 1) % lightboxCount,
        }));
    };

    React.useEffect(() => {
        if (!lightbox.open) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxPrev();
            if (e.key === 'ArrowRight') lightboxNext();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightbox.open, lightboxCount]);

    return (
        <section id="services" className="py-16 section-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.services}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                            className="w-full h-64 object-cover cursor-pointer" 
                                            onClick={() => openLightbox(index, currentImageIdx)}
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
                                        className="w-full h-64 object-cover" 
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

            {lightbox.open && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeLightbox}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 h-5/6 max-h-screen flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b">
                            <div className="text-sm text-gray-700">
                                {lightboxCount ? `${lightbox.imageIndex + 1}/${lightboxCount}` : ''}
                            </div>
                            <button
                                type="button"
                                className="text-gray-700 hover:text-gray-900"
                                onClick={closeLightbox}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="relative flex-1 min-h-0 bg-white px-4 sm:px-16 py-4 sm:py-6 overflow-auto">
                            {lightboxSrc ? (
                                <img
                                    src={lightboxSrc}
                                    alt="Package photo"
                                    className="max-w-full max-h-full mx-auto object-contain"
                                />
                            ) : null}

                            <button
                                type="button"
                                onClick={lightboxPrev}
                                disabled={lightboxCount <= 1}
                                className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center shadow ${
                                    lightboxCount > 1
                                        ? 'bg-black bg-opacity-70 hover:bg-opacity-90 text-white'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                onClick={lightboxNext}
                                disabled={lightboxCount <= 1}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center shadow ${
                                    lightboxCount > 1
                                        ? 'bg-black bg-opacity-70 hover:bg-opacity-90 text-white'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                                aria-label="Next"
                            >
                                ›
                            </button>
                        </div>

                        {lightboxCount > 1 && (
                            <div className="border-t px-4 py-3">
                                <div className="flex gap-2 overflow-x-auto">
                                    {Array.from({ length: lightboxCount }, (_, i) => {
                                        const src = getImagePath(lightbox.packageIndex, i + 1);
                                        const isActive = i === lightbox.imageIndex;
                                        return (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setLightbox((prev) => ({ ...prev, imageIndex: i }))}
                                                className={`flex-none rounded-md overflow-hidden border ${
                                                    isActive ? 'border-pink-600' : 'border-gray-200'
                                                }`}
                                                aria-label={`Photo ${i + 1}`}
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Thumbnail ${i + 1}`}
                                                    className="w-16 h-16 object-cover"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;