import React from 'react';

function FAQ({ t }) {
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
        <section id="faq" ref={sectionRef} className={`section ${isVisible ? 'visible' : ''} py-16`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.faq}</h2>
                <div className="space-y-6">
                    {t.faqs.map((faq, index) => (
                        <div key={index} className="faq-item bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold font-playfair mb-2">{faq.q}</h3>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;