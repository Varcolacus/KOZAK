import React from 'react';
import { assetUrl } from '../utils/assetUrl';
import { GALLERY_IMAGES } from '../data/galleryImages';

function Gallery({ t }) {
    const sectionRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    const galleryImages = React.useMemo(() => GALLERY_IMAGES.map((p) => assetUrl(p)), []);

    const [startIndex, setStartIndex] = React.useState(0);
    const [itemsPerRow, setItemsPerRow] = React.useState(3);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            if (width >= 768) return setItemsPerRow(3);
            if (width >= 640) return setItemsPerRow(2);
            return setItemsPerRow(1);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const visibleImages = React.useMemo(() => {
        const len = galleryImages.length;
        if (!len) return [];

        const maxVisible = itemsPerRow * 2;
        const count = Math.min(maxVisible, len);
        return Array.from({ length: count }, (_, i) => {
            const idx = (startIndex + i) % len;
            return { src: galleryImages[idx], idx };
        });
    }, [galleryImages, itemsPerRow, startIndex]);

    const step = Math.max(1, itemsPerRow);
    const canNavigate = galleryImages.length > itemsPerRow * 2;

    const handlePrev = () => {
        const len = galleryImages.length;
        setStartIndex((prev) => (prev - step + len) % len);
    };

    const handleNext = () => {
        const len = galleryImages.length;
        setStartIndex((prev) => (prev + step) % len);
    };

    return (
        <section id="gallery" ref={sectionRef} className={`section ${isVisible ? 'visible' : ''} py-16 section-bg`}>
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.gallery}</h2>
                <div className="relative">
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous photos"
                        className={`absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-800 rounded-full w-9 h-9 sm:w-10 sm:h-10 shadow hover:bg-gray-50 flex items-center justify-center ${canNavigate ? '' : 'opacity-40 cursor-default'}`}
                        disabled={!canNavigate}
                    >
                        <span aria-hidden="true">‹</span>
                    </button>

                    <div className="px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
                        {visibleImages.map(({ src, idx }) => (
                            <div
                                key={`${src}-${idx}`}
                                className="w-full max-w-xs h-72 sm:w-72 sm:max-w-none sm:h-96 md:w-80 md:h-112 lg:w-96 lg:h-128 bg-white rounded-lg shadow overflow-hidden flex items-center justify-center"
                            >
                                <img
                                    src={src}
                                    alt={`${t.gallery} ${idx + 1}`}
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
                        className={`absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-800 rounded-full w-9 h-9 sm:w-10 sm:h-10 shadow hover:bg-gray-50 flex items-center justify-center ${canNavigate ? '' : 'opacity-40 cursor-default'}`}
                        disabled={!canNavigate}
                    >
                        <span aria-hidden="true">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Gallery;