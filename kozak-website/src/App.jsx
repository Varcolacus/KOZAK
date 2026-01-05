import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import translations from './data/translations';

function App() {
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    return (
        <div>
            <Header t={t} language={language} setLanguage={setLanguage} />
            <Hero t={t} />
            <Services t={t} />
            <About t={t} />
            <Gallery t={t} />
            <Reviews t={t} />
            <Locations t={t} />
            <FAQ t={t} />
            <Contact t={t} />
            <Footer t={t} />
            <FloatingContact />
        </div>
    );
}

export default App;