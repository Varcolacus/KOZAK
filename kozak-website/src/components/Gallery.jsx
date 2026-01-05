import React from 'react';

function Gallery({ t }) {
    const sectionRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

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

    return (
        <section id="gallery" ref={sectionRef} className={`section ${isVisible ? 'visible' : ''} py-16 section-bg`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.gallery}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="relative">
                            <img src={`https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} alt={`${t.packages[0].alt} ${index + 1}`} className="w-full h-64 object-cover rounded-lg" onError={(e) => { e.target.src = 'https://placehold.co/600x400/png?text=Image+Not+Loaded'; console.log('Image load failed, switched to fallback'); }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;