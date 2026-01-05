import React from 'react';

const About = ({ t }) => {
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-center mb-8 font-playfair">{t.about}</h2>
                <p className="text-lg text-gray-600 mb-8">{t.aboutText}</p>
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