import React from 'react';

const Hero = ({ t }) => {
    return (
        <section id="hero-section" className="hero-bg h-screen flex items-center justify-center text-center text-white relative">
            <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">{t.title}</h1>
                <p className="text-xl md:text-2xl mb-6">{t.subtitle}</p>
                <p className="text-lg">{t.tagline}</p>
                <a href="#contact" className="mt-6 inline-block bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700">{t.cta}</a>
            </div>
        </section>
    );
};

export default Hero;