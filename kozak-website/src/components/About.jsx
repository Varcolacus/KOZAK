import React from 'react';

const About = ({ t }) => {
    const aboutUsImages = [
        '/assets/images/gallery/about-us/IMG-20251102-WA0003.jpg',
        '/assets/images/gallery/about-us/IMG-20251102-WA0004.jpg',
        '/assets/images/gallery/about-us/IMG-20251102-WA0005.jpg',
        '/assets/images/gallery/about-us/IMG-20251102-WA0006.jpg',
        '/assets/images/gallery/about-us/IMG-20251102-WA0007.jpg',
        '/assets/images/gallery/about-us/IMG-20251102-WA0008.jpg',
    ];

    const [startIndex, setStartIndex] = React.useState(0);
    const [itemsPerView, setItemsPerView] = React.useState(3);

    React.useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            if (width >= 768) return setItemsPerView(3);
            if (width >= 640) return setItemsPerView(2);
            return setItemsPerView(1);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const visibleImages = React.useMemo(() => {
        const len = aboutUsImages.length;
        const count = Math.min(itemsPerView, len);
        return Array.from({ length: count }, (_, i) => {
            const idx = (startIndex + i) % len;
            return { src: aboutUsImages[idx], idx };
        });
    }, [aboutUsImages, itemsPerView, startIndex]);

    const handlePrev = () => {
        const len = aboutUsImages.length;
        setStartIndex((prev) => (prev - 1 + len) % len);
    };

    const handleNext = () => {
        const len = aboutUsImages.length;
        setStartIndex((prev) => (prev + 1) % len);
    };

    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.about}</h2>
                <p className="text-lg text-gray-600 mb-8">{t.aboutText}</p>

                <div className="relative mb-10">
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous photos"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-800 rounded-full w-10 h-10 shadow hover:bg-gray-50 flex items-center justify-center"
                    >
                        <span aria-hidden="true">‹</span>
                    </button>

                    <div className="mx-10 flex items-stretch gap-3 justify-center">
                        {visibleImages.map(({ src, idx }) => (
                            <div
                                key={`${src}-${idx}`}
                                className="w-72 h-96 md:w-80 md:h-112 lg:w-96 lg:h-128 bg-white rounded-lg shadow overflow-hidden flex items-center justify-center"
                            >
                                <img
                                    src={src}
                                    alt={`About us ${idx + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        e.target.src = 'https://placehold.co/600x400/png?text=Image+Not+Loaded';
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next photos"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-800 rounded-full w-10 h-10 shadow hover:bg-gray-50 flex items-center justify-center"
                    >
                        <span aria-hidden="true">›</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold font-playfair mb-2">{t.transparency}</h3>
                        <p className="text-gray-600">{t.transparencyText}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-playfair mb-2">{t.eiffelTrust}</h3>
                        <p className="text-gray-600">{t.eiffelTrustText}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-playfair mb-2">{t.multilingual}</h3>
                        <p className="text-gray-600">{t.multilingualText}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;